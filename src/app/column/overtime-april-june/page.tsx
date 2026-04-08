import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/overtime-april-june";
const TITLE = "なぜ4月から6月は残業したらダメなのか";
const SUMMARY =
  "「4〜6月の残業は損」とよく言われる理由を、社会保険料の仕組み（標準報酬月額と定時決定）から分かりやすく解説。仕組みを知ると、1年間の手取りが変わります。";
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
  leadEn?: string;
  blocks: Block[];
};

type Block =
  | { type: "p"; text: string; textEn: string }
  | { type: "label"; label: string; labelEn: string; text: string; textEn: string }
  | { type: "callout"; text: string; textEn: string }
  | { type: "list"; items: string[]; itemsEn: string[] }
  | { type: "table"; caption?: string; captionEn?: string; headers: string[]; headersEn: string[]; rows: string[][]; rowsEn: string[][] };

const sections: Section[] = [
  {
    n: "01",
    heading: "「4〜6月は残業するな」は本当か",
    headingEn: "Is It Really True?",
    lead: "社会人になると先輩から「4月から6月の残業はやめとけ」と言われることがあります。これは迷信でも精神論でもなく、日本の社会保険制度の仕組みから導かれる、かなり合理的なアドバイスです。",
    leadEn: "New workers often hear from senior colleagues: \"Don't work overtime from April to June.\" This isn't superstition or folk wisdom — it's a rational piece of advice derived from the mechanics of Japan's social insurance system.",
    blocks: [
      {
        type: "p",
        text: "ポイントは、この3ヶ月間の給与が、その後1年間にわたる社会保険料（健康保険・厚生年金・介護保険）の金額を決めてしまう、という点にあります。つまり一時的な残業代の分だけ収入が増えても、その代償として毎月の天引き額が上がり、年単位で見ると手取りが減ってしまう、というケースが実際に存在します。",
        textEn: "The key point is that your salary during these three months determines your social insurance premiums (health insurance, employees' pension, long-term care insurance) for the following year. Your income rises temporarily thanks to overtime pay, but monthly deductions increase as a result, and there are real cases where your annual take-home pay ends up lower.",
      },
      {
        type: "callout",
        text: "4〜6月の給与 → 9月からの社会保険料が決まる。この1点がすべての出発点です。",
        textEn: "April–June salary determines your social insurance premiums starting in September. This single point is the starting line for everything.",
      },
    ],
  },
  {
    n: "02",
    heading: "鍵は「標準報酬月額」という考え方",
    headingEn: "Standard Monthly Remuneration",
    lead: "社会保険料は、実際の給与そのものではなく「標準報酬月額（ひょうじゅんほうしゅうげつがく）」という区切りのよい金額を使って計算されます。",
    leadEn: "Social insurance premiums are calculated not from your actual salary but from a rounded figure called the \"standard monthly remuneration\" (hyojun hoshu getsugaku).",
    blocks: [
      {
        type: "label",
        label: "標準報酬月額とは",
        labelEn: "What It Is",
        text: "給与を一定の幅（等級）に区切り、その等級に対応する金額のことを標準報酬月額と呼びます。たとえば「月給28万円〜30万円の人は29万円」といった具合に、区切りごとに一つの代表額が割り当てられます。",
        textEn: "Salaries are grouped into brackets (grades), and the figure assigned to each bracket is the standard monthly remuneration. For example, anyone earning 280,000–300,000 yen per month might be assigned 290,000 yen as their representative figure.",
      },
      {
        type: "label",
        label: "なぜこの仕組みなのか",
        labelEn: "Why This System",
        text: "毎月の給与が1円単位で変動しても保険料が毎月動いてしまっては計算が煩雑になります。そこで「ひと区切りの代表額」を使うことで、事務負担と本人の見通しやすさを両立しているわけです。",
        textEn: "If premiums shifted with every one-yen change in monthly salary, the calculation would become unwieldy. Using a bracket-based representative figure keeps administrative burden down while making things predictable for the worker.",
      },
      {
        type: "p",
        text: "そしてこの等級は、健康保険料・介護保険料・厚生年金保険料すべてのベースになります。等級が1段上がるだけで、毎月の天引き額も数千円〜1万円単位で変わってくる、というのがポイントです。",
        textEn: "This grade becomes the base for health insurance, long-term care insurance, and employees' pension premiums alike. Moving up just one grade can change your monthly deductions by several thousand yen, sometimes upwards of 10,000 yen.",
      },
    ],
  },
  {
    n: "03",
    heading: "定時決定 — 4〜6月の平均で1年分が決まる",
    headingEn: "The Annual Review",
    lead: "標準報酬月額は毎月見直されるわけではなく、原則として年に1回だけ更新されます。これを「定時決定(ていじけってい)」と呼びます。",
    leadEn: "The standard monthly remuneration isn't revised every month — it's updated only once a year, in what's known as the \"scheduled determination\" (teiji kettei).",
    blocks: [
      {
        type: "label",
        label: "定時決定のルール",
        labelEn: "How It Works",
        text: "毎年4月・5月・6月に支給された給与（基本給＋残業代＋各種手当）を平均し、その金額に対応する等級が、その年の9月から翌年8月までの標準報酬月額として確定します。",
        textEn: "Salaries paid in April, May, and June (base pay + overtime + various allowances) are averaged, and the grade matching that average becomes your standard monthly remuneration from September through August of the following year.",
      },
      {
        type: "list",
        items: [
          "対象月は 4月・5月・6月 に「支給された」給与（締め日ではなく支給日基準）",
          "交通費・残業代・各種手当も含めて平均する",
          "確定した標準報酬月額は、その年の 9月分から翌年8月分 まで適用される",
          "つまり、最長で 12ヶ月間 の社会保険料がこの3ヶ月で決まってしまう",
        ],
        itemsEn: [
          "The target months are salaries paid in April, May, and June (based on payment date, not cut-off date)",
          "Commuting allowance, overtime pay, and other allowances are all included in the average",
          "The confirmed figure applies from September through August of the following year",
          "In other words, up to 12 months of social insurance premiums are decided by these three months",
        ],
      },
      {
        type: "callout",
        text: "たった3ヶ月の平均で、次の1年の毎月の天引き額が決まる — これが「4〜6月は残業するな」と言われる最大の理由です。",
        textEn: "A three-month average decides your monthly deductions for the next year — this is the biggest reason people say \"don't work overtime from April to June.\"",
      },
    ],
  },
  {
    n: "04",
    heading: "具体例で見る、手取りへの影響",
    headingEn: "A Concrete Example",
    lead: "仮に月給30万円の会社員Aさんが、4〜6月に毎月5万円ずつ残業代を上乗せしたとします。定時決定でどう変わるかを、ざっくり試算してみましょう。",
    leadEn: "Suppose employee A, earning 300,000 yen per month, adds 50,000 yen of overtime pay each month from April to June. Let's roughly calculate how the scheduled determination changes things.",
    blocks: [
      {
        type: "table",
        caption: "ざっくり試算（概算・保険料率は概ね15%前後を想定）",
        captionEn: "Rough estimate (assuming a premium rate of roughly 15%)",
        headers: ["ケース", "4〜6月平均", "標準報酬月額（等級）", "月の保険料（本人負担・概算）"],
        headersEn: ["Case", "Apr–Jun average", "Standard monthly remuneration (grade)", "Monthly premium (employee share, approx.)"],
        rows: [
          ["残業なし", "30万円", "30万円相当の等級", "約 4.5万円"],
          ["毎月5万円残業", "35万円", "1〜2等級上", "約 5.2万円"],
        ],
        rowsEn: [
          ["No overtime", "300,000 yen", "Grade for ~300,000 yen", "Approx. 45,000 yen"],
          ["50,000 yen overtime / month", "350,000 yen", "1–2 grades higher", "Approx. 52,000 yen"],
        ],
      },
      {
        type: "p",
        text: "差額はおよそ月7,000円。これが9月から翌8月まで12ヶ月続くと、単純計算で 約8.4万円 ほど毎月の手取りが目減りする計算になります。一方で4〜6月に稼いだ残業代の合計は税・社会保険料控除後でおよそ12万円前後。差し引きで得は残るものの、思ったほど残らない、というのが実情です。",
        textEn: "The difference is roughly 7,000 yen per month. Continuing for 12 months from September through next August means take-home pay shrinks by about 84,000 yen. Meanwhile, the total overtime pay earned from April to June comes to roughly 120,000 yen after taxes and social insurance. There's still a net gain, but much less than you'd expect.",
      },
      {
        type: "label",
        label: "もっとシビアなケース",
        labelEn: "A Tougher Scenario",
        text: "等級が2段階以上上がるような大きな残業（たとえば月20〜30時間以上）が3ヶ月続くと、年間の保険料増加分が残業代の手取り増をほぼ食い潰すケースもあります。残業時間が多いほど「損」に近づいていく構造です。",
        textEn: "With heavy overtime that pushes you up two or more grades — say, 20–30+ hours per month for three months straight — the annual premium increase can almost entirely eat up the extra overtime pay. The more overtime, the closer you get to a net loss.",
      },
      {
        type: "callout",
        text: "ポイント：残業代そのものは働いた分必ずもらえます。ただし「翌年の固定費（保険料）」まで押し上げる副作用が隠れているのです。",
        textEn: "The point: you still receive the overtime pay you earned. But there's a hidden side effect — it pushes up next year's fixed costs (premiums) too.",
      },
    ],
  },
  {
    n: "05",
    heading: "ただし、悪いことばかりではない",
    headingEn: "There's a Silver Lining",
    lead: "標準報酬月額が上がることには、実はプラスの側面もあります。将来受け取る年金や、一部の給付金の計算にも関係してくるからです。",
    leadEn: "A higher standard monthly remuneration isn't all bad — it also affects your future pension and certain benefit calculations.",
    blocks: [
      {
        type: "list",
        items: [
          "厚生年金の受給額が増える（老後に効いてくる）",
          "傷病手当金・出産手当金の金額が増える（休業した場合の補償が手厚くなる）",
          "失業給付の基本手当日額にも間接的に影響する",
        ],
        itemsEn: [
          "Your employees' pension payout increases (pays off in retirement)",
          "Injury/sickness allowance and maternity allowance increase (better coverage during leave)",
          "The daily basic allowance for unemployment benefits is indirectly affected too",
        ],
      },
      {
        type: "p",
        text: "つまり「目先の手取り」だけ見ると損に感じますが、将来の年金受取額や、万一の休業時の補償を考えると、必ずしも悪い話ではない、という評価もできます。短期のキャッシュフローと、長期の保障のトレードオフとして捉えるのが正確です。",
        textEn: "So while short-term take-home pay may feel diminished, higher future pension payouts and better coverage during leave mean it's not purely a loss. It's more accurate to frame this as a trade-off between short-term cash flow and long-term protection.",
      },
    ],
  },
  {
    n: "06",
    heading: "例外 — 随時改定（月額変更届）",
    headingEn: "Mid-Year Changes",
    lead: "「じゃあ一度決まったら絶対1年間変わらないの？」というとそうでもなく、大きな変動があった場合は年の途中でも改定されます。これを「随時改定」と呼びます。",
    leadEn: "\"So once it's set, is it really locked in for a whole year?\" Not quite. Large changes can trigger a mid-year revision called \"occasional revision\" (zuiji kaitei).",
    blocks: [
      {
        type: "label",
        label: "随時改定の要件（概要）",
        labelEn: "Requirements (Overview)",
        text: "①昇給・降給などで固定的賃金に変動があった、②変動後の3ヶ月間の平均で標準報酬月額が2等級以上変わった、③その3ヶ月とも支払基礎日数が17日以上、の全てを満たすと、4ヶ月目から標準報酬月額が改定されます。",
        textEn: "If all three conditions are met — (1) fixed wages change due to a raise or pay cut, (2) the three-month average afterward shifts the standard monthly remuneration by at least two grades, and (3) each of those three months has at least 17 base-pay days — the standard monthly remuneration is revised starting in the fourth month.",
      },
      {
        type: "p",
        text: "ただし、この随時改定が適用されるのは原則として「固定的賃金の変動（基本給や役職手当の変更など）」がきっかけの場合です。単に残業代が増えた・減ったというだけでは随時改定の対象にはなりません。ここも「4〜6月の残業代が効きっぱなしになる」理由の一つです。",
        textEn: "However, this revision generally requires a trigger in fixed wages (changes to base pay, position allowances, etc.). Fluctuations in overtime pay alone don't qualify. This is another reason why April–June overtime keeps having an effect.",
      },
    ],
  },
  {
    n: "07",
    heading: "実務上、どう動くのが賢いか",
    headingEn: "Practical Tips",
    lead: "結論としては、全力で残業を避ける必要はありません。ただ、仕組みを知っているかどうかで1年の手取りが変わるのも事実です。実務的には次のような意識で十分です。",
    leadEn: "The conclusion: you don't need to avoid overtime at all costs. But knowing the mechanics does change your annual take-home pay. The following practical mindset is enough.",
    blocks: [
      {
        type: "list",
        items: [
          "4〜6月にコントロール可能な残業（翌月でもいい業務など）はできるだけ平準化する",
          "どうしても必要な残業は遠慮なく行う。残業代自体は正当な対価",
          "昇給のタイミングがこの時期に重なる場合は特に影響が大きいので把握しておく",
          "長期的には年金・各種手当が増えるというプラスもある、と知っておく",
          "不安なら給与明細の「健康保険料」「厚生年金保険料」欄を9月前後で見比べてみる",
        ],
        itemsEn: [
          "Spread out any controllable overtime during April–June (e.g. tasks that can wait until the next month)",
          "Do necessary overtime without hesitation — overtime pay is legitimate compensation",
          "Be especially aware when a raise lands in this window, since the impact is amplified",
          "Remember there's an upside too: larger long-term pension and allowance payouts",
          "If you're concerned, compare the health insurance and employees' pension lines on your pay slip before and after September",
        ],
      },
      {
        type: "callout",
        text: "「残業しない」のではなく「仕組みを理解して選択する」。これがこのコラムの結論です。",
        textEn: "Not \"don't work overtime,\" but \"understand the system and choose.\" That's the conclusion of this column.",
      },
    ],
  },
];

