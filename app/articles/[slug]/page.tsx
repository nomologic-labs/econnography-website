import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleMarkdown } from "@/components/ArticleMarkdown";
import { HashtagBadgeGroup } from "@/components/HashtagBadge";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";
import { getAllArticles, getArticleBySlug, getHeroSrc } from "@/lib/articles";
import { areaHref, areaTitle } from "@/lib/areas";
import { formatReadingTime } from "@/lib/reading-time";
import Link from "next/link";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.description || undefined,
  };
}

export default function ArticlePage({ params }: Props) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const hero = getHeroSrc(article.slug, article.hasHero);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: areaTitle(article.area), href: areaHref(article.area) },
    { label: article.title },
  ];

  return (
    <InternalPageChrome breadcrumbs={breadcrumbs}>
      <article>
        <header className="mx-auto max-w-3xl">
          <Link
            href={areaHref(article.area)}
            className="inline-block font-sans text-xs font-semibold uppercase tracking-wide text-brandPurple transition-colors hover:text-brandPurple hover:underline dark:text-brandPurple/90"
          >
            {areaTitle(article.area)}
          </Link>
          <h1 className="mt-3 font-serif text-4xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            {article.title}
          </h1>
          {article.description ? (
            <p className="mt-4 font-sans text-xl text-zinc-700 dark:text-zinc-300">{article.description}</p>
          ) : null}

          <div className="mt-4 flex flex-wrap items-center gap-4 font-sans text-sm text-zinc-500 dark:text-zinc-500">
            {article.date ? <time dateTime={article.date}>{article.date}</time> : null}
            <span>{formatReadingTime(article.content)}</span>
          </div>

          <div className="mt-6">
            <HashtagBadgeGroup tags={article.tags} />
          </div>
        </header>

        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-5xl overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={hero}
            alt={article.title}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 56rem, 100vw"
            priority
            unoptimized={hero.startsWith("/api/")}
          />
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <ArticleMarkdown slug={article.slug} content={article.content} />
        </div>
      </article>
    </InternalPageChrome>
  );
}
