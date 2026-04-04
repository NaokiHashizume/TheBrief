import type { Metadata } from "next";
import Link from "next/link";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  legislators,
} from "@/lib/politics";
import { LegislatorsByParty } from "@/components/LegislatorsByParty";

export const metadata: Metadata = {
  title: "議員 — 各政党の主要議員",
  description:
    "各政党の主要議員一覧。ウェブサイト・SNSへのリンク付き。",
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
        各政党の主要議員一覧。ウェブサイト・SNSへのリンク付き。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05
      </p>

      <div className="mt-10">
        <LegislatorsByParty
          legislators={legislators}
          partyOrder={partyOrder}
          partyColors={partyColors}
        />
      </div>
    </div>
  );
}
