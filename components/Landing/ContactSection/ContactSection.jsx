import styles from "./ContactSection.module.css";

export default function ContactSection({ feedback, onSubmit }) {
  return (
    <section id="contact" className={`${styles.section} section`}>
      <div className={`container ${styles.grid}`}>
        <div className={`card-surface reveal ${styles.panel}`}>
          <p className="eyebrow">Liên hệ và hỗ trợ</p>
          <h2>Chỉ cần để lại thông tin, đội ngũ sẽ sớm liên hệ để đồng hành cùng gia đình.</h2>
          <p>
            Nếu bạn cần được hướng dẫn ngay, hãy gọi hotline hoặc để lại số điện thoại.
            Chúng tôi sẽ giúp bạn xác định phương án phù hợp một cách nhẹ nhàng và rõ ràng.
          </p>

          <div className={styles.cards}>
            <article>
              <span>Hotline</span>
              <strong>028 6287 5666</strong>
            </article>
            <article>
              <span>Email</span>
              <strong>hello@annhien.vn</strong>
            </article>
            <article>
              <span>Hỗ trợ thêm</span>
              <strong>Zalo @annhienpet</strong>
            </article>
          </div>
        </div>

        <form className={`card-surface reveal delay-1 ${styles.form}`} noValidate onSubmit={onSubmit}>
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
              <option value="Chuẩn bị nghi thức tiễn biệt">Chuẩn bị nghi thức tiễn biệt</option>
              <option value="Hỏa táng riêng">Hỏa táng riêng</option>
              <option value="Kỷ vật lưu giữ ký ức">Kỷ vật lưu giữ ký ức</option>
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
          <p className={styles.feedback} role="status" aria-live="polite">
            {feedback}
          </p>
        </form>
      </div>
    </section>
  );
}
