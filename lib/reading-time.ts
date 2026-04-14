const WORDS_PER_MINUTE = 225;

export function getReadingMinutes(body: string): number {
  const words = body
    .trim()
    .split(/\s+/)
    .filter((w) => w.length > 0).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}

export function formatReadingTime(body: string): string {
  return `${getReadingMinutes(body)} min read`;
}
