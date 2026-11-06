# Chờ duyệt 06/11/2026 – 4 video

## ⚠️ Cảnh báo quan trọng – video KHÔNG có giọng đọc

Dịch vụ giọng đọc Edge TTS vẫn bị proxy của môi trường cloud chặn (`Edge TTS WebSocket error: Unexpected server response: 403`; `api.msedgeservices.com`, `speech.platform.bing.com` không kết nối được), nên **cả 4 video đều không có tiếng**; phụ đề theo lời đọc vẫn hiển thị đầy đủ (thời lượng ước lượng theo số từ).
Cách khắc phục: cài đặt môi trường cloud → **Network access** → thêm `api.msedgeservices.com` và `speech.platform.bing.com` vào Allowed domains (xem `SETUP-REPORT.md`). Khi đăng, có thể thêm nhạc nền **không bản quyền** từ thư viện TikTok hoặc tự lồng tiếng theo lời đọc trong `06.11/02-kich-ban.md`.

Lưu ý khác:
- WebFetch tới các báo bị chặn trong phiên cloud (`ENOTFOUND vietnamplus.vn`); số liệu lấy từ công cụ tìm kiếm (tiêu đề + trích đoạn), đối chiếu nhiều báo được phép. **Nên bấm thử các link nguồn trước khi đăng.**
- Video 1 (vàng): giá thay đổi nhiều lần trong ngày – nên kiểm tra lại trước 17:00.
- Video 4 bản đầu dài 48,6 giây (>45) → đã rút gọn lời đọc, dựng lại còn 41,3 giây; đổi cảnh số liệu để không hiện mũi tên "tăng" sai nghĩa.
- Nhánh này mang theo bản sửa `scripts/build-day.mjs` + `remotion.config.ts` (đường dẫn Chromium mới) vì chưa có trên `main`.
- Dọn dẹp: đã xoá `_mau/video/video-1.mp4` (ngày 19/10, cũ hơn 14 ngày). Không còn mp4 nào khác cũ hơn 14 ngày trên `main`.
- Đã loại: VN-Index phiên 6/11 (chưa xác nhận được số đóng cửa từ 2 nguồn), giá xăng (đã làm 5/11), phát ngôn chính trị Mỹ (nhạy cảm), tin IPO nước ngoài (chưa chính thức).

## Hướng dẫn đăng
1. Tải từng file mp4 trong tab **Files changed** (⋯ → View file → Download).
2. Đăng trên **TikTok Studio**, dán caption + hashtag bên dưới, **hẹn giờ 17:00 hôm nay (06/11)**.
3. **Bật nhãn "Nội dung do AI tạo"**.
4. Đăng xong → **Merge** PR này để lưu trữ.

---

## Video 1: Vàng SJC quay đầu giảm 1,5 triệu

