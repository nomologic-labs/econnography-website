import fs from "fs";
import path from "path";

const DATA_DIR = path.join(process.cwd(), "data");
const VIEWS_FILE = path.join(DATA_DIR, "article-views.json");

type ViewMap = Record<string, number>;

function ensureStore() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(VIEWS_FILE)) fs.writeFileSync(VIEWS_FILE, "{}", "utf8");
}

function readViews(): ViewMap {
  ensureStore();
  try {
    const raw = fs.readFileSync(VIEWS_FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object") return {};
    const out: ViewMap = {};
    for (const [slug, count] of Object.entries(parsed as Record<string, unknown>)) {
      out[slug] = typeof count === "number" && Number.isFinite(count) ? Math.max(0, Math.floor(count)) : 0;
    }
    return out;
  } catch {
    return {};
  }
}

function writeViews(map: ViewMap) {
  ensureStore();
  fs.writeFileSync(VIEWS_FILE, JSON.stringify(map, null, 2), "utf8");
}

export function getViewCount(slug: string): number {
  const map = readViews();
  return map[slug] ?? 0;
}

export function getViewCountMap(): ViewMap {
  return readViews();
}

export function incrementViewCount(slug: string): number {
  const map = readViews();
  map[slug] = (map[slug] ?? 0) + 1;
  writeViews(map);
  return map[slug];
}
