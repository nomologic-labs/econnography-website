"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const floatingClass =
  "fixed bottom-8 left-6 z-50 shadow-lg hover:shadow-xl sm:bottom-10 sm:left-8";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span
        className={`inline-flex h-11 w-11 rounded-full border border-brandPurple/30 bg-white/80 dark:bg-zinc-900/80 ${floatingClass}`}
        aria-hidden
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`group inline-flex h-11 w-11 items-center justify-center rounded-full border border-brandPurple/40 bg-white text-brandPurple transition hover:scale-[1.03] hover:border-brandPurple hover:text-brandPurple dark:border-brandPurple/50 dark:bg-zinc-950 dark:text-brandPurple/90 dark:hover:text-brandPurple ${floatingClass}`}
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
