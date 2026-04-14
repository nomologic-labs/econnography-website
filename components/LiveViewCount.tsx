"use client";

import { useEffect, useState } from "react";

export function LiveViewCount({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    fetch(`/api/views/${slug}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { views?: number } | null) => {
        if (!alive || !data || typeof data.views !== "number") return;
        setViews(data.views);
      })
      .catch(() => undefined);

    return () => {
      alive = false;
    };
  }, [slug]);

  if (views === null) {
    return (
      <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">Views · --</span>
    );
  }

  return (
    <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">Views · {views}</span>
  );
}
