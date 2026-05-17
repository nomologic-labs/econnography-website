import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/lib/articles";
import { getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { ArticleBannerDescription } from "./ArticleBannerDescription";
import { ArticleBannerTitle } from "./ArticleBannerTitle";
import { HashtagBadgeGroup } from "./HashtagBadge";

export function SidebarArticleCard({ article }: { article: ArticleListItem }) {
  const hero = getHeroSrc(article.slug, article.hasHero);

  return (
    <article className="flex gap-4 rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm dark:border-slate-800/60 dark:bg-[#181B22] dark:shadow-none">
      <div className="min-w-0 flex-1 space-y-2">
        <Link
          href={areaHref(article.area)}
          className="inline-block font-sans text-xs font-semibold uppercase tracking-wide text-brandPurple hover:underline dark:text-brandPurple/90"
        >
          {areaTitle(article.area)}
        </Link>

        <ArticleBannerTitle
          title={article.title}
          href={`/articles/${article.slug}`}
          lines={2}
        />

        {article.description ? (
          <ArticleBannerDescription
            text={article.description}
            lines={2}
            className="font-sans text-sm text-zinc-600 dark:text-zinc-400"
          />
        ) : null}

        <HashtagBadgeGroup tags={article.tags} className="w-full min-w-0" />
      </div>

      <Link
        href={`/articles/${article.slug}`}
        className="relative h-28 w-32 shrink-0 overflow-hidden rounded-md bg-zinc-100 dark:bg-[#0F1115]"
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
