import type { Metadata } from "next";
import Link from "next/link";
import { PoliticsContent } from "@/components/PoliticsContent";

export const metadata: Metadata = {
  title: "Politics — 国会・内閣・議員",
  description:
    "衆議院・参議院の政党別議席数、内閣の顔ぶれ、主要議員の一覧。日本の政治の全体像をわかりやすくまとめます。",
  alternates: { canonical: "https://thebrief.info/politics" },
};

export default function PoliticsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>Politics</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">Politics</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        日本の国会（衆議院・参議院）の政党別議席数、内閣の顔ぶれ、主要議員をわかりやすくまとめています。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05 ※最新の情報に基づき随時更新
      </p>

      <PoliticsContent />
    </div>
  );
}
