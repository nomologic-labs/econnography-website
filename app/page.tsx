import { FeatureArticle } from "@/components/FeatureArticle";
import { SidebarArticleCard } from "@/components/SidebarArticleCard";
import { ArticleListItemRow } from "@/components/ArticleListItemRow";
import { HomeRefreshOnReturn } from "@/components/HomeRefreshOnReturn";
import { HomeShareSection } from "@/components/HomeShareSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { getFeaturedAndRest } from "@/lib/articles";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const { featured, sidebar, rest } = getFeaturedAndRest();

  return (
    <div className="space-y-14">
      <HomeRefreshOnReturn />
      <div className="grid grid-cols-12 items-start gap-8 md:gap-10 lg:grid lg:gap-0">
        <div className="col-span-12 space-y-12 sm:space-y-14 lg:col-span-8 lg:pr-12">
          {featured ? (
            <div className="space-y-0">
              <SectionEyebrow>Featured analysis</SectionEyebrow>
              <FeatureArticle article={featured} />
            </div>
          ) : null}

          <HomeShareSection />

          {rest.length ? (
            <section aria-labelledby="latest-analysis-heading" className="space-y-6">
              <div>
                <SectionEyebrow>Continuing coverage</SectionEyebrow>
                <h2
                  id="latest-analysis-heading"
                  className="font-serif text-2xl font-semibold tracking-tight text-zinc-950 dark:text-editorial-ink"
                >
                  Latest analysis
                </h2>
              </div>
              <div className="space-y-4">
                {rest.map((a) => (
                  <ArticleListItemRow key={a.slug} article={a} />
                ))}
              </div>
            </section>
          ) : null}
        </div>

        <aside className="col-span-12 space-y-8 border-slate-200/60 dark:border-slate-800/60 max-lg:mt-4 max-lg:border-t max-lg:pt-10 lg:col-span-4 lg:mt-0 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-12 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-serif text-xl font-semibold tracking-tight text-zinc-950 dark:text-editorial-ink">
            Spotlight
          </h2>
          <div className="space-y-4">
            {sidebar.map((a) => (
              <SidebarArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
