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
import { LiveViewCount } from "@/components/LiveViewCount";

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
            className="editorial-meta inline-block text-brandPurple transition-colors hover:text-brandPurple dark:text-brandPurpleLight dark:hover:text-brandPurpleLight"
          >
            {areaTitle(article.area)}
          </Link>
          <h1 className="mt-4 font-serif text-4xl font-semibold tracking-tight leading-tight text-zinc-950 dark:text-editorial-ink sm:text-5xl">
            {article.title}
          </h1>
          {article.description ? (
            <p className="mt-5 font-sans text-xl leading-relaxed text-zinc-600 dark:text-editorial-muted">
              {article.description}
            </p>
          ) : null}

          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
            {article.date ? (
              <time dateTime={article.date} className="editorial-meta text-zinc-600 dark:text-editorial-muted">
                {article.date}
              </time>
            ) : null}
            <span className="editorial-meta text-zinc-600 dark:text-editorial-muted">
              {formatReadingTime(article.content)}
            </span>
            <LiveViewCount slug={article.slug} />
          </div>

          <div className="mt-6">
            <HashtagBadgeGroup tags={article.tags} />
          </div>
        </header>

        <div className="relative mx-auto mt-10 aspect-video max-w-5xl overflow-hidden rounded-xl bg-zinc-100 dark:bg-editorial-deep">
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
