# Chờ duyệt 09/11/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`), nên **cả 4 video đều không có tiếng**; phụ đề theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng 0,38 giây/từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `09.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn (`ENOTFOUND`) → số liệu lấy qua công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu ≥ 2 báo được phép khi có thể. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 1: giá vàng thay đổi trong ngày; nên kiểm tra lại giá SJC trước 17:00.
- Video 3: tin doanh nghiệp niêm yết – đã có câu miễn trừ riêng; bạn có thể bỏ video này nếu muốn an toàn tối đa.
- Không chọn giá USD (đã làm 06/11, 08/11), Thông tư 48/2026 của NHNN (quá chuyên môn), VN-Index 9/11 (chưa có số đóng cửa) – chi tiết ở `09.11/01-nghien-cuu.md`.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì các PR trước chưa được merge vào `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (19/10, cũ hơn 14 ngày). Không còn mp4 cũ nào khác trên `main`.
- Các PR chờ duyệt 20/10 → 08/11 vẫn chưa merge; nên merge/đóng để repo gọn.

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (09/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng thế giới vượt 4.100 USD, SJC tăng 1 triệu

- **File:** `09.11/video/video-1.mp4` (42,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng thế giới vượt 4.100 USD?
- **Rủi ro:** Thấp – Thanh Niên, VietnamPlus khớp mức +1 triệu, SJC quanh 142 triệu; Tuổi Trẻ, VnEconomy xác nhận vàng thế giới vượt 4.100 USD và chênh lệch thấp nhất 3 tuần. Dân Trí ghi +2 triệu so với cuối tuần → video dùng "khoảng 1 triệu". Giá đổi trong ngày (13h50: 138,7 – 141,7 triệu).

**Caption (dán vào TikTok):**

```
Sáng 9/11, vàng thế giới tăng hơn 1%, lên khoảng 4.110 USD/ounce. Vàng miếng SJC tăng khoảng 1 triệu đồng, bán ra quanh 142 triệu đồng/lượng; vàng nhẫn bán ra khoảng 140,5 triệu đồng/lượng. Chênh lệch giá trong nước – thế giới xuống thấp nhất 3 tuần. Giá thay đổi trong ngày, bạn nhớ kiểm tra lại nhé 👇
Nguồn: Thanh Niên, VietnamPlus, Tuổi Trẻ, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangSJC #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá vàng hôm nay 9.11.2026: Vàng miếng SJC tăng thêm 1 triệu đồng mỗi lượng" – 09/11/2026 – https://thanhnien.vn/gia-vang-hom-nay-9112026-vang-mieng-sjc-tang-them-1-trieu-dong-moi-luong-185261109072343088.htm
- VietnamPlus – "Giá vàng tăng 1 triệu đồng sáng đầu tuần, SJC giao dịch ở ngưỡng 142 triệu đồng" – 09/11/2026 – https://www.vietnamplus.vn/gia-vang-tang-1-trieu-dong-sang-dau-tuan-sjc-giao-dich-o-nguong-142-trieu-dong-post1147042.vnp
- Tuổi Trẻ – "Giá vàng hôm nay 9-11: Vàng thế giới tăng mạnh đầu tuần, vượt 4.100 USD" – 09/11/2026 – https://tuoitre.vn/gia-vang-hom-nay-9-11-vang-the-gioi-tang-manh-dau-tuan-vuot-4100-usd-10026110908193679.htm
- VnEconomy – "Giá vàng trong nước tăng nhẹ, chênh lệch thấp nhất 3 tuần" – 09/11/2026 – https://vneconomy.vn/chenh-lech-gia-vang-trong-nuoc-va-the-gioi-thap-nhat-trong-3-tuan-1307379.htm

---

## Video 2: Dầu Brent có tuần giảm mạnh nhất từ 2020

