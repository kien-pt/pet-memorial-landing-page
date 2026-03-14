import { Testimonials } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function TestimonialSection() {
  return (
    <section className="section section-soft testimonial-section">
      <div className="container">
        <SectionHeader
          eyebrow="Cảm nhận & tinh thần"
          title="Phần testimonial được đẩy lên rõ hơn để người xem không bỏ lỡ điểm chốt cảm xúc này."
          className="section-head testimonial-head reveal"
        />

        <div className="testimonial-grid">
          {Testimonials.map((item) => (
            <article key={item.author} className="testimonial-card card-surface">
              <p>{item.quote}</p>
              <span>{item.author}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
