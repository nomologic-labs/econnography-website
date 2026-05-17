"use client";

import { useEffect } from "react";
import {
  ARTICLE_VIEW_RECORDED_EVENT,
  dispatchArticleViewRecorded,
  hasRecordedViewInSession,
  markViewRecordedInSession,
} from "@/lib/view-session";

export function ArticleViewTracker({ slug }: { slug: string }) {
  useEffect(() => {
    if (hasRecordedViewInSession(slug)) return;

    markViewRecordedInSession(slug);

    fetch(`/api/views/${slug}`, { method: "POST" })
      .then((res) => (res.ok ? res.json() : null))
      .then(() => {
        dispatchArticleViewRecorded(slug);
      })
      .catch(() => undefined);
  }, [slug]);

  return null;
}
