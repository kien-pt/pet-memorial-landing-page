import Image from "next/image";
import Icon from "../Icon";
import { HeroHighlights } from "../LandingData";
import styles from "./HeroSection.module.css";

export default function HeroSection({ onQuickAssist }) {
  return (
    <section className={`${styles.hero} section`}>
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.copy} reveal`}>
          <p className="eyebrow">Đồng hành nhẹ nhàng trong khoảnh khắc khó nói lời chào</p>
          <h1>
            Tiễn biệt bé yêu
            <span>trang nghiêm và dịu dàng.</span>
          </h1>
          <p className={styles.text}>
            Chúng tôi giúp gia đình đi qua thời khắc khó khăn này bằng sự riêng tư, trân trọng
            và những lựa chọn đủ rõ ràng để bạn không phải bối rối thêm.
          </p>

          <div className={styles.actions}>
            <button className="button button-primary" type="button" onClick={() => onQuickAssist?.("urgent")}>
              Tư vấn nhanh 30 giây
            </button>
            <a className="button button-secondary" href="#services">
              Xem nhóm dịch vụ
            </a>
          </div>

          <div className={styles.tags} aria-label="Điểm nổi bật">
            {HeroHighlights.map((item) => (
              <span key={item} className={styles.tag}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className={`${styles.stage} reveal delay-1`}>
          <div className={`stage-frame ${styles.main}`}>
            <div className={styles.visualContainer}>
              <Image
                src="/images/hero-sanctuary.png"
                alt="Không gian tiễn biệt yên tĩnh và trang nghiêm"
                fill
                priority
                className={styles.heroImage}
                sizes="(max-width: 1120px) 100vw, 600px"
              />
              <div className={styles.visualOverlay} />
            </div>
            <div className={styles.stageCopy}>
              <p className="card-label">Không gian tiễn biệt</p>
              <h2>Yên tĩnh, kín đáo và đầy tôn trọng</h2>
            </div>
          </div>

          <div className={styles.stack}>
            <article className={`card-surface ${styles.panel}`}>
              <span className="mini-icon">
                <Icon name="lotus" />
              </span>
              <div>
                <strong>Nghi thức riêng tư</strong>
                <p>Một không gian lắng lại để gia đình chào tạm biệt theo cách riêng, có thể thêm lời nguyện ngắn.</p>
              </div>
            </article>

            <article className={`card-surface ${styles.panel}`}>
              <span className="mini-icon">
                <Icon name="frame" />
              </span>
              <div>
                <strong>Bức tường tưởng niệm</strong>
                <p>Một nơi lưu lại hình ảnh, lời nhắn và những kỷ vật gắn với ký ức về bé.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
