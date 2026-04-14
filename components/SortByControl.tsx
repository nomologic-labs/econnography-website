"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "popularity", label: "Popularity" },
] as const;

export function SortByControl({ current }: { current: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return (
    <label className="inline-flex items-center gap-2 font-sans text-sm text-zinc-600 dark:text-editorial-muted">
      <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">Sort</span>
      <select
        value={current}
        onChange={(e) => {
          const params = new URLSearchParams(searchParams.toString());
          params.set("sort", e.target.value);
          router.replace(`${pathname}?${params.toString()}`);
        }}
        className="rounded-lg border border-zinc-300/90 bg-white/80 px-3 py-2 text-sm text-zinc-900 outline-none backdrop-blur-sm transition focus:border-brandPurple focus:ring-2 focus:ring-brandPurple/15 dark:border-white/10 dark:bg-white/[0.06] dark:text-editorial-ink dark:focus:border-brandPurpleLight dark:focus:ring-brandPurpleLight/20"
      >
        {OPTIONS.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
