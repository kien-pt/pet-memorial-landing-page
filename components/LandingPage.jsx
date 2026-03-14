"use client";

import { useEffect, useState } from "react";
import ContactSection from "./Landing/ContactSection";
import FaqSection from "./Landing/FaqSection";
import HeroSection from "./Landing/HeroSection";
import MemorialSection from "./Landing/MemorialSection";
import ProcessSection from "./Landing/ProcessSection";
import QuickAssistDrawer from "./Landing/QuickAssistDrawer";
import ServicesSection from "./Landing/ServicesSection";
import SiteFooter from "./Landing/SiteFooter";
import SiteHeader from "./Landing/SiteHeader";
import TrustBand from "./Landing/TrustBand";

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [assistOpen, setAssistOpen] = useState(false);
  const [assistSelection, setAssistSelection] = useState(null);
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

  useEffect(() => {
    if (!assistOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setAssistOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [assistOpen]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();

    if (!name || !phone) {
      setFeedback("Vui lòng nhập họ tên và số điện thoại để tiếp tục.");
      return;
    }

    setFeedback("Đã ghi nhận thông tin. Đội ngũ sẽ sớm liên hệ để đồng hành cùng gia đình.");
    event.currentTarget.reset();
  }

  function openAssist(option = null) {
    setAssistSelection(option);
    setAssistOpen(true);
    setNavOpen(false);
  }

  return (
    <div className="page-shell">
      <SiteHeader navOpen={navOpen} setNavOpen={setNavOpen} onQuickAssist={openAssist} />

      <main id="top">
        <HeroSection onQuickAssist={openAssist} />
        <TrustBand />
        <ServicesSection />
        <ProcessSection />
        <MemorialSection />
        <FaqSection openFaq={openFaq} setOpenFaq={setOpenFaq} />
        <ContactSection feedback={feedback} onSubmit={handleSubmit} />
      </main>

      <SiteFooter onQuickAssist={openAssist} />
      <QuickAssistDrawer
        isOpen={assistOpen}
        selectedOption={assistSelection}
        onSelect={setAssistSelection}
        onClose={() => setAssistOpen(false)}
      />
    </div>
  );
}
