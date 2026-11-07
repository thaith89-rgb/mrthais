# Chờ duyệt 07/11/2026 – 3 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`), nên **cả 3 video đều không có tiếng**; phụ đề theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng 0,38 giây/từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `07.11/02-kich-ban.md`.

Lưu ý khác:
- Số liệu lấy qua công cụ tìm kiếm (tiêu đề + trích đoạn bài báo), đối chiếu ≥ 2 báo được phép. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 1: giá vàng có thể thay đổi trong chiều 7/11 – kiểm tra lại trước 17:00.
- Video 1 bản đầu dài 45,5 giây (>45) → rút gọn lời đọc, dựng lại còn 42,8 giây.
- Chỉ 3 video hôm nay: các tin khác hoặc đã làm những ngày trước (xuất nhập khẩu, xăng), hoặc nguồn lệch/cũ (cà phê), hoặc dễ chạm chính trị (giá dầu – xung đột Trung Đông). Chi tiết ở `07.11/01-nghien-cuu.md`.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì các PR trước chưa được merge vào `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (19/10, cũ hơn 14 ngày). Không còn mp4 nào khác cũ hơn 14 ngày trên `main`.
- Các PR chờ duyệt 20/10 → 06/11 vẫn chưa merge; nên merge/đóng để repo gọn.

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (07/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Trung Quốc gom thêm 25,8 tấn vàng

- **File:** `07.11/video/video-1.mp4` (42,8 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Trung Quốc vừa gom thêm 26 tấn vàng?
- **Rủi ro:** Thấp – số liệu PBoC công bố 7/11, Dân Trí và VietnamPlus khớp (25,8 tấn, tháng thứ 24, ~129 tấn 10 tháng). Giá SJC 138–141 triệu theo Thanh Niên và VnEconomy. Dân Trí chiều 7/11 đưa tin vàng trong nước "bật tăng" – **kiểm tra lại giá SJC trước 17:00**; nếu giá đã đổi, sửa câu "đứng yên ở 141 triệu" trong caption hoặc bỏ cảnh 4 khi cắt.

**Caption (dán vào TikTok):**

```
Ngân hàng trung ương Trung Quốc mua thêm khoảng 25,8 tấn vàng trong tháng 10 – tháng thứ 24 liên tiếp, nâng lượng mua 10 tháng lên khoảng 129 tấn, dù giá vàng tháng 10 giảm gần 7%. Trong nước, sáng 7/11 vàng miếng SJC đứng yên ở 138 – 141 triệu đồng/lượng; cả tuần tăng khoảng 1 triệu. Bạn nghĩ sao về động thái này? 👇
Nguồn: Dân Trí, VietnamPlus, Thanh Niên, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangsjc #tintuc
```

**Nguồn:**
- Dân Trí – "Trung Quốc mua thêm gần 26 tấn vàng, kho dự trữ vẫn "bốc hơi" 17 tỷ USD" – 07/11/2026 – https://dantri.com.vn/kinh-doanh/trung-quoc-mua-them-gan-26-tan-vang-kho-du-tru-van-boc-hoi-17-ty-usd-20261107125636722.htm
- VietnamPlus – "Ngân hàng Nhân dân Trung Quốc duy trì hoạt động mua vàng 24 tháng liên tiếp" – 07/11/2026 – https://www.vietnamplus.vn/ngan-hang-nhan-dan-trung-quoc-duy-tri-hoat-dong-mua-vang-24-thang-lien-tiep-post1146796.vnp
- Thanh Niên – "Giá vàng hôm nay 7.11.2026: Giậm chân tại mức 141 triệu đồng" – 07/11/2026 – https://thanhnien.vn/gia-vang-hom-nay-7112026-dam-chan-tai-muc-141-trieu-dong-185261107070326918.htm
- VnEconomy – "Giá vàng tăng 1 triệu đồng, chấm dứt chuỗi giảm 3 tuần" – 07/11/2026 – https://vneconomy.vn/gia-vang-bat-tang-tro-lai-sau-chuoi-giam-3-tuan-lien-tiep.htm

---

## Video 2: VN-Index mất hơn 15 điểm phiên cuối tuần

- **File:** `07.11/video/video-2.mp4` (41,7 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Chứng khoán đỏ lửa phiên cuối tuần?
- **Rủi ro:** Thấp – VnExpress, Tuổi Trẻ, Báo Đầu tư khớp 1.725,36 điểm (−15,37). Số khối ngoại mua ròng lệch theo phạm vi tính (393 tỷ HOSE – Báo Đầu tư; 435,3 tỷ 3 sàn – VnEconomy; "gần 500 tỷ" – VietnamPlus); video dùng số HOSE của Báo Đầu tư. Không nêu mã cổ phiếu, không khuyến nghị.

**Caption (dán vào TikTok):**

```
Phiên 6/11, VN-Index giảm 15,37 điểm (−0,88%) về 1.725,36 điểm; trên HOSE có 223 mã giảm, 105 mã tăng. Chỉ số khép lại tuần giảm thứ hai liên tiếp, dù khối ngoại đảo chiều mua ròng khoảng 393 tỷ đồng trên HOSE. Bạn thấy thị trường tuần tới thế nào? 👇
Nguồn: VnExpress, Báo Đầu tư, Tuổi Trẻ, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #chungkhoan #vnindex #tintuc
```

**Nguồn:**
- VnExpress – "Chứng khoán hôm nay 6/11: Áp lực bán bao phủ hơn 200 cổ phiếu" – 06/11/2026 – https://vnexpress.net/ap-luc-ban-bao-phu-hon-200-co-phieu-5141621.html
- Báo Đầu tư – "Chứng khoán phiên 6/11: VN-Index thu hẹp đà giảm, khối ngoại đảo chiều mua ròng" – 06/11/2026 – https://baodautu.vn/chung-khoan-phien-611-vn-index-thu-hep-da-giam-khoi-ngoai-dao-chieu-mua-rong-d738495.html
- Tuổi Trẻ – "Hòa cùng sắc đỏ chứng khoán châu Á, VN-Index giảm hơn 15 điểm" – 06/11/2026 – https://tuoitre.vn/hoa-cung-sac-do-chung-khoan-chau-a-vn-index-giam-hon-15-diem-100261106145242945.htm
- VietnamPlus – "VN-Index quay đầu giảm mạnh dù khối ngoại mua ròng gần 500 tỷ đồng" – 06/11/2026 – https://www.vietnamplus.vn/vn-index-quay-dau-giam-manh-du-khoi-ngoai-mua-rong-gan-500-ty-dong-post1146650.vnp

---

## Video 3: Người Việt chi 6,6 triệu tỷ trong 10 tháng

- **File:** `07.11/video/video-3.mp4` (44,3 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Người Việt chi hơn 6,6 triệu tỷ đồng?
- **Rủi ro:** Thấp – số liệu Cục Thống kê qua VietnamPlus, VnEconomy. Tin công bố đầu tháng 11 (không hoàn toàn trong 24h). "6,6 triệu tỷ" = 6.618,9 nghìn tỷ đồng, là tổng mức bán lẻ hàng hoá + doanh thu dịch vụ (không chỉ chi tiêu hộ gia đình) – hook ở dạng câu hỏi, cảnh 2 nêu rõ chỉ tiêu.

**Caption (dán vào TikTok):**

```
10 tháng năm 2026, tổng mức bán lẻ hàng hoá và doanh thu dịch vụ tiêu dùng ước đạt 6.618,9 nghìn tỷ đồng, tăng 13,5%; riêng tháng 10 đạt 695,5 nghìn tỷ, tăng 14,7%. Loại trừ yếu tố giá, mức tăng 10 tháng là 7,7%. Cuối năm bạn định chi tiêu nhiều hơn hay tiết kiệm? 👇
Nguồn: VietnamPlus, VnEconomy (số liệu Cục Thống kê). Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #tieudung #banle #tintuc
```

**Nguồn:**
- VietnamPlus – "Tổng mức bán lẻ hàng hóa và doanh thu dịch vụ tiêu dùng 10 tháng tăng 13,5%" – 11/2026 – https://www.vietnamplus.vn/tong-muc-ban-le-hang-hoa-va-doanh-thu-dich-vu-tieu-dung-10-thang-tang-135-post1146090.vnp
- VnEconomy – "Thương mại dịch vụ tháng 10: Tăng trưởng ấn tượng 14,7%" – 11/2026 – https://vneconomy.vn/ban-le-va-dich-vu-10-thang-nam-2026-vuot-6618-nghin-ty-dong.htm
- VietnamPlus – "Doanh nghiệp bán lẻ tăng tốc kích cầu tiêu dùng cuối năm" – 06/11/2026 – https://www.vietnamplus.vn/doanh-nghiep-ban-le-tang-toc-kich-cau-tieu-dung-cuoi-nam-post1146656.vnp

---

## Tự kiểm tra cuối
- [x] Mọi số liệu có nguồn báo được phép (Dân Trí, VietnamPlus, Thanh Niên, VnEconomy, VnExpress, Tuổi Trẻ, Báo Đầu tư)
- [x] Không câu khuyến nghị mua/bán, không nêu mã cổ phiếu
- [x] Tự tóm tắt, không chép nguyên văn; không dùng ảnh/video của báo
- [x] Không nội dung chính trị/nhạy cảm
- [x] Mỗi video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Thời lượng 41,7–44,3 giây; đã xem khung hình: chữ không tràn, dấu tiếng Việt đúng
- [ ] Giọng đọc AI – **chưa có** (TTS bị chặn)
