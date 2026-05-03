import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { automotiveArticles } from "@/lib/automotiveArticles";
import { ArticleJsonLd, BreadcrumbJsonLd, FAQJsonLd } from "@/components/JsonLd";
import {
  AutoOverviewDiagram,
  AutoToyotaPLDiagram,
  AutoThreeCompaniesDiagram,
  AutoRegionsDiagram,
  AutoSupplyChainDiagram,
  AutoEvShiftDiagram,
} from "@/components/AutomotiveBizDiagrams";
import {
  HnTimelineDiagram,
  RenissanNumbersDiagram,
  HondaAfterDiagram,
  HnNaCooperationDiagram,
  HnRematchScenariosDiagram,
  CnEuShareDiagram,
  CnEuTariffsDiagram,
  CnEuFactoriesDiagram,
  CnEuMinPriceDiagram,
  CnEuImpactDiagram,
  SsbWhyDiagram,
  SsbToyotaDiagram,
  SsbNissanDiagram,
  SsbRivalsDiagram,
  SsbProductionRealityDiagram,
} from "@/components/AutomotiveArticleDiagrams";
import {
  EvMarketShareDiagram,
  EvToyotaStrategyDiagram,
  EvChinaAdvanceDiagram,
  EvJapanInfraDiagram,
  EvCostComparisonDiagram,
  EvFutureScenarioDiagram,
} from "@/components/EvMarket2026Diagrams";
import {
  TariffImpactSummaryDiagram,
  TariffProductionShiftDiagram,
  TariffSupplyChainImpactDiagram,
  TariffNissanCrisisDiagram,
  TariffEvDoubleBurdenDiagram,
  TariffGovernmentResponseDiagram,
  TariffStrategicViewDiagram,
} from "@/components/TrumpTariffAutoDiagrams";
import {
  AutoTariffEarningsNumbersDiagram,
  AutoTariffEuImpactDiagram,
  AutoTariffProductionShiftDiagram,
  AutoTariffTradeTalksDiagram,
  AutoTariffStrategicViewDiagram,
} from "@/components/AutoTariffEarningsDiagrams";
import ShareButton from "@/components/ShareButton";
import { ArticleReferences } from "@/components/ArticleReferences";
import { TagLink } from "@/components/TagLink";
import { RecommendedReads } from "@/components/RecommendedReads";
import { T } from "@/components/T";

export function generateStaticParams() {
  return automotiveArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = automotiveArticles.find((a) => a.slug === slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} — 自動車`,
    description: article.summary,
    keywords: article.tags,
    alternates: {
      canonical: `https://thebrief.info/industry/automotive/${article.slug}`,
    },
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://thebrief.info/industry/automotive/${article.slug}`,
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

function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/);
  return (
    <>
      {parts.map((part, k) => {
        if (k % 2 === 1) {
          return (
            <strong
              key={k}
              className="font-semibold text-foreground"
              style={{ textDecorationLine: "none" }}
            >
              <span className="bg-[#0ea5e9]/[0.07] dark:bg-[#0ea5e9]/[0.15] px-1 py-0.5 rounded">
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
                return (
                  <span key={qi} className="text-foreground/90 font-medium">
                    {qp}
                  </span>
                );
              }
              return <span key={qi}>{qp}</span>;
            })}
          </span>
        );
      })}
    </>
  );
}

const diagramMap: Record<string, React.FC> = {
  "auto-overview": AutoOverviewDiagram,
  "auto-toyota-pl": AutoToyotaPLDiagram,
  "auto-three-companies": AutoThreeCompaniesDiagram,
  "auto-regions": AutoRegionsDiagram,
  "auto-supply-chain": AutoSupplyChainDiagram,
  "auto-ev-shift": AutoEvShiftDiagram,
  "hn-timeline": HnTimelineDiagram,
  "renissan-numbers": RenissanNumbersDiagram,
  "honda-after": HondaAfterDiagram,
  "hn-na-cooperation": HnNaCooperationDiagram,
  "hn-rematch-scenarios": HnRematchScenariosDiagram,
  "cn-eu-share": CnEuShareDiagram,
  "cn-eu-tariffs": CnEuTariffsDiagram,
  "cn-eu-factories": CnEuFactoriesDiagram,
  "cn-eu-minprice": CnEuMinPriceDiagram,
  "cn-eu-impact": CnEuImpactDiagram,
  "ssb-why": SsbWhyDiagram,
  "ssb-toyota": SsbToyotaDiagram,
  "ssb-nissan": SsbNissanDiagram,
  "ssb-rivals": SsbRivalsDiagram,
  "ssb-production-reality": SsbProductionRealityDiagram,
  "ev-market-share": EvMarketShareDiagram,
  "ev-toyota-strategy": EvToyotaStrategyDiagram,
  "ev-china-advance": EvChinaAdvanceDiagram,
  "ev-japan-infra": EvJapanInfraDiagram,
  "ev-cost-comparison": EvCostComparisonDiagram,
  "ev-future-scenario": EvFutureScenarioDiagram,
  "tariff-impact-summary": TariffImpactSummaryDiagram,
  "tariff-production-shift": TariffProductionShiftDiagram,
  "tariff-supply-chain-impact": TariffSupplyChainImpactDiagram,
  "tariff-nissan-crisis": TariffNissanCrisisDiagram,
  "tariff-ev-double-burden": TariffEvDoubleBurdenDiagram,
  "tariff-government-response": TariffGovernmentResponseDiagram,
  "tariff-strategic-view": TariffStrategicViewDiagram,
  "auto-tariff-earnings-numbers": AutoTariffEarningsNumbersDiagram,
  "auto-tariff-eu-impact": AutoTariffEuImpactDiagram,
  "auto-tariff-production-shift": AutoTariffProductionShiftDiagram,
  "auto-tariff-trade-talks": AutoTariffTradeTalksDiagram,
  "auto-tariff-strategic-view": AutoTariffStrategicViewDiagram,
};

