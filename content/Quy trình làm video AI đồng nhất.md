---
type: tech-research
topic: Quy trình làm video AI đồng nhất (nhân vật, phong cách, ánh sáng) và đẹp
queries:
  youtube:
    - AI video consistent character workflow
    - AI filmmaking workflow 2026
    - consistent AI video Veo Kling Runway workflow
    - ComfyUI Wan consistent character video
  hn:
    - AI video generation
    - Veo 3
    - Kling AI
    - Runway Gen-4
    - Sora 2
    - Wan 2.2
  reddit:
    - site:reddit.com consistent character AI video workflow Kling Veo Runway
    - site:reddit.com/r/aivideo OR r/StableDiffusion AI short film workflow consistency storyboard image-to-video
    - reddit r/aivideo how do you keep characters consistent across shots workflow
    - site:reddit.com aivideo "character consistency" workflow Nano Banana Kling
    - site:reddit.com r/filmmakers OR r/aivideo AI short film color grading upscale
  web:
    - AI video production workflow consistent characters 2026 guide image-to-video storyboard
    - Runway Gen-4 References consistent characters documentation
    - Google Flow Veo 3 ingredients to video consistent characters documentation
    - Kling AI elements multi-image reference consistent character guide
    - Kling 3.0 Omni elements subject library multi-shot official
    - Seedance 2.0 reference images multi-shot consistency official guide
    - Wan 2.2 open source video model license ComfyUI official docs
  arxiv:
    - '"consistent video generation" character (lỗi HTTP 400)'
    - multi-shot video generation character consistency
date: 2026-10-28
notebook_id: 5a639f25-70b6-4d12-a242-7aa11687d9d1
sources:
  total: 27
  youtube: 10
  community: 11
  docs: 4
  research: 3
deliverables:
  - infographic
language: vi
author: Opus 5.5
reviewer: Kieu Anh
tags:
  - research
  - tech
  - ai-video
  - filmmaking
share_link: https://share.note.sx/wayoeszw
share_updated: 2026-10-28T08:37:09+07:00
share: "true"
---

# Quy trình làm video AI đồng nhất

**Người thực hiện:** Opus 5.5 (Ban Research) · **Người review:** Kieu Anh

> **Câu hỏi nghiên cứu:** "Quy trình làm video AI: nên làm theo workflow nào để có thể đồng nhất video cũng như video đẹp như mong muốn của tôi."

## Tóm tắt để ra quyết định

