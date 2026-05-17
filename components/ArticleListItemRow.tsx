import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/lib/articles";
import { getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { ArticleBannerDescription } from "./ArticleBannerDescription";
import { HashtagBadgeGroup } from "./HashtagBadge";
import { formatReadingTime } from "@/lib/reading-time";
import { TrackedArticleLink } from "./TrackedArticleLink";

export function ArticleListItemRow({ article }: { article: ArticleListItem }) {
  const hero = getHeroSrc(article.slug, article.hasHero);

  return (
    <article className="group/row grid grid-cols-1 gap-8 rounded-xl border border-slate-200/80 bg-white p-6 shadow-sm sm:grid-cols-12 sm:gap-10 sm:p-7 dark:border-slate-800/60 dark:bg-[#181B22] dark:shadow-none">
      <div className="space-y-3 sm:col-span-7 sm:pr-8 md:pr-10">
        <Link
          href={areaHref(article.area)}
          className="editorial-meta inline-block text-brandPurple hover:text-brandPurple dark:text-brandPurpleLight dark:hover:text-brandPurpleLight"
        >
          {areaTitle(article.area)}
        </Link>
        <h2 className="font-serif text-2xl font-semibold tracking-tight leading-tight text-zinc-950 dark:text-editorial-ink">
          <TrackedArticleLink
            slug={article.slug}
            href={`/articles/${article.slug}`}
            className="transition-colors duration-300 group-hover/row:text-brandPurple dark:group-hover/row:text-brandPurpleLight"
          >
            {article.title}
          </TrackedArticleLink>
        </h2>
        {article.description ? (
          <ArticleBannerDescription
            text={article.description}
            lines={3}
            className="font-sans leading-relaxed text-zinc-600 dark:text-editorial-muted"
          />
        ) : null}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">
            {formatReadingTime(article.content)}
          </span>
        </div>
        <div className="min-w-0 pt-2">
          <HashtagBadgeGroup tags={article.tags} className="w-full min-w-0 sm:flex-nowrap" />
        </div>
      </div>
      <TrackedArticleLink
        slug={article.slug}
        href={`/articles/${article.slug}`}
        className="relative aspect-video w-full overflow-hidden rounded-xl bg-zinc-100 sm:col-span-5 dark:bg-[#0F1115]"
      >
        <Image
          src={hero}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover/row:scale-105"
          sizes="(min-width: 640px) 42vw, 100vw"
          unoptimized={hero.startsWith("/api/")}
        />
      </TrackedArticleLink>
    </article>
  );
}