export default async function AutomotiveArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = automotiveArticles.find((a) => a.slug === slug);
  if (!article) notFound();

  return (
    <div className="max-w-[720px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={article.title}
        description={article.summary}
        datePublished={article.date}
        dateModified={article.date}
        author="The Brief"
        url={`https://thebrief.info/industry/automotive/${article.slug}`}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Industry", href: "/industry" },
          { name: "自動車", href: "/industry/automotive" },
          { name: article.title, href: `/industry/automotive/${article.slug}` },
        ]}
      />

      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-12 font-medium tracking-wide">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <span className="opacity-30">›</span>
        <Link href="/industry" className="hover:text-foreground/70 transition-colors">Industry</Link>
        <span className="opacity-30">›</span>
        <Link href="/industry/automotive" className="hover:text-foreground/70 transition-colors">自動車</Link>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span className="text-[10px] tracking-[2.5px] uppercase font-semibold text-[#0ea5e9]/60">自動車</span>
          <span className="w-px h-3 bg-[#0ea5e9]/15" />
          {article.tags.map((tag) => (
            <TagLink key={tag} tag={tag} color="#ef4444" />
          ))}
        </div>
        <h1 className="font-serif text-[28px] sm:text-[36px] font-bold leading-[1.25] tracking-tight">
          <T ja={article.title} en={article.titleEn || article.title} />
        </h1>
        {article.titleEn && (
          <p className="mt-2 text-[11px] tracking-[1px] text-foreground/25 font-medium uppercase">{article.titleEn}</p>
        )}
        <p className="mt-6 text-[15px] text-foreground/65 leading-[1.9] border-l-2 border-[#0ea5e9]/20 pl-5">
          <T ja={article.summary} en={article.summaryEn ?? article.summary} />
        </p>
        <div className="mt-6 flex items-center gap-5 text-[11px] text-foreground/35 font-medium">
          <time className="tabular-nums">{article.date}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/15" />
          <span>{article.readTime}</span>
        </div>
      </header>

      <article>
        {article.sections.map((section, i) => {
          const renderBody = (body: string) => {
            const paragraphs = body.split("\n\n").filter((p) => p.trim());
            return paragraphs.map((paragraph, j) => {
              const trimmed = paragraph.trim();
              if (trimmed.startsWith("> ")) {
                return (
                  <div key={j} className="my-8 pl-5 py-4 rounded-r-lg bg-[#0ea5e9]/[0.03] dark:bg-[#0ea5e9]/[0.06] border-l-3 border-[#0ea5e9]/25">
                    <p className="text-[14px] text-foreground/70 leading-[1.9] italic"><RichText text={trimmed.slice(2)} /></p>
                  </div>
                );
              }
              if (trimmed.startsWith("【")) {
                const end = trimmed.indexOf("】");
                if (end > 0) {
                  return (
                    <div key={j} className="group pl-5 py-3 relative">
                      <div className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full bg-[#0ea5e9]/20" />
                      <div className="text-[11px] font-bold text-[#0ea5e9]/70 tracking-wide mb-1.5">{trimmed.slice(1, end)}</div>
                      <p className="text-[14px] text-foreground/75 leading-[1.9]"><RichText text={trimmed.slice(end + 1).trim()} /></p>
                    </div>
                  );
                }
              }
              return (
                <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                  <RichText text={trimmed} />
                </p>
              );
            });
          };
          const DiagramComponent = section.diagramId ? diagramMap[section.diagramId] : null;
          return (
            <section key={i} id={`section-${i}`} className="mb-20 scroll-mt-24">
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-[32px] sm:text-[40px] font-bold tabular-nums text-[#0ea5e9]/[0.08] leading-none select-none font-serif">{String(i + 1).padStart(2, "0")}</span>
                  <div className="flex-1">
                    <h2 className="font-serif text-[22px] sm:text-[26px] font-bold leading-tight tracking-tight">
                      <T ja={section.heading} en={section.headingEn || section.heading} />
                    </h2>
                    {section.headingEn && (
                      <span className="text-[10px] tracking-[2px] uppercase text-foreground/25 font-medium mt-0.5 block">{section.headingEn}</span>
                    )}
                  </div>
                </div>
                <div className="h-px bg-gradient-to-r from-[#0ea5e9]/15 via-[#0ea5e9]/5 to-transparent" />
              </div>
              <div className="space-y-6">
                {section.bodyEn ? (
                  <T
                    ja={<>{renderBody(section.body)}</>}
                    en={<>{renderBody(section.bodyEn)}</>}
                  />
                ) : (
                  renderBody(section.body)
                )}
              </div>
              {DiagramComponent && <DiagramComponent />}
            </section>
          );
        })}
      </article>

      <ShareButton title={article.title} />
      <ArticleReferences sources={article.sources} />

      <RecommendedReads currentSlug={slug} currentTags={article.tags} />

      <FAQJsonLd
        items={article.sections
          .flatMap((s) => s.body.split("\n\n").filter((p) => p.trim().startsWith("【")))
          .map((p) => {
            const end = p.indexOf("】");
            return { question: p.slice(1, end), answer: p.slice(end + 1).trim() };
          })
          .slice(0, 10)}
      />

      <div className="mt-20 pt-12 border-t border-foreground/[0.04] text-center">
        <Link href="/industry/automotive" className="inline-flex items-center gap-2 text-[12px] text-foreground/35 hover:text-foreground/60 transition-colors font-medium tracking-wide">
          ← 自動車インデックスに戻る
        </Link>
      </div>
    </div>
  );
}
