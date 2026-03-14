"use client";

import { useEffect, useState } from "react";

const navItems = [
  { href: "#services", label: "Dịch vụ" },
  { href: "#difference", label: "Khác biệt" },
  { href: "#process", label: "Quy trình" },
  { href: "#memorial", label: "Tưởng niệm" },
  { href: "#contact", label: "Liên hệ" }
];

const heroHighlights = [
  "Đón tận nơi",
  "Nghi thức riêng tư",
  "Hỗ trợ nhanh 24/7"
];

const trustPoints = [
  {
    value: "24/7",
    label: "Sẵn sàng tiếp nhận",
    detail: "Hotline và form luôn rõ ngay từ màn đầu tiên."
  },
  {
    value: "04",
    label: "Bước trải nghiệm",
    detail: "Ngắn gọn, không làm khách phải đọc quá nhiều."
  },
  {
    value: "01",
    label: "Landing page tập trung",
    detail: "Ưu tiên cảm xúc, sự tin cậy và khả năng liên hệ."
  },
  {
    value: "100%",
    label: "Mobile-first",
    detail: "Bố cục tối ưu cho màn hình điện thoại trước."
  }
];

const services = [
  {
    icon: "flame",
    title: "Hỏa táng riêng",
    meta: "Rõ gói, rõ quy trình",
    text: "Mỗi gói dịch vụ được trình bày ngắn, dễ quét và dễ liên hệ."
  },
  {
    icon: "lotus",
    title: "Nghi thức tiễn biệt",
    meta: "Tôn trọng cảm xúc",
    text: "Phần trình bày thiên về sự điềm tĩnh thay vì bán hàng quá mạnh."
  },
  {
    icon: "keepsake",
    title: "Kỷ vật lưu niệm",
    meta: "Hiển thị đẹp hơn",
    text: "Dạng card trực quan giúp sản phẩm tưởng niệm có giá trị hơn."
  }
];

const reasons = [
  {
    icon: "phone",
    title: "Liên hệ nhanh",
    text: "CTA luôn hiện diện, không bắt người dùng tìm kiếm."
  },
  {
    icon: "shield",
    title: "Cảm giác tin cậy",
    text: "Thêm trust strip, quy trình rõ và các điểm xác nhận dịch vụ."
  },
  {
    icon: "heart",
    title: "Ngôn từ hữu dụng",
    text: "Giảm mô tả chung chung, tăng thông tin khách thật sự cần."
  }
];

const processSteps = [
  {
    icon: "phone",
    title: "Liên hệ và xác nhận nhu cầu",
    text: "Khách gọi nhanh hoặc để lại số điện thoại để được phản hồi."
  },
  {
    icon: "route",
    title: "Tiếp nhận và đồng hành",
    text: "Nêu rõ phạm vi hỗ trợ, thời gian, hình thức xử lý và nghi thức."
  },
  {
    icon: "flame",
    title: "Thực hiện dịch vụ",
    text: "Giới thiệu quy trình bằng các khối rõ ràng, dễ tin cậy hơn."
  },
  {
    icon: "star",
    title: "Trao lại tưởng niệm",
    text: "Kỷ vật, tro cốt hoặc memorial keepsake được đặt ở điểm chốt cảm xúc."
  }
];

const memorialItems = [
  {
    tone: "soft-green",
    icon: "frame",
    label: "Memorial page",
    title: "Sổ tưởng niệm chọn lọc",
    text: "Một khối gallery có chiều sâu thay vì chỉ là mô tả bằng chữ."
  },
  {
    tone: "warm-sand",
    icon: "keepsake",
    label: "Keepsakes",
    title: "Kỷ vật được trưng bày như sản phẩm cao cấp",
    text: "Card lớn, visual rõ và nhấn chất liệu nhiều hơn."
  },
  {
    tone: "deep-olive",
    icon: "lotus",
    label: "Ceremony",
    title: "Nghi thức tiễn biệt mang cảm giác riêng tư",
    text: "Không gian và cảm xúc được thể hiện bằng layout thay vì text dài."
  }
];

