import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/lib/articles";
import { getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { HashtagBadgeGroup } from "./HashtagBadge";
import { TrackedArticleLink } from "./TrackedArticleLink";

export function FeatureArticle({ article }: { article: ArticleListItem }) {
  const hero = getHeroSrc(article.slug, article.hasHero);

  return (
    <section
      aria-label="Featured analysis"
      className="w-full min-w-0 self-start"
    >
      <div
        className="mb-5 h-[2px] w-full bg-brandPurple dark:bg-brandPurpleLight"
        aria-hidden
      />

      <article className="group/card overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800/60 dark:bg-[#181B22] dark:shadow-none">
        <TrackedArticleLink
          slug={article.slug}
          href={`/articles/${article.slug}`}
          className="block w-full max-w-full overflow-hidden"
        >
          <div className="relative aspect-video w-full max-w-full overflow-hidden bg-zinc-100 dark:bg-[#0F1115]">
            <Image
              src={hero}
              alt={article.title}
              fill
              className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover/card:scale-[1.02]"
              sizes="(min-width: 1024px) 65vw, 100vw"
              priority
              unoptimized={hero.startsWith("/api/")}
            />
          </div>
        </TrackedArticleLink>

        <div className="space-y-3 px-4 py-4 sm:space-y-4 sm:px-5 sm:py-5 lg:px-6 lg:py-5">
          <div className="max-w-prose">
            <Link
              href={areaHref(article.area)}
              className="inline-block max-w-full border-b border-brandPurple pb-1 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-brandPurple dark:border-brandPurpleLight dark:text-brandPurpleLight"
            >
              {areaTitle(article.area)}
            </Link>
          </div>

          <h2 className="max-w-prose font-serif text-3xl font-semibold leading-tight tracking-tight text-pretty text-zinc-950 dark:text-editorial-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.08]">
            <TrackedArticleLink
              slug={article.slug}
              href={`/articles/${article.slug}`}
              className="block max-w-full transition-colors duration-300 group-hover/card:text-brandPurple dark:group-hover/card:text-brandPurpleLight"
            >
              {article.title}
            </TrackedArticleLink>
          </h2>

          {article.description ? (
            <p className="max-w-prose line-clamp-3 font-sans text-base leading-[1.7] text-zinc-600 dark:text-editorial-muted sm:text-[1.0625rem] sm:leading-[1.72]">
              {article.description}
            </p>
          ) : null}

          <div className="max-w-prose pt-0.5">
            <HashtagBadgeGroup tags={article.tags} />
          </div>

        </div>
      </article>
    </section>
  );
}
