import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/middle-school-exam-economics";
const TITLE = "中学受験の経済学 — 総額と『投資対効果』を冷静に計算する";
const SUMMARY =
  "首都圏では小学6年生の約5人に1人が中学受験に挑む時代になりました。一方で塾代・学費・寄付金を合算するとトータルの負担は1,000万円を超えるケースも珍しくありません。中学受験を『教育投資』として見たときの総額・回収期間・代替案を、感情を抜いて整理します。";
const DATE = "2026-04-08";

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

type Section = {
  n: string;
  heading: string;
  headingEn: string;
  lead?: string;
  blocks: Block[];
};

type Block =
  | { type: "p"; text: string }
  | { type: "label"; label: string; text: string }
  | { type: "callout"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; caption?: string; headers: string[]; rows: string[][] };

const sections: Section[] = [
  {
    n: "01",
    heading: "中学受験の現在地 — 首都圏で5人に1人",
    headingEn: "The Landscape",
    lead: "中学受験は『一部の特殊な家庭の選択』ではなく、首都圏では珍しくない選択肢になりました。",
    blocks: [
      {
        type: "p",
        text: "首都圏（東京・神奈川・千葉・埼玉）の小6生のうち中学受験率は約20%（2024年度）。東京23区に限れば30%を超えます。10年前と比べて約1.5倍に増えました。少子化が進むなかで受験者『率』が上昇しており、中学受験は確実に大衆化しています。",
      },
      {
        type: "p",
        text: "背景には、①公立中学の質への不安（学級崩壊・いじめ報道・教員不足）、②高校・大学入試改革で中高一貫校が有利になった構造、③共働き家庭の増加で塾の利便性が上がった、という3点があります。",
      },
      {
        type: "callout",
        text: "中学受験は『裕福な家庭だけの選択』から『中流家庭が背伸びして挑む受験』へと変質した。だからこそ、コストの冷静な見積もりが必要になっている。",
      },
    ],
  },
  {
    n: "02",
    heading: "総額の見積もり — 塾＋私立中高6年間",
    headingEn: "Total Cost Estimate",
    lead: "中学受験のコストは『塾代』と『入学後の学費』の2階建てで考える必要があります。",
    blocks: [
      {
        type: "table",
        caption: "中学受験までにかかる塾代の目安（大手進学塾）",
        headers: ["学年", "通塾", "年間費用"],
        rows: [
          ["小4", "週2回", "約 50〜60万円"],
          ["小5", "週3回", "約 80〜100万円"],
          ["小6", "週4回＋日曜特訓＋夏期・冬期講習", "約 130〜160万円"],
          ["3年間合計", "—", "約 260〜320万円"],
        ],
      },
      {
        type: "p",
        text: "これに加えて模試代、過去問集、特別講座、受験料（1校2〜3万円×複数校）、入学手続き金などで＋50〜80万円。塾だけで中学入学までに『300〜400万円』というのが現実的なラインです。",
      },
      {
        type: "table",
        caption: "私立中高6年間の費用（東京都の私立中高一貫校・平均）",
        headers: ["項目", "中学3年間", "高校3年間"],
        rows: [
          ["授業料", "約 150万円", "約 130万円"],
          ["入学金・施設費", "約 50万円", "—"],
          ["制服・教材", "約 30万円", "約 20万円"],
          ["修学旅行・行事", "約 50万円", "約 60万円"],
          ["寄付金（任意）", "約 0〜30万円", "約 0〜30万円"],
          ["小計", "約 280万円", "約 240万円"],
        ],
      },
      {
        type: "callout",
        text: "塾代＋私立中高6年間で『総額700〜900万円』が東京の中流家庭の標準ライン。寄付金や個別塾の併用でさらに+200万円になるケースも普通。",
      },
    ],
  },
  {
    n: "03",
    heading: "公立中＋公立高 vs 私立中高一貫",
    headingEn: "Public vs Private Path",
    lead: "比較するべき選択肢は『中学受験して私立中高一貫』vs『公立中→公立高校受験→大学受験』です。",
    blocks: [
      {
        type: "table",
        caption: "中学〜高校6年間の家計負担の概算（東京都・標準的なケース）",
        headers: ["パス", "塾代", "学費", "合計（中高6年）"],
        rows: [
          ["私立中高一貫", "300〜400万円（小4〜6）", "約 520万円", "約 820〜920万円"],
          ["公立中＋公立高（+塾）", "約 150〜200万円（中1〜高3）", "約 80万円", "約 230〜280万円"],
        ],
      },
      {
        type: "p",
        text: "差額は単純計算で約500〜700万円。これがそのまま『中学受験というパスを選んだ家計の負担増』です。仮に小4から大学卒業までの12年間で見れば、私立医学部や留学を含むケースを除いても、中学受験パスは公立パスより数百万円〜1,000万円程度コストが高いと考えてよいでしょう。",
      },
      {
        type: "label",
        label: "見落としがちな『機会費用』",
        text: "総額の差500〜700万円を、新NISAでオルカン（年5%想定）で運用していたら、12年後には約900万円〜1,250万円。これが教育投資の機会費用です。判断の際は『学費』ではなく『学費＋投資できなかった金額』で考える必要があります。",
      },
    ],
  },
  {
    n: "04",
    heading: "投資対効果（ROE）の試算 — 何を回収するのか",
    headingEn: "What Are You Buying?",
    lead: "中学受験の『リターン』は何でしょうか。金銭的リターン・教育的リターン・心理的リターンに分けて考えます。",
    blocks: [
      {
        type: "label",
        label: "金銭的リターン — 大卒生涯年収の差",
        text: "厚労省『賃金構造基本統計調査』では、大卒男性の生涯年収は平均約2.7億円、高卒は約2.1億円。差は約6,000万円ですが、これは『大学に行ったかどうか』の差であり、私立中高一貫に行ったかどうかの差ではありません。公立進学校から国立大学に進む方が、結果として生涯年収が高くなることもあります。",
      },
      {
        type: "label",
        label: "教育的リターン — 環境とピアグループ",
        text: "私立中高一貫の真の価値は『学習環境とピアグループ』だと言われます。同質の学力・家庭背景を持つ友人に囲まれ、6年間切れ目のないカリキュラムで進学準備ができる、という点です。これは数字に表れにくいリターンで、家庭の価値観によって評価が分かれます。",
      },
      {
        type: "label",
        label: "心理的リターン — 親の安心感",
        text: "実は中学受験の最大の動機は『親の安心感』だと指摘する教育社会学者もいます。『良い中学に入れさえすれば、その後はレールに乗ってくれる』という安心を、数百万円で買っている、という見方です。安心感は数値化できませんが、コストとして自覚すべきリターンです。",
      },
      {
        type: "callout",
        text: "中学受験は『将来の年収のため』ではなく『環境と安心感のため』。この区別ができていないと、結果と期待がズレて家族関係が悪化する。",
      },
    ],
  },
  {
    n: "05",
    heading: "代替案 — 中学受験以外の選択肢",
    headingEn: "Alternatives",
    lead: "中学受験を選ばないとしても、教育投資の選択肢は多様です。",
    blocks: [
      {
        type: "list",
        items: [
          "①公立中→公立進学校→国立大学：もっともコスト効率が良いパス。塾代を高校受験以降に集中させる",
          "②公立中→大学附属の私立高校：高校受験で同じ環境に乗り換える『出遅れリスクの少ないパス』",
          "③公立中高一貫校：受験はあるが学費は公立並み。狭き門だが費用対効果は最高",
          "④国際バカロレア（IB）認定校：国内外の大学に進学可能。コストは高いが視野は広がる",
          "⑤海外進学準備（インターナショナルスクール・サマースクール）：差別化の選択肢として近年増加",
        ],
      },
      {
        type: "p",
        text: "重要なのは『中学受験するか・しないか』の二択ではなく、子どもの性格・家庭の経済状況・将来の選択肢を踏まえた多様なパスを並べて比較することです。",
      },
    ],
  },
  {
    n: "06",
    heading: "結論 — 数字で考えるべき3つのこと",
    headingEn: "Bottom Line",
    blocks: [
      {
        type: "list",
        items: [
          "①世帯年収の10〜15%以上を教育費に充てるのは、家計の他のリスクを高める",
          "②機会費用（投資していたら得られた額）を必ず計算に入れる",
          "③『環境を買う』のか『学歴を買う』のかを、最初に家族で言語化する",
        ],
      },
      {
        type: "p",
        text: "中学受験は『正しい選択』も『誤った選択』もありません。家庭の経済状況と価値観に合っていれば正解、合っていなければ不正解、それだけのことです。重要なのは『なんとなく周りがやっているから』で始めないこと。総額・代替案・機会費用の3点を冷静に整理すれば、後悔の少ない判断ができます。",
      },
      {
        type: "callout",
        text: "教育投資の最大のリスクは『金額の大きさ』ではなく『家庭が消耗すること』。数字を見て、無理のない範囲で選ぶ。それが最大のリターンになる。",
      },
    ],
  },
];

