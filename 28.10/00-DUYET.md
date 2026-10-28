# Chờ duyệt 28/10/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`api.msedgeservices.com`, `speech.platform.bing.com`), nên **cả 4 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng 0,38 giây/từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `02-kich-ban.md`.

Lưu ý khác:
- Môi trường chặn truy cập trực tiếp các trang báo, nên số liệu thu thập qua công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu nhiều báo; chi tiết trong `01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (nhận đường dẫn Chromium mới của Playwright) từ các PR trước, vì bản sửa chưa có trên `main`. Nên merge một PR có bản sửa này để các ngày sau không phải mang theo.
- Dọn dẹp: không có video ngày nào cũ hơn 14 ngày trên `main` (chỉ có video mẫu `_mau/`, giữ nguyên).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (28/10)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng SJC lại chạm 143 triệu

- **File:** `28.10/video/video-1.mp4` (38,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng SJC lại chạm 143 triệu?
- **Rủi ro:** Thấp – giá niêm yết công khai, ghi rõ "sáng"/"trưa 28/10"; không dự báo giá, không khuyên mua/bán. Giá có thể đổi mạnh sau khi Fed công bố quyết định (rạng sáng 29/10 giờ Việt Nam) – nên đăng đúng 17:00 hôm nay.

**Caption (dán vào TikTok):**

```
Sáng 28/10 vàng miếng SJC tăng khoảng 1 triệu, chạm 143 triệu đồng/lượng rồi hạ nhẹ vào trưa. Vàng thế giới hồi lên quanh 4.060 USD/ounce, cả thị trường đang chờ quyết định của Fed. Bạn đang chờ tin Fed chứ? 🪙👇
Nguồn: Thanh Niên, VnExpress, Tuổi Trẻ, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #fed #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá vàng giảm sau tăng mạnh, chênh thế giới 16 triệu/lượng" – 28/10/2026 – https://thanhnien.vn/gia-vang-giam-sau-tang-manh-chenh-the-gioi-16-trieu-luong-185261028114001707.htm
- VnExpress – "Giá vàng đảo chiều tăng 1 triệu đồng" – 28/10/2026 – https://vnexpress.net/gia-vang-dao-chieu-tang-1-trieu-dong-5137742.html
- Tuổi Trẻ – "Giá vàng hôm nay 28-10: Vàng thế giới lấy lại đà tăng, SJC cũng đi lên" – 28/10/2026 – https://tuoitre.vn/gia-vang-hom-nay-28-10-vang-the-gioi-lay-lai-da-tang-sjc-cung-di-len-100261028081825581.htm
- VietnamPlus – "Giá vàng thế giới đi lên nhờ giá dầu giảm trước thềm cuộc họp của Fed" – 28/10/2026 – https://www.vietnamplus.vn/gia-vang-the-gioi-di-len-nho-gia-dau-giam-truoc-them-cuoc-hop-cua-fed-post1144659.vnp

---

## Video 2: 73,6% nhà mới TP HCM là cao cấp

