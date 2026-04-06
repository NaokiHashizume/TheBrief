import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { logisticsArticles } from "@/lib/logistics";

export const metadata: Metadata = {
  title: "物流・運輸 — Industry",
  description: "宅配、鉄道、航空、海運、倉庫、2024年問題とその後の対応。",
  alternates: { canonical: "https://thebrief.info/industry/logistics" },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function Page() {
  const sortedArticles = [...logisticsArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "物流・運輸", href: "/industry/logistics" }]} />
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <span>物流・運輸</span>
      </div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#6366f115", color: "#6366f1" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">物流・運輸</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">Logistics & Transport</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">宅配、鉄道、航空、海運、倉庫、2024年問題とその後の対応。</p>
      </div>
      <div className="h-px bg-brief-border mb-8" />
      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/industry/logistics/${article.slug}`} className="group block p-5 rounded-xl border border-brief-border hover:border-[#6366f1]/30 bg-brief-card transition-all">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">{article.date}</time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>
            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#6366f1] transition-colors">{article.title}</h2>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (<span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-[#6366f1]/8 text-[#6366f1]/70 font-medium">{tag}</span>))}
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-8 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic"><T ja="記事は順次追加されます。" en="More articles coming soon." /></p>
      </div>
    </div>
  );
}
