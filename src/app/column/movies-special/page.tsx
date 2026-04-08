import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";

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

type StreamingService = "netflix" | "prime" | "unext" | "hulu" | "disney" | "appletv";

type ServiceMeta = {
  label: string;
  short: string;
  bg: string;
  fg: string;
};

const SERVICES: Record<StreamingService, ServiceMeta> = {
  netflix: { label: "Netflix", short: "N", bg: "#E50914", fg: "#ffffff" },
  prime: { label: "Prime Video", short: "Prime", bg: "#00A8E1", fg: "#ffffff" },
  unext: { label: "U-NEXT", short: "U-NEXT", bg: "#000000", fg: "#ffffff" },
  hulu: { label: "Hulu", short: "hulu", bg: "#1CE783", fg: "#0b0b0b" },
  disney: { label: "Disney+", short: "D+", bg: "#113CCF", fg: "#ffffff" },
  appletv: { label: "Apple TV+", short: "tv+", bg: "#0b0b0b", fg: "#ffffff" },
};

type Film = {
  title: string;
  titleEn: string;
  year: number;
  director: string;
  directorEn: string;
  category: string;
  categoryEn: string;
  summary: string;
  summaryEn: string;
  why: string;
  whyEn: string;
  services: StreamingService[];
};

const films: Film[] = [
  {
    title: "マネー・ショート 華麗なる大逆転",
    titleEn: "The Big Short",
    year: 2015,
    director: "アダム・マッケイ",
    directorEn: "Adam McKay",
    category: "金融危機",
    categoryEn: "Financial Crisis",
    summary:
      "2008年のサブプライム住宅ローン危機を予見した投資家たちの実話。CDS、MBS、CDOといった専門用語が、テンポの良い演出と有名人によるカメオ解説で誰にでも理解できるように描かれる。",
    summaryEn:
      "The true story of investors who foresaw the 2008 subprime mortgage crisis. Technical terms like CDS, MBS, and CDO are made accessible to anyone through brisk direction and celebrity cameo explainers.",
    why: "金融商品の構造と、それが連鎖的に崩壊する仕組みを物語として体感できる。リーマン・ショックの仕組みを学ぶ最適な入口。",
    whyEn:
      "Lets you feel the structure of financial products and how they collapse in a chain reaction as a story. The best entry point for learning the mechanics of the Lehman shock.",
    services: ["netflix", "prime", "unext"],
  },
  {
    title: "マージン・コール",
    titleEn: "Margin Call",
    year: 2011,
    director: "J・C・チャンダー",
    directorEn: "J.C. Chandor",
    category: "金融危機",
    categoryEn: "Financial Crisis",
    summary:
      "リーマン・ショック前夜、ある投資銀行の24時間を描く密室劇。経営陣がリスクに気づいた瞬間から下す判断の連続が、緊張感のある会話劇として進行する。",
    summaryEn:
      "A chamber drama set over the 24 hours before the Lehman shock at an investment bank. The cascade of decisions executives make from the moment they recognize the risk plays out as a tense dialogue piece.",
    why: "投資銀行の組織の意思決定がどう行われるか、危機時に何を優先するのかが見える。",
    whyEn:
      "Shows how decisions are made inside an investment bank, and what gets prioritized in a crisis.",
    services: ["prime", "unext"],
  },
  {
    title: "インサイド・ジョブ",
    titleEn: "Inside Job",
    year: 2010,
    director: "チャールズ・ファーガソン",
    directorEn: "Charles Ferguson",
    category: "ドキュメンタリー",
    categoryEn: "Documentary",
    summary:
      "金融危機の構造的原因を、規制緩和の歴史、格付機関の責任、学界と業界の癒着といった多角的な視点から告発するアカデミー賞受賞ドキュメンタリー。",
    summaryEn:
      "An Academy Award-winning documentary that indicts the structural causes of the financial crisis from multiple angles: deregulation history, the role of rating agencies, and collusion between academia and industry.",
    why: "なぜ危機を防げなかったのか、誰が責任を負うべきだったのかを冷静に学べる。",
    whyEn:
      "A measured way to learn why the crisis could not be prevented and who should have been held responsible.",
    services: ["prime", "unext"],
  },
  {
    title: "スポットライト 世紀のスクープ",
    titleEn: "Spotlight",
    year: 2015,
    director: "トム・マッカーシー",
    directorEn: "Tom McCarthy",
    category: "報道",
    categoryEn: "Journalism",
    summary:
      "ボストン・グローブ紙の調査報道チームが、カトリック教会の児童虐待事件を暴いていく実話。取材の地道さと、組織と向き合うジャーナリズムの本質を描く。",
    summaryEn:
      "The true story of the Boston Globe's investigative team uncovering child abuse in the Catholic Church. Captures the painstaking work of reporting and the essence of journalism that confronts institutions.",
    why: "ファクトを積み重ねる報道の力と、それを支える編集体制の重要性が伝わる。",
    whyEn:
      "Conveys the power of reporting built on accumulated facts and the importance of the editorial structure that supports it.",
    services: ["netflix", "prime", "unext"],
  },
  {
    title: "ペンタゴン・ペーパーズ／最高機密文書",
    titleEn: "The Post",
    year: 2017,
    director: "スティーヴン・スピルバーグ",
    directorEn: "Steven Spielberg",
    category: "報道",
    categoryEn: "Journalism",
    summary:
      "ベトナム戦争に関する機密文書「ペンタゴン・ペーパーズ」の報道を巡る、ワシントン・ポスト紙と政府の対立を描いた作品。報道の自由という原則の重みが浮かび上がる。",
    summaryEn:
      "Depicts the standoff between the Washington Post and the government over publishing the classified Pentagon Papers about the Vietnam War. The weight of the principle of press freedom comes to the fore.",
    why: "国家機密と報道の自由が衝突したとき、メディアが何を選ぶべきかを考えさせる。",
    whyEn:
      "Asks what the media should choose when state secrets and freedom of the press collide.",
    services: ["prime", "unext"],
  },
  {
    title: "ダーク・ウォーターズ 巨大企業が恐れた男",
    titleEn: "Dark Waters",
    year: 2019,
    director: "トッド・ヘインズ",
    directorEn: "Todd Haynes",
    category: "企業倫理",
    categoryEn: "Corporate Ethics",
    summary:
      "化学大手デュポンによる有害物質PFOAの汚染を、20年以上かけて追及した弁護士の実話。企業と地域社会、規制当局の関係性が静かに描かれる。",
    summaryEn:
      "The true story of an attorney who spent more than two decades pursuing chemical giant DuPont over PFOA contamination. Quietly portrays the relationships between corporations, communities, and regulators.",
    why: "企業の社会的責任とESG投資が議論される今、外部不経済の現場を知ることができる。",
    whyEn:
      "As corporate responsibility and ESG investing are debated, this film shows the front lines of negative externalities.",
    services: ["netflix", "unext"],
  },
  {
    title: "シティズンフォー スノーデンの暴露",
    titleEn: "Citizenfour",
    year: 2014,
    director: "ローラ・ポイトラス",
    directorEn: "Laura Poitras",
    category: "ドキュメンタリー",
    categoryEn: "Documentary",
    summary:
      "NSAの大量監視プログラムを内部告発したエドワード・スノーデンに、香港のホテルで行われた取材を記録したドキュメンタリー。",
    summaryEn:
      "A documentary recording the Hong Kong hotel room interviews with Edward Snowden, who blew the whistle on the NSA's mass surveillance programs.",
    why: "プライバシー、国家、テクノロジーの三つ巴が現実の場面として記録されている。",
    whyEn:
      "Captures the three-way collision between privacy, the state, and technology as real, documented scenes.",
    services: ["prime", "unext"],
  },
  {
    title: "シリコンバレーを駆け抜けた男",
    titleEn: "The Social Network",
    year: 2010,
    director: "デヴィッド・フィンチャー",
    directorEn: "David Fincher",
    category: "テック・スタートアップ",
    categoryEn: "Tech & Startups",
    summary:
      "Facebook創業者マーク・ザッカーバーグと共同創業者の関係、訴訟、急成長を描いた群像劇。シリコンバレー型のスタートアップ文化を象徴する一本。",
    summaryEn:
      "An ensemble drama about Facebook founder Mark Zuckerberg's relationships with his co-founders, the lawsuits, and the company's explosive growth. A defining film about Silicon Valley startup culture.",
    why: "プラットフォーム企業がどう生まれ、何を犠牲にしてスケールするのかが見える。",
    whyEn:
      "Shows how a platform company is born and what it sacrifices to scale.",
    services: ["netflix", "prime"],
  },
  {
    title: "シン・ゴジラ",
    titleEn: "Shin Godzilla",
    year: 2016,
    director: "庵野秀明",
    directorEn: "Hideaki Anno",
    category: "政治・行政",
    categoryEn: "Politics & Government",
    summary:
      "未曾有の災害に直面した日本政府の意思決定プロセスを、リアルな会議シーンの連続で描く。怪獣映画の枠を超えた行政組織のドキュメンタリー的側面を持つ。",
    summaryEn:
      "Portrays the Japanese government's decision-making process in the face of an unprecedented disaster through a relentless series of realistic meeting scenes. A kaiju film with a documentary-like view of government bureaucracy.",
    why: "日本の縦割り行政・閣議・自衛隊の指揮系統がどう動くかを物語として理解できる。",
    whyEn:
      "Lets you understand, as a story, how Japan's siloed bureaucracy, cabinet meetings, and Self-Defense Forces chain of command actually move.",
    services: ["prime", "unext", "hulu"],
  },
  {
    title: "13ミニッツ ヒトラー暗殺、13分の誤算",
    titleEn: "13 Minutes",
    year: 2015,
    director: "オリヴァー・ヒルシュビーゲル",
    directorEn: "Oliver Hirschbiegel",
    category: "戦争・政治",
    categoryEn: "War & Politics",
    summary:
      "1939年、ヒトラー暗殺を試みた一人の市井の職人ゲオルク・エルザーの実話。全体主義の中で個人がどう抵抗を選択したかを問い直す。",
    summaryEn:
      "The true story of Georg Elser, an ordinary craftsman who attempted to assassinate Hitler in 1939. The film reexamines how an individual chooses to resist within a totalitarian regime.",
    why: "民主主義が損なわれていく過程と、個人の判断の重さを考える契機になる。",
    whyEn:
      "A prompt to think about the process by which democracy erodes and the weight of individual judgment.",
    services: ["prime", "unext"],
  },
];

