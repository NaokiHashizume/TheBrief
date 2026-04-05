import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { debates } from "@/lib/debates";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export function generateStaticParams() {
  return debates.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const debate = debates.find((d) => d.slug === slug);
  if (!debate) return { title: "Not Found" };
  const url = `https://thebrief.info/politics/debates/${slug}`;
  return {
    title: `${debate.title} — 審議中`,
    description: debate.summary,
    alternates: { canonical: url },
    openGraph: { title: `${debate.title} — 審議中`, description: debate.summary, url, type: "article", locale: "ja_JP", siteName: "The Brief" },
    twitter: { card: "summary_large_image" as const, title: `${debate.title} — 審議中`, description: debate.summary },
  };
}

export default async function DebateDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const debate = debates.find((d) => d.slug === slug);
  if (!debate) notFound();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "審議中", href: "/politics/debates" },
          { name: debate.title, href: `/politics/debates/${debate.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <Link href="/politics/debates" className="hover:text-foreground transition-colors">審議中</Link>
        <span>/</span>
        <span className="truncate max-w-[150px]">{debate.title}</span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span
          className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white"
          style={{ backgroundColor: debate.statusColor }}
        >
          {debate.status}
        </span>
        <span className="text-xs text-foreground/45">{debate.committee}</span>
      </div>

      <h1 className="font-serif text-2xl md:text-3xl font-bold">{debate.title}</h1>
      <span className="text-[10px] tracking-[2px] uppercase text-foreground/35">
        {debate.titleEn}
      </span>
      <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
        {debate.summary}
      </p>
      <p className="mt-2 text-xs text-foreground/40">Last updated: {debate.lastUpdated}</p>

      {/* なぜ重要か */}
      <div className="mt-6 p-4 border-l-2 border-brief-red bg-brief-red/[0.03] rounded-r-lg">
        <div className="text-[10px] tracking-wider uppercase text-brief-red font-bold mb-1">なぜ重要か</div>
        <p className="text-sm text-foreground/70 leading-relaxed">{debate.impact}</p>
      </div>

      {/* Detail */}
      <div className="mt-10">
        <SectionHeader title="概要" titleEn="Overview" />
        <div className="p-5 bg-brief-card rounded-xl text-sm text-foreground/70 leading-relaxed">
          {debate.detail}
        </div>
      </div>

      {/* Key Points */}
      <div className="mt-10">
        <SectionHeader title="ポイント" titleEn="Key Points" />
        <ul className="space-y-2">
          {debate.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="w-5 h-5 rounded-full bg-brief-red/10 text-brief-red text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-foreground/70">{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Party positions */}
      <div className="mt-10">
        <SectionHeader title="各政党の立場" titleEn="Party Positions" />
        <div className="border border-brief-border rounded-xl overflow-hidden divide-y divide-brief-border">
          {debate.parties.map((p) => (
            <div key={p.name} className="px-5 py-3 flex items-center justify-between gap-4">
              <span className="font-medium text-sm">{p.name}</span>
              <span className="text-xs text-foreground/55 text-right">{p.position}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        <SectionHeader title="審議経過" titleEn="Timeline" />
        <div className="relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-brief-border" />
          {debate.timeline.map((t, i) => {
            const isLatest = i === debate.timeline.length - 1;
            return (
              <div key={t.date} className="relative flex gap-4 pb-5 last:pb-0">
                <div
                  className={`absolute left-[-17px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    isLatest
                      ? "bg-brief-red border-brief-red"
                      : "bg-background border-foreground/20"
                  }`}
                />
                <div>
                  <span className="text-[10px] text-foreground/45 tabular-nums">{t.date}</span>
                  <p className={`text-sm mt-0.5 ${isLatest ? "text-foreground font-medium" : "text-foreground/60"}`}>
                    {t.event}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-brief-border">
        <Link
          href="/politics/debates"
          className="inline-flex items-center gap-2 text-sm text-foreground/55 hover:text-brief-red transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          審議中の一覧に戻る
        </Link>
      </div>

      {/* 関連セクション */}
      <div className="mt-12 pt-8 border-t border-brief-border">
        <h3 className="text-xs tracking-wider uppercase text-foreground/45 font-medium mb-4">関連セクション</h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/politics/passed" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/[0.03] transition-all text-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-foreground/70">成立済（未施行）</span>
          </Link>
          <Link href="/politics/enacted" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-green-500/20 hover:border-green-500/50 hover:bg-green-500/[0.03] transition-all text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-foreground/70">施行済</span>
          </Link>
          <Link href="/politics/diet" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-brief-border hover:border-foreground/20 transition-all text-sm">
            <span className="text-foreground/70">国会の仕組み</span>
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
        <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">{titleEn}</span>
      </div>
      <div className="flex-1 h-px bg-brief-border" />
    </div>
  );
}
