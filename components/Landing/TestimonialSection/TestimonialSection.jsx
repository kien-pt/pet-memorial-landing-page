import { Testimonials } from "../LandingData";
import SectionHeader from "../SectionHeader";
import styles from "./TestimonialSection.module.css";

export default function TestimonialSection() {
  return (
    <section className={`${styles.section} section section-soft`}>
      <div className="container">
        <SectionHeader
          eyebrow="Cảm nhận từ gia đình"
          title="Những lời nhắn gửi chân thành giúp lan tỏa sự an tâm và thấu hiểu."
          className={`section-head reveal ${styles.head}`}
        />

        <div className={styles.grid}>
          {Testimonials.map((item, index) => (
            <article 
              key={item.author} 
              className={`testimonial-card card-surface reveal delay-${index + 1} ${styles.card}`}
            >
              <div className={styles.quoteIcon}>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 24V11.2308C0 7.82051 0.769231 4.97436 2.30769 2.69231C3.84615 0.358974 6.33333 -0.564103 9.76923 0.128205V5.53846C8.28205 5.53846 7.15385 5.94872 6.38462 6.76923C5.66667 7.53846 5.30769 8.71795 5.30769 10.3077H10.1538V24H0ZM21.3846 24V11.2308C21.3846 7.82051 22.1538 4.97436 23.6923 2.69231C25.2308 0.358974 27.7179 -0.564103 31.1538 0.128205V5.53846C29.6667 5.53846 28.5385 5.94872 27.7692 6.76923C27.0513 7.53846 26.6923 8.71795 26.6923 10.3077H31.5385V24H21.3846Z" fill="#43564F" fillOpacity="0.12"/>
                </svg>
              </div>
              <p className={styles.quoteText}>{item.quote}</p>
              <footer className={styles.author}>
                <strong className={styles.name}>{item.author}</strong>
                <span className={styles.detail}>{item.detail}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
