import { useEffect } from "react";

export function useScrollLock(isLocked, onEscape) {
  useEffect(() => {
    if (!isLocked) return undefined;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onEscape?.();
      }
    };

    document.body.style.overflow = "hidden";
    document.body.classList.add("is-locked");
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.classList.remove("is-locked");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLocked, onEscape]);
}
