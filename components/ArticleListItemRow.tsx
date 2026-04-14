import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/lib/articles";
import { getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { HashtagBadgeGroup } from "./HashtagBadge";
import { formatReadingTime } from "@/lib/reading-time";

export function ArticleListItemRow({ article }: { article: ArticleListItem }) {
  const hero = getHeroSrc(article.slug, article.hasHero);

  return (
    <article className="grid grid-cols-1 gap-6 border-b border-zinc-200 py-10 sm:grid-cols-12 dark:border-zinc-800">
      <div className="sm:col-span-8">
        <Link
          href={areaHref(article.area)}
          className="inline-block font-sans text-xs font-semibold uppercase tracking-wide text-brandPurple hover:underline dark:text-brandPurple/90"
        >
          {areaTitle(article.area)}
        </Link>
        <h2 className="mt-2 font-serif text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          <Link href={`/articles/${article.slug}`} className="hover:text-brandPurple dark:hover:text-brandPurple/90">
            {article.title}
          </Link>
        </h2>
        {article.description ? (
          <p className="mt-2 font-sans text-zinc-700 dark:text-zinc-300">{article.description}</p>
        ) : null}
        <div className="mt-3 flex flex-wrap items-center gap-3">
          <span className="font-sans text-xs text-zinc-500 dark:text-zinc-500">
            {formatReadingTime(article.content)}
          </span>
        </div>
        <div className="mt-4">
          <HashtagBadgeGroup tags={article.tags} />
        </div>
      </div>
      <Link
        href={`/articles/${article.slug}`}
        className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-zinc-100 sm:col-span-4 dark:bg-zinc-900"
      >
        <Image
          src={hero}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(min-width: 640px) 33vw, 100vw"
          unoptimized={hero.startsWith("/api/")}
        />
      </Link>
    </article>
  );
}
