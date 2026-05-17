import Link from "next/link";
import type { ComponentProps } from "react";

type Props = {
  title: string;
  href: string;
  lines?: 1 | 2 | 3;
  className?: string;
  linkClassName?: string;
} & Pick<ComponentProps<typeof Link>, "prefetch">;

const lineClampClass: Record<NonNullable<Props["lines"]>, string> = {
  1: "line-clamp-1",
  2: "line-clamp-2",
  3: "line-clamp-3",
};

export function ArticleBannerTitle({
  title,
  href,
  lines = 2,
  className = "",
  linkClassName = "",
  prefetch,
}: Props) {
  return (
    <h3
      className={`min-w-0 font-serif text-lg font-semibold leading-snug text-zinc-950 dark:text-zinc-50 ${className}`.trim()}
    >
      <Link
        href={href}
        prefetch={prefetch}
        title={title}
        className={`block overflow-hidden text-ellipsis ${lineClampClass[lines]} hover:text-brandPurple dark:hover:text-brandPurple/90 ${linkClassName}`.trim()}
      >
        {title}
      </Link>
    </h3>
  );
}
