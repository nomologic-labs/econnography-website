import type { Metadata } from "next";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";

export const metadata: Metadata = {
  title: "Editorial standards",
};

export default function EditorialStandardsPage() {
  return (
    <InternalPageChrome
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Editorial standards" }]}
    >
      <article className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold text-zinc-950 dark:text-zinc-50">Editorial standards</h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          This is a placeholder page for Econography&apos;s editorial standards: sourcing, corrections policy, conflicts
          of interest, and independence. Replace this copy with your newsroom guidelines when ready.
        </p>
        <ul className="mt-6 list-disc space-y-2 pl-6 font-sans text-zinc-700 dark:text-zinc-300">
          <li>Accuracy and proportion in headlines and summaries</li>
          <li>Transparent updates and correction notes</li>
          <li>Clear distinction between analysis, reporting, and opinion</li>
        </ul>
      </article>
    </InternalPageChrome>
  );
}