export default function OvertimeAprilJunePage() {
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
        <span className="text-foreground/60 line-clamp-1"><T ja={TITLE} en="Why You Shouldn't Work Overtime From April to June" /></span>
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
            <T ja="ライフハック / 社会保険" en="Life Hacks / Social Insurance" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={<>なぜ4月から6月は<br className="hidden sm:block" /><span style={{ color: COLUMN_COLOR }}>残業したらダメ</span>なのか</>}
            en={<>Why You Shouldn&apos;t<br className="hidden sm:block" /><span style={{ color: COLUMN_COLOR }}>Work Overtime</span> From April to June</>}
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          Why You Shouldn&apos;t Work Overtime from April to June
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${COLUMN_COLOR}40` }}
        >
          <T
            ja={SUMMARY}
            en="You've probably heard that working overtime from April to June is a bad idea. This column clearly explains why, from the mechanics of Japan's social insurance system — specifically the standard monthly remuneration and the scheduled determination. Understanding the system can change your take-home pay for an entire year."
          />
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{DATE}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="約 8 分" en="About 8 min" /></span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="全 7 章" en="7 chapters" /></span>
        </div>
      </header>

      {/* Table of contents */}
      <nav className="mb-16 relative">
        <div className="relative p-6 sm:p-8 rounded-xl border border-foreground/[0.06] bg-foreground/[0.015]">
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
                  <span className="text-[13px] font-medium"><T ja={s.heading} en={s.headingEn} /></span>
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
                    <T ja={s.heading} en={s.headingEn} />
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
                <T ja={s.lead} en={s.leadEn} />
              </p>
            )}

            <div className="space-y-5">
              {s.blocks.map((b, j) => {
                if (b.type === "p") {
                  return (
                    <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                      <T ja={b.text} en={b.textEn} />
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
                        <T ja={b.label} en={b.labelEn} />
                      </div>
                      <p className="text-[14.5px] text-foreground/75 leading-[1.95]"><T ja={b.text} en={b.textEn} /></p>
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
                        <T ja={b.text} en={b.textEn} />
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
                          <span><T ja={it} en={b.itemsEn[k]} /></span>
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (b.type === "table") {
                  return (
                    <div key={j} className="my-4">
                      {b.caption && (
                        <div className="text-[11px] text-foreground/45 mb-2"><T ja={b.caption} en={b.captionEn} /></div>
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
                                  <T ja={h} en={b.headersEn[k]} />
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
                                    <T ja={cell} en={b.rowsEn[ri][ci]} />
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
        className="mt-6 rounded-xl border p-5"
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
            ja="本コラムは制度の一般的な仕組みを分かりやすく解説することを目的としています。保険料率・等級区分は年度や都道府県、健康保険組合によって異なります。実際の金額は給与明細や勤務先の人事・総務、年金事務所、社会保険労務士などの正確な情報でご確認ください。"
            en="This column is intended as a general explanation of how the system works. Premium rates and grade brackets vary by year, prefecture, and health insurance society. For actual figures, check your pay slip or consult your employer's HR department, a pension office, or a licensed labor and social insurance attorney."
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
          <T ja="コラム一覧に戻る" en="Back to Column" />
        </Link>
      </div>
    </div>
  );
}
