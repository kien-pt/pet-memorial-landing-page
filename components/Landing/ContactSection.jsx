export default function ContactSection({ feedback, onSubmit }) {
  return (
    <section id="contact" className="section contact-section">
      <div className="container contact-grid">
        <div className="contact-panel reveal">
          <p className="eyebrow">Liên hệ và hỗ trợ</p>
          <h2>Chỉ cần để lại thông tin, đội ngũ sẽ nhanh chóng đồng hành cùng bạn.</h2>
          <p>
            Nếu bạn cần được hướng dẫn ngay, hãy để lại số điện thoại hoặc liên hệ trực tiếp qua hotline.
            Form này cũng đã sẵn sàng để nối sang email, CRM hoặc webhook khi triển khai thật.
          </p>

          <div className="contact-cards">
            <article>
              <span>Hotline mẫu</span>
              <strong>0900 000 000</strong>
            </article>
            <article>
              <span>Email mẫu</span>
              <strong>hello@annhien.vn</strong>
            </article>
            <article>
              <span>Kênh tiếp theo</span>
              <strong>Zalo / Chatbot / Webhook</strong>
            </article>
          </div>
        </div>

        <form className="contact-form reveal delay-1" noValidate onSubmit={onSubmit}>
          <label>
            Họ và tên
            <input type="text" name="name" placeholder="Tên người liên hệ" required />
          </label>

          <label>
            Số điện thoại
            <input type="tel" name="phone" placeholder="0900 000 000" required />
          </label>

          <label>
            Nhu cầu chính
            <select name="service" defaultValue="Tư vấn tổng quan">
              <option value="Tư vấn tổng quan">Tư vấn tổng quan</option>
              <option value="Theo loại thú cưng">Tư vấn theo loại thú cưng</option>
              <option value="Nghi thức cầu siêu hoặc thủy táng">Nghi thức cầu siêu hoặc thủy táng</option>
              <option value="Hỏa táng riêng">Hỏa táng riêng</option>
              <option value="Tưởng niệm và keepsake">Tưởng niệm và keepsake</option>
              <option value="Cần hỗ trợ gấp">Cần hỗ trợ gấp</option>
            </select>
          </label>

          <label>
            Ghi chú
            <textarea
              name="message"
              rows="4"
              placeholder="Để lại vài dòng ngắn để đội ngũ chuẩn bị hỗ trợ nhanh hơn."
            ></textarea>
          </label>

          <button className="button button-primary button-full" type="submit">
            Gửi yêu cầu
          </button>
          <p className="form-feedback" role="status" aria-live="polite">
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}
