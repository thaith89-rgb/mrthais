# Chờ duyệt 26/10/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`api.msedgeservices.com` → 403), nên **cả 4 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng 0,38 giây/từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng.

Lưu ý khác:
- Môi trường chặn truy cập trực tiếp các trang báo, nên số liệu thu thập qua công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu ≥ 2 báo; chi tiết trong `01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- Đã sửa nhỏ `scripts/build-day.mjs` và `remotion.config.ts`: môi trường cloud vừa đổi cấu trúc thư mục Chromium cài sẵn (`chrome-headless-shell-linux64/chrome-headless-shell`), script cũ không tìm thấy nên render lỗi lần đầu. Nay nhận cả đường dẫn cũ và mới.
- Dọn dẹp: không có video ngày nào cũ hơn 14 ngày trên `main` (chỉ có video mẫu `_mau/`, giữ nguyên).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (26/10)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Giá heo hơi thấp nhất 2 năm

- **File:** `26.10/video/video-1.mp4` (40,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá heo hơi thấp nhất 2 năm!
- **Rủi ro:** Thấp – giá thị trường công khai, không nêu tên doanh nghiệp; giá theo vùng chênh vài nghìn đồng, video ghi "bình quân".

**Caption (dán vào TikTok):**

```
Giá heo hơi rơi xuống quanh 46.800 đồng/kg – thấp nhất 2 năm, dưới cả giá thành chăn nuôi. Còn thịt ngoài chợ thì sao? 🐖👇
Nguồn: Thanh Niên, VTV. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giaheohoi #giathitheo #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá heo hơi hôm nay 26.10.2026: Thấp nhất trong 2 năm qua" – 26/10/2026 – https://thanhnien.vn/gia-heo-hoi-hom-nay-26102026-thap-nhat-trong-2-nam-qua-185261026083005993.htm
- VTV – "Giá lợn hơi chạm đáy mới" – 23/10/2026 – https://vtv.vn/gia-lon-hoi-cham-day-moi-10026102309334422.htm
- VTV – "Giá lợn hơi tiếp tục giảm mạnh" – 07/10/2026 – https://vtv.vn/gia-lon-hoi-tiep-tuc-giam-manh-100261007095911628.htm

---

## Video 2: Chung cư Hà Nội: giao dịch giảm 66%

