# Chờ duyệt 08/11/2026 – 3 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`; `api.msedgeservices.com` → `CONNECT tunnel failed, response 403`), nên **cả 3 video đều không có tiếng**; phụ đề theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng 0,38 giây/từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `08.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn (`ENOTFOUND`) → số liệu lấy qua công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu ≥ 2 báo được phép. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 2: tỷ giá thay đổi theo giờ; số liệu là sáng 8/11 (Thanh Niên) và 7/11 (Dân Trí). Đã có video giá USD ngày 06/11 – cân nhắc nếu không muốn lặp chủ đề.
- Video 3: giá theo tỉnh chủ yếu từ Thanh Niên (bản tin nhiều ngày liên tiếp), Tuổi Trẻ xác nhận xu hướng – rủi ro thấp nhưng chỉ 1 báo cho số từng tỉnh.
- Chỉ 3 video hôm nay (Chủ nhật, ít tin mới): vàng (nguồn lệch, đã làm 07/11), gạo (đã làm 01/11), lãi suất (tin trái chiều) bị loại – chi tiết ở `08.11/01-nghien-cuu.md`.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì các PR trước chưa được merge vào `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (19/10, cũ hơn 14 ngày). Không còn mp4 nào khác trên `main`.
- Các PR chờ duyệt 20/10 → 07/11 vẫn chưa merge; nên merge/đóng để repo gọn.

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (08/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Quốc hội giao mục tiêu GDP 2027 từ 10%

- **File:** `08.11/video/video-1.mp4` (43,2 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Năm 2027, kinh tế tăng từ 10%?
- **Rủi ro:** Thấp – Nghị quyết Quốc hội thông qua 7/11 (467/469 đại biểu), VnExpress, Tuổi Trẻ, VnEconomy, Báo Đầu tư khớp số liệu. Chỉ nêu số liệu, không bình luận chính trị; không đưa số "30/34 tỉnh tăng hai con số" vì các báo lệch.

**Caption (dán vào TikTok):**

```
Sáng 7/11, Quốc hội thông qua Nghị quyết kế hoạch phát triển kinh tế – xã hội năm 2027 (467/469 đại biểu tán thành): GDP tăng từ 10% trở lên, GDP bình quân đầu người khoảng 6.100 USD, CPI tăng khoảng 4,5%, năng suất lao động tăng 8,6%. Theo bạn, chỉ tiêu nào tác động tới túi tiền nhiều nhất? 👇
Nguồn: VnExpress, Tuổi Trẻ, VnEconomy, Báo Đầu tư. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #gdp #kinhtevietnam #tintuc
```

**Nguồn:**
- VnExpress – "Quốc hội giao mục tiêu GDP 2027 tăng từ 10%" – 07/11/2026 – https://vnexpress.net/quoc-hoi-giao-muc-tieu-gdp-2027-tang-tu-10-5141797.html
- Tuổi Trẻ – "Quốc hội xác định năm 2027 tăng tốc, bứt phá, giao 30 tỉnh thành tăng trưởng hai con số" – 07/11/2026 – https://tuoitre.vn/quoc-hoi-xac-dinh-nam-2027-tang-toc-but-pha-giao-30-tinh-thanh-tang-truong-hai-con-so-100261107084322636.htm
- VnEconomy – "Quốc hội thông qua kế hoạch phát triển kinh tế - xã hội năm 2027, mục tiêu tăng trưởng từ 10% trở lên" – 07/11/2026 – https://vneconomy.vn/quoc-hoi-thong-qua-ke-hoach-phat-trien-kinh-te-xa-hoi-nam-2027-muc-tieu-tang-truong-tu-10-tro-len.htm
- Báo Đầu tư – "Quốc hội “chốt” chỉ tiêu, giải pháp cho năm 2027 “tăng tốc, bứt phá”" – 07/11/2026 – https://baodautu.vn/quoc-hoi-chot-chi-tieu-giai-phap-cho-nam-2027-tang-toc-but-pha-d738646.html

---

## Video 2: Giá USD lùi sâu dưới 26.000 đồng

- **File:** `08.11/video/video-2.mp4` (44,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá USD lại giảm mạnh?
- **Rủi ro:** Thấp – Thanh Niên (8/11) và Dân Trí (7/11) khớp mức 25.400 – 25.780 tại ngân hàng; tỷ giá trung tâm 25.615 (Dân Trí, Thanh Niên 6/11). Không khuyến khích mua bán ngoại tệ, nhắc giao dịch nơi được phép.

**Caption (dán vào TikTok):**

```
Sáng 8/11, Vietcombank niêm yết USD 25.400 – 25.780 đồng, thấp hơn cuối tuần trước 210 đồng. Tỷ giá trung tâm ngày 7/11 ở 25.615 đồng/USD; USD tự do tại TP.HCM khoảng 25.840 – 25.940 đồng. Bạn đang giữ USD hay VND? 👇
Nguồn: Thanh Niên, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #tygia #giausd #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá USD hôm nay 8.11.2026: Đồng loạt cùng euro, yen Nhật lao dốc" – 08/11/2026 – https://thanhnien.vn/gia-usd-hom-nay-8112026-dong-loat-cung-euro-yen-nhat-lao-doc-185261108081222478.htm
- Dân Trí – "Giá USD tự do và ngân hàng đồng loạt đi xuống" – 07/11/2026 – https://dantri.com.vn/kinh-doanh/gia-usd-tu-do-va-ngan-hang-dong-loat-di-xuong-20261107145331698.htm

