# Chờ duyệt 03/11/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`; kiểm tra `curl` tới `api.msedgeservices.com` và `speech.platform.bing.com` lúc 08:34 UTC: `connect_rejected`), nên **cả 4 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `03.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch/curl tới các báo bị chặn trong phiên cloud; số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn) và đối chiếu nhiều báo được phép. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 4 (VN-Index): số đóng cửa 3/11 chỉ có 1 nguồn – xem mục rủi ro.
- Lần render đầu, video 1–3 dài 48–52 giây (vượt 45 giây) → đã rút gọn lời đọc và render lại.
- Nhánh này tiếp tục mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (ngày 19/10, cũ hơn 14 ngày).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (03/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Lương tối thiểu vùng tăng 7,8% từ 1/1/2027

- **File:** `03.11/video/video-1.mp4` (39,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Lương tối thiểu chính thức tăng từ 2027!
- **Rủi ro:** Thấp – Nghị định 399/2026/NĐ-CP đã ban hành, 4 báo khớp số (Báo Chính phủ, VietnamPlus, Tuổi Trẻ, VnExpress). Không nêu chi tiết thay đổi địa bàn vùng (chưa xác minh).

**Caption (dán vào TikTok):**

```
Chính phủ đã ban hành Nghị định 399/2026/NĐ-CP: từ 1/1/2027, lương tối thiểu vùng tăng bình quân 7,8%, thêm 310.000–390.000 đồng/tháng. Vùng 1 lên 5,7 triệu, vùng 4 lên 4,04 triệu đồng/tháng. Bạn đang làm ở vùng mấy? 👇
Nguồn: Báo Chính phủ, VietnamPlus, Tuổi Trẻ, VnExpress. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #luongtoithieu #nguoilaodong #tintuc
```

**Nguồn:**
- Báo Chính phủ – "Mức lương tối thiểu từ ngày 1/1/2027 đối với người lao động làm việc theo hợp đồng" – 03/11/2026 – https://baochinhphu.vn/muc-luong-toi-thieu-tu-ngay-1-1-2027-doi-voi-nguoi-lao-dong-lam-viec-theo-hop-dong-102261103113728634.htm
- VietnamPlus – "Lương tối thiểu chính thức tăng từ đầu năm 2027, mức thấp nhất là 4,04 triệu đồng" – 03/11/2026 – https://www.vietnamplus.vn/luong-toi-thieu-chinh-thuc-tang-tu-dau-nam-2027-muc-thap-nhat-la-404-trieu-dong-post1145853.vnp
- Tuổi Trẻ – "Tăng lương tối thiểu vùng từ 1-1-2027, cao nhất tăng tới 390.000 đồng" – 03/11/2026 – https://tuoitre.vn/tang-luong-toi-thieu-vung-tu-1-1-2027-cao-nhat-tang-toi-390000-dong-100261103131209338.htm
- VnExpress – "Lương tối thiểu vùng tăng 310.000-390.000 đồng từ năm 2027" – 03/11/2026 – https://vnexpress.net/luong-toi-thieu-vung-tang-310-000-390-000-dong-tu-nam-2027-5140183.html

---

## Video 2: CPI tháng 10 tăng 0,2% vì giá xăng

- **File:** `03.11/video/video-2.mp4` (36,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá xăng tăng gần 7%, giá cả tăng theo?
- **Rủi ro:** Thấp – số liệu chính thức Cục Thống kê công bố 3/11, VietnamPlus/Dân Trí/VnEconomy khớp.

**Caption (dán vào TikTok):**

```
Cục Thống kê: CPI tháng 10/2026 tăng 0,20% so với tháng 9 và 5,09% so với cùng kỳ, chủ yếu do giá xăng tăng 6,86%. Bình quân 10 tháng, CPI tăng 4,57%. Chi tiêu nhà bạn tháng này có tăng không? 🛒👇
Nguồn: Cục Thống kê, VietnamPlus, Dân Trí, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #cpi #giaxang #tintuc
```

**Nguồn:**
- Cục Thống kê – "Chỉ số giá tiêu dùng, chỉ số giá vàng và chỉ số giá đô la Mỹ tháng Mười và mười tháng năm 2026" – 03/11/2026 – https://www.nso.gov.vn/du-lieu-va-so-lieu-thong-ke/2026/11/chi-so-gia-tieu-dung-chi-so-gia-vang-va-chi-so-gia-do-la-my-thang-muoi-va-muoi-thang-nam-2026/
- VietnamPlus – "CPI tháng 10/2026 tăng 0,20%, chủ yếu do giá nhiên liệu" – 03/11/2026 – https://www.vietnamplus.vn/cpi-thang-muoi-tang-020-chu-yeu-do-gia-nhien-lieu-dieu-chinh-tang-len-post1145779.vnp
- Dân Trí – "Giá xăng tăng gần 7% kéo chỉ số giá tiêu dùng đi lên" – 03/11/2026 – https://dantri.com.vn/kinh-doanh/gia-xang-tang-gan-7-keo-chi-so-gia-tieu-dung-di-len-20261103124452854.htm
- VnEconomy – "Giá nhiên liệu và dịch vụ tác động chỉ số CPI tháng 10 tăng nhẹ" – 03/11/2026 – https://vneconomy.vn/ap-luc-tu-gia-nhien-lieu-va-dich-vu-day-cpi-thang-10-tang-020.htm

---

## Video 3: FDI giải ngân 10 tháng cao nhất 5 năm

- **File:** `03.11/video/video-3.mp4` (40,2 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vốn ngoại đổ vào Việt Nam cao nhất 5 năm!
- **Rủi ro:** Thấp – số ước tính của Cục Thống kê (video ghi "ước"), VietnamPlus + VnEconomy khớp.

**Caption (dán vào TikTok):**

```
Cục Thống kê ước vốn FDI giải ngân 10 tháng 2026 đạt 24,08 tỷ USD, tăng 13,1% – cao nhất cùng kỳ 5 năm qua. Vốn đăng ký đạt 54,85 tỷ USD, tăng 74%, cao nhất từ năm 2009. 🏭👇
Nguồn: VietnamPlus, VnEconomy, Cục Thống kê. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #fdi #dautu #tintuc
```

**Nguồn:**
- VietnamPlus – "Vốn FDI thực hiện mười tháng lập đỉnh cùng đầu tư công tăng trưởng bứt phá" – 03/11/2026 – https://www.vietnamplus.vn/von-fdi-thuc-hien-muoi-thang-lap-dinh-cung-dau-tu-cong-tang-truong-but-pha-post1145825.vnp
- VnEconomy – "10 tháng năm 2026: Vốn FDI đăng ký vào Việt Nam lập đỉnh, cao nhất 17 năm nay" – 03/11/2026 – https://vneconomy.vn/10-thang-nam-2026-von-fdi-dang-ky-vao-viet-nam-lap-dinh-cao-nhat-17-nam-nay.htm
- Cục Thống kê – "Báo cáo tình hình kinh tế – xã hội tháng Mười và 10 tháng năm 2026" – 03/11/2026 – https://www.nso.gov.vn/bai-top/2026/11/bao-cao-tinh-hinh-kinh-te-xa-hoi-thang-muoi-va-10-thang-nam-2026/

---

## Video 4: VN-Index mất mốc 1.700 điểm

- **File:** `03.11/video/video-4.mp4` (41,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** VN-Index vừa mất mốc 1.700 điểm
- **Rủi ro:** Trung bình–Thấp – ⚠️ điểm đóng cửa 3/11 (1.699,62) mới thấy ở 1 báo (VnEconomy); phiên 2/11 có 3 báo khớp. Nên kiểm tra lại trên hsx.vn trước khi đăng. Không nêu mã cổ phiếu, không dự báo, không khuyến nghị mua/bán.

**Caption (dán vào TikTok):**

```
VN-Index giảm phiên thứ 4 liên tiếp, đóng cửa 3/11 ở 1.699,62 điểm, mất hơn 40 điểm chỉ trong 2 phiên đầu tuần. Khối ngoại đã bán ròng nhiều phiên liên tiếp. 📉👇
Nguồn: VnEconomy, VnExpress, Dân Trí, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #chungkhoan #vnindex #tintuc
```

**Nguồn:**
- VnEconomy – "VN-Index giảm sâu, cổ phiếu VIC và dầu khí gây áp lực lớn, thanh khoản cực thấp" – 03/11/2026 – https://vneconomy.vn/co-phieu-tru-giam-manh-ep-diem-so-thi-truong-phan-hoa-voi-thanh-khoan-cuc-thap.htm
- VnExpress – "VN-Index giảm hơn 30 điểm" – 02/11/2026 – https://vnexpress.net/vn-index-giam-hon-30-diem-5139827.html
- Dân Trí – "Chứng khoán lại giảm mạnh, cổ phiếu ngân hàng bị bán tháo" – 02/11/2026 – https://dantri.com.vn/kinh-doanh/chung-khoan-lai-giam-manh-co-phieu-ngan-hang-bi-ban-thao-20261102155021622.htm
- Tuổi Trẻ – "Điều gì khiến VN-Index bất ngờ mất hơn 30 điểm đầu tuần?" – 02/11/2026 – https://tuoitre.vn/dieu-gi-khien-vn-index-bat-ngo-mat-hon-30-diem-dau-tuan-100261102173805193.htm

---

## Tự kiểm tra
- [x] Mọi số liệu có nguồn báo/cơ quan được phép
- [x] Không có câu khuyến nghị mua/bán, không dự báo giá
- [x] Không chép nguyên văn báo – lời tự viết
- [x] Không nội dung chính trị/nhạy cảm
- [x] Mỗi video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Đã xem khung hình: dấu tiếng Việt đúng, chữ không tràn
- [x] Thời lượng 30–45 giây
- [ ] Giọng đọc AI – **chưa có** (TTS bị chặn)
