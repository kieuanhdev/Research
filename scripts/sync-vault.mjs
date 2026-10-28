#!/usr/bin/env node
// Sync published notes from the Obsidian vault into content/.
//
// - Copies every note whose frontmatter has `share: true`, keeping its vault path.
// - Copies the assets those notes reference (`assets/<slug>/file.ext`) at the same path,
//   so Obsidian links like ![[assets/<slug>/infographic.png]] resolve in Quartz unchanged.
// - Copies .base files embedded by shared notes.
// - Removes files it synced earlier that are no longer shared/referenced.
//
// Usage: npm run sync [-- --dry-run] [-- --push]
// Vault path: $VAULT, defaults to /data/Workspace/Research

import fs from "node:fs"
import path from "node:path"
import { execFileSync } from "node:child_process"

const REPO = path.resolve(import.meta.dirname, "..")
const VAULT = path.resolve(process.env.VAULT ?? "/data/Workspace/Research")
const CONTENT = path.join(REPO, "content")
const MANIFEST = path.join(REPO, ".vault-sync.json")
const ASSET_EXTS = new Set([".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg", ".pdf", ".md", ".html", ".mp4"])
const SKIP_DIRS = new Set(["assets", "node_modules"])

const args = new Set(process.argv.slice(2))
const dryRun = args.has("--dry-run")
const push = args.has("--push")

function walkNotes(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walkNotes(full, out)
    } else if (entry.name.endsWith(".md")) {
      out.push(full)
    }
  }
  return out
}

function isShared(text) {
  const fm = text.match(/^---\r?\n([\s\S]*?)\r?\n---/)
  return !!fm && /^share:\s*["']?true["']?\s*$/m.test(fm[1])
}

function referencedFiles(text) {
  const refs = new Set()
  for (const m of text.matchAll(/assets\/[^\]|)`\s"'<>#]+/g)) refs.add(m[0])
  for (const m of text.matchAll(/!\[\[([^\]|#]+\.base)/g)) refs.add(m[1])
  return refs
}

const toCopy = new Map() // relative path -> absolute source
for (const note of walkNotes(VAULT)) {
  const text = fs.readFileSync(note, "utf8")
  if (!isShared(text)) continue
  toCopy.set(path.relative(VAULT, note), note)
  for (const ref of referencedFiles(text)) {
    const src = path.join(VAULT, ref)
    const isBase = ref.endsWith(".base")
    if (!isBase && !ASSET_EXTS.has(path.extname(ref).toLowerCase())) continue
    if (fs.existsSync(src) && fs.statSync(src).isFile()) toCopy.set(ref, src)
    else console.warn(`! missing: ${ref} (referenced by ${path.relative(VAULT, note)})`)
  }
}

const previous = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : []
let changed = 0

for (const [rel, src] of toCopy) {
  const dest = path.join(CONTENT, rel)
  const same = fs.existsSync(dest) && fs.readFileSync(dest).equals(fs.readFileSync(src))
  if (same) continue
  console.log(`+ ${rel}`)
  changed++
  if (!dryRun) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.copyFileSync(src, dest)
  }
}

for (const rel of previous) {
  if (toCopy.has(rel)) continue
  const dest = path.join(CONTENT, rel)
  if (!fs.existsSync(dest)) continue
  console.log(`- ${rel}`)
  changed++
  if (!dryRun) fs.rmSync(dest)
}

if (dryRun) {
  console.log(`\nDry run: ${changed} change(s), nothing written.`)
  process.exit(0)
}

fs.writeFileSync(MANIFEST, JSON.stringify([...toCopy.keys()].sort(), null, 2) + "\n")
console.log(`\nSynced ${toCopy.size} file(s) from ${VAULT}, ${changed} change(s).`)

if (push) {
  const git = (...a) => execFileSync("git", a, { cwd: REPO, stdio: "inherit" })
  git("add", "content", ".vault-sync.json")
  const staged = execFileSync("git", ["diff", "--cached", "--name-only"], { cwd: REPO }).toString().trim()
  if (!staged) {
    console.log("Nothing to commit.")
  } else {
    git("commit", "-m", `[SYNC] Vault update ${new Date().toISOString().slice(0, 16).replace("T", " ")}`)
    git("push")
  }
}
