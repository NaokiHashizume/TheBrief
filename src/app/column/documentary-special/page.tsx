import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

const COLUMN_COLOR = "#0d9488";
const ACCENT = "#0891b2";

const URL = "https://thebrief.info/column/documentary-special";
const TITLE = "ドキュメンタリー特集 — 世界の構造を映像で読み解く10本";
const SUMMARY =
  "現代の政治・経済・テクノロジー・社会問題を、データと現場取材で描き切ったドキュメンタリー10本。映画ではなく『事実』として世界の構造を体験するための特集です。";

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

type Doc = {
  title: string;
  titleEn: string;
  year: number;
  director: string;
  category: string;
  summary: string;
  why: string;
  services: StreamingService[];
};

const docs: Doc[] = [
  {
    title: "監視資本主義：デジタル社会がもたらす光と影",
    titleEn: "The Social Dilemma",
    year: 2020,
    director: "ジェフ・オルロウスキー",
    category: "テック・社会",
    summary:
      "Google・Facebook・Twitterの元社員たちが、ユーザーの注意を商品化する『監視資本主義』のメカニズムを内部告発するドキュメンタリー。アルゴリズムが社会の二極化や精神衛生にどう影響を与えているかを描く。",
    why: "SNSとアルゴリズムが個人と民主主義に与える影響を、当事者の証言で立体的に理解できる。",
    services: ["netflix"],
  },
  {
    title: "コーディング・バイアス",
    titleEn: "Coded Bias",
    year: 2020,
    director: "シャリーニ・カンタヤ",
    category: "AI・倫理",
    summary:
      "MITメディアラボの研究者ジョイ・ブオラムウィニが、顔認識AIが黒人女性を正しく認識しないことに気づいた発見から始まる物語。アルゴリズムに潜む差別と、それを規制しようとする市民運動を追う。",
    why: "『AIは中立』という幻想を解体し、誰がデータを作り、誰が責任を負うべきかを問う。",
    services: ["netflix"],
  },
  {
    title: "シーピラシー：偽りの魚",
    titleEn: "Seaspiracy",
    year: 2021,
    director: "アリ・タブリージ",
    category: "環境・食",
    summary:
      "海洋汚染と漁業の闇を追ったショッキングな調査報道。プラスチック問題よりも商業漁業の方が海洋生態系に大きな打撃を与えているという主張を、世界各地での取材で展開する。",
    why: "『持続可能な水産物』というラベルの裏側を疑う視点を与える。賛否両論あるが議論の出発点として有用。",
    services: ["netflix"],
  },
  {
    title: "アメリカン・ファクトリー",
    titleEn: "American Factory",
    year: 2019,
    director: "スティーブン・ボグナー、ジュリア・ライカート",
    category: "経済・労働",
    summary:
      "オバマ夫妻のプロデュース会社が手掛けたアカデミー賞受賞作。閉鎖したGM工場跡に進出した中国企業『福耀ガラス』とアメリカ人労働者の文化衝突を、3年間の密着取材で描く。",
    why: "グローバル化、製造業の空洞化、労使関係を一つの工場の物語として体験できる。",
    services: ["netflix"],
  },
  {
    title: "ザ・トゥルー・コスト ― ファストファッション 真の代償",
    titleEn: "The True Cost",
    year: 2015,
    director: "アンドリュー・モーガン",
    category: "経済・労働",
    summary:
      "ファストファッション産業のサプライチェーンを世界各地で取材し、安価な衣服の裏で起きている労働搾取と環境破壊を告発する。バングラデシュ・ラナプラザ崩落事故が物語の起点となる。",
    why: "サプライチェーン責任という現代企業の重要テーマを、消費者の視点から考えさせる。",
    services: ["prime", "unext"],
  },
  {
    title: "シチズンフォー スノーデンの暴露",
    titleEn: "Citizenfour",
    year: 2014,
    director: "ローラ・ポイトラス",
    category: "報道・自由",
    summary:
      "NSA（米国家安全保障局）の元職員エドワード・スノーデンが、香港のホテルで世界最大の機密暴露を行うリアルタイムの記録。アカデミー賞長編ドキュメンタリー賞受賞作。",
    why: "国家による監視と内部告発の倫理という、21世紀最大の自由のテーマを当事者の声で記録した一級資料。",
    services: ["prime", "unext"],
  },
  {
    title: "なぜビリー・アイリッシュはエンパス（共感者）なのか",
    titleEn: "Billie Eilish: The World's a Little Blurry",
    year: 2021,
    director: "R・J・カトラー",
    category: "メンタルヘルス・社会",
    summary:
      "Z世代のアイコン、ビリー・アイリッシュの10代後半に密着。音楽産業の変容、SNSとセレブリティ、若者のメンタルヘルスを、一人のアーティストを通じて描く。",
    why: "現代の若者文化と精神衛生の問題が、単なる『現象』ではなく構造的な背景を持つことが見える。",
    services: ["appletv"],
  },
  {
    title: "失敗の研究 ― エンロン",
    titleEn: "Enron: The Smartest Guys in the Room",
    year: 2005,
    director: "アレックス・ギブニー",
    category: "企業・経済",
    summary:
      "アメリカ史上最大級の企業破綻となったエンロン事件の構造を、関係者の証言と社内資料で再現したドキュメンタリー。会計不正、規制緩和、企業文化、ストックオプションといった現代企業の問題を凝縮する。",
    why: "コーポレートガバナンスと会計不正という普遍的テーマの教科書。今読んでも古びない。",
    services: ["prime", "unext"],
  },
  {
    title: "FYRE：夢に終わった史上最高のパーティー",
    titleEn: "FYRE: The Greatest Party That Never Happened",
    year: 2019,
    director: "クリス・スミス",
    category: "テック・経済",
    summary:
      "インフルエンサーマーケティングを駆使して大成功するはずだった音楽フェスティバル『FYRE』の崩壊を追う。SNS時代の詐欺、シリコンバレー流の楽観主義、消費者心理が交差する現代の寓話。",
    why: "インフルエンサー経済とハイプ・サイクルの危うさを、一つの事件として理解できる。",
    services: ["netflix"],
  },
  {
    title: "13th －憲法修正第13条－",
    titleEn: "13th",
    year: 2016,
    director: "エイヴァ・デュヴァーネイ",
    category: "政治・人権",
    summary:
      "アメリカの大量投獄問題を、奴隷制廃止を定めた憲法修正第13条の『例外条項』から読み解く。BLM運動以前から、構造的人種差別の歴史を実証的に追ったアカデミー賞ノミネート作。",
    why: "現代アメリカの人種問題と刑事司法を、歴史の連続性として理解できる必見作。",
    services: ["netflix"],
  },
];