- **File:** `28.10/video/video-2.mp4` (42,5 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** 3/4 nhà mới TP HCM là cao cấp
- **Rủi ro:** Thấp – số liệu báo cáo HoREA qua VnExpress/VietnamPlus; không nêu tên dự án/doanh nghiệp. 73,6% là tỷ trọng trong nhà ở *đủ điều kiện bán* (video ghi rõ). Tỷ lệ hấp thụ ~28% theo VietnamPlus (DKRA quý III ~26%).

**Caption (dán vào TikTok):**

```
9 tháng 2026, căn hộ cao cấp và trung cao cấp chiếm 73,6% nguồn cung nhà ở đủ điều kiện bán tại TP HCM, trung cấp chỉ 7,1%, chưa có dự án bình dân. Bạn đang tìm nhà ở mức giá nào? 🏙️👇
Nguồn: VnExpress, VietnamPlus, Thanh Niên. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #batdongsan #nhao #tintuc
```

**Nguồn:**
- VnExpress – "Căn hộ cao cấp chiếm hơn 73% nguồn cung nhà ở TP HCM" – 10/2026 – https://vnexpress.net/can-ho-cao-cap-chiem-hon-73-nguon-cung-nha-o-tp-hcm-5137644.html
- VietnamPlus – "Thị trường nhà ở Thành phố Hồ Chí Minh hướng tới nhu cầu ở thực" – 10/2026 – https://www.vietnamplus.vn/thi-truong-nha-o-thanh-pho-ho-chi-minh-huong-toi-nhu-cau-o-thuc-post1143980.vnp
- Thanh Niên – "Giá nhà giảm, vì sao người mua chưa xuống tiền?" – 17/10/2026 – https://thanhnien.vn/gia-nha-giam-vi-sao-nguoi-mua-chua-xuong-tien-185261017204214307.htm

---

## Video 3: Quý 4 cần tăng trưởng 12,5%

- **File:** `28.10/video/video-3.mp4` (41,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Quý 4 cần tăng trưởng 12,5%?
- **Rủi ro:** Thấp – số liệu chính thức (Cục Thống kê) + dự báo UOB có ghi nguồn; giọng trung tính, không bình luận chính sách. Độ mới trung bình: số liệu công bố đầu tháng 10, đang được Quốc hội thảo luận.

**Caption (dán vào TikTok):**

```
GDP 9 tháng 2026 tăng 9,01%. Để cả năm đạt mục tiêu từ 10%, quý 4 cần tăng khoảng 12,5% – mức rất cao. Điều này liên quan gì tới việc làm và giá cả? 📈👇
Nguồn: VietnamPlus, VnEconomy, VnExpress. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #gdp #tangtruong #tintuc
```

**Nguồn:**
- VietnamPlus – "Tốc độ tăng trưởng GDP chín tháng năm 2026 ước đạt 9,01% so với cùng kỳ" – 10/2026 – https://www.vietnamplus.vn/toc-do-tang-truong-gdp-chin-thang-nam-2026-uoc-dat-901-so-voi-cung-ky-post1139772.vnp
- VnEconomy – "GDP quý IV phải tăng trên 12,5% để đạt mục tiêu tăng trưởng hai con số" – 10/2026 – https://vneconomy.vn/gdp-quy-iv-phai-tang-tren-125-de-dat-muc-tieu-tang-truong-hai-con-so.htm
- VnExpress – "UOB nâng dự báo tăng trưởng Việt Nam lên 9,2%" – 10/2026 – https://vnexpress.net/uob-nang-du-bao-tang-truong-viet-nam-len-9-2-5131875.html
- VnExpress – "Chính phủ yêu cầu 9 địa phương tăng trưởng trên 15% trong quý IV" – 10/2026 – https://vnexpress.net/chinh-phu-yeu-cau-9-dia-phuong-tang-truong-tren-15-trong-quy-iv-5129670.html

---

## Video 4: VN-Index giảm 3 phiên liên tiếp

- **File:** `28.10/video/video-4.mp4` (36,8 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** VN-Index giảm 3 phiên liên tiếp
- **Rủi ro:** Thấp – số liệu phiên 27/10 (phiên 28/10 chưa có số liệu khi làm video); không nêu mã cổ phiếu, không khuyến nghị mua/bán. Khối ngoại: Tuổi Trẻ/VnEconomy ghi ~318–319 tỷ, VnExpress ~427 tỷ (cách tính khác) → video ghi "hơn 300 tỷ".

**Caption (dán vào TikTok):**

```
Phiên 27/10, VN-Index giảm phiên thứ 3 liên tiếp về 1.761,87 điểm, thanh khoản thấp, khối ngoại bán ròng hơn 300 tỷ đồng. Vùng 1.770 điểm vẫn là thử thách. Bạn thấy thị trường đang thế nào? 📉👇
Nguồn: Tuổi Trẻ, VnExpress, VnEconomy, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #chungkhoan #vnindex #tintuc
```

**Nguồn:**
- Tuổi Trẻ – "Sắc đỏ áp đảo, VN-Index chỉ giảm gần 2 điểm" – 27/10/2026 – https://tuoitre.vn/sac-do-ap-dao-vn-index-chi-giam-gan-2-diem-10026102715431122.htm
- VnExpress – "Chứng khoán hôm nay 27/10: VN-Index giảm 3 phiên liên tiếp" – 27/10/2026 – https://vnexpress.net/chung-khoan-giam-3-phien-lien-tiep-5137497.html
- VnEconomy – "VN-Index giảm nhẹ, kháng cự 1770 điểm thách thức nhà đầu tư" – 27/10/2026 – https://vneconomy.vn/vn-index-giam-nhe-khang-cu-1770-diem-thach-thuc-nha-dau-tu.htm
- VietnamPlus – "Chứng khoán 27/10: VN-Index giảm nhẹ, thanh khoản duy trì ở mức thấp" – 27/10/2026 – https://www.vietnamplus.vn/chung-khoan-2710-vn-index-giam-nhe-thanh-khoan-duy-tri-o-muc-thap-post1144569.vnp

---

## Tự kiểm tra lần cuối
- [x] Mọi số liệu có nguồn báo chính thống (≥ 2 nguồn với số liệu chính)
- [x] Không câu khuyến nghị mua/bán, không nêu mã cổ phiếu, không hứa lợi nhuận
- [x] Tự viết lại, không chép nguyên văn báo; không dùng ảnh/video của báo
- [x] Không nội dung chính trị nhạy cảm, không nêu tên lãnh đạo
- [x] Video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Kiểm tra ảnh tĩnh: dấu tiếng Việt đúng, chữ không tràn khung
- [ ] Giọng đọc: **không có** (TTS bị chặn)
