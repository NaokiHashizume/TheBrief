import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { economyArticles } from "@/lib/economyArticles";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import {
  CrisisTimelineDiagram,
  OilDependencyDiagram,
  EconomicImpactDiagram,
  OilReservesDiagram,
  IndustryImpactDiagram,
  HistoricalComparisonDiagram,
  EnergyStrategyDiagram,
} from "@/components/HormuzDiagrams";
import {
  TaxRateHistoryDiagram,
  TaxRevenueStatsDiagram,
  SocialSecurityBreakdownDiagram,
  NationalLocalSplitDiagram,
  ReducedRateItemsDiagram,
  InvoiceSystemDiagram,
  RegressivityDiagram,
  InternationalComparisonDiagram,
  FutureDebatesDiagram,
} from "@/components/ConsumptionTaxDiagrams";
import {
  USIranTimelineDiagram,
  SanctionsArchitectureDiagram,
  IranEconomicImpactDiagram,
  IranOilExportsDiagram,
  NuclearNegotiationsDiagram,
  ProtestsAndWarDiagram,
  CeasefireConditionsDiagram,
} from "@/components/USIranDiagrams";
import {
  FiscalPhilosophyDiagram,
  BudgetBreakdownDiagram,
  PBSurplusDiagram,
  DefenseSpendingDiagram,
  GrowthInvestmentDiagram,
  HouseholdMeasuresDiagram,
  InterestRateRiskDiagram,
  FiscalSustainabilityDiagram,
  ThreeScenariosDiagram,
} from "@/components/TakaichiFiscalDiagrams";
import {
  GxEtsOverviewDiagram,
  GxEtsTargetsDiagram,
  GxEtsPhasesDiagram,
  GxEtsFossilLevyDiagram,
  GxEtsBondLinkDiagram,
  GxEtsPowerImpactDiagram,
  GxEtsInternationalDiagram,
  GxEtsStakeholdersDiagram,
} from "@/components/GxEtsDiagrams";
import {
  DctOverviewDiagram,
  DctMechanismDiagram,
  DctThreeTaxesDiagram,
  DctByFirmSizeDiagram,
  DctIndividualDiagram,
  DctFutureDiagram,
} from "@/components/DefenseCorporateTaxDiagrams";
import {
  P2026OverviewDiagram,
  P2026LogisticsLawDiagram,
  P2026DoctorRulesDiagram,
  P2026ConstructionDiagram,
  P2026BankruptcyStatsDiagram,
  P2026CascadeDiagram,
  P2026SolutionsDiagram,
} from "@/components/Problem2026Diagrams";
import {
  BojHistoryDiagram,
  BojTerminalDiagram,
  BojNeutralRateDiagram,
  BojPoliticsDiagram,
  BojImpactDiagram,
  BojTriggersDiagram,
} from "@/components/BojRateHikeDiagrams";
import {
  AffiliateMarketScaleDiagram,
  AffiliateStemaRegulationDiagram,
  AffiliateAiOverviewDiagram,
  AffiliateSnsChannelsDiagram,
  AffiliateAspComparisonDiagram,
  AffiliateAiContentDiagram,
  AffiliateFutureModelDiagram,
} from "@/components/AffiliateDiagrams";
import {
  TourismRecordOverviewDiagram,
  TourismOvertourismCasesDiagram,
  TourismRevenueGapDiagram,
  TourismDualPricingDiagram,
  TourismPolicyContradictionDiagram,
  TourismStrategicViewDiagram,
} from "@/components/TourismOvertourismDiagrams";
import {
  WageSpring2026OverviewDiagram,
  WageRealVsNominalDiagram,
  WageSmeRealityDiagram,
  WageSmeCostTransferDiagram,
  WageIrregularWorkersDiagram,
  WageStrategicViewDiagram,
} from "@/components/WageIncreaseDiagrams";
import ShareButton from "@/components/ShareButton";
import { ArticleReferences } from "@/components/ArticleReferences";
import { TagLink } from "@/components/TagLink";
import { RecommendedReads } from "@/components/RecommendedReads";

export function generateStaticParams() {
  return economyArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = economyArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — Economy`,
    description: article.summary,
    keywords: article.tags,
    alternates: {
      canonical: `https://thebrief.info/economy/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/economy/${article.slug}`,
      type: "article",
      locale: "ja_JP",
      siteName: "The Brief",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.summary,
    },
  };
}

