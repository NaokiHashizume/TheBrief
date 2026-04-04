import Link from "next/link";
import { WebsiteJsonLd } from "@/components/JsonLd";
import { sampleStories } from "@/lib/stories";
import { StoryCardCompact } from "@/components/StoryTimeline";
import { Logo } from "@/components/Logo";

const features = [
  {
    title: "ニュースを\u201C線\u201Dで追う",
    titleEn: "Storylines",
    description:
      "一つ一つのニュースは「点」でしかありません。The Briefは出来事を時系列の「線」として繋ぎ、文脈と因果関係を明確にします。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="6" r="2" />
        <circle cx="12" cy="12" r="2" />
        <circle cx="19" cy="18" r="2" />
        <line x1="6.5" y1="7.5" x2="10.5" y2="10.5" />
        <line x1="13.5" y1="13.5" x2="17.5" y2="16.5" />
      </svg>
    ),
  },
  {
    title: "わかりやすく、シンプルに",
    titleEn: "Clear & Simple",
    description:
      "専門用語を避け、誰でも理解できる言葉で伝えます。複雑な政治・経済の構造も、ビジュアルとともに直感的に把握できます。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
  },
  {
    title: "繋がりを見せる",
    titleEn: "Connected",
    description:
      "政治の決定が経済に、経済の動きが業界に、業界の変化が私たちの生活にどう影響するか。領域を超えた繋がりを伝えます。",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="18" r="3" />
        <line x1="8.5" y1="7.5" x2="15.5" y2="16.5" />
        <line x1="15.5" y1="7.5" x2="8.5" y2="16.5" />
      </svg>
    ),
  },
];

const categories = [
  {
    title: "Politics",
    titleJa: "政治",
    description: "国会・内閣・議員の構成と政策の動向",
    href: "/politics",
    color: "#e53e3e",
  },
  {
    title: "Economy",
    titleJa: "経済",
    description: "金融政策・市場動向・マクロ経済の分析",
    href: "/category/economy",
    color: "#3182ce",
  },
  {
    title: "Industry",
    titleJa: "業界",
    description: "AI・半導体・自動車・エネルギーなど各業界の最新情報",
    href: "/category/industry",
    color: "#38a169",
  },
  {
    title: "Lifestyle",
    titleJa: "生活",
    description: "政策や経済が私たちの暮らしにどう影響するか",
    href: "/category/lifestyle",
    color: "#d69e2e",
  },
  {
    title: "Opinion",
    titleJa: "オピニオン",
    description: "専門家による分析と多角的な視点",
    href: "/category/opinion",
    color: "#805ad5",
  },
  {
    title: "University",
    titleJa: "大学",
    description: "大学・教育機関の動向と研究トピック",
    href: "/category/university",
    color: "#00b5d8",
  },
];