---

## Video 3: Giá heo hơi bật tăng trên cả nước

- **File:** `08.11/video/video-3.mp4` (42,8 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá heo hơi tăng trở lại?
- **Rủi ro:** Thấp – giá heo hơi theo tỉnh từ Thanh Niên 7/11; vùng đáy 43.000 – 46.000 (Thanh Niên 2–3/11); nhận định "khó tăng đột biến" từ Tuổi Trẻ 4/11.

**Caption (dán vào TikTok):**

```
Giá heo hơi tăng trở lại sau khi chạm vùng 43.000 – 46.000 đồng/kg đầu tháng 11. Ngày 7/11, Quảng Ninh lên 49.000 đồng/kg – cao nhất miền Bắc; 7 tỉnh từ Hà Tĩnh đến Đắk Lắk tăng 3.000 đồng lên 46.000 đồng/kg; Đồng Tháp 47.000 đồng/kg. Giá thịt chỗ bạn đã đổi chưa? 👇
Nguồn: Thanh Niên, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giaheohoi #giacathitruong #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá heo hơi hôm nay 7.11.2026: Bật tăng trên cả nước" – 07/11/2026 – https://thanhnien.vn/gia-heo-hoi-hom-nay-7112026-bat-tang-tren-ca-nuoc-185261106213515592.htm
- Thanh Niên – "Giá heo hơi hôm nay 2.11.2026: Thấp nhất 43.000 đồng/kg" – 02/11/2026 – https://thanhnien.vn/gia-heo-hoi-hom-nay-2112026-thap-nhat-43000-dong-kg-185261102080924732.htm
- Tuổi Trẻ – "Giá heo hơi liệu có tăng đột biến dịp cuối năm?" – 04/11/2026 – https://tuoitre.vn/gia-heo-hoi-lieu-co-tang-dot-bien-dip-cuoi-nam-100261104155529147.htm

---

## Tự kiểm tra cuối
- [x] Mọi số liệu có nguồn báo được phép (VnExpress, Tuổi Trẻ, VnEconomy, Báo Đầu tư, Thanh Niên, Dân Trí)
- [x] Không câu khuyến nghị mua/bán, không nêu mã cổ phiếu, không quảng cáo
- [x] Tự tóm tắt, không chép nguyên văn; không dùng ảnh/video của báo
- [x] Không nội dung chính trị/nhạy cảm
- [x] Mỗi video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Thời lượng 42,8–44,0 giây; đã xem khung hình: chữ không tràn, dấu tiếng Việt đúng
- [ ] Giọng đọc AI – **chưa có** (TTS bị chặn)
