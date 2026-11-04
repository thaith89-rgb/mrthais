# Chờ duyệt 04/11/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`), nên **cả 4 video đều không có tiếng**; phụ đề theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `04.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn trong phiên cloud (`ENOTFOUND`); số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn) và đối chiếu nhiều báo được phép. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 1 (vàng): giá thay đổi trong ngày – nên kiểm tra lại giá SJC trước 17:00.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (ngày 19/10, cũ hơn 14 ngày).
- Đã loại topic VN-Index (trùng hôm qua, số liệu phiên 4/11 chưa rõ giữa các nguồn).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (04/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng SJC tăng, đắt hơn thế giới 17 triệu

- **File:** `04.11/video/video-1.mp4` (43,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng SJC đắt hơn thế giới 17 triệu?
- **Rủi ro:** Thấp – giá niêm yết công khai, VietnamPlus + Dân Trí khớp mức sáng 141,2 triệu; mức chiều 142,4 triệu chỉ có Thanh Niên (ghi rõ "chiều"). Nhắc bầu cử Mỹ chỉ như bối cảnh thị trường, không bình luận chính trị.

**Caption (dán vào TikTok):**

```
Sáng 4/11, vàng miếng SJC bán ra 141,2 triệu đồng/lượng, chiều lên 142,4 triệu – tăng 1,8 triệu so với chốt hôm qua. Giá trong nước vẫn cao hơn thế giới quy đổi khoảng 17–18 triệu đồng/lượng. Bạn thấy mức chênh này thế nào? 👇
Nguồn: VietnamPlus, Dân Trí, Thanh Niên. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangsjc #tintuc
```

**Nguồn:**
- VietnamPlus – "Giá vàng hôm nay 4/11 tăng, SJC bán ra 141,2 triệu đồng" – 04/11/2026 – https://www.vietnamplus.vn/gia-vang-trong-nuoc-di-len-giao-dich-quanh-muc-1412-trieu-dong-moi-luong-post1146021.vnp
- Dân Trí – "Vàng miếng SJC tăng ngược chiều thế giới, chênh lệch hơn 18 triệu đồng" – 04/11/2026 – https://dantri.com.vn/kinh-doanh/vang-mieng-sjc-tang-nguoc-chieu-the-gioi-chenh-lech-hon-18-trieu-dong-20261104075752267.htm
- Thanh Niên – "Giá vàng tăng vùn vụt thêm 1,8 triệu/lượng" – 04/11/2026 – https://thanhnien.vn/gia-vang-tang-vun-vut-them-18-trieu-luong-185261104135315432.htm
- VietnamPlus – "Diễn biến bầu cử tại Mỹ hỗ trợ đà tăng giá của vàng thế giới" – 04/11/2026 – https://www.vietnamplus.vn/dien-bien-bau-cu-tai-my-ho-tro-da-tang-gia-cua-vang-the-gioi-post1146110.vnp

---

## Video 2: Ngân hàng không giảm lãi suất sẽ bị xử lý

- **File:** `04.11/video/video-2.mp4` (43,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Ngân hàng không giảm lãi suất sẽ bị xử lý?
- **Rủi ro:** Thấp – phát biểu chính thức tại Họp báo Chính phủ 4/11; không nêu tên ngân hàng cụ thể. Nguồn VnEconomy về hạn mức tín dụng 2027 là bài tháng 10 (văn bản 9608/NHNN-CSTT ngày 18/10).

**Caption (dán vào TikTok):**

```
Họp báo Chính phủ 4/11: Ngân hàng Nhà nước sẽ có biện pháp xử lý tổ chức tín dụng không thực hiện chỉ đạo giảm lãi suất. Lãi suất tiền gửi niêm yết đã giảm 0,5–0,75 điểm %, lãi vay mới giảm 0,2–0,5 điểm %. Khoản vay của bạn đã được giảm chưa? 👇
Nguồn: VietnamPlus, Thanh Niên, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #laisuat #nganhang #tintuc
```

**Nguồn:**
- VietnamPlus – "Ngân hàng Nhà nước sẽ xử lý tổ chức tín dụng không thực hiện giảm lãi suất" – 04/11/2026 – https://www.vietnamplus.vn/ngan-hang-nha-nuoc-se-xu-ly-to-chuc-tin-dung-khong-thuc-hien-giam-lai-suat-post1146089.vnp
- Thanh Niên – "Hơn 20 ngân hàng giảm lãi suất cho vay từ 0,5 - 2%/năm" – 04/11/2026 – https://thanhnien.vn/hon-20-ngan-hang-giam-lai-suat-cho-vay-tu-05-2-nam-185261104140434773.htm
- VnEconomy – "Giảm hạn mức tín dụng năm 2027 với ngân hàng vi phạm chỉ đạo giảm lãi suất" – 10/2026 – https://vneconomy.vn/giam-han-muc-tin-dung-nam-2027-voi-ngan-hang-vi-pham-chi-dao-giam-lai-suat.htm

---

## Video 3: Giá điện giảm 2%, sinh hoạt còn 5 bậc

- **File:** `04.11/video/video-3.mp4` (43,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Tiền điện tháng này sẽ giảm?
- **Rủi ro:** Thấp – QĐ 1305/QĐ-EVN và 2892/QĐ-BCT; Báo Chính phủ, Tuổi Trẻ, Dân Trí, VietnamPlus khớp. Không dùng tỷ lệ % hộ hưởng lợi vì các nguồn lệch nhau (94% / 98,23%).

**Caption (dán vào TikTok):**

```
Từ 1/11/2026, giá bán lẻ điện bình quân giảm 2%, còn 2.159,9 đồng/kWh. Điện sinh hoạt chuyển sang 5 bậc: bậc 1 (0–100 kWh) 1.901 đồng, cao nhất 3.844 đồng/kWh (chưa VAT). Hộ dùng dưới 900 kWh/tháng được giảm tiền điện. Nhà bạn dùng bao nhiêu số điện mỗi tháng? 💡👇
Nguồn: Báo Chính phủ, VietnamPlus, Tuổi Trẻ, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giadien #tiendien #tintuc
```

**Nguồn:**
- Báo Chính phủ – "Chi tiết biểu giá bán lẻ điện mới áp dụng từ ngày 1/11/2026" – 04/11/2026 – https://baochinhphu.vn/chi-tiet-bieu-gia-ban-le-dien-moi-ap-dung-tu-ngay-1-11-2026-102261104104434646.htm
- VietnamPlus – "EVN điều chỉnh giá điện giảm 2%, còn 2.159,9 đồng/kWh từ ngày mai, 1/11" – 31/10/2026 – https://www.vietnamplus.vn/evn-dieu-chinh-gia-dien-giam-2-con-21599-dongkwh-tu-ngay-mai-111-post1145418.vnp
- Tuổi Trẻ – "Chính thức áp biểu giá điện sinh hoạt 5 bậc thang, cao nhất 3.844 đồng/kWh" – 04/11/2026 – https://tuoitre.vn/chinh-thuc-ap-bieu-gia-dien-sinh-hoat-5-bac-thang-cao-nhat-3844-dong-kwh-100261104103205238.htm
- Dân Trí – "Giảm 2% giá điện, EVN dự kiến hụt thu hơn 1.500 tỷ đồng mỗi tháng" – 04/11/2026 – https://dantri.com.vn/kinh-doanh/giam-2-gia-dien-evn-du-kien-hut-thu-hon-1500-ty-dong-moi-thang-20261104122822124.htm
- Báo Chính phủ – "Biểu giá điện mới: Hộ sử dụng dưới 900 kWh/tháng được giảm tiền điện" – 04/11/2026 – https://baochinhphu.vn/bieu-gia-dien-moi-ho-su-dung-duoi-900-kwh-thang-duoc-giam-tien-dien-102261104123406615.htm

---

## Video 4: Xuất nhập khẩu lần đầu vượt 1.000 tỷ USD

- **File:** `04.11/video/video-4.mp4` (42,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Việt Nam vượt mốc 1.000 tỷ USD!
- **Rủi ro:** Thấp – số ước tính của Cục Thống kê (video ghi "ước tính"); Báo Chính phủ, VnEconomy, Tuổi Trẻ khớp. Bộ Công Thương có số ước hơi khác (nhập siêu 12,7 tỷ) – đã dùng số Cục Thống kê.

**Caption (dán vào TikTok):**

```
Cục Thống kê: 10 tháng 2026, tổng xuất nhập khẩu đạt 1.010,55 tỷ USD – lần đầu vượt mốc 1.000 tỷ USD. Riêng tháng 10 xuất siêu 7,31 tỷ USD, nhưng lũy kế 10 tháng vẫn nhập siêu 12,07 tỷ USD. 🚢👇
Nguồn: Báo Chính phủ, VnEconomy, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #xuatkhau #thuongmai #tintuc
```

**Nguồn:**
- Báo Chính phủ – "Vượt mốc 1.000 tỷ USD, kim ngạch xuất nhập khẩu xác lập mức cao nhất từ trước tới nay" – 03/11/2026 – https://baochinhphu.vn/vuot-moc-1000-ty-usd-kim-ngach-xuat-nhap-khau-xac-lap-muc-cao-nhat-tu-truoc-toi-nay-102261103135046083.htm
- VnEconomy – "Xuất nhập khẩu Việt Nam lập kỷ lục 1.000 tỷ USD năm 2026" – 03/11/2026 – https://vneconomy.vn/xuat-nhap-khau-lap-ky-luc-vuot-moc-1000-ty-usd.htm
- Tuổi Trẻ – "Xuất siêu lập kỷ lục 7,31 tỉ USD trong tháng 10 khi nhập khẩu hàng điện tử giảm mạnh" – 04/11/2026 – https://tuoitre.vn/xuat-sieu-lap-ky-luc-731-ti-usd-trong-thang-10-khi-nhap-khau-hang-dien-tu-giam-manh-100261104092356805.htm
- Tuổi Trẻ – "Xuất khẩu gần chạm mốc 500 tỉ USD, Mỹ là thị trường lớn nhất" – 03/11/2026 – https://tuoitre.vn/xuat-khau-gan-cham-moc-500-ti-usd-my-la-thi-truong-lon-nhat-100261103145322222.htm

---

Tài liệu: `04.11/01-nghien-cuu.md` (nghiên cứu), `04.11/02-kich-ban.md` (kịch bản + lời đọc), `04.11/build-log.md`.