const utilityCards = [
  {
    icon: "clock",
    title: "Khi nào cần gọi",
    text: "Ngay khi bạn cần được hướng dẫn bước đầu, không nhất thiết phải chuẩn bị đủ thông tin."
  },
  {
    icon: "document",
    title: "Khách cần biết gì trước",
    text: "Dịch vụ nào phù hợp, thời gian xử lý, hình thức tưởng niệm và cách nhận lại kỷ vật."
  },
  {
    icon: "spark",
    title: "Điểm chạm quan trọng",
    text: "Hotline, Zalo, FAQ ngắn và form để lại số được đặt đúng chỗ hơn."
  }
];

const testimonials = [
  {
    quote: "Một website tốt cho ngành này không cần nói nhiều, mà phải khiến người xem thấy được sự nâng niu.",
    author: "Định hướng thiết kế"
  },
  {
    quote: "Ấn tượng nên đến từ nhịp trang, hình khối, chất liệu và điểm chạm hỗ trợ, không phải từ những đoạn mô tả dài.",
    author: "Nguyên tắc triển khai"
  }
];

const faqs = [
  {
    question: "Vì sao bản mới ít chữ hơn?",
    answer:
      "Vì người dùng ở bối cảnh này cần thông tin dễ quét, nhanh hiểu và ít áp lực hơn. Nội dung dài sẽ được thay bằng card, icon, quy trình và các điểm chốt rõ ràng."
  },
  {
    question: "Vì sao vẫn chưa dùng ảnh thật?",
    answer:
      "Hiện tại mình đã dựng lại khung visual để sẵn sàng thay ảnh thật vào đúng vị trí. Khi có bộ ảnh thật, trang sẽ tăng chất lượng rất mạnh mà không cần đổi bố cục."
  },
  {
    question: "Phiên bản này đã đúng hướng hơn chưa?",
    answer:
      "Đúng hơn ở mặt art direction: ít text, nhiều hierarchy, nhiều khoảng thở, có trust strip, visual cards, iconography và CTA rõ hơn."
  }
];

