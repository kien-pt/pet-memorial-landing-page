export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="container footer-wrap">
          <div>
            <strong>An Nhien Pet Memorial</strong>
            <p>Một không gian trực tuyến được thiết kế để mang lại cảm giác an tâm, trang nhã và dễ liên hệ hơn.</p>
          </div>
          <a href="#top">Lên đầu trang</a>
        </div>
      </footer>

      <div className="floating-actions" aria-label="Hành động nhanh">
        <a href="#contact">Tư vấn nhanh</a>
        <a href="#contact">Liên hệ</a>
      </div>
    </>
  );
}
