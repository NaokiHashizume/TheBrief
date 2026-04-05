import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { tradingArticles } from "@/lib/trading";

export const metadata: Metadata = {
  title: "商社・卸売 — Industry",
  description:
    "総合商社、専門商社、卸売業。資源・食料・素材のグローバル取引から小売戦略まで、商社・卸売業界の最新動向と解説記事。",
  alternates: { canonical: "https://thebrief.info/industry/trading" },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function TradingPage() {
  const sortedArticles = [...tradingArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "商社・卸売", href: "/industry/trading" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">
          Industry
        </Link>
        <span>/</span>
        <span>商社・卸売</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "#78716c15", color: "#78716c" }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">商社・卸売</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">
              Trading & Wholesale
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
          総合商社、専門商社、卸売業。資源・食料・素材のグローバル取引から小売戦略まで、商社・卸売業界の最新動向と解説。
        </p>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      {/* Articles */}
      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link
            key={article.slug}
            href={`/industry/trading/${article.slug}`}
            className="group block p-5 rounded-xl border border-brief-border hover:border-[#78716c]/30 bg-brief-card transition-all"
          >
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">
                {article.date}
              </time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>

            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#78716c] transition-colors">
              {article.title}
            </h2>

            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">
              {article.summary}
            </p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full bg-[#78716c]/8 text-[#78716c]/70 font-medium"
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
          記事は順次追加されます。
        </p>
      </div>
    </div>
  );
}
