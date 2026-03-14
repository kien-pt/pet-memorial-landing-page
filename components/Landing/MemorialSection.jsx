import Icon from "./Icon";
import { MemorialItems } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function MemorialSection() {
  return (
    <section id="memorial" className="section section-soft">
      <div className="container">
        <SectionHeader
          eyebrow="Tưởng niệm và lưu giữ"
          title="Những điều còn ở lại xứng đáng được lưu giữ bằng sự tinh tế và trân trọng."
        />

        <div className="memorial-grid">
          {MemorialItems.map((item, index) => (
            <article key={item.title} className={`memorial-card card-surface reveal delay-${index + 1}`}>
              <div className={`memorial-visual ${item.tone}`}>
                <span className="memorial-icon">
                  <Icon name={item.icon} />
                </span>
              </div>
              <div className="memorial-body">
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
