import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/lib/articles";
import { getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { HashtagBadgeGroup } from "./HashtagBadge";

export function SidebarArticleCard({ article }: { article: ArticleListItem }) {
  const hero = getHeroSrc(article.slug, article.hasHero);

  return (
    <article className="flex gap-4 border-b border-zinc-200 pb-8 dark:border-zinc-800">
      <div className="min-w-0 flex-1 space-y-2">
        <Link
          href={areaHref(article.area)}
          className="inline-block font-sans text-xs font-semibold uppercase tracking-wide text-brandPurple hover:underline dark:text-brandPurple/90"
        >
          {areaTitle(article.area)}
        </Link>

        <h3 className="font-serif text-lg font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
          <Link href={`/articles/${article.slug}`} className="hover:text-brandPurple dark:hover:text-brandPurple/90">
            {article.title}
          </Link>
        </h3>

        {article.description ? (
          <p className="font-sans text-sm text-zinc-600 dark:text-zinc-400">{article.description}</p>
        ) : null}

        <HashtagBadgeGroup tags={article.tags} />
      </div>

      <Link
        href={`/articles/${article.slug}`}
        className="relative h-28 w-32 shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-900"
      >
        <span className="sr-only">Open article</span>
        <Image
          src={hero}
          alt={article.title}
          fill
          className="object-cover"
          sizes="128px"
          unoptimized={hero.startsWith("/api/")}
        />
      </Link>
    </article>
  );
}
