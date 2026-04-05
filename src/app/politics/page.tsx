import type { Metadata } from "next";
import Link from "next/link";
import { politicsNews } from "@/lib/politicsNews";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

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
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <span>Politics</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold">Politics</h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        日本の国会（衆議院・参議院）の政党別議席数、内閣の顔ぶれ、主要議員をわかりやすくまとめています。
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        Last updated: 2026-04-04 ※最新の情報に基づき随時更新
      </p>

      {/* いまの政治 ダッシュボード */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-white border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">衆議院</div>
          <div className="text-2xl font-bold tabular-nums" style={{ color: "#3CA324" }}>316<span className="text-sm text-foreground/45">/465</span></div>
          <div className="text-[10px] text-foreground/50 mt-1">自民単独2/3超の歴史的大勝</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">内閣支持率</div>
          <div className="text-2xl font-bold tabular-nums text-brief-red">58〜64%</div>
          <div className="text-[10px] text-foreground/50 mt-1">第2次高市内閣</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">審議中法案</div>
          <div className="text-2xl font-bold tabular-nums text-brief-red">6<span className="text-sm text-foreground/45">本</span></div>
          <div className="text-[10px] text-foreground/50 mt-1">第221回特別国会</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-brief-border">
          <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">施行済</div>
          <div className="text-2xl font-bold tabular-nums text-green-500">4<span className="text-sm text-foreground/45">件</span></div>
          <div className="text-[10px] text-foreground/50 mt-1">2026年に施行</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
        {sections.map((sec) => (
          <Link
            key={sec.href}
            href={sec.href}
            className="group p-6 rounded-xl border border-brief-border hover:border-brief-red transition-all duration-200 hover:bg-brief-red/[0.03]"
          >
            <div className="text-foreground/35 group-hover:text-brief-red transition-colors">
              {sec.icon}
            </div>
            <h2 className="font-serif text-2xl font-bold mt-5">{sec.title}</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">{sec.titleEn}</span>
            <p className="text-sm text-foreground/55 mt-2">{sec.description}</p>
            <div className="mt-4 flex items-center gap-1 text-xs text-brief-red opacity-0 group-hover:opacity-100 transition-opacity">
              <span>View</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

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
            <h2 className="font-serif text-xl font-bold">審議中</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">Debates in Progress</span>
            <p className="text-sm text-foreground/55 mt-0.5">
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
            <h2 className="font-serif text-xl font-bold">成立済</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">Enacted, Not Yet Effective</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              成立したが、まだ施行されていない主要法令
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
            <h2 className="font-serif text-xl font-bold">施行済</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">Effective in 2026</span>
            <p className="text-sm text-foreground/55 mt-0.5">
              2026年に施行・発効した主要法令
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

      {/* 最新ニュース タイムライン */}
      <div className="mt-14">
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brief-red opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brief-red" />
            </span>
            <h2 className="font-serif text-xl font-bold">最新ニュース</h2>
            <span className="text-[9px] tracking-[2px] uppercase text-foreground/40">Latest</span>
          </div>
          <div className="flex-1 h-px bg-foreground/5" />
        </div>

        <div className="relative pl-6">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-foreground/5" />

          {politicsNews.map((news, i) => {
            const isFirst = i === 0;
            const prevDate = i > 0 ? politicsNews[i - 1].date : null;
            const showDate = news.date !== prevDate;

            return (
              <div key={`${news.date}-${news.time}`}>
                {showDate && (
                  <div className="relative flex items-center gap-3 pb-3 pt-1">
                    <div className="absolute left-[-19px] w-3 h-px bg-foreground/10" />
                    <span className="text-[10px] font-medium text-foreground/45 tabular-nums tracking-wider">
                      {new Date(news.date).toLocaleDateString("ja-JP", { month: "long", day: "numeric", weekday: "short" })}
                    </span>
                  </div>
                )}
                <div className="relative flex gap-4 pb-5">
                  {/* Dot */}
                  <div
                    className={`absolute left-[-21px] top-1 w-3 h-3 rounded-full border-2 ${
                      isFirst
                        ? "bg-brief-red border-brief-red"
                        : "bg-background border-white/20"
                    }`}
                  />

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] tabular-nums text-foreground/40">{news.time}</span>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white"
                        style={{ backgroundColor: news.tagColor }}
                      >
                        {news.tag}
                      </span>
                    </div>
                    <h3 className={`text-sm font-medium leading-snug ${isFirst ? "text-foreground" : "text-foreground/70"}`}>
                      {news.title}
                    </h3>
                    <p className="mt-1 text-xs text-foreground/50 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
