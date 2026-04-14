import { NextResponse } from "next/server";
import { getAllArticles } from "@/lib/articles";
import { areaTitle } from "@/lib/areas";

export function GET(request: Request) {
  const url = new URL(request.url);
  const query = (url.searchParams.get("q") ?? "").trim().toLowerCase();
  if (query.length < 2) return NextResponse.json({ results: [] });

  const results = getAllArticles()
    .filter((article) => {
      const haystack = `${article.title} ${article.description} ${article.content}`.toLowerCase();
      return haystack.includes(query);
    })
    .slice(0, 8)
    .map((article) => ({
      slug: article.slug,
      title: article.title,
      area: areaTitle(article.area),
      snippet: article.description || article.content.slice(0, 150),
    }));

  return NextResponse.json({ results });
}
