import Icon from "./Icon";
import { HeroHighlights } from "./LandingData";

export default function HeroSection() {
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
            <a className="button button-primary" href="#contact">
              Yêu cầu tư vấn
            </a>
            <a className="button button-secondary" href="#services">
              Xem cấu trúc mới
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
                <p>Một không gian lắng lại để gia đình chào tạm biệt theo cách riêng của mình.</p>
              </div>
            </article>

            <article className="mini-panel">
              <span className="mini-icon">
                <Icon name="keepsake" />
              </span>
              <div>
                <strong>Kỷ vật lưu niệm</strong>
                <p>Các vật phẩm được giới thiệu như những ký ức có thể nâng niu lâu dài.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
