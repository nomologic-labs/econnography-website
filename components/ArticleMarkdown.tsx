import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";
import { resolveMarkdownImageSrc } from "@/lib/articles";

export function ArticleMarkdown({
  slug,
  content,
}: {
  slug: string;
  content: string;
}) {
  const components: Components = {
    img: ({ src, alt }) => {
      const resolved = resolveMarkdownImageSrc(slug, src ?? undefined);
      if (!resolved) return null;
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={resolved}
          alt={alt ?? ""}
          className="my-10 w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
          loading="lazy"
        />
      );
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
      className="prose prose-zinc max-w-none font-sans dark:prose-invert prose-headings:font-serif prose-a:text-brandPurple prose-blockquote:border-brandPurple/40"
    >
      {content}
    </ReactMarkdown>
  );
}
