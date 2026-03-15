import Icon from "../Icon";
import { CareOptions, FarewellOptions } from "../LandingData";
import SectionHeader from "../SectionHeader";

export default function CareOptionsSection() {
  return (
    <section id="care-options" className="section section-soft">
      <div className="container">
        <SectionHeader
          eyebrow="Theo loại thú cưng và nghi thức"
          title="Các cập nhật mới giúp gia đình thấy phương án phù hợp với bé ngay từ phần đầu trang."
        />

        <div className="care-grid">
          {CareOptions.map((option, index) => (
            <article key={option.title} className={`care-card card-surface reveal delay-${Math.min(index + 1, 3)}`}>
              <span className="care-icon">
                <Icon name={option.icon} />
              </span>
              <p className="card-label">{option.label}</p>
              <h3>{option.title}</h3>
              <p>{option.text}</p>
            </article>
          ))}
        </div>

        <div className="ritual-panel card-surface reveal delay-2">
          <div className="ritual-copy">
            <p className="eyebrow">Yếu tố phù hợp thị trường Việt Nam</p>
            <h3>Nội dung nghi thức không còn dừng ở mô tả chung mà đã có các lựa chọn cụ thể hơn.</h3>
          </div>

          <div className="ritual-list">
            {FarewellOptions.map((item) => (
              <article key={item.title} className="ritual-item">
                <span className="ritual-icon">
                  <Icon name={item.icon} />
                </span>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
