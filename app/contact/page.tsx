import type { Metadata } from "next";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <InternalPageChrome breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}>
      <article className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold text-zinc-950 dark:text-zinc-50">Contact</h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          For editorial inquiries, corrections, or partnerships, please reach out through your preferred channel. This
          page is a lightweight placeholder you can wire to a form provider or mailbox.
        </p>
        <div className="mt-8 rounded-lg border border-zinc-200 bg-zinc-50 p-6 font-sans text-sm text-zinc-700 dark:border-zinc-800 dark:bg-zinc-900/40 dark:text-zinc-300">
          <p>
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Editorial:</span> editorial@econography.test
          </p>
          <p className="mt-2">
            <span className="font-semibold text-zinc-900 dark:text-zinc-100">Support:</span> support@econography.test
          </p>
        </div>
      </article>
    </InternalPageChrome>
  );
}