- **File:** `06.11/video/video-1.mp4` (44,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Vàng SJC vừa mất 1,5 triệu?
- **Rủi ro:** Thấp – giá niêm yết công khai; VnExpress, Thanh Niên, VietnamPlus, VnEconomy khớp số 138–141 triệu (−1,5 triệu). Giá thay đổi trong ngày – **nên kiểm tra lại giá SJC trước 17:00**.

**Caption (dán vào TikTok):**

```
Sáng 6/11, sau 4 phiên tăng liên tiếp, vàng miếng SJC giảm 1,5 triệu đồng mỗi lượng, còn 138 triệu mua vào – 141 triệu bán ra. Vàng thế giới lùi về quanh 4.078 USD/ounce. Giá trong nước vẫn cao hơn thế giới khoảng 14,5 triệu đồng/lượng. Bạn nghĩ giá vàng sẽ ra sao? 👇
Nguồn: VnExpress, Thanh Niên, VietnamPlus, VnEconomy. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #giavang #vangsjc #tintuc
```

**Nguồn:**
- VnExpress – "Giá vàng hôm nay: Giá vàng lùi về 141 triệu đồng" – 06/11/2026 – https://vnexpress.net/gia-vang-giam-3-5-trieu-xuong-sat-141-trieu-dong-5141437.html
- Thanh Niên – "Giá vàng hôm nay 6.11.2026: Quay đầu giảm 1,5 triệu đồng" – 06/11/2026 – https://thanhnien.vn/gia-vang-hom-nay-6112026-quay-dau-giam-15-trieu-dong-185261106074218257.htm
- VietnamPlus – "Giá vàng giảm tới 1,5 triệu đồng, thương hiệu SJC xuống ngưỡng 141 triệu đồng" – 06/11/2026 – https://www.vietnamplus.vn/gia-vang-giam-toi-15-trieu-dong-thuong-hieu-sjc-xuong-nguong-141-trieu-dong-post1146534.vnp
- VnEconomy – "Giá vàng trong nước "bốc hơi" 1,5 - 1,8 triệu đồng mỗi lượng sau 4 phiên tăng" – 06/11/2026 – https://vneconomy.vn/gia-vang-trong-nuoc-boc-hoi-15-18-trieu-dong-moi-luong-sau-4-phien-tang.htm

---

## Video 2: Giá USD giảm 180 đồng sau một tuần

- **File:** `06.11/video/video-2.mp4` (44,4 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Giá USD đang giảm liên tục?
- **Rủi ro:** Thấp – tỷ giá trung tâm 25.615 (6/11) và 25.623 (5/11) theo Thanh Niên (1 báo); giá bán Vietcombank 25.810 khớp Thanh Niên và VnEconomy. Có nhắc tên Vietcombank như mốc niêm yết tham chiếu (không quảng cáo). Không đề cập USD "chợ đen".

**Caption (dán vào TikTok):**

```
Ngày 6/11, Ngân hàng Nhà nước giảm tỷ giá trung tâm thêm 8 đồng, còn 25.615 đồng/USD. Vietcombank bán ra 25.810 đồng/USD; giá USD tại ngân hàng giảm khoảng 180 đồng sau một tuần. Bạn có đang cần mua USD? 👇
Nguồn: Thanh Niên, VnEconomy, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #tygia #usd #tintuc
```

**Nguồn:**
- Thanh Niên – "Giá USD hôm nay 6.11.2026: Giảm 180 đồng trong tuần qua" – 06/11/2026 – https://thanhnien.vn/gia-usd-hom-nay-6112026-giam-180-dong-trong-tuan-qua-185261106083421062.htm
- Thanh Niên – "Giá USD hôm nay 5.11.2026: Giảm ngày thứ 4 liên tiếp" – 05/11/2026 – https://thanhnien.vn/gia-usd-hom-nay-5112026-giam-ngay-thu-4-lien-tiep-185261105083226027.htm
- Dân Trí – "Giá USD ngân hàng xuống thấp nhất 18 tháng, chuyên gia nêu dự báo mới nhất" – 31/10/2026 – https://dantri.com.vn/kinh-doanh/gia-usd-ngan-hang-xuong-thap-nhat-18-thang-chuyen-gia-neu-du-bao-moi-nhat-20261031140323541.htm

---

## Video 3: Cá tra lên 38.000 đồng/kg, cao nhất 3 năm

- **File:** `06.11/video/video-3.mp4` (43,3 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Cá tra lên giá cao nhất 3 năm!
- **Rủi ro:** Thấp – VietnamPlus và Dân Trí (cùng 6/11) khớp 37.000–38.000 đồng/kg. Cột "Tháng 5 ≈ 33" trên biểu đồ suy ra từ mức tăng "hơn 5.000 đồng/kg" (ước lượng). Không nêu tên doanh nghiệp/cá nhân.

**Caption (dán vào TikTok):**

```
Cá tra nguyên liệu ở Đồng Tháp đang được thu mua 37.000–38.000 đồng/kg, cao hơn khoảng 5.000 đồng/kg so với tháng 5 – mức cao nhất khoảng 3 năm. Nguyên nhân: con giống khan hiếm, doanh nghiệp tăng thu mua cho đơn hàng xuất khẩu cuối năm. Bạn có hay ăn cá tra? 🐟👇
Nguồn: VietnamPlus, Dân Trí. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #nongsan #catra #xuatkhau #tintuc
```

**Nguồn:**
- VietnamPlus – "Giá cá tra Đồng Tháp tăng lên 38.000 đồng/kg" – 06/11/2026 – https://www.vietnamplus.vn/gia-ca-tra-nguyen-lieu-o-dong-thap-tang-cao-post1146580.vnp
- Dân Trí – "Một loại cá ở miền Tây được Nhật Bản muốn mua đang tăng giá mạnh" – 06/11/2026 – https://dantri.com.vn/kinh-doanh/mot-loai-ca-o-mien-tay-duoc-nhat-ban-muon-mua-dang-tang-gia-manh-20261106094111434.htm

---

## Video 4: Lãi tiết kiệm giảm, lãi vay nhà vẫn cao

- **File:** `06.11/video/video-4.mp4` (41,3 giây, 1080×1920, không tiếng)
- **Hook (0–3 giây):** Lãi vay mua nhà sao chưa giảm?
- **Rủi ro:** Trung bình-thấp – mức giảm 0,2–0,5%/năm (số liệu NHNN) khớp Dân Trí và Tuổi Trẻ; mức 11–14%/năm (thả nổi tới 15%) **chỉ có Dân Trí** → ghi "phổ biến". Tránh từ "bán cắt lỗ" để không gây hoang mang; không nêu tên ngân hàng/gói vay.

**Caption (dán vào TikTok):**

```
Lãi tiền gửi đã giảm, nhưng theo số liệu Ngân hàng Nhà nước dẫn qua Dân Trí, lãi suất bình quân khoản vay mới chỉ giảm 0,2–0,5%/năm so với đầu tháng 10. Lãi vay mua nhà phổ biến 11–14%/năm, một số khoản thả nổi tới 15%/năm. Khoản vay của bạn sắp hết ưu đãi chưa? 🏠👇
Nguồn: Dân Trí, Tuổi Trẻ. Thông tin tham khảo, không phải lời khuyên đầu tư.
#kinhte #taichinh #laisuat #vaymuanha #tintuc
```

**Nguồn:**
- Dân Trí – "Người vay mua nhà chịu áp lực bán cắt lỗ, chuyên gia nói lãi suất khó giảm nhanh" – 05/11/2026 – https://dantri.com.vn/bat-dong-san/nguoi-vay-mua-nha-chiu-ap-luc-ban-cat-lo-chuyen-gia-noi-lai-suat-kho-giam-nhanh-20261105172751930.htm
- Dân Trí – "Tất cả 46 ngân hàng đã giảm lãi huy động, lãi cho vay giảm bao nhiêu?" – 05/11/2026 – https://dantri.com.vn/kinh-doanh/tat-ca-46-ngan-hang-da-giam-lai-huy-dong-lai-cho-vay-giam-bao-nhieu-20261105095021470.htm
- Tuổi Trẻ – "46 ngân hàng giảm lãi suất tiền gửi, lãi vay giảm ra sao?" – 04/11/2026 – https://tuoitre.vn/46-ngan-hang-giam-lai-suat-tien-gui-lai-vay-giam-ra-sao-100261104171534546.htm

---

## Tự kiểm tra
- [x] Mọi số liệu có nguồn báo được phép (ghi trong `01-nghien-cuu.md`)
- [x] Không có câu khuyến nghị mua/bán, không hứa lợi nhuận
- [x] Tự viết lại, không chép nguyên văn; không dùng ảnh/video của báo
- [x] Không nội dung chính trị/nhạy cảm; không nêu tên cá nhân
- [x] Mỗi video có dòng nguồn + "Thông tin tham khảo, không phải lời khuyên đầu tư." (cảnh cuối)
- [x] Đã xem khung hình: dấu tiếng Việt đúng, chữ không tràn
- [ ] Giọng đọc AI: **chưa có** (TTS bị chặn)