function ServiceBadge({ service }: { service: StreamingService }) {
  const meta = SERVICES[service];
  return (
    <span
      title={meta.label}
      aria-label={meta.label}
      className="inline-flex items-center justify-center rounded-md text-[10px] font-bold tracking-tight px-2 py-1 min-w-[28px]"
      style={{
        backgroundColor: meta.bg,
        color: meta.fg,
        fontFamily:
          service === "netflix"
            ? "Impact, 'Helvetica Neue', Helvetica, Arial, sans-serif"
            : undefined,
        letterSpacing: service === "netflix" ? "0.5px" : undefined,
      }}
    >
      {meta.short}
    </span>
  );
}

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
        <span><T ja="映画特集" en="Movies Special" /></span>
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
          <T
            ja={<>ニュースを、<br className="hidden sm:block" />物語で深掘りする10本</>}
            en={<>10 films that take<br className="hidden sm:block" />the news deeper through story</>}
          />
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          <T
            ja="金融危機、報道の自由、企業倫理、戦争、行政の意思決定。TheBriefが日々追いかけるテーマを、映画という形で立体的に体験できる作品を10本選びました。週末や休暇の1本に、政治・経済を読む解像度を上げる時間を。"
            en="Financial crises, press freedom, corporate ethics, war, government decision-making. We picked ten films that let you experience, in three dimensions, the themes The Brief covers every day. Use a weekend or holiday viewing to sharpen how you read politics and economics."
          />
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {films
            .filter((f, idx, arr) => arr.findIndex((x) => x.category === f.category) === idx)
            .map((f) => (
              <span
                key={f.category}
                className="text-[10px] px-2.5 py-1 rounded-full font-medium"
                style={{
                  color: ACCENT,
                  backgroundColor: `${ACCENT}12`,
                }}
              >
                <T ja={f.category} en={f.categoryEn} />
              </span>
            ))}
        </div>

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <span className="text-[10px] uppercase tracking-[1.5px] text-foreground/45">
            <T ja="主要配信サービス" en="Major streaming services" />
          </span>
          {(Object.keys(SERVICES) as StreamingService[]).map((s) => (
            <ServiceBadge key={s} service={s} />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-foreground/50 leading-relaxed">
          <T
            ja="※ 配信状況は2026年4月時点の目安です。各サービスの取り扱いは予告なく変更されるため、視聴前に最新の配信状況をご確認ください。"
            en="* Availability is a rough guide as of April 2026. Lineups may change without notice, so please check the latest status on each service before viewing."
          />
        </p>
      </section>

      {/* Films */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">
            <T ja="セレクト10本" en="The 10 selections" />
          </h2>
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
                  <T ja={f.category} en={f.categoryEn} />
                </span>
                <span className="text-[10px] tabular-nums text-foreground/45">{f.year}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                <T ja={f.title} en={f.titleEn} />
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                {f.titleEn} · <T ja="監督" en="Director" />: <T ja={f.director} en={f.directorEn} />
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                <T ja={f.summary} en={f.summaryEn} />
              </p>

              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-[1.5px] text-foreground/45">
                  <T ja="配信" en="Streaming" />
                </span>
                {f.services.map((s) => (
                  <ServiceBadge key={s} service={s} />
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">
                  <T ja={f.why} en={f.whyEn} />
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Footer nav */}
      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          <T
            ja="特集は不定期で更新します。次は読書特集もあわせてどうぞ。"
            en="Specials are updated irregularly. Be sure to check out the Reading special as well."
          />
        </p>
        <div className="flex gap-3">
          <Link
            href="/column/reading-special"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: ACCENT }}
          >
            <T ja="読書特集 →" en="Reading special →" />
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
