import { NavItems } from "./LandingData";
import NavLink from "./NavLink";

export default function SiteHeader({ navOpen, setNavOpen }) {
  function closeNav() {
    setNavOpen(false);
  }

  return (
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
          {NavItems.map((item) => (
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
  );
}
