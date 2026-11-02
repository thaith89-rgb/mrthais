# Chờ duyệt 02/11/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`, 3 lần thử), nên **cả 4 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `02.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn trong phiên cloud (`www.vietnamplus.vn` ENOTFOUND), số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn) và đối chiếu nhiều báo được phép; chi tiết trong `02.11/01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 3 (môn bài) dựa trên đề xuất công bố 28/10, có bài mới của VietnamPlus ngày 2/11; chưa từng làm video chủ đề này.
- Nhánh này tiếp tục mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: không có video nào **cũ hơn** 14 ngày trên `main` (chỉ có video mẫu `_mau/` ngày 19/10 – đúng 14 ngày, giữ nguyên; lần chạy sau sẽ xoá nếu vẫn còn).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (02/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng thế giới đáy 1 năm, SJC vẫn 140 triệu

- **File:** `02.11/video/video-1.mp4` (40,2 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng thế giới đáy 1 năm, SJC vẫn 140 triệu?
- **Rủi ro:** Thấp – giá niêm yết công khai, nhiều báo khớp (VnExpress, Thanh Niên, VnEconomy, Dân Trí). Mức chênh 17,5 triệu theo VnExpress (quy đổi tỷ giá Vietcombank); mốc 2 triệu (21/8) và gần 7 triệu (8/9, video làm tròn 7) theo Dân Trí. Không dự báo giá. Giá vàng đổi theo giờ – nên kiểm tra lại trước 17h.

**Caption (dán vào TikTok):**

```
Vàng thế giới cuối tuần rơi về 3.874 USD/ounce – đáy 1 năm, nhưng sáng 2/11 vàng miếng SJC lại tăng 1 triệu, bán ra 140 triệu đồng/lượng, cao hơn thế giới khoảng 17,5 triệu. Tháng 8 mức chênh chỉ khoảng 2 triệu. Bạn nghĩ sao? 👇
Nguồn: VnExpress, Thanh Niên, VnEconomy, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangsjc #tintuc
```

**Nguồn:**
- VnExpress – "Giá vàng miếng đảo chiều lên 140 triệu đồng" – 02/11/2026 – https://vnexpress.net/gia-vang-mieng-dao-chieu-len-140-trieu-dong-mot-luong-5139574.html
- Thanh Niên – "Giá vàng hôm nay 2.11.2026: Vàng miếng SJC tăng đầu tuần" – 02/11/2026 – https://thanhnien.vn/gia-vang-hom-nay-2112026-vang-mieng-sjc-tang-dau-tuan-185261102085230611.htm
- VnEconomy – "Giá vàng SJC tăng 1 triệu đồng/lượng trong phiên 2/11" – 02/11/2026 – https://vneconomy.vn/gia-vang-mieng-sjc-va-vang-nhan-bat-tang-1-trieu-dong-moi-luong.htm
- Dân Trí – "Vàng miếng SJC đạt 147 triệu đồng/lượng, cách giá thế giới chỉ 2 triệu đồng" – 21/08/2026 – https://dantri.com.vn/kinh-doanh/vang-mieng-sjc-dat-147-trieu-dongluong-cach-gia-the-gioi-chi-2-trieu-dong-20260821200312684.htm
- Dân Trí – "Vàng SJC giá 146,5 triệu đồng/lượng, chênh với thế giới gần 7 triệu đồng" – 08/09/2026 – https://dantri.com.vn/kinh-doanh/vang-sjc-gia-1465-trieu-dongluong-chenh-voi-the-gioi-gan-7-trieu-dong-20260908065431908.htm

---

## Video 2: Dầu Brent 112 USD, xăng trong nước ra sao?

- **File:** `02.11/video/video-2.mp4` (39,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Dầu 112 USD – xăng tuần này ra sao?
- **Rủi ro:** Thấp–Trung bình – chỉ nêu giá dầu thị trường (Dân Trí 111,5 lúc 8h, VietnamPlus 111,92 – video dùng 111,9). Không dự đoán giá xăng kỳ tới; không bình luận xung đột (chỉ nói "đàm phán ở Trung Đông"). Giá dầu biến động mạnh trong ngày.

**Caption (dán vào TikTok):**

```
Sáng 2/11, dầu Brent giảm hơn 1%, còn khoảng 111,9 USD/thùng nhờ kỳ vọng đàm phán ở Trung Đông, nhưng vẫn ở vùng cao nhất 6 tháng. Trong nước, xăng E5 RON 92 đang ở mức tối đa 24.223 đồng/lít từ 1/11. Bạn đổ xăng mỗi tuần hết bao nhiêu? ⛽👇
Nguồn: Dân Trí, VietnamPlus, Thanh Niên. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giadau #giaxang #tintuc
```

**Nguồn:**
- Dân Trí – "Giá dầu quay đầu hạ nhiệt, áp lực nguồn cung tạm lắng" – 02/11/2026 – https://dantri.com.vn/kinh-doanh/gia-dau-quay-dau-ha-nhiet-ap-luc-nguon-cung-tam-lang-20261102082631633.htm
- VietnamPlus – "Giá dầu thế giới giảm hơn 1% giữa kỳ vọng căng thẳng Trung Đông hạ nhiệt" – 02/11/2026 – https://www.vietnamplus.vn/gia-dau-the-gioi-giam-hon-1-giua-ky-vong-cang-thang-trung-dong-ha-nhiet-post1145587.vnp
- Thanh Niên – "Giá xăng dầu hôm nay 2.11.2026: Quay đầu giảm trong sáng đầu tuần" – 02/11/2026 – https://thanhnien.vn/gia-xang-dau-hom-nay-2112026-quay-dau-giam-trong-sang-dau-tuan-185261102083700244.htm
- VietnamPlus – "Thuế tiêu thụ đặc biệt về 0%, giá xăng đồng loạt giảm tới 1.804 đồng mỗi lít" – 31/10/2026 – https://www.vietnamplus.vn/thue-tieu-thu-dac-biet-ve-0-gia-xang-dong-loat-giam-toi-1804-dong-moi-lit-post1145423.vnp

---

## Video 3: Đề xuất xoá 1.450 tỷ nợ lệ phí môn bài

- **File:** `02.11/video/video-3.mp4` (42,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Đề xuất xoá 1.450 tỷ nợ lệ phí môn bài!
- **Rủi ro:** Thấp – đề xuất trong dự thảo của Bộ Tài chính, 5 báo khớp số. Video ghi rõ "mới là dự thảo, chưa có hiệu lực" và "nợ thuế gốc vẫn phải nộp đủ".

**Caption (dán vào TikTok):**

```
Bộ Tài chính đề xuất xoá khoảng 1.450 tỷ đồng nợ lệ phí môn bài (phát sinh đến hết 2025) của khoảng 764.000 người nộp thuế, kèm xoá có điều kiện tiền chậm nộp cho doanh nghiệp ngừng hoạt động. Đây mới là dự thảo. Bạn có biết doanh nghiệp nào đang 'đắp chiếu' không? 👇
Nguồn: VnExpress, Dân Trí, Thanh Niên, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #thue #doanhnghiep #tintuc
```

**Nguồn:**
- VnExpress – "Bộ Tài chính đề xuất xóa nợ lệ phí môn bài cho doanh nghiệp chờ giải thể" – 28/10/2026 – https://vnexpress.net/bo-tai-chinh-de-xuat-xoa-no-le-phi-mon-bai-cho-doanh-nghiep-cho-giai-the-5138075.html
- Dân Trí – "Bộ Tài chính đề xuất xóa nợ lệ phí môn bài" – 28/10/2026 – https://dantri.com.vn/kinh-doanh/bo-tai-chinh-de-xuat-xoa-no-le-phi-mon-bai-20261028215135553.htm
- Thanh Niên – "Đề xuất xóa 9.715 tỉ tiền chậm nộp cho doanh nghiệp 'đắp chiếu' nhiều năm" – 28/10/2026 – https://thanhnien.vn/de-xuat-xoa-9715-ti-tien-cham-nop-cho-doanh-nghiep-dap-chieu-nhieu-nam-185261028205527841.htm
- VietnamPlus – "Gỡ vướng nghĩa vụ thuế cho doanh nghiệp ngừng hoạt động nhiều năm" – 02/11/2026 – https://www.vietnamplus.vn/go-vuong-nghia-vu-thue-cho-doanh-nghiep-ngung-hoat-dong-nhieu-nam-post1145663.vnp

---

## Video 4: Hà Nội thu ngân sách vượt kế hoạch cả năm

- **File:** `02.11/video/video-4.mp4` (39,1 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Hà Nội thu ngân sách vượt kế hoạch cả năm!
- **Rủi ro:** Thấp – số ước tính của Thống kê Hà Nội (video ghi "ước"). ⚠️ Con số 652,2 nghìn tỷ mới thấy ở 1 báo (VietnamPlus/TTXVN); số cả năm 2025 (641,71) theo VnEconomy, 8 tháng (521,3) theo VietnamPlus.

**Caption (dán vào TikTok):**

```
Theo ước tính của Thống kê Hà Nội, thu ngân sách trên địa bàn 10 tháng năm 2026 đạt khoảng 652,2 nghìn tỷ đồng, vượt dự toán cả năm và tăng 11,2% so với cùng kỳ – đã cao hơn cả năm 2025. 📊👇
Nguồn: VietnamPlus, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #ngansach #hanoi #tintuc
```

**Nguồn:**
- VietnamPlus – "Hà Nội thu ngân sách 10 tháng vượt dự toán cả năm 2026" – 02/11/2026 – https://www.vietnamplus.vn/ha-noi-thu-ngan-sach-vuot-du-toan-ca-nam-2026-post1145628.vnp
- VietnamPlus – "Hà Nội thu ngân sách hơn 521.300 tỷ đồng trong 8 tháng của năm 2026" – 09/2026 – https://www.vietnamplus.vn/ha-noi-thu-ngan-sach-hon-521300-ty-dong-trong-8-thang-cua-nam-2026-post1133641.vnp
- VnEconomy – "Hà Nội đạt kỷ lục thu ngân sách 641,71 nghìn tỷ đồng năm 2025" – 2025 – https://vneconomy.vn/ha-noi-thu-ngan-sach-dat-hon-600000-ty-dong.htm

---

## Tự kiểm tra
- [x] Mọi số liệu có nguồn báo được phép
- [x] Không có câu khuyến nghị mua/bán, không dự báo giá
- [x] Không chép nguyên văn báo – lời tự viết
- [x] Không nội dung chính trị/nhạy cảm
- [x] Mỗi video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Đã xem khung hình: dấu tiếng Việt đúng, chữ không tràn
- [ ] Giọng đọc AI – **chưa có** (TTS bị chặn)
