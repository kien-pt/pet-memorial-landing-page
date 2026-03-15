"use client";

import { useState } from "react";
import { useContactForm } from "../hooks/useContactForm";
import { useReveal } from "../hooks/useReveal";
import { useScrollLock } from "../hooks/useScrollLock";
import BotpressChatWidget from "./BotpressChatWidget";
import ContactSection from "./Landing/ContactSection";
import HeroSection from "./Landing/HeroSection";
import MemorialSection from "./Landing/MemorialSection";
import ProcessSection from "./Landing/ProcessSection";
import QuickAssistDrawer from "./Landing/QuickAssistDrawer";
import ServicesSection from "./Landing/ServicesSection";
import SiteFooter from "./Landing/SiteFooter";
import SiteHeader from "./Landing/SiteHeader";
import TestimonialSection from "./Landing/TestimonialSection";
import TrustBand from "./Landing/TrustBand";

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [assistOpen, setAssistOpen] = useState(false);
  const [assistSelection, setAssistSelection] = useState(null);
  const { feedback, handleSubmit } = useContactForm();

  useReveal();
  useScrollLock(assistOpen, () => setAssistOpen(false));

  function openAssist(option = null) {
    setAssistSelection(option);
    setAssistOpen(true);
    setNavOpen(false);
  }

  return (
    <>
      <div className="page-shell">
        <SiteHeader navOpen={navOpen} setNavOpen={setNavOpen} onQuickAssist={openAssist} />

        <main id="top">
          <HeroSection onQuickAssist={openAssist} />
          <TrustBand />
          <ServicesSection />
          <ProcessSection />
          <TestimonialSection />
          <MemorialSection />
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
      <BotpressChatWidget />
    </>
  );
}
