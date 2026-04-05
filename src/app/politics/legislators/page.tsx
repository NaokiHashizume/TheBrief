import type { Metadata } from "next";
import Link from "next/link";
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
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>議員</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">議員</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        議員活動の総合ランキングと、政党別の議員一覧です。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        議員データ: 2026-02-18 第221回特別国会時点 ｜ ランキング: 2026年3月評価
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
