# TikTok Agent – Kênh tin Kinh tế / Tài chính (chạy trên Claude Code cloud)

Repo: https://github.com/thaith89-rgb/mrthais
Agent chạy trong routine cloud mỗi ngày lúc **15:30 giờ Việt Nam (08:30 UTC)**. Mọi nội dung viết bằng tiếng Việt.

## Cấu trúc repo

```
CLAUDE.md                  ← file này (quy trình chuẩn)
config.json                ← tên kênh, giọng đọc, màu sắc
package.json, src/         ← bộ máy dựng video Remotion (React + TypeScript)
scripts/build-day.mjs      ← tạo giọng đọc + render toàn bộ video của 1 ngày
DD.MM/                     ← thư mục mỗi ngày, ví dụ 19.10
  01-nghien-cuu.md
  02-kich-ban.md
  kich-ban/video-N.json    ← kịch bản máy đọc được
  video/video-N.mp4        ← video thành phẩm 1080x1920
  00-DUYET.md              ← tóm tắt để duyệt + gói đăng bài (caption, hashtag, nguồn)
```

## Quy trình hằng ngày

1. **Ngày**: lấy ngày hiện tại theo giờ Việt Nam (`TZ=Asia/Ho_Chi_Minh date +%d.%m`). Nếu đã có `DD.MM/00-DUYET.md` trên nhánh `duyet/DD.MM` hoặc `main` thì dừng.
2. **Chuẩn bị**: `npm ci` (hoặc `npm install`), rồi `npx remotion browser ensure`.
3. **Bước 1 – Nghiên cứu**: dùng WebSearch/WebFetch tìm tin kinh tế – tài chính Việt Nam trong 24 giờ qua (giá vàng, tỷ giá, lãi suất, xăng dầu, chứng khoán, bất động sản, chính sách mới có hiệu lực, giá tiêu dùng, doanh nghiệp lớn, GDP/CPI/xuất nhập khẩu). Ghi `01-nghien-cuu.md` theo mẫu:
   ```
   ## [Tên tin]
   - Tóm tắt (tự viết lại, không chép nguyên văn): ...
   - Số liệu chính: ...
   - Nguồn: [Tên báo] – "Tiêu đề bài" – URL – ngày đăng
   - Nguồn đối chiếu: ...
   - Đánh giá rủi ro pháp lý: Thấp / Trung bình / Cao (lý do)
   ```
4. **Bước 2 – Chọn 3–5 topic** (chấm 1–5: tác động túi tiền người xem, độ mới, gây tò mò, dễ giải thích trong 30–45 giây, an toàn pháp lý; rủi ro Cao → loại; đa dạng chủ đề). Viết `02-kich-ban.md` (bản người đọc) và `kich-ban/video-N.json` (bản máy đọc, schema bên dưới).
5. **Bước 3 – Dựng video**: `node scripts/build-day.mjs DD.MM` → `DD.MM/video/video-N.mp4`. Mở lại vài khung hình (`npx remotion still`) để tự kiểm tra chữ không tràn, không lỗi dấu tiếng Việt.
6. **Tự kiểm tra lần cuối**: mọi số liệu có nguồn; không câu khuyến nghị mua/bán; không chép nguyên văn báo; không nội dung nhạy cảm; video có dòng nguồn + miễn trừ.
7. **Báo duyệt**: viết `00-DUYET.md` (mỗi video: tiêu đề, hook, thời lượng, caption, hashtag, nguồn, rủi ro, đường dẫn file mp4). Tạo nhánh `duyet/DD.MM`, commit, push, mở **Pull Request** tiêu đề `Chờ duyệt DD.MM – N video (chủ đề 1, chủ đề 2…)`, nội dung PR = `00-DUYET.md`.
8. **Không** đăng lên TikTok, không đăng nhập bất kỳ dịch vụ nào. Người dùng tự xem PR, tải mp4, đăng và hẹn giờ 17:00 trên TikTok Studio, rồi merge PR để lưu trữ.
9. **Dọn dẹp**: trên nhánh mới, xoá các file `*/video/*.mp4` cũ hơn 14 ngày để repo không phình to.

Nếu một bước lỗi: vẫn ghi lại những gì đã làm vào `00-DUYET.md`, mở PR với tiêu đề bắt đầu bằng `[LỖI]` và mô tả lỗi.

## Nguồn tin được phép

