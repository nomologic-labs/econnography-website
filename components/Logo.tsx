import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 rounded-md outline-none ring-brandPurple/0 transition hover:ring-2 focus-visible:ring-2 focus-visible:ring-brandPurple/40 dark:focus-visible:ring-brandPurpleLight/50"
    >
      <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brandPurple text-white shadow-md ring-2 ring-brandPurple/25 transition group-hover:ring-brandPurple group-hover:ring-offset-2 group-hover:ring-offset-white dark:ring-brandPurpleLight/30 dark:group-hover:ring-brandPurpleLight dark:group-hover:ring-offset-editorial-charcoal">
        <GlobeMark className="h-8 w-8" />
      </span>
      <span className="font-serif text-2xl font-semibold tracking-tight text-brandPurple transition group-hover:text-brandPurple sm:text-3xl dark:text-brandPurpleLight dark:group-hover:text-brandPurpleLight">
        Econography
      </span>
    </Link>
  );
}

function GlobeMark(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden {...props}>
      <circle cx="16" cy="16" r="11" stroke="currentColor" strokeWidth="1.6" />
      <ellipse cx="16" cy="16" rx="4.5" ry="11" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 16h22" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