const categories = Array.from(new Set(docs.map((d) => d.category)));

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

export default function DocumentarySpecialPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: "ドキュメンタリー特集", href: "/column/documentary-special" },
        ]}
      />

      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span>ドキュメンタリー特集</span>
      </div>

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
          Special / Documentaries
        </span>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          世界の構造を、
          <br className="hidden sm:block" />
          事実で読み解く10本
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          監視資本主義、AIの倫理、サプライチェーン、企業不祥事、刑事司法、内部告発。映画ではなく『事実』として世界の構造を理解するための10本を選びました。週末の数時間で、ニュースの読み解き方が確実に深くなります。
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

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <span className="text-[10px] uppercase tracking-[1.5px] text-foreground/45">
            主要配信サービス
          </span>
          {(Object.keys(SERVICES) as StreamingService[]).map((s) => (
            <ServiceBadge key={s} service={s} />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-foreground/50 leading-relaxed">
          ※ 配信状況は2026年4月時点の目安です。各サービスの取り扱いは予告なく変更されるため、視聴前に最新の配信状況をご確認ください。
        </p>
      </section>

      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">セレクト10本</h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {docs.length} films
          </span>
        </div>

        <div className="space-y-4">
          {docs.map((d, i) => (
            <article
              key={d.titleEn}
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
                  {d.category}
                </span>
                <span className="text-[10px] tabular-nums text-foreground/45">{d.year}</span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                {d.title}
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                {d.titleEn} · 監督: {d.director}
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{d.summary}</p>

              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <span className="text-[10px] uppercase tracking-[1.5px] text-foreground/45">
                  配信
                </span>
                {d.services.map((s) => (
                  <ServiceBadge key={s} service={s} />
                ))}
              </div>

              <div className="mt-4 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">{d.why}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-2xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          特集は不定期で更新します。映画特集・読書特集もあわせてどうぞ。
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
