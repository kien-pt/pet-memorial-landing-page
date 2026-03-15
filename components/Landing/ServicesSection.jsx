import Image from "next/image";
import { useEffect, useState } from "react";
import Icon from "./Icon";
import { Services } from "./LandingData";
import SectionHeader from "./SectionHeader";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  useEffect(() => {
    if (!activeService) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setActiveService(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeService]);

  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Dịch vụ chính"
          title="Gia đình có thể bắt đầu từ ba lựa chọn cốt lõi này để dễ hình dung hướng đi phù hợp."
        />

        <div className="service-grid">
          {Services.map((service, index) => (
            <button
              key={service.title}
              type="button"
              className={`service-card ${styles.serviceCardButton} card-surface reveal delay-${index + 1}`.replace(
                "delay-4",
                "delay-3"
              )}
              onClick={() => setActiveService(service)}
              aria-haspopup="dialog"
              aria-expanded={activeService?.title === service.title}
            >
              <div className={styles.serviceCardVisual}>
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  sizes="(max-width: 1120px) 100vw, 33vw"
                />
              </div>
              <div className={styles.serviceCardCopy}>
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <p className="card-label">{service.label}</p>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </div>
              <span className={styles.serviceCardHint}>Xem chi tiết</span>
            </button>
          ))}
        </div>
      </div>

      {activeService ? (
        <div
          className={styles.serviceModalBackdrop}
          role="presentation"
          onClick={() => setActiveService(null)}
        >
          <div
            className={`${styles.serviceModal} card-surface`}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.serviceModalClose}
              aria-label="Đóng nội dung dịch vụ"
              onClick={() => setActiveService(null)}
            >
              ×
            </button>

            <div className={styles.serviceModalVisual}>
              <Image
                src={activeService.image}
                alt={activeService.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 560px"
              />
            </div>
            <div className={styles.serviceModalIcon}>
              <Icon name={activeService.icon} />
            </div>
            <p className="card-label">{activeService.label}</p>
            <h3 id="service-modal-title">{activeService.title}</h3>
            <p>{activeService.details}</p>
          </div>
        </div>
      ) : null}
    </section>
  );
}
