import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/childcare-support-fund-2026";
const TITLE = "子ども・子育て支援金の実額 — 年収別『月いくら』と2028年の1兆円";
const SUMMARY =
  "2026年4月から医療保険料に上乗せされる『子ども・子育て支援金』。年収600万円の会社員で月 **575円**、年収800万円で月 **767円**、年収1,000万円で月 **959円**。一律0.23%という支援金率の中身と、2028年度に1兆円まで段階的に引き上げられる計画を、年収別の『実額』で読み解きます。";
const SUMMARY_EN =
  "From April 2026, a new 'child and childcare support levy' is added to your health insurance premium. For salaried workers, that's roughly 575 yen/month at 6M yen income, 767 yen at 8M yen, and 959 yen at 10M yen. Behind a single 0.23% rate sits a plan to scale the total take to 1 trillion yen by FY2028 — here's what it actually costs you.";
const DATE = "2026-04-09";

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

type Bilingual = { ja: string; en: string };
type Block =
  | { type: "p"; text: Bilingual }
  | { type: "label"; label: Bilingual; text: Bilingual }
  | { type: "callout"; text: Bilingual }
  | { type: "list"; items: Bilingual[] }
  | { type: "table"; caption?: Bilingual; headers: Bilingual[]; rows: Bilingual[][] };
type Section = { n: string; headingJa: string; headingEn: string; lead?: Bilingual; blocks: Block[] };