export default function MiddleSchoolExamEconomicsPage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-16">
      <ArticleJsonLd
        title={TITLE}
        description={SUMMARY}
        datePublished={DATE}
        dateModified={DATE}
        author="The Brief"
        url={URL}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: TITLE, href: URL },
        ]}
      />

      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-10 font-medium tracking-wide flex-wrap">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <span className="opacity-30">/</span>
        <Link href="/column" className="hover:text-foreground/70 transition-colors">Column</Link>
        <span className="opacity-30">/</span>
        <span className="text-foreground/60 line-clamp-1">{TITLE}</span>
      </nav>

      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span
            className="text-[10px] tracking-[2.5px] uppercase font-semibold px-2.5 py-1 rounded-md border"
            style={{
              color: COLUMN_COLOR,
              borderColor: `${COLUMN_COLOR}33`,
              backgroundColor: `${COLUMN_COLOR}10`,
            }}
          >
            Column
          </span>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
            教育 / 家計
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <span style={{ color: COLUMN_COLOR }}>中学受験</span>
          <span className="text-foreground/70">の経済学</span>
          <br className="hidden sm:block" />
          <span className="text-foreground/70 text-[20px] sm:text-[28px]">— 総額と『投資対効果』を冷静に計算する</span>
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          The Economics of Middle-School Entrance Exams
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${COLUMN_COLOR}40` }}
        >
          {SUMMARY}
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{DATE}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>約 12 分</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>全 6 章</span>
        </div>
      </header>

      <nav className="mb-16 relative">
        <div className="relative p-6 sm:p-8 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.015]">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${COLUMN_COLOR}14`, color: COLUMN_COLOR }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="8" y1="6" x2="21" y2="6" />
                <line x1="8" y1="12" x2="21" y2="12" />
                <line x1="8" y1="18" x2="21" y2="18" />
                <line x1="3" y1="6" x2="3.01" y2="6" />
                <line x1="3" y1="12" x2="3.01" y2="12" />
                <line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </div>
            <span className="text-[10px] tracking-[2.5px] uppercase text-foreground/40 font-semibold">
              Contents
            </span>
          </div>
          <ol className="space-y-0">
            {sections.map((s, i) => (
              <li key={s.n}>
                <a
                  href={`#section-${s.n}`}
                  className="group flex items-center gap-4 py-2.5 text-foreground/70 hover:text-foreground transition-colors"
                >
                  <span
                    className="text-[11px] tabular-nums font-semibold w-5 text-right"
                    style={{ color: `${COLUMN_COLOR}90` }}
                  >
                    {s.n}
                  </span>
                  <span className="text-[13px] font-medium">{s.heading}</span>
                </a>
                {i < sections.length - 1 && (
                  <div className="ml-[30px] h-px bg-foreground/[0.04]" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <article>
        {sections.map((s) => (
          <section key={s.n} id={`section-${s.n}`} className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-[36px] sm:text-[44px] font-bold tabular-nums leading-none select-none font-serif"
                  style={{ color: `${COLUMN_COLOR}1A` }}
                >
                  {s.n}
                </span>
                <div className="flex-1">
                  <h2 className="font-serif text-[22px] sm:text-[28px] font-bold leading-tight tracking-tight">
                    {s.heading}
                  </h2>
                  <span className="mt-0.5 block text-[10px] tracking-[2px] uppercase text-foreground/30 font-medium">
                    {s.headingEn}
                  </span>
                </div>
              </div>
              <div
                className="h-px"
                style={{
                  background: `linear-gradient(to right, ${COLUMN_COLOR}30, ${COLUMN_COLOR}08, transparent)`,
                }}
              />
            </div>

            {s.lead && (
              <p className="text-[16px] text-foreground/85 leading-[2] tracking-[0.02em] mb-6">
                {s.lead}
              </p>
            )}

            <div className="space-y-5">
              {s.blocks.map((b, j) => {
                if (b.type === "p") {
                  return (
                    <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                      {b.text}
                    </p>
                  );
                }
                if (b.type === "label") {
                  return (
                    <div key={j} className="group pl-5 py-3 relative">
                      <div
                        className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                        style={{ backgroundColor: `${COLUMN_COLOR}33` }}
                      />
                      <div
                        className="text-[11px] font-bold tracking-wide mb-1.5"
                        style={{ color: `${COLUMN_COLOR}CC` }}
                      >
                        {b.label}
                      </div>
                      <p className="text-[14.5px] text-foreground/75 leading-[1.95]">{b.text}</p>
                    </div>
                  );
                }
                if (b.type === "callout") {
                  return (
                    <div
                      key={j}
                      className="my-2 pl-5 py-4 rounded-r-lg border-l-[3px]"
                      style={{
                        backgroundColor: `${COLUMN_COLOR}0D`,
                        borderColor: `${COLUMN_COLOR}55`,
                      }}
                    >
                      <p className="text-[14px] text-foreground/80 leading-[1.9] italic">
                        {b.text}
                      </p>
                    </div>
                  );
                }
                if (b.type === "list") {
                  return (
                    <ul key={j} className="space-y-2 pl-1">
                      {b.items.map((it, k) => (
                        <li key={k} className="flex gap-3 text-[14.5px] text-foreground/75 leading-[1.9]">
                          <span
                            className="mt-[10px] h-1.5 w-1.5 flex-shrink-0 rounded-full"
                            style={{ backgroundColor: COLUMN_COLOR }}
                          />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "table") {
                  return (
                    <div key={j} className="my-4">
                      {b.caption && (
                        <div className="text-[11px] text-foreground/45 mb-2">{b.caption}</div>
                      )}
                      <div className="overflow-x-auto rounded-xl border border-foreground/[0.06]">
                        <table className="w-full text-[13px]">
                          <thead>
                            <tr style={{ backgroundColor: `${COLUMN_COLOR}0D` }}>
                              {b.headers.map((h, k) => (
                                <th
                                  key={k}
                                  className="px-3 py-2.5 text-left font-semibold"
                                  style={{ color: COLUMN_COLOR }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((row, ri) => (
                              <tr
                                key={ri}
                                className="border-t border-foreground/[0.05]"
                              >
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-3 py-2.5 text-foreground/75">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          </section>
        ))}
      </article>

      <div
        className="mt-6 rounded-2xl border p-5"
        style={{
          borderColor: `${COLUMN_COLOR}22`,
          backgroundColor: `${COLUMN_COLOR}08`,
        }}
      >
        <div
          className="text-[10px] font-bold uppercase tracking-[2.5px] mb-2"
          style={{ color: COLUMN_COLOR }}
        >
          Disclaimer
        </div>
        <p className="text-[12.5px] text-foreground/60 leading-[1.9]">
          本コラムは2026年4月時点の一般的な情報をもとにした試算です。塾代・学費・寄付金は学校・地域・年度により大きく異なります。具体的な進路選択にあたっては、各塾・学校の最新情報および家計の状況に合わせて判断してください。
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <ShareButton title={TITLE} />
      </div>

      <div className="mt-6 text-center">
        <Link
          href="/column"
          className="inline-flex items-center gap-2 text-[12px] text-foreground/40 hover:text-foreground/70 transition-colors font-medium tracking-wide"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          コラム一覧に戻る
        </Link>
      </div>
    </div>
  );
}
