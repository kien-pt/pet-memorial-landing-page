# Landing page tang lễ thú cưng - bản Next.js

## Trạng thái hiện tại

Project đã được migrate từ landing page tĩnh sang cấu trúc `Next.js` App Router, nhưng vẫn giữ đúng định hướng:

- Đơn giản
- Giao diện đẹp
- Dễ mở rộng tiếp
- Phù hợp deploy lên Vercel về sau

## Cấu trúc chính

- `app/layout.jsx`: metadata, font links và shell gốc
- `app/page.jsx`: entry page
- `app/globals.css`: toàn bộ giao diện và responsive
- `components/landing-page.jsx`: nội dung landing page và tương tác phía client
- `package.json`: script chạy `dev`, `build`, `start`

## Những gì đã sẵn sàng

- Header và hero section cao cấp
- Khối dịch vụ cốt lõi
- Khối sứ mệnh
- Quy trình 4 bước
- Khu tưởng niệm mẫu
- FAQ accordion
- Form liên hệ giao diện hoàn chỉnh
- CTA nổi ở cuối màn hình
- Menu mobile
- Reveal animation nhẹ

## Những gì cần thay bằng dữ liệu thật trước khi launch

- Tên thương hiệu
- Hotline
- Email
- Link Zalo
- Nội dung dịch vụ thật
- Hình ảnh thật
- FAQ thật

## Những gì chưa được nối hệ thống thật

- Gửi form về email/webhook
- Chatbot AI
- Tracking Google Analytics
- Search Console
- Domain và deploy production

## Cách chạy

1. Cài dependency:
   - `npm.cmd install next react react-dom`
2. Chạy môi trường dev:
   - `npm.cmd run dev`