- **Khoá ảnh tĩnh trước, sau đó mới tạo video.** Phải có shot list, character sheet nhiều góc, ảnh bối cảnh (environment plate), đạo cụ và một "style block" cố định. Từ đó tạo keyframe cho từng shot rồi mới chạy image-to-video hoặc reference-to-video. Không dựng phim bằng text-to-video thuần. **Tin cậy: Cao.** Cộng đồng Reddit [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/)[\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/), các YouTuber [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM)[\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE)[\[4\]](https://www.youtube.com/watch?v=f4HcdR3cd4M)[\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g)[\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg), nhà cung cấp [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026) và nghiên cứu arXiv [\[26\]](https://arxiv.org/abs/2605.15199v1)[\[27\]](https://arxiv.org/abs/2605.23508v2) đều đi đến cùng kết luận này.
- **Làm phim theo từng shot ngắn, chấp nhận nhiều lần tạo.** Mỗi clip 5–8 giây, tối đa 15 giây với Kling 3.0 Omni. Mỗi shot cần 2–3 lần tạo, cảnh khó còn nhiều hơn nhiều; một người dùng Reddit nói tỉ lệ khoảng 50:1 [\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/). Nối cảnh bằng frame cuối của clip trước, hoặc bằng start/end frame hay video reference. **Tin cậy: Cao** về hướng làm. Các con số "tỉ lệ dùng được" chỉ ở mức **Thấp**, vì chủ yếu do nhà cung cấp tự báo cáo [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
- **Chọn một bộ công cụ chính và dùng cơ chế tham chiếu sẵn có của nó cho cả dự án.** Trên cloud, Kling 3.0 Omni có tài liệu rõ nhất: Elements, multi-shot, gắn giọng, tối đa 7 ảnh tham chiếu và clip 15 giây (docs chính thức). Google Flow có Ingredients, Frames và Scenebuilder, dùng được ở Việt Nam (docs chính thức). Nếu chạy trên máy, dùng ComfyUI + Wan 2.2: giấy phép Apache 2.0, có chế độ First-Last-Frame, kết hợp LoRA nhân vật. **Tin cậy: Trung bình.** Chưa có benchmark độc lập so sánh độ nhất quán giữa các model, nên "model nào tốt nhất" vẫn là ý kiến.
- **"Đẹp" và "đồng nhất" là hai bài toán khác nhau, phải kiểm tra riêng.** EntityBench [\[26\]](https://arxiv.org/abs/2605.15199v1) cho thấy độ giữ nhận diện nhân vật giảm khi nhân vật quay lại sau nhiều shot. Ví dụ HoloCine giảm từ 0.765 (cách 1–2 shot) xuống 0.420 (cách 11–20 shot). Vì vậy, đặt các clip cạnh nhau để soi khuôn mặt và trang phục, đừng chỉ nhìn độ nét. **Tin cậy: Trung bình.** Đây là một nghiên cứu, đo trên model nghiên cứu chứ không phải Kling hay Veo.
- **Thống nhất màu ở hậu kỳ bằng một hero frame chung.** Trình tự: chuẩn hoá cân bằng trắng và tông da, khớp mọi clip theo hero frame, áp một LUT chung, thêm grain nhẹ. **Tin cậy: Thấp–Trung bình.** Công thức chi tiết (blur 0.3–0.6px, grain 8–15%, LUT 60–80%) chỉ có trong bài của invideo [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/), một nhà cung cấp. Ý "khớp với clip hero rồi áp LUT chung" thì có thêm AI Magicx [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026), cũng là nhà cung cấp.

## Phân tích

### 1. Vì sao video AI bị "trôi"

Model video không nhớ clip trước, nên mỗi lần tạo là một lần đoán lại từ đầu. AI Magicx [\[18, nhà cung cấp\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026) mô tả hiện tượng này. Người dùng Reddit cũng gặp đúng điều đó: nhân vật "làm bất cứ gì chúng muốn" [\[23, cộng đồng\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/). Video-to-video "vỡ" khi chuyển động mạnh, camera di chuyển nhiều hoặc góc mặt thay đổi [\[24, cộng đồng\]](https://www.reddit.com/r/generativeAI/comments/1tb9ugx/).

Nghiên cứu nói rõ hơn ở hai điểm:

- **Càng xa càng trôi.** Theo EntityBench [\[26, nghiên cứu\]](https://arxiv.org/abs/2605.15199v1), nhân vật càng cách lần xuất hiện trước nhiều shot thì độ khớp nhận diện càng giảm. Model có "bộ nhớ thực thể" (EntityMem) giảm chậm hơn: từ 0.744 xuống khoảng 0.65–0.67. HoloCine giảm từ 0.765 xuống 0.420. Lưu ý: số mẫu ở các khoảng cách xa khá ít, ví dụ chỉ 15 mẫu cho HoloCine ở khoảng 11–20.
- **Dùng cả khung hình cũ làm tham chiếu thì nền và ánh sáng cũ sẽ "dính" vào nhân vật.** Nên tách riêng chân dung nhân vật khỏi nền [\[26\]](https://arxiv.org/abs/2605.15199v1). Phát hiện này khớp với mẹo thực tế của Dan Kieft [\[1, nhà cung cấp\]](https://www.youtube.com/watch?v=e9ZupmL9BcM): character sheet nền **xám trung tính** cho ảnh không bị cháy sáng như nền trắng. Mẹo đó có trong transcript và đã đối chiếu.

### 2. Quy trình đề xuất (tổng hợp từ các nguồn)

| Bước                    | Làm gì                                                                                                                                                                                       | Khoá cái gì                                | Nguồn                                                          |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | -------------------------------------------------------------- |
| 0. Định nghĩa "đẹp"     | Viết **style block**: ánh sáng, bảng màu, ống kính, chất liệu (ví dụ "painterly, soft natural lighting"). Chọn 1–2 ảnh moodboard làm chuẩn                                                   | Style block, tỉ lệ khung hình              | [\[15\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film) cộng đồng, [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/) nhà cung cấp                              |
| 1. Kịch bản → shot list | Dùng LLM viết kịch bản rồi chuyển thành shot list hoặc "shot bible". Mỗi shot ghi thời lượng, cỡ cảnh, góc máy, chuyển động camera, ánh sáng, lời thoại                                      | Shot list                                  | [\[15\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film), [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/) cộng đồng, [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026) nhà cung cấp, [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM)               |
| 2. Tài sản tham chiếu   | **Character sheet** nhiều góc (trước, 3/4, nghiêng, sau, cận mặt), nền xám. Ảnh **toàn thân mặc đúng trang phục**. **Environment plate** (bối cảnh không có người). **Đạo cụ** riêng         | Nhân vật, trang phục, bối cảnh, đạo cụ     | [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM)[\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE)[\[4\]](https://www.youtube.com/watch?v=f4HcdR3cd4M)[\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g) YouTube, [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026)                                 |
| 3. Keyframe từng shot   | Dùng model ảnh (Nano Banana, GPT-Image, FLUX…) cùng các tham chiếu ở bước 2 để tạo ảnh mở đầu cho từng shot. Shot khó thì làm cả **start + end frame**. Duyệt ảnh trước khi tốn credit video | Bố cục từng shot                           | [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg)[\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE)[\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g), [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/) ("tạo keyframe trước để thử"), [\[27\]](https://arxiv.org/abs/2605.23508v2) nghiên cứu |
| 4. Tạo video            | Chạy image-to-video hoặc reference-to-video trên **một model chính**. Clip 5–8 giây, 2–3 lần tạo mỗi shot. Thử trước ở độ phân giải thấp (480p) rồi mới làm 1080p                            | Model, tham chiếu, seed (nếu model hỗ trợ) | [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM) (480p trước), [\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg), [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026), [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/)                          |
| 5. Nối cảnh             | Lấy **frame cuối** của clip trước làm start frame cho clip sau. Hoặc đưa clip trước vào ô **video reference** (Seedance), hoặc dùng **Extend** (Flow)                                        | Liên tục hành động và ánh sáng             | [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg)[\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE)[\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g), [\[12\]](https://support.google.com/flow/answer/16353334?hl=en) docs, [\[13\]](https://docs.comfy.org/tutorials/video/wan/wan2_2) docs                                |
| 6. Review               | Đặt các clip kề nhau để soi mặt, tóc, trang phục; tạo lại clip lỗi                                                                                                                           | —                                          | [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026), [\[26\]](https://arxiv.org/abs/2605.15199v1)                                                     |
| 7. Dựng                 | Cắt phần lỗi ở đầu và cuối clip (Veo: khoảng 10 frame [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g)), cắt trên chuyển động, chèn cutaway. Âm thanh là **một pipeline riêng**, hoặc gắn giọng cho nhân vật nếu công cụ hỗ trợ           | —                                          | [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g), [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026), [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/), [\[11\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)[\[12\]](https://support.google.com/flow/answer/16353334?hl=en) docs                                 |
| 8. Màu và hoàn thiện    | Chuẩn hoá bằng scope, khớp theo hero frame, áp một LUT chung, thêm grain. Nếu cần upscale thì làm trước khi chỉnh màu                                                                        | Tông da, độ tương phản, màu bóng           | [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026) nhà cung cấp                                          |

Lưu ý khi áp dụng:

- **Character tag chỉ khoá khuôn mặt, không khoá trang phục.** Isa [\[3, nhà cung cấp, affiliate OpenArt\]](https://www.youtube.com/watch?v=dOmKYJoRboE) nhấn mạnh rằng thẻ nhân vật đã lưu "locks her face but it does not lock her outfit". Vì vậy cần thêm ảnh toàn thân mặc đúng trang phục làm tham chiếu thứ hai.
- **Hai nhân vật cùng nói trong một cảnh** thường khiến cả hai cùng nhép môi [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g). Cách tránh là tách thành các shot cận từng người. Nhiều nhân vật đứng chung khung hình dễ bị "trộn" đặc điểm của nhau. Cách xử lý là dùng bounding box (Ideogram 4 trong workflow của Mickmumpitz [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w)) hoặc mỗi nhân vật một LoRA riêng.
- **Phụ kiện nhỏ hay biến mất** (dây chuyền, kính). Cách xử lý là cắt riêng ảnh phụ kiện làm tham chiếu phụ [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg)[\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE).

### 3. Giữ ánh sáng và màu đồng nhất

- **Lúc tạo:** gắn style block vào mọi prompt [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/). Dùng chung environment plate cho các shot trong cùng một bối cảnh [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/)[\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE). Giữ một model chính để tránh lệch tông da giữa các model [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026). Tạo mọi ảnh tham chiếu đúng tỉ lệ khung hình của video [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
- **Hậu kỳ (công thức của invideo [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/), nhà cung cấp):**
  1. Waveform và vectorscope: đưa da về skin line, điểm đen và trắng trong khoảng 0–100.
  2. Chọn **hero frame** và khớp các clip khác với nó.
  3. LUT phim (Kodak 2383, Fuji 3510…) ở 60–80%.
  4. Gaussian blur 0.3–0.6px để bớt độ "nét giả, da nhựa".
  5. Grain 35mm/16mm ở 8–15%.

  Đây là kỹ thuật chỉnh màu tiêu chuẩn nên khó sai về hướng. Các con số cụ thể chỉ là điểm xuất phát, không phải giá trị đã kiểm chứng.

### 4. Chọn công cụ: cloud hay chạy trên máy

- **Cloud, dễ bắt đầu:**
  - **Kling 3.0 Omni** có tài liệu đầy đủ nhất về các cơ chế giữ nhất quán. Elements tạo từ tối đa 4 ảnh nhiều góc hoặc video 3–8 giây. Có multi-shot với thời lượng từng shot trong một lần tạo tối đa 15 giây, có gắn giọng cho nhân vật [\[11, docs\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide). Một bình luận HN (2025) nói Kling "dominated" các video được upvote [\[21, cộng đồng\]](https://news.ycombinator.com/item?id=43536085), nhưng đó là bình luận cũ.
  - **Google Flow** có Ingredients (ảnh hoặc video tham chiếu, gọi bằng `@`), Frames (start/end), Extend (chỉ cho clip do Veo tạo), Scenebuilder để ghép clip, và `@Voice` để giữ giọng [\[12, docs\]](https://support.google.com/flow/answer/16353334?hl=en).
  - **Runway**: Gen-4.5 cho text/image-to-video, Gen-4 Image tạo ảnh từ tham chiếu, Aleph 2.0 cho video-to-video [\[14, docs\]](https://docs.dev.runwayml.com/guides/models/). Tuy nhiên video có liên quan đến Runway trong bộ nguồn đều là nội dung của Runway [\[9\]](https://www.youtube.com/watch?v=TM8hd2lnrEk) hoặc do Runway tài trợ [\[6\]](https://www.youtube.com/watch?v=WKO-YgMQhLI).
  - **Seedance 2.0** được nhiều YouTuber khen về reference-to-video và nối cảnh bằng video reference [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE)[\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), nhưng cả hai video này đều có affiliate hoặc mã giảm giá.
- **Chạy trên máy (local):**
  - **ComfyUI + Wan 2.2**: Apache 2.0, bản 5B chạy được trên 8GB VRAM, có workflow First-Last-Frame [\[13, docs\]](https://docs.comfy.org/tutorials/video/wan/wan2_2).
  - Nhân vật được giữ bằng LoRA tự train, theo YouTube khoảng 15–30 ảnh [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w)[\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
  - Ưu điểm: không bị kiểm duyệt nội dung. Một người làm phim zombie trên HN (2025) phàn nàn rằng ngay cả prompt có máu me cũng bị chặn trên dịch vụ cloud [\[21\]](https://news.ycombinator.com/item?id=43536085).
  - Nhược điểm: tốn công thiết lập.
- **Lưu ý về Veo:** các model **Veo 3.1 Preview trên Gemini API** đã ngừng ngày 22/10/2026. Google hướng người dùng sang Gemini Omni Flash, còn bản GA vẫn có trên Gemini Enterprise Agent Platform (docs chính thức, [ai.google.dev](https://ai.google.dev/gemini-api/docs/video), kiểm tra ngày 28/10/2026). Trong Flow, Omni Flash đã là model cho voice reference và chỉnh sửa video [\[12\]](https://support.google.com/flow/answer/16353334?hl=en). Các video hướng dẫn "Veo + Flow" có thể không còn đúng với giao diện hiện tại, nên kiểm tra danh sách model trong Flow trước khi làm theo.

### 5. Các loại nguồn bất đồng ở đâu

| Chủ đề | Nhà cung cấp / YouTuber có lợi ích | Cộng đồng / nghiên cứu |
|---|---|---|
| Mức nhất quán thực tế | AI Magicx tự chấm Kling 3.0 giữ nhận diện "90%+" clip, tỉ lệ dùng được 50–70% [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026). AI Video School nói "the consistent character problem is a thing of the past" [\[4\]](https://www.youtube.com/watch?v=f4HcdR3cd4M) | Reddit: tỉ lệ khoảng 50:1 với cảnh khó [\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/), video-to-video "vỡ" khi chuyển động nhiều [\[24\]](https://www.reddit.com/r/generativeAI/comments/1tb9ugx/). arXiv: độ nhất quán giảm theo khoảng cách giữa các shot [\[26\]](https://arxiv.org/abs/2605.15199v1) |
| Mã nguồn mở có đủ tốt? | Mickmumpitz [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w): model mở "rivaling and even surpassing" công cụ đóng (kênh bán workflow qua Patreon) | Reddit: "NO open-source AI platform will deliver… broadcast quality" (*không nền tảng mã nguồn mở nào đạt chất lượng phát sóng*) [\[24\]](https://www.reddit.com/r/generativeAI/comments/1tb9ugx/). HN 2025: công cụ đóng của Google/Runway "a league above" (*hơn hẳn một bậc*) [\[19\]](https://news.ycombinator.com/item?id=44044043), nhưng Wan được xem là lựa chọn mở mạnh [\[20\]](https://news.ycombinator.com/item?id=44928997) |
| Model nào tốt nhất | Mỗi YouTuber đẩy công cụ mình có affiliate (Higgsfield [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg)[\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg), OpenArt [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE)) | Không có benchmark độc lập trong bộ nguồn. Video so sánh 4 model [\[8\]](https://www.youtube.com/watch?v=-MluR9dqt5w) chỉ chạy prompt cho xem kết quả, không đo |
| Chi phí | invideo: khoảng $315–750 mỗi phút thành phẩm; tập 3 phút dùng 41/164 clip [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/) (tự báo cáo) | Reddit: một người làm video 17 phút mất khoảng 2 tháng [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/). HN 2025: hết hạn mức video sau 2 prompt dù có gói Google AI Pro [\[19\]](https://news.ycombinator.com/item?id=44044043) |

**Các kết luận chỉ dựa trên một nguồn:**

- Cắt khoảng 10 frame ở cuối clip Veo [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).
- Mẹo nền xám cho character sheet [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
- Ảnh panorama 3:1 cắt ra nhiều góc máy cho cùng một bối cảnh. Mẹo này đến từ EntityBench [\[26\]](https://arxiv.org/abs/2605.15199v1) (pipeline nghiên cứu), chưa thấy creator nào xác nhận.
- Toàn bộ công thức chỉnh màu [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/).

**Những điểm NotebookLM nêu nhưng không có trong trích dẫn**, nên đã loại khỏi báo cáo:

- "Đốt hơn $1,000 credit"
- Link affiliate RunPod
- ProRes/HDR
- "MoE 27B"
- Các số 79.6%, 0.327 và 0.740 của CineTrans/EntityMem
- Lời chê "Sora 2". Bình luận HN thực ra nói về Sora bản đầu (năm 2025).

### 6. Rủi ro và khoảng trống

- **Kiểm duyệt nội dung:** dịch vụ cloud có thể chặn cảnh bạo lực, máu me [\[21\]](https://news.ycombinator.com/item?id=43536085); một người trên Reddit cũng gặp giới hạn kiểm duyệt [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/).
- **Bản quyền:** trên HN [\[19\]](https://news.ycombinator.com/item?id=44044043) chỉ có người dùng *nhớ là* có phán quyết rằng nội dung do AI tạo hoàn toàn không được bảo hộ bản quyền. Đây không phải nguồn pháp lý, cần tự tra luật nếu làm thương mại.
- **Lip-sync:** Kling đôi khi bị lệch tiếng, Dan Kieft xử lý bằng cách dời audio sớm vài frame [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg). Shot có hai nhân vật nói thì xem ở mục 2.
- **Deepfake:** khả năng giữ nhân vật nhất quán cũng có thể bị lạm dụng để giả mạo người thật. EntityBench [\[26\]](https://arxiv.org/abs/2605.15199v1) có cảnh báo về điều này.
- **Thiếu trong bộ nguồn:**
  - Đánh giá độc lập về **Sora 2** (thread HN về Sora 2 có trong kết quả tìm kiếm nhưng không được nạp).
  - **Higgsfield** chỉ xuất hiện qua chính kênh của Higgsfield hoặc qua link giảm giá.
  - **Midjourney** chỉ được nhắc ở khâu ảnh concept [\[6\]](https://www.youtube.com/watch?v=WKO-YgMQhLI)[\[15\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film).
  - Không có nguồn nào đo độ nhất quán của Kling, Veo, Runway và Seedance bằng cùng một phương pháp.

## Bảng hỗ trợ

Kiểm tra trên trang chính thức ngày 28/10/2026. "chưa xác nhận" nghĩa là không tìm thấy trên trang chính thức. Có thể hiểu là chưa kiểm được, không phải là không có tính năng.

| Công cụ | Cơ chế tham chiếu & giới hạn | Thời lượng / lần tạo | Start–end frame | Multi-shot trong 1 lần | Gắn giọng nhân vật | Miễn phí | Tự host / giấy phép | Dùng ở Việt Nam |
|---|---|---|---|---|---|---|---|---|
| **Kling 3.0 Omni** | Elements: tối đa 4 ảnh nhiều góc, hoặc video 3–8 giây. Tối đa 7 ảnh, hoặc 4 ảnh + 1 video 3–10 giây ([docs](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)) | 15 giây ([docs](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)) | Có ([docs](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)) | Có, đặt thời lượng và góc máy cho từng shot ([docs](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)) | Có, audio 5–30 giây ([docs](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)) | chưa xác nhận (các nguồn bên thứ ba mâu thuẫn: 66 credit/ngày hoặc không có credit cố định) | Không, chỉ cloud | chưa xác nhận |
| **Google Flow** (Veo / Omni Flash) | Ingredients: ảnh/video tham chiếu, `@nhân vật`. Số lượng tối đa chưa xác nhận ([docs](https://support.google.com/flow/answer/16353334?hl=en)) | chưa xác nhận | Có, Frames ([docs](https://support.google.com/flow/answer/16353334?hl=en)) | Không trong 1 lần. Ghép bằng Scenebuilder, Extend chỉ cho clip Veo ([docs](https://support.google.com/flow/answer/16935718?hl=en)) | Có, `@Voice`, chỉ khi dùng Ingredients ([docs](https://support.google.com/flow/answer/16353334?hl=en)) | chưa xác nhận | Không, chỉ cloud | Có ([docs](https://support.google.com/flow/answer/16353544?hl=en)) |
| **Runway** (Gen-4.5, Gen-4 Image, Aleph 2.0) | Gen-4 Image tạo ảnh từ tham chiếu ([docs](https://docs.dev.runwayml.com/guides/models/)). Số ảnh tối đa chưa xác nhận (trang help trả 403) | chưa xác nhận | chưa xác nhận | chưa xác nhận | chưa xác nhận | Có: 125 credit một lần. Gen-4.5 chỉ có ở gói trả phí, 60 credit/5 giây ([pricing](https://runway.com/pricing)) | Không, chỉ cloud | chưa xác nhận |
| **Seedance 2.0** (ByteDance) | Tham chiếu bằng ảnh, audio, video. Số lượng chưa xác nhận ([trang chính thức](https://seed.bytedance.com/en/seedance2_0)) | chưa xác nhận | chưa xác nhận | chưa xác nhận | Tạo audio và video cùng lúc ([trang chính thức](https://seed.bytedance.com/en/seedance2_0)) | chưa xác nhận | Không. Dùng qua Dola, BytePlus Playground hoặc API | chưa xác nhận |
| **Wan 2.2** (qua ComfyUI) | Image-to-video từ ảnh đầu; nhân vật giữ bằng LoRA hoặc custom node (theo cộng đồng, không có trong docs) ([docs](https://docs.comfy.org/tutorials/video/wan/wan2_2)) | chưa xác nhận | Có, workflow FLF2V ([docs](https://docs.comfy.org/tutorials/video/wan/wan2_2)) | Không | Không | Có, mã nguồn mở | Có. Apache 2.0, bản 5B chạy trên 8GB VRAM ([docs](https://docs.comfy.org/tutorials/video/wan/wan2_2)) | Có, chạy trên máy |

## Số liệu áp dụng

| Công cụ | Sao GitHub | Push gần nhất | Issue + PR mở | Lượt tải 30 ngày | Ngày lấy |
|---|---|---|---|---|---|
| Wan 2.2 | 18.2K | 2026-09-21 | 326 | không có dữ liệu | 2026-10-28 |
| ComfyUI | 143.6K | 2026-10-28 | 5370 | comfyui-frontend-package (PyPI): không có dữ liệu | 2026-10-28 |
| LTX-Video | 11.2K | 2026-01-05 | 104 | không có dữ liệu | 2026-10-28 |
| Kling 3.0 | không có dữ liệu | không có dữ liệu | không có dữ liệu | không có dữ liệu | 2026-10-28 |
| Google Flow (Veo 3.1 / Omni Flash) | không có dữ liệu | không có dữ liệu | không có dữ liệu | không có dữ liệu | 2026-10-28 |
| Runway Gen-4.5 | không có dữ liệu | không có dữ liệu | không có dữ liệu | runwayml (PyPI): 218.2K | 2026-10-28 |
| Seedance 2.0 | không có dữ liệu | không có dữ liệu | không có dữ liệu | không có dữ liệu | 2026-10-28 |

Các công cụ cloud không có số liệu mã nguồn để đo. ComfyUI rất phổ biến (143.6K sao, vẫn cập nhật hằng ngày), nhưng số sao đo mức độ được chú ý chứ không đo chất lượng video. Lượt tải SDK `runwayml` cho thấy có người dùng Runway qua API, không nói lên mức độ dùng để làm phim.

## Thử nhanh

Tổng hợp từ tài liệu chính thức, chưa chạy thử.

**A. Kling 3.0 Omni (cloud)** — [hướng dẫn chính thức](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide)
1. Chuẩn bị tối đa 4 ảnh nhân vật ở nhiều góc (trước, nghiêng, sau, cận), mỗi ảnh ≥300px, ≤10MB, định dạng .jpg hoặc .png. Có thể thay bằng một video 3–8 giây quay nhân vật từ nhiều góc.
2. Tạo **Element** nhân vật: đặt tên, mô tả. Muốn gắn giọng thì thêm audio 5–30 giây của một người nói, giọng rõ, cảm xúc đều.
3. Mở VIDEO 3.0 Omni và chọn **Custom multi-shot**. Gọi nhân vật bằng thẻ `@` trong prompt và ghi rõ từng shot, ví dụ "Shot 1 (3s): cận mặt…, Shot 2 (4s): toàn cảnh…". Tổng tối đa 15 giây.
4. Thử ở 720p trước: 6 credit/giây khi tắt audio, 9 credit/giây khi bật. Ưng rồi mới chạy 1080p: 8 hoặc 12 credit/giây.

**B. ComfyUI + Wan 2.2 (chạy trên máy)** — [docs ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2)
1. Cập nhật ComfyUI, mở **Workflow → Browse Templates → Video → "Wan 2.2 Image to Video"**. Template sẽ hướng dẫn tải model. Máy 8GB VRAM dùng bản TI2V-5B. Bản 14B cần hai model high-noise và low-noise, VAE `wan_2.1_vae` và text encoder `umt5_xxl_fp8`.
2. Đưa keyframe (đã tạo bằng model ảnh với tham chiếu nhân vật) vào node `Load Image`, viết prompt rồi bấm Run (Ctrl/Cmd + Enter).
3. Để nối cảnh, dùng workflow **First-Last-Frame** (`WanFirstLastFrameToVideo`): frame đầu là frame cuối của clip trước, frame cuối là keyframe của shot tiếp theo. Tăng độ phân giải lên khoảng 720P nếu VRAM cho phép.

## Kết luận & khuyến nghị

1. **Viết "bible" trước khi tạo bất cứ thứ gì.** Gồm style block, shot list, character sheet nền xám, ảnh trang phục toàn thân, environment plate cho từng bối cảnh và ảnh đạo cụ. Lưu tất cả trong một thư mục dự án và dùng lại ở mọi lượt tạo.
2. **Chọn một con đường và giữ nó suốt dự án:**
   - Muốn nhanh, ít kỹ thuật: dùng **Kling 3.0 Omni**, gồm Elements, multi-shot và gắn giọng.
   - Đã dùng hệ sinh thái Google: dùng **Google Flow**, gồm Ingredients, Frames và Scenebuilder.
   - Muốn chủ động, không bị kiểm duyệt, có GPU: dùng **ComfyUI + Wan 2.2 + LoRA nhân vật**.

   Không nên trộn nhiều model video trong cùng một cảnh.
3. **Duyệt bằng ảnh, rồi mới chạy video.** Keyframe phải đạt mới animate. Thử ở độ phân giải thấp, dự trù 2–3 lần tạo mỗi shot và vài chục lần cho cảnh khó.
4. **Nối cảnh có chủ đích:** dùng frame cuối của clip trước, start/end frame hoặc video reference. Kết hợp cắt trên chuyển động và chèn cutaway để giấu chỗ nối.
5. **Kiểm tra độ nhất quán riêng với độ đẹp.** Xem các clip cạnh nhau theo từng nhân vật; nhân vật càng lâu mới xuất hiện lại thì càng cần soi kỹ.
6. **Hoàn thiện màu bằng một hero frame chung và một LUT chung.** Coi các thông số blur và grain của invideo là điểm khởi đầu để tự chỉnh.
7. **Kiểm tra lại giao diện công cụ trước khi làm theo video hướng dẫn.** Model đổi rất nhanh: Veo 3.1 Preview trên API đã ngừng ngày 22/10/2026, Kling đã lên bản 3.0.

## Nguồn

| # | Loại | Nhãn | Nguồn | Đơn vị / tác giả | NotebookLM |
|---|---|---|---|---|---|
| 1 | youtube | Nhà cung cấp | [Master AI Filmmaking in 30 Minutes - Advanced AI Video Course](https://www.youtube.com/watch?v=e9ZupmL9BcM) | Dan Kieft | ready |
| 2 | youtube | Nhà cung cấp | [How To Create Long AI Animation Videos With Consistent Characters - Kling 3.0](https://www.youtube.com/watch?v=0CjArtUh_Wg) | Dan Kieft | ready |
| 3 | youtube | Nhà cung cấp | [How to Make Long AI Videos with Consistent Characters (2026)](https://www.youtube.com/watch?v=dOmKYJoRboE) | Isa does AI | ready |
| 4 | youtube | Cộng đồng | [Consistent Character Sheets in Nano Banana (Prompts Included!)](https://www.youtube.com/watch?v=f4HcdR3cd4M) | AI Video School | ready |
| 5 | youtube | Nhà cung cấp | [My AI Filmmaking Workflow: Kling, Veo & Nano Banana](https://www.youtube.com/watch?v=31GR1pXlB1g) | AI Video School | ready |
| 6 | youtube | Nhà cung cấp | [This Cinematic AI Film Workflow Changes Everything](https://www.youtube.com/watch?v=WKO-YgMQhLI) | Theoretically Media | ready |
| 7 | youtube | Cộng đồng | [EXACTLY How to Make an AI Short Film (Full Workflow)](https://www.youtube.com/watch?v=0v534yAyhwg) | Youri van Hofwegen | ready |
| 8 | youtube | Cộng đồng | [Kling 3.0 vs Seedance 2.0 vs Veo 3.1 vs Sora 2: The Ultimate AI Video Comparison](https://www.youtube.com/watch?v=-MluR9dqt5w) | Dom the AI Tutor | ready |
| 9 | youtube | Nhà cung cấp | [Creating an AI Short Film (Full Workflow) \| Runway](https://www.youtube.com/watch?v=TM8hd2lnrEk) | Runway | ready |
| 10 | youtube | Cộng đồng | [Create HYPERREALISTIC AI Characters That INTERACT \| FREE & LOCAL](https://www.youtube.com/watch?v=ghFYDG0DF1w) | Mickmumpitz | ready |
| 11 | web | Tài liệu chính thức | [Kling VIDEO 3.0 Omni Model User Guide](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide) | Kling AI | ready |
| 12 | web | Tài liệu chính thức | [Google Flow Help: Create videos / Edit videos & build scenes](https://support.google.com/flow/answer/16353334?hl=en) | Google | ready |
| 13 | web | Tài liệu chính thức | [Wan2.2 Video Generation in ComfyUI](https://docs.comfy.org/tutorials/video/wan/wan2_2) | ComfyUI | ready |
| 14 | web | Tài liệu chính thức | [Runway API: Models](https://docs.dev.runwayml.com/guides/models/) | Runway | ready |
| 15 | web | Cộng đồng | [How I Created an Animated Short Film Using AI — From Script to Screen in 8 Steps](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film) | Shweta Kaushal (Substack) | ready |
| 16 | web | Nhà cung cấp | [What is the best workflow for going from storyboard to video?](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/) | invideo | ready |
| 17 | web | Nhà cung cấp | [What is the best color grading workflow for AI-generated video?](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/) | invideo | ready |
| 18 | web | Nhà cung cấp | [How to Make a 15-Minute AI Video with Character Consistency](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026) | AI Magicx | ready |
| 19 | hn | Cộng đồng | [Veo 3 and Imagen 4, and a new tool for filmmaking called Flow](https://news.ycombinator.com/item?id=44044043) | Hacker News | ready |
| 20 | hn | Cộng đồng | [Wan – Open-source alternative to VEO 3](https://news.ycombinator.com/item?id=44928997) | Hacker News | ready |
| 21 | hn | Cộng đồng | [Runway Gen-4](https://news.ycombinator.com/item?id=43536085) | Hacker News | ready |
| 22 | reddit | Cộng đồng | [I seek the wisdom of AI film makers](https://www.reddit.com/r/generativeAI/comments/1s43onn/) | r/generativeAI | partial |
| 23 | reddit | Cộng đồng | [Starting with video generation.](https://www.reddit.com/r/generativeAI/comments/1rsyjer/) | r/generativeAI | partial |
| 24 | reddit | Cộng đồng | [Anyone actually get good result with video to video AI for real content work?](https://www.reddit.com/r/generativeAI/comments/1tb9ugx/) | r/generativeAI | partial |
| 25 | arxiv | Nghiên cứu | [VideoGen-of-Thought: Step-by-step generating multi-shot video with minimal manual intervention](https://arxiv.org/abs/2503.15138v2) | arXiv | ready |
| 26 | arxiv | Nghiên cứu | [EntityBench: Towards Entity-Consistent Long-Range Multi-Shot Video Generation](https://arxiv.org/abs/2605.15199v1) | arXiv | ready |
| 27 | arxiv | Nghiên cứu | [DrawVideo: Grounded and Faithful Multi-Shot Video Generation from Storyboard Keyframe Sketches](https://arxiv.org/abs/2605.23508v2) | arXiv | ready |

- **Theo loại:** youtube: 10, web: 8, hn: 3, reddit: 3, arxiv: 3
- **Theo nhãn:** Cộng đồng: 11, Nhà cung cấp: 9, Tài liệu chính thức: 4, Nghiên cứu: 3
- **NotebookLM nạp thành công:** 27/27

| # | Video | Kênh | Người đăng ký | Lượt xem | Xem/Đăng ký | Thời lượng | Ngày đăng |
|---|---|---|---|---|---|---|---|
| 1 | [Master AI Filmmaking in 30 Minutes](https://www.youtube.com/watch?v=e9ZupmL9BcM) | Dan Kieft | 316K | 499.1K | 1.58x | 30:50 | 2026-06-25 |
| 2 | [Long AI Animation Videos With Consistent Characters - Kling 3.0](https://www.youtube.com/watch?v=0CjArtUh_Wg) | Dan Kieft | 316K | 223K | 0.71x | 19:40 | 2026-03-31 |
| 3 | [Long AI Videos with Consistent Characters (2026)](https://www.youtube.com/watch?v=dOmKYJoRboE) | Isa does AI | 72.5K | 172.6K | 2.38x | 13:33 | 2026-05-18 |
| 4 | [Consistent Character Sheets in Nano Banana](https://www.youtube.com/watch?v=f4HcdR3cd4M) | AI Video School | 96.8K | 275K | 2.84x | 4:38 | 2026-01-23 |
| 5 | [My AI Filmmaking Workflow: Kling, Veo & Nano Banana](https://www.youtube.com/watch?v=31GR1pXlB1g) | AI Video School | 96.8K | 35.1K | 0.36x | 36:40 | 2026-01-13 |
| 6 | [This Cinematic AI Film Workflow Changes Everything](https://www.youtube.com/watch?v=WKO-YgMQhLI) | Theoretically Media | 198K | 87.5K | 0.44x | 19:37 | 2026-09-17 |
| 7 | [EXACTLY How to Make an AI Short Film](https://www.youtube.com/watch?v=0v534yAyhwg) | Youri van Hofwegen | 336K | 109.6K | 0.33x | 16:49 | 2026-06-01 |
| 8 | [Kling 3.0 vs Seedance 2.0 vs Veo 3.1 vs Sora 2](https://www.youtube.com/watch?v=-MluR9dqt5w) | Dom the AI Tutor | 23.7K | 485.6K | 20.49x | 13:18 | 2026-02-11 |
| 9 | [Creating an AI Short Film (Full Workflow) \| Runway](https://www.youtube.com/watch?v=TM8hd2lnrEk) | Runway | 139K | 86.5K | 0.62x | 15:26 | 2026-08-10 |
| 10 | [Create HYPERREALISTIC AI Characters That INTERACT](https://www.youtube.com/watch?v=ghFYDG0DF1w) | Mickmumpitz | 186K | 72K | 0.39x | 34:28 | 2026-07-17 |

Tổng cộng 10 video từ 8 kênh, khoảng 2 triệu lượt xem (trung vị 141.1K). Trung vị tỉ lệ xem/đăng ký là 0.67x. Video so sánh của Dom the AI Tutor nổi bật với tỉ lệ 20.49x, cho thấy người xem rất quan tâm đến câu hỏi "model nào tốt nhất". Tuy vậy, video đó chỉ chiếu kết quả của 20 prompt, không có phép đo nào. Tỉ lệ xem/đăng ký chỉ là chỉ báo thô.

## Sản phẩm

![[assets/ai-video-workflow/infographic.png]]

Không tạo thêm deliverable NotebookLM (flashcards, mind map, audio). Có thể tạo sau từ notebook `5a639f25-70b6-4d12-a242-7aa11687d9d1`.

## Phương pháp & ghi chú

- **Truy vấn:** xem frontmatter.
  - YouTube: 4 truy vấn, quét 72 ứng viên, còn 57 sau khi gộp trùng, chọn 10 (≤ 2 video mỗi kênh).
  - HN: 6 truy vấn. Các thread có nhiều thảo luận đều từ năm 2025; HN ít bàn về *quy trình*, chủ yếu bàn về model.
  - arXiv: truy vấn đầu lỗi HTTP 400, chạy lại bằng truy vấn khác thì có 10 ứng viên, chọn 3.
- **Reddit:** không truy cập trực tiếp được (`site:reddit.com` không ra thread nào, API JSON bị chặn). Ba thread r/generativeAI lấy qua bản mirror reddit.sentinel-team.org và chỉ có nội dung tóm lược, nên **chỉ lấy được một phần** (`partial`). Chưa có thread nào từ r/aivideo.
- **Gắn nhãn "Nhà cung cấp" cho YouTube:**
  - Dan Kieft [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM)[\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg): có mã giảm giá và quảng bá Higgsfield.
  - Isa does AI [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE): link affiliate OpenArt.
  - AI Video School [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g): tự ghi "some links are affiliate links". Video [\[4\]](https://www.youtube.com/watch?v=f4HcdR3cd4M) của cùng kênh không thấy ghi chú này nên để nhãn Cộng đồng.
  - Theoretically Media [\[6\]](https://www.youtube.com/watch?v=WKO-YgMQhLI): "This video is sponsored by Runway".
  - Runway [\[9\]](https://www.youtube.com/watch?v=TM8hd2lnrEk): kênh chính thức.
  - Mickmumpitz [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w) để nhãn Cộng đồng nhưng kênh có bán workflow qua Patreon.
  - Youri van Hofwegen [\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg) có email liên hệ hợp tác, không thấy ghi chú tài trợ trong video này.
  - Tổng cộng 9/27 nguồn là của nhà cung cấp.
- **NotebookLM:** nạp đủ 27/27 nguồn. Bài arXiv [\[25\]](https://arxiv.org/abs/2503.15138v2) báo lỗi `UNCONFIRMED_WRITE` nhưng thực tế đã vào notebook; đã kiểm tra lại bằng `source list`. Notebook ID: `5a639f25-70b6-4d12-a242-7aa11687d9d1`.
- **Kiểm chứng:**
  - Đã đối chiếu với đoạn trích gốc:
    - Mẹo nền xám [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM) và thử ở 480p trước [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
    - Cắt khoảng 10 frame [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).
    - "Character tag khoá mặt, không khoá trang phục" [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
    - EntityBench: HoloCine 0.765 → 0.420; EntityMem 0.744 → 0.657.
    - Bình luận về kiểm duyệt khi làm phim zombie [\[21\]](https://news.ycombinator.com/item?id=43536085).
    - Imagen khoảng 60% prompt adherence [\[19\]](https://news.ycombinator.com/item?id=44044043).
    - Bình luận "Kling dominated" [\[21\]](https://news.ycombinator.com/item?id=43536085) và giới hạn lượt tạo trong Flow [\[19\]](https://news.ycombinator.com/item?id=44044043).
  - **Đã loại** vì không có trong trích dẫn:
    - "Đốt >$1,000 credit"
    - Link affiliate RunPod
    - ProRes 422HQ/HDR
    - "MoE 27B"
    - "Claude Opus 4.8" (transcript chỉ nói "Claude")
    - Các số CineTrans 79.6%/0.327 và EntityMem 0.740
    - "Veo 2–4 video/ngày, hay mất tiếng"
  - **Đã sửa:** lời chê Sora trong [\[21\]](https://news.ycombinator.com/item?id=43536085) là về Sora bản đầu (2025), không phải Sora 2.
  - Fact-check trên trang chính thức ngày 28/10/2026: Kling Omni guide, Google Flow help (3 trang), ComfyUI Wan 2.2 docs, Runway API models và pricing, trang Seedance 2.0, Gemini API video docs. Trang help Gen-4 References của Runway trả 403. Trang giá của Kling không đọc được.
- **Thời gian chạy:** khoảng 25 phút (07:57 → 08:22).
- **Q&A đầy đủ:** [[assets/ai-video-workflow/analysis_mapped.md]] (số trích dẫn đã đổi sang số nguồn [n] của báo cáo).
