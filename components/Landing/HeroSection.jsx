import Icon from "./Icon";
import { HeroHighlights } from "./LandingData";

export default function HeroSection({ onQuickAssist }) {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow">Đồng hành nhẹ nhàng trong khoảnh khắc khó nói lời chào</p>
          <h1>
            Một lời tiễn biệt
            <span>dịu dàng và trọn vẹn.</span>
          </h1>
          <p className="hero-text">
            Từ khâu tiếp nhận, nghi thức tiễn biệt đến những kỷ vật lưu niệm, mọi trải nghiệm
            được sắp xếp để gia đình cảm thấy an tâm và được nâng niu hơn.
          </p>

          <div className="hero-actions">
            <button className="button button-primary" type="button" onClick={() => onQuickAssist?.("urgent")}>
              Tư vấn nhanh 30 giây
            </button>
            <a className="button button-secondary" href="#services">
              Xem nhóm dịch vụ
            </a>
          </div>

          <div className="hero-tags" aria-label="Điểm nổi bật">
            {HeroHighlights.map((item) => (
              <span key={item} className="hero-tag">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-stage reveal delay-1">
          <div className="stage-frame stage-main">
            <div className="stage-copy">
              <p className="card-label">Không gian tưởng niệm</p>
              <h2>Calm, private, and respectful</h2>
            </div>
            <div className="stage-orbs">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div className="stage-stack">
            <article className="mini-panel">
              <span className="mini-icon">
                <Icon name="lotus" />
              </span>
              <div>
                <strong>Nghi thức riêng tư</strong>
                <p>Một không gian lắng lại để gia đình chào tạm biệt theo cách riêng, có thể thêm lời nguyện ngắn.</p>
              </div>
            </article>

            <article className="mini-panel">
              <span className="mini-icon">
                <Icon name="frame" />
              </span>
              <div>
                <strong>Bức tường tưởng niệm</strong>
                <p>Khu tưởng niệm được định hướng để lưu ảnh, lời nhắn và keepsake theo từng bé.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
