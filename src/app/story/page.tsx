import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { getAllStories } from "@/lib/getStories";
import { StoryCardCompact } from "@/components/StoryTimeline";
import { T } from "@/components/T";

export const metadata: Metadata = {
  title: "Story — 連載ストーリー",
  description:
    "日銀の金融政策、半導体戦争、自動運転など、日本経済・産業の重要テーマを時系列で追う連載ストーリー。",
  alternates: { canonical: "https://thebrief.info/story" },
};

export default async function StoryListPage() {
  const stories = await getAllStories();

  const ongoingStories = stories.filter((s) => s.status === "ongoing");
  const concludedStories = stories.filter((s) => s.status === "concluded");

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Story", href: "/story" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <span>Story</span>
      </div>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-brief-red/10 text-brief-red">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            </svg>
          </div>
          <div>
            <h1 className="font-serif text-3xl md:text-4xl font-bold">
              Story
            </h1>
            <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
              <T ja="連載ストーリー" en="Ongoing Stories" />
            </span>
          </div>
        </div>
        <p className="mt-3 text-sm text-foreground/60 leading-relaxed max-w-2xl">
          <T ja="日本経済・産業の重要テーマを時系列で追う連載ストーリー。一つのニュースだけでは見えない、大きな流れと背景を読み解きます。" en="Ongoing stories tracking key themes in Japan's economy and industry. Follow the bigger picture that single news stories can't capture." />
        </p>
      </div>

      <div className="h-px bg-brief-border mb-8" />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-10">
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-brief-red">
            {stories.length}
          </div>
          <div className="text-[10px] text-foreground/50 mt-1">
            <T ja="ストーリー数" en="Stories" />
          </div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-foreground/80">
            {stories.reduce((sum, s) => sum + s.episodes.length, 0)}
          </div>
          <div className="text-[10px] text-foreground/50 mt-1">
            <T ja="エピソード数" en="Episodes" />
          </div>
        </div>
        <div className="p-3 rounded-xl border border-brief-border bg-brief-card text-center">
          <div className="text-2xl font-bold text-[#14b8a6]">
            {ongoingStories.length}
          </div>
          <div className="text-[10px] text-foreground/50 mt-1"><T ja="連載中" en="Ongoing" /></div>
        </div>
      </div>

      {/* Ongoing Stories */}
      {ongoingStories.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] tracking-[2px] uppercase font-medium text-brief-red">
              <T ja="連載中" en="Ongoing" />
            </span>
            <div className="h-px flex-1 bg-brief-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ongoingStories.map((story) => (
              <StoryCardCompact key={story.slug} story={story} />
            ))}
          </div>
        </section>
      )}

      {/* Concluded Stories */}
      {concludedStories.length > 0 && (
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-[10px] tracking-[2px] uppercase font-medium text-foreground/45">
              <T ja="完結" en="Concluded" />
            </span>
            <div className="h-px flex-1 bg-brief-border" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {concludedStories.map((story) => (
              <StoryCardCompact key={story.slug} story={story} />
            ))}
          </div>
        </section>
      )}

      {/* More coming */}
      <div className="mt-4 p-5 rounded-xl border border-dashed border-brief-border text-center">
        <p className="text-sm text-foreground/45 italic">
          <T ja="ストーリーは順次追加されます。" en="More stories will be added over time." />
        </p>
      </div>
    </div>
  );
}
