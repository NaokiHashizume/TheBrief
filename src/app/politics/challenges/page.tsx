import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { PageMasthead } from "@/components/PageMasthead";
import {
  JapanChallengesOverviewDiagram,
  JapanBirthsDeclineDiagram,
  JapanAgingBurdenDiagram,
  JapanFiscalDebtDiagram,
  JapanDefenseSpendingDiagram,
  JapanLaborShortageDiagram,
  JapanSelfSufficiencyDiagram,
} from "@/components/JapanChallengesDiagrams";

export const metadata: Metadata = {
  title: "日本が抱える課題 — Japan's Structural Challenges",
  description:
    "少子化、高齢化、財政赤字、安全保障、労働力不足、エネルギー、食料安全保障など、日本が直面する構造的課題をカテゴリ別にまとめます。",
  alternates: { canonical: "https://thebrief.info/politics/challenges" },
  openGraph: {
    title: "日本が抱える課題 — Japan's Structural Challenges",
    description: "少子化、高齢化、財政赤字、安全保障、労働力不足、エネルギー、食料安全保障など、日本が直面する構造的課題をカテゴリ別にまとめます。",
    url: "https://thebrief.info/politics/challenges",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "日本が抱える課題 — Japan's Structural Challenges",
    description: "少子化、高齢化、財政赤字、安全保障、労働力不足、エネルギー、食料安全保障など、日本が直面する構造的課題をカテゴリ別にまとめます。",
  },
};

const challenges = [
  {
    slug: "births",
    title: "少子化の加速",
    titleEn: "Declining Births",
    description: "出生率1.15、出生数68.6万人。世界最速ペースで進む人口減少と未婚化の構造。",
    descriptionEn: "Fertility rate at 1.15 and only 686k births. The world's fastest population decline and rising lifetime singlehood.",
    stat: "1.15",
    statLabel: "出生率",
    statLabelEn: "Fertility Rate",
    color: "#ef4444",
    anchor: "births",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12h.01" /><path d="M15 12h.01" />
        <path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5" />
        <path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1" />
      </svg>
    ),
  },
  {
    slug: "aging",
    title: "高齢化と社会保障",
    titleEn: "Aging & Social Security",
    description: "高齢化率29.3%、社会保障給付費140兆円。現役世代の負担と医療・介護需要の急増。",
    descriptionEn: "29.3% aged population and ¥140T in social security spending. Soaring care demand strains the working-age base.",
    stat: "29.3%",
    statLabel: "高齢化率",
    statLabelEn: "Aging Rate",
    color: "#f97316",
    anchor: "aging",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="6" r="3" />
        <path d="M9 22V12l-2 2" /><path d="M15 22V12l2 2" />
        <path d="M12 9v6" />
      </svg>
    ),
  },
  {
    slug: "fiscal",
    title: "財政の崖",
    titleEn: "Fiscal Cliff",
    description: "債務残高はGDP比235%で先進国最悪。利払いの増加と国債発行依存が常態化。",
    descriptionEn: "Public debt at 235% of GDP—the worst among advanced economies. Rising interest costs and chronic deficit financing.",
    stat: "235%",
    statLabel: "債務 GDP比",
    statLabelEn: "Debt / GDP",
    color: "#eab308",
    anchor: "fiscal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    slug: "defense",
    title: "安全保障の激変",
    titleEn: "Security Shift",
    description: "防衛費は9兆円超へ。中国・北朝鮮・台湾有事を見据えた防衛力の抜本的強化。",
    descriptionEn: "Defense spending exceeds ¥9T. Sweeping force buildup amid China, North Korea, and Taiwan contingencies.",
    stat: "9兆円+",
    statLabel: "防衛費",
    statLabelEn: "Defense Budget",
    color: "#3b82f6",
    anchor: "defense",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    slug: "labor",
    title: "労働力不足",
    titleEn: "Labor Shortage",
    description: "2030年には700万人の労働力不足が見込まれる。外国人材・自動化・賃上げ競争。",
    descriptionEn: "A projected 7 million worker shortfall by 2030. Foreign labor, automation, and wage competition intensify.",
    stat: "700万人",
    statLabel: "2030年不足",
    statLabelEn: "Shortfall by 2030",
    color: "#8b5cf6",
    anchor: "labor",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    slug: "energy",
    title: "エネルギー脆弱性",
    titleEn: "Energy Vulnerability",
    description: "エネルギー自給率はわずか13%。中東・LNG依存と原発再稼働を巡る難題。",
    descriptionEn: "Energy self-sufficiency at just 13%. Heavy reliance on Middle East oil/LNG and unresolved nuclear restart debates.",
    stat: "13%",
    statLabel: "エネルギー自給率",
    statLabelEn: "Energy Self-Sufficiency",
    color: "#06b6d4",
    anchor: "energy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    slug: "food",
    title: "食料安全保障",
    titleEn: "Food Security",
    description: "食料自給率はカロリーベースで38%。輸入依存・農業従事者の高齢化・耕作放棄地の拡大。",
    descriptionEn: "Calorie-based food self-sufficiency at 38%. Import dependence, aging farmers, and rising abandoned farmland.",
    stat: "38%",
    statLabel: "食料自給率",
    statLabelEn: "Food Self-Sufficiency",
    color: "#22c55e",
    anchor: "food",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20" /><path d="M20 12c0 4.4-3.6 8-8 8s-8-3.6-8-8" />
        <path d="M4 8c0-2.2 3.6-4 8-4s8 1.8 8 4" />
      </svg>
    ),
  },
];

