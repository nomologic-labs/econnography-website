import type { Metadata } from "next";
import { ArticleListItemRow } from "@/components/ArticleListItemRow";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";
import { getArticlesByArea } from "@/lib/articles";
import { areaTitle } from "@/lib/areas";

export const metadata: Metadata = {
  title: areaTitle("finance-reviews"),
};

export default function FinanceReviewsPage() {
  const articles = getArticlesByArea("finance-reviews");

  return (
    <InternalPageChrome breadcrumbs={[{ label: "Home", href: "/" }, { label: areaTitle("finance-reviews") }]}>
      <div>
        <h1 className="font-serif text-4xl font-semibold text-zinc-950 dark:text-zinc-50">
          {areaTitle("finance-reviews")}
        </h1>
        <p className="mt-3 max-w-2xl font-sans text-zinc-600 dark:text-zinc-400">
          Corporate finance, capital markets, and institutional dynamics—explained with an editorial lens.
        </p>
        <div className="mt-10">
          {articles.length ? (
            articles.map((a) => <ArticleListItemRow key={a.slug} article={a} />)
          ) : (
            <p className="font-sans text-zinc-600 dark:text-zinc-400">No articles yet.</p>
          )}
        </div>
      </div>
    </InternalPageChrome>
  );
}
