import Image from "next/image";
import { EditorialPanels } from "./LandingData";
import SectionHeader from "./SectionHeader";

export default function EditorialSection() {
  return (
    <section className="section editorial-section">
      <div className="container">
        <SectionHeader
          eyebrow="Không gian và trải nghiệm"
          title="Hình ảnh và nội dung được sắp xếp để người xem cảm nhận được sự chỉn chu thay vì chỉ đọc mô tả."
        />

        <div className="editorial-grid">
          {EditorialPanels.map((panel, index) => (
            <article
              key={panel.title}
              className={`editorial-card editorial-card-${index + 1} card-surface reveal delay-${Math.min(
                index + 1,
                3
              )}`}
            >
              <div className="editorial-media">
                <Image
                  src={panel.image}
                  alt={panel.title}
                  fill
                  sizes="(max-width: 1120px) 100vw, 50vw"
                  priority={index === 0}
                />
              </div>
              <div className="editorial-body">
                <p className="card-label">{panel.label}</p>
                <h3>{panel.title}</h3>
                <p>{panel.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
