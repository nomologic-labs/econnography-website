"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { areaHref, areaTitle } from "@/lib/areas";

const links = [
  { href: areaHref("economics-reviews"), label: areaTitle("economics-reviews") },
  { href: areaHref("finance-reviews"), label: areaTitle("finance-reviews") },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNav() {
  const pathname = usePathname() ?? "";

  return (
    <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 sm:gap-x-10">
      {links.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`font-sans text-sm font-medium underline-offset-4 transition-colors ${
              active
                ? "text-brandPurple dark:text-brandPurple/95"
                : "text-zinc-700 hover:text-brandPurple dark:text-zinc-300 dark:hover:text-brandPurple/95"
            } ${active ? "underline decoration-brandPurple/50" : "hover:underline hover:decoration-brandPurple/40"}`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
