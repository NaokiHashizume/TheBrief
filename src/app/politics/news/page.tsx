import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { politicsNews } from "@/lib/politicsNews";

export const metadata: Metadata = {
  title: "政治ニュース — Politics News",
  description:
    "日本の政治に関する最新ニュースをタイムライン形式で掲載。国会、内閣、選挙、外交の動向を網羅。",
  alternates: { canonical: "https://thebrief.info/politics/news" },
};

export default function PoliticsNewsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "News", href: "/politics/news" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span>News</span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="政治ニュース" en="Politics News" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T
          ja="日本の政治に関する最新ニュースをタイムライン形式で掲載しています。"
          en="Latest politics news in Japan displayed in a timeline format."
        />
      </p>

      {/* Back to politics link */}
      <div className="mt-4">
        <Link href="/politics" className="text-xs text-brief-red hover:underline">
          <T ja="← 政治トップに戻る" en="← Back to Politics" />
        </Link>
      </div>

      {/* News Timeline */}
      <div className="mt-8">
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
                      <span className="text-[10px] tabular-nums text-foreground/50">{news.time}</span>
                      <span
                        className="text-[9px] font-bold px-1.5 py-0.5 rounded text-white"
                        style={{ backgroundColor: news.tagColor }}
                      >
                        <T ja={news.tag} en={news.tagEn ?? news.tag} />
                      </span>
                    </div>
                    <h3 className={`text-sm font-medium leading-snug ${isFirst ? "text-foreground" : "text-foreground/70"}`}>
                      <T ja={news.title} en={news.titleEn ?? news.title} />
                    </h3>
                    <p className="mt-1 text-xs text-foreground/50 leading-relaxed">
                      <T ja={news.summary} en={news.summaryEn ?? news.summary} />
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
