const items = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/econography_gafl/",
    icon: InstagramIcon,
  },
  {
    name: "YouTube",
    href: "#",
    icon: YouTubeIcon,
  },
  {
    name: "GitHub",
    href: "https://github.com/opus-ddr/econnography-website",
    icon: GitHubIcon,
  },
] as const;

export function SocialIcons() {
  return (
    <div className="flex items-center gap-3">
      {items.map(({ name, href, icon: Icon }) => (
        <a
          key={name}
          href={href}
          aria-label={name}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-brandPurple/25 bg-white/50 text-brandPurple backdrop-blur-sm transition hover:border-brandPurple hover:bg-brandPurple/10 dark:border-white/15 dark:bg-white/[0.06] dark:text-brandPurpleLight dark:hover:border-brandPurpleLight/40 dark:hover:bg-brandPurpleLight/10"
        >
          <Icon className="h-5 w-5" />
        </a>
      ))}
    </div>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function YouTubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...props}>
      <path d="M21.6 7.2c-.2-1-1-1.7-2-1.9C17.7 5 12 5 12 5s-5.7 0-7.6.3c-1 .2-1.8.9-2 1.9C2 9.2 2 12 2 12s0 2.8.4 4.8c.2 1 1 1.7 2 1.9 1.9.3 7.6.3 7.6.3s5.7 0 7.6-.3c1-.2 1.8-.9 2-1.9.4-2 .4-4.8.4-4.8s0-2.8-.4-4.8z" />
      <path d="M10 15V9l5 3-5 3z" fill="currentColor" stroke="none" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56 0-.28-.01-1.02-.01-2-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.72 1.26 3.38.96.1-.98.41-1.26.74-1.55-2.55-.29-5.23-1.28-5.23-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.14 1.18a10.9 10.9 0 013.02-.41c1.02.01 2.05.14 3.02.41 2.18-1.49 3.14-1.18 3.14-1.18.62 1.59.23 2.77.12 3.06.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.38-5.26 5.66.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.67.8.56A10.99 10.99 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}
