"use client";

import { useEffect, useState } from "react";

const SHOW_AFTER_PX = 400;

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-6 z-50 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/70 text-brandPurple shadow-lg shadow-black/10 backdrop-blur-xl transition hover:scale-[1.03] hover:border-brandPurple/30 hover:bg-white/90 dark:border-white/15 dark:bg-white/[0.08] dark:text-brandPurpleLight dark:shadow-black/40 dark:hover:border-white/25 dark:hover:bg-white/[0.12]"
      aria-label="Back to top"
    >
      <span className="sr-only">Back to top</span>
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.75">
        <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}
