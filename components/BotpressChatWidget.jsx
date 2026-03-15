"use client";

import { useEffect, useState } from "react";
import Script from "next/script";

const injectUrl = process.env.NEXT_PUBLIC_BOTPRESS_INJECT_URL;
const botScriptUrl = process.env.NEXT_PUBLIC_BOTPRESS_BOT_SCRIPT_URL;
const FAB_BOTTOM = "108px";
const PREVIEW_BOTTOM = "188px";
const ENHANCER_STYLE_ID = "codex-botpress-fab-enhancer";
const WIGGLE_START_DELAY_MS = 1400;
const WIGGLE_INTERVAL_MS = 4200;
const ENHANCER_CSS = `
  .bpFab {
    box-shadow: 0 18px 36px rgba(34, 49, 45, 0.22);
    transition: transform 180ms ease, box-shadow 180ms ease;
    transform-origin: 50% 50%;
  }

  .bpFab:hover,
  .bpFab:focus-visible {
    transform: scale(1.04);
    box-shadow: 0 22px 42px rgba(34, 49, 45, 0.28);
  }
`;

export default function BotpressChatWidget() {
  const [isInjectReady, setIsInjectReady] = useState(false);
  const [isBotScriptReady, setIsBotScriptReady] = useState(false);

  useEffect(() => {
    if (!isBotScriptReady) {
      return undefined;
    }

    let shadowObserver;
    let rootObserver;
    let pollId;
    let wiggleStartTimeoutId;
    let wiggleIntervalId;
    let activeFab = null;

    const clearWiggleLoop = () => {
      if (wiggleStartTimeoutId) {
        window.clearTimeout(wiggleStartTimeoutId);
      }

      if (wiggleIntervalId) {
        window.clearInterval(wiggleIntervalId);
      }

      wiggleStartTimeoutId = undefined;
      wiggleIntervalId = undefined;
    };

    const runWiggle = (fab) => {
      if (!(fab instanceof HTMLElement) || !fab.isConnected) {
        return;
      }

      fab.animate(
        [
          { transform: "translate3d(0, 0, 0) rotate(0deg)" },
          { transform: "translate3d(-2px, 0, 0) rotate(-4deg)", offset: 0.2 },
          { transform: "translate3d(3px, 0, 0) rotate(4deg)", offset: 0.4 },
          { transform: "translate3d(-3px, 0, 0) rotate(-3deg)", offset: 0.6 },
          { transform: "translate3d(2px, 0, 0) rotate(2deg)", offset: 0.8 },
          { transform: "translate3d(0, 0, 0) rotate(0deg)" },
        ],
        {
          duration: 720,
          easing: "ease-in-out",
        }
      );
    };

    const ensureWiggleLoop = (fab) => {
      if (!(fab instanceof HTMLElement)) {
        return;
      }

      if (activeFab === fab && (wiggleStartTimeoutId || wiggleIntervalId)) {
        return;
      }

      activeFab = fab;
      clearWiggleLoop();

      const play = () => {
        runWiggle(fab);
      };

      wiggleStartTimeoutId = window.setTimeout(() => {
        play();
        wiggleIntervalId = window.setInterval(play, WIGGLE_INTERVAL_MS);
      }, WIGGLE_START_DELAY_MS);
    };

    const enhanceShadowRoot = (shadowRoot) => {
      const existingStyle = shadowRoot.getElementById(ENHANCER_STYLE_ID);

      if (existingStyle instanceof HTMLStyleElement) {
        if (existingStyle.textContent !== ENHANCER_CSS) {
          existingStyle.textContent = ENHANCER_CSS;
        }

        return;
      }

      const style = document.createElement("style");
      style.id = ENHANCER_STYLE_ID;
      style.textContent = ENHANCER_CSS;
      shadowRoot.appendChild(style);
    };

    const applyFabEnhancements = () => {
      const shadowRoot = document.querySelector("#fab-root")?.shadowRoot;

      if (!shadowRoot) {
        return null;
      }

      enhanceShadowRoot(shadowRoot);

      const fabWrapper = shadowRoot.querySelector(".bpFabWrapper");
      const fabButton = shadowRoot.querySelector(".bpFab");
      const messagePreview = shadowRoot.querySelector(".bpFABMessagePreview, .bpMessagePreview");

      if (fabWrapper instanceof HTMLElement) {
        fabWrapper.style.bottom = FAB_BOTTOM;
      }

      if (fabButton instanceof HTMLElement) {
        ensureWiggleLoop(fabButton);
      }

      if (messagePreview instanceof HTMLElement) {
        messagePreview.style.bottom = PREVIEW_BOTTOM;
      }

      return shadowRoot;
    };

    const connectShadowObserver = () => {
      const shadowRoot = applyFabEnhancements();

      if (!shadowRoot) {
        return false;
      }

      if (!shadowObserver) {
        shadowObserver = new MutationObserver(() => {
          applyFabEnhancements();
        });

        shadowObserver.observe(shadowRoot, {
          attributes: true,
          childList: true,
          subtree: true,
        });
      }

      return true;
    };

    if (!connectShadowObserver()) {
      rootObserver = new MutationObserver(() => {
        connectShadowObserver();
      });

      rootObserver.observe(document.body, {
        childList: true,
        subtree: true,
      });

      pollId = window.setInterval(() => {
        connectShadowObserver();
      }, 250);
    }

    return () => {
      if (pollId) {
        window.clearInterval(pollId);
      }

      clearWiggleLoop();
      rootObserver?.disconnect();
      shadowObserver?.disconnect();
    };
  }, [isBotScriptReady]);

  if (!injectUrl || !botScriptUrl) {
    return null;
  }

  return (
    <>
      <Script src={injectUrl} strategy="afterInteractive" onLoad={() => setIsInjectReady(true)} />
      {isInjectReady ? (
        <Script src={botScriptUrl} strategy="afterInteractive" onLoad={() => setIsBotScriptReady(true)} />
      ) : null}
    </>
  );
}
