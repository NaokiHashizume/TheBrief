import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { passedItems } from "@/lib/passed";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";

export function generateStaticParams() {
  return passedItems.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = passedItems.find((d) => d.slug === slug);
  if (!item) return { title: "Not Found" };
  const url = `https://thebrief.info/politics/passed/${slug}`;
  return {
    title: `${item.title} — 成立済`,
    description: item.summary,
    alternates: { canonical: url },
    openGraph: { title: `${item.title} — 成立済`, description: item.summary, url, type: "article", locale: "ja_JP", siteName: "The Brief" },
    twitter: { card: "summary_large_image" as const, title: `${item.title} — 成立済`, description: item.summary },
  };
}

export default async function PassedDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = passedItems.find((d) => d.slug === slug);
  if (!item) notFound();

  const daysUntil = Math.ceil(
    (new Date(item.effectiveDate).getTime() - new Date("2026-04-04").getTime()) /
      (1000 * 60 * 60 * 24)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "成立済", href: "/politics/passed" },
          { name: item.title, href: `/politics/passed/${item.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <Link href="/politics/passed" className="hover:text-foreground transition-colors">成立済</Link>
        <span>/</span>
        <span className="truncate max-w-[150px]">{item.title}</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white bg-amber-600">
          成立済・未施行
        </span>
        <span className="text-xs text-foreground/45">{item.category}</span>
        <span className="text-xs text-foreground/50 tabular-nums">{item.dietSession}</span>
      </div>

      <h1 className="font-serif text-2xl md:text-3xl font-bold">{item.title}</h1>
      <span className="text-[10px] tracking-[2px] uppercase text-foreground/45">
        {item.titleEn}
      </span>
      <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
        {item.summary}
      </p>

      {/* Timeline countdown */}
      <div className="mt-6 p-4 bg-amber-500/[0.05] border border-amber-500/20 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-foreground/55">施行までのタイムライン</span>
          <span className="text-xs font-bold text-amber-400 tabular-nums">
            あと{daysUntil}日
          </span>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-amber-500" />
            <div>
              <span className="text-foreground/70 font-medium">{item.enactedDate}</span>
              <span className="text-foreground/45 ml-1">成立</span>
            </div>
          </div>
          <div className="flex-1 h-px bg-amber-500/20 relative">
            <div className="absolute left-1/2 -translate-x-1/2 -top-3 text-[9px] text-foreground/45">
              準備期間
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full border-2 border-amber-500 bg-background" />
            <div>
              <span className="text-foreground/70 font-medium">{item.effectiveDate}</span>
              <span className="text-foreground/45 ml-1">施行予定</span>
            </div>
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="mt-10">
        <SectionHeader title="概要" titleEn="Overview" />
        <div className="p-5 bg-brief-card rounded-xl text-sm text-foreground/70 leading-relaxed">
          {item.detail}
        </div>
      </div>

      {/* Key Points */}
      <div className="mt-10">
        <SectionHeader title="ポイント" titleEn="Key Points" />
        <ul className="space-y-2">
          {item.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="w-5 h-5 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-foreground/70">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Impact */}
      <div className="mt-10">
        <SectionHeader title="影響・効果" titleEn="Impact" />
        <div className="p-5 border-l-2 border-amber-500/50 bg-amber-500/5 rounded-r-xl text-sm text-foreground/70 leading-relaxed">
          {item.impact}
        </div>
      </div>

      <ShareButton title={item.title} />

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-brief-border">
        <Link
          href="/politics/passed"
          className="inline-flex items-center gap-2 text-sm text-foreground/55 hover:text-amber-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          成立済の一覧に戻る
        </Link>
      </div>

      {/* 関連セクション */}
      <div className="mt-12 pt-8 border-t border-brief-border">
        <h3 className="text-xs tracking-wider uppercase text-foreground/45 font-medium mb-4">関連セクション</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/politics/debates" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-brief-red/20 hover:border-brief-red/50 hover:bg-brief-red/[0.03] transition-all text-sm">
            <span className="w-2 h-2 rounded-full bg-brief-red" />
            <span className="text-foreground/70">審議中の法案</span>
          </Link>
          <Link href="/politics/enacted" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/[0.03] transition-all text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-foreground/70">施行済</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function SectionHeader({ title, titleEn }: { title: string; titleEn: string }) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div>
        <h2 className="font-serif text-lg font-bold">{title}</h2>
        <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">{titleEn}</span>
      </div>
      <div className="flex-1 h-px bg-foreground/5" />
    </div>
  );
}