export default function JapanChallengesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "日本が抱える課題", href: "/politics/challenges" },
        ]}
      />

      <PageMasthead
        breadcrumbs={[
          { ja: "Home", en: "Home", href: "/" },
          { ja: "Politics", en: "Politics", href: "/politics" },
          { ja: "日本が抱える課題", en: "Japan's Challenges" },
        ]}
        eyebrow="構造的課題"
        eyebrowEn="Structural Challenges"
        accent="#ef4444"
        title={<T ja="日本が抱える課題" en="Japan's Structural Challenges" />}
        titleEn="7 crises reshaping the nation"
        description="少子化、高齢化、財政赤字、安全保障、労働力不足、エネルギー、食料安全保障——日本が同時に直面する7つの構造的課題をカテゴリ別にまとめます。"
        descriptionEn="Japan faces seven structural challenges at once—declining births, aging, fiscal deficit, security shift, labor shortage, energy vulnerability, and food security."
        meta="Last updated: 2026-04-09"
      />

      {/* Dashboard banner — 7 key metrics */}
      <div className="overflow-x-auto scrollbar-none -mx-4 px-4">
        <div className="flex gap-3 min-w-max pb-1">
          {challenges.map((c) => (
            <a
              key={c.slug}
              href={`#${c.anchor}`}
              className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl border border-brief-border hover:border-foreground/20 transition-all min-w-[100px] group"
              style={{ borderTopColor: c.color, borderTopWidth: 2 }}
            >
              <span
                className="text-[22px] font-bold tabular-nums leading-none"
                style={{ color: c.color }}
              >
                {c.stat}
              </span>
              <span className="text-[10px] text-foreground/50 text-center leading-tight">
                <T ja={c.statLabel} en={c.statLabelEn} />
              </span>
            </a>
          ))}
        </div>
      </div>

      {/* Challenge category grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((c) => (
          <a
            key={c.slug}
            href={`#${c.anchor}`}
            className="group p-5 rounded-xl border border-brief-border hover:border-foreground/20 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between gap-3 mb-3">
              <div className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${c.color}15`, color: c.color }}
                >
                  {c.icon}
                </div>
                <div className="min-w-0">
                  <h2 className="font-serif font-bold text-sm leading-snug group-hover:text-brief-red transition-colors">
                    <T ja={c.title} en={c.titleEn} />
                  </h2>
                  <span className="text-[10px] text-foreground/40">{c.titleEn}</span>
                </div>
              </div>
              <span className="text-foreground/25 group-hover:text-foreground/50 transition-colors text-sm flex-shrink-0">↓</span>
            </div>

            <div className="flex items-end justify-between gap-2">
              <p className="text-[12px] text-foreground/55 leading-relaxed flex-1">
                <T ja={c.description} en={c.descriptionEn} />
              </p>
              <div className="flex-shrink-0 text-right">
                <div
                  className="text-[26px] font-bold tabular-nums leading-none"
                  style={{ color: c.color }}
                >
                  {c.stat}
                </div>
                <div className="text-[9px] text-foreground/40 mt-0.5">
                  <T ja={c.statLabel} en={c.statLabelEn} />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Diagrams */}
      <div className="mt-12">
        <JapanChallengesOverviewDiagram />
      </div>

      {[
        { id: "births", index: 0, Diagram: JapanBirthsDeclineDiagram },
        { id: "aging",  index: 1, Diagram: JapanAgingBurdenDiagram },
        { id: "fiscal", index: 2, Diagram: JapanFiscalDebtDiagram },
        { id: "defense",index: 3, Diagram: JapanDefenseSpendingDiagram },
        { id: "labor",  index: 4, Diagram: JapanLaborShortageDiagram },
        { id: "energy", index: 5, Diagram: null },
        { id: "food",   index: 6, Diagram: JapanSelfSufficiencyDiagram },
      ].map(({ id, index, Diagram }) => {
        const c = challenges[index];
        return (
          <section key={id} id={id} className="scroll-mt-24 mt-16">
            <div
              className="flex items-center justify-between mb-6 pb-3 border-b"
              style={{ borderColor: `${c.color}30` }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-1 h-8 rounded-full flex-shrink-0"
                  style={{ backgroundColor: c.color }}
                />
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[2.5px]" style={{ color: c.color }}>
                    <T ja={`課題 ${index + 1}/7`} en={`Challenge ${index + 1}/7`} />
                  </div>
                  <h2 className="font-serif font-bold text-xl leading-tight">
                    <T ja={c.title} en={c.titleEn} />
                  </h2>
                </div>
              </div>
              <a
                href="#"
                className="text-[11px] text-foreground/40 hover:text-foreground/70 transition-colors flex items-center gap-1 flex-shrink-0"
              >
                <T ja="↑ 一覧へ" en="↑ Back" />
              </a>
            </div>
            {Diagram && <Diagram />}
          </section>
        );
      })}
    </div>
  );
}
