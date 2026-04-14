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
    <footer className="mt-20 bg-white dark:bg-[#181B22]">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="font-serif text-lg font-semibold tracking-tight text-zinc-900 dark:text-editorial-ink">
                {col.title}
              </h2>
              {"links" in col ? (
                <ul className="mt-4 space-y-3 font-sans text-sm text-zinc-600 dark:text-editorial-muted">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-brandPurple dark:hover:text-brandPurpleLight"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="mt-4">
                  <p className="mb-4 font-sans text-sm text-zinc-600 dark:text-editorial-muted">
                    Follow Econography for updates.
                  </p>
                  <SocialIcons />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-slate-200/80 pt-8 dark:border-slate-800/70">
          <p className="font-sans text-sm text-zinc-500 dark:text-editorial-muted">
            © {new Date().getFullYear()} Econography. AGPL-3.0 license.
          </p>
        </div>
      </div>
    </footer>
  );
}
