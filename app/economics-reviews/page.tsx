import type { Metadata } from "next";
import { ArticleListItemRow } from "@/components/ArticleListItemRow";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";
import { SortByControl } from "@/components/SortByControl";
import { getArticlesByArea } from "@/lib/articles";
import { areaTitle } from "@/lib/areas";
import { getViewCountMap } from "@/lib/views";

export const metadata: Metadata = {
  title: areaTitle("economics-reviews"),
};

function sortArticles(
  articles: ReturnType<typeof getArticlesByArea>,
  sort: string
) {
  const base = [...articles];
  if (sort === "oldest") {
    return base.sort((a, b) => (a.date > b.date ? 1 : a.date < b.date ? -1 : 0));
  }
  if (sort === "popularity") {
    const views = getViewCountMap();
    return base.sort((a, b) => (views[b.slug] ?? 0) - (views[a.slug] ?? 0));
  }
  return base.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export default function EconomicsReviewsPage({
  searchParams,
}: {
  searchParams?: { sort?: string };
}) {
  const sort = searchParams?.sort ?? "latest";
  const articles = sortArticles(getArticlesByArea("economics-reviews"), sort);

  return (
    <InternalPageChrome
      breadcrumbs={[{ label: "Home", href: "/" }, { label: areaTitle("economics-reviews") }]}
    >
      <div>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 dark:text-editorial-ink">
              {areaTitle("economics-reviews")}
            </h1>
            <p className="mt-3 max-w-2xl font-sans leading-relaxed text-zinc-600 dark:text-editorial-muted">
              Analysis and reviews focused on macro and microeconomic themes, markets, and policy tradeoffs.
            </p>
          </div>
          <SortByControl current={sort} />
        </div>

        <div className="mt-10 space-y-4">
          {articles.length ? (
            articles.map((a) => <ArticleListItemRow key={a.slug} article={a} />)
          ) : (
            <p className="font-sans text-zinc-600 dark:text-editorial-muted">No articles yet.</p>
          )}
        </div>
      </div>
    </InternalPageChrome>
  );
}
