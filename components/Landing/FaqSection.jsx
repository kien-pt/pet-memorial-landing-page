import { Faqs } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function FaqSection({ openFaq, setOpenFaq }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Câu hỏi thường gặp"
          title="Một vài điều gia đình thường muốn biết ngay trước khi liên hệ."
        />

        <div className="faq-list">
          {Faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <article
                key={faq.question}
                className={`faq-item card-surface reveal delay-${index + 1} ${isOpen ? "is-open" : ""}`.trim()}
              >
                <button
                  className="faq-question"
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className="faq-plus">{isOpen ? "-" : "+"}</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