- Báo: VnExpress, Tuổi Trẻ, Thanh Niên, Dân Trí, VietnamPlus (TTXVN), Báo Chính phủ (baochinhphu.vn), VnEconomy, Báo Đầu tư, Người Lao Động, Lao Động, Tiền Phong, Thời báo Kinh tế Sài Gòn, Nhân Dân, VTV.
- Cơ quan: Ngân hàng Nhà nước (sbv.gov.vn), Cục Thống kê (gso.gov.vn), Bộ Tài chính (mof.gov.vn), Bộ Công Thương (moit.gov.vn), HOSE/HNX (hsx.vn, hnx.vn), chinhphu.vn.
- **Không dùng làm nguồn**: mạng xã hội, diễn đàn, YouTube/TikTok, blog cá nhân, trang tin không rõ giấy phép, tin "rò rỉ".
- Mỗi số liệu ≥ 1 nguồn chính thống, tốt nhất 2 nguồn khớp nhau.

## Quy tắc pháp lý & chính sách (BẮT BUỘC)

**Pháp luật Việt Nam** (Luật An ninh mạng 2018, Luật Báo chí 2016, Luật Sở hữu trí tuệ, Nghị định 147/2024/NĐ-CP và các quy định xử phạt liên quan):
- Không tin sai sự thật, chưa kiểm chứng, tin đồn; không suy diễn gây hoang mang (đổ vỡ ngân hàng, "rút tiền ngay", "sắp đổi tiền"…).
- Không xuyên tạc, chống phá Nhà nước, chính sách, lãnh đạo; không chính trị nhạy cảm, tôn giáo, dân tộc, chủ quyền.
- Không xúc phạm cá nhân/doanh nghiệp; không kết luận thay cơ quan chức năng về vụ việc đang điều tra.
- Không chép nguyên văn bài báo, không dùng ảnh/video của báo; tự tóm tắt và **ghi nguồn** trên video và caption.
- Không lộ thông tin cá nhân.

**Tài chính – đầu tư:** không khuyến nghị mua/bán cụ thể, không "phím hàng", không hứa lợi nhuận, không quảng cáo sàn/coin/app vay; không khuyến khích đầu tư tiền mã hoá. Mỗi video có dòng *"Thông tin tham khảo, không phải lời khuyên đầu tư."*

**TikTok:** không clickbait sai sự thật; không nhạc/hình có bản quyền; video có giọng AI → nhắc người dùng bật nhãn "Nội dung do AI tạo" khi đăng; không quảng cáo thương hiệu.

## Kịch bản video (30–45 giây, 5–6 cảnh, 9:16)

| Cảnh | Loại | Nội dung |
|---|---|---|
| 1 | `hook` | Câu hỏi/số liệu gây chú ý ≤ 10 từ, 0–3 giây |
| 2 | `stat` | Chuyện gì xảy ra + 1 số liệu lớn |
| 3–4 | `points` / `chart` | 2–3 ý: vì sao, ảnh hưởng tới người xem |
| 5 | `points` | Điều người xem nên lưu ý (không khuyến nghị mua/bán) |
| 6 | `cta` | "Theo dõi để cập nhật 17h mỗi ngày" + nguồn + miễn trừ |

Schema `kich-ban/video-N.json`:
```json
{
  "title": "Giá vàng lập đỉnh mới",
  "caption": "Giá vàng lại tăng – bạn đang giữ vàng hay tiền? 👇",
  "hashtags": ["#kinhte", "#taichinh", "#giavang", "#tintuc"],
  "sources": [{ "name": "VnExpress", "title": "…", "url": "https://…", "date": "19/10/2026" }],
  "scenes": [
    { "type": "hook",   "text": "Giá vàng vừa lập đỉnh mới?", "voice": "Lời đọc của cảnh…" },
    { "type": "stat",   "label": "Vàng miếng SJC", "value": "…", "unit": "triệu đồng/lượng", "change": "+1,2", "voice": "…" },
    { "type": "points", "heading": "Vì sao tăng?", "items": ["…", "…", "…"], "voice": "…" },
    { "type": "chart",  "heading": "Diễn biến 5 phiên", "bars": [{ "label": "15/10", "value": 1 }], "unit": "…", "voice": "…" },
    { "type": "cta",    "text": "Theo dõi để cập nhật 17h mỗi ngày", "voice": "…" }
  ]
}
```
Chữ trên màn hình ≤ 15 từ mỗi cảnh. Lời đọc tự nhiên, câu ngắn, đọc số theo kiểu tiếng Việt ("một trăm hai mươi triệu đồng").