const sections: Section[] = [
  {
    n: "01",
    headingJa: "制度の骨格 — 医療保険料に0.23%の上乗せ",
    headingEn: "How It Works — 0.23% on Top of Your Health Premium",
    lead: {
      ja: "『こども未来戦略』に基づく支援金制度は、2026年4月分の医療保険料から徴収が始まります。被用者保険での2026年度の一律支援金率は 0.23%。労使折半のため、個人負担はこのうち半分です。",
      en: "The child-support levy under the Children's Future Strategy starts with April 2026 health insurance premiums. For employees, the FY2026 rate is a flat 0.23%, split half-and-half with the employer, so your personal share is half of that.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "計算式は単純です。**標準報酬月額 × 0.0023 ÷ 2** が月々の個人負担額。ボーナスには標準賞与額を使った別計算が重なります。0.23%と聞くと『大した金額ではない』印象ですが、年収が上がるほど絶対額は増えていきます。",
          en: "The formula is simple: **standard monthly remuneration × 0.0023 ÷ 2** is what you pay each month. Bonuses have a separate calculation using the standard bonus figure. 0.23% sounds small, but the absolute amount grows with your salary.",
        },
      },
      {
        type: "label",
        label: { ja: "一律ルールの理由", en: "Why a single rate" },
        text: {
          ja: "国民健康保険や後期高齢者医療でも同じ『国が示す一律の支援金率』を使う建てつけ。制度横断で公平に薄く広く徴収するという設計思想です。",
          en: "The same single rate set by the government applies to National Health Insurance and the Late-Stage Elderly plan. The design philosophy is to spread the load thinly and uniformly across all health insurance programs.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "『独身税』という批判は的を射ていません。支援金は『子どもがいるかどうか』ではなく『医療保険に加入しているか』で決まります。独身でも、子どものいる家庭でも、年収が同じなら負担額は同じです。",
          en: "Calling this a 'single-person tax' misses the point. The levy is tied to whether you're enrolled in health insurance, not whether you have kids. Single or with kids — same income, same bill.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "年収別の実額 — 月いくら引かれるのか",
    headingEn: "The Numbers — How Much Comes Out Each Month",
    blocks: [
      {
        type: "p",
        text: {
          ja: "政府（こども家庭庁）が公表した試算に基づく、被用者保険・労使折半後の個人負担額は以下の通りです。",
          en: "Based on the Children and Families Agency's official calculations, here are the monthly personal shares after the employer split for salaried workers.",
        },
      },
      {
        type: "table",
        caption: {
          ja: "会社員の月額負担（2026年度・労使折半後）",
          en: "Monthly levy for salaried workers (FY2026, after employer split)",
        },
        headers: [
          { ja: "年収", en: "Annual income" },
          { ja: "月額", en: "Monthly" },
          { ja: "年額", en: "Annual" },
        ],
        rows: [
          [
            { ja: "200万円", en: "2M yen" },
            { ja: "192円", en: "192 yen" },
            { ja: "約2,300円", en: "~2,300 yen" },
          ],
          [
            { ja: "400万円", en: "4M yen" },
            { ja: "384円", en: "384 yen" },
            { ja: "約4,600円", en: "~4,600 yen" },
          ],
          [
            { ja: "600万円", en: "6M yen" },
            { ja: "575円", en: "575 yen" },
            { ja: "約6,900円", en: "~6,900 yen" },
          ],
          [
            { ja: "800万円", en: "8M yen" },
            { ja: "767円", en: "767 yen" },
            { ja: "約9,200円", en: "~9,200 yen" },
          ],
          [
            { ja: "1,000万円", en: "10M yen" },
            { ja: "959円", en: "959 yen" },
            { ja: "約11,500円", en: "~11,500 yen" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "年収600万円の会社員で月 **575円**、年1回のランチ2回分に満たない水準。ただし、**2028年度までに段階的に引き上げ** される予定で、最終的には現在の約1.7倍になります。",
          en: "For a worker at 6M yen income, that's **575 yen/month** — less than two restaurant lunches a year. But the rate is scheduled to rise gradually through FY2028, eventually reaching roughly 1.7× today's level.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "6,000億 → 1兆円 — 3年かけて1.7倍へ",
    headingEn: "6T → 10T Yen — A 1.7× Climb Over Three Years",
    blocks: [
      {
        type: "p",
        text: {
          ja: "こども家庭庁の試算では、支援金の徴収総額は **2026年度 約6,000億円 → 2027年度 約8,000億円 → 2028年度 約1兆円** と段階的に引き上げられます。一律支援金率も、現行の0.23%から年々上昇する設計です。",
          en: "The Children and Families Agency projects total levy revenue at roughly **600B yen in FY2026 → 800B yen in FY2027 → 1T yen in FY2028**, with the single rate itself creeping up each year from 0.23%.",
        },
      },
      {
        type: "label",
        label: { ja: "年収600万円・2028年度の試算", en: "6M yen income, FY2028 estimate" },
        text: {
          ja: "単純比例で考えれば、現在の月575円は **2028年度に月約950円〜1,000円** まで増える見込み。年額では約1.2万円の負担増です。",
          en: "On a simple pro-rata basis, the 575 yen/month today rises to roughly **950-1,000 yen/month by FY2028**. That's about 12,000 yen more per year.",
        },
      },
      {
        type: "label",
        label: { ja: "年収1,000万円・2028年度の試算", en: "10M yen income, FY2028 estimate" },
        text: {
          ja: "同じく単純比例で、月959円は **月約1,600円** 水準まで上がる見込み。年額で約1.9万円の負担増。『薄く広く』は、気づいたときには薄くなくなります。",
          en: "On the same basis, 959 yen/month at 10M yen rises to around **1,600 yen/month**, adding ~19,000 yen a year. 'Thin and wide' doesn't stay thin forever.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "何に使われるのか — 受け取る家庭の視点",
    headingEn: "Where It Goes — The Receiving Side",
    blocks: [
      {
        type: "p",
        text: {
          ja: "支援金の使い道は『こども未来戦略』の加速化プラン。柱は **児童手当の拡充（所得制限撤廃・高校生まで・第3子以降3万円）**、**出産育児一時金の引き上げ**、**育児休業給付の拡充（実質手取り10割）** など、3.6兆円規模の施策です。",
          en: "The money funds the Children's Future Strategy's acceleration plan: expanded child allowances (no income cap, through high school, 30,000 yen from the third child), higher lump-sum childbirth allowances, and parental-leave benefits that effectively replace 100% of take-home pay — a 3.6T yen package in total.",
        },
      },
      {
        type: "p",
        text: {
          ja: "年収600万円・子ども2人の世帯で見ると、児童手当の拡充だけで **年間数万円〜十数万円** の手取り増が見込まれます。支援金の年6,900円と比べれば『受け取る側』には十分見合う水準です。",
          en: "A household earning 6M yen with two children can gain tens of thousands of yen a year from the expanded child allowance alone — well above the 6,900 yen/year they pay in levy.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "個人として損得を語るより、**『世代間・世帯間の所得移転』** として理解したほうが制度の姿は掴みやすい。現役世代内の再分配として、独身・子なし世帯が子育て世帯を部分的に支える構造です。",
          en: "Rather than framing it as personal profit-and-loss, it makes more sense to see the levy as an intergenerational and inter-household transfer — a partial redistribution from single/childless households to households with kids, all within the working-age population.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "支援金は医療保険料に上乗せされるため、給与明細上は『健康保険料』の中に溶け込みます",
            en: "The levy is bundled into your health insurance premium line on the pay slip",
          },
          {
            ja: "高額療養費制度や傷病手当金など、本来の健康保険給付は一切減りません",
            en: "Core health insurance benefits (high-cost medical care, sickness allowance) are not reduced",
          },
          {
            ja: "『子育て』を直接支援するのは児童手当・育休給付などの受け取り側であって、支援金は財源側の話",
            en: "The levy is the funding side; child allowances and leave benefits are the receiving side",
          },
        ],
      },
    ],
  },
];

export default function ChildcareSupportFundPage() {
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
            <T ja="家計 / 税金" en="Household / Tax" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={
              <>
                <span style={{ color: COLUMN_COLOR }}>子育て支援金</span>
                <span className="text-foreground/70">の実額</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— 年収別『月いくら』と2028年の1兆円</span>
              </>
            }
            en={
              <>
                <span style={{ color: COLUMN_COLOR }}>The Child-Support Levy</span>
                <span className="text-foreground/70">, In Real Numbers</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— What You Actually Pay by Income, and 2028's 1 Trillion</span>
              </>
            }
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          The Child-Support Levy in Plain Numbers
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${COLUMN_COLOR}40` }}
        >
          <T ja={SUMMARY} en={SUMMARY_EN} />
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{DATE}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="約 8 分" en="~8 min read" /></span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="全 4 章" en="4 chapters" /></span>
        </div>
      </header>

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
                    <T ja={s.headingJa} en={s.headingEn} />
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
                <T ja={s.lead.ja} en={s.lead.en} />
              </p>
            )}

            <div className="space-y-5">
              {s.blocks.map((b, j) => {
                if (b.type === "p") {
                  const parts = b.text.ja.split(/\*\*(.*?)\*\*/);
                  const partsEn = b.text.en.split(/\*\*(.*?)\*\*/);
                  return (
                    <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                      <T
                        ja={
                          <>
                            {parts.map((p, i) =>
                              i % 2 === 1 ? (
                                <strong key={i} className="font-semibold text-foreground">
                                  {p}
                                </strong>
                              ) : (
                                <span key={i}>{p}</span>
                              )
                            )}
                          </>
                        }
                        en={
                          <>
                            {partsEn.map((p, i) =>
                              i % 2 === 1 ? (
                                <strong key={i} className="font-semibold text-foreground">
                                  {p}
                                </strong>
                              ) : (
                                <span key={i}>{p}</span>
                              )
                            )}
                          </>
                        }
                      />
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
                      <div className="text-[11px] font-bold tracking-wide mb-1.5" style={{ color: `${COLUMN_COLOR}CC` }}>
                        <T ja={b.label.ja} en={b.label.en} />
                      </div>
                      <p className="text-[14.5px] text-foreground/75 leading-[1.95]">
                        <T ja={b.text.ja} en={b.text.en} />
                      </p>
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
                        <T ja={b.text.ja} en={b.text.en} />
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
                          <span><T ja={it.ja} en={it.en} /></span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "table") {
                  return (
                    <div key={j} className="my-4">
                      {b.caption && (
                        <div className="text-[11px] text-foreground/45 mb-2">
                          <T ja={b.caption.ja} en={b.caption.en} />
                        </div>
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
                                  <T ja={h.ja} en={h.en} />
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {b.rows.map((row, ri) => (
                              <tr key={ri} className="border-t border-foreground/[0.05]">
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-3 py-2.5 text-foreground/75 tabular-nums">
                                    <T ja={cell.ja} en={cell.en} />
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
          <T
            ja="本コラムは2026年4月時点の制度の一般的な解説です。年収別の負担額はこども家庭庁の試算に基づく目安であり、実際の金額は標準報酬月額・加入保険・家族構成により変動します。詳細は加入している医療保険者または社会保険労務士等の専門家にご確認ください。"
            en="This column offers a general overview of the rules as of April 2026. The per-income figures are estimates from the Children and Families Agency; actual amounts vary with standard remuneration, insurance type, and household composition. Check with your insurer or a licensed social insurance labor consultant for specifics."
          />
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
          <T ja="コラム一覧に戻る" en="Back to columns" />
        </Link>
      </div>
    </div>
  );
}
