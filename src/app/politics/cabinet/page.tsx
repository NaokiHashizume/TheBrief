import type { Metadata } from "next";
import Link from "next/link";
import { cabinet } from "@/lib/politics";

export const metadata: Metadata = {
  title: "内閣 — 第2次高市内閣",
  description:
    "第2次高市内閣の全閣僚一覧。内閣総理大臣・各大臣の顔ぶれをまとめます。",
  alternates: { canonical: "https://thebrief.info/politics/cabinet" },
};

export default function CabinetPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/35 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>内閣</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">内閣</h1>
      <p className="mt-3 text-sm text-foreground/50 leading-relaxed">
        第2次高市内閣（2026年2月18日発足・第1次から全閣僚再任）の顔ぶれです。
      </p>
      <p className="mt-2 text-xs text-foreground/30">
        Last updated: 2026-04-05
      </p>

      <div className="mt-10 border border-brief-border dark:border-white/5 rounded-xl overflow-hidden">
        {/* PM highlight */}
        <div className="p-6 bg-foreground/[0.03]">
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/35">
            {cabinet[0].positionEn}
          </span>
          <div className="mt-1 flex items-baseline gap-3">
            <h2 className="font-serif text-2xl font-bold">{cabinet[0].name}</h2>
            <span className="text-sm text-foreground/40">{cabinet[0].nameEn}</span>
          </div>
          <span className="text-xs text-foreground/35">{cabinet[0].party}</span>
          {cabinet[0].note && (
            <span className="ml-2 text-xs text-brief-red">{cabinet[0].note}</span>
          )}
        </div>

        {/* Other ministers */}
        <div className="divide-y divide-brief-border dark:divide-white/5">
          {cabinet.slice(1).map((member) => (
            <div key={member.positionEn} className="px-6 py-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-foreground/35 mb-0.5">{member.position}</div>
                <div className="font-medium">{member.name}</div>
              </div>
              <div className="text-right">
                <div className="text-xs text-foreground/30">{member.nameEn}</div>
                <div className="text-xs text-foreground/25">{member.party}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
