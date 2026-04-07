import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const COLUMN_COLOR = "#0d9488";
const ACCENT = "#7c3aed";

const URL = "https://thebrief.info/column/movies-special";
const TITLE = "映画特集 — 政治・経済・社会を読み解く名作10選";
const SUMMARY =
  "ニュースをより深く理解するための映画10本。金融危機、報道の自由、企業倫理、戦争と政治──TheBriefが扱うテーマを物語として体験できる作品をまとめました。";

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

type Film = {
  title: string;
  titleEn: string;
  year: number;
  director: string;
  category: string;
  summary: string;
  why: string;
};

const films: Film[] = [
  {
    title: "マネー・ショート 華麗なる大逆転",
    titleEn: "The Big Short",
    year: 2015,
    director: "アダム・マッケイ",
    category: "金融危機",
    summary:
      "2008年のサブプライム住宅ローン危機を予見した投資家たちの実話。CDS、MBS、CDOといった専門用語が、テンポの良い演出と有名人によるカメオ解説で誰にでも理解できるように描かれる。",
    why: "金融商品の構造と、それが連鎖的に崩壊する仕組みを物語として体感できる。リーマン・ショックの仕組みを学ぶ最適な入口。",
  },
  {
    title: "マージン・コール",
    titleEn: "Margin Call",
    year: 2011,
    director: "J・C・チャンダー",
    category: "金融危機",
    summary:
      "リーマン・ショック前夜、ある投資銀行の24時間を描く密室劇。経営陣がリスクに気づいた瞬間から下す判断の連続が、緊張感のある会話劇として進行する。",
    why: "投資銀行の組織の意思決定がどう行われるか、危機時に何を優先するのかが見える。",
  },
  {
    title: "インサイド・ジョブ",
    titleEn: "Inside Job",
    year: 2010,
    director: "チャールズ・ファーガソン",
    category: "ドキュメンタリー",
    summary:
      "金融危機の構造的原因を、規制緩和の歴史、格付機関の責任、学界と業界の癒着といった多角的な視点から告発するアカデミー賞受賞ドキュメンタリー。",
    why: "なぜ危機を防げなかったのか、誰が責任を負うべきだったのかを冷静に学べる。",
  },
  {
    title: "スポットライト 世紀のスクープ",
    titleEn: "Spotlight",
    year: 2015,
    director: "トム・マッカーシー",
    category: "報道",
    summary:
      "ボストン・グローブ紙の調査報道チームが、カトリック教会の児童虐待事件を暴いていく実話。取材の地道さと、組織と向き合うジャーナリズムの本質を描く。",
    why: "ファクトを積み重ねる報道の力と、それを支える編集体制の重要性が伝わる。",
  },
  {
    title: "ペンタゴン・ペーパーズ／最高機密文書",
    titleEn: "The Post",
    year: 2017,
    director: "スティーヴン・スピルバーグ",
    category: "報道",
    summary:
      "ベトナム戦争に関する機密文書「ペンタゴン・ペーパーズ」の報道を巡る、ワシントン・ポスト紙と政府の対立を描いた作品。報道の自由という原則の重みが浮かび上がる。",
    why: "国家機密と報道の自由が衝突したとき、メディアが何を選ぶべきかを考えさせる。",
  },
  {
    title: "ダーク・ウォーターズ 巨大企業が恐れた男",
    titleEn: "Dark Waters",
    year: 2019,
    director: "トッド・ヘインズ",
    category: "企業倫理",
    summary:
      "化学大手デュポンによる有害物質PFOAの汚染を、20年以上かけて追及した弁護士の実話。企業と地域社会、規制当局の関係性が静かに描かれる。",
    why: "企業の社会的責任とESG投資が議論される今、外部不経済の現場を知ることができる。",
  },
  {
    title: "シティズンフォー スノーデンの暴露",
    titleEn: "Citizenfour",
    year: 2014,
    director: "ローラ・ポイトラス",
    category: "ドキュメンタリー",
    summary:
      "NSAの大量監視プログラムを内部告発したエドワード・スノーデンに、香港のホテルで行われた取材を記録したドキュメンタリー。",
    why: "プライバシー、国家、テクノロジーの三つ巴が現実の場面として記録されている。",
  },
  {
    title: "シリコンバレーを駆け抜けた男",
    titleEn: "The Social Network",
    year: 2010,
    director: "デヴィッド・フィンチャー",
    category: "テック・スタートアップ",
    summary:
      "Facebook創業者マーク・ザッカーバーグと共同創業者の関係、訴訟、急成長を描いた群像劇。シリコンバレー型のスタートアップ文化を象徴する一本。",
    why: "プラットフォーム企業がどう生まれ、何を犠牲にしてスケールするのかが見える。",
  },
  {
    title: "シン・ゴジラ",
    titleEn: "Shin Godzilla",
    year: 2016,
    director: "庵野秀明",
    category: "政治・行政",
    summary:
      "未曾有の災害に直面した日本政府の意思決定プロセスを、リアルな会議シーンの連続で描く。怪獣映画の枠を超えた行政組織のドキュメンタリー的側面を持つ。",
    why: "日本の縦割り行政・閣議・自衛隊の指揮系統がどう動くかを物語として理解できる。",
  },
  {
    title: "13ミニッツ ヒトラー暗殺、13分の誤算",
    titleEn: "13 Minutes",
    year: 2015,
    director: "オリヴァー・ヒルシュビーゲル",
    category: "戦争・政治",
    summary:
      "1939年、ヒトラー暗殺を試みた一人の市井の職人ゲオルク・エルザーの実話。全体主義の中で個人がどう抵抗を選択したかを問い直す。",
    why: "民主主義が損なわれていく過程と、個人の判断の重さを考える契機になる。",
  },
];

const categories = Array.from(new Set(films.map((f) => f.category)));

export default function MoviesSpecialPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: "映画特集", href: "/column/movies-special" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span>映画特集</span>
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
          Special / Movies
        </span>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          ニュースを、
          <br className="hidden sm:block" />
          物語で深掘りする10本
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          金融危機、報道の自由、企業倫理、戦争、行政の意思決定。TheBriefが日々追いかけるテーマを、映画という形で立体的に体験できる作品を10本選びました。週末や休暇の1本に、政治・経済を読む解像度を上げる時間を。
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

      {/* Films */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">セレクト10本</h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {films.length} films
          </span>
        </div>

        <div className="space-y-4">
          {films.map((f, i) => (
            <article
              key={f.titleEn}
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
                  {f.category}
                </span>
                <span className="text-[10px] tabular-nums text-foreground/45">{f.year}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                {f.title}
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                {f.titleEn} · 監督: {f.director}
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{f.summary}</p>

              <div className="mt-4 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">{f.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          特集は不定期で更新します。次は読書特集もあわせてどうぞ。
        </p>
        <div className="flex gap-3">
          <Link
            href="/column/reading-special"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: ACCENT }}
          >
            読書特集 →
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
