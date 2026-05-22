"use client";

import { useEffect, useMemo, useState } from "react";
import { TrackedArticleLink } from "./TrackedArticleLink";

type SearchResult = {
  slug: string;
  title: string;
  area: string;
  snippet: string;
};

export function HeaderSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [open, setOpen] = useState(false);

  const normalized = useMemo(() => query.trim(), [query]);

  useEffect(() => {
    if (normalized.length < 2) {
      setResults([]);
      setOpen(false);
      return;
    }

    const controller = new AbortController();
    const timer = setTimeout(async () => {
      const response = await fetch(`/api/search?q=${encodeURIComponent(normalized)}`, {
        signal: controller.signal,
      });
      if (!response.ok) return;
      const data = (await response.json()) as { results: SearchResult[] };
      setResults(data.results ?? []);
      setOpen(true);
    }, 180);

    return () => {
      controller.abort();
      clearTimeout(timer);
    };
  }, [normalized]);

  return (
    <div className="relative w-full max-w-xl lg:mx-auto">
      <label htmlFor="header-search" className="sr-only">
        Search articles
      </label>
      <input
        id="header-search"
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => setOpen(results.length > 0)}
        placeholder="Search all article content..."
        className="w-full rounded-full border border-zinc-300/90 bg-white/80 px-4 py-2 text-sm leading-tight text-zinc-900 shadow-sm outline-none backdrop-blur-sm transition placeholder:text-zinc-400 focus:border-brandPurple focus:ring-2 focus:ring-brandPurple/20 dark:border-white/10 dark:bg-white/[0.06] dark:text-editorial-ink dark:placeholder:text-editorial-muted dark:focus:border-brandPurpleLight dark:focus:ring-brandPurpleLight/20"
      />

      {open && results.length > 0 ? (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-40 rounded-xl border border-zinc-200/90 bg-white/95 p-2 shadow-xl shadow-black/10 backdrop-blur-md dark:border-white/10 dark:bg-editorial-deep/95 dark:shadow-black/40">
          <ul className="max-h-80 overflow-auto">
            {results.map((item) => (
              <li key={item.slug}>
                <TrackedArticleLink
                  slug={item.slug}
                  href={`/articles/${item.slug}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="block rounded-lg px-3 py-2.5 transition hover:bg-brandPurple/8 dark:hover:bg-brandPurpleLight/10"
                >
                  <p className="font-serif text-base tracking-tight text-zinc-900 dark:text-editorial-ink">
                    {item.title}
                  </p>
                  <p className="editorial-meta mt-1 text-brandPurple dark:text-brandPurpleLight">{item.area}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-zinc-600 dark:text-editorial-muted">{item.snippet}</p>
                </TrackedArticleLink>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
