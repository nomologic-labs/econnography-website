import Image from "next/image";
import Link from "next/link";
import type { ArticleListItem } from "@/lib/articles";
import { getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { HashtagBadgeGroup } from "./HashtagBadge";

export function FeatureArticle({ article }: { article: ArticleListItem }) {
  const hero = getHeroSrc(article.slug, article.hasHero);

  return (
    <article className="space-y-5">
      <Link href={`/articles/${article.slug}`} className="block overflow-hidden rounded-lg">
        <div className="relative aspect-[16/9] w-full bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={hero}
            alt={article.title}
            fill
            className="object-cover transition duration-500 hover:scale-[1.02]"
            sizes="(min-width: 1024px) 65vw, 100vw"
            priority
            unoptimized={hero.startsWith("/api/")}
          />
        </div>
      </Link>

      <div className="space-y-3">
        <Link
          href={areaHref(article.area)}
          className="inline-block font-sans text-xs font-semibold uppercase tracking-wide text-brandPurple hover:underline dark:text-brandPurple/90"
        >
          {areaTitle(article.area)}
        </Link>

        <h2 className="font-serif text-3xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-4xl">
          <Link href={`/articles/${article.slug}`} className="hover:text-brandPurple dark:hover:text-brandPurple/90">
            {article.title}
          </Link>
        </h2>

        {article.description ? (
          <p className="font-sans text-lg text-zinc-700 dark:text-zinc-300">{article.description}</p>
        ) : null}

        <HashtagBadgeGroup tags={article.tags} />
      </div>
    </article>
  );
}
