import Icon from "../Icon";
import { ProcessSteps } from "../LandingData";
import SectionHeader from "../SectionHeader";
import styles from "./ProcessSection.module.css";

export default function ProcessSection() {
  return (
    <section id="process" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Quy trình 4 bước"
          title="Gia đình sẽ biết rõ từng bước tiếp theo để mọi việc diễn ra nhẹ nhàng và dễ theo dõi hơn."
        />

        <div className={styles.grid}>
          {ProcessSteps.map((step, index) => (
            <article
              key={step.title}
              className={`process-card card-surface ${styles.card} reveal delay-${index + 1}`.replace(
                "delay-4",
                "delay-3"
              )}
            >
              <div className={styles.head}>
                <span className={styles.index}>{String(index + 1).padStart(2, "0")}</span>
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
