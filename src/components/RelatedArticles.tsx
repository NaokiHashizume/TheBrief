import Link from "next/link";

interface Article {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  tags: string[];
  summary: string;
}

/**
 * Shows up to 3 related articles based on tag overlap.
 * Falls back to the most recent articles in the same category.
 */
export function RelatedArticles({
  currentSlug,
  articles,
  basePath,
  accentColor = "#8b5cf6",
}: {
  currentSlug: string;
  articles: Article[];
  basePath: string;
  accentColor?: string;
}) {
  const current = articles.find((a) => a.slug === currentSlug);
  if (!current) return null;

  const currentTags = new Set(current.tags);
  const others = articles.filter((a) => a.slug !== currentSlug);

  // Score by tag overlap, then by date
  const scored = others
    .map((a) => ({
      article: a,
      score: a.tags.filter((t) => currentTags.has(t)).length,
    }))
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return new Date(b.article.date).getTime() - new Date(a.article.date).getTime();
    })
    .slice(0, 3);

  if (scored.length === 0) return null;

  return (
    <div className="mt-12 pt-8 border-t border-brief-border">
      <h3 className="text-[10px] tracking-[2px] uppercase text-foreground/45 mb-4">
        関連記事 / Related
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {scored.map(({ article: a }) => (
          <Link
            key={a.slug}
            href={`${basePath}/${a.slug}`}
            className="group p-4 rounded-xl border border-brief-border hover:border-opacity-60 transition-colors"
            style={{ ["--accent" as string]: accentColor }}
          >
            <div className="text-[10px] text-foreground/40 mb-1.5">
              {a.date} · {a.readTime}
            </div>
            <div
              className="text-sm font-medium leading-snug line-clamp-2 transition-colors"
              style={{ color: "inherit" }}
              onMouseEnter={() => {}}
            >
              <span className="group-hover:text-[var(--accent)] transition-colors">
                {a.title}
              </span>
            </div>
            <div className="flex flex-wrap gap-1 mt-2">
              {a.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[8px] px-1.5 py-0.5 rounded-full font-medium"
                  style={{
                    backgroundColor: `${accentColor}10`,
                    color: `${accentColor}aa`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
