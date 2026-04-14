import Link from "next/link";
import { SocialIcons } from "./SocialIcons";
import { areaHref, areaTitle } from "@/lib/areas";

const columns = [
  {
    title: "About",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/contact", label: "Contact Us" },
      { href: "/", label: "Home" },
    ],
  },
  {
    title: "Areas",
    links: [
      { href: areaHref("economics-reviews"), label: areaTitle("economics-reviews") },
      { href: areaHref("finance-reviews"), label: areaTitle("finance-reviews") },
    ],
  },
  {
    title: "Support",
    links: [
      { href: "/contact", label: "Help" },
      { href: "/editorial-standards", label: "Editorial standards" },
      { href: "/contact", label: "Corrections" },
    ],
  },
  {
    title: "Social",
    content: "social-icons" as const,
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/60">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-serif text-lg text-zinc-900 dark:text-zinc-50">{col.title}</h2>
              {"links" in col ? (
                <ul className="mt-4 space-y-3 font-sans text-sm text-zinc-600 dark:text-zinc-400">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-brandPurple dark:hover:text-brandPurple/90"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4">
                  <p className="mb-4 font-sans text-sm text-zinc-600 dark:text-zinc-400">
                    Follow Econography for updates.
                  </p>
                  <SocialIcons />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-zinc-200 pt-8 dark:border-zinc-800 sm:flex-row sm:items-center">
          <p className="font-sans text-sm text-zinc-500 dark:text-zinc-500">
            © {new Date().getFullYear()} Econography. All rights reserved.
          </p>
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
