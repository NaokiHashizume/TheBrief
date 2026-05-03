import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  legislators,
  legislatorRankingTop,
  legislatorRankingBottom,
} from "@/lib/politics";
import { partyInfoList } from "@/lib/partyInfo";
import { LegislatorsPageContent } from "@/components/LegislatorsPage";

export const metadata: Metadata = {
  title: "議員 — 活動ランキング・政党別一覧",
  description:
    "議員活動ランキングTop5・Bottom5と各政党の議員一覧。X・ウェブサイトリンク付き。",
  alternates: { canonical: "https://thebrief.info/politics/legislators" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "議員 — 活動ランキング・政党別一覧",
    description: "議員活動ランキングTop5・Bottom5と各政党の議員一覧。X・ウェブサイトリンク付き。",
    url: "https://thebrief.info/politics/legislators",
    siteName: "The Brief",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "議員 — 活動ランキング・政党別一覧",
    description: "議員活動ランキングTop5・Bottom5と各政党の議員一覧。X・ウェブサイトリンク付き。",
  },
};

const partyOrder = [
  "自由民主党",
  "中道改革連合",
  "日本維新の会",
  "国民民主党",
  "参政党",
  "チームみらい",
  "日本共産党",
  "れいわ新選組",
  "日本保守党",
  "沖縄の風",
  "減税日本・ゆうこく連合",
  "無所属",
];

export default function LegislatorsPage() {
  const partyColors: Record<string, string> = {};
  for (const p of [...houseOfRepresentatives, ...houseOfCouncillors]) {
    partyColors[p.name] = p.color;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span><T ja="議員" en="Legislators" /></span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="議員" en="Legislators" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T ja="議員活動の総合ランキングと、政党別の議員一覧です。" en="Overall legislator activity rankings and a list of legislators by party." />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        <T ja="議員データ: 2026-02-18 第221回特別国会時点 ｜ ランキング: 2026年3月評価" en="Legislator data: as of the 221st Extraordinary Diet session, 2026-02-18 | Rankings: March 2026 evaluation" />
      </p>

      <div className="mt-10">
        <LegislatorsPageContent
          rankingTop={legislatorRankingTop}
          rankingBottom={legislatorRankingBottom}
          legislators={legislators}
          partyOrder={partyOrder}
          partyColors={partyColors}
          partyInfoList={partyInfoList}
        />
      </div>
    </div>
  );
}