export default function Home() {
  return (
    <div>
      <WebsiteJsonLd />

      {/* ━━━ Hero ━━━ */}
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-20 text-center">
        <div className="flex justify-center mb-8">
          <Logo className="items-center scale-150" />
        </div>

        <p className="mt-10 text-lg md:text-xl text-foreground/60 leading-relaxed max-w-2xl mx-auto">
          日本の政治・経済・業界情報・生活を
          <br className="hidden md:block" />
          もっと<span className="text-foreground font-bold">分かりやすく</span>、
          <span className="text-foreground font-bold">繋がりを持って</span>伝える。
        </p>

        <p className="mt-4 text-sm text-foreground/35 leading-relaxed max-w-xl mx-auto">
          ニュースは「点」ではなく「線」で理解する。
          The Briefは、出来事の背景・因果・影響を繋いで伝える日本語メディアです。
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/politics"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-lg hover:bg-brief-red/90 transition-colors"
          >
            Politics を見る
          </Link>
          <a
            href="#about"
            className="px-6 py-2.5 border border-brief-border dark:border-white/10 text-sm font-medium rounded-lg hover:bg-foreground/5 transition-colors"
          >
            The Briefとは
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border dark:bg-white/10" />
      </div>

      {/* ━━━ What makes The Brief different ━━━ */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">What Makes Us Different</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            他のメディアと何が違うのか
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div key={f.titleEn} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brief-red/10 text-brief-red mb-4">
                {f.icon}
              </div>
              <h3 className="font-serif text-lg font-bold">{f.title}</h3>
              <span className="text-[9px] tracking-[2px] uppercase text-foreground/25">{f.titleEn}</span>
              <p className="mt-2 text-sm text-foreground/50 leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>

        {/* Visual: point vs line */}
        <div className="mt-16 p-8 bg-foreground/[0.02] border border-brief-border dark:border-white/5 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-foreground/30">従来のニュース</span>
              <div className="mt-3 flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-foreground/15" />
                <div className="w-3 h-3 rounded-full bg-foreground/15" />
                <div className="w-3 h-3 rounded-full bg-foreground/15" />
                <div className="w-3 h-3 rounded-full bg-foreground/15" />
                <div className="w-3 h-3 rounded-full bg-foreground/15" />
              </div>
              <p className="mt-3 text-sm text-foreground/35">バラバラの「点」として伝えられる情報</p>
            </div>
            <div>
              <span className="text-[10px] tracking-[2px] uppercase text-brief-red">The Brief</span>
              <div className="mt-3 flex items-center gap-0">
                <div className="w-3 h-3 rounded-full bg-foreground/30" />
                <div className="w-12 h-0.5 bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/30" />
                <div className="w-12 h-0.5 bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-foreground/30" />
                <div className="w-12 h-0.5 bg-foreground/20" />
                <div className="w-3 h-3 rounded-full bg-brief-red" />
              </div>
              <p className="mt-3 text-sm text-foreground/50">文脈と因果で繋がれた「線」としての情報</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border dark:bg-white/10" />
      </div>

      {/* ━━━ Categories ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">Categories</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            取り扱うテーマ
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group p-5 rounded-xl border border-brief-border dark:border-white/5 hover:border-foreground/15 dark:hover:border-white/15 transition-all"
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="font-serif font-bold text-lg">{cat.title}</h3>
                <span className="text-xs text-foreground/30">{cat.titleJa}</span>
              </div>
              <p className="text-sm text-foreground/40 leading-relaxed pl-5">
                {cat.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border dark:bg-white/10" />
      </div>

      {/* ━━━ Storylines preview ━━━ */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <span className="text-[10px] tracking-[3px] uppercase text-brief-red font-medium">Storylines</span>
          <h2 className="font-serif text-2xl md:text-3xl font-bold mt-2">
            いま追っているストーリー
          </h2>
          <p className="mt-3 text-sm text-foreground/40 max-w-lg mx-auto">
            一つの出来事の始まりから現在までを時系列で追い、全体像を掴めるようにします。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleStories.map((story) => (
            <StoryCardCompact key={story.slug} story={story} />
          ))}
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4">
        <div className="h-px bg-brief-border dark:bg-white/10" />
      </div>

      {/* ━━━ CTA ━━━ */}
      <section className="max-w-3xl mx-auto px-4 py-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold">
          ニュースの「線」を、一緒に追おう。
        </h2>
        <p className="mt-4 text-sm text-foreground/40 leading-relaxed max-w-lg mx-auto">
          The Briefは始まったばかりのメディアです。日本の政治・経済・業界のいまを、
          分かりやすく繋がりを持って伝えていきます。
        </p>
        <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/politics"
            className="px-6 py-2.5 bg-brief-red text-white text-sm font-medium rounded-lg hover:bg-brief-red/90 transition-colors"
          >
            Politics から始める
          </Link>
          <a
            href="https://x.com/thebrief_jp"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 border border-brief-border dark:border-white/10 text-sm font-medium rounded-lg hover:bg-foreground/5 transition-colors flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Follow @thebrief_jp
          </a>
        </div>
      </section>
    </div>
  );
}
