import type { Metadata } from "next";
import Link from "next/link";

import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { PageMasthead } from "@/components/PageMasthead";
import { debates } from "@/lib/debates";
import { passedItems } from "@/lib/passed";
import { enactedItems } from "@/lib/enacted";

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
    descriptionEn: "Roles of both chambers and seat distribution by party",
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
    descriptionEn: "Prime Minister and Cabinet ministers",
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
    descriptionEn: "Key legislators by party",
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
  const debateCount = debates.length;
  const passedCount = passedItems.length;
  const enactedCount = enactedItems.length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
        ]}
      />

      <PageMasthead
        breadcrumbs={[
          { ja: "Home", en: "Home", href: "/" },
          { ja: "Politics", en: "Politics" },
        ]}
        eyebrow="Politics Now"
        eyebrowEn="Politics Now"
        accent="#e53e3e"
        live
        title={<T ja="Politics" en="Politics" />}
        titleEn="国会・内閣・議員 — 日本政治の全体像"
        description={
          <T
            ja="日本の国会（衆議院・参議院）の政党別議席数、内閣の顔ぶれ、主要議員をわかりやすくまとめています。"
            en="A clear overview of Japan&rsquo;s National Diet (House of Representatives &amp; House of Councillors), seat distribution by party, Cabinet members, and key legislators."
          />
        }
        meta={
          <>
            Last updated: 2026-04-04{" "}
            <T
              ja="※最新の情報に基づき随時更新"
              en="— Updated regularly with the latest data"
            />
          </>
        }
        dateLabel="2026-04-04"
      />

      {/* いまの政治 ダッシュボード */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1"><T ja="衆議院" en="House of Reps" /></div>
          <div className="text-2xl font-bold tabular-nums" style={{ color: "#3CA324" }}>316<span className="text-sm text-foreground/45">/465</span></div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="自民単独2/3超の歴史的大勝" en="Historic LDP supermajority" /></div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1"><T ja="内閣支持率" en="Approval Rating" /></div>
          <div className="text-2xl font-bold tabular-nums text-brief-red">58〜64%</div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="第2次高市内閣" en="2nd Takaichi Cabinet" /></div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1"><T ja="審議中法案" en="Bills in Debate" /></div>
          <div className="text-2xl font-bold tabular-nums text-brief-red">{debateCount}<span className="text-sm text-foreground/45"><T ja="本" en="" /></span></div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="現在の審議案件総数" en="Current bills and agenda items" /></div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1"><T ja="成立済" en="Passed" /></div>
          <div className="text-2xl font-bold tabular-nums text-amber-500">{passedCount}<span className="text-sm text-foreground/45"><T ja="件" en="" /></span></div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="成立したが未施行の法令" en="Passed but not yet in effect" /></div>
        </div>
        <div className="p-4 rounded-xl bg-brief-card border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1"><T ja="施行済" en="Enacted" /></div>
          <div className="text-2xl font-bold tabular-nums text-green-500">{enactedCount}<span className="text-sm text-foreground/45"><T ja="件" en="" /></span></div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="現在の施行済法令総数" en="Currently effective laws tracked" /></div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {sections.map((sec) => (
          <Link
            key={sec.href}
            href={sec.href}
            className="group p-6 rounded-xl border border-brief-border hover:border-brief-red transition-all duration-200 hover:bg-brief-red/[0.03]"
          >
            <div className="text-foreground/45 group-hover:text-brief-red transition-colors">
              {sec.icon}
            </div>
            <h2 className="font-serif text-2xl font-bold mt-5"><T ja={sec.title} en={sec.titleEn} /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">{sec.titleEn}</span>
            <p className="text-sm text-foreground/55 mt-2"><T ja={sec.description} en={sec.descriptionEn} /></p>
            <div className="mt-4 flex items-center gap-1 text-xs text-brief-red opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* 日本が抱える課題 button */}
      <Link
        href="/politics/challenges"
        className="group mt-8 flex items-center justify-between w-full p-5 rounded-xl border-2 border-dashed border-[#ef4444]/30 hover:border-[#ef4444] hover:bg-[#ef4444]/[0.03] transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#ef4444]/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#ef4444]">
              <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold"><T ja="日本が抱える課題" en="Japan's Challenges" /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">Structural Challenges</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              <T ja="少子化・高齢化・財政・安全保障・労働力・エネルギー・食料の7課題をカテゴリ別に" en="Seven structural challenges Japan faces, organized by category" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#ef4444]">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">View</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </Link>

      {/* 審議中 button */}
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
            <h2 className="font-serif text-xl font-bold"><T ja="審議中" en="Debates in Progress" /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">Debates in Progress</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              <T ja="国会で現在審議されている法案・議題の一覧" en="Bills and topics currently under deliberation in the Diet" />
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

      {/* 成立済 button */}
      <Link
        href="/politics/passed"
        className="group mt-4 flex items-center justify-between w-full p-5 rounded-xl border-2 border-dashed border-amber-500/30 hover:border-amber-500 hover:bg-amber-500/[0.03] transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-500">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold"><T ja="成立済" en="Passed" /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">Enacted, Not Yet Effective</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              <T ja="成立したが、まだ施行されていない主要法令" en="Major laws passed but not yet in effect" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-amber-500">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">View</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </Link>

      {/* 施行済 button */}
      <Link
        href="/politics/enacted"
        className="group mt-4 flex items-center justify-between w-full p-5 rounded-xl border-2 border-dashed border-green-500/30 hover:border-green-500 hover:bg-green-500/[0.03] transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold"><T ja="施行済" en="In Effect" /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">Effective in 2026</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              <T ja="2026年に施行・発効した主要法令" en="Major laws that took effect in 2026" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-green-500">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">View</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </Link>

      {/* 官公庁リンク集 */}
      <Link
        href="/politics/government"
        className="group mt-4 flex items-center justify-between w-full p-5 rounded-xl border-2 border-dashed border-[#3b82f6]/30 hover:border-[#3b82f6] hover:bg-[#3b82f6]/[0.03] transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-[#3b82f6]">
              <path d="M3 21h18" />
              <path d="M5 21V7l7-4 7 4v14" />
              <path d="M9 21v-4h6v4" />
              <path d="M10 10h4" />
            </svg>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold"><T ja="官公庁リンク集" en="Government Directory" /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">Government Directory</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              <T ja="省庁・官公庁の公式サイトリンク集" en="Official links to government ministries and agencies" />
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[#3b82f6]">
          <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">View</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </Link>

      {/* 最新ニュース リンク */}
      <Link
        href="/politics/news"
        className="group mt-8 flex items-center justify-between w-full p-5 rounded-xl border-2 border-dashed border-brief-red/30 hover:border-brief-red hover:bg-brief-red/[0.03] transition-all duration-200"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-brief-red/10 flex items-center justify-center flex-shrink-0">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brief-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brief-red" />
            </span>
          </div>
          <div>
            <h2 className="font-serif text-xl font-bold"><T ja="最新ニュース" en="Latest News" /></h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">Politics News Timeline</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              <T ja="政治に関する最新ニュースをタイムラインで表示" en="Latest politics news in timeline format" />
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
