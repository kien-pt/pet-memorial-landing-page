import { useEffect } from "react";

export function useReveal(selector = ".reveal", threshold = 0.18) {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

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
      { threshold }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [selector, threshold]);
}
