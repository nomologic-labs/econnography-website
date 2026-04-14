"use client";

export function HashtagBadge({ tag }: { tag: string }) {
  const label = `Coming Soon: Filter by #${tag}`;

  return (
    <span className="group relative inline-flex cursor-not-allowed">
      <span className="inline-flex items-center rounded-full border border-brandPurple/35 bg-brandPurple/5 px-3 py-1 text-xs font-medium text-brandPurple dark:border-brandPurple/45 dark:bg-brandPurple/15 dark:text-brandPurple/90">
        #{tag}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 w-max max-w-[240px] -translate-x-1/2 rounded-md border border-zinc-200 bg-white px-3 py-2 text-center text-xs font-medium text-zinc-800 opacity-0 shadow-lg transition duration-150 group-hover:opacity-100 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
      >
        {label}
      </span>
    </span>
  );
}

export function HashtagBadgeGroup({ tags }: { tags: string[] }) {
  if (!tags.length) return null;
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((t) => (
        <HashtagBadge key={t} tag={t} />
      ))}
    </div>
  );
}
