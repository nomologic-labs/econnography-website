"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  slug: string;
};

export function TrackedArticleLink({ slug, onClick, ...props }: Props) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        fetch(`/api/views/${slug}`, { method: "POST", keepalive: true }).catch(() => undefined);
        onClick?.(event);
      }}
    />
  );
}
