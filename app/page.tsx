import { FeatureArticle } from "@/components/FeatureArticle";
import { SidebarArticleCard } from "@/components/SidebarArticleCard";
import { ArticleListItemRow } from "@/components/ArticleListItemRow";
import { getFeaturedAndRest } from "@/lib/articles";

export default function HomePage() {
  const { featured, sidebar, rest } = getFeaturedAndRest();

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-12 gap-10 lg:gap-12">
        <div className="col-span-12 space-y-12 lg:col-span-8">
          {featured ? <FeatureArticle article={featured} /> : null}

          {rest.length ? (
            <section aria-label="More analysis" className="space-y-2">
              <h2 className="font-serif text-2xl text-zinc-950 dark:text-zinc-50">Latest analysis</h2>
              <div>
                {rest.map((a) => (
                  <ArticleListItemRow key={a.slug} article={a} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="col-span-12 space-y-8 lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-xl text-zinc-950 dark:text-zinc-50">Spotlight</h2>
          <div className="space-y-8">
            {sidebar.map((a) => (
              <SidebarArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
