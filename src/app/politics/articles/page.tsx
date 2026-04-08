import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { politicsArticles } from "@/lib/politicsArticles";

export const metadata: Metadata = {
  title: "政治記事 — Politics Articles",
  description:
    "日本の政治に関する解説記事。政策課題、制度解説、政治動向の分析を掲載。",
  alternates: { canonical: "https://thebrief.info/politics/articles" },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function PoliticsArticlesPage() {
  const sortedArticles = [...politicsArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "Articles", href: "/politics/articles" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">
          Politics
        </Link>
        <span>/</span>
        <span>Articles</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(239,68,68,0.06)", color: "#ef4444" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">
              <T ja="政治記事" en="Politics Articles" />
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Politics Articles
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
          <T
            ja="日本の政治に関する解説記事。政策課題、制度解説、政治動向の分析を掲載しています。"
            en="In-depth analysis articles on Japanese politics, policy challenges, and political trends."
          />
        </p>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      {/* Articles */}
      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/politics/articles/${article.slug}`}
            className="group block p-5 rounded-xl border border-brief-border hover:border-brief-red/30 bg-brief-card transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">
                {article.date}
              </time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>

            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-brief-red transition-colors">
              {article.title}
            </h2>

            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full bg-brief-red/8 text-brief-red/70 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {/* More coming */}
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic">
          <T ja="記事は順次追加されます。" en="More articles coming soon." />
        </p>
      </div>
    </div>
  );
}
