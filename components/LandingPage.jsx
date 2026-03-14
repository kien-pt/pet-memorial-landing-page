"use client";

import { useEffect, useState } from "react";
import ContactSection from "./Landing/ContactSection";
import DifferenceSection from "./Landing/DifferenceSection";
import EditorialSection from "./Landing/EditorialSection";
import FaqSection from "./Landing/FaqSection";
import HeroSection from "./Landing/HeroSection";
import MemorialSection from "./Landing/MemorialSection";
import ProcessSection from "./Landing/ProcessSection";
import ServicesSection from "./Landing/ServicesSection";
import SiteFooter from "./Landing/SiteFooter";
import SiteHeader from "./Landing/SiteHeader";
import TestimonialSection from "./Landing/TestimonialSection";
import TrustBand from "./Landing/TrustBand";
import UtilitySection from "./Landing/UtilitySection";

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
      <SiteHeader navOpen={navOpen} setNavOpen={setNavOpen} />

      <main id="top">
        <HeroSection />
        <TrustBand />
        <ServicesSection />
        <EditorialSection />
        <DifferenceSection />
        <ProcessSection />
        <MemorialSection />
        <UtilitySection />
        <TestimonialSection />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <ContactSection feedback={feedback} onSubmit={handleSubmit} />
      </main>

      <SiteFooter />
    </div>
  );
}
