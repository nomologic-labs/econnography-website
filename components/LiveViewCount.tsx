"use client";

import { useCallback, useEffect, useState } from "react";
import { ARTICLE_VIEW_RECORDED_EVENT } from "@/lib/view-session";

export function LiveViewCount({ slug }: { slug: string }) {
  const [views, setViews] = useState<number | null>(null);

  const loadViews = useCallback(() => {
    fetch(`/api/views/${slug}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: { views?: number } | null) => {
        if (!data || typeof data.views !== "number") return;
        setViews(data.views);
      })
      .catch(() => undefined);
  }, [slug]);

  useEffect(() => {
    let alive = true;
    loadViews();

    const onRecorded = (event: Event) => {
      const detail = (event as CustomEvent<{ slug?: string }>).detail;
      if (detail?.slug !== slug) return;
      if (!alive) return;
      loadViews();
    };

    window.addEventListener(ARTICLE_VIEW_RECORDED_EVENT, onRecorded);
    return () => {
      alive = false;
      window.removeEventListener(ARTICLE_VIEW_RECORDED_EVENT, onRecorded);
    };
  }, [slug, loadViews]);

  if (views === null) {
    return (
      <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">Views · --</span>
    );
  }

  return (
    <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">Views · {views}</span>
  );
}
