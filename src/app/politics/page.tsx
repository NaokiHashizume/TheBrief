import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politics — 国会・内閣・議員",
  description:
    "衆議院・参議院の政党別議席数、内閣の顔ぶれ、主要議員の一覧。日本の政治の全体像をわかりやすくまとめます。",
  alternates: { canonical: "https://thebrief.info/politics" },
};

const sections = [
  {
    href: "/politics/diet",
    title: "国会",
    titleEn: "National Diet",
    description: "衆議院・参議院の役割と政党別議席数",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l7-4 7 4v14" />
        <path d="M9 21v-4h6v4" />
        <path d="M9 10h1" />
        <path d="M14 10h1" />
        <path d="M9 14h1" />
        <path d="M14 14h1" />
      </svg>
    ),
  },
  {
    href: "/politics/cabinet",
    title: "内閣",
    titleEn: "Cabinet",
    description: "内閣総理大臣・各大臣の顔ぶれ",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    href: "/politics/legislators",
    title: "議員",
    titleEn: "Legislators",
    description: "各政党の主要議員一覧",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {sections.map((sec) => (
          <Link
            key={sec.href}
            href={sec.href}
            className="group p-6 rounded-xl border border-brief-border dark:border-white/5 hover:border-brief-red dark:hover:border-brief-red transition-all duration-200 hover:bg-brief-red/[0.03]"
          >
            <div className="text-foreground/20 group-hover:text-brief-red transition-colors">
              {sec.icon}
            </div>
            <h2 className="font-serif text-2xl font-bold mt-5">{sec.title}</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">{sec.titleEn}</span>
            <p className="text-sm text-foreground/40 mt-2">{sec.description}</p>
            <div className="mt-4 flex items-center gap-1 text-xs text-brief-red opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* 議論中 button */}
      <Link
        href="/politics/debates"
        className="group mt-8 flex items-center justify-between w-full p-5 rounded-xl border-2 border-dashed border-brief-red/30 hover:border-brief-red hover:bg-brief-red/[0.03] transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brief-red/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-brief-red">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold">議論中</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">Debates in Progress</span>
            <p className="text-sm text-foreground/40 mt-0.5">
              国会で現在審議されている法案・議題の一覧
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-brief-red">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">View</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </Link>
    </div>
  );
}
