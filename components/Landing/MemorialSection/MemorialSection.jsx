import Image from "next/image";
import { MemorialItems } from "../LandingData";
import SectionHeader from "../SectionHeader";
import styles from "./MemorialSection.module.css";

const memorialVisuals = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Không gian lưu giữ hình ảnh và ký ức"
  },
  {
    src: "https://images.pexels.com/photos/8217492/pexels-photo-8217492.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Kỷ vật lưu niệm được trưng bày trang nhã"
  },
  {
    src: "https://images.pexels.com/photos/33083323/pexels-photo-33083323.jpeg?auto=compress&cs=tinysrgb&w=1200",
    alt: "Góc tưởng niệm yên bình với ánh sáng dịu"
  }
];

export default function MemorialSection() {
  return (
    <section id="memorial" className="section section-soft">
      <div className="container">
        <SectionHeader
          eyebrow="Tưởng niệm và lưu giữ"
          title="Những điều còn ở lại xứng đáng được lưu giữ bằng sự tinh tế và trân trọng."
        />

        <div className={styles.grid}>
          {MemorialItems.map((item, index) => (
            <article key={item.title} className={`card-surface reveal delay-${index + 1} ${styles.card}`.trim()}>
              <div className={styles.visual}>
                <Image
                  src={memorialVisuals[index]?.src || memorialVisuals[0].src}
                  alt={memorialVisuals[index]?.alt || memorialVisuals[0].alt}
                  fill
                  sizes="(max-width: 1120px) 100vw, 33vw"
                />
              </div>
              <div className={styles.body}>
                <p className="card-label">{item.label}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
