# Báo cáo thiết lập – 19/10/2026

## Kết quả từng hạng mục

| Hạng mục | Kết quả | Ghi chú |
|---|---|---|
| `npm install` (Remotion 4.0.536, React 18.3.1, TypeScript, msedge-tts 2.1.0) | ✅ Đạt | registry.npmjs.org truy cập được |
| `npx remotion browser ensure` | ❌ Không đạt → ✅ đã khắc phục | `remotion.media` bị chặn. `build-day.mjs` và `remotion.config.ts` tự dùng Chromium có sẵn `/opt/pw-browsers/chromium_headless_shell-*/` |
| Font Be Vietnam Pro | ✅ Đạt (đã đổi cách nạp) | Chromium render không tải được `fonts.gstatic.com` qua proxy (`ERR_CERT_AUTHORITY_INVALID`). Font được đóng gói trong `src/fonts/` (giấy phép OFL), nên không còn dùng `@remotion/google-fonts` lúc render |
| Giọng đọc Edge TTS | ❌ **Không đạt** | Proxy trả **403** cho `speech.platform.bing.com` và `api.msedgeservices.com` (msedge-tts 2.x kết nối WebSocket tới `wss://api.msedgeservices.com/tts/...`) |
| Render video mẫu | ✅ Đạt (không tiếng) | `_mau/video/video-1.mp4`: **44,4 giây**, **13,4 MB**, 1080×1920 H.264, render **138 giây** (tổng 150 giây) |
| Ảnh tĩnh kiểm tra | ✅ Đạt | `_mau/anh/hook.png`, `stat.png`, `cta.png`: dấu tiếng Việt đúng, không tràn khung, phụ đề tô màu từ đang đọc đúng |

## Lỗi mạng chi tiết

1. **Giọng đọc** – `Edge TTS WebSocket error: Unexpected server response: 403` (3 lần thử).
   Video vẫn được render, thời lượng ước lượng 0,38 giây/từ, **không có tiếng**; cảnh báo ghi ở `_mau/build-log.md`.
2. **Chrome của Remotion** – `getaddrinfo ENOTFOUND remotion.media` / proxy 403. Đã khắc phục bằng Chromium có sẵn.
3. **Google Fonts trong Chromium** – `net::ERR_CERT_AUTHORITY_INVALID` khi tải `fonts.gstatic.com`. Đã khắc phục bằng font đóng gói.

## Việc bạn cần làm để có giọng đọc

Vào cài đặt môi trường cloud (menu môi trường trên thanh tiêu đề phiên → **Edit** → **Network access**),
chọn mức truy cập rộng hơn hoặc thêm vào **Allowed domains** (giữ tích "Allow package managers"):

- `api.msedgeservices.com` (**bắt buộc** – dịch vụ đọc)
- `speech.platform.bing.com` (danh sách giọng)
- `remotion.media` (không bắt buộc – Chrome của Remotion)

Hướng dẫn: https://code.claude.com/docs/en/cloud-environments#network-access

Sau khi mở, chạy lại `node scripts/build-day.mjs _mau` để kiểm tra; bảng cuối sẽ hiện cột "Giọng đọc: Có".
(Script đã tự dùng proxy `HTTPS_PROXY` cho kết nối WebSocket.)

## Lưu ý cho routine hằng ngày

- Bước `npx remotion browser ensure` trong CLAUDE.md sẽ báo lỗi chừng nào `remotion.media` còn bị chặn — **có thể bỏ qua**,
  `build-day.mjs` tự dùng Chromium có sẵn.
- Khi TTS bị chặn, video vẫn ra nhưng không tiếng; PR nên ghi rõ điều này.

## Giọng đọc – kiểm tra lại 19/10/2026 (phiên routine, ~09:18 UTC)

Kết quả: ❌ **Vẫn bị chặn** – chưa render lại video mẫu (video `_mau/video/video-1.mp4` cũ, không tiếng, giữ nguyên).

| Domain | Kết quả |
|---|---|
| `speech.platform.bing.com` | ❌ `CONNECT tunnel failed, response 403` (proxy: `connect_rejected` – policy denial) |
| `api.msedgeservices.com` | ❌ `CONNECT tunnel failed, response 403` (proxy: `connect_rejected` – policy denial) |
| `registry.npmjs.org` (đối chứng) | ✅ 200 |

Có thể thay đổi chưa được lưu, hoặc phiên này dùng môi trường khác với môi trường đã sửa.
Hãy kiểm tra lại: menu môi trường trên thanh tiêu đề phiên → **Edit** → **Network access** →
**Allowed domains** có đúng `api.msedgeservices.com` và `speech.platform.bing.com` (giữ tích "Allow package managers"),
rồi lưu. Hướng dẫn: https://code.claude.com/docs/en/cloud-environments#network-access
