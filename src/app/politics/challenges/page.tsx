import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
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
};

const challenges = [
  {
    slug: "births",
    title: "少子化の加速",
    titleEn: "Declining Births",
    description: "出生率1.15、出生数68.6万人。世界最速ペースで進む人口減少と未婚化の構造。",
    descriptionEn: "Fertility rate at 1.15 and only 686k births. The world's fastest population decline and rising lifetime singlehood.",
    stat: "出生率 1.15",
    color: "#ef4444",
    anchor: "births",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stat: "高齢化率 29.3%",
    color: "#f97316",
    anchor: "aging",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stat: "債務 GDP比235%",
    color: "#eab308",
    anchor: "fiscal",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stat: "防衛費 9兆円超",
    color: "#3b82f6",
    anchor: "defense",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stat: "2030年 700万人不足",
    color: "#8b5cf6",
    anchor: "labor",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stat: "自給率 13%",
    color: "#06b6d4",
    anchor: "energy",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    stat: "自給率 38%",
    color: "#22c55e",
    anchor: "food",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span><T ja="日本が抱える課題" en="Japan's Challenges" /></span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">
        <T ja="日本が抱える課題" en="Japan's Structural Challenges" />
      </h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T
          ja="少子化、高齢化、財政赤字、安全保障、労働力不足、エネルギー、食料安全保障——日本が同時に直面する7つの構造的課題をカテゴリ別にまとめます。"
          en="Japan faces seven structural challenges at once—declining births, aging, fiscal deficit, security shift, labor shortage, energy vulnerability, and food security."
        />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        Last updated: 2026-04-09
      </p>

      {/* Challenge category grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {challenges.map((c) => (
          <a
            key={c.slug}
            href={`#${c.anchor}`}
            className="group p-5 rounded-xl border border-brief-border hover:border-foreground/20 hover:shadow-sm transition-all"
          >
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${c.color}15`, color: c.color }}
              >
                {c.icon}
              </div>
              <div className="min-w-0">
                <h2 className="font-serif font-bold text-base leading-snug group-hover:text-brief-red">
                  <T ja={c.title} en={c.titleEn} />
                </h2>
                <span className="text-[10px] text-foreground/45">{c.titleEn}</span>
              </div>
            </div>
            <p className="mt-3 text-[12px] text-foreground/55 leading-relaxed">
              <T ja={c.description} en={c.descriptionEn} />
            </p>
            <div className="mt-3">
              <span
                className="text-[9px] tracking-wider uppercase font-semibold px-2 py-0.5 rounded tabular-nums"
                style={{ backgroundColor: `${c.color}15`, color: c.color }}
              >
                {c.stat}
              </span>
            </div>
          </a>
        ))}
      </div>

      {/* Diagrams */}
      <div className="mt-12">
        <JapanChallengesOverviewDiagram />
      </div>
      <section id="births" className="scroll-mt-24">
        <JapanBirthsDeclineDiagram />
      </section>
      <section id="aging" className="scroll-mt-24">
        <JapanAgingBurdenDiagram />
      </section>
      <section id="fiscal" className="scroll-mt-24">
        <JapanFiscalDebtDiagram />
      </section>
      <section id="defense" className="scroll-mt-24">
        <JapanDefenseSpendingDiagram />
      </section>
      <section id="labor" className="scroll-mt-24">
        <JapanLaborShortageDiagram />
      </section>
      <section id="energy" className="scroll-mt-24">
        <span id="food" />
        <JapanSelfSufficiencyDiagram />
      </section>
    </div>
  );
}
