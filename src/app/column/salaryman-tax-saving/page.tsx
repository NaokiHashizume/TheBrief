import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/salaryman-tax-saving";
const TITLE = "社会人のための節税方法 — 知らないと損する7つの制度";
const SUMMARY =
  "会社員でも使える節税策は意外と多い。ふるさと納税・iDeCo・新NISA・医療費控除・生命保険料控除・住宅ローン控除・特定支出控除の7つを、2026年現在の制度に沿って整理します。";
const DATE = "2026-04-07";

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
    heading: "そもそも会社員に節税余地はあるのか",
    headingEn: "Is There Room to Save?",
    lead: "「会社員は給与天引きで税金が決まるから節税できない」と言われがちですが、それは半分正しく、半分間違っています。",
    blocks: [
      {
        type: "p",
        text: "確かに会社員の給与所得は源泉徴収で計算され、フリーランスのように経費を自由に積み上げることはできません。しかし、所得税・住民税には『控除（こうじょ）』という仕組みがあり、申告すれば課税対象から差し引ける枠が存在します。控除を最大限に使うことが、会社員にとっての『節税』の本質です。",
      },
      {
        type: "p",
        text: "また、運用益が非課税になる制度（NISA・iDeCo）も実質的な節税策です。これらは申告が不要なものから、年末調整や確定申告で申告するものまで、難易度がさまざまです。本コラムでは7つの代表策を、難易度順に整理して紹介します。",
      },
      {
        type: "callout",
        text: "節税の基本式：『使える控除を漏らさない × 非課税口座を最大限活用する』。この2点に尽きます。",
      },
    ],
  },
  {
    n: "02",
    heading: "ふるさと納税 — もっとも手軽な節税の入口",
    headingEn: "Furusato Nozei",
    lead: "ふるさと納税は、自己負担2,000円で全国の自治体から返礼品が受け取れる『寄附金控除』の一種です。会社員の節税策として真っ先に挙がる定番制度です。",
    blocks: [
      {
        type: "label",
        label: "仕組み",
        text: "好きな自治体に寄附すると、寄附額から2,000円を引いた金額が、翌年の住民税（および所得税）から控除されます。年収・家族構成によって上限額が決まっており、その範囲内であれば実質負担2,000円で返礼品分だけ得をする計算になります。",
      },
      {
        type: "label",
        label: "ワンストップ特例",
        text: "1年間の寄附先が5自治体以内であれば、確定申告をしなくても申請書を郵送するだけで控除が受けられる『ワンストップ特例制度』が使えます。会社員にとっては最も手間の少ないルートです。",
      },
      {
        type: "label",
        label: "2025〜2026年の重要な変更点",
        text: "2025年10月以降、各ふるさと納税ポータルサイトによる『ポイント還元』は廃止されました。さらに2026年10月以降は地場産品基準が厳格化され、返礼品ラインナップが見直される見込みです。『お得感』のピークは過ぎつつありますが、純粋な税控除＋返礼品の枠組みは変わりません。",
      },
      {
        type: "list",
        items: [
          "上限額は年収・家族構成で変動。各ポータルのシミュレーターで必ず試算する",
          "寄附は1月〜12月の暦年単位。年末に駆け込みが集中するのでサーバーが重くなりがち",
          "ワンストップ特例は寄附した翌年1月10日必着。期限切れは確定申告で救済可能",
          "クレジットカード決済時のカード会社ポイントは引き続き付与される",
        ],
      },
    ],
  },
  {
    n: "03",
    heading: "iDeCo — 掛金が全額所得控除になる最強の老後資金",
    headingEn: "iDeCo (Defined Contribution Pension)",
    lead: "iDeCo（個人型確定拠出年金）は、自分で積み立てた掛金が全額『小規模企業共済等掛金控除』として所得控除される、節税効果の極めて高い制度です。",
    blocks: [
      {
        type: "label",
        label: "3つの税制メリット",
        text: "①拠出時：掛金が全額所得控除になる。②運用時：運用益が非課税。③受取時：退職所得控除や公的年金等控除が使える。この3点セットが揃う制度は他にありません。",
      },
      {
        type: "p",
        text: "たとえば年収500万円の会社員が月2万円（年24万円）を拠出すると、所得税・住民税合わせておおよそ年4.8万円前後の節税になります（税率約20％想定）。これが拠出を続ける限り毎年効きます。",
      },
      {
        type: "label",
        label: "2026年12月の制度改正に注意",
        text: "2026年12月施行の改正により、企業年金のない会社員の月額拠出上限が現行の23,000円から62,000円に大幅引き上げされる予定です。実際に拠出限度額が反映されるのは2027年1月引き落とし分から。節税余地が一気に広がります。",
      },
      {
        type: "list",
        items: [
          "原則60歳まで引き出せない（流動性は犠牲になる）",
          "金融機関ごとに口座管理手数料が異なる。ネット証券系は安価",
          "投資信託は信託報酬の安いインデックス型を選ぶのが基本",
          "申告は年末調整時に『小規模企業共済等掛金払込証明書』を提出するだけ",
        ],
      },
      {
        type: "callout",
        text: "節税効果と老後資金作りを同時に達成できる制度。流動性さえ許容できるなら、会社員の節税策の本命です。",
      },
    ],
  },
  {
    n: "04",
    heading: "新NISA — 運用益が一生非課税になる枠",
    headingEn: "New NISA",
    lead: "2024年に刷新された新NISAは、所得控除こそありませんが、運用益と配当が無期限・非課税になる点で実質的な節税策です。",
    blocks: [
      {
        type: "table",
        caption: "新NISAの非課税枠（2024年〜現在）",
        headers: ["項目", "つみたて投資枠", "成長投資枠", "合計"],
        rows: [
          ["年間投資上限", "120万円", "240万円", "360万円"],
          ["生涯非課税保有限度額", "—", "1,200万円まで", "1,800万円"],
          ["対象商品", "金融庁認定の投信中心", "上場株・ETF・投信", "—"],
          ["非課税期間", "無期限", "無期限", "—"],
        ],
      },
      {
        type: "p",
        text: "通常の課税口座では運用益・配当に約20.315％の税金がかかります。仮に100万円の利益が出れば約20万円が税金として消える計算ですが、NISA口座であればまるごと自分のものになります。20年・30年という長期で見ると、この差は数百万円単位になり得ます。",
      },
      {
        type: "label",
        label: "iDeCoとの使い分け",
        text: "iDeCoは『拠出時の所得控除＋老後資金』、NISAは『運用益非課税＋いつでも引き出し可能』。どちらか一方ではなく、両方を併用するのが基本戦略です。流動性が必要な分はNISAで、確実に老後まで置ける分はiDeCoで、と使い分けます。",
      },
    ],
  },
  {
    n: "05",
    heading: "医療費控除・セルフメディケーション税制",
    headingEn: "Medical Expense Deduction",
    lead: "病院にかかった年は、医療費控除を忘れずに。会社員でも確定申告で申請できる代表的な節税策です。",
    blocks: [
      {
        type: "label",
        label: "医療費控除の基本",
        text: "1年間（1〜12月）に支払った医療費が、自己負担額10万円（または所得の5％のいずれか低い方）を超えた場合、その超過分が所得から控除されます。家族分を合算して申告できるのが大きなポイントです。",
      },
      {
        type: "list",
        items: [
          "対象は本人＋生計を一にする家族の医療費合計",
          "病院・歯科・薬局に加え、通院の交通費（領収書のないバス代等もOK）も対象",
          "出産費用、医療目的の歯科矯正、レーシック、不妊治療なども原則対象",
          "美容目的・健康増進サプリなどは対象外",
        ],
      },
      {
        type: "label",
        label: "セルフメディケーション税制（特例）",
        text: "健康診断などを受けている人が、特定のOTC医薬品（市販薬）を年12,000円超購入した場合、超過分を最大8.8万円まで所得控除できる特例です。医療費控除との併用はできず、どちらか有利な方を選択します。家族の医療費合計が10万円に届かない年は、こちらが使えるか確認しましょう。",
      },
      {
        type: "callout",
        text: "領収書は捨てない。年末にまとめて家族分の医療費を集計するのが鉄則です。",
      },
    ],
  },
  {
    n: "06",
    heading: "生命保険料控除・地震保険料控除",
    headingEn: "Insurance Premium Deductions",
    lead: "民間の保険に入っている人は、年末調整で保険料控除を申告するだけで税金が戻ります。新規加入を勧める話ではなく、『すでに払っているなら必ず申告しよう』という話です。",
    blocks: [
      {
        type: "label",
        label: "生命保険料控除（新制度）",
        text: "①一般生命保険料、②介護医療保険料、③個人年金保険料、の3区分があり、それぞれ最大4万円（住民税は2.8万円）まで控除されます。3区分すべて使えば所得税で最大12万円・住民税で最大7万円の所得控除になります。",
      },
      {
        type: "label",
        label: "地震保険料控除",
        text: "地震保険料は最大5万円まで所得控除できます。火災保険単体は対象外なので、加入時に地震保険特約が付いているか確認が必要です。",
      },
      {
        type: "p",
        text: "これらは年末調整で完結するため、保険会社から10〜11月頃に届く『控除証明書』を会社に提出するだけです。提出忘れが意外に多いので、郵便物のチェックを忘れずに。",
      },
    ],
  },
  {
    n: "07",
    heading: "住宅ローン控除と特定支出控除",
    headingEn: "Mortgage & Specified Expenses",
    lead: "対象者は限られますが、当てはまれば節税効果がきわめて大きい2つの制度です。",
    blocks: [
      {
        type: "label",
        label: "住宅ローン控除（住宅借入金等特別控除）",
        text: "住宅ローンで家を購入・新築・増改築した会社員は、年末ローン残高の0.7％を所得税（足りなければ住民税の一部）から税額控除できる制度です。控除期間は新築住宅で最大13年。所得控除ではなく『税額控除』なので、節税インパクトが非常に大きいのが特徴です。",
      },
      {
        type: "list",
        items: [
          "初年度のみ確定申告が必要。2年目以降は年末調整で完結",
          "省エネ基準を満たさない新築は控除対象外。事前確認が必須",
          "床面積要件（原則50㎡以上）など細かい条件あり",
        ],
      },
      {
        type: "label",
        label: "特定支出控除（あまり知られていない）",
        text: "通勤費・転居費・研修費・資格取得費・図書費・衣服費・交際費など、業務に必要な支出を会社員でも経費的に控除できる制度です。ただし、控除の対象になるのはこれらの合計が『給与所得控除額の1/2』を超えた部分のみ。ハードルは高いですが、士業資格を取りに行く年や転勤の年など、当てはまる人は確定申告で挑戦する価値があります。",
      },
      {
        type: "callout",
        text: "住宅ローン控除は申告必須。1年目を忘れると後から取り戻すのが面倒なので、購入したその年にカレンダーへ入れておきましょう。",
      },
    ],
  },
  {
    n: "08",
    heading: "実務上の優先順位 — 何から始めるか",
    headingEn: "Where to Start",
    lead: "ここまで7つの制度を紹介しましたが、すべてを一度に始める必要はありません。難易度・効果・流動性のバランスで優先順位をつけるのが現実的です。",
    blocks: [
      {
        type: "table",
        caption: "難易度と節税インパクトの整理（編集部目安）",
        headers: ["制度", "難易度", "節税インパクト", "流動性"],
        rows: [
          ["ふるさと納税", "★☆☆", "★★☆", "—"],
          ["生命保険料控除", "★☆☆", "★☆☆", "—"],
          ["新NISA", "★★☆", "★★★（長期）", "高"],
          ["iDeCo", "★★☆", "★★★", "低（60歳まで）"],
          ["医療費控除", "★★☆", "★☆〜★★", "—"],
          ["住宅ローン控除", "★★★（初年度）", "★★★", "—"],
          ["特定支出控除", "★★★", "★☆〜★★", "—"],
        ],
      },
      {
        type: "list",
        items: [
          "まずはふるさと納税と保険料控除など『申告するだけ』の制度を漏らさない",
          "次に新NISAで運用益の非課税枠を確保する",
          "老後資金として置ける余裕資金があればiDeCoを追加（2026年12月の上限拡大も視野に）",
          "家を買う／医療費が多い／資格取得する年は、忘れず確定申告",
        ],
      },
      {
        type: "callout",
        text: "節税の本質は『将来の自分に資金を移すこと』。今年の手取りを少し減らしてでも、長期的に見て効くものから順に手を付けるのがおすすめです。",
      },
    ],
  },
];

export default function SalarymanTaxSavingPage() {
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

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-10 font-medium tracking-wide flex-wrap">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <span className="opacity-30">/</span>
        <Link href="/column" className="hover:text-foreground/70 transition-colors">Column</Link>
        <span className="opacity-30">/</span>
        <span className="text-foreground/60 line-clamp-1">{TITLE}</span>
      </nav>

      {/* Header */}
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
            ライフハック / 税金
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          社会人のための
          <br className="hidden sm:block" />
          <span style={{ color: COLUMN_COLOR }}>節税方法</span>
          <span className="text-foreground/70"> — 知らないと損する7つの制度</span>
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          A Salaryman&apos;s Guide to Tax Saving in 2026
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
          <span>約 10 分</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>全 8 章</span>
        </div>
      </header>

      {/* Table of contents */}
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

      {/* Sections */}
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

      {/* Disclaimer */}
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
          本コラムは2026年4月時点の制度の一般的な解説を目的としています。各制度の上限額・要件・税率は法改正や個々の状況により変動します。実際の適用にあたっては、勤務先の人事・総務、税務署、税理士、ファイナンシャルプランナー等の専門家に必ずご確認ください。
        </p>
      </div>

      <div className="mt-10 text-center">
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
