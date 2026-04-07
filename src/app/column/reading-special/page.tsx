import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

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
  category: string;
  summary: string;
  why: string;
};

const books: Book[] = [
  {
    title: "ファクトフルネス",
    titleEn: "Factfulness",
    year: 2018,
    author: "ハンス・ロスリング",
    category: "データ思考",
    summary:
      "世界を「分断」「悲観」「単純化」というフィルターで見てしまう人間の本能を、データで解きほぐす一冊。10の思い込みを克服する具体的な方法が示される。",
    why: "ニュースを読むときに陥りがちなバイアスを自覚するための基礎教養。",
  },
  {
    title: "ファスト&スロー",
    titleEn: "Thinking, Fast and Slow",
    year: 2011,
    author: "ダニエル・カーネマン",
    category: "行動経済学",
    summary:
      "ノーベル経済学賞受賞者カーネマンによる、人間の思考の二つのシステム（直感と熟考）を整理した古典。",
    why: "政策、投資、世論調査──意思決定が絡むすべての記事を、別の角度から読み解けるようになる。",
  },
  {
    title: "21 Lessons 21世紀の人類のための21の思考",
    titleEn: "21 Lessons for the 21st Century",
    year: 2018,
    author: "ユヴァル・ノア・ハラリ",
    category: "現代思想",
    summary:
      "AI、フェイクニュース、テロ、気候変動など、21世紀に人類が直面するテーマを21章にまとめた論考集。",
    why: "目の前のニュースを長期トレンドの中に位置づける視点を得られる。",
  },
  {
    title: "21世紀の資本",
    titleEn: "Capital in the Twenty-First Century",
    year: 2014,
    author: "トマ・ピケティ",
    category: "経済学",
    summary:
      "「r > g」── 資本収益率が経済成長率を上回るという仮説をもとに、過去300年の格差の動態を膨大なデータで描き出した話題作。",
    why: "格差問題、税制、富裕層課税の議論をする上での基礎参照。",
  },
  {
    title: "銃・病原菌・鉄",
    titleEn: "Guns, Germs, and Steel",
    year: 1997,
    author: "ジャレド・ダイアモンド",
    category: "歴史",
    summary:
      "なぜ大陸ごとに文明の発展速度が異なったのか。地理的条件と環境決定論で人類史を再構成した名著。",
    why: "国家間格差や経済的優位の起源を、長期スパンで考えるためのレンズになる。",
  },
  {
    title: "サピエンス全史",
    titleEn: "Sapiens",
    year: 2011,
    author: "ユヴァル・ノア・ハラリ",
    category: "歴史",
    summary:
      "認知革命、農業革命、科学革命を軸に、ホモ・サピエンスがいかに地球の支配種となったかを描く。貨幣、宗教、国家といった「虚構」が果たす役割の説明が秀逸。",
    why: "経済も政治も、突き詰めれば共有された物語であるという気付きを与えてくれる。",
  },
  {
    title: "ブラック・スワン",
    titleEn: "The Black Swan",
    year: 2007,
    author: "ナシーム・ニコラス・タレブ",
    category: "リスク論",
    summary:
      "予測不能で稀な、しかし極めて影響の大きい事象（ブラック・スワン）が、いかに歴史と市場を動かすかを論じる。",
    why: "金融危機、パンデミック、地政学リスク──「想定外」をどう受け止めるかの思考訓練に。",
  },
  {
    title: "国家はなぜ衰退するのか",
    titleEn: "Why Nations Fail",
    year: 2012,
    author: "ダロン・アセモグル / ジェイムズ・A・ロビンソン",
    category: "政治経済学",
    summary:
      "繁栄する国と衰退する国の差を分けるのは、地理でも文化でもなく「制度」であると主張する比較政治経済学の現代古典。",
    why: "民主主義と経済成長の関係を考えるとき、最初に開く一冊。",
  },
  {
    title: "失敗の本質",
    year: 1984,
    author: "戸部良一 ほか",
    category: "組織論",
    summary:
      "ノモンハン、ミッドウェー、ガダルカナルなど旧日本軍の作戦失敗を分析し、日本型組織の構造的な弱点を抽出した古典。",
    why: "現代日本企業や行政の意思決定にもそのまま当てはまる教訓が詰まっている。",
  },
  {
    title: "ジャーナリズムの原則",
    titleEn: "The Elements of Journalism",
    year: 2001,
    author: "ビル・コヴァッチ / トム・ローゼンスティール",
    category: "メディア論",
    summary:
      "報道は誰のためにあるのか。事実の検証、独立性、説明責任など、ジャーナリズムが守るべき10の原則を整理した教科書的存在。",
    why: "情報があふれる時代に、何を信じて何を疑うべきかの基準を与えてくれる。",
  },
];

const categories = Array.from(new Set(books.map((b) => b.category)));

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
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span>読書特集</span>
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
          ニュースの土台を、
          <br className="hidden sm:block" />
          一冊ずつ積み上げる
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          政治・経済・社会のニュースは、その背景にある思想や歴史を知ることで一気に立体的になります。TheBriefの読者にぜひ手に取ってほしい、定番と新定番の10冊を選びました。1か月に1冊、半年で読破する読書プランとしてもどうぞ。
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <span
              key={c}
              className="text-[10px] px-2.5 py-1 rounded-full font-medium"
              style={{
                color: ACCENT,
                backgroundColor: `${ACCENT}12`,
              }}
            >
              {c}
            </span>
          ))}
        </div>
      </section>

      {/* Books */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">セレクト10冊</h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {books.length} books
          </span>
        </div>

        <div className="space-y-4">
          {books.map((b, i) => (
            <article
              key={b.title}
              className="p-6 rounded-2xl border border-brief-border bg-brief-card"
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
                  {b.category}
                </span>
                <span className="text-[10px] tabular-nums text-foreground/45">{b.year}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                {b.title}
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                {b.titleEn ? `${b.titleEn} · ` : ""}著: {b.author}
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{b.summary}</p>

              <div className="mt-4 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">{b.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          特集は不定期で更新します。映画特集とあわせて、休日のインプットにどうぞ。
        </p>
        <div className="flex gap-3">
          <Link
            href="/column/movies-special"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: ACCENT }}
          >
            映画特集 →
          </Link>
          <Link
            href="/column"
            className="text-xs font-semibold underline underline-offset-4 text-foreground/60"
          >
            Columnへ戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
