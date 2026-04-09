import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { PageMasthead } from "@/components/PageMasthead";
import {
  JapanBirthsDeclineDiagram,
  JapanAgingBurdenDiagram,
  JapanFiscalDebtDiagram,
  JapanDefenseSpendingDiagram,
  JapanLaborShortageDiagram,
  JapanSelfSufficiencyDiagram,
} from "@/components/JapanChallengesDiagrams";

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
    Diagram: JapanBirthsDeclineDiagram,
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
    Diagram: JapanAgingBurdenDiagram,
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
    Diagram: JapanFiscalDebtDiagram,
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
    Diagram: JapanDefenseSpendingDiagram,
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
    Diagram: JapanLaborShortageDiagram,
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
    Diagram: null,
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
    Diagram: JapanSelfSufficiencyDiagram,
  },
];

export function generateStaticParams() {
  return challenges.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = challenges.find((ch) => ch.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} — 日本が抱える課題`,
    description: c.description,
    alternates: { canonical: `https://thebrief.info/politics/challenges/${slug}` },
    openGraph: {
      title: `${c.title} — 日本が抱える課題`,
      description: c.description,
      url: `https://thebrief.info/politics/challenges/${slug}`,
      siteName: "The Brief",
      locale: "ja_JP",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.title} — 日本が抱える課題`,
      description: c.description,
    },
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = challenges.find((ch) => ch.slug === slug);
  if (!c) notFound();

  const index = challenges.indexOf(c);
  const prev = challenges[index - 1] ?? null;
  const next = challenges[index + 1] ?? null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "日本が抱える課題", href: "/politics/challenges" },
          { name: c.title, href: `/politics/challenges/${slug}` },
        ]}
      />

      <PageMasthead
        breadcrumbs={[
          { ja: "Home", en: "Home", href: "/" },
          { ja: "Politics", en: "Politics", href: "/politics" },
          { ja: "日本が抱える課題", en: "Japan's Challenges", href: "/politics/challenges" },
          { ja: c.title, en: c.titleEn },
        ]}
        eyebrow={`課題 ${index + 1} / 7`}
        eyebrowEn={`Challenge ${index + 1} of 7`}
        accent={c.color}
        title={<T ja={c.title} en={c.titleEn} />}
        titleEn={c.titleEn}
        description={c.description}
        descriptionEn={c.descriptionEn}
        meta={
          <span>
            <T ja="キーデータ：" en="Key figure: " />
            <span className="font-bold tabular-nums" style={{ color: c.color }}>
              {c.stat}
            </span>
            {"　"}
            <T ja={c.statLabel} en={c.statLabelEn} />
          </span>
        }
      />

      {c.Diagram ? (
        <c.Diagram />
      ) : (
        <div className="py-12 text-center text-foreground/40 text-sm border border-dashed border-brief-border rounded-xl">
          <T ja="図表は準備中です。" en="Diagrams coming soon." />
        </div>
      )}

      {/* Prev / Next navigation */}
      <nav className="mt-16 pt-8 border-t border-brief-border grid grid-cols-2 gap-4">
        <div>
          {prev && (
            <a
              href={`/politics/challenges/${prev.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-brief-border hover:border-foreground/20 transition-all"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-foreground/40">
                <T ja="← 前の課題" en="← Previous" />
              </span>
              <span className="font-serif font-bold text-sm group-hover:text-brief-red transition-colors">
                <T ja={prev.title} en={prev.titleEn} />
              </span>
            </a>
          )}
        </div>
        <div>
          {next && (
            <a
              href={`/politics/challenges/${next.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-brief-border hover:border-foreground/20 transition-all text-right"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-foreground/40">
                <T ja="次の課題 →" en="Next →" />
              </span>
              <span className="font-serif font-bold text-sm group-hover:text-brief-red transition-colors">
                <T ja={next.title} en={next.titleEn} />
              </span>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
