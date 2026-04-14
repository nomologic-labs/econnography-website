import type { Metadata } from "next";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";

export const metadata: Metadata = {
  title: "About Us",
};

export default function AboutPage() {
  return (
    <InternalPageChrome breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}>
      <article className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 dark:text-editorial-ink">
          About Econography
        </h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-zinc-600 dark:text-editorial-muted">
          Econography publishes careful, editorial-style analysis across economics and finance. Our reporting is built
          around clarity, evidence, and a calm, premium reading experience—on any device, in light or dark mode.
        </p>
        <p className="mt-4 font-sans leading-relaxed text-zinc-600 dark:text-editorial-muted">
          Articles are authored as Markdown in versioned content folders, so updates stay structured, reviewable, and
          easy to extend.
        </p>
      </article>
    </InternalPageChrome>
  );
}
