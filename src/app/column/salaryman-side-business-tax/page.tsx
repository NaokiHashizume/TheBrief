import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/salaryman-side-business-tax";
const TITLE = "サラリーマンが副業を始める前に知る税務 — 20万円の壁から開業届まで";
const SUMMARY =
  "副業解禁の流れを受けて会社員でも副収入を得る人が増えています。一方で『20万円の壁』『開業届』『青色申告』『住民税の普通徴収』といった税務まわりの知識が抜けていると、後で痛い目に遭います。副業を始める前に最低限知っておきたい税務の基本を整理します。";
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
    heading: "20万円の壁の正体",
    headingEn: "The 200K Threshold",
    lead: "副業税務でもっとも有名な『20万円ルール』。意味を正確に理解している人は意外と少数派です。",
    blocks: [
      {
        type: "p",
        text: "『副業所得が年20万円以下なら確定申告不要』と聞いたことがあるはずです。これは正しいのですが、対象になっているのは『所得税』だけです。住民税は1円から申告義務があります。",
      },
      {
        type: "label",
        label: "20万円ルールの正確な定義",
        text: "給与所得者で、給与・退職所得以外の所得（副業の所得）の合計が年20万円以下の場合、所得税の確定申告は不要。ここでの『所得』は『収入−必要経費』のことで、売上ベースではありません。",
      },
      {
        type: "label",
        label: "見落としがちな住民税",
        text: "所得税の申告が不要でも、住民税の申告は別途必要です。市区町村役場で『住民税申告書』を出すことになります。20万円以下だから何もしなくていい、は誤りです。",
      },
      {
        type: "callout",
        text: "20万円ルールは『所得税の特例』であって『住民税の免除』ではない。住民税は1円から申告対象。",
      },
    ],
  },
  {
    n: "02",
    heading: "副業の所得区分 — 雑所得と事業所得の境目",
    headingEn: "Miscellaneous vs Business Income",
    lead: "副業の収入は『雑所得』か『事業所得』に分類されます。どちらに区分されるかで税制メリットが大きく違います。",
    blocks: [
      {
        type: "table",
        caption: "雑所得と事業所得の比較",
        headers: ["観点", "雑所得", "事業所得"],
        rows: [
          ["青色申告", "不可", "可（最大65万円控除）"],
          ["損益通算", "給与と通算不可", "給与と通算可"],
          ["損失の繰越", "不可", "3年間可"],
          ["開業届", "不要", "必要"],
          ["対象となる副業", "単発・趣味的・小規模", "継続性・反復性・営利性のあるもの"],
        ],
      },
      {
        type: "p",
        text: "事業所得として認められれば、青色申告特別控除65万円、損益通算、損失の繰越という3つのメリットが使えます。一方、ハードルもあり、2022年の所得税基本通達改正で『収入が300万円以下の副業は、原則として雑所得とする』という方針が示されました。",
      },
      {
        type: "label",
        label: "事業所得として認められる条件",
        text: "①継続性・反復性がある、②営利目的で行っている、③社会通念上、事業と認められる規模・実態である、④帳簿（複式簿記）を作成している、⑤独立した収入源として確立している。300万円以下でも、これらを満たし帳簿が完備されていれば事業所得として認められる余地はあります。",
      },
    ],
  },
  {
    n: "03",
    heading: "開業届と青色申告承認申請書",
    headingEn: "Filing for Sole Proprietorship",
    lead: "事業所得を狙うなら、最初に2つの書類を税務署に出します。",
    blocks: [
      {
        type: "label",
        label: "①個人事業の開業・廃業等届出書（開業届）",
        text: "事業を開始した日から1ヶ月以内に税務署に提出します。提出はオンライン（e-Tax）でも可能。提出しても税負担はゼロですが、出さないと青色申告ができません。なお、副業が会社にバレるかどうかとは関係ありません（後述）。",
      },
      {
        type: "label",
        label: "②所得税の青色申告承認申請書",
        text: "青色申告をしたい年の3月15日まで（または開業から2ヶ月以内）に提出します。これを出さないと自動的に白色申告になり、最大65万円の特別控除が使えなくなります。",
      },
      {
        type: "label",
        label: "③（任意）青色事業専従者給与に関する届出書",
        text: "配偶者や親族に手伝ってもらい給料を払う場合、この届出を出すことで給料を経費にできます。家族経営の副業ではよく使われます。",
      },
      {
        type: "callout",
        text: "開業届＋青色申告承認申請書は『出すだけ無料・出さないと損する』典型例。副業が事業の体をなしてきたら速やかに提出を。",
      },
    ],
  },
  {
    n: "04",
    heading: "経費にできるもの・できないもの",
    headingEn: "Deductible Expenses",
    lead: "経費の判断は『事業のために使ったか』が基準です。プライベートと混在する支出は『家事按分』で計算します。",
    blocks: [
      {
        type: "list",
        items: [
          "○ 事業専用のPC・ソフト・サーバー代・ドメイン代",
          "○ 仕事用の書籍・有料情報・セミナー受講料",
          "○ 取材・打ち合わせの交通費・カフェ代（記録があれば）",
          "○ 自宅を仕事場とする場合の家賃・電気代の按分（作業時間や面積比）",
          "△ スマホ代・通信費（事業用と私用の比率で按分）",
          "× 私的な飲食・娯楽・洋服代",
          "× 健康診断・人間ドック（事業に直接関係しない）",
        ],
      },
      {
        type: "label",
        label: "家事按分の考え方",
        text: "自宅の一部を仕事に使う場合、面積比または使用時間比で按分するのが一般的です。たとえば60m²の住居のうち15m²を仕事専用にしているなら25%が経費。家賃15万円なら3.75万円が月の経費になります。説明のつく按分根拠と記録（写真・図面・スケジュール）を残しておくことが大切です。",
      },
      {
        type: "label",
        label: "30万円未満の少額減価償却資産",
        text: "青色申告事業者なら、1個あたり30万円未満のPC・カメラ等を一括で経費計上できます（年間合計300万円まで）。20万円のMacBookを買って初年度に全額経費にできるのは、青色申告の大きなメリットです。",
      },
    ],
  },
  {
    n: "05",
    heading: "会社に副業がバレない（と言われる）方法",
    headingEn: "Keeping It Off the Books",
    lead: "副業がバレる経路の9割は『住民税の通知』です。これを断つのが第一歩。",
    blocks: [
      {
        type: "p",
        text: "会社員の住民税は通常、給与から天引き（特別徴収）されています。副業所得が増えると、住民税の総額も増え、会社に届く住民税通知書から『この人、給与以外にも収入があるな』と気づかれます。",
      },
      {
        type: "label",
        label: "住民税を『普通徴収』に切り替える",
        text: "確定申告書の第二表に『住民税に関する事項』があり、給与・公的年金等以外の所得に係る住民税の徴収方法を『自分で納付（普通徴収）』にチェックを入れます。これにより副業分の住民税は自宅に納付書が届き、会社を経由しなくなります。",
      },
      {
        type: "label",
        label: "ただし完璧ではない",
        text: "自治体によっては技術的・実務的な理由で普通徴収への切り替えに応じないケース、給与扱いの副業（パート・アルバイト）は普通徴収にできないケースもあります。さらに、社会保険の扶養範囲を超えた場合は別の経路でバレる可能性も。確実性を求めるなら、就業規則を確認し、堂々と申告するのがベストです。",
      },
      {
        type: "callout",
        text: "『バレない副業』を狙うより『バレても問題ない副業』を選ぶ方が、長い目で見れば安全。多くの会社は2018年の副業解禁通達以降、容認方向に動いている。",
      },
    ],
  },
  {
    n: "06",
    heading: "始める前にやるべきチェックリスト",
    headingEn: "Pre-Launch Checklist",
    blocks: [
      {
        type: "list",
        items: [
          "①就業規則で副業が禁止・許可制になっていないか確認",
          "②本業の競業避止義務に抵触しないか確認",
          "③副業用の銀行口座・クレジットカードを分ける",
          "④経費の領収書を保存する仕組みを作る（クラウド会計ソフト推奨）",
          "⑤年20万円を超えそうなら確定申告を予定表に入れる",
          "⑥事業所得を狙うなら開業届＋青色申告承認申請書を提出",
          "⑦住民税は普通徴収を選択",
          "⑧売上が1,000万円を超えそうならインボイス・消費税の検討",
        ],
      },
      {
        type: "p",
        text: "副業は『やってみないと自分に合うかわからない』面が大きく、最初から完璧な税務対応をする必要はありません。ただし、上のチェックリストの①②と③④は最初から押さえておく方が後で楽です。年末になって慌てて領収書をかき集める、という事態は避けましょう。",
      },
      {
        type: "callout",
        text: "副業の税務は『難しい』のではなく『手順を踏めば誰でもできる』。最大の敵は『面倒くさい』と感じた瞬間の先延ばし。",
      },
    ],
  },
];

export default function SalarymanSideBusinessTaxPage() {
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
            副業 / 税金
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <span style={{ color: COLUMN_COLOR }}>サラリーマンが副業を始める前に知る税務</span>
          <br className="hidden sm:block" />
          <span className="text-foreground/70 text-[20px] sm:text-[28px]">— 20万円の壁から開業届まで</span>
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          Tax Basics for the Salaried Side-Hustler
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
          <span>約 11 分</span>
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
          本コラムは2026年4月時点の制度の一般的な解説を目的としています。所得区分の判定・経費認定・申告手続きは個別の事業実態により異なります。実際の副業開始・申告にあたっては、税務署または税理士にご確認ください。
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
