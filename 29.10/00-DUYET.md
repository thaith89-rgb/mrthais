# Chờ duyệt 29/10/2026 – 3 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (lỗi 403 tới `speech.platform.bing.com` / `api.msedgeservices.com`), nên **cả 3 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `02-kich-ban.md`.

Lưu ý khác:
- Môi trường chặn truy cập trực tiếp các trang báo, nên số liệu thu thập qua công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu nhiều báo; chi tiết trong `01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- Hôm nay chỉ làm 3 video: chứng khoán phiên 29/10 chưa đủ nguồn khi làm, các tin còn lại ít liên quan hoặc rủi ro (xem cuối `01-nghien-cuu.md`).
- Nhánh này tiếp tục mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì bản sửa chưa có trên `main`. Nên merge một PR có bản sửa này.
- Dọn dẹp: không có video ngày nào cũ hơn 14 ngày trên `main` (chỉ có video mẫu `_mau/`, giữ nguyên).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (29/10)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Xăng dầu tăng từ 15h hôm nay

- **File:** `29.10/video/video-1.mp4` (38,7 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Diesel vượt 30.000 đồng/lít!
- **Rủi ro:** Thấp – giá điều hành chính thức của liên Bộ Công Thương – Tài chính; video ghi rõ là giá bán lẻ tối đa. Nên đăng đúng 17:00 (giá đã có hiệu lực từ 15h).

**Caption (dán vào TikTok):**

```
Từ 15h chiều 29/10, xăng dầu đồng loạt tăng: E10 lên 25.734 đồng/lít, diesel vượt mốc 30.000 đồng/lít. Bình xăng tuần này của bạn đắt thêm bao nhiêu? ⛽👇
Nguồn: VietnamPlus, Thanh Niên, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giaxang #xangdau #tintuc
```

**Nguồn:**
- VietnamPlus – "Giá xăng dầu đồng loạt tăng, xăng E10 có giá mới 25.734 đồng mỗi lít" – 29/10/2026 – https://www.vietnamplus.vn/gia-xang-dau-dong-loat-tang-xang-e10-co-gia-moi-25734-dong-moi-lit-post1145001.vnp
- Thanh Niên – "Giá xăng dầu hôm nay 29.10.2026: Xăng E10 chiều nay tăng hay giảm?" – 29/10/2026 – https://thanhnien.vn/gia-xang-dau-hom-nay-29102026-xang-e10-chieu-nay-tang-hay-giam-185261029082300087.htm
- Dân Trí – "Giá xăng giảm mạnh, có loại giảm gần 2.000 đồng/lít" – 22/10/2026 – https://dantri.com.vn/kinh-doanh/gia-xang-giam-manh-co-loai-giam-gan-2000-donglit-20261022142613733.htm

---

## Video 2: Fed giữ lãi suất, vàng và USD ra sao?

- **File:** `29.10/video/video-2.mp4` (41,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Fed giữ lãi suất, vàng và USD ra sao?
- **Rủi ro:** Thấp – số liệu công bố công khai, ghi rõ "sáng 29/10"; không dự báo giá, không khuyên mua/bán. Lưu ý: Thanh Niên ghi SJC "không đổi so với cuối ngày 28/10", Tuổi Trẻ ghi "+700.000 so với hôm qua" (so với sáng 28/10) – video chỉ dùng mức 142,7 triệu, không nêu mức tăng.

**Caption (dán vào TikTok):**

```
Fed giữ lãi suất ở 3,75–4%, nhưng 2 thành viên muốn tăng. Sáng 29/10 vàng SJC đứng yên ở 142,7 triệu đồng/lượng, tỷ giá trung tâm nhích 13 đồng. Bạn đang theo dõi vàng hay USD? 💵👇
Nguồn: VnExpress, Dân Trí, Thanh Niên, Tuổi Trẻ, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #fed #giavang #tygia #tintuc
```

**Nguồn:**
- VnExpress – "Fed giữ nguyên lãi suất" – 29/10/2026 – https://vnexpress.net/fed-giu-nguyen-lai-suat-5138091.html
- Dân Trí – "Fed giữ nguyên lãi suất, hai thành viên bỏ phiếu ngược" – 29/10/2026 – https://dantri.com.vn/kinh-doanh/fed-giu-nguyen-lai-suat-hai-thanh-vien-bo-phieu-nguoc-20261029011557538.htm
- Thanh Niên – "Giá vàng hôm nay 29.10.2026: Đứng yên khi Fed giữ nguyên lãi suất" – 29/10/2026 – https://thanhnien.vn/gia-vang-hom-nay-29102026-dung-yen-khi-fed-giu-nguyen-lai-suat-185261029083819216.htm
- Tuổi Trẻ – "Giá vàng hôm nay 29-10: Vàng thế giới giảm sau cuộc họp Fed" – 29/10/2026 – https://tuoitre.vn/gia-vang-hom-nay-29-10-vang-the-gioi-giam-sau-cuoc-hop-fed-10026102907492991.htm
- VietnamPlus – "Vàng SJC giữ mức 142,7 triệu đồng/lượng, tỷ giá trung tâm tăng 13 đồng" – 29/10/2026 – https://www.vietnamplus.vn/vang-sjc-giu-muc-1427-trieu-dongluong-ty-gia-trung-tam-tang-13-dong-post1144918.vnp
- Thanh Niên – "Giá USD hôm nay 29.10.2026: Đô la Mỹ, EUR, bảng Anh... cùng tăng" – 29/10/2026 – https://thanhnien.vn/gia-usd-hom-nay-29102026-do-la-my-eur-bang-anh-cung-tang-185261029084917189.htm

---

## Video 3: Từ 15/11, hội phụ huynh hết thu quỹ

- **File:** `29.10/video/video-3.mp4` (39,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Từ 15/11, hội phụ huynh hết thu quỹ?
- **Rủi ro:** Thấp – nội dung Thông tư 81/2026/TT-BGDĐT, trình bày trung tính, không nêu tên trường/cá nhân. Độ mới trung bình (ban hành cuối tháng 9, sắp có hiệu lực 15/11).

**Caption (dán vào TikTok):**

```
Từ 15/11/2026, Thông tư 81 có hiệu lực: ban đại diện cha mẹ học sinh không được thu, giữ tiền hay đặt khoản đóng góp bắt buộc. Lớp con bạn đã chốt quỹ chưa? 🎒👇
Nguồn: Thanh Niên, VietnamPlus, Dân Trí, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #chinhsachmoi #phuhuynh #giaoduc #tintuc
```

**Nguồn:**
- Thanh Niên – "Ban đại diện cha mẹ học sinh không được thu, giữ tiền hỗ trợ" – 30/09/2026 – https://thanhnien.vn/ban-dai-dien-cha-me-hoc-sinh-khong-duoc-thu-giu-tien-ho-tro-185260930180409378.htm
- VietnamPlus – "Bộ Giáo dục-Đào tạo "chốt" ban đại diện cha mẹ học sinh không được thu, quản lý tiền" – 09/2026 – https://www.vietnamplus.vn/bo-giao-duc-dao-tao-chot-ban-dai-dien-cha-me-hoc-sinh-khong-duoc-thu-quan-ly-tien-post1139259.vnp
- Dân Trí – "Cấm lập quỹ, phụ huynh đóng góp tiền cho hoạt động của lớp thế nào?" – 04/10/2026 – https://dantri.com.vn/giao-duc/cam-lap-quy-phu-huynh-dong-gop-tien-cho-hoat-dong-cua-lop-the-nao-20261004211052504.htm
- Tuổi Trẻ – "Chính sách mới về xổ số, lưu trú, chứng khoán có hiệu lực từ tháng 11-2026" – 26/10/2026 – https://tuoitre.vn/chinh-sach-moi-ve-xo-so-luu-tru-chung-khoan-co-hieu-luc-tu-thang-11-2026-10026102613244706.htm

