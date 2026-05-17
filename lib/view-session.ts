const VIEW_SESSION_PREFIX = "econography:viewed:";

export function viewSessionKey(slug: string): string {
  return `${VIEW_SESSION_PREFIX}${slug}`;
}

export function hasRecordedViewInSession(slug: string): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(viewSessionKey(slug)) === "1";
  } catch {
    return false;
  }
}

export function markViewRecordedInSession(slug: string): void {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(viewSessionKey(slug), "1");
  } catch {
    // Ignore private browsing / quota errors.
  }
}

export const ARTICLE_VIEW_RECORDED_EVENT = "econography:article-view-recorded";

export function dispatchArticleViewRecorded(slug: string): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent(ARTICLE_VIEW_RECORDED_EVENT, { detail: { slug } }));
}
