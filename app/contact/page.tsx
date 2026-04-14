import type { Metadata } from "next";
import { InternalPageChrome } from "@/components/BreadcrumbsTrail";
import { EDITORIAL_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactPage() {
  return (
    <InternalPageChrome breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]}>
      <article className="mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl font-semibold tracking-tight text-zinc-950 dark:text-editorial-ink">
          Contact
        </h1>
        <p className="mt-6 font-sans text-lg leading-relaxed text-zinc-600 dark:text-editorial-muted">
          For editorial inquiries, corrections, or partnerships, please reach out through your preferred channel. This
          page is a lightweight placeholder you can wire to a form provider or mailbox.
        </p>
        <div className="mt-8 rounded-xl border border-zinc-200/90 bg-white/80 p-6 font-sans text-sm text-zinc-700 shadow-sm backdrop-blur-sm dark:border-white/[0.08] dark:bg-white/[0.04] dark:text-editorial-muted">
          <p>
            <span className="font-semibold text-zinc-900 dark:text-editorial-ink">Editorial & Support:</span>{" "}
            <a
              href={`mailto:${EDITORIAL_EMAIL}`}
              className="text-brandPurple underline-offset-2 hover:underline dark:text-brandPurpleLight"
            >
              {EDITORIAL_EMAIL}
            </a>
          </p>
        </div>
      </article>
    </InternalPageChrome>
  );
}