function Icon({ name }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true
  };

  switch (name) {
    case "flame":
      return (
        <svg {...common}>
          <path d="M12 3c1.8 2 3.8 4.2 3.8 7.1a3.8 3.8 0 1 1-7.6 0c0-1.7.8-3.1 1.8-4.3" />
          <path d="M12 11.2c1.3 1.1 2.2 2.3 2.2 3.9a2.2 2.2 0 1 1-4.4 0c0-.8.2-1.5.8-2.3" />
        </svg>
      );
    case "lotus":
      return (
        <svg {...common}>
          <path d="M12 6c2 1.9 3 4 3 6a3 3 0 0 1-6 0c0-2 1-4.1 3-6Z" />
          <path d="M7 10c1.6.7 2.7 2.1 2.7 3.7A2.7 2.7 0 0 1 7 16.4 3.5 3.5 0 0 1 4 13c0-1.4 1.1-2.5 3-3Z" />
          <path d="M17 10c-1.6.7-2.7 2.1-2.7 3.7a2.7 2.7 0 0 0 2.7 2.7A3.5 3.5 0 0 0 20 13c0-1.4-1.1-2.5-3-3Z" />
          <path d="M8 19h8" />
        </svg>
      );
    case "keepsake":
      return (
        <svg {...common}>
          <path d="M12 21s-6.5-4.2-6.5-9.3A3.7 3.7 0 0 1 12 9a3.7 3.7 0 0 1 6.5 2.7C18.5 16.8 12 21 12 21Z" />
          <circle cx="12" cy="12" r="1.2" />
        </svg>
      );
    case "phone":
      return (
        <svg {...common}>
          <path d="M6.5 4.5h3L11 8l-1.9 1.9a15.6 15.6 0 0 0 5 5L16 13l3.5 1.5v3A1.5 1.5 0 0 1 18 19C10.8 19 5 13.2 5 6A1.5 1.5 0 0 1 6.5 4.5Z" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M12 3l7 3v5c0 4.6-2.8 7.9-7 10-4.2-2.1-7-5.4-7-10V6l7-3Z" />
          <path d="m9.5 12 1.8 1.8L15 10.2" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common}>
          <path d="M12 20.5S5 15.8 5 10.2A3.7 3.7 0 0 1 8.7 6.5c1.5 0 2.6.7 3.3 1.8.7-1.1 1.8-1.8 3.3-1.8A3.7 3.7 0 0 1 19 10.2c0 5.6-7 10.3-7 10.3Z" />
        </svg>
      );
    case "route":
      return (
        <svg {...common}>
          <circle cx="6.5" cy="7.5" r="2.5" />
          <circle cx="17.5" cy="16.5" r="2.5" />
          <path d="M8.5 9c2.6 0 3.6 1 3.6 3 0 1.6.8 2.4 3.4 2.4" />
        </svg>
      );
    case "star":
      return (
        <svg {...common}>
          <path d="m12 3 2.4 4.9 5.4.8-3.9 3.8.9 5.4L12 15.7 7.2 18l.9-5.4L4.2 8.7l5.4-.8L12 3Z" />
        </svg>
      );
    case "frame":
      return (
        <svg {...common}>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 14l2.5-2.5 2.2 2.2 2.8-3.2L18 14" />
          <circle cx="9" cy="9" r="1" />
        </svg>
      );
    case "clock":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 8v4l2.5 1.8" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M8 3h6l4 4v13a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" />
          <path d="M14 3v4h4" />
          <path d="M10 12h6M10 16h4" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M12 3l1.2 4.8L18 9l-4.8 1.2L12 15l-1.2-4.8L6 9l4.8-1.2L12 3Z" />
          <path d="M18.5 15.5 19 17l1.5.5-1.5.5-.5 1.5-.5-1.5-1.5-.5 1.5-.5.5-1.5Z" />
        </svg>
      );
    default:
      return null;
  }
}

