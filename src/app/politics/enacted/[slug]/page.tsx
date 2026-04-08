import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { enactedItems } from "@/lib/enacted";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

export function generateStaticParams() {
  return enactedItems.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = enactedItems.find((d) => d.slug === slug);
  if (!item) return { title: "Not Found" };
  const url = `https://thebrief.info/politics/enacted/${slug}`;
  return {
    title: `${item.title} — 施行済`,
    description: item.summary,
    alternates: { canonical: url },
    openGraph: { title: `${item.title} — 施行済`, description: item.summary, url, type: "article", locale: "ja_JP", siteName: "The Brief" },
    twitter: { card: "summary_large_image" as const, title: `${item.title} — 施行済`, description: item.summary },
  };
}

export default async function EnactedDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = enactedItems.find((d) => d.slug === slug);
  if (!item) notFound();

  const totalVotes = item.voteResult.for + item.voteResult.against + (item.voteResult.abstain || 0);
  const forPct = Math.round((item.voteResult.for / totalVotes) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "施行済", href: "/politics/enacted" },
          { name: item.title, href: `/politics/enacted/${item.slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <Link href="/politics/enacted" className="hover:text-foreground transition-colors"><T ja="施行済" en="Enacted" /></Link>
        <span>/</span>
        <span className="truncate max-w-[150px]"><T ja={item.title} en={item.titleEn ?? item.title} /></span>
      </div>

      {/* Header */}
      <div className="flex items-center gap-2 flex-wrap mb-3">
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full text-white bg-green-600">
          <T ja="施行済" en="Enacted" />
        </span>
        <span className="text-xs text-foreground/45"><T ja={item.committee} en={item.committeeEn ?? item.committee} /></span>
        <span className="text-xs text-foreground/50 tabular-nums">
          <T
            ja={`${item.enactedDate} 成立 → ${item.effectiveDate} 施行`}
            en={`${item.enactedDate} enacted → ${item.effectiveDate} effective`}
          />
        </span>
      </div>

      <h1 className="font-serif text-2xl md:text-3xl font-bold"><T ja={item.title} en={item.titleEn ?? item.title} /></h1>
      <span className="text-[10px] tracking-[2px] uppercase text-foreground/45">
        {item.titleEn}
      </span>
      <p className="mt-4 text-sm text-foreground/60 leading-relaxed">
        <T ja={item.summary} en={item.summaryEn ?? item.summary} />
      </p>

      {/* Vote result */}
      <div className="mt-6 p-4 bg-brief-card rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-foreground/55"><T ja="投票結果" en="Vote Result" /></span>
          <span className="text-xs text-foreground/45 tabular-nums">
            <T ja={`賛成率 ${forPct}%`} en={`${forPct}% in favor`} />
          </span>
        </div>
        <div className="h-3 rounded-full overflow-hidden bg-foreground/5 flex">
          <div
            className="h-full bg-green-500 rounded-l-full"
            style={{ width: `${forPct}%` }}
          />
          <div
            className="h-full bg-red-500"
            style={{ width: `${(item.voteResult.against / totalVotes) * 100}%` }}
          />
          {item.voteResult.abstain && (
            <div
              className="h-full bg-yellow-500/50"
              style={{ width: `${((item.voteResult.abstain) / totalVotes) * 100}%` }}
            />
          )}
        </div>
        <div className="flex items-center gap-4 mt-2 text-xs text-foreground/50">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-green-500" />
            <T ja="賛成" en="For" /> {item.voteResult.for}
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-red-500" />
            <T ja="反対" en="Against" /> {item.voteResult.against}
          </span>
          {item.voteResult.abstain && (
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-yellow-500/50" />
              <T ja="棄権" en="Abstain" /> {item.voteResult.abstain}
            </span>
          )}
        </div>
      </div>

      {/* Detail */}
      <div className="mt-10">
        <SectionHeader title="概要" titleEn="Overview" />
        <div className="p-5 bg-brief-card rounded-xl text-sm text-foreground/70 leading-relaxed">
          <T ja={item.detail} en={item.detailEn ?? item.detail} />
        </div>
      </div>

      {/* Key Points */}
      <div className="mt-10">
        <SectionHeader title="ポイント" titleEn="Key Points" />
        <ul className="space-y-2">
          {item.keyPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-400 text-[10px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                {i + 1}
              </span>
              <span className="text-foreground/70"><T ja={point} en={item.keyPointsEn?.[i] ?? point} /></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Party votes */}
      <div className="mt-10">
        <SectionHeader title="各政党の投票" titleEn="Party Votes" />
        <div className="border border-brief-border rounded-xl overflow-hidden divide-y divide-brief-border">
          {item.parties.map((p) => (
            <div key={p.name} className="px-5 py-3 flex items-center justify-between gap-4">
              <span className="font-medium text-sm"><T ja={p.name} en={p.nameEn ?? p.name} /></span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                p.vote === "賛成"
                  ? "bg-green-500/10 text-green-400"
                  : p.vote === "反対"
                    ? "bg-red-500/10 text-red-400"
                    : "bg-yellow-500/10 text-yellow-400"
              }`}>
                <T ja={p.vote} en={p.voteEn ?? p.vote} />
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="mt-10">
        <SectionHeader title="経過" titleEn="Timeline" />
        <div className="relative pl-6">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-foreground/5" />
          {item.timeline.map((t, i) => {
            const isLast = i === item.timeline.length - 1;
            return (
              <div key={t.date} className="relative flex gap-4 pb-5 last:pb-0">
                <div
                  className={`absolute left-[-17px] top-1.5 w-3 h-3 rounded-full border-2 ${
                    isLast
                      ? "bg-green-500 border-green-500"
                      : "bg-background border-white/20"
                  }`}
                />
                <div>
                  <span className="text-[10px] text-foreground/45 tabular-nums">{t.date}</span>
                  <p className={`text-sm mt-0.5 ${isLast ? "text-foreground font-medium" : "text-foreground/60"}`}>
                    <T ja={t.event} en={t.eventEn ?? t.event} />
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Impact */}
      <div className="mt-10">
        <SectionHeader title="影響・効果" titleEn="Impact" />
        <div className="p-5 border-l-2 border-green-500/50 bg-green-500/5 rounded-r-xl text-sm text-foreground/70 leading-relaxed">
          <T ja={item.impact} en={item.impactEn ?? item.impact} />
        </div>
      </div>

      <ShareButton title={item.title} />

      {/* Back link */}
      <div className="mt-12 pt-6 border-t border-brief-border">
        <Link
          href="/politics/enacted"
          className="inline-flex items-center gap-2 text-sm text-foreground/55 hover:text-green-400 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
          <T ja="施行済の一覧に戻る" en="Back to enacted laws" />
        </Link>
      </div>

      {/* 関連セクション */}
      <div className="mt-12 pt-8 border-t border-brief-border">
        <h3 className="text-xs tracking-wider uppercase text-foreground/45 font-medium mb-4"><T ja="関連セクション" en="Related Sections" /></h3>
        <div className="flex flex-wrap gap-3">
          <Link href="/politics/debates" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-brief-red/20 hover:border-brief-red/50 hover:bg-brief-red/[0.03] transition-all text-sm">
            <span className="w-2 h-2 rounded-full bg-brief-red" />
            <span className="text-foreground/70"><T ja="審議中の法案" en="Bills Under Deliberation" /></span>
          </Link>
          <Link href="/politics/passed" className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-amber-500/20 hover:border-amber-500/50 hover:bg-amber-500/[0.03] transition-all text-sm">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-foreground/70"><T ja="成立済（未施行）" en="Passed (Not Yet Enforced)" /></span>
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
