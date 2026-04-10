"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";
import { aiArticles } from "@/lib/ai";
import { ictArticles } from "@/lib/ict";
import { automotiveArticles } from "@/lib/automotiveArticles";
import { financeArticles } from "@/lib/finance";
import { energyArticles } from "@/lib/energy";
import { materialsArticles } from "@/lib/materials";
import { entertainmentArticles } from "@/lib/entertainment";
import { foodArticles } from "@/lib/food";
import { constructionArticles } from "@/lib/construction";
import { dailyArticles } from "@/lib/daily";
import { diningArticles } from "@/lib/dining";
import { retailArticles } from "@/lib/retail";
import { specialtyArticles } from "@/lib/specialty";
import { logisticsArticles } from "@/lib/logistics";
import { servicesArticles } from "@/lib/services";
import { pharmaArticles } from "@/lib/pharma";
import { otherArticles } from "@/lib/other";
import { economyArticles } from "@/lib/economyArticles";
import { politicsArticles } from "@/lib/politicsArticles";
import { tradingArticles } from "@/lib/trading";

type Source = {
  list: { slug: string; title: string; titleEn?: string; date: string; readTime: string; summary: string; tags?: string[] }[];
  labelJa: string;
  labelEn: string;
  color: string;
  basePath: string;
};

const sources: Source[] = [
  { list: aiArticles, labelJa: "AI", labelEn: "AI", color: "#8b5cf6", basePath: "/industry/ai" },
  { list: ictArticles, labelJa: "情報通信", labelEn: "ICT", color: "#3b82f6", basePath: "/industry/ict" },
  { list: automotiveArticles, labelJa: "自動車", labelEn: "Automotive", color: "#ef4444", basePath: "/industry/automotive" },
  { list: financeArticles, labelJa: "金融", labelEn: "Finance", color: "#f59e0b", basePath: "/industry/finance" },
  { list: energyArticles, labelJa: "エネルギー", labelEn: "Energy", color: "#f97316", basePath: "/industry/energy" },
  { list: materialsArticles, labelJa: "素材", labelEn: "Materials", color: "#0ea5e9", basePath: "/industry/materials" },
  { list: entertainmentArticles, labelJa: "エンタメ", labelEn: "Entertainment", color: "#d946ef", basePath: "/industry/entertainment" },
  { list: foodArticles, labelJa: "食品", labelEn: "Food", color: "#84cc16", basePath: "/industry/food" },
  { list: constructionArticles, labelJa: "建設", labelEn: "Construction", color: "#a16207", basePath: "/industry/construction" },
  { list: dailyArticles, labelJa: "日用品", labelEn: "Daily", color: "#0ea5e9", basePath: "/industry/daily" },
  { list: diningArticles, labelJa: "外食", labelEn: "Dining", color: "#dc2626", basePath: "/industry/dining" },
  { list: retailArticles, labelJa: "小売", labelEn: "Retail", color: "#10b981", basePath: "/industry/retail" },
  { list: specialtyArticles, labelJa: "専門", labelEn: "Specialty", color: "#7c3aed", basePath: "/industry/specialty" },
  { list: logisticsArticles, labelJa: "物流", labelEn: "Logistics", color: "#6366f1", basePath: "/industry/logistics" },
  { list: servicesArticles, labelJa: "サービス", labelEn: "Services", color: "#0891b2", basePath: "/industry/services" },
  { list: pharmaArticles, labelJa: "医薬品", labelEn: "Pharma", color: "#059669", basePath: "/industry/pharma" },
  { list: otherArticles, labelJa: "その他", labelEn: "Other", color: "#94a3b8", basePath: "/industry/other" },
  { list: tradingArticles, labelJa: "商社", labelEn: "Trading", color: "#0d9488", basePath: "/industry/trading" },
  { list: economyArticles, labelJa: "経済", labelEn: "Economy", color: "#b9770e", basePath: "/economy" },
  { list: politicsArticles, labelJa: "政治", labelEn: "Politics", color: "#e53e3e", basePath: "/politics/articles" },
];

type Item = {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  href: string;
  labelJa: string;
  labelEn: string;
  color: string;
};