- **File:** `26.10/video/video-2.mp4` (41,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Chung cư Hà Nội ế: giao dịch giảm 66%?
- **Rủi ro:** Thấp – số liệu khảo sát CBRE (qua Thanh Niên, Dân trí, VTV); không nêu tên dự án, không khuyên mua/bán. Tin công bố 13–14/10 (độ mới trung bình); các đơn vị khác công bố giá khác nhau → video ghi "theo CBRE".

**Caption (dán vào TikTok):**

```
Quý III, Hà Nội chỉ bán được hơn 3.900 căn hộ – giảm 66% so với cùng kỳ, giá chào bán cũng hạ. Bạn đang chờ mua nhà hay đã mua? 🏢👇
Nguồn: Thanh Niên, Dân trí, VTV, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #batdongsan #chungcu #tintuc
```

**Nguồn:**
- Thanh Niên – "Người mua nhà thận trọng hơn" – 14/10/2026 – https://thanhnien.vn/nguoi-mua-nha-than-trong-hon-185261014182806666.htm
- Dân trí – "Giao dịch chung cư mới ở Hà Nội giảm mạnh, giá vẫn trên 100 triệu/m2" – 13/10/2026 – https://dantri.com.vn/bat-dong-san/giao-dich-chung-cu-moi-o-ha-noi-giam-manh-gia-van-tren-100-trieum2-20261013113021241.htm
- VTV – "Giao dịch chung cư mới ở Hà Nội giảm mạnh" – 13/10/2026 – https://vtv.vn/giao-dich-chung-cu-moi-o-ha-noi-giam-manh-100261013112449726.htm
- VietnamPlus – "Thị trường bất động sản Hà Nội giảm thanh khoản, nhà đầu tư chịu áp lực lãi vay" – 10/2026 – https://www.vietnamplus.vn/thi-truong-bat-dong-san-ha-noi-giam-thanh-khoan-nha-dau-tu-chiu-ap-luc-lai-vay-post1142541.vnp

---

## Video 3: Mua vàng nhẫn tuần trước, giờ lỗ 8 triệu

- **File:** `26.10/video/video-3.mp4` (39,9 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Mua vàng nhẫn tuần trước, giờ lỗ 8 triệu?
- **Rủi ro:** Thấp – giá niêm yết công khai; "lỗ 8 triệu" là phép tính minh hoạ của Thanh Niên (mua vào giảm ~4,1 triệu + chênh mua–bán 4 triệu), video giải thích rõ. Tuổi Trẻ tính mức giảm giá mua vào hơn 5 triệu (mốc so sánh khác). Giá có thể đổi trong ngày.

**Caption (dán vào TikTok):**

```
Ai mua vàng nhẫn tuần trước, bán ra hôm nay có thể lỗ hơn 8 triệu đồng/lượng. Vàng thế giới vừa có tuần giảm mạnh nhất từ tháng 6. 💍👇
Nguồn: Thanh Niên, Tuổi Trẻ, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangnhan #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá vàng hôm nay 25.10.2026: Người mua vàng nhẫn lỗ hơn 8 triệu đồng sau một tuần" – 25/10/2026 – https://thanhnien.vn/gia-vang-hom-nay-25102026-nguoi-mua-vang-nhan-lo-hon-8-trieu-dong-sau-mot-tuan-185261024173152571.htm
- Tuổi Trẻ – "Giá vàng hôm nay 26-10: Vàng nhẫn SJC 'bốc hơi' hơn 5 triệu đồng/lượng sau một tuần" – 26/10/2026 – https://tuoitre.vn/gia-vang-hom-nay-26-10-vang-nhan-sjc-boc-hoi-hon-5-trieu-dong-luong-sau-mot-tuan-100261026072434286.htm
- VietnamPlus – "Giá vàng trong nước đi ngang, SJC duy trì ngưỡng 141,7 triệu đồng" – 26/10/2026 – https://www.vietnamplus.vn/gia-vang-trong-nuoc-di-ngang-sjc-duy-tri-nguong-1417-trieu-dong-post1144209.vnp
- VietnamPlus – "Giá vàng vẫn dưới ngưỡng 4.000 USD mỗi ounce trước thềm cuộc họp của Fed" – 26/10/2026 – https://www.vietnamplus.vn/gia-vang-van-duoi-nguong-4000-usd-moi-ounce-truoc-them-cuoc-hop-cua-fed-post1144196.vnp

---

## Video 4: Chi tiêu tăng 13,4% – thực chất chỉ 7,8%

- **File:** `26.10/video/video-4.mp4` (42,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Chi tiêu tăng 13,4%, nhưng thật ra?
- **Rủi ro:** Thấp – số liệu chính thức của Cục Thống kê; diễn giải trung tính.

**Caption (dán vào TikTok):**

```
9 tháng, người Việt chi hơn 5,9 triệu tỷ đồng mua sắm và dịch vụ, tăng 13,4%. Nhưng trừ phần giá tăng, sức mua thực chỉ tăng 7,8%. Bạn có đang chi tiêu dè dặt hơn? 🛒👇
Nguồn: VnExpress, VietnamPlus, Thanh Niên. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #tieudung #sucmua #tintuc
```

**Nguồn:**
- VnExpress – "Người tiêu dùng thận trọng chi tiêu" – 25/10/2026 – https://vnexpress.net/nguoi-tieu-dung-than-trong-chi-tieu-5136664.html
- VietnamPlus – "Tổng mức bán lẻ hàng hóa và dịch vụ tăng 13,4% trong 9 tháng đầu năm 2026" – 10/2026 – https://www.vietnamplus.vn/tong-muc-ban-le-hang-hoa-va-doanh-thu-dich-vu-tieu-dung-tang-134-post1140561.vnp
- Thanh Niên – "Sức mua bị 'nén' bởi tâm lý thận trọng" – 21/10/2026 – https://thanhnien.vn/suc-mua-bi-nen-boi-tam-ly-than-trong-185261021183210501.htm

---

## Tự kiểm tra
- [x] Mọi số liệu có nguồn báo/cơ quan trong danh sách được phép (≥ 2 báo đối chiếu)
- [x] Không câu khuyến nghị mua/bán, không dự báo giá, không nêu mã cổ phiếu/dự án/ngân hàng
- [x] Không chép nguyên văn báo, không dùng ảnh/video của báo
- [x] Video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Đã xem khung hình: chữ không tràn, dấu tiếng Việt đúng
- [ ] Giọng đọc AI – **chưa có** (TTS bị chặn)
