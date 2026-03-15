"use client";

import Script from "next/script";

const injectUrl = process.env.NEXT_PUBLIC_BOTPRESS_INJECT_URL;
const botScriptUrl = process.env.NEXT_PUBLIC_BOTPRESS_BOT_SCRIPT_URL;

export default function BotpressChatWidget() {
  if (!injectUrl || !botScriptUrl) {
    return null;
  }

  return (
    <>
      <Script src={injectUrl} strategy="afterInteractive" />
      <Script src={botScriptUrl} strategy="afterInteractive" />
    </>
  );
}
