# Chờ duyệt 05/11/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`), nên **cả 4 video đều không có tiếng**; phụ đề theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `05.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch/curl tới các báo bị chặn trong phiên cloud (`ENOTFOUND`, proxy 403); số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu nhiều báo được phép. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 2 (vàng): giá thay đổi nhiều lần trong ngày – nên kiểm tra lại trước 17:00.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (ngày 19/10, cũ hơn 14 ngày).
- Đã loại VN-Index (không xác định chắc số liệu phiên 5/11) và tin doanh nghiệp thua lỗ (nêu tên cá nhân/doanh nghiệp).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (05/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Xăng giảm hơn 2.000 đồng/lít từ 15h

- **File:** `05.11/video/video-1.mp4` (39,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Xăng vừa giảm hơn 2.000 đồng/lít!
- **Rủi ro:** Thấp – giá điều hành chính thức (QĐ 2931/QĐ-BCT); Báo Chính phủ, Tuổi Trẻ, Thanh Niên khớp số; Dân Trí/VnExpress làm tròn nhẹ.

**Caption (dán vào TikTok):**

```
Từ 15h ngày 5/11, xăng E5 RON 92 giảm 2.305 đồng còn tối đa 20.898 đồng/lít; xăng E10 RON 95 giảm 2.075 đồng còn 21.156 đồng/lít; dầu diesel giảm 180 đồng còn 28.696 đồng/lít. Bình xăng của bạn rẻ hơn bao nhiêu? ⛽👇
Nguồn: Báo Chính phủ, Tuổi Trẻ, Dân Trí, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giaxang #xangdau #tintuc
```

**Nguồn:**
- Báo Chính phủ – "Giá xăng dầu đồng loạt giảm mạnh, xăng E5 giảm hơn 2.300 đồng/lít" – 05/11/2026 – https://baochinhphu.vn/gia-xang-dau-dong-loat-giam-manh-xang-e5-giam-hon-2300-dong-lit-102261105144135061.htm
- Tuổi Trẻ – "Từ 15 giờ chiều nay 5-11, giá xăng dầu tiếp tục giảm mạnh thêm 2.000 đồng/lít" – 05/11/2026 – https://tuoitre.vn/tu-15-gio-chieu-nay-5-11-gia-xang-dau-tiep-tuc-giam-manh-them-2000-dong-lit-100261105143920535.htm
- Dân Trí – "Giá xăng tiếp tục giảm mạnh, xăng E10 giảm hơn 2.000 đồng/lít" – 05/11/2026 – https://dantri.com.vn/kinh-doanh/gia-xang-tiep-tuc-giam-manh-xang-e10-giam-hon-2000-donglit-20261105141242876.htm
- VietnamPlus – "Giá xăng dầu tiếp tục giảm từ 15 giờ hôm nay, E10 giảm hơn 2.000 đồng mỗi lít" – 05/11/2026 – https://www.vietnamplus.vn/gia-xang-dau-tiep-tuc-giam-tu-15-gio-hom-nay-e10-giam-hon-2000-dong-moi-lit-post1146367.vnp
- VnExpress – "Giá xăng dầu hôm nay 5/11: Giá xăng, dầu cùng giảm" – 05/11/2026 – https://vnexpress.net/gia-xang-dau-moi-nhat-hom-nay-5-11-5141125.html

---

## Video 2: Vàng thế giới vọt lên, SJC biến động mạnh

- **File:** `05.11/video/video-2.mp4` (43,2 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng lên 144,5 triệu rồi lại hạ?
- **Rủi ro:** Thấp – giá niêm yết công khai; mỗi mốc giờ lấy theo 1 báo (9h20 VnExpress, trưa Thanh Niên, chiều VietnamPlus). Giá thay đổi liên tục – **nên kiểm tra lại giá SJC trước 17:00**. Nhắc bầu cử Mỹ chỉ như bối cảnh, không nêu đảng phái.

**Caption (dán vào TikTok):**

```
Ngày 5/11, vàng thế giới tăng mạnh lên quanh 4.110–4.120 USD/ounce. Vàng miếng SJC có lúc bán ra 144,5 triệu đồng/lượng, trưa hạ còn 143,4 triệu, chiều quanh 143 triệu. Chênh lệch với thế giới quy đổi khoảng 13–14 triệu đồng/lượng. Bạn đang theo dõi giá vàng thế nào? 👇
Nguồn: VnExpress, Thanh Niên, VietnamPlus, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangsjc #tintuc
```

**Nguồn:**
- VnExpress – "Giá vàng mới nhất hôm nay ngày 5/11: Giá vàng miếng lên cao nhất gần một tháng" – 05/11/2026 – https://vnexpress.net/gia-vang-moi-nhat-hom-nay-ngay-5-11-5141000.html
- Thanh Niên – "Giá vàng giảm sau tăng mạnh" – 05/11/2026 – https://thanhnien.vn/gia-vang-giam-sau-tang-manh-185261105121734942.htm
- VietnamPlus – "Giá vàng tăng lên mức cao nhất trong hơn hai tuần" – 05/11/2026 – https://www.vietnamplus.vn/gia-vang-tang-len-muc-cao-nhat-trong-hon-hai-tuan-post1146380.vnp
- Tuổi Trẻ – "Giá vàng hôm nay 5-11: Vàng thế giới tăng mạnh, SJC tăng thêm 1,8 triệu đồng" – 05/11/2026 – https://tuoitre.vn/gia-vang-hom-nay-5-11-vang-the-gioi-tang-manh-sjc-tang-them-18-trieu-dong-100261105083428401.htm

---

## Video 3: 46 ngân hàng đã giảm lãi tiết kiệm

- **File:** `05.11/video/video-3.mp4` (39,8 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Gửi tiết kiệm giờ lãi còn bao nhiêu?
- **Rủi ro:** Thấp – số liệu Dân Trí 5/11, Tuổi Trẻ 4/11 khớp; không nêu tên ngân hàng cụ thể (tránh quảng cáo); mức "Phổ biến ~6%" theo VnEconomy.

**Caption (dán vào TikTok):**

```
Theo Dân Trí, cả 46 ngân hàng thương mại đã giảm lãi suất tiền gửi, phổ biến 0,5–0,7 điểm %/năm với kỳ hạn từ 6 tháng. Kỳ hạn 12 tháng: nhóm Big4 niêm yết 5,4%/năm, mức cao nhất khoảng 7,1%/năm. Lãi vay mới chỉ giảm 0,2–0,5%/năm. Bạn có đang gửi tiết kiệm? 👇
Nguồn: Dân Trí, Tuổi Trẻ, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #laisuat #tietkiem #tintuc
```

**Nguồn:**
- Dân Trí – "Tất cả 46 ngân hàng đã giảm lãi huy động, lãi cho vay giảm bao nhiêu?" – 05/11/2026 – https://dantri.com.vn/kinh-doanh/tat-ca-46-ngan-hang-da-giam-lai-huy-dong-lai-cho-vay-giam-bao-nhieu-20261105095021470.htm
- Tuổi Trẻ – "46 ngân hàng giảm lãi suất tiền gửi, lãi vay giảm ra sao?" – 04/11/2026 – https://tuoitre.vn/46-ngan-hang-giam-lai-suat-tien-gui-lai-vay-giam-ra-sao-100261104171534546.htm
- VnEconomy – "Lãi suất tiết kiệm 6 - 12 tháng ổn định quanh 6% sau giảm mạnh" – 11/2026 – https://vneconomy.vn/lai-suat-tiet-kiem-ky-han-6-12-thang-pho-bien-lui-ve-khoang-6nam.htm

---

## Video 4: Từ 11/11: Thu thập dữ liệu trái phép bị phạt

- **File:** `05.11/video/video-4.mp4` (44,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Lưu dữ liệu khách có thể bị phạt?
- **Rủi ro:** Trung bình-thấp – các báo lệch nhau về mức tối đa với tổ chức (120 triệu) và có bài nêu 100 triệu; video **chỉ dùng khung 20–40 / 40–60 triệu (cá nhân)** được nhiều nguồn thống nhất, ghi "theo các báo" và nhắc xem văn bản gốc.

**Caption (dán vào TikTok):**

```
Nghị định 363/2026/NĐ-CP về xử phạt vi phạm hành chính trong lĩnh vực dữ liệu có hiệu lực từ 11/11/2026. Theo các báo, thu thập, tạo lập dữ liệu khi chưa được đồng ý có thể bị phạt 20–40 triệu đồng; làm giả dữ liệu, thu thập vượt phạm vi đã thông báo hoặc làm lộ thông tin nhạy cảm có thể bị phạt 40–60 triệu đồng. Shop của bạn có đang lưu dữ liệu khách hàng? 👇
Nguồn: Báo Chính phủ, Tuổi Trẻ, VnExpress. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #phapluat #dulieu #chinhsachmoi #tintuc
```

**Nguồn:**
- Báo Chính phủ – "Những chính sách mới có hiệu lực từ tháng 11/2026" – 31/10/2026 – https://baochinhphu.vn/nhung-chinh-sach-moi-co-hieu-luc-tu-thang-11-2026-102261031091922064.htm
- Báo Chính phủ – "Thu thập dữ liệu làm lộ thông tin nhạy cảm có thể bị phạt đến 60 triệu đồng" – 23/09/2026 – https://baochinhphu.vn/thu-thap-du-lieu-lam-lo-thong-tin-nhay-cam-co-the-bi-phat-den-60-trieu-dong-102260923101031855.htm
- Tuổi Trẻ – "Chính sách mới về xổ số, lưu trú, chứng khoán có hiệu lực từ tháng 11-2026" – 26/10/2026 – https://tuoitre.vn/chinh-sach-moi-ve-xo-so-luu-tru-chung-khoan-co-hieu-luc-tu-thang-11-2026-10026102613244706.htm
- VnExpress – "Chính sách nổi bật có hiệu lực từ tháng 11" – 10/2026 – https://vnexpress.net/chinh-sach-noi-bat-co-hieu-luc-tu-thang-11-5139157.html

---

## Tự kiểm tra

- [x] Mọi số liệu có nguồn từ báo/cơ quan được phép (xem `05.11/01-nghien-cuu.md`)
- [x] Không có câu khuyến nghị mua/bán, không nêu tên ngân hàng để quảng cáo
- [x] Tự viết lại, không chép nguyên văn; không dùng ảnh/video của báo
- [x] Không nội dung chính trị nhạy cảm, không nêu tên cá nhân
- [x] Mỗi video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Đã kiểm tra khung hình: dấu tiếng Việt đúng, chữ không tràn
- [ ] **Giọng đọc AI: KHÔNG có** (TTS bị chặn – xem cảnh báo trên)
