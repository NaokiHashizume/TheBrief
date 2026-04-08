import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";
const ACCENT = "#d97706";

const URL = "https://thebrief.info/column/reading-special";
const TITLE = "読書特集 — 政治・経済・社会を考えるための10冊";
const SUMMARY =
  "ニュースの背景にある思想や歴史を学ぶための10冊。経済学、行動科学、政治哲学、ジャーナリズム──TheBriefの読者に刺さる定番と新定番をまとめました。";

export const metadata: Metadata = {
  title: `${TITLE} — Column | The Brief`,
  description: SUMMARY,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: SUMMARY,
    url: URL,
    type: "article",
    locale: "ja_JP",
    siteName: "The Brief",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SUMMARY,
  },
};

type Book = {
  title: string;
  titleEn?: string;
  year: number;
  author: string;
  authorEn: string;
  category: string;
  categoryEn: string;
  summary: string;
  summaryEn: string;
  why: string;
  whyEn: string;
};

const books: Book[] = [
  {
    title: "ファクトフルネス",
    titleEn: "Factfulness",
    year: 2018,
    author: "ハンス・ロスリング",
    authorEn: "Hans Rosling",
    category: "データ思考",
    categoryEn: "Data Thinking",
    summary:
      "世界を「分断」「悲観」「単純化」というフィルターで見てしまう人間の本能を、データで解きほぐす一冊。10の思い込みを克服する具体的な方法が示される。",
    summaryEn:
      "Uses data to unravel the human instincts that make us see the world through filters of division, pessimism, and oversimplification. Offers concrete ways to overcome ten common misconceptions.",
    why: "ニュースを読むときに陥りがちなバイアスを自覚するための基礎教養。",
    whyEn:
      "Foundational reading for becoming aware of the biases we tend to fall into when reading the news.",
  },
  {
    title: "ファスト&スロー",
    titleEn: "Thinking, Fast and Slow",
    year: 2011,
    author: "ダニエル・カーネマン",
    authorEn: "Daniel Kahneman",
    category: "行動経済学",
    categoryEn: "Behavioral Economics",
    summary:
      "ノーベル経済学賞受賞者カーネマンによる、人間の思考の二つのシステム（直感と熟考）を整理した古典。",
    summaryEn:
      "A classic by Nobel laureate Kahneman that organizes human thought into two systems: intuition and deliberation.",
    why: "政策、投資、世論調査──意思決定が絡むすべての記事を、別の角度から読み解けるようになる。",
    whyEn:
      "Lets you read any article involving decision-making — policy, investing, polling — from a different angle.",
  },
  {
    title: "21 Lessons 21世紀の人類のための21の思考",
    titleEn: "21 Lessons for the 21st Century",
    year: 2018,
    author: "ユヴァル・ノア・ハラリ",
    authorEn: "Yuval Noah Harari",
    category: "現代思想",
    categoryEn: "Contemporary Thought",
    summary:
      "AI、フェイクニュース、テロ、気候変動など、21世紀に人類が直面するテーマを21章にまとめた論考集。",
    summaryEn:
      "A collection of 21 essays on the issues humanity faces in the 21st century, including AI, fake news, terrorism, and climate change.",
    why: "目の前のニュースを長期トレンドの中に位置づける視点を得られる。",
    whyEn:
      "Helps you situate today's headlines within long-term trends.",
  },
  {
    title: "21世紀の資本",
    titleEn: "Capital in the Twenty-First Century",
    year: 2014,
    author: "トマ・ピケティ",
    authorEn: "Thomas Piketty",
    category: "経済学",
    categoryEn: "Economics",
    summary:
      "「r > g」── 資本収益率が経済成長率を上回るという仮説をもとに、過去300年の格差の動態を膨大なデータで描き出した話題作。",
    summaryEn:
      "A landmark work that traces 300 years of inequality with vast datasets, building on the hypothesis 'r > g' — that the rate of return on capital exceeds the rate of economic growth.",
    why: "格差問題、税制、富裕層課税の議論をする上での基礎参照。",
    whyEn:
      "A baseline reference for discussions of inequality, tax systems, and wealth taxation.",
  },
  {
    title: "銃・病原菌・鉄",
    titleEn: "Guns, Germs, and Steel",
    year: 1997,
    author: "ジャレド・ダイアモンド",
    authorEn: "Jared Diamond",
    category: "歴史",
    categoryEn: "History",
    summary:
      "なぜ大陸ごとに文明の発展速度が異なったのか。地理的条件と環境決定論で人類史を再構成した名著。",
    summaryEn:
      "Why did civilizations develop at such different speeds across continents? A celebrated work that reconstructs human history through geography and environmental determinism.",
    why: "国家間格差や経済的優位の起源を、長期スパンで考えるためのレンズになる。",
    whyEn:
      "A lens for thinking about the long-term origins of inequality between nations and economic dominance.",
  },
  {
    title: "サピエンス全史",
    titleEn: "Sapiens",
    year: 2011,
    author: "ユヴァル・ノア・ハラリ",
    authorEn: "Yuval Noah Harari",
    category: "歴史",
    categoryEn: "History",
    summary:
      "認知革命、農業革命、科学革命を軸に、ホモ・サピエンスがいかに地球の支配種となったかを描く。貨幣、宗教、国家といった「虚構」が果たす役割の説明が秀逸。",
    summaryEn:
      "Tells how Homo sapiens came to dominate the planet through the cognitive, agricultural, and scientific revolutions. Especially sharp on the role of 'fictions' like money, religion, and the state.",
    why: "経済も政治も、突き詰めれば共有された物語であるという気付きを与えてくれる。",
    whyEn:
      "Brings the realization that, at bottom, both economics and politics are shared stories.",
  },
  {
    title: "ブラック・スワン",
    titleEn: "The Black Swan",
    year: 2007,
    author: "ナシーム・ニコラス・タレブ",
    authorEn: "Nassim Nicholas Taleb",
    category: "リスク論",
    categoryEn: "Risk Theory",
    summary:
      "予測不能で稀な、しかし極めて影響の大きい事象（ブラック・スワン）が、いかに歴史と市場を動かすかを論じる。",
    summaryEn:
      "Argues how rare, unpredictable, but high-impact events — black swans — drive history and markets.",
    why: "金融危機、パンデミック、地政学リスク──「想定外」をどう受け止めるかの思考訓練に。",
    whyEn:
      "Mental training for how to absorb the 'unexpected' — financial crises, pandemics, geopolitical risk.",
  },
  {
    title: "国家はなぜ衰退するのか",
    titleEn: "Why Nations Fail",
    year: 2012,
    author: "ダロン・アセモグル / ジェイムズ・A・ロビンソン",
    authorEn: "Daron Acemoglu / James A. Robinson",
    category: "政治経済学",
    categoryEn: "Political Economy",
    summary:
      "繁栄する国と衰退する国の差を分けるのは、地理でも文化でもなく「制度」であると主張する比較政治経済学の現代古典。",
    summaryEn:
      "A modern classic of comparative political economy arguing that what separates prosperous nations from declining ones is neither geography nor culture, but institutions.",
    why: "民主主義と経済成長の関係を考えるとき、最初に開く一冊。",
    whyEn:
      "The first book to open when thinking about the relationship between democracy and economic growth.",
  },
  {
    title: "失敗の本質",
    year: 1984,
    author: "戸部良一 ほか",
    authorEn: "Ryoichi Tobe et al.",
    category: "組織論",
    categoryEn: "Organization Theory",
    summary:
      "ノモンハン、ミッドウェー、ガダルカナルなど旧日本軍の作戦失敗を分析し、日本型組織の構造的な弱点を抽出した古典。",
    summaryEn:
      "A classic that analyzes the operational failures of the former Japanese military at Nomonhan, Midway, Guadalcanal and elsewhere to extract the structural weaknesses of Japanese-style organizations. (Title literally: 'The Essence of Failure.')",
    why: "現代日本企業や行政の意思決定にもそのまま当てはまる教訓が詰まっている。",
    whyEn:
      "Packed with lessons that apply directly to decision-making in modern Japanese companies and government.",
  },
  {
    title: "ジャーナリズムの原則",
    titleEn: "The Elements of Journalism",
    year: 2001,
    author: "ビル・コヴァッチ / トム・ローゼンスティール",
    authorEn: "Bill Kovach / Tom Rosenstiel",
    category: "メディア論",
    categoryEn: "Media Studies",
    summary:
      "報道は誰のためにあるのか。事実の検証、独立性、説明責任など、ジャーナリズムが守るべき10の原則を整理した教科書的存在。",
    summaryEn:
      "Who is journalism for? A textbook-like work that lays out the ten principles journalism should uphold, including verification of facts, independence, and accountability.",
    why: "情報があふれる時代に、何を信じて何を疑うべきかの基準を与えてくれる。",
    whyEn:
      "Provides a yardstick for what to trust and what to question in an age of information overload.",
  },
];

