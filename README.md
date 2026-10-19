# @mrthais – Máy sản xuất video TikTok tin Kinh tế / Tài chính

Repo này tự động làm video TikTok dọc (1080×1920, 30–45 giây) tóm tắt tin kinh tế – tài chính Việt Nam.
Mỗi ngày lúc **15:30 giờ Việt Nam**, một routine Claude Code chạy trên cloud: đọc `CLAUDE.md`, nghiên cứu tin
từ báo chính thống, viết kịch bản, dựng video bằng Remotion (`node scripts/build-day.mjs DD.MM`) rồi mở
Pull Request chờ bạn duyệt. Không cần cài gì trên máy của bạn. Agent **không** tự đăng lên TikTok.

## Cách duyệt mỗi ngày

1. Vào tab **Pull requests** của repo, mở PR **"Chờ duyệt DD.MM – …"**. Nội dung PR có tiêu đề, caption,
   hashtag, nguồn tin và đánh giá rủi ro của từng video.
2. Mở tab **Files changed** → tìm `DD.MM/video/video-N.mp4` → bấm **⋯ → View file** → **Download** để tải video.
3. Mở **TikTok Studio**, tải video lên, dán caption + hashtag từ PR, **hẹn giờ 17:00**,
   và **bật nhãn "Nội dung do AI tạo"** (video dùng giọng đọc AI).
4. Đăng xong, quay lại PR bấm **Merge pull request** để lưu trữ.

Nếu PR có tiêu đề bắt đầu bằng `[LỖI]`, đọc phần mô tả để biết bước nào hỏng.

## Đổi giọng đọc, màu sắc, tên kênh

Sửa `config.json` (có thể sửa ngay trên GitHub bằng nút bút chì ✏️):

| Khoá | Ý nghĩa | Ví dụ |
|---|---|---|
| `channelName` | Tên kênh hiện ở góc trên video | `"@mrthais"` |
| `voice` | Giọng đọc Microsoft Edge | `"vi-VN-HoaiMyNeural"` (nữ), `"vi-VN-NamMinhNeural"` (nam) |
| `voiceRate` | Tốc độ đọc | `"+8%"`, `"+0%"`, `"-5%"` |
| `colors` | Màu nền, chữ, nhấn, tăng (xanh), giảm (đỏ) | `"accent": "#F5B700"` |

## Thư mục mẫu

`_mau/` chứa 1 kịch bản và video **minh hoạ** (không phải tin thật) để xem thử giao diện:
`_mau/video/video-1.mp4`, ảnh tĩnh trong `_mau/anh/`.

## Dành cho người kỹ thuật

- `npm install` → `npm run build-day -- 19.10` (render), `npm run studio` (xem trước trong Remotion Studio).
- Xem 1 khung hình: `npx remotion still src/index.ts NewsVideo out.png --props=19.10/.audio/video-1.props.json --public-dir=19.10/.audio --frame=30`
- Font Be Vietnam Pro (OFL) được đóng gói trong `src/fonts/`. Nếu không tải được Chrome của Remotion,
  script tự dùng Chromium có sẵn ở `/opt/pw-browsers` (hoặc biến môi trường `REMOTION_BROWSER`).
