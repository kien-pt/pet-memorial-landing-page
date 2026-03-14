import Icon from "./Icon";
import { Services } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function ServicesSection() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Dịch vụ chính"
          title="Những lựa chọn gia đình thường cần thấy rõ ngay từ đầu."
        />

        <div className="service-grid">
          {Services.map((service, index) => (
            <article
              key={service.title}
              className={`service-card card-surface reveal delay-${index + 1}`.replace(
                "delay-4",
                "delay-3"
              )}
            >
              <div className="service-icon">
                <Icon name={service.icon} />
              </div>
              <p className="card-label">{service.meta}</p>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
