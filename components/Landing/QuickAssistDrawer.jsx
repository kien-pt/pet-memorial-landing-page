import Icon from "./Icon";
import { QuickAssistOptions, QuickAssistReplies } from "./LandingData";

export default function QuickAssistDrawer({ isOpen, selectedOption, onSelect, onClose }) {
  const reply = selectedOption ? QuickAssistReplies[selectedOption] : null;

  return (
    <div className={`assist-drawer ${isOpen ? "is-open" : ""}`.trim()} aria-hidden={!isOpen}>
      <button
        type="button"
        className={`assist-overlay ${isOpen ? "is-open" : ""}`.trim()}
        aria-label="Đóng tư vấn nhanh"
        onClick={onClose}
      />

      <aside
        className={`assist-panel card-surface ${isOpen ? "is-open" : ""}`.trim()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="assist-title"
      >
        <button type="button" className="assist-close" aria-label="Đóng bảng tư vấn nhanh" onClick={onClose}>
          ×
        </button>

        <p className="eyebrow">Tư vấn nhanh 30 giây</p>
        <h2 id="assist-title">Chọn điều gia đình cần nhất lúc này để chúng tôi gợi ý bước tiếp theo phù hợp.</h2>
        <p className="assist-ai-note">
          AI sẽ cố gắng trả lời các câu hỏi nhạy cảm (ví dụ chi phí hỏa táng mèo 5kg) ngay trong drawer trước khi bạn để lại thông tin.
        </p>

        <div className="assist-options">
          {QuickAssistOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              className={`assist-option ${selectedOption === option.id ? "is-active" : ""}`.trim()}
              onClick={() => onSelect(option.id)}
            >
              <span className="assist-option-icon">
                <Icon name={option.icon} />
              </span>
              <span className="assist-option-copy">
                <strong>{option.title}</strong>
                <span>{option.text}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="assist-response">
          <p className="card-label">{reply?.label || "Gợi ý nhanh"}</p>
          <h3>{reply?.title || "Hãy chọn một nhu cầu để nhận gợi ý hỗ trợ phù hợp."}</h3>
          <p>
            {reply?.text ||
              "Sau khi chọn, bạn có thể để lại thông tin hoặc gọi trực tiếp để đội ngũ hỗ trợ ngay."}
          </p>
        </div>

        <div className="assist-actions">
          <a className="button button-primary" href="#contact" onClick={onClose}>
            Đi tới form liên hệ
          </a>
          <a className="button button-secondary" href="tel:0900000000">
            Gọi hotline mẫu
          </a>
        </div>
      </aside>
    </div>
  );
}