function buildAll(): Item[] {
  const all: Item[] = [];
  for (const s of sources) {
    for (const a of s.list) {
      all.push({
        slug: a.slug,
        title: a.title,
        date: a.date,
        readTime: a.readTime,
        summary: a.summary,
        tags: a.tags ?? [],
        href: `${s.basePath}/${a.slug}`,
        labelJa: s.labelJa,
        labelEn: s.labelEn,
        color: s.color,
      });
    }
  }
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

function parseReadMin(rt: string): number {
  const m = rt.match(/(\d+)/);
  return m ? parseInt(m[1], 10) : 0;
}

export function BroadsheetHero() {
  const { locale } = useLanguage();
  const all = buildAll();

  // Anchor: most recent long-read (>= 10 min). Fall back to most recent.
  const anchor = all.find((a) => parseReadMin(a.readTime) >= 10) ?? all[0];
  const restAfterAnchor = all.filter((a) => a.href !== anchor.href);
  const subA = restAfterAnchor[0];
  const subB = restAfterAnchor[1];

  // Editor's Desk: 2 curated long reads from different categories than anchor
  const usedSlugs = new Set([anchor.href, subA?.href, subB?.href]);
  const editorDesk = restAfterAnchor
    .filter((a) => !usedSlugs.has(a.href) && parseReadMin(a.readTime) >= 8)
    .slice(0, 2);
  editorDesk.forEach((e) => usedSlugs.add(e.href));

  // Live Feed: next 8 by date
  const liveFeed = restAfterAnchor.filter((a) => !usedSlugs.has(a.href)).slice(0, 8);

  return (
    <section className="max-w-6xl mx-auto px-4 pt-10 pb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10">
        {/* LEFT RAIL: Editor's Desk — mobile: order-2 (after center) */}
        <aside className="col-span-1 lg:col-span-3 flex flex-col order-2 lg:order-1 border-t lg:border-t-0 lg:border-b-0 lg:border-r border-brief-rule pt-8 lg:pt-0 lg:pb-0 lg:pr-8">
          <h3 className="text-xs font-bold text-brief-red tracking-[3px] uppercase mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brief-red animate-pulse" />
            {locale === "ja" ? "Editor's Desk" : "Editor's Desk"}
          </h3>

          <div className="flex flex-col gap-8">
            {editorDesk.map((item, i) => (
              <div key={item.href}>
                <Link href={item.href} className="group block cursor-pointer">
                  <div className="text-[10px] font-bold tracking-wider text-foreground/55 mb-2 uppercase">
                    {locale === "ja" ? item.labelJa : item.labelEn}
                  </div>
                  <h4 className="font-serif text-[17px] leading-snug font-bold mb-3">
                    <span className="hover-underline-magic">{item.title}</span>
                  </h4>
                  <div className="flex justify-between items-center mt-3 text-[11px] text-foreground/50 font-medium border-t border-brief-rule pt-2">
                    <span className="tabular-nums">{item.readTime}</span>
                    <time className="tabular-nums">{item.date}</time>
                  </div>
                </Link>
                {i < editorDesk.length - 1 && <div className="w-full h-px bg-brief-rule mt-8" />}
              </div>
            ))}

            {/* Data point card */}
            <div className="relative overflow-hidden p-5 rounded-xl border border-brief-border bg-brief-card mt-2">
              <div className="absolute top-0 left-0 w-1 h-full bg-brief-red" />
              <span className="text-[10px] font-bold uppercase tracking-[2.5px] text-foreground/55 block mb-1">
                {locale === "ja" ? "Data Point" : "Data Point"}
              </span>
              <div className="font-serif text-[28px] font-black text-foreground mb-1 leading-none">
                87,917
                <span className="text-base font-bold ml-1">円/KL</span>
              </div>
              <p className="text-[11px] font-medium leading-relaxed text-foreground/70 pt-2 border-t border-brief-rule mt-2">
                {locale === "ja"
                  ? "国産ナフサ価格（5月前半入着分）。中東危機を受け急騰。"
                  : "Domestic naphtha price (May arrival). Surging on Middle East crisis."}
              </p>
            </div>
          </div>
        </aside>

        {/* CENTER STAGE: Anchor lead — mobile: order-1 (appears first) */}
        <section className="col-span-1 lg:col-span-6 order-1 lg:order-2">
          <Link href={anchor.href} className="group cursor-pointer block pb-10 border-b border-foreground/20">
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-brief-red text-white text-[10px] font-bold px-2 py-0.5 tracking-[1.5px]">
                {locale === "ja" ? "深掘り" : "DEEP DIVE"}
              </span>
              <span
                className="text-[11px] font-bold tracking-[2.5px] uppercase"
                style={{ color: anchor.color }}
              >
                {locale === "ja" ? anchor.labelJa : anchor.labelEn}
              </span>
              <span className="text-foreground/20">·</span>
              <time className="text-[11px] tabular-nums text-foreground/45 font-medium">{anchor.date}</time>
            </div>

            <h2 className="font-serif text-[22px] sm:text-[30px] lg:text-[44px] font-bold leading-[1.15] tracking-tight mb-6">
              <span className="hover-underline-magic">{anchor.title}</span>
            </h2>

            <div className="flex flex-col sm:flex-row gap-6 items-start mt-4">
              <div className="sm:w-1/4 font-sans text-[11px] border-l-2 border-brief-red pl-3">
                <p className="font-bold mb-1">The Brief</p>
                <p className="text-foreground/55 mb-3">{locale === "ja" ? "編集部" : "Editorial"}</p>
                <div className="inline-flex items-center gap-1.5 text-foreground/75 bg-foreground/[0.05] px-2 py-1 rounded-sm">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span className="font-mono text-[11px] tabular-nums">{anchor.readTime}</span>
                </div>
              </div>
              <div className="sm:w-3/4">
                <p className="text-[15px] leading-[1.95] text-foreground/80 font-medium mb-4 line-clamp-5">
                  {anchor.summary.replace(/\*\*(.*?)\*\*/g, "$1")}
                </p>
                <p className="text-[13px] text-brief-red font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                  {locale === "ja" ? "続きを読む" : "Continue reading"}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </p>
              </div>
            </div>
          </Link>

          {/* Sub-features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
            {[subA, subB].filter(Boolean).map((item) => (
              <Link key={item!.href} href={item!.href} className="group cursor-pointer block">
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[2.5px]"
                    style={{ color: item!.color }}
                  >
                    {locale === "ja" ? item!.labelJa : item!.labelEn}
                  </span>
                  <span className="text-foreground/20">·</span>
                  <time className="text-[10px] tabular-nums text-foreground/45">{item!.date}</time>
                </div>
                <h3 className="font-serif font-bold text-[19px] leading-snug mb-2">
                  <span className="hover-underline-magic">{item!.title}</span>
                </h3>
                <p className="text-[12px] text-foreground/65 leading-relaxed line-clamp-2">
                  {item!.summary.replace(/\*\*(.*?)\*\*/g, "$1")}
                </p>
                <div className="mt-2 text-[10px] text-foreground/40 tabular-nums">{item!.readTime}</div>
              </Link>
            ))}
          </div>
        </section>

        {/* RIGHT RAIL: Live Feed — mobile: order-3 (last) */}
        <aside className="col-span-1 lg:col-span-3 order-3 border-t lg:border-t-0 lg:border-l border-brief-rule pt-8 lg:pt-0 lg:pl-8 flex flex-col lg:max-h-[820px] lg:sticky lg:top-24">
          <div className="flex justify-between items-end border-b border-brief-rule pb-2 mb-4">
            <h3 className="text-[13px] font-bold font-serif tracking-wide text-foreground">
              {locale === "ja" ? "Latest Briefs" : "Latest Briefs"}
            </h3>
            <span className="text-[10px] uppercase tracking-[2.5px] text-foreground/45 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brief-red animate-pulse" />
              {locale === "ja" ? "Live" : "Live"}
            </span>
          </div>

          <div className="flex-1 overflow-y-auto feed-scroll pr-2 relative">
            <div className="absolute left-[5px] top-2 bottom-0 w-px bg-brief-rule z-0" />

            <ul className="space-y-5 relative z-10">
              {liveFeed.map((item, i) => (
                <li key={item.href} className={`relative pl-5 group${i >= 5 ? " hidden lg:flex lg:flex-col" : ""}`}>
                  {i === 0 ? (
                    <span className="absolute left-[-1px] top-1.5 w-3 h-3 rounded-full bg-background border-2 border-brief-red" />
                  ) : (
                    <span className="absolute left-[3px] top-1.5 w-1.5 h-1.5 rounded-full bg-foreground/25" />
                  )}
                  <Link href={item.href} className="block">
                    <div className="flex gap-2 items-baseline mb-1 flex-wrap">
                      {i === 0 && (
                        <span className="bg-brief-red text-white text-[9px] px-1 py-px font-bold leading-none">
                          {locale === "ja" ? "新着" : "NEW"}
                        </span>
                      )}
                      <time className="text-[11px] font-mono text-foreground/55 tabular-nums">
                        {item.date}
                      </time>
                      <span
                        className="text-[9px] font-bold uppercase tracking-wider"
                        style={{ color: item.color }}
                      >
                        {locale === "ja" ? item.labelJa : item.labelEn}
                      </span>
                    </div>
                    <h5 className="text-[13px] font-bold leading-snug group-hover:text-brief-red transition-colors line-clamp-3">
                      {item.title}
                    </h5>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quote box */}
          <div className="mt-6 rounded-xl border border-brief-border bg-brief-card p-5 italic font-serif text-[13px] relative">
            <svg className="absolute top-3 left-3 opacity-20 text-foreground" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 11H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v-7zm11 0h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3v-7z" />
            </svg>
            <p className="relative z-10 leading-relaxed text-foreground/80 pl-3 pt-3">
              {locale === "ja"
                ? "「成長戦略のロードマップを描くのは簡単だが、現場の泥臭いすり合わせなくして日本の衰退は止められない。」"
                : "“Drawing a growth roadmap is easy. Stopping Japan's decline requires the unglamorous work no one wants to do.”"}
            </p>
            <div className="mt-3 text-right text-[10px] font-sans font-bold text-foreground/55 not-italic">
              {locale === "ja" ? "— 某大手重工メーカー役員" : "— A senior heavy-industry executive"}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
