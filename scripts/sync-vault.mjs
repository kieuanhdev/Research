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
const ASSET_EXTS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".pdf",
  ".md",
  ".html",
  ".mp4",
])
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

// Citation number -> URL, read from the first table of the note's "## Nguồn" section.
function parseSources(text) {
  const sources = new Map()
  const section = text.match(/^## Nguồn\s*\n([\s\S]*?)(?=^## |(?![\s\S]))/m)
  const table = section?.[1].match(/(?:^\|.*\n?)+/m)
  for (const row of table ? table[0].split("\n") : []) {
    const m = row.match(/^\|\s*(\d+)\s*\|.*?\]\((https?:\/\/[^)\s]+)\)/)
    if (m) sources.set(m[1], m[2])
  }
  return sources
}

// Turn citation markers like [16] into links to their source, e.g. [\[16\]](https://...).
// Code blocks and inline code are left alone.
function linkCitations(text, sources) {
  if (sources.size === 0) return text

  let inFence = false
  return text
    .split("\n")
    .map((line) => {
      if (/^\s*(```|~~~)/.test(line)) inFence = !inFence
      // skip fenced code and markdown reference definitions ("[1]: https://...")
      if (inFence || /^\s*\[\d+\]:/.test(line)) return line
      return line
        .split(/(`[^`]*`)/)
        .map((part, i) =>
          i % 2
            ? part
            : part.replace(/(?<!\[)\[(\d+)((?:, [^\]\[]+)?)\](?![(\]])/g, (whole, n, label) =>
                sources.has(n) ? `[\\[${n}${label}\\]](${sources.get(n)})` : whole,
              ),
        )
        .join("")
    })
    .join("\n")
}

// Asset pages (e.g. the Q&A analysis) get a readable title and are hidden from
// explorer/search/graph, but stay reachable through the note's link.
function asAssetPage(text, noteName) {
  const fm = `title: "Q&A đầy đủ – ${noteName.replace(/"/g, '\\"')}"\nunlisted: true\n`
  return text.startsWith("---\n") ? `---\n${fm}${text.slice(4)}` : `---\n${fm}---\n\n${text}`
}

const toCopy = new Map() // relative path -> { src, sources, parent }
for (const note of walkNotes(VAULT)) {
  const text = fs.readFileSync(note, "utf8")
  if (!isShared(text)) continue
  const sources = parseSources(text)
  const parent = path.basename(note, ".md")
  toCopy.set(path.relative(VAULT, note), { src: note, sources })
  for (const ref of referencedFiles(text)) {
    const src = path.join(VAULT, ref)
    const isBase = ref.endsWith(".base")
    if (!isBase && !ASSET_EXTS.has(path.extname(ref).toLowerCase())) continue
    if (fs.existsSync(src) && fs.statSync(src).isFile()) toCopy.set(ref, { src, sources, parent })
    else console.warn(`! missing: ${ref} (referenced by ${path.relative(VAULT, note)})`)
  }
}

const previous = fs.existsSync(MANIFEST) ? JSON.parse(fs.readFileSync(MANIFEST, "utf8")) : []
let changed = 0

for (const [rel, { src, sources, parent }] of toCopy) {
  const dest = path.join(CONTENT, rel)
  let data = fs.readFileSync(src)
  if (rel.endsWith(".md")) {
    let text = linkCitations(data.toString("utf8"), sources)
    if (parent) text = asAssetPage(text, parent)
    data = Buffer.from(text)
  }
  const same = fs.existsSync(dest) && fs.readFileSync(dest).equals(data)
  if (same) continue
  console.log(`+ ${rel}`)
  changed++
  if (!dryRun) {
    fs.mkdirSync(path.dirname(dest), { recursive: true })
    fs.writeFileSync(dest, data)
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
  const staged = execFileSync("git", ["diff", "--cached", "--name-only"], { cwd: REPO })
    .toString()
    .trim()
  if (!staged) {
    console.log("Nothing to commit.")
  } else {
    git(
      "commit",
      "-m",
      `[SYNC] Vault update ${new Date().toISOString().slice(0, 16).replace("T", " ")}`,
    )
    git("push")
  }
}
