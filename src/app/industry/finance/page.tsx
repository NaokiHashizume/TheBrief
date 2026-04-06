import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { financeArticles } from "@/lib/finance";
import { IndustryFinancialNav } from "@/components/IndustryFinancialNav";
import { CompetitorCards } from "@/components/CompetitorCards";
import { financeCompanies } from "@/lib/financeCompanies";

export const metadata: Metadata = {
  title: "金融機関 — Industry",
  description: "メガバンク、証券、保険、デジタル決済、暗号資産、新NISA関連の最新動向。",
  alternates: { canonical: "https://thebrief.info/industry/finance" },
};

function parseReadTime(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export default function Page() {
  const sortedArticles = [...financeArticles].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return parseReadTime(a.readTime) - parseReadTime(b.readTime);
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd items={[{ name: "Home", href: "/" }, { name: "Industry", href: "/industry" }, { name: "金融機関", href: "/industry/finance" }]} />
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/industry" className="hover:text-foreground transition-colors">Industry</Link>
        <span>/</span>
        <span>金融機関</span>
      </div>
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: "#f59e0b15", color: "#f59e0b" }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>
          </div>
          <div>
            <h1 className="font-serif text-2xl md:text-3xl font-bold">金融機関</h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/50">Financial Institutions</span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed">メガバンク、証券、保険、デジタル決済、暗号資産、新NISA関連の最新動向。</p>
      </div>
      <div className="h-px bg-brief-border mb-8" />
      <IndustryFinancialNav slug="finance" />

      <CompetitorCards companies={financeCompanies} title="日本の主要金融機関" />

      <div className="h-px bg-brief-border my-8" />

      <div className="space-y-4">
        {sortedArticles.map((article) => (
          <Link key={article.slug} href={`/industry/finance/${article.slug}`} className="group block p-5 rounded-xl border border-brief-border hover:border-[#f59e0b]/30 bg-brief-card transition-all">
            <div className="flex items-center gap-2 mb-2">
              <time className="text-[10px] tabular-nums text-foreground/45">{article.date}</time>
              <span className="text-[10px] text-foreground/45">·</span>
              <span className="text-[10px] text-foreground/45">{article.readTime}</span>
            </div>
            <h2 className="font-serif text-lg font-bold leading-snug group-hover:text-[#f59e0b] transition-colors">{article.title}</h2>
            <p className="mt-2 text-sm text-foreground/55 leading-relaxed line-clamp-2">{article.summary}</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {article.tags.map((tag) => (<span key={tag} className="text-[9px] px-2 py-0.5 rounded-full bg-[#f59e0b]/8 text-[#f59e0b]/70 font-medium">{tag}</span>))}
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
