import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { AreaSlug } from "./areas";
import { normalizeArea } from "./areas";

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
  const featured =
    all.find((a) => a.featured) ?? all[0] ?? null;
  const withoutFeatured = featured
    ? all.filter((a) => a.slug !== featured.slug)
    : all;
  const sidebar = withoutFeatured.slice(0, 2);
  const rest = withoutFeatured.slice(2);
  return { featured, sidebar, rest };
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
