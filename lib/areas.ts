export const AREAS = ["economics-reviews", "finance-reviews"] as const;

export type AreaSlug = (typeof AREAS)[number];

export function isAreaSlug(value: string): value is AreaSlug {
  return (AREAS as readonly string[]).includes(value);
}

export function areaTitle(slug: AreaSlug): string {
  switch (slug) {
    case "economics-reviews":
      return "Economics Reviews";
    case "finance-reviews":
      return "Finance Reviews";
    default:
      return slug;
  }
}

export function areaHref(slug: AreaSlug): string {
  return `/${slug}`;
}

export function normalizeArea(raw: string): AreaSlug | null {
  const s = raw.trim().toLowerCase().replace(/\s+/g, "-");
  if (isAreaSlug(s)) return s;
  if (s === "economics" || s === "economics-review") return "economics-reviews";
  if (s === "finance" || s === "finance-review") return "finance-reviews";
  return null;
}
