import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { AreaSlug } from "./areas";
import { normalizeArea } from "./areas";
import { getViewCountMap } from "./views";

const CONTENT_DIR = path.join(process.cwd(), "content");

export interface ArticleFrontmatter {
  title: string;
  area: string;
  description?: string;
  tags?: string[];
  date?: string;
  featured?: boolean;
}

export interface ArticleListItem {
  slug: string;
  title: string;
  area: AreaSlug;
  description: string;
  tags: string[];
  date: string;
  featured: boolean;
  content: string;
  hasHero: boolean;
}

export interface Article extends ArticleListItem {
  content: string;
}

function listContentSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => !name.startsWith("."));
}

function parseArticleFile(slug: string): ArticleListItem | null {
  const mdPath = path.join(CONTENT_DIR, slug, "index.md");
  if (!fs.existsSync(mdPath)) return null;
  const raw = fs.readFileSync(mdPath, "utf8");
  const { data, content } = matter(raw) as {
    data: Partial<ArticleFrontmatter>;
    content: string;
  };

  const area = normalizeArea(String(data.area ?? ""));
  if (!area) return null;

  const title = String(data.title ?? slug).trim();
  const description = String(data.description ?? "").trim();
  const tags = Array.isArray(data.tags)
    ? data.tags.map((t) => String(t).trim()).filter(Boolean)
    : [];
  const date = String(data.date ?? "").trim() || "1970-01-01";
  const featured = Boolean(data.featured);

  const heroPath = path.join(CONTENT_DIR, slug, "hero.jpg");
  const hasHero = fs.existsSync(heroPath);

  return {
    slug,
    title,
    area,
    description,
    tags,
    date,
    featured,
    content,
    hasHero,
  };
}

export function getHeroSrc(slug: string, hasHero: boolean): string {
  if (hasHero) return `/api/content/${slug}/hero.jpg`;
  return "/placeholder-hero.svg";
}

export function getAllArticles(): ArticleListItem[] {
  return listContentSlugs()
    .map(parseArticleFile)
    .filter((a): a is ArticleListItem => a !== null)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getArticlesByArea(area: AreaSlug): ArticleListItem[] {
  return getAllArticles().filter((a) => a.area === area);
}

export function getArticleBySlug(slug: string): Article | null {
  const item = parseArticleFile(slug);
  if (!item) return null;
  return { ...item };
}

export function getFeaturedAndRest(): {
  featured: ArticleListItem | null;
  sidebar: ArticleListItem[];
  rest: ArticleListItem[];
} {
  const all = getAllArticles();
  const featured = all[0] ?? null;
  const rest = all.slice(1, 4);
  const viewCounts = getViewCountMap();
  const usedSlugs = new Set([
    ...(featured ? [featured.slug] : []),
    ...rest.map((a) => a.slug),
  ]);

  const byPopularity = [...all]
    .sort((a, b) => {
      const diff = (viewCounts[b.slug] ?? 0) - (viewCounts[a.slug] ?? 0);
      if (diff !== 0) return diff;
      return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
    });

  const sidebar = byPopularity
    .filter((a) => !usedSlugs.has(a.slug))
    .slice(0, 2);

  if (sidebar.length < 2) {
    const fallback = byPopularity
      .filter((a) => !sidebar.some((s) => s.slug === a.slug))
      .slice(0, 2 - sidebar.length);
    sidebar.push(...fallback);
  }

  return { featured, sidebar, rest };
}

export function getViewCountForArticle(slug: string): number {
  const map = getViewCountMap();
  return map[slug] ?? 0;
}

export function getArticlesSortedByPopularity(articles: ArticleListItem[]): ArticleListItem[] {
  const viewCounts = getViewCountMap();
  return [...articles].sort((a, b) => {
    const diff = (viewCounts[b.slug] ?? 0) - (viewCounts[a.slug] ?? 0);
    if (diff !== 0) return diff;
    return a.date < b.date ? 1 : a.date > b.date ? -1 : 0;
  });
}

export function getHomepageSelection(): {
  main: ArticleListItem | null;
  spotlight: ArticleListItem[];
  latestAnalysis: ArticleListItem[];
} {
  const all = getAllArticles();
  if (all.length === 0) return { main: null, spotlight: [], latestAnalysis: [] };

  const selected = all.slice(0, 4);
  const hasEconomics = selected.some((a) => a.area === "economics-reviews");
  const hasFinance = selected.some((a) => a.area === "finance-reviews");

  if (!(hasEconomics && hasFinance)) {
    const missingArea = hasEconomics ? "finance-reviews" : "economics-reviews";
    const fallback = all.find((a, idx) => idx >= 4 && a.area === missingArea);
    if (fallback) selected[selected.length - 1] = fallback;
  }

  const main = selected[0] ?? null;
  const spotlight = selected.slice(1, 3);
  const latestAnalysis = selected.slice(3, 4);
  return { main, spotlight, latestAnalysis };
}

export function resolveMarkdownImageSrc(
  articleSlug: string,
  src: string | undefined
): string | undefined {
  if (!src) return undefined;
  if (/^https?:\/\//i.test(src)) return src;
  if (src.startsWith("/")) return src;

  const normalized = src.replace(/^\.\//, "");
  const safe = normalized.split("/").filter((p) => p && p !== "..").join("/");
  return `/api/content/${articleSlug}/${safe}`;
}
