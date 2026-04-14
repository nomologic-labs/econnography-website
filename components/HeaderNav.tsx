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
    <nav aria-label="Primary" className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3 sm:gap-x-12">
      {links.map(({ href, label }) => {
        const active = isActive(pathname, href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`font-sans text-sm font-medium tracking-tight transition-colors ${
              active
                ? "text-brandPurple dark:text-brandPurpleLight"
                : "text-zinc-700 hover:text-brandPurple dark:text-editorial-muted dark:hover:text-brandPurpleLight"
            } underline decoration-transparent decoration-1 underline-offset-[10px] transition-[text-decoration-color,color] hover:decoration-brandPurple dark:hover:decoration-brandPurpleLight ${
              active ? "decoration-brandPurple dark:decoration-brandPurpleLight" : ""
            }`}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
