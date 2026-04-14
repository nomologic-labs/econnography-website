"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const floatingClass =
  "fixed bottom-8 left-6 z-50 sm:bottom-10 sm:left-8";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={`inline-flex h-12 w-12 rounded-2xl border border-white/20 bg-white/40 dark:border-white/10 dark:bg-white/5 ${floatingClass}`}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/25 bg-white/70 text-brandPurple shadow-lg shadow-black/5 backdrop-blur-xl transition hover:border-brandPurple/30 hover:bg-white/90 dark:border-white/15 dark:bg-white/[0.08] dark:text-brandPurpleLight dark:shadow-black/40 dark:backdrop-blur-xl dark:hover:border-white/25 dark:hover:bg-white/[0.12] ${floatingClass}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <span className="sr-only">Toggle color theme</span>
      {isDark ? (
        <SunIcon className="h-5 w-5 transition group-hover:scale-105" />
      ) : (
        <MoonIcon className="h-5 w-5 transition group-hover:scale-105" />
      )}
    </button>
  );
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M21 14.5A8.5 8.5 0 0111.5 5a8.46 8.46 0 013.5.74 6.5 6.5 0 100 8.52A8.46 8.46 0 0021 14.5z" />
    </svg>
  );
}
