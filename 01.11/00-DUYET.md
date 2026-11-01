# Chờ duyệt 01/11/2026 – 3 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (403 tới `api.msedgeservices.com` / `speech.platform.bing.com`), nên **cả 3 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `01.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn trong phiên cloud (`vnexpress.net` ENOTFOUND), số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn) và đối chiếu nhiều báo được phép; chi tiết trong `01.11/01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- Không làm video vàng hôm nay vì giá SJC (136–139 triệu) trùng video ngày 31/10.
- Nhánh này tiếp tục mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: không có video nào cũ hơn 14 ngày trên `main` (chỉ có video mẫu `_mau/` ngày 19/10 – 13 ngày, giữ nguyên).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (01/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Giá điện giảm 2% từ 1/11

- **File:** `01.11/video/video-1.mp4` (37,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá điện giảm lần đầu sau gần 20 năm!
- **Rủi ro:** Thấp – quyết định chính thức của EVN (1305/QĐ-EVN) và Bộ Công Thương (2892/QĐ-BCT), nhiều báo khớp số. Con số "~94% hộ giảm hoặc giữ nguyên" là ước tính của Bộ Công Thương (video ghi "ước"). "Lần đầu sau gần 20 năm" theo VnExpress/VnEconomy.

**Caption (dán vào TikTok):**

```
Từ 1/11, giá bán lẻ điện bình quân giảm 2%, còn 2.159,9 đồng/kWh (chưa VAT) – lần giảm đầu tiên sau gần 20 năm. Điện sinh hoạt chuyển sang biểu giá 5 bậc. Nhà bạn mỗi tháng dùng khoảng bao nhiêu số điện? 💡👇
Nguồn: VietnamPlus, VnExpress, Dân Trí, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giadien #tiendien #tintuc
```

**Nguồn:**
- VietnamPlus – "EVN điều chỉnh giá điện giảm 2%, còn 2.159,9 đồng/kWh từ ngày mai, 1/11" – 31/10/2026 – https://www.vietnamplus.vn/evn-dieu-chinh-gia-dien-giam-2-con-21599-dongkwh-tu-ngay-mai-111-post1145418.vnp
- VnExpress – "Giá điện giảm 2% từ ngày 1/11" – 31/10/2026 – https://vnexpress.net/gia-dien-giam-2-tu-ngay-mai-5139154.html
- Dân Trí – "Chính thức áp dụng giá điện 5 bậc, cao nhất 3.844 đồng/kWh" – 01/11/2026 – https://dantri.com.vn/kinh-doanh/chinh-thuc-ap-dung-gia-dien-5-bac-cao-nhat-3844-dongkwh-20261101101318385.htm
- Tuổi Trẻ – "Giá điện giảm 2%: Chi tiết mức giá 5 bậc thang điện sinh hoạt" – 01/11/2026 – https://tuoitre.vn/gia-dien-giam-2-chi-tiet-muc-gia-5-bac-thang-dien-sinh-hoat-100261101091531402.htm

---

## Video 2: Giá xăng giảm gần 2.000 đồng/lít

- **File:** `01.11/video/video-2.mp4` (39,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Đổ xăng rẻ hơn gần 2.000 đồng/lít!
- **Rủi ro:** Thấp – Nghị quyết 45/2026/NQ-CP và giá điều hành chính thức. Giá 24.223 đồng/lít là giá **tối đa** theo Bộ Công Thương (Dân Trí làm tròn 24.220). Giá xăng có thể đổi ở kỳ điều hành tiếp theo – nên kiểm tra lại trước 17h nếu có kỳ điều chỉnh mới.

**Caption (dán vào TikTok):**

```
Từ 0h ngày 1/11, thuế tiêu thụ đặc biệt với xăng về 0%: E5 RON 92 giảm 1.804 đồng/lít, còn tối đa 24.223 đồng; E10 RON 95 giảm 1.575 đồng/lít. Bạn hay đổ loại xăng nào? ⛽👇
Nguồn: VietnamPlus, Dân Trí, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giaxang #xangdau #tintuc
```

**Nguồn:**
- VietnamPlus – "Thuế tiêu thụ đặc biệt về 0%, giá xăng đồng loạt giảm tới 1.804 đồng mỗi lít" – 31/10/2026 – https://www.vietnamplus.vn/thue-tieu-thu-dac-biet-ve-0-gia-xang-dong-loat-giam-toi-1804-dong-moi-lit-post1145423.vnp
- Dân Trí – "Giá xăng giảm gần 2.000 đồng/lít từ 0h ngày 1/11" – 31/10/2026 – https://dantri.com.vn/kinh-doanh/gia-xang-giam-gan-2000-donglit-tu-0h-ngay-111-20261031210006111.htm
- Tuổi Trẻ – "Giảm thuế tiêu thụ đặc biệt về 0%, đồng loạt giảm giá xăng từ 0h đêm nay" – 31/10/2026 – https://tuoitre.vn/giam-thue-tieu-thu-dac-biet-ve-0-dong-loat-giam-gia-xang-tu-0h-dem-nay-100261031203216328.htm
- VietnamPlus – "Ban hành quy định về thuế tiêu thụ đặc biệt đối với xăng" – 01/11/2026 – https://www.vietnamplus.vn/ban-hanh-quy-dinh-ve-thue-tieu-thu-dac-biet-doi-voi-xang-post1145478.vnp

---

## Video 3: Giá gạo xuất khẩu cao nhất gần 2 năm

- **File:** `01.11/video/video-3.mp4` (38,3 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá gạo Việt cao nhất gần 2 năm!
- **Rủi ro:** Thấp – giá **chào bán** do thương nhân báo cáo (video ghi rõ), không dự báo. Mốc "cao nhất kể từ tháng 1/2025" theo VietnamPlus, Dân Trí ghi "gần 2 năm".

**Caption (dán vào TikTok):**

```
Gạo 5% tấm của Việt Nam được chào bán 470–480 USD/tấn (29/10), tăng khoảng 30 USD sau một tuần – cao nhất gần 2 năm do nguồn cung thắt chặt và lo ngại El Niño. 🌾👇
Nguồn: VietnamPlus, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giagao #xuatkhau #tintuc
```

**Nguồn:**
- VietnamPlus – "Giá gạo Việt Nam chạm đỉnh 22 tháng vì lo thiếu nguồn cung" – 31/10/2026 – https://vietnamplus.vn/gia-gao-viet-nam-cham-dinh-22-thang-truoc-noi-lo-nguon-cung-post1145390.vnp
- Dân Trí – "Giá gạo xuất khẩu tăng 30 USD/tấn, lên cao nhất gần 2 năm" – 31/10/2026 – https://dantri.com.vn/kinh-doanh/gia-gao-xuat-khau-tang-30-usdtan-len-cao-nhat-gan-2-nam-20261031212305595.htm

