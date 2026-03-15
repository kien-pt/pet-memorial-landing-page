import { Testimonials } from "../LandingData";
import SectionHeader from "../SectionHeader";
import styles from "./TestimonialSection.module.css";

const testimonialItems = [
  ...Testimonials,
  {
    quote:
      "Mình quý nhất là cách các bạn nói chuyện rất điềm tĩnh, không hối thúc và luôn cho gia đình cảm giác được tựa vào.",
    author: "Vy - Chủ nuôi Poodle"
  }
];

export default function TestimonialSection() {
  return (
    <section className={`${styles.section} section section-soft`}>
      <div className="container">
        <SectionHeader
          eyebrow="Cảm nhận từ gia đình"
          title="Một vài chia sẻ thật giúp người xem cảm nhận rõ hơn sự tận tâm và nhẹ nhàng trong cách đồng hành."
          className={`section-head reveal ${styles.head}`}
        />

        <div className={styles.grid}>
          {testimonialItems.map((item) => (
            <article key={item.author} className={`testimonial-card card-surface ${styles.card}`}>
              <p>{item.quote}</p>
              <span>{item.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