export default function ReadingSpecialPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: "読書特集", href: "/column/reading-special" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span><T ja="読書特集" en="Reading Special" /></span>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-[30px] border px-6 py-10 md:px-10 md:py-14"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}14, ${COLUMN_COLOR}08, rgba(255,255,255,0.6))`,
        }}
      >
        <span
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{
            color: ACCENT,
            borderColor: `${ACCENT}40`,
            backgroundColor: `${ACCENT}12`,
          }}
        >
          Special / Reading
        </span>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          <T
            ja={<>ニュースの土台を、<br className="hidden sm:block" />一冊ずつ積み上げる</>}
            en={<>Build the foundations of the news,<br className="hidden sm:block" />one book at a time</>}
          />
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          <T
            ja="政治・経済・社会のニュースは、その背景にある思想や歴史を知ることで一気に立体的になります。TheBriefの読者にぜひ手に取ってほしい、定番と新定番の10冊を選びました。1か月に1冊、半年で読破する読書プランとしてもどうぞ。"
            en="News about politics, economics, and society becomes far richer when you know the ideas and history behind it. We picked ten books — established classics and new staples — that we want every Brief reader to pick up. Try it as a six-month reading plan, one book a month."
          />
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {books
            .filter((b, idx, arr) => arr.findIndex((x) => x.category === b.category) === idx)
            .map((b) => (
              <span
                key={b.category}
                className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  color: ACCENT,
                  backgroundColor: `${ACCENT}12`,
                }}
              >
                <T ja={b.category} en={b.categoryEn} />
              </span>
            ))}
        </div>
      </section>

      {/* Books */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">
            <T ja="セレクト10冊" en="The 10 selections" />
          </h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {books.length} books
          </span>
        </div>

        <div className="space-y-4">
          {books.map((b, i) => (
            <article
              key={b.title}
              className="p-6 rounded-xl border border-brief-border bg-brief-card"
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide"
                  style={{
                    color: ACCENT,
                    backgroundColor: `${ACCENT}12`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold"
                  style={{
                    color: COLUMN_COLOR,
                    backgroundColor: `${COLUMN_COLOR}12`,
                  }}
                >
                  <T ja={b.category} en={b.categoryEn} />
                </span>
                <span className="text-[10px] tabular-nums text-foreground/45">{b.year}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                <T ja={b.title} en={b.titleEn ?? b.title} />
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                {b.titleEn ? `${b.titleEn} · ` : ""}
                <T ja="著" en="Author" />: <T ja={b.author} en={b.authorEn} />
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                <T ja={b.summary} en={b.summaryEn} />
              </p>

              <div className="mt-4 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">
                  <T ja={b.why} en={b.whyEn} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          <T
            ja="特集は不定期で更新します。映画特集とあわせて、休日のインプットにどうぞ。"
            en="Specials are updated irregularly. Pair this with the Movies special for a weekend of inputs."
          />
        </p>
        <div className="flex gap-3">
          <Link
            href="/column/movies-special"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: ACCENT }}
          >
            <T ja="映画特集 →" en="Movies special →" />
          </Link>
          <Link
            href="/column"
            className="text-xs font-semibold underline underline-offset-4 text-foreground/60"
          >
            <T ja="Columnへ戻る" en="Back to Column" />
          </Link>
        </div>
      </div>
    </div>
  );
}
