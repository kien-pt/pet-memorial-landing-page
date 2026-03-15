import Icon from "../Icon";
import { UtilityCards } from "../LandingData";

export default function UtilitySection() {
  return (
    <section className="section">
      <div className="container utility-layout">
        <div className="utility-copy reveal">
          <p className="eyebrow">Những điều khách thường muốn biết</p>
          <h2>Phần nội dung này được giữ ngắn để giúp người xem hiểu nhanh và yên tâm hơn.</h2>
        </div>

        <div className="utility-grid">
          {UtilityCards.map((card, index) => (
            <article key={card.title} className={`utility-card card-surface reveal delay-${index + 1}`}>
              <span className="utility-icon">
                <Icon name={card.icon} />
              </span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
