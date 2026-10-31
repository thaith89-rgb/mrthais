# Chờ duyệt 31/10/2026 – 3 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (403 tới `api.msedgeservices.com` / `speech.platform.bing.com`), nên **cả 3 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `31.10/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn trong phiên cloud, số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn) và đối chiếu nhiều báo được phép; chi tiết trong `31.10/01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 2 (giá điện, thuế xăng) là **phương án dự kiến** – EVN dự kiến công bố chi tiết chiều 31/10; xem lại trước khi đăng.
- Video 2 bản đầu dài 47 giây → đã rút gọn lời đọc và dựng lại còn 39 giây.
- Nhánh này tiếp tục mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: không có video nào cũ hơn 14 ngày trên `main` (chỉ có video mẫu `_mau/` ngày 19/10, giữ nguyên).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (31/10)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng SJC rời mốc 140 triệu

- **File:** `31.10/video/video-1.mp4` (40,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng SJC thủng mốc 140 triệu!
- **Rủi ro:** Thấp – giá niêm yết công khai, ghi rõ "sáng 31/10"; không dự báo, không khuyên mua/bán. Cột "Đỉnh đầu năm" = gần 191 triệu (VnExpress: "đỉnh gần 191 triệu đồng đầu năm"). Giá vàng đổi liên tục trong ngày – nên kiểm tra lại trước 17h.

**Caption (dán vào TikTok):**

```
Sáng 31/10, vàng miếng SJC giảm 2,4 triệu đồng/lượng, về 139 triệu – rời xa mốc 140 triệu. So với đỉnh gần 191 triệu đầu năm, giá đã thấp hơn khoảng 27%. Bạn đang theo dõi vàng miếng hay vàng nhẫn? 🪙👇
Nguồn: VnExpress, Thanh Niên, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangSJC #tintuc
```

**Nguồn:**
- VnExpress – "Giá vàng mới nhất hôm nay ngày 31/10: Giá vàng miếng giảm hơn 2 triệu đồng" – 31/10/2026 – https://vnexpress.net/gia-vang-moi-nhat-hom-nay-ngay-31-10-5139058.html
- Thanh Niên – "Giá vàng hôm nay 31.10.2026: Lao dốc gần 3 triệu, rời xa ngưỡng 140 triệu đồng" – 31/10/2026 – https://thanhnien.vn/gia-vang-hom-nay-31102026-lao-doc-gan-3-trieu-roi-xa-nguong-140-trieu-dong-185261031085218272.htm
- VietnamPlus – "Giá vàng trong nước đồng loạt giảm, SJC xuống ngưỡng 141,4 triệu đồng" – 30/10/2026 – https://www.vietnamplus.vn/gia-vang-trong-nuoc-dong-loat-giam-sjc-xuong-nguong-1414-trieu-dong-post1145138.vnp

---

## Video 2: Dự kiến giảm giá điện, thuế xăng

- **File:** `31.10/video/video-2.mp4` (39,0 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Tiền điện, tiền xăng sắp giảm?
- **Rủi ro:** Thấp–Trung bình – dựa trên phát biểu của Phó Thủ tướng tại Quốc hội ngày 31/10, **chưa có văn bản/thông báo chính thức của EVN và Bộ Tài chính** khi làm video. Video luôn dùng chữ "dự kiến". Nếu trước 17h EVN đã công bố mức giảm cụ thể khác 2% thì nên sửa hoặc bỏ video này.

**Caption (dán vào TikTok):**

```
Ngày 31/10, Phó Thủ tướng cho biết dự kiến giảm khoảng 2% giá bán lẻ điện và đưa thuế tiêu thụ đặc biệt với xăng từ 7% về 0%. Đây là phương án dự kiến, chờ văn bản chính thức. Hóa đơn tiền điện nhà bạn mỗi tháng bao nhiêu? 💡👇
Nguồn: Thanh Niên, VnExpress, Tuổi Trẻ, Dân Trí, Báo Chính phủ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giadien #giaxang #tintuc
```

**Nguồn:**
- Thanh Niên – "Phó thủ tướng Nguyễn Văn Thắng: Sẽ giảm khoảng 2% giá bán lẻ điện" – 31/10/2026 – https://thanhnien.vn/pho-thu-tuong-nguyen-van-thang-se-giam-khoang-2-gia-ban-le-dien-185261031135140744.htm
- VnExpress – "Phó thủ tướng: Sẽ giảm 2% giá bán lẻ điện" – 31/10/2026 – https://vnexpress.net/pho-thu-tuong-se-giam-2-gia-ban-le-dien-5139121.html
- Tuổi Trẻ – "Phó thủ tướng Nguyễn Văn Thắng thông tin phương án giảm giá điện khoảng 2% từ nay đến 31-3-2027" – 31/10/2026 – https://tuoitre.vn/pho-thu-tuong-nguyen-van-thang-thong-tin-phuong-an-giam-gia-dien-khoang-2-tu-nay-den-31-3-2027-100261031123030329.htm
- Dân Trí – "Phó Thủ tướng thông tin việc giảm giá điện và thuế xăng" – 31/10/2026 – https://dantri.com.vn/thoi-su/pho-thu-tuong-thong-tin-viec-giam-gia-dien-va-thue-xang-20261031124703346.htm
- Báo Chính phủ – "Khẩn trương xem xét phương án giảm thuế tiêu thụ đặc biệt với xăng về 0% và giảm giá điện" – 27/10/2026 – https://baochinhphu.vn/khan-truong-xem-xet-phuong-an-giam-thue-tieu-thu-dac-biet-voi-xang-ve-0-va-giam-gia-dien-102261027183811931.htm

---

## Video 3: VN-Index khép tháng 10 trong sắc đỏ

- **File:** `31.10/video/video-3.mp4` (43,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** VN-Index mất gần 14 điểm ngày cuối tháng!
- **Rủi ro:** Thấp–Trung bình – số liệu thị trường công khai; không nêu mã cổ phiếu, không dự báo, không khuyên mua/bán. Lưu ý: kênh đã có video VN-Index hôm qua (phiên 29/10) – có thể bỏ nếu muốn tránh lặp.

**Caption (dán vào TikTok):**

```
Phiên cuối tháng 10, VN-Index mất gần 14 điểm về 1.741,62; khối ngoại bán ròng khoảng 640 tỷ đồng – phiên bán ròng thứ 6 liên tiếp. 📉👇
Nguồn: VietnamPlus, VnExpress, VnEconomy, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #chungkhoan #vnindex #tintuc
```

**Nguồn:**
- VietnamPlus – "Chứng khoán kết thúc tháng 10 trong sắc đỏ, VN-Index mất gần 14 điểm" – 30/10/2026 – https://www.vietnamplus.vn/chung-khoan-ket-thuc-thang-10-trong-sac-do-vn-index-mat-gan-14-diem-post1145228.vnp
- VnExpress – "VN-Index giảm sâu phiên cuối tháng" – 30/10/2026 – https://vnexpress.net/vn-index-giam-sau-phien-cuoi-thang-5138832.html
- VnEconomy – "Khối ngoại ngày càng bán ròng mạnh tay, cuối tuần xả thêm hơn 600 tỷ" – 30/10/2026 – https://vneconomy.vn/khoi-ngoai-ngay-cang-ban-rong-manh-tay-cuoi-tuan-xa-them-hon-600-ty.htm
- Dân Trí – "Chứng khoán lại giảm, ông Nguyễn Đức Tài có phát ngôn gây chú ý" – 30/10/2026 – https://dantri.com.vn/kinh-doanh/chung-khoan-lai-giam-ong-nguyen-duc-tai-co-phat-ngon-gay-chu-y-20261030153419674.htm
