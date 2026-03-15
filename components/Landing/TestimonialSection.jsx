import { Testimonials } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function TestimonialSection() {
  return (
    <section className="section section-soft testimonial-section">
      <div className="container">
        <SectionHeader
          eyebrow="Cảm nhận từ gia đình"
          title="Một vài chia sẻ thật giúp người xem cảm nhận rõ hơn sự tận tâm và nhẹ nhàng trong cách đồng hành."
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
