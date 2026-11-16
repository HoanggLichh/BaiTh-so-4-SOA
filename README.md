<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Một framework <a href="http://nodejs.org" target="_blank">Node.js</a> tiến bộ để xây dựng các ứng dụng phía máy chủ hiệu quả và có khả năng mở rộng.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Mô tả

Kho mã khởi đầu (starter) bằng TypeScript cho framework [Nest](https://github.com/nestjs/nest).

## Cài đặt dự án

```bash
$ npm install
```

## Biên dịch và chạy dự án

```bash
# chế độ phát triển
$ npm run start

# chế độ theo dõi thay đổi (watch)
$ npm run start:dev

# chế độ production
$ npm run start:prod
```

## Chạy kiểm thử

```bash
# kiểm thử đơn vị (unit test)
$ npm run test

# kiểm thử e2e
$ npm run test:e2e

# độ bao phủ kiểm thử (test coverage)
$ npm run test:cov
```

## Triển khai

Khi bạn sẵn sàng triển khai ứng dụng NestJS lên môi trường production, có một số bước quan trọng giúp ứng dụng chạy hiệu quả nhất có thể. Xem thêm [tài liệu triển khai](https://docs.nestjs.com/deployment) để biết chi tiết.

Nếu bạn đang tìm một nền tảng đám mây để triển khai ứng dụng NestJS, hãy thử [Mau](https://mau.nestjs.com), nền tảng chính thức của chúng tôi để triển khai ứng dụng NestJS trên AWS. Mau giúp việc triển khai trở nên đơn giản và nhanh chóng, chỉ cần vài bước:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

Với Mau, bạn có thể triển khai ứng dụng chỉ bằng vài cú nhấp chuột, nhờ đó tập trung vào việc xây dựng tính năng thay vì quản lý hạ tầng.

## Khả năng quan sát (Observability)

Trong các ứng dụng production, khả năng quan sát là yếu tố thiết yếu để hiểu hệ thống vận hành ra sao, phát hiện sự cố sớm và duy trì hiệu năng ổn định.

[NestJS Observe](https://observe.nestjs.com) tự động đo đạc (instrument) ứng dụng NestJS của bạn, giúp bạn nhìn sâu vào hệ thống chỉ với thiết lập tối thiểu:

- **Truy vết phân tán (Distributed tracing):** Theo dõi các yêu cầu đi qua nhiều service và hiểu chúng luân chuyển trong hệ thống như thế nào.
- **Phân tích dạng thác nước (Waterfall):** Trực quan hóa quá trình thực thi yêu cầu, xác định các thao tác chậm, điểm nghẽn và độ trễ bất thường.
- **Phân tích hiệu năng:** Phân tích hiệu năng ứng dụng theo thời gian thực và nhanh chóng chỉ ra những chỗ cần tối ưu.
- **Chỉ số (Metrics):** Theo dõi các chỉ số chính của ứng dụng và hạ tầng để nắm được tình trạng và xu hướng hiệu năng của hệ thống.
- **Ghi log (Logging):** Tập trung và liên kết log với trace cùng các dữ liệu đo lường khác để việc gỡ lỗi dễ dàng hơn.
- **Theo dõi lỗi (Error tracking):** Phát hiện lỗi nhanh chóng và điều tra nguyên nhân gốc rễ kèm theo ngữ cảnh xung quanh.
- **Giám sát SLA:** Theo dõi các mục tiêu mức dịch vụ và nhận biết khi ứng dụng sắp hoặc đã vượt ngưỡng đã định.
- **Cảnh báo (Alarms và alerts):** Thiết lập cảnh báo cho lỗi nghiêm trọng, suy giảm hiệu năng, vi phạm SLA và các bất thường khác để đội ngũ phản ứng kịp thời.

## Tài nguyên

Một số tài nguyên có thể hữu ích khi làm việc với NestJS:

- Truy cập [Tài liệu NestJS](https://docs.nestjs.com) để tìm hiểu thêm về framework.
- Nếu có câu hỏi và cần hỗ trợ, hãy ghé [kênh Discord](https://discord.gg/G7Qnnhy) của chúng tôi.
- Để học sâu hơn và thực hành nhiều hơn, hãy xem các [khóa học](https://courses.nestjs.com/) video chính thức.
- Triển khai ứng dụng lên AWS chỉ với vài cú nhấp chuột nhờ [NestJS Mau](https://mau.nestjs.com).
- Tự động đo đạc ứng dụng của bạn với [NestJS Observer](https://observer.nestjs.com). Truy vết phân tán, chỉ số và log dễ dàng. Theo dõi lỗi và giám sát hiệu năng cho các ứng dụng NestJS.
- Trực quan hóa đồ thị ứng dụng và tương tác với ứng dụng NestJS theo thời gian thực bằng [NestJS Devtools](https://devtools.nestjs.com).
- Cần hỗ trợ cho dự án của bạn (từ bán thời gian đến toàn thời gian)? Xem [hỗ trợ doanh nghiệp](https://enterprise.nestjs.com) chính thức của chúng tôi.
- Để cập nhật tin tức, hãy theo dõi chúng tôi trên [X](https://x.com/nestframework) và [LinkedIn](https://linkedin.com/company/nestjs).
- Đang tìm việc, hoặc có vị trí cần tuyển? Xem [bảng việc làm](https://jobs.nestjs.com) chính thức của chúng tôi.

## Hỗ trợ

Nest là dự án mã nguồn mở theo giấy phép MIT. Dự án có thể phát triển nhờ các nhà tài trợ và những người ủng hộ tuyệt vời. Nếu bạn muốn tham gia cùng họ, vui lòng [đọc thêm tại đây](https://docs.nestjs.com/support).

## Giữ liên lạc

- Tác giả - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## Giấy phép

Nest được cấp phép theo [giấy phép MIT](https://github.com/nestjs/nest/blob/master/LICENSE).
