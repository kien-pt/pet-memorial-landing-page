import { Testimonials } from "./LandingData";

export default function TestimonialSection() {
  return (
    <section className="section testimonial-section">
      <div className="container testimonial-grid">
        {Testimonials.map((item, index) => (
          <article key={item.author} className={`testimonial-card card-surface reveal delay-${index + 1}`}>
            <p>{item.quote}</p>
            <span>{item.author}</span>
          </article>
        ))}
      </div>
    </section>
  );
}
