import { Faqs } from "../LandingData";
import SectionHeader from "../SectionHeader";
import styles from "./FaqSection.module.css";

export default function FaqSection({ openFaq, setOpenFaq }) {
  return (
    <section className="section">
      <div className="container">
        <SectionHeader
          eyebrow="Câu hỏi thường gặp"
          title="Một vài điều gia đình thường muốn biết ngay trước khi liên hệ."
        />

        <div className={styles.list}>
          {Faqs.map((faq, index) => {
            const isOpen = openFaq === index;

            return (
              <article
                key={faq.question}
                className={`card-surface reveal delay-${index + 1} ${styles.item} ${isOpen ? styles.open : ""}`.trim()}
              >
                <button
                  className={styles.question}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  <span className={styles.plus}>{isOpen ? "-" : "+"}</span>
                </button>
                <div className={styles.answer}>
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