/* Inline rich text renderer: **bold**, 「quotes」 */
function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return (
    <>
      {parts.map((part, k) => {
        if (k % 2 === 1) {
          return (
            <strong key={k} className="font-semibold text-foreground">
              <span className="bg-[#f59e0b]/[0.08] dark:bg-[#f59e0b]/[0.15] px-1 py-0.5 rounded">
                {part}
              </span>
            </strong>
          );
        }
        const quoteParts = part.split(/(「[^」]+」)/);
        return (
          <span key={k}>
            {quoteParts.map((qp, qi) => {
              if (qp.startsWith("「") && qp.endsWith("」")) {
                return <span key={qi} className="text-foreground/90 font-medium">{qp}</span>;
              }
              return <span key={qi}>{qp}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}

/* Diagram renderer mapped by ID */
const diagramMap: Record<string, React.FC> = {
  "crisis-timeline": CrisisTimelineDiagram,
  "oil-dependency": OilDependencyDiagram,
  "economic-impact": EconomicImpactDiagram,
  "oil-reserves": OilReservesDiagram,
  "industry-impact": IndustryImpactDiagram,
  "historical-comparison": HistoricalComparisonDiagram,
  "energy-strategy": EnergyStrategyDiagram,
  "tax-rate-history": TaxRateHistoryDiagram,
  "tax-revenue-stats": TaxRevenueStatsDiagram,
  "social-security-breakdown": SocialSecurityBreakdownDiagram,
  "national-local-split": NationalLocalSplitDiagram,
  "reduced-rate-items": ReducedRateItemsDiagram,
  "invoice-system": InvoiceSystemDiagram,
  "regressivity": RegressivityDiagram,
  "international-comparison": InternationalComparisonDiagram,
  "future-debates": FutureDebatesDiagram,
  "us-iran-timeline": USIranTimelineDiagram,
  "sanctions-architecture": SanctionsArchitectureDiagram,
  "iran-economic-impact": IranEconomicImpactDiagram,
  "iran-oil-exports": IranOilExportsDiagram,
  "nuclear-negotiations": NuclearNegotiationsDiagram,
  "protests-and-war": ProtestsAndWarDiagram,
  "ceasefire-conditions": CeasefireConditionsDiagram,
  "fiscal-philosophy": FiscalPhilosophyDiagram,
  "budget-breakdown": BudgetBreakdownDiagram,
  "pb-surplus": PBSurplusDiagram,
  "defense-spending": DefenseSpendingDiagram,
  "growth-investment": GrowthInvestmentDiagram,
  "household-measures": HouseholdMeasuresDiagram,
  "interest-rate-risk": InterestRateRiskDiagram,
  "fiscal-sustainability": FiscalSustainabilityDiagram,
  "three-scenarios": ThreeScenariosDiagram,
  "gxets-overview": GxEtsOverviewDiagram,
  "gxets-targets": GxEtsTargetsDiagram,
  "gxets-phases": GxEtsPhasesDiagram,
  "gxets-fossil-levy": GxEtsFossilLevyDiagram,
  "gxets-bond-link": GxEtsBondLinkDiagram,
  "gxets-power-impact": GxEtsPowerImpactDiagram,
  "gxets-international": GxEtsInternationalDiagram,
  "gxets-stakeholders": GxEtsStakeholdersDiagram,
  "dct-overview": DctOverviewDiagram,
  "dct-mechanism": DctMechanismDiagram,
  "dct-three-taxes": DctThreeTaxesDiagram,
  "dct-by-firm-size": DctByFirmSizeDiagram,
  "dct-individual": DctIndividualDiagram,
  "dct-future": DctFutureDiagram,
  "p2026-overview": P2026OverviewDiagram,
  "p2026-logistics-law": P2026LogisticsLawDiagram,
  "p2026-doctor-rules": P2026DoctorRulesDiagram,
  "p2026-construction": P2026ConstructionDiagram,
  "p2026-bankruptcy-stats": P2026BankruptcyStatsDiagram,
  "p2026-cascade": P2026CascadeDiagram,
  "p2026-solutions": P2026SolutionsDiagram,
  "boj-history": BojHistoryDiagram,
  "boj-terminal": BojTerminalDiagram,
  "boj-neutral-rate": BojNeutralRateDiagram,
  "boj-politics": BojPoliticsDiagram,
  "boj-impact": BojImpactDiagram,
  "boj-triggers": BojTriggersDiagram,
  "affiliate-market-scale": AffiliateMarketScaleDiagram,
  "affiliate-stema-regulation": AffiliateStemaRegulationDiagram,
  "affiliate-ai-overview": AffiliateAiOverviewDiagram,
  "affiliate-sns-channels": AffiliateSnsChannelsDiagram,
  "affiliate-asp-comparison": AffiliateAspComparisonDiagram,
  "affiliate-ai-content": AffiliateAiContentDiagram,
  "affiliate-future-model": AffiliateFutureModelDiagram,
  "tourism-record-overview": TourismRecordOverviewDiagram,
  "tourism-overtourism-cases": TourismOvertourismCasesDiagram,
  "tourism-revenue-gap": TourismRevenueGapDiagram,
  "tourism-dual-pricing": TourismDualPricingDiagram,
  "tourism-policy-contradiction": TourismPolicyContradictionDiagram,
  "tourism-strategic-view": TourismStrategicViewDiagram,
  "wage-spring-2026-overview": WageSpring2026OverviewDiagram,
  "wage-real-vs-nominal": WageRealVsNominalDiagram,
  "wage-sme-reality": WageSmeRealityDiagram,
  "wage-sme-cost-transfer": WageSmeCostTransferDiagram,
  "wage-irregular-workers": WageIrregularWorkersDiagram,
  "wage-strategic-view": WageStrategicViewDiagram,
};

export default async function EconomyArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = economyArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  const articleIndex = economyArticles.findIndex((a) => a.slug === slug);
  const prevArticle = articleIndex > 0 ? economyArticles[articleIndex - 1] : null;
  const nextArticle =
    articleIndex < economyArticles.length - 1
      ? economyArticles[articleIndex + 1]
      : null;

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author="The Brief"
        url={`https://thebrief.info/economy/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Economy", href: "/economy" },
          { name: article.title, href: `/economy/${article.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-12 font-medium tracking-wide">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-30" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
        <Link href="/economy" className="hover:text-foreground/70 transition-colors">Economy</Link>
      </nav>

      {/* ── Hero Header ── */}
      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="text-[10px] tracking-[2.5px] uppercase font-semibold text-[#f59e0b]/60">
            Economy
          </span>
          <span className="w-px h-3 bg-[#f59e0b]/15" />
          {article.tags.map((tag) => (
            <TagLink key={tag} tag={tag} color="#b9770e" />
          ))}
        </div>

        <h1 className="font-serif text-[28px] sm:text-[36px] font-bold leading-[1.25] tracking-tight">
          {article.title}
        </h1>

        {article.titleEn && (
          <p className="mt-2 text-[11px] tracking-[1px] text-foreground/25 font-medium uppercase">
            {article.titleEn}
          </p>
        )}

        <p className="mt-6 text-[15px] text-foreground/65 leading-[1.9] border-l-2 border-[#f59e0b]/20 pl-5">
          {article.summary}
        </p>

        <div className="mt-6 flex items-center gap-5 text-[11px] text-foreground/35 font-medium">
          <time className="tabular-nums">{article.date}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/15" />
          <span>{article.readTime}</span>
        </div>
      </header>

      {/* ── Table of Contents ── */}
      <nav className="mb-16 relative">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-foreground/[0.02] to-foreground/[0.005]" />
        <div className="relative p-6 sm:p-8 rounded-2xl border border-foreground/[0.05]">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-6 rounded-md bg-[#f59e0b]/[0.08] flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-[#f59e0b]/50" aria-hidden="true">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/30 font-semibold">Contents</span>
          </div>
          <ol className="space-y-0">
            {article.sections.map((section, i) => (
              <li key={i}>
                <a
                  href={`#section-${i}`}
                  className="group flex items-center gap-4 py-2.5 text-foreground/65 hover:text-[#f59e0b] transition-colors"
                >
                  <span className="text-[11px] tabular-nums font-semibold text-[#f59e0b]/30 group-hover:text-[#f59e0b]/60 w-5 text-right transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[13px] font-medium">{section.heading}</span>
                </a>
                {i < article.sections.length - 1 && (
                  <div className="ml-[30px] h-px bg-foreground/[0.03]" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* ── Article Content ── */}
      <article>
        {article.sections.map((section, i) => {
          const paragraphs = section.body.split("\n\n").filter((p) => p.trim());
          const DiagramComponent = section.diagramId ? diagramMap[section.diagramId] : null;

          return (
            <section key={i} id={`section-${i}`} className="mb-20 scroll-mt-24">
              {/* Section heading */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[32px] sm:text-[40px] font-bold tabular-nums text-[#f59e0b]/[0.1] leading-none select-none font-serif">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="font-serif text-[22px] sm:text-[26px] font-bold leading-tight tracking-tight">
                      {section.heading}
                    </h2>
                    {section.headingEn && (
                      <span className="text-[10px] tracking-[2px] uppercase text-foreground/25 font-medium mt-0.5 block">
                        {section.headingEn}
                      </span>
                    )}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[#f59e0b]/15 via-[#f59e0b]/5 to-transparent" />
              </div>

              {/* Diagram */}
              {DiagramComponent && <DiagramComponent />}

              {/* Section body */}
              <div className="space-y-6">
                {paragraphs.map((paragraph, j) => {
                  const trimmed = paragraph.trim();
                  if (!trimmed) return null;

                  // Callout box
                  if (trimmed.startsWith("> ")) {
                    const calloutText = trimmed.slice(2);
                    return (
                      <div
                        key={j}
                        className="my-8 pl-5 py-4 rounded-r-lg bg-[#f59e0b]/[0.04] dark:bg-[#f59e0b]/[0.06] border-l-3 border-[#f59e0b]/25"
                      >
                        <p className="text-[14px] text-foreground/70 leading-[1.9] italic">
                          <RichText text={calloutText} />
                        </p>
                      </div>
                    );
                  }

                  // 【bracket】labels
                  if (trimmed.startsWith("【")) {
                    const bracketEnd = trimmed.indexOf("】");
                    if (bracketEnd > 0) {
                      const label = trimmed.slice(1, bracketEnd);
                      const content = trimmed.slice(bracketEnd + 1).trim();
                      return (
                        <div key={j} className="group pl-5 py-3 relative">
                          <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#f59e0b]/20 group-hover:bg-[#f59e0b]/35 transition-colors" />
                          <div className="text-[11px] font-bold text-[#f59e0b]/60 tracking-wide mb-1.5">
                            {label}
                          </div>
                          <p className="text-[14px] text-foreground/75 leading-[1.9]">
                            <RichText text={content} />
                          </p>
                        </div>
                      );
                    }
                  }

                  // Lead paragraph
                  const isLead = j === 0 || (j === 1 && paragraphs[0].trim().startsWith("> "));

                  return (
                    <p
                      key={j}
                      className={
                        isLead
                          ? "text-[16px] text-foreground/80 leading-[2] tracking-[0.02em] first-letter:text-[2em] first-letter:font-serif first-letter:font-bold first-letter:text-[#f59e0b]/40 first-letter:float-left first-letter:mr-1 first-letter:mt-1 first-letter:leading-[0.8]"
                          : "text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]"
                      }
                    >
                      <RichText text={trimmed} />
                    </p>
                  );
                })}
              </div>
            </section>
          );
        })}
      </article>

      <ShareButton title={article.title} />
      <ArticleReferences sources={article.sources} />

      <RecommendedReads currentSlug={slug} currentTags={article.tags} />

      {/* Sources */}
      <div className="mt-14 p-5 rounded-2xl border border-dashed border-foreground/[0.08]">
        <h3 className="text-[11px] font-semibold mb-3 text-foreground/50 tracking-wide">
          参考資料・出典
        </h3>
        <ul className="text-[11px] text-foreground/40 leading-[1.8] space-y-1">
          <li>野村総合研究所（NRI）木内登英「イラン攻撃で高まる原油価格上昇リスクと日本経済への影響試算」2026年3月</li>
          <li>日本総合研究所「ホルムズ海峡封鎖に飛び火すれば140ドルに急騰、わが国GDPを3%下押しも」</li>
          <li>JETRO「日本のLNG輸入量のホルムズ海峡依存度は6.3%」2026年3月</li>
          <li>経済産業省「国家備蓄原油の放出を行います」2026年3月24日</li>
          <li>資源エネルギー庁「石油備蓄の現況」</li>
          <li>丸紅経済研究所「ホルムズ海峡封鎖の原油・ガス市場への影響」2026年3月10日</li>
          <li>IEA (International Energy Agency) - Strait of Hormuz</li>
          <li>Climate Bonds「中東紛争が浮き彫りにする日本のエネルギー脆弱性」</li>
          <li>アイ・エヌ情報センター「石油備蓄日数は248日、原油輸入の中東依存度は95.1%」2026年3月</li>
          <li>Bloomberg「日本のインフレ加速の恐れ、原油急騰 — ホルムズ海峡が事実上封鎖」2026年3月2日</li>
        </ul>
      </div>

      {/* Article Navigation */}
      <div className="mt-20 pt-12 border-t border-foreground/[0.04]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevArticle ? (
            <Link
              href={`/economy/${prevArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-[#f59e0b]/20 transition-all hover:bg-foreground/[0.01]"
            >
              <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[2px] text-foreground/30 mb-2 font-medium">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
                Previous
              </div>
              <div className="text-[13px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                {prevArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextArticle ? (
            <Link
              href={`/economy/${nextArticle.slug}`}
              className="group p-5 rounded-2xl border border-foreground/[0.05] hover:border-[#f59e0b]/20 transition-all text-right hover:bg-foreground/[0.01]"
            >
              <div className="flex items-center justify-end gap-1.5 text-[10px] uppercase tracking-[2px] text-foreground/30 mb-2 font-medium">
                Next
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-40" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
              </div>
              <div className="text-[13px] font-medium text-foreground/60 group-hover:text-foreground/80 transition-colors line-clamp-2 leading-relaxed">
                {nextArticle.title}
              </div>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/economy"
            className="inline-flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground/60 transition-colors font-medium tracking-wide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-50" aria-hidden="true"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            Economy ダッシュボードへ
          </Link>
        </div>
      </div>
    </div>
  );
}