- **File:** `09.11/video/video-2.mp4` (39,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Dầu có tuần giảm mạnh nhất 6 năm?
- **Rủi ro:** Thấp – VietnamPlus, VnEconomy khớp mức −17%/tuần; giá xăng trong nước từ Báo Chính phủ, Dân Trí. Chỉ nêu nguyên nhân theo báo, không dự đoán giá xăng kỳ 11/11.

**Caption (dán vào TikTok):**

```
Dầu Brent vừa giảm 17% trong tuần qua – mạnh nhất kể từ năm 2020, khi tín hiệu đàm phán Mỹ – Iran làm dịu lo ngại nguồn cung. Chiều 9/11, Brent giảm thêm 1,5% còn khoảng 96,91 USD/thùng. Trong nước, xăng đã 2 lần giảm từ đầu tháng 11; E5 RON 92 hiện tối đa 20.898 đồng/lít. ⛽👇
Nguồn: VietnamPlus, VnEconomy, Báo Chính phủ, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giadau #giaxang #tintuc
```

**Nguồn:**
- VietnamPlus – "Giá dầu Brent giảm 1,5% giữa tín hiệu hạ nhiệt từ Mỹ" – 09/11/2026 – https://www.vietnamplus.vn/gia-dau-brent-giam-15-chieu-911-tai-chau-a-post1147144.vnp
- VietnamPlus – "Giá dầu Brent giảm 17%, mạnh nhất trong tuần từ năm 2020" – 07/11/2026 – https://www.vietnamplus.vn/gia-dau-brent-tuan-qua-giam-manh-nhat-ke-tu-nam-2020-post1146758.vnp
- VnEconomy – "Nasdaq hồi phục khi nhà đầu tư bắt đáy cổ phiếu chip, giá dầu giảm 17% cả tuần" – 07/11/2026 – https://vneconomy.vn/nasdaq-hoi-phuc-khi-nha-dau-tu-bat-day-co-phieu-chip-gia-dau-giam-17-ca-tuan.htm
- Báo Chính phủ – "Giá xăng dầu đồng loạt giảm mạnh, xăng E5 giảm hơn 2.300 đồng/lít" – 05/11/2026 – https://baochinhphu.vn/gia-xang-dau-dong-loat-giam-manh-xang-e5-giam-hon-2300-dong-lit-102261105144135061.htm
- Dân Trí – "Những chính sách kinh tế mới có hiệu lực từ tháng 11" – 01/11/2026 – https://dantri.com.vn/kinh-doanh/nhung-chinh-sach-kinh-te-moi-co-hieu-luc-tu-thang-11-20261101095231174.htm

---

## Video 3: Giá dầu cao, lọc dầu Dung Quất lãi gấp 11 lần

- **File:** `09.11/video/video-3.mp4` (42,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Nhà máy lọc dầu lãi gấp 11 lần?
- **Rủi ro:** Trung bình-thấp – doanh nghiệp niêm yết (BSR). Số liệu đã công bố, khớp VnExpress + Dân Trí + Tuổi Trẻ; có câu "không phải khuyến nghị cổ phiếu", không nêu giá cổ phiếu/dự báo của CTCK. Không đưa con số kế hoạch 18.579 tỷ lên video vì thấp hơn lãi 9 tháng hợp nhất (có thể khác cơ sở tính).

**Caption (dán vào TikTok):**

```
Nhờ giá sản phẩm lọc dầu tăng nhanh hơn giá dầu thô, BSR (chủ nhà máy lọc dầu Dung Quất) lãi sau thuế hợp nhất gần 24.900 tỷ đồng sau 9 tháng, gấp khoảng 11,6 lần cùng kỳ. Riêng quý III lãi gần 9.000 tỷ đồng. Doanh nghiệp vừa nâng kế hoạch lợi nhuận năm lên gấp hơn 8 lần kế hoạch cũ. 🛢️👇
Nguồn: VnExpress, Dân Trí, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư. Video không phải khuyến nghị mua/bán cổ phiếu.
#kinhte #taichinh #doanhnghiep #giadau #tintuc
```

**Nguồn:**
- VnExpress – "Chủ nhà máy lọc dầu Dung Quất nâng mục tiêu lãi kỷ lục" – 09/11/2026 – https://vnexpress.net/chu-nha-may-loc-dau-dung-quat-nang-muc-tieu-lai-ky-luc-5142212.html
- VnExpress – "BSR lãi hợp nhất gần 25.000 tỷ đồng sau 9 tháng" – 11/2026 – https://vnexpress.net/bsr-lai-hop-nhat-gan-25-000-ty-dong-sau-9-thang-5140193.html
- Dân Trí – "Giá xăng dầu biến động mạnh, các "ông lớn" báo lãi đột biến" – 01/11/2026 – https://dantri.com.vn/kinh-doanh/gia-xang-dau-bien-dong-manh-cac-ong-lon-bao-lai-dot-bien-20261101155156417.htm
- Tuổi Trẻ – "Lợi nhuận Bình Sơn, Petrolimex, PVOIL đồng loạt tăng mạnh khi giá dầu lên cao" – 02/11/2026 – https://tuoitre.vn/loi-nhuan-binh-son-petrolimex-pvoil-dong-loat-tang-manh-khi-gia-dau-len-cao-100261102115415542.htm

---

## Video 4: Từ 16/11: Vay chứng khoán phải bảo đảm 110%

- **File:** `09.11/video/video-4.mp4` (43,3 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Từ 16/11: quy định mới khi vay chứng khoán
- **Rủi ro:** Thấp – văn bản pháp luật chính thức (Thông tư 145/2026/TT-BTC). Chỉ 1 báo được phép mô tả chi tiết (Tuổi Trẻ), VietnamPlus nhắc tới; chưa đọc được toàn văn → nên đối chiếu nhanh trước khi đăng. Không khuyến khích vay chứng khoán.

**Caption (dán vào TikTok):**

```
Từ 16/11/2026, Thông tư 145/2026/TT-BTC của Bộ Tài chính có hiệu lực (thay Thông tư 119/2020). Với hoạt động vay và cho vay chứng khoán: bên vay phải có tài sản bảo đảm bằng tiền hoặc chứng khoán, tối thiểu 110% giá trị khoản vay; lãi suất do các bên thỏa thuận; VSDC làm trung gian vận hành. 📈👇
Nguồn: Tuổi Trẻ, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #chungkhoan #phapluat #tintuc
```

**Nguồn:**
- Tuổi Trẻ – "Chính sách mới về xổ số, lưu trú, chứng khoán có hiệu lực từ tháng 11-2026" – 26/10/2026 – https://tuoitre.vn/chinh-sach-moi-ve-xo-so-luu-tru-chung-khoan-co-hieu-luc-tu-thang-11-2026-10026102613244706.htm
- VietnamPlus – "Chứng khoán tháng 11: Dòng tiền còn thận trọng, thị trường chờ động lực mới" – 11/2026 – https://www.vietnamplus.vn/chung-khoan-thang-11-dong-tien-con-than-trong-thi-truong-cho-dong-luc-moi-post1145522.vnp
