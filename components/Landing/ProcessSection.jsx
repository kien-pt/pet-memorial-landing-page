import Icon from "./Icon";
import { ProcessSteps } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Quy trình 4 bước"
          title="Một lộ trình ngắn gọn để gia đình biết điều gì sẽ diễn ra tiếp theo."
        />

        <div className="process-grid">
          {ProcessSteps.map((step, index) => (
            <article
              key={step.title}
              className={`process-card card-surface reveal delay-${index + 1}`.replace(
                "delay-4",
                "delay-3"
              )}
            >
              <div className="process-head">
                <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="process-icon">
                  <Icon name={step.icon} />
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
