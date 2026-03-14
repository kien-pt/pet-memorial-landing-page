import Icon from "./Icon";
import { Reasons } from "./LandingData";

export default function DifferenceSection() {
  return (
    <section id="difference" className="section section-soft">
      <div className="container difference-grid">
        <div className="difference-visual reveal">
          <div className="visual-card visual-card-large">
            <div className="visual-top tone-olive"></div>
            <div className="visual-bottom">
              <p className="card-label">Visual hierarchy</p>
              <h3>Hero, trust strip, cards, process, memorial, contact</h3>
            </div>
          </div>

          <div className="visual-row">
            <div className="visual-card visual-card-small">
              <div className="visual-top tone-sand"></div>
            </div>
            <div className="visual-card visual-card-quote">
              <p>“Không cần nhiều module. Cần một nhịp trang đẹp và có chủ đích.”</p>
            </div>
          </div>
        </div>

        <div className="difference-copy reveal delay-1">
          <p className="eyebrow">Vì sao cách trình bày này quan trọng</p>
          <h2>Một website tốt nên giúp gia đình thấy nhẹ hơn, không phải đọc nhiều hơn.</h2>
          <div className="reason-list">
            {Reasons.map((reason) => (
              <article key={reason.title} className="reason-item">
                <span className="reason-icon">
                  <Icon name={reason.icon} />
                </span>
                <div>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
