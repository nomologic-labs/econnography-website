"use client";

import { useCallback, useEffect, useState } from "react";

export function HomeShareSection() {
  const [url, setUrl] = useState("");
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const copy = useCallback(async () => {
    const target = url || window.location.href;
    try {
      await navigator.clipboard.writeText(target);
      setStatus("copied");
      window.setTimeout(() => setStatus("idle"), 2200);
    } catch {
      setStatus("error");
    }
  }, [url]);

  return (
    <section
      aria-labelledby="share-heading"
      className="rounded-xl bg-brandPurple px-6 py-8 text-white shadow-md sm:px-8 sm:py-10"
    >
      <h2 id="share-heading" className="font-serif text-2xl font-semibold tracking-tight sm:text-[1.75rem]">
        Share
      </h2>
      <p className="mt-2 max-w-xl font-sans text-sm leading-relaxed text-white/90">
        Send someone a link to Econography. Copy the current page URL and paste it anywhere you like.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label htmlFor="share-url" className="sr-only">
          Page link
        </label>
        <input
          id="share-url"
          type="text"
          readOnly
          value={url}
          placeholder="Loading link…"
          className="w-full min-w-0 flex-1 rounded-md border border-white/25 bg-white/10 px-4 py-2.5 font-sans text-sm text-white outline-none ring-brandPurpleLight/40 focus:ring-2"
        />
        <button
          type="button"
          onClick={copy}
          className="inline-flex shrink-0 items-center justify-center rounded-md bg-white px-5 py-2.5 font-sans text-sm font-semibold text-brandPurple transition-colors hover:bg-white/95"
        >
          Copy link
        </button>
      </div>
      {status === "copied" ? (
        <p className="mt-3 font-sans text-xs text-white/90" role="status">
          Copied to clipboard.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="mt-3 font-sans text-xs text-amber-100" role="status">
          Couldn&apos;t copy automatically. Select the link above and copy it manually (Ctrl+C or Cmd+C).
        </p>
      ) : null}
    </section>
  );
}