function NavLink({ href, label, onClick, className = "" }) {
  return (
    <a className={className} href={href} onClick={onClick}>
      {label}
    </a>
  );
}

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  function closeNav() {
    setNavOpen(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!name || !phone) {
      setFeedback("Vui lòng nhập họ tên và số điện thoại để tiếp tục.");
      return;
    }

    setFeedback("Đã ghi nhận form demo. Bước tiếp theo có thể nối trực tiếp với email hoặc webhook.");
    event.currentTarget.reset();
  }

  return (
    <div className="page-shell">
      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#top" aria-label="An Nhien Pet Memorial">
            <span className="brand-mark">A</span>
            <span className="brand-copy">
              <strong>An Nhien</strong>
              <span>Pet Memorial</span>
            </span>
          </a>

          <button
            className="nav-toggle"
            type="button"
            aria-label={navOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={navOpen}
            aria-controls="site-nav"
            onClick={() => setNavOpen((value) => !value)}
          >
            <span></span>
            <span></span>
          </button>

          <nav
            id="site-nav"
            className={`site-nav ${navOpen ? "is-open" : ""}`.trim()}
            aria-label="Điều hướng chính"
          >
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} label={item.label} onClick={closeNav} />
            ))}
            <NavLink
              href="#contact"
              label="Tư vấn nhanh"
              onClick={closeNav}
              className="nav-cta"
            />
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <p className="eyebrow">Pet memorial landing page redesign</p>
              <h1>
                Ít chữ hơn.
                <span>Ấn tượng hơn.</span>
              </h1>
              <p className="hero-text">
                Trang chủ được làm lại theo hướng cao cấp và hữu dụng hơn: nhịp trang rõ, icon rõ,
                khối visual mạnh hơn, nội dung tập trung vào điều khách thực sự cần biết.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Yêu cầu tư vấn
                </a>
                <a className="button button-secondary" href="#services">
                  Xem cấu trúc mới
                </a>
              </div>

              <div className="hero-tags" aria-label="Điểm nổi bật">
                {heroHighlights.map((item) => (
                  <span key={item} className="hero-tag">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="hero-stage reveal delay-1">
              <div className="stage-frame stage-main">
                <div className="stage-copy">
                  <p className="card-label">Art direction</p>
                  <h2>Quiet luxury for a difficult moment</h2>
                </div>
                <div className="stage-orbs">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="stage-stack">
                <article className="mini-panel">
                  <span className="mini-icon">
                    <Icon name="lotus" />
                  </span>
                  <div>
                    <strong>Nghi thức riêng tư</strong>
                    <p>Khối nội dung giàu cảm xúc nhưng vẫn sạch và hiện đại.</p>
                  </div>
                </article>

                <article className="mini-panel">
                  <span className="mini-icon">
                    <Icon name="keepsake" />
                  </span>
                  <div>
                    <strong>Keepsake display</strong>
                    <p>Card trưng bày vật phẩm như một bộ sưu tập chọn lọc.</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-band">
          <div className="container trust-grid reveal">
            {trustPoints.map((item) => (
              <article key={item.label} className="trust-card">
                <strong>{item.value}</strong>
                <h3>{item.label}</h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Cấu trúc mới</p>
              <h2>Thay mô tả dài bằng các khối dễ quét, dễ tin và dễ chạm vào.</h2>
            </div>

            <div className="service-grid">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className={`service-card card-surface reveal delay-${index + 1}`.replace(
                    "delay-4",
                    "delay-3"
                  )}
                >
                  <div className="service-icon">
                    <Icon name={service.icon} />
                  </div>
                  <p className="card-label">{service.meta}</p>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="difference" className="section section-soft">
          <div className="container difference-grid">
            <div className="difference-visual reveal">
              <div className="visual-card visual-card-large">
                <div className="visual-top tone-olive"></div>
                <div className="visual-bottom">
                  <p className="card-label">Visual hierarchy</p>
                  <h3>Hero, trust strip, cards, process, memorial, contact</h3>
                </div>
              </div>

              <div className="visual-row">
                <div className="visual-card visual-card-small">
                  <div className="visual-top tone-sand"></div>
                </div>
                <div className="visual-card visual-card-quote">
                  <p>“Không cần nhiều module. Cần một nhịp trang đẹp và có chủ đích.”</p>
                </div>
              </div>
            </div>

            <div className="difference-copy reveal delay-1">
              <p className="eyebrow">Điểm thay đổi rõ nhất</p>
              <h2>Trang mới tập trung vào hierarchy thay vì nhồi nội dung.</h2>
              <div className="reason-list">
                {reasons.map((reason) => (
                  <article key={reason.title} className="reason-item">
                    <span className="reason-icon">
                      <Icon name={reason.icon} />
                    </span>
                    <div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Quy trình 4 bước</p>
              <h2>Nội dung hữu dụng hơn khi được chia thành từng bước cụ thể.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className={`process-card card-surface reveal delay-${index + 1}`.replace(
                    "delay-4",
                    "delay-3"
                  )}
                >
                  <div className="process-head">
                    <span className="process-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="process-icon">
                      <Icon name={step.icon} />
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="memorial" className="section section-soft">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">Memorial direction</p>
              <h2>Thêm chiều sâu bằng gallery card, keepsake card và ceremonial card.</h2>
            </div>

            <div className="memorial-grid">
              {memorialItems.map((item, index) => (
                <article
                  key={item.title}
                  className={`memorial-card card-surface reveal delay-${index + 1}`}
                >
                  <div className={`memorial-visual ${item.tone}`}>
                    <span className="memorial-icon">
                      <Icon name={item.icon} />
                    </span>
                  </div>
                  <div className="memorial-body">
                    <p className="card-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container utility-layout">
            <div className="utility-copy reveal">
              <p className="eyebrow">Text hữu dụng hơn</p>
              <h2>Thông tin nên trả lời câu hỏi thật, không chỉ kể chuyện thương hiệu.</h2>
            </div>

            <div className="utility-grid">
              {utilityCards.map((card, index) => (
                <article
                  key={card.title}
                  className={`utility-card card-surface reveal delay-${index + 1}`}
                >
                  <span className="utility-icon">
                    <Icon name={card.icon} />
                  </span>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container testimonial-grid">
            {testimonials.map((item, index) => (
              <article
                key={item.author}
                className={`testimonial-card card-surface reveal delay-${index + 1}`}
              >
                <p>{item.quote}</p>
                <span>{item.author}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <p className="eyebrow">FAQ ngắn</p>
              <h2>Chỉ giữ lại những câu hỏi giúp người xem hiểu ngay định hướng mới.</h2>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <article
                    key={faq.question}
                    className={`faq-item card-surface reveal delay-${index + 1} ${
                      isOpen ? "is-open" : ""
                    }`.trim()}
                  >
                    <button
                      className="faq-question"
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      <span className="faq-plus">{isOpen ? "−" : "+"}</span>
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

        <section id="contact" className="section contact-section">
          <div className="container contact-grid">
            <div className="contact-panel reveal">
              <p className="eyebrow">Điểm chốt cuối trang</p>
              <h2>Liên hệ nhanh, nhìn rõ và đủ tin cậy để hành động.</h2>
              <p>
                Khu contact được làm lại để giống một điểm chốt thực sự, thay vì chỉ là form đặt ở
                cuối trang.
              </p>

              <div className="contact-cards">
                <article>
                  <span>Hotline mẫu</span>
                  <strong>0900 000 000</strong>
                </article>
                <article>
                  <span>Email mẫu</span>
                  <strong>hello@annhien.vn</strong>
                </article>
                <article>
                  <span>Kênh tiếp theo</span>
                  <strong>Zalo / Chatbot / Webhook</strong>
                </article>
              </div>
            </div>

            <form className="contact-form reveal delay-1" noValidate onSubmit={handleSubmit}>
              <label>
                Họ và tên
                <input type="text" name="name" placeholder="Tên người liên hệ" required />
              </label>

              <label>
                Số điện thoại
                <input type="tel" name="phone" placeholder="0900 000 000" required />
              </label>

              <label>
                Nhu cầu chính
                <select name="service" defaultValue="Tư vấn tổng quan">
                  <option value="Tư vấn tổng quan">Tư vấn tổng quan</option>
                  <option value="Hỏa táng riêng">Hỏa táng riêng</option>
                  <option value="Tưởng niệm và keepsake">Tưởng niệm và keepsake</option>
                  <option value="Cần hỗ trợ gấp">Cần hỗ trợ gấp</option>
                </select>
              </label>

              <label>
                Ghi chú
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Để lại vài dòng ngắn để đội ngũ chuẩn bị hỗ trợ nhanh hơn."
                ></textarea>
              </label>

              <button className="button button-primary button-full" type="submit">
                Gửi yêu cầu
              </button>
              <p className="form-feedback" role="status" aria-live="polite">
                {feedback}
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <strong>An Nhien Pet Memorial</strong>
            <p>Phiên bản redesign tập trung vào visual hierarchy, utility content và cảm giác cao cấp hơn.</p>
          </div>
          <a href="#top">Lên đầu trang</a>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Hành động nhanh">
        <a href="#contact">Tư vấn nhanh</a>
        <a href="#contact">Liên hệ</a>
      </div>
    </div>
  );
}
