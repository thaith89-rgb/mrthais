# Chờ duyệt 27/10/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`api.msedgeservices.com` → 403), nên **cả 4 video đều không có tiếng**; phụ đề chạy theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng 0,38 giây/từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng.

Lưu ý khác:
- Môi trường chặn truy cập trực tiếp các trang báo, nên số liệu thu thập qua công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu nhiều báo; chi tiết trong `01-nghien-cuu.md`. **Nên bấm thử các link nguồn trước khi đăng.**
- **Video 3 (xăng)** dựa trên dự báo – xem mục rủi ro bên dưới.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (nhận đường dẫn Chromium mới của Playwright) từ PR 26/10, vì bản sửa chưa có trên `main`.
- Dọn dẹp: không có video ngày nào cũ hơn 14 ngày trên `main` (chỉ có video mẫu `_mau/`, giữ nguyên).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (27/10)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng thế giới lấy lại mốc 4.000 USD

- **File:** `27.10/video/video-1.mp4` (41,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng thế giới lấy lại mốc 4.000 USD?
- **Rủi ro:** Thấp – giá niêm yết công khai, ghi rõ "sáng 27/10"; không dự báo giá, không khuyên mua/bán. Chênh với thế giới các báo tính khác nhau (15,5–16,3 triệu) → video ghi "15–16 triệu". Giá có thể đổi trong ngày.

**Caption (dán vào TikTok):**

```
Vàng thế giới hồi lên trên 4.000 USD/ounce trước cuộc họp Fed, vàng miếng SJC nhích lên 142 triệu đồng/lượng. Bạn đang theo dõi vàng hay chờ tin Fed? 🪙👇
Nguồn: Tuổi Trẻ, Thanh Niên, VietnamPlus. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #fed #tintuc
```

**Nguồn:**
- Tuổi Trẻ – "Giá vàng hôm nay 27-10: Vàng thế giới vượt mốc 4.000 USD trước cuộc họp Fed" – 27/10/2026 – https://tuoitre.vn/gia-vang-hom-nay-27-10-vang-the-gioi-vuot-moc-4000-usd-truoc-cuoc-hop-fed-100261027075339108.htm
- Thanh Niên – "Giá vàng bật tăng sau nhiều ngày bất động" – 27/10/2026 – https://thanhnien.vn/gia-vang-bat-tang-sau-nhieu-ngay-bat-dong-185261027094558282.htm
- VietnamPlus – "Giá vàng sáng 27/10: SJC cao nhất 142 triệu đồng/lượng, tỷ giá trung tâm tăng" – 27/10/2026 – https://www.vietnamplus.vn/gia-vang-sang-2710-sjc-cao-nhat-142-trieu-dongluong-ty-gia-trung-tam-tang-post1144469.vnp
- VietnamPlus – "Giá vàng phục hồi khi áp lực lạm phát dịu trước cuộc họp Fed" – 27/10/2026 – https://www.vietnamplus.vn/gia-vang-phuc-hoi-khi-noi-lo-lam-phat-tam-lang-post1144433.vnp

---

## Video 2: Hơn 20 ngân hàng giảm lãi tiết kiệm

- **File:** `27.10/video/video-2.mp4` (40,6 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Hơn 20 ngân hàng vừa giảm lãi tiết kiệm!
- **Rủi ro:** Thấp – chính sách công khai, không nêu tên ngân hàng, không khuyên gửi/rút. "~500.000 đồng/năm" là phép tính minh hoạ (100 triệu × 0,5%). Lãi suất đã làm 20–23/10, góc mới: hơn 20 ngân hàng đã giảm.

**Caption (dán vào TikTok):**

```
Hơn 20 ngân hàng vừa giảm lãi suất tiết kiệm, phổ biến khoảng 0,5 điểm %/năm. Gửi 100 triệu, mỗi năm nhận ít hơn khoảng 500.000 đồng tiền lãi. Bạn còn gửi tiết kiệm không? 🏦👇
Nguồn: Thanh Niên, Dân trí, VnExpress. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #laisuat #tietkiem #tintuc
```

**Nguồn:**
- Thanh Niên – "Hơn 20 ngân hàng giảm lãi suất tiết kiệm" – 26/10/2026 – https://thanhnien.vn/hon-20-ngan-hang-giam-lai-suat-tiet-kiem-185261026145251678.htm
- Dân trí – "Lãi suất ngân hàng đồng loạt giảm, các kỳ hạn tiết kiệm hiện ở mức nào?" – 27/10/2026 – https://dantri.com.vn/kinh-doanh/lai-suat-ngan-hang-dong-loat-giam-cac-ky-han-tiet-kiem-hien-o-muc-nao-20261027102440972.htm
- VnExpress – "Ngân hàng Nhà nước giục giảm lãi suất tiết kiệm trên tất cả kênh" – 10/2026 – https://vnexpress.net/ngan-hang-nha-nuoc-giuc-giam-lai-suat-tiet-kiem-tren-tat-ca-kenh-5135186.html
- Dân trí – "Ngân hàng Nhà nước chỉ đạo các nhà băng giảm thực chất lãi suất" – 21/10/2026 – https://dantri.com.vn/kinh-doanh/ngan-hang-nha-nuoc-chi-dao-cac-nha-bang-giam-thuc-chat-lai-suat-20261021172211745.htm

---

## Video 3: Xăng có thể tăng lại kỳ 29/10

- **File:** `27.10/video/video-3.mp4` (42,5 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá xăng sắp tăng trở lại?
- **Rủi ro:** Trung bình-thấp – mức tăng 500–1.000 đồng/lít là **dự báo của báo Thanh Niên (1 nguồn)**; video nói rõ "dự báo", "có thể", "giá chính thức công bố chiều thứ Năm". Nếu muốn an toàn hơn, có thể chờ sau 15h ngày 29/10 rồi mới đăng, hoặc bỏ video này.

**Caption (dán vào TikTok):**

```
Sau kỳ giảm mạnh 22/10, giá xăng được dự báo có thể tăng 500–1.000 đồng/lít ở kỳ điều hành 29/10 khi dầu Brent vẫn quanh 115 USD/thùng. Đây mới là dự báo – chờ giá chính thức chiều thứ Năm. ⛽👇
Nguồn: Thanh Niên, VietnamPlus, Tuổi Trẻ, Tiền Phong. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giaxang #xangdau #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá xăng dầu hôm nay 27.10.2026: Xăng trong nước có thể tăng mạnh?" – 27/10/2026 – https://thanhnien.vn/gia-xang-dau-hom-nay-27102026-xang-trong-nuoc-co-the-tang-manh-185261027085621127.htm
- VietnamPlus – "Giá dầu thế giới giảm khoảng 1% nhờ hy vọng hạ nhiệt căng thẳng Trung Đông" – 27/10/2026 – https://www.vietnamplus.vn/gia-dau-the-gioi-giam-khoang-1-nho-hy-vong-ha-nhiet-cang-thang-trung-dong-post1144539.vnp
- VietnamPlus – "Giá xăng giảm trong khi dầu diesel tăng từ 15 giờ ngày 22/10" – 22/10/2026 – https://www.vietnamplus.vn/gia-xang-giam-trong-khi-dau-diesel-tang-tu-15-gio-ngay-2210-post1143591.vnp
- Tuổi Trẻ – "Giá xăng giảm, dầu tăng" – 22/10/2026 – https://tuoitre.vn/gia-xang-giam-dau-tang-100261022145051262.htm
- Tiền Phong – "PVOIL tiếp tục giảm giá 350 đồng/lít xăng dầu đến ngày 29/10" – 10/2026 – https://tienphong.vn/pvoil-tiep-tuc-giam-gia-350-donglit-xang-dau-den-ngay-2910-post1887485.tpo

---

## Video 4: Tháng 11: loạt quy định tài chính mới

- **File:** `27.10/video/video-4.mp4` (44,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Tháng 11: loạt quy định tài chính mới
- **Rủi ro:** Thấp – văn bản pháp luật đã ban hành (đối chiếu Công báo, Báo Chính phủ); mô tả trung tính, khuyên tra văn bản gốc. Tác động túi tiền thấp hơn các video khác.

**Caption (dán vào TikTok):**

```
Từ tháng 11/2026, nhiều quy định tài chính – ngân hàng có hiệu lực: VAMC xử lý nợ xấu, quỹ tín dụng nhân dân, phí và lệ phí… Bạn quan tâm quy định nào? 📜👇
Nguồn: VietnamPlus, Báo Chính phủ, Công báo Chính phủ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #chinhsachmoi #nganhang #tintuc
```

**Nguồn:**
- VietnamPlus – "Nhiều chính sách tài chính-ngân hàng chính thức có hiệu lực từ tháng 11" – 27/10/2026 – https://www.vietnamplus.vn/nhieu-chinh-sach-tai-chinh-ngan-hang-chinh-thuc-co-hieu-luc-tu-thang-11-post1144482.vnp
- Báo Chính phủ – "Thành lập Công ty Quản lý tài sản của các tổ chức tín dụng Việt Nam" – 18/09/2026 – https://baochinhphu.vn/thanh-lap-cong-ty-quan-ly-tai-san-cua-cac-to-chuc-tin-dung-viet-nam-102260918145337516.htm
- Công báo Chính phủ – "Nghị định số 359/2026/NĐ-CP" – 09/2026 – https://congbao.chinhphu.vn/van-ban/nghi-dinh-so-359-2026-nd-cp-470495.htm
- Công báo Chính phủ – "Thông tư số 40/2026/TT-NHNN" – 08/2026 – https://congbao.chinhphu.vn/van-ban/thong-tu-so-40-2026-tt-nhnn-470265.htm

---

## Tự kiểm tra
- [x] Mọi số liệu có nguồn báo/cơ quan trong danh sách được phép (đối chiếu ≥ 2 nguồn, trừ dự báo giá xăng – ghi rõ là dự báo)
- [x] Không câu khuyến nghị mua/bán, không dự báo giá vàng, không nêu tên ngân hàng/mã cổ phiếu
- [x] Không chép nguyên văn báo, không dùng ảnh/video của báo
- [x] Video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư."
- [x] Không nội dung chính trị nhạy cảm, không tiền mã hoá
- [x] Đã xem khung hình: chữ không tràn, dấu tiếng Việt đúng
- [ ] Giọng đọc AI – **chưa có** (TTS bị chặn)
