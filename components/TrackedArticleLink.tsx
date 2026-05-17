"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  slug: string;
};

/** Article links; view counts are recorded on the article page (not on click). */
export function TrackedArticleLink({ slug, onClick, ...props }: Props) {
  void slug;
  return <Link {...props} onClick={onClick} />;
}
