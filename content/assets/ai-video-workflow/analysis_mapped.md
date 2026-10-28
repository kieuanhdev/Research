---
title: "Q&A đầy đủ – Quy trình làm video AI đồng nhất"
unlisted: true
---

## Q: Tổng quan: các nguồn mô tả những công cụ và mô hình nào cho từng khâu làm video AI (viết kịch bản, tạo ảnh/character sheet, tạo video, âm thanh/giọng, dựng và hậu kỳ)? Mỗi công cụ làm gì và cơ chế giữ nhất quán (reference/element/ingredients, start-end frame, LoRA, seed) hoạt động ra sao?

### 1. Tổng quan các công cụ & mô hình AI theo từng khâu sản xuất

Các nguồn tài liệu phân chia quy trình làm video AI đồng nhất thành **5 khâu chính**:

#### **a. Khâu 1: Viết kịch bản & Lên Shot list (Scriptwriting & Storyboarding)**
* **Công cụ / Mô hình**: **GPT-4 / ChatGPT** [\[15, 22\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film), **Claude (Opus 4.8)** [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), **LLM tích hợp tự động** (như *Qwen2.5*, *LLaVA-OneVision* trong hệ thống phân tích kịch bản) [\[27\]](https://arxiv.org/abs/2605.23508v2), và các đại lý trợ lý như **Invideo Creative Producer Agent** [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).
* **Chức năng**:
  * Viết screenplay điện ảnh từ ý tưởng thô và định hình phong cách thị giác (mood/tone) [\[15, 16\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film).
  * Chuyển kịch bản thành **shot list** chi tiết từng cảnh quay (bao gồm số shot, thời lượng, góc máy, vị trí nhân vật, chuyển động camera, ống kính và lời thoại) [\[1, 15, 16\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

#### **b. Khâu 2: Tạo ảnh tham chiếu & Character Sheet (Image Generation & Asset Creation)**
* **Công cụ / Mô hình**: **Nano Banana Pro / Nano Banana 2** [\[1, 2, 4, 22\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), **GPT-Image-2** [\[1, 3\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), **Midjourney** [\[6, 15\]](https://www.youtube.com/watch?v=WKO-YgMQhLI), **SDXL / DALL-E** [\[15\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film), **Recraft** [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/), **Crea 2** & **Ideogram 4** [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w), **FLUX.1 (FLUX.1-dev / Kontext)** [\[27\]](https://arxiv.org/abs/2605.23508v2).
* **Chức năng**:
  * Tạo ảnh chân dung gốc, ảnh toàn thân (full-body reference) chỉ định trang phục/phong cách, và phông nền bối cảnh (location plate) [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * Tổng hợp thành **Character Reference Sheet** (tấm ảnh tham chiếu chứa nhiều góc nhìn: trước, sau, góc nghiêng, cận mặt) để định hình diện mạo nhân vật trước khi sinh video [\[2, 4, 5, 18\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).

#### **c. Khâu 3: Tạo Video (Video Generation & Motion Control)**
* **Công cụ / Mô hình**: **Kling 3.0 / Kling 1.6** [\[2, 11, 22\]](https://www.youtube.com/watch?v=0CjArtUh_Wg), **Seedance 2.0 / 2.5** [\[3, 6, 16\]](https://www.youtube.com/watch?v=dOmKYJoRboE), **Veo 3 / Veo 3.1 / Gemini Omni Flash** [\[12, 22\]](https://support.google.com/flow/answer/16353334?hl=en), **Runway (Gen-4, Gen-4.5, Gen-4 Turbo, Aleph 2.0)** [\[14\]](https://docs.dev.runwayml.com/guides/models/), **Sora 2** [\[8, 22\]](https://www.youtube.com/watch?v=-MluR9dqt5w), **Wan 2.1 / Wan 2.2** [\[10, 13\]](https://www.youtube.com/watch?v=ghFYDG0DF1w), **AnimateDiff** [\[15\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film), cùng các mô hình nghiên cứu chuyên dụng như **DrawVideo** [\[27\]](https://arxiv.org/abs/2605.23508v2) hay **EntityMem** [\[26\]](https://arxiv.org/abs/2605.15199v1).
* **Chức năng**:
  * Sinh chuyển động từ ảnh tĩnh (Image-to-Video), văn bản (Text-to-Video) hoặc tạo video đa shot nối tiếp (Multi-shot generation) [\[7, 11, 13, 27\]](https://www.youtube.com/watch?v=0v534yAyhwg).
  * Thực hiện **Motion Transfer** (sao chép diễn xuất/chuyển động từ video người thật sang nhân vật AI) hoặc điều khiển hướng camera/nhân vật trong không gian [\[1, 7, 23\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

#### **d. Khâu 4: Âm thanh, Giọng nói & Lip-Sync (Audio, Voice & Sound Design)**
* **Công cụ / Mô hình**: **ElevenLabs** (lồng tiếng / voice acting) [\[2, 15\]](https://www.youtube.com/watch?v=0CjArtUh_Wg), **AudioCraft / Suno / Soundraw / Artlist** (tạo hiệu ứng âm thanh SFX và nhạc nền) [\[2, 15\]](https://www.youtube.com/watch?v=0CjArtUh_Wg), **Google Flow / Gemini Omni Flash (Voice Reference)** [\[12\]](https://support.google.com/flow/answer/16353334?hl=en), **Kling 3.0 Native Audio / Attached Voice** [\[11\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide).
* **Chức năng**:
  * Tạo giọng đọc cảm xúc, tiếng động môi trường và âm nhạc khớp với nhịp phim [\[2, 3, 7, 15\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
  * Gắn mẫu giọng (Voice Reference) trực tiếp vào nhân vật AI để sinh video có âm thanh thoại và nhép môi (lip-sync) đồng bộ ngay từ bước khởi tạo [\[7, 11, 12\]](https://www.youtube.com/watch?v=0v534yAyhwg).

#### **e. Khâu 5: Dựng & Hậu kỳ (Editing & Post-production)**
* **Công cụ / Mô hình**: **DaVinci Resolve / Premiere Pro** [\[15, 17, 18\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film), **CapCut** [\[3, 15\]](https://www.youtube.com/watch?v=dOmKYJoRboE), **Descript** [\[15\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film), **Topaz Astra** (nâng cấp độ phân giải / upscale) [\[16, 17\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/), **Open Art AI VFX** (khử nền, thay bối cảnh, chỉnh lại ánh sáng / relighting) [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), **ComfyUI** [\[10, 13\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).
* **Chức năng**:
  * Cắt bỏ các khung hình biến dạng ở đầu/cuối clip (thường là 10 frame cuối bị nháy) [\[5, 18\]](https://www.youtube.com/watch?v=31GR1pXlB1g), ghép nối các shot theo thứ tự câu chuyện [\[3, 18\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * **Color Grading (Chỉnh màu)**: Chuẩn hóa tông da bằng Vectorscope/Waveform, áp LUT phim (như Kodak 2383, Fuji 3510), thêm mờ nhẹ (Gaussian blur 0.3–0.6px) và nhiễu hạt (35mm grain) để giảm độ "nhựa/giả" đặc trưng của AI [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/).
  * Tách lớp (masking), thay đổi phông nền và điều chỉnh ánh sáng hoàng hôn/môi trường (golden hour glow) cho khớp giữa các đoạn phim [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

---

### 2. Nguyên lý hoạt động của các cơ chế giữ sự đồng nhất (Consistency Mechanisms)

#### **a. Cơ chế Tham chiếu / Nguyên liệu (Reference / Element / Ingredients / Memory Bank)**
* **Cơ chế**:
  * Người dùng nạp **Character Sheet** (ảnh chứa nhiều góc mặt/thân hình) [\[2, 4, 5\]](https://www.youtube.com/watch?v=0CjArtUh_Wg) hoặc ảnh toàn thân đã định hình trang phục [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE) vào nền tảng dưới dạng **Ingredients / Elements / Reference Media** [\[4, 7, 11, 12\]](https://www.youtube.com/watch?v=f4HcdR3cd4M).
  * Khi viết prompt cho từng shot, người dùng sử dụng thẻ gán tên (ví dụ: `@tên_nhân_vật` hoặc `@ISA`) [\[3, 11, 12\]](https://www.youtube.com/watch?v=dOmKYJoRboE). Mô hình AI sẽ trích xuất đặc tính thị giác từ asset tham chiếu để ép khuôn mặt, kiểu tóc và trang phục giữ cố định qua mọi bối cảnh mới [\[3, 4, 11\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * *Hệ thống nâng cao (EntityMem)*: Tự động trích xuất nhân vật ra khỏi phông nền (chroma-key), lưu chân dung và bối cảnh panorama vào một **Memory Bank** (ngân hàng bộ nhớ), sau đó inject thông tin này vào không gian ẩn (latent) của mô hình sinh video ở mỗi shot [\[26\]](https://arxiv.org/abs/2605.15199v1).

#### **b. Cơ chế Frame Đầu - Frame Cuối (Start & End Frame / First-Last-Frame)**
* **Cơ chế**:
  * Cung cấp một **Start Frame** (ảnh mốc bắt đầu) và một **End Frame** (ảnh mốc kết thúc) cho mô hình video (như Kling 3.0, Wan 2.2 FLF2V, DrawVideo) [\[2, 13, 27\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
  * Mô hình video đóng vai trò nội suy (interpolation): nó tự tính toán chuyển động và diễn biến hành động diễn ra ở giữa hai mốc thời gian này [\[2, 13, 27\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
  * Để nối tiếp các cảnh quay liên tục (**Scene Continuation**), người làm phim lấy khung hình cuối cùng (last frame) của clip trước để làm khung hình đầu tiên (start frame) cho clip tiếp theo [\[2, 5, 7\]](https://www.youtube.com/watch?v=0CjArtUh_Wg). Cách này giúp nhân vật và vị trí bối cảnh mượt mà, không bị nhảy gắt (jump cut) hay biến dạng diện mạo [\[2, 5\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).

#### **c. Cơ chế LoRA (Low-Rank Adaptation) & Mô hình mở (Open Models)**
* **Cơ chế**:
  * Dùng một tập dữ liệu nhỏ (từ 15–30 ảnh chụp nhân vật ở nhiều góc độ, biểu cảm và ánh sáng) để huấn luyện một file trọng số nhẹ gọi là **LoRA** [\[10, 18\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).
  * File LoRA này được nạp đè lên mô hình nền (như Wan 2.1/2.2, SDXL, Crea 2, Ideogram 4) trong các công cụ như ComfyUI hoặc AI Toolkit [\[10, 15\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).
  * Khi tạo ảnh/video, người dùng gọi từ khóa kích hoạt (**trigger word**) kèm trọng số LoRA (thường từ 0.7 đến 0.9) [\[10, 18\]](https://www.youtube.com/watch?v=ghFYDG0DF1w). LoRA ép mô hình tái tạo chính xác các đường nét nhân vật mà không bị trôi (drift) theo sự ngẫu nhiên của mô hình gốc [\[10, 18\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).

#### **d. Cơ chế Cố định Seed & Mẫu Prompt (Seed Locking & Style Blocks)**
* **Cơ chế**:
  * **Khóa Seed (Seed Locking)**: Giữ cố định chỉ số ngẫu nhiên (seed number) trong mô hình sinh ảnh/video [\[15, 18\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film). Khi seed được giữ nguyên, các chỉnh sửa nhỏ trong prompt chỉ làm thay đổi chi tiết được chỉ định mà không làm thay đổi toàn bộ cấu trúc không gian và ánh sáng của bức ảnh [\[15, 18\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film).
  * **Prompt Templates / Style Blocks**: Xây dựng một khối prompt mô tả phong cách (ánh sáng, góc máy, chất liệu) cố định và đính kèm vào mọi lượt tạo [\[15, 16\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film). Điều này tạo ra một "hợp đồng thị giác" giúp giữ ánh sáng và màu sắc thống nhất từ đầu đến cuối phim [\[3, 16\]](https://www.youtube.com/watch?v=dOmKYJoRboE).

---

## Q: Người dùng muốn video đồng nhất (cùng nhân vật, phong cách, ánh sáng giữa các cảnh) và đẹp. Theo các nguồn, nên theo quy trình từng bước nào? Hãy trình bày thứ tự các bước, những gì cần 'khoá' trước khi tạo video, và lý do. Nêu các con số cụ thể (thời lượng clip, số ảnh tham chiếu, số lần tạo mỗi shot, tỉ lệ dùng được) kèm nguồn.

Dưới đây là quy trình sản xuất video AI nhất quán (nhân vật, ánh sáng, bối cảnh) được tổng hợp chi tiết từ các nguồn nghiên cứu và hướng dẫn từ các nhà làm phim AI:

---

### 1. Quy trình thực hiện từng bước (Step-by-Step Workflow)

* **Bước 1: Tiền kỳ, Kịch bản & Lên Shot List (Pre-production & Scripting)**
  * Dùng LLM (như Claude 4.8, GPT-4) để phát triển kịch bản điện ảnh từ ý tưởng [\[1, 15, 16\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
  * Chuyển kịch bản thành **Shot List / Shot Bible** chi tiết [\[1, 15, 16\]](https://www.youtube.com/watch?v=e9ZupmL9BcM). Bảng này quy định rõ số lượng shot, góc máy, vị trí nhân vật, chuyển động camera, ánh sáng, lời thoại và mô tả hành động cho từng cảnh [\[15, 16, 18\]](https://shwetakaushal.substack.com/p/how-i-created-an-animated-short-film).

* **Bước 2: Tạo & "Khóa" tài sản tham chiếu (Asset Creation & Locking)**
  * **Tạo Character Reference Sheet**: Sinh ảnh nhân vật với nhiều góc nhìn (mặt trực diện, góc 3/4, góc nghiêng, phía sau) và các biểu cảm khác nhau [\[2, 4, 5, 18\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
  * **Tạo trang phục chuẩn (Full-body Styled Character)**: Tạo bức ảnh nhân vật toàn thân mặc đúng trang phục dự án trên tỉ lệ khung hình chuẩn (như 16:9) làm mốc quy chiếu [\[1, 3\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
  * **Tạo bối cảnh (Location / Environment Plate)**: Sinh ảnh môi trường/kiến trúc sạch (không có nhân vật) để định hình không gian, màu sắc và ánh sáng cố định [\[3, 7, 16\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * **Tạo đạo cụ chính (Props)**: Tạo riêng ảnh các đạo cụ đặc trưng (xe cộ, vũ khí, đồ vật đặc biệt) [\[7, 18\]](https://www.youtube.com/watch?v=0v534yAyhwg).

* **Bước 3: Tạo Storyboard & Ảnh mốc (Keyframe / Start-End Frame Generation)**
  * Sử dụng các tài sản đã khóa ở Bước 2 làm đầu vào (*Ingredients/Elements/References*) kết hợp với mô hình tạo ảnh (như GPT-Image-2, Nano Banana, FLUX.1) để sinh ảnh tĩnh cho từng shot [\[1, 2, 3, 4\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
  * Đối với các cảnh quay đòi hỏi diễn biến chuyển động phức tạp, tạo cả **Start Frame** (khung hình bắt đầu) và **End Frame** (khung hình kết thúc) [\[2, 13\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).

* **Bước 4: Sinh Video & Nối cảnh (Video Generation & Continuation)**
  * Nạp ảnh mốc + tài sản tham chiếu vào mô hình sinh video (như Kling 3.0, Seedance 2.0, Veo 3.1, Wan 2.2, Runway Gen-4) [\[3, 4, 7, 11\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * **Kỹ thuật nối cảnh (Scene Continuation / Video Reference)**: Để các clip liền mạch thành một cảnh quay dài, lấy *Last Frame* (khung hình cuối) của clip trước làm *Start Frame* cho clip sau, hoặc nạp nguyên clip trước vào ô "Video Reference" để mô hình kế thừa chính xác ánh sáng, cảm xúc và nhịp độ [\[2, 3, 7\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).

* **Bước 5: Dựng phim, Lồng tiếng & Hậu kỳ (Post-production)**
  * **Dựng & Cắt cúp**: Ghép các clip theo kịch bản, cắt bỏ khoảng 10 frame bị nhấp nháy/biến dạng thường xuất hiện ở đầu/cuối clip thô [\[5, 16\]](https://www.youtube.com/watch?v=31GR1pXlB1g). Cắt trên chuyển động (*cut on motion*) để hành động mượt mà hơn [\[5, 16\]](https://www.youtube.com/watch?v=31GR1pXlB1g).
  * **Âm thanh & Lip-sync**: Dùng lồng tiếng AI (ElevenLabs) hoặc tính năng *Voice Reference* (gắn giọng nhân vật trực tiếp trong Kling 3.0, Gemini Omni Flash) để khớp môi và giọng nói [\[2, 3, 11, 12\]](https://www.youtube.com/watch?v=0CjArtUh_Wg). Thêm hiệu ứng âm thanh SFX và nhạc nền [\[2, 3, 15\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
  * **Color Grading & VFX**: Cân bằng tông da trên Vectorscope/Waveform, áp dụng LUT màu phim (như Kodak 2383, Fuji 3510), phủ lớp mờ nhẹ (*Gaussian blur* 0.3–0.6px) và nhiễu hạt phim (*film grain* 8–15%) để xóa độ "nhựa/siêu sắc nét giả" của AI, sau đó nâng cấp độ phân giải (Upscale qua Topaz Astra) [\[16, 17\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).

---

### 2. Những yếu tố cần "KHÓA" trước khi tạo video và Lý do

#### **Cần khóa những gì?**
1. **Kịch bản & Shot List / Shot Bible** [\[3, 16, 22\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
2. **Diện mạo Nhân vật**: Thẻ nhận diện nhân vật (*Character Tag/ID*), *Character Sheet*, hoặc file *LoRA* huấn luyện riêng [\[3, 4, 10, 16, 18\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
3. **Bối cảnh & Địa điểm**: Bức ảnh tấm nền môi trường (*Environment Plate*) [\[3, 7, 16, 18\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
4. **Style Block / Ánh sáng & Palette màu sắc**: Khối prompt quy định phong cách nghệ thuật, loại ống kính và tông màu chiếu sáng [\[16, 17\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).
5. **Đạo cụ đặc trưng**: Hình ảnh chi tiết của vật thể xuất hiện lặp lại [\[7, 9, 16, 18\]](https://www.youtube.com/watch?v=0v534yAyhwg).

#### **Vì sao phải khóa trước khi bấm tạo video?**
* **Tránh hiện tượng trôi lệch tài sản (Asset / Character Drift)**: Các mô hình video AI không có bộ nhớ dài hạn tự nhiên; nếu chỉ nhập prompt văn bản đơn thuần, mỗi shot quay sẽ là một dự đoán ngẫu nhiên mới, làm khuôn mặt, trang phục hay chi tiết bối cảnh bị thay đổi liên tục giữa các cảnh [\[3, 18\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
* **Là "tuyến phòng thủ chính chống sai hỏng" & tiết kiệm chi phí**: Tạo video đắt hơn tạo ảnh rất nhiều [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg). Khóa trước các ảnh tham chiếu tạo ra một "hợp đồng thị giác" (visual contract) cố định, buộc mô hình video phải trích xuất đặc tính từ ảnh đã duyệt, giảm thiểu rủi ro sinh ra clip hỏng và tiết kiệm credit [\[2, 3, 16\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
* **Đảm bảo tính liên tục của mạch phim (Narrative Continuity)**: Giúp toàn bộ dự án duy trì chung một ngôn ngữ thị giác, từ ánh sáng môi trường đến không gian kiến trúc [\[3, 7, 16\]](https://www.youtube.com/watch?v=dOmKYJoRboE).

---

### 3. Các con số cụ thể từ nguồn nghiên cứu & thực tế sản xuất

#### **a. Thời lượng clip (Clip duration):**
* **Thời lượng clip thô từ mô hình AI**:
  * Các mô hình tiêu chuẩn sinh clip dài **5 – 10 giây** [\[3, 18, 22\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * Các thế hệ mô hình mới hơn như **Seedance 2.0** [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE) hay **Kling 3.0 / Kling 3.0 Omni** (chế độ multi-shot) [\[11\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide) sinh clip tối đa **15 giây**.
  * Chế độ *Smart Multi-shot* trên **Cinema Studio (Higgsfield)** tạo các đoạn clip hành động dài **10 – 15 giây** (ví dụ: các clip 10s, 12s, 13s, 15s) [\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg).
* **Thời lượng dùng được sau cắt cúp**:
  * Mỗi clip thô thường chỉ giữ lại khoảng **4 – 7 giây** [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/) hoặc **5 – 8 giây** [\[22\]](https://www.reddit.com/r/generativeAI/comments/1s43onn/) tối ưu cho dựng phim.
  * Việc **cắt bỏ 10 frame** ở điểm nối giữa các clip (như với Veo) giúp loại bỏ lỗi giật hình nhấp nháy [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).

#### **b. Số ảnh tham chiếu (Number of reference images):**
* **Dành cho Character Reference Sheet**: Cần **4 – 6 góc nhìn** kết hợp **4 – 6 biểu cảm** gộp trên một sheet [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026); hoặc bộ 3 ảnh chuẩn gồm: (1) Character sheet toàn thân, (2) Ảnh cận mặt close-up, (3) Ảnh chi tiết tóc/da [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
* **Tổng số ảnh tham chiếu cần chuẩn bị theo quy mô dự án (AI Magicx)**:
  * **Nhân vật chính**: 10 – 15 ảnh [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
  * **Nhân vật phụ**: 5 – 8 ảnh [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
  * **Mỗi địa điểm/bối cảnh**: 3 – 5 ảnh [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
  * **Đạo cụ chính**: 2 – 3 ảnh [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
* **Giới hạn nạp ảnh tham chiếu của các nền tảng**:
  * **Kling 3.0 Omni**: Cho phép nạp tối đa **7 ảnh** (hoặc **4 ảnh + 1 video**) [\[11\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide).
  * **Kling 1.6 Elements**: Cho phép nạp **1 – 4 ảnh** [\[11\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide).
  * **Runway Gen-4 References**: Hỗ trợ tối đa **3 ảnh** tham chiếu [\[14\]](https://docs.dev.runwayml.com/guides/models/).
  * **Huấn luyện mô hình LoRA riêng (ComfyUI / AI Toolkit)**: Cần tập dữ liệu từ **15 – 30 ảnh** nhân vật [\[10, 18\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).

#### **c. Số lần tạo mỗi shot (Generations per shot / Takes):**
* **Shot tiêu chuẩn**: Cần trung bình **2 – 3 take (lần tạo)** cho mỗi shot để chọn lấy 1 take đạt chất lượng [\[7, 16, 18\]](https://www.youtube.com/watch?v=0v534yAyhwg).
* **Shot hành động phức tạp**: Khuyến nghị cài đặt sinh **3 take đồng thời (3 generations)** để so sánh [\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg). Với các cảnh chuyển động khó, tỷ lệ tạo thử nghiệm (shooting ratio) có thể lên tới **50:1** (50 lần tạo mới được 1 shot ưng ý) [\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/).
* **Tổng số clip thô cần tạo cho dự án**:
  * Phim ngắn **15 phút** cần tạo khoảng **120 – 180 clip thô** cho 60 shot thành phẩm [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
  * Phim hoạt hình **3 phút** (theo invideo) cần tạo **164 clip thô** để lọc ra **~41 clip** dùng được [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).

#### **d. Tỷ lệ dùng được / Thành công (Usable ratio / Success rate):**
* **Tỷ lệ clip thô dùng được (Yield Ratio)**:
  * Đạt khoảng **25% – 33%** (tương đương 1/4 đến 1/3 số clip sinh ra dùng được; invideo ghi nhận 41/164 clip ~ 25%) [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).
  * Tỷ lệ này có thể nâng lên **50% – 70%** nếu áp dụng quy trình kiểm soát chặt chẽ bằng ảnh tham chiếu và gom nhóm tạo theo lô (batching) [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
* **Tỷ lệ phải tạo lại sau khi Review (Reroll Rate)**: Ước tính **15% – 25%** số clip phải bỏ và tạo lại khi rà soát ghép nối các cảnh kề nhau [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
* **Mức độ tuân thủ prompt & nhận diện**:
  * Các mô hình sinh ảnh như Imagen 3/4 chỉ đạt khoảng **~60%** độ chính xác tuân thủ prompt [\[19\]](https://news.ycombinator.com/item?id=44044043).
  * Khả năng giữ diện mạo nhân vật của **Kling 3.0** tự báo cáo đạt mức **90%+** qua các clip [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).

---

## Q: Các kỹ thuật cụ thể nào giúp giữ ánh sáng, màu sắc và phong cách đồng nhất giữa các clip (style block, environment plate, chọn một model chính, color grading, match với hero frame, LUT, grain)? Những lỗi drift phổ biến nào được nhắc tới và cách xử lý?

Để giữ ánh sáng, màu sắc và phong cách đồng nhất giữa các clip trong quá trình tạo video AI, các nhà làm phim AI và tài liệu kĩ thuật đưa ra các kỹ thuật hậu kỳ và các biện pháp xử lý lỗi drift cụ thể như sau:

---

### 1. Các kỹ thuật cụ thể giữ ánh sáng, màu sắc & phong cách đồng nhất

* **Style Block (Khối Prompt phong cách cố định)**:
  * Xây dựng một đoạn prompt chuẩn quy định rõ phong cách nghệ thuật, ánh sáng (như *"soft night lighting"*, *"golden hour glow"*), tông màu (*"desaturated gray and dreary somber tones"*) hoặc chất liệu (*"clean colored lineart, flat cel-style coloring"*) [\[9, 16, 27\]](https://www.youtube.com/watch?v=TM8hd2lnrEk).
  * Đính kèm **Style Block** này vào mọi lượt prompt sinh ảnh và video của từng shot để buộc mô hình duy trì chung một "hợp đồng thị giác" xuyên suốt [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).

* **Environment Plate (Bối cảnh nền cắm mốc)**:
  * Sinh ra một bức ảnh không gian/kiến trúc sạch (không có nhân vật) trước khi tạo video để định hình tông màu, cấu trúc và ánh sáng môi trường cố định [\[3, 16\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * *Mẹo tránh lệch góc quay*: Để tạo nhiều góc nhìn trong cùng một căn phòng mà không làm sai lệch bối cảnh, sinh một ảnh panorama siêu rộng (tỉ lệ 3:1) của địa điểm rồi cắt ra các biến thể góc máy (*trái, giữa, phải*) thay vì sinh độc lập từng bức ảnh [\[26\]](https://arxiv.org/abs/2605.15199v1).

* **Sử dụng Một Mô hình chính & Cùng Tỉ lệ khung hình**:
  * Giữ cố định một mô hình sinh ảnh (như Nano Banana Pro, GPT-Image-2, FLUX.1) và một mô hình sinh video chính (như Kling 3.0, Seedance 2.0, Wan 2.2, Veo) trong toàn bộ dự án [\[3, 18, 22\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
  * Tạo tất cả ảnh tham chiếu ở đúng tỉ lệ khung hình của video thành phẩm (ví dụ 16:9) để mô hình chuyển giao thông tin thị giác mượt mà nhất, tránh hiện tượng lệch tông da hay bóng đổ do trộn lẫn nhiều mô hình [\[3, 17\]](https://www.youtube.com/watch?v=dOmKYJoRboE).

* **Match màu với Hero Frame (Khung hình mốc điện ảnh)**:
  * Chọn ra một khung hình đẹp nhất/chuẩn nhất (*Hero shot / Hero frame*) từ clip chất lượng nhất làm chuẩn thị giác [\[9, 17\]](https://www.youtube.com/watch?v=TM8hd2lnrEk).
  * Khi vào hậu kỳ, sử dụng tính năng *Split View* hoặc *Match Color* trong trình dựng để điều chỉnh tất cả các clip khác khớp với độ ấm highlight, bóng râm và độ bão hòa của Hero frame này [\[5, 17\]](https://www.youtube.com/watch?v=31GR1pXlB1g).

* **Color Grading 2 giai đoạn & Áp LUT Phim**:
  * **Giai đoạn 1 (Chuẩn hóa kỹ thuật)**: Dùng Waveform và Vectorscope kiểm tra từng clip; điều chỉnh cân bằng trắng sao cho tông da nằm đúng đường *skin line*, kiểm soát điểm đen/trắng trong khoảng 0–100 để không bị cháy sáng, và giảm độ bão hòa dư thừa ở dải midtone [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/).
  * **Giai đoạn 2 (Tạo Look phim với LUT)**: Áp dụng các LUT giả lập phim điện ảnh (Kodak 2383, Fuji 3510, Arri LogC-to-Rec709) ở mức độ mờ (*opacity*) từ **60% – 80%** để hòa trộn màu sắc giữa các clip thô xuất từ các mô hình khác nhau [\[6, 17\]](https://www.youtube.com/watch?v=WKO-YgMQhLI).

* **Phủ Gaussian Blur nhẹ & Film Grain (Nhiễu hạt phim)**:
  * Phủ một lớp **Gaussian Blur nhẹ (0.3 – 0.6px)** để xóa bớt độ "sắc nét giả" (*ultra-sharp*) và cảm giác "da nhựa" (*plasticky skin*) đặc trưng của video AI [\[17\]](https://invideo.io/faq/what-is-the-best-color-grading-workflow-for-ai-generated/).
  * Phủ thêm lớp **nhiễu hạt phim (35mm hoặc 16mm grain) ở mức 8% – 15% opacity** [\[5, 6, 17\]](https://www.youtube.com/watch?v=31GR1pXlB1g). Lớp grain này đóng vai trò như một chất keo kết dính, giấu đi sự sai lệch nhỏ về bề mặt/chi tiết giữa các clip AI [\[5, 17\]](https://www.youtube.com/watch?v=31GR1pXlB1g).

---

### 2. Các lỗi Drift phổ biến & Cách xử lý

* **Character & Attribute Drift (Trôi diện mạo, kiểu tóc, trang phục, phụ kiện nhân vật)**:
  * *Hiện tượng*: Nhân vật bị đổi màu tóc (ví dụ tóc bị chuyển thành màu vàng quá đà), chi tiết trang phục bị biến đổi, hoặc phụ kiện (vòng cổ, kính, vết sẹo) biến mất qua từng cảnh [\[1, 9, 10\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
  * *Cách xử lý*:
    * Khóa nhân vật ở cấp độ ảnh tham chiếu (*Character Sheet*) [\[1, 9\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
    * **Đổi phông nền Character Sheet sang màu xám trung tính (neutral gray)** thay vì phông trắng tinh, vì phông trắng dễ bị mô hình hiểu lầm là ánh sáng chói và làm nhân vật bị cháy sáng (*overexposed*) khi ghép vào phân cảnh mới [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
    * Nếu nhân vật có phụ kiện đặc thù (như vòng cổ), cắt riêng ảnh phụ kiện đó để nạp làm ảnh tham chiếu phụ (*3rd reference*) [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).
    * Sử dụng thẻ gán tên (`@tên_nhân_vật` / `@ISA`) hoặc huấn luyện file LoRA riêng (trọng số 0.7–0.9) [\[3, 13, 18\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
    * Thêm chỉ dẫn prompt như *"do not have her looking directly at the camera"* để tránh nhân vật bị thu hút nhìn thẳng ống kính nếu ảnh Character Sheet gốc là ảnh chụp trực diện [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).

* **Environment & Object Drift (Trôi bối cảnh và đồ vật biến mất/méo dạng)**:
  * *Hiện tượng*: Đồ vật xuất hiện rồi tự động biến mất (như chiếc TV hoặc con khủng long bị biến mất giữa chừng) hoặc kiến trúc bị thay đổi vô lý khi chuyển góc quay [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
  * *Cách xử lý*:
    * Nạp trực tiếp ảnh tham chiếu của đạo cụ chính (như chiếc TV) vào ô ảnh tham chiếu thay vì chỉ mô tả bằng lời [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
    * Tạo ảnh panorama bối cảnh (3:1) rồi cắt thành các góc máy (*trái, giữa, phải*) để giữ nguyên chi tiết môi trường [\[26\]](https://arxiv.org/abs/2605.15199v1).
    * Thêm dòng câu lệnh khóa phông nền trong prompt: *"background remains unchanged throughout"* [\[27\]](https://arxiv.org/abs/2605.23508v2).

* **Lighting & Color Drift (Trôi ánh sáng và tông màu giữa các shot)**:
  * *Hiện tượng*: Shot này ánh sáng ấm áp, shot sau lại bị đục xám hoặc sai hướng chiếu bóng [\[9, 17\]](https://www.youtube.com/watch?v=TM8hd2lnrEk).
  * *Cách xử lý*:
    * Thêm thông số ánh sáng cụ thể trong Style Block (*"golden hour glow"*, *"soft night lighting"*) [\[1, 27\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
    * Sử dụng công cụ AI VFX Relighting (như Open Art AI VFX) để can thiệp chỉnh lại hướng sáng và tông ấm cho clip [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
    * Thực hiện Match Color với Hero frame và phủ LUT điện ảnh chung ở khâu hậu kỳ [\[6, 17\]](https://www.youtube.com/watch?v=WKO-YgMQhLI).

* **Motion Discontinuity / Jump Cut (Giật hình và mất liên tục ở điểm nối clip)**:
  * *Hiện tượng*: Xuất hiện lỗi giật, nhấp nháy (flicker/glitch) ở khoảng 10 khung hình cuối của clip thô, khiến việc ghép nối bị giật [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).
  * *Cách xử lý*:
    * **Trimming**: Cắt bỏ khoảng **10 frame đầu/cuối** của clip thô trước khi đưa vào timeline [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).
    * **Cơ chế Start-End Frame (FLF2V)**: Lấy *Last Frame* (khung hình cuối) của clip 1 làm *Start Frame* cho clip 2 [\[5, 13\]](https://www.youtube.com/watch?v=31GR1pXlB1g).
    * **Cut on motion (Cắt trên chuyển động)**: Chọn điểm nối ngay lúc nhân vật đang thực hiện hành động (như đứng dậy, quay đầu) để đoạn cắt tự nhiên hơn [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).

* **Background Stiffness (Bối cảnh bị đơ cứng khi dùng Motion Transfer)**:
  * *Hiện tượng*: Khi sao chép diễn xuất/chuyển động người thật sang nhân vật AI, nhân vật di chuyển tốt nhưng bối cảnh xung quanh bị hóa đá, đơ cứng [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
  * *Cách xử lý*: Thêm chỉ dẫn chuyển động môi trường mềm như *"leaves swaying naturally in the wind"* [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), hoặc dùng công cụ AI VFX tách nền (chroma-key/magnetic mask) để đặt nhân vật vào một bối cảnh động riêng biệt [\[1, 5\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

---

## Q: Giữa các loại nguồn (cộng đồng Reddit/HN, YouTuber có tài trợ/affiliate, nhà cung cấp như invideo/AI Magicx/Runway, tài liệu chính thức, nghiên cứu arXiv), những điểm nào mâu thuẫn hoặc không khớp nhau? Ví dụ: mức độ nhất quán thực tế, model nào tốt nhất, công cụ mã nguồn mở có đủ chất lượng không. Ai có lợi ích thương mại trong các khuyến nghị?

Khi phân tích tập tài liệu từ nhiều nhóm nguồn khác nhau (nghiên cứu arXiv, thảo luận cộng đồng Reddit/HN, YouTubers, và bài viết của nhà cung cấp SaaS), có sự mâu thuẫn và chênh lệch rõ rệt giữa **lời hứa tiếp thị / demo** và **thực tế sản xuất** [\[19, 21, 23, 26\]](https://news.ycombinator.com/item?id=44044043).

---

### 1. Các điểm mâu thuẫn & Không khớp chính

#### **a. Mức độ nhất quán thực tế: Tuyên bố tiếp thị vs. Thực tế sản xuất**
* **Nhà cung cấp & Video tiếp thị**: Các nền tảng SaaS thương mại (như AI Magicx) tuyên bố mô hình như Kling 3.0 giữ nhận diện nhân vật lên tới **"90%+"** [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026), hoặc khẳng định vấn đề nhất quán nhân vật *"đã là quá khứ"* [\[4\]](https://www.youtube.com/watch?v=f4HcdR3cd4M). Các bài viết thương mại hứa hẹn tỉ lệ clip dùng được đạt 50%–70% [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
* **Thực tế người dùng & YouTubers**: Để tạo ra một video AI ngắn 3 phút, YouTubers thực tế thừa nhận đã phải **đốt hơn \$1,000 tiền credit** do sinh ra nhiều clip lỗi [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM). Nhà sáng tạo phải tạo 3 take cùng lúc cho các cảnh phức tạp [\[7\]](https://www.youtube.com/watch?v=0v534yAyhwg) hoặc chấp nhận tỉ lệ quay thử nghiệm (**shooting ratio**) lên tới **50:1** (tức 50 lần bấm tạo mới được 1 shot ưng ý) [\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/). Khoảng 15%–25% số clip bắt buộc phải tạo lại khi lắp ghép kề nhau [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
* **Góc nhìn nghiên cứu hàn lâm (arXiv - EntityBench)**: Bài báo *EntityBench* chứng minh rằng sự nhất quán nhân vật **sụt giảm nghiêm trọng theo khoảng cách lặp lại (recurrence gap)** ở mọi mô hình hiện tại [\[26\]](https://arxiv.org/abs/2605.15199v1). Độ chính xác nhận diện nhân vật qua đánh giá LLM/người thật ở các mô hình hàng đầu (như HoloCine) giảm từ 0.765 (khoảng cách 1–2 shot) xuống còn 0.420 (khoảng cách 11–20 shot) [\[26\]](https://arxiv.org/abs/2605.15199v1).

#### **b. Đánh giá "Model nào tốt nhất?"**
* **Sora 2 (OpenAI)**: Trong khi truyền thông quảng bá Sora như một bước ngoặt, cộng đồng Reddit/HN nhận xét Sora v2 thực tế **rất ít người dùng, đắt đỏ, kiểm duyệt gắt gao và thể hiện kém** so với các đối thủ Trung Quốc [\[19, 21\]](https://news.ycombinator.com/item?id=44044043).
* **Kling (3.0 / 1.6)**: Được cộng đồng r/aivideo và Reddit đánh giá là mô hình video thương mại thống trị và tạo ra các đoạn phim điện ảnh tốt nhất thực tế hiện nay [\[21, 22\]](https://news.ycombinator.com/item?id=43536085).
* **Veo 3.1 / Gemini Omni Flash (Google)**: Mặc dù video demo có âm thanh/nhép môi gây ấn tượng mạnh [\[19\]](https://news.ycombinator.com/item?id=44044043), người dùng thực tế phàn nàn về giới hạn lượt tạo khắt khe (chỉ tạo 2–4 video/ngày trên gói trả phí \$20) [\[19\]](https://news.ycombinator.com/item?id=44044043) và lỗi mất tiếng thường xuyên [\[19\]](https://news.ycombinator.com/item?id=44044043).
* **Wan 2.1 / Wan 2.2**: Được cộng đồng Hacker News ghi nhận là mô hình trọng số mở (open-weights) dẫn đầu hiện nay, áp dụng kiến trúc MoE 27B cho phép sinh video ngang ngửa hoặc vượt một số mô hình đóng [\[20\]](https://news.ycombinator.com/item?id=44928997).

#### **c. Công cụ mã nguồn mở (ComfyUI / Wan / FLUX) có đủ chất lượng không?**
* **Quan điểm chê trách**: Một số ý kiến trên Reddit cho rằng *"không có nền tảng mã nguồn mở nào đạt chất lượng phát sóng (broadcast quality) cho Image-to-Video hay Video-to-Video"* do dễ vỡ nét khi có chuyển động mạnh [\[24\]](https://www.reddit.com/r/generativeAI/comments/1tb9ugx/).
* **Quan điểm ủng hộ mã nguồn mở**: Các nhà nghiên cứu và kỹ sư trên Hacker News/YouTube chỉ ra rằng mô hình mở (như Wan 2.2, FLUX.1, Crea 2, Ideogram 4) giúp người dùng **không bị kiểm duyệt** (ví dụ: máu me trong phim zombie bị các SaaS thương mại chặn hoàn toàn) [\[21\]](https://news.ycombinator.com/item?id=43536085), có khả năng kiểm soát vị trí chính xác bằng Bounding Box (Ideogram 4) [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w) và chạy hoàn toàn miễn phí trên phần cứng cá nhân (RTX 4090 / 5090) [\[10, 20\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).

#### **d. Chất lượng hình ảnh (Aesthetic) vs. Sự nhất quán nhân vật (Identity)**
* Bài báo *EntityBench* phát hiện ra một sự thật quan trọng: **Độ đẹp của điểm ảnh không đồng nghĩa với sự nhất quán nhân vật** [\[26\]](https://arxiv.org/abs/2605.15199v1).
* Các mô hình như CineTrans đạt điểm chất lượng hình ảnh VBench rất cao (Imaging quality 68.57, Motion smoothness 0.990) [\[26\]](https://arxiv.org/abs/2605.15199v1), nhưng lại có tỉ lệ hiện diện nhân vật thấp (79.6%) và độ trung thực khuôn mặt cực kém (0.327) [\[26\]](https://arxiv.org/abs/2605.15199v1). Ngược lại, các hệ thống quản lý bộ nhớ (EntityMem) giữ được khuôn mặt chính xác (0.740) mặc dù điểm thẩm mỹ bề mặt chỉ ở mức trung bình [\[26\]](https://arxiv.org/abs/2605.15199v1).

---

### 2. Phân tích chi tiết theo từng nhóm nguồn

| Nhóm nguồn | Đặc điểm & Luận điểm chính | Điểm hạn chế / Lệch pha |
| :--- | :--- | :--- |
| **Nghiên cứu arXiv** *(EntityBench, DrawVideo)* | Đánh giá bằng số liệu định lượng nghiêm ngặt (51 tiêu chí, fidelity gate) [\[26\]](https://arxiv.org/abs/2605.15199v1). Khẳng định sự nhất quán sụt giảm khi phim kéo dài [\[26\]](https://arxiv.org/abs/2605.15199v1). Chỉ ra metric DINOv2 cosine hay bị đánh lừa bởi ảnh tĩnh mờ nhạt [\[26\]](https://arxiv.org/abs/2605.15199v1). | Môi trường thử nghiệm bằng code/agent phức tạp, chưa tích hợp sẵn thành sản phẩm thương mại một-click cho người dùng phổ thông [\[26\]](https://arxiv.org/abs/2605.15199v1). |
| **Cộng đồng Reddit & Hacker News** | Phản ánh trải nghiệm thực tế không bộ lọc: chê trách lỗi vật lý (bánh xe quay ngược, chim cú bay phát ra tiếng) [\[19\]](https://news.ycombinator.com/item?id=44044043), hiện tượng "Thung lũng kỳ lạ" (uncanny valley) [\[19\]](https://news.ycombinator.com/item?id=44044043), giới hạn kiểm duyệt phiền phức [\[21\]](https://news.ycombinator.com/item?id=43536085) và tỉ lệ hỏng 50:1 [\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/). | Ý kiến tản mạn, nhiều người dùng thiếu kỹ năng viết prompt hoặc sử dụng sai công cụ dẫn đến kết quả kém rồi vội kết luận [\[23\]](https://www.reddit.com/r/generativeAI/comments/1rsyjer/). |
| **YouTubers & Content Creators** | Hướng dẫn quy trình thực tế (Workflow): dùng 480p/mini model để thử prompt trước khi tốn credit tạo 1080p [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM), dùng Video Reference thay vì Start-End frame [\[3, 7\]](https://www.youtube.com/watch?v=dOmKYJoRboE), lồng tiếng riêng [\[1, 2\]](https://www.youtube.com/watch?v=e9ZupmL9BcM). | Thường dùng các bản tạo thành công nhất để dựng clip demo, dễ tạo cảm giác AI tạo video rất dễ dàng [\[4, 10\]](https://www.youtube.com/watch?v=f4HcdR3cd4M). |
| **Nhà cung cấp SaaS** *(invideo, AI Magicx, Runway...)* | Quảng bá tính năng kéo-thả đơn giản, hỗ trợ định dạng chuyên nghiệp (ProRes 422HQ, HDR) [\[6\]](https://www.youtube.com/watch?v=WKO-YgMQhLI), cam kết quy trình từ storyboard ra phim chỉ trong vài ngày [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026). | Tuyên bố con số hiệu suất quá lạc quan (90%+ consistency, 50-70% yield) [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026) nhằm bán gói đăng ký / gói Lifetime [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026). |

---

### 3. Ai có lợi ích thương mại trong các khuyến nghị?

* **Các nhà cung cấp SaaS (Runway, invideo, AI Magicx, OpenArt, Higgsfield)**:
  * **Lợi ích**: Bán gói đăng ký hàng tháng (\$12–\$28/tháng) [\[6, 19\]](https://www.youtube.com/watch?v=WKO-YgMQhLI) hoặc các gói truy cập trọn đời "Lifetime Access" (\$69) [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026).
  * **Tác động đến khuyến nghị**: Họ có xu hướng nhấn mạnh vào các tính năng "tự động hóa", giấu đi tỉ lệ clip hỏng/phải reroll [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026), và khuyến khích người dùng tạo nhiều clip ở độ phân giải cao để nhanh hết credit [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
* **YouTubers & Creators có tài trợ / Affiliate**:
  * **Lợi ích**:
    * **Nhận tài trợ trực tiếp**: Runway tài trợ cho các kênh như *Theoretically Media* [\[6\]](https://www.youtube.com/watch?v=WKO-YgMQhLI); OpenArt tài trợ cho *Isa does AI* [\[3\]](https://www.youtube.com/watch?v=dOmKYJoRboE).
    * **Mã giới thiệu Affiliate**: Chia hoa hồng khi người dùng đăng ký cloud GPU (Mickmumpitz gắn link RunPod nhận thưởng \$5–\$500 [\[10\]](https://www.youtube.com/watch?v=ghFYDG0DF1w)) hoặc đăng ký Higgsfield/OpenArt [\[2, 3, 7\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
    * **Bán khóa học / Patreon**: Mickmumpitz và Dan Kieft kêu gọi người dùng trả tiền Patreon/School Community để lấy workflow ComfyUI và prompt nâng cao [\[2, 10\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
  * **Tác động đến khuyến nghị**: YouTubers thường ưu tiên giới thiệu công cụ mà họ có link affiliate hoặc nhà tài trợ, đồng thời thổi vồng khả năng của mô hình (*"vấn đề nhất quán đã là quá khứ"* [\[4\]](https://www.youtube.com/watch?v=f4HcdR3cd4M)).
* **Cộng đồng Reddit/HN & Nhà nghiên cứu arXiv**:
  * **Độc lập thương mại**: Đây là nhóm nguồn ít chịu ảnh hưởng tài chính nhất. Bài báo arXiv cung cấp các phép đo khách quan bằng mã nguồn công khai [\[26, 27\]](https://arxiv.org/abs/2605.15199v1), trong khi người dùng Reddit/HN chia sẻ trung thực về số tiền họ bị lãng phí và các lỗi kĩ thuật thực tế [\[1, 19, 21\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

---

## Q: Nghiên cứu arXiv nói gì về giới hạn hiện tại của việc tạo video nhiều shot nhất quán (multi-shot, entity consistency, storyboard keyframe)? Điều đó có ý nghĩa gì cho quy trình thực tế?

Các nghiên cứu công bố trên arXiv (đặc biệt là nghiên cứu về **EntityBench** [\[26\]](https://arxiv.org/abs/2605.15199v1) và **DrawVideo** [\[27\]](https://arxiv.org/abs/2605.23508v2)) đã chỉ ra những rào cản kỹ thuật cốt lõi của các mô hình video AI hiện tại, đồng thời gợi ý định hướng tối ưu cho quy trình làm phim thực tế.

---

### 1. Các giới hạn hiện tại theo nghiên cứu arXiv

* **Sự suy giảm nhất quán theo khoảng cách lặp lại (Recurrence Gap Decay)**:
  * Sự nhất quán của nhân vật, đối tượng và bối cảnh **sụt giảm nghiêm trọng khi khoảng cách giữa các shot xuất hiện lại (recurrence gap) tăng lên** [\[26\]](https://arxiv.org/abs/2605.15199v1). 
  * Khi phim kéo dài qua nhiều phân cảnh (từ 10 đến 50 shot), các mô hình hiện tại bị tích tụ sai số, dẫn đến hiện tượng trôi lệch diện mạo (identity drift) hoặc mất hút nhân vật [\[26\]](https://arxiv.org/abs/2605.15199v1).

* **Sự đánh đổi giữa Độ đẹp thẩm mỹ (Visual Quality) và Độ nhất quán nhân vật (Entity Consistency)**:
  * Các mô hình sinh video theo cơ chế toàn cục (holistic models như CineTrans) đạt điểm rất cao về độ nét khung hình, độ mượt chuyển động và tính thẩm mỹ [\[26\]](https://arxiv.org/abs/2605.15199v1).
  * Tuy nhiên, **độ đẹp bề mặt không đồng nghĩa với giữ đúng nhân vật**: CineTrans đạt điểm chất lượng hình ảnh cao nhưng tỷ lệ hiện diện đúng nhân vật giảm xuống **79.6%**, và độ trung thực khuôn mặt giảm sâu xuống **0.327** (so với 0.740 của hệ thống quản lý bộ nhớ chuyên biệt) [\[26\]](https://arxiv.org/abs/2605.15199v1).

* **Hạn chế của việc dùng cả khung hình cũ (Whole-frame Conditioning) làm tham chiếu**:
  * Việc nạp nguyên bức ảnh của shot trước làm điều kiện tham chiếu dễ khiến mô hình **hòa trộn bối cảnh cũ vào nhân vật** [\[26\]](https://arxiv.org/abs/2605.15199v1). Điều này làm cho nhân vật bị dính chặt vào ánh sáng hay phông nền cũ, gây khó khăn khi chuyển sang một địa điểm mới [\[26\]](https://arxiv.org/abs/2605.15199v1).

* **Sự sai lệch giữa chỉ số đo lường tự động (DINOv2) và đánh giá định danh thực tế (LLM/Human)**:
  * Các chỉ số đo độ tương đồng không gian ẩn (như DINOv2 cosine similarity) thường bị "đánh lừa" bởi các khuôn mặt nhạt nhòa, generic clustering [\[26\]](https://arxiv.org/abs/2605.15199v1). Chúng đạt điểm số tương đồng cao nhưng thực tế nhân vật đã bị biến đổi hoàn toàn [\[26\]](https://arxiv.org/abs/2605.15199v1). Đánh giá bằng LLM/VLM hoặc mắt người mới phản ánh đúng sự nhất quán [\[26\]](https://arxiv.org/abs/2605.15199v1).

* **Giới hạn kiểm soát cấu trúc nếu chỉ dùng Text Prompt đơn thuần**:
  * Sinh video dài trực tiếp từ câu lệnh văn bản (Text-to-Video) không cung cấp đủ khả năng kiểm soát chính xác về tư thế nhân vật, góc máy, vị trí bố cục và diễn biến chuyển động cục bộ [\[27\]](https://arxiv.org/abs/2605.23508v2).

---

### 2. Ý nghĩa & Bài học cho Quy trình Làm Video AI Thực tế

Những phát hiện trên từ arXiv đưa ra các chỉ dẫn quan trọng để xây dựng quy trình làm phim AI ổn định:

1. **Tách biệt Ngân hàng tài sản nhân vật (Isolated Entity Memory Bank)**:
   * Thay vì dùng nguyên ảnh chụp cả phân cảnh cũ để làm tham chiếu, hãy **tách riêng ảnh chân dung/trang phục của nhân vật ra khỏi phông nền** [\[26\]](https://arxiv.org/abs/2605.15199v1). Việc lưu trữ tài sản nhân vật dạng ô độc lập giúp mô hình tái tạo đúng diện mạo khi nhân vật di chuyển sang bối cảnh mới [\[26\]](https://arxiv.org/abs/2605.15199v1).

2. **Chuyển sang quy trình dựa trên Storyboard & Khung hình mốc (Staged & Storyboard-driven)**:
   * Áp dụng quy trình phân tầng: **Khóa cấu trúc không gian (bằng Sketch/Storyboard) → Sinh ảnh mốc (Colored Keyframe) → Mở rộng trạng thái hành động (Derivative Keyframes) → Sinh video cục bộ** [\[27\]](https://arxiv.org/abs/2605.23508v2).
   * Việc xác định rõ các mốc hành động giúp mô hình video tập trung nội suy chuyển động ở giữa thay vì phải tự đoán toàn bộ kịch bản [\[27\]](https://arxiv.org/abs/2605.23508v2).

3. **Sử dụng kỹ thuật First-Last-Frame (FLF2V) giữa các trạng thái hành động**:
   * Khóa cả khung hình bắt đầu (*Start frame*) và khung hình kết thúc (*End frame*) cho từng phân cảnh hành động ngắn để đảm bảo chuyển động diễn ra chính xác theo ý đồ người dựng mà không bị biến dạng giữa chừng [\[27\]](https://arxiv.org/abs/2605.23508v2).

4. **Sản xuất theo đơn vị Shot độc lập (Modular Shot Production)**:
   * Tổ chức dự án sao cho **mỗi shot là một đơn vị tạo riêng biệt** [\[27\]](https://arxiv.org/abs/2605.23508v2). Điều này cho phép người làm phim chỉnh sửa hoặc tạo lại (*reroll*) một shot bị hỏng mà không làm ảnh hưởng hay phải tạo lại toàn bộ chuỗi video [\[27\]](https://arxiv.org/abs/2605.23508v2).

5. **Đánh giá kiểm định thực chất thay vì tin vào điểm nét bề mặt**:
   * Không đánh giá chất lượng clip chỉ qua độ nét hay hiệu ứng bề mặt [\[26\]](https://arxiv.org/abs/2605.15199v1). Cần soi kỹ các đường nét đặc trưng của nhân vật (kiểu tóc, cấu trúc mặt, trang phục) qua từng cảnh quay kề nhau để phát hiện sớm lỗi trôi diện mạo trước khi đưa vào khâu dựng [\[26\]](https://arxiv.org/abs/2605.15199v1).

---

## Q: Những điểm ngoại lệ, rủi ro và khoảng trống: chi phí, kiểm duyệt nội dung, bản quyền, lip-sync, nhiều nhân vật trong một cảnh, video-to-video. Có công cụ nào như Midjourney, Sora 2, Seedance, Higgsfield được nhắc ít hoặc không có bằng chứng độc lập?

Dưới đây là tổng hợp các **điểm ngoại lệ, rủi ro, khoảng trống kỹ thuật** và **mức độ minh bạch của các công cụ** được đề cập trong các nguồn nghiên cứu và thảo luận thực tế:

---

### 1. Các điểm ngoại lệ, rủi ro và khoảng trống kỹ thuật

#### **a. Chi phí thực tế & Lãng phí Credit (High Costs & Credit Burn)**
* **Đốt ngân sách lãng phí**: Các bài hướng dẫn quảng cáo thường giấu chi phí tạo thử nghiệm. Thực tế, nhà làm phim AI Dan Kieft thừa nhận đã phải tiêu tốn **hơn \$1,000 tiền credit** chỉ để tạo đoạn phim 3 phút thô do vô số lần bấm tạo bị lỗi hoặc không như ý [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).
* **Chi phí thành phẩm cao**: Theo tính toán từ nhà cung cấp invideo, chi phí sản xuất phim AI hoàn chỉnh dao động từ **\$315 – \$750 cho mỗi phút thành phẩm** (ví dụ: một tập phim hoạt hình 3 phút tốn khoảng \$950 với 164 clip thô được tạo ra chỉ để lấy 41 clip) [\[16\]](https://invideo.io/faq/what-is-the-best-workflow-for-going-from-storyboard-to/).
* **Đơn giá từ mô hình**: Kling 3.0 tiêu tốn từ **6 – 16 credit/giây** tùy độ phân giải (720p/1080p) và việc bật/tắt âm thanh [\[11\]](https://kling.ai/quickstart/klingai-video-3-omni-model-user-guide); Runway Gen-4.5 có giá **\$0.12/giây** trong khi Aleph 2.0 (Video-to-Video) lên tới **\$0.28/giây** [\[14\]](https://docs.dev.runwayml.com/guides/models/).
* **Giải pháp tiết kiệm**: Các nhà tạo dung khuyến nghị nên tạo bản xem thử ở độ phân giải thấp **480p / mô hình Mini** trước để kiểm tra tính đúng đắn của prompt trước khi tốn credit tạo bản 1080p [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

#### **b. Kiểm duyệt nội dung (Content Moderation & Censorship)**
* **Rào cản từ mô hình thương mại Cloud**: Các nền tảng SaaS thương mại áp đặt bộ lọc kiểm duyệt rất khắt khe. Người dùng trên Reddit và Hacker News phàn nàn rằng ngay cả các cảnh phim bối cảnh zombie có chứa máu me (blood/gore) hoặc cảnh hành động kịch tính cũng bị hệ thống kiểm duyệt từ chối tạo [\[21, 22\]](https://news.ycombinator.com/item?id=43536085). Sora 2 cũng bị phàn nàn vì mức độ kiểm duyệt quá gắt gao [\[21\]](https://news.ycombinator.com/item?id=43536085).
* **Ưu thế của mô hình nguồn mở**: Các mô hình trọng số mở (open-weights) như **Wan 2.1 / Wan 2.2** hay **FLUX.1** chạy cục bộ được đánh giá cao vì **hoàn toàn không bị kiểm duyệt**, cho phép các nhà làm phim tự do sáng tạo các thể loại phim đặc thù [\[21\]](https://news.ycombinator.com/item?id=43536085).

#### **c. Rủi ro Bản quyền & Pháp lý (Copyright & IP Risks)**
* **Tình trạng pháp lý chưa bảo hộ**: Thảo luận trên Hacker News chỉ ra các phán quyết pháp lý hiện hành xác định rằng **nội dung sinh hoàn toàn bằng AI không được cấp bản quyền tác giả** [\[19\]](https://news.ycombinator.com/item?id=44044043).
* **Nguồn dữ liệu huấn luyện**: Hầu hết các mô hình lớn (như Veo, Sora, Kling) đều bị nghi ngờ huấn luyện trên hàng triệu video YouTube và phim điện ảnh mà chưa có sự đồng ý rõ ràng [\[19\]](https://news.ycombinator.com/item?id=44044043).
* **Rủi ro Deepfake & Mạo danh**: Nghiên cứu *EntityBench* cảnh báo khả năng duy trì nhân vật nhất quán có thể bị lạm dụng để tạo video giả mạo người thật (non-consensual deepfakes) hoặc thông tin sai lệch về chính trị [\[26\]](https://arxiv.org/abs/2605.15199v1).
* **Sự minh bạch về giấy phép**: Mô hình mở Wan 2.2 phát hành dưới giấy phép **Apache 2.0**, cho phép thương mại hóa và chỉnh sửa minh bạch [\[13\]](https://docs.comfy.org/tutorials/video/wan/wan2_2).

#### **d. Hạn chế về Lip-sync & Âm thanh thoại**
* **Lệch nhịp (Desync)**: Kling 3.0 gặp vấn đề trễ nhịp khẩu hình khi thoại dài. Người dùng phải khắc phục thủ công bằng cách đẩy file âm thanh lên sớm vài frame trong trình dựng phim để khớp môi [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg).
* **Lỗi mất tiếng (Bug)**: Veo 3 trên hệ thống Google Flow bị nhiều người dùng phàn nàn về lỗi tạo video ra nhưng hoàn toàn bị mất tiếng (missing audio) [\[19\]](https://news.ycombinator.com/item?id=44044043).
* **Tranh chấp nhân vật thoại**: Khi phân cảnh có 2 nhân vật, các mô hình AI thường bị rối và làm cho **cả hai nhân vật cùng nhép miệng nói một lúc** [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g). Giải pháp tạm thời là phải tách thành các shot quay cận cảnh (close-up) từng người [\[5\]](https://www.youtube.com/watch?v=31GR1pXlB1g).

#### **e. Nhiều nhân vật trong một cảnh (Multi-character Merging)**
* **Hiện tượng dính thuộc tính (Bleed-over / Merging)**: Khi nhập 2 hoặc nhiều nhân vật vào cùng một cảnh, mô hình AI rất dễ bị nhầm lẫn, hòa trộn khuôn mặt, quần áo hoặc màu tóc của nhân vật này sang nhân vật kia [\[9, 10\]](https://www.youtube.com/watch?v=TM8hd2lnrEk).
* **Giải pháp xử lý**: Cần dùng kỹ thuật khoanh vùng không gian **Bounding Box** (như trong Ideogram 4), hệ thống bộ nhớ tách biệt (**EntityMem** trích xuất từng nhân vật ra khỏi phông nền), hoặc gán file LoRA riêng cho từng nhân vật [\[10, 26\]](https://www.youtube.com/watch?v=ghFYDG0DF1w).

#### **f. Giới hạn của Video-to-Video (V2V) & Motion Transfer**
* **Vỡ nét khi chuyển động mạnh**: Công nghệ V2V hoặc sao chép diễn xuất sẽ bị vỡ hình, méo dạng khi video gốc có chuyển động quá nhanh, góc mặt thay đổi đột ngột hoặc góc quay camera phức tạp [\[24\]](https://www.reddit.com/r/generativeAI/comments/1tb9ugx/).
* **Bối cảnh bị đơ cứng (Background Stiffness)**: Khi áp dụng Motion Transfer, nhân vật di chuyển tốt nhưng bối cảnh xung quanh thường bị "hóa đá", đòi hỏi phải thêm prompt môi trường động (như *"lá cây rung rinh trong gió"*) hoặc dùng công cụ AI VFX để tách nền [\[1\]](https://www.youtube.com/watch?v=e9ZupmL9BcM).

---

### 2. Đánh giá mức độ minh bạch của các công cụ

| Công cụ | Tình trạng nhắc tới & Bằng chứng độc lập | Mức độ tin cậy / Đánh giá thực tế |
| :--- | :--- | :--- |
| **Sora 2 (OpenAI)** | **Nhắc tới nhiều nhưng bị chê trách**. Thiếu bằng chứng độc lập cho thấy tính hữu dụng thực tế trong làm phim [\[21\]](https://news.ycombinator.com/item?id=43536085). | Người dùng Hacker News và Reddit đánh giá Sora 2 ra mắt quá muộn, đắt đỏ, kiểm duyệt gắt gao, video tạo ra bị static/thiếu chuyển động và **kém xa Kling hay Veo 3** [\[19, 21\]](https://news.ycombinator.com/item?id=44044043). |
| **Midjourney** | **Chỉ xuất hiện ở bước tiền kỳ thô**. | Hầu như không được nhắc tới trong khâu tạo video. Chủ yếu chỉ được dùng để tạo ảnh ý tưởng (concept art) hoặc ảnh mốc ban đầu trước khi chuyển sang các mô hình chuyên dụng [\[6, 15\]](https://www.youtube.com/watch?v=WKO-YgMQhLI). |
| **Seedance 2.0 / 2.5** | **Được YouTubers đánh giá cao nhưng thiếu benchmark độc lập**. | Được các YouTubers (như Isa does AI, Dan Kieft) khen ngợi ở khả năng Reference-to-Video [\[3, 6\]](https://www.youtube.com/watch?v=dOmKYJoRboE), nhưng chỉ số "8.5/10 consistency" hoàn toàn là số liệu tự phong từ các bài PR thương mại (như AI Magicx) chứ chưa có bài báo khoa học đo lường [\[18\]](https://www.aimagicx.com/blog/long-form-ai-video-character-consistency-guide-2026). |
| **Higgsfield (Cinema Studio)** | **Xuất hiện ít, chủ yếu qua nội dung tài trợ**. | Được nhắc đến trong video của Dan Kieft nhờ tính năng Tag photo/multi-shot [\[2\]](https://www.youtube.com/watch?v=0CjArtUh_Wg), nhưng thiếu các đánh giá kiểm chứng độc lập từ cộng đồng mã nguồn mở hay nghiên cứu academe. |

---

