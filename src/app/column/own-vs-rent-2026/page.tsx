import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/own-vs-rent-2026";
const TITLE = "持ち家 vs 賃貸 — 2026年の金利と物価で再計算する";
const SUMMARY =
  "日銀の段階利上げで住宅ローン変動金利が上昇し、東京の新築マンション価格は1.3億円を突破。2010年代までの『持ち家有利』の常識は、2026年にも通用するのか。金利・物価・税制・流動性の4変数で持ち家と賃貸の総コストを再計算します。";
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
    heading: "2026年の前提条件 — 金利と価格は2010年代と別物",
    headingEn: "The 2026 Setup",
    lead: "持ち家 vs 賃貸の議論は、前提条件次第で結論が逆転します。2026年4月時点の数字を最初に押さえます。",
    leadEn: "The homeownership vs. renting debate flips its conclusion depending on the starting assumptions. Let's first nail down the numbers as of April 2026.",
    blocks: [
      {
        type: "table",
        caption: "2026年4月時点の主要パラメータ",
        captionEn: "Key parameters as of April 2026",
        headers: ["項目", "2014年頃", "2026年4月"],
        headersEn: ["Item", "Around 2014", "April 2026"],
        rows: [
          ["住宅ローン変動金利", "0.5%前後", "0.9〜1.2%"],
          ["35年固定（フラット35）", "1.5%前後", "2.0%前後"],
          ["東京23区新築マンション平均", "約7,000万円", "約1.3億円"],
          ["東京23区平均賃料（70m²）", "約20万円", "約25万円"],
          ["コアCPI", "前年比0%前後", "前年比2%前後"],
          ["日銀政策金利", "−0.1%", "0.5%超"],
        ],
        rowsEn: [
          ["Variable mortgage rate", "Around 0.5%", "0.9–1.2%"],
          ["35-year fixed (Flat 35)", "Around 1.5%", "Around 2.0%"],
          ["Avg. new condo, Tokyo 23 wards", "Approx. 70 million yen", "Approx. 130 million yen"],
          ["Avg. rent, Tokyo 23 wards (70 m²)", "Approx. 200,000 yen", "Approx. 250,000 yen"],
          ["Core CPI", "Around 0% YoY", "Around 2% YoY"],
          ["BOJ policy rate", "−0.1%", "Above 0.5%"],
        ],
      },
      {
        type: "p",
        text: "もっとも大きな変化は、ゼロ金利前提の崩壊です。日銀のマイナス金利政策・YCCはともに撤廃され、政策金利は0.5%超へ。住宅ローン変動金利も連動して上昇しています。同時に、東京の新築マンション価格は10年前のほぼ2倍に達しました。",
        textEn: "The biggest change is the collapse of the zero-rate assumption. The Bank of Japan's negative interest rate policy and yield curve control have both been dismantled, and the policy rate now sits above 0.5%. Variable mortgage rates have moved up in tandem. At the same time, Tokyo new-build condo prices have nearly doubled from a decade ago.",
      },
      {
        type: "callout",
        text: "『金利が低くて家が安い』時代と『金利が上がって家が高い』時代では、購入と賃貸の比較式そのものが違ってくる。",
        textEn: "The comparison formula between buying and renting is fundamentally different in an era of \"low rates and cheap homes\" versus one of \"rising rates and expensive homes.\"",
      },
    ],
  },
  {
    n: "02",
    heading: "総コスト比較の考え方 — 4つの変数",
    headingEn: "Four Variables to Compare",
    lead: "持ち家と賃貸を公平に比較するには、4つの変数を揃える必要があります。",
    leadEn: "A fair comparison between owning and renting requires lining up four variables.",
    blocks: [
      {
        type: "list",
        items: [
          "①金利コスト：ローン金利・機会費用（頭金を運用していたら得られた利回り）",
          "②維持費：管理費・修繕積立金・固定資産税・火災保険・修繕費（持ち家のみ）",
          "③税制効果：住宅ローン控除・登録免許税・不動産取得税・譲渡所得税",
          "④流動性・残存価値：売却時の価格変動リスク・転居の自由度",
        ],
        itemsEn: [
          "(1) Interest cost: mortgage rate and opportunity cost (the return you'd earn by investing the down payment instead)",
          "(2) Carrying costs: management fees, reserves for repairs, property taxes, fire insurance, repair costs (homeowners only)",
          "(3) Tax effects: mortgage tax credit, registration tax, real estate acquisition tax, capital gains tax",
          "(4) Liquidity and residual value: price risk at sale, flexibility to relocate",
        ],
      },
      {
        type: "p",
        text: "賃貸の総コスト＝（月額家賃＋共益費）×期間。シンプルです。一方、持ち家は購入価格・諸費用・ローン金利・固定資産税・管理修繕費・売却時残価という複数の数字が絡み、ライフプランの長さによって結論が変わります。",
        textEn: "Total renting cost = (monthly rent + common area fees) × time. Simple. Homeownership, by contrast, involves purchase price, closing costs, mortgage interest, property taxes, management/repair fees, and residual value at sale — and the conclusion shifts with the length of your life plan.",
      },
      {
        type: "label",
        label: "見落とされがちな『機会費用』",
        labelEn: "The Opportunity Cost People Miss",
        text: "頭金1,000万円を住宅購入に充てる代わりに、新NISAでオルカン（年5%想定）で運用していたら、20年後には約2,650万円。これは持ち家側のコストとして引き算されるべきです。",
        textEn: "If instead of putting a 10 million yen down payment into a home you invested it in a global equity index fund through NISA (assuming 5% annual return), after 20 years you'd have around 26.5 million yen. That should be subtracted from the homeownership side as a cost.",
      },
    ],
  },
  {
    n: "03",
    heading: "ケーススタディ — 30代年収700万円・東京勤務",
    headingEn: "Case Study",
    lead: "具体例で計算します。新築マンション9,000万円（頭金1,000万円・35年ローン・変動金利1.0%）vs 同等物件の賃貸（月25万円）を、35年間で比較します。",
    leadEn: "Let's run a concrete example: a 90 million yen new condo (10 million down, 35-year loan, variable rate 1.0%) vs. renting a comparable property (250,000 yen/month), compared over 35 years.",
    blocks: [
      {
        type: "table",
        caption: "35年間の総コスト概算（金額は試算）",
        captionEn: "Estimated 35-year total cost (all figures are estimates)",
        headers: ["項目", "持ち家", "賃貸"],
        headersEn: ["Item", "Owning", "Renting"],
        rows: [
          ["頭金 / 礼金", "1,000万円", "75万円"],
          ["35年間の総支払額", "ローン約9,490万円＋管理費等約1,260万円", "家賃約10,500万円"],
          ["固定資産税・修繕費", "約1,200万円", "0円"],
          ["諸費用（購入・売却）", "約500万円", "0円"],
          ["35年後の残存価値", "−4,000万円（想定売却価格）", "0円"],
          ["実質総コスト", "約9,450万円", "約10,575万円"],
        ],
        rowsEn: [
          ["Down payment / key money", "10,000,000 yen", "750,000 yen"],
          ["35-year total payments", "Loan ~94.9M yen + fees ~12.6M yen", "Rent ~105M yen"],
          ["Property taxes and repairs", "~12 million yen", "0 yen"],
          ["Closing costs (buy and sell)", "~5 million yen", "0 yen"],
          ["Residual value after 35 years", "−40 million yen (assumed sale price)", "0 yen"],
          ["Net total cost", "~94.5 million yen", "~105.75 million yen"],
        ],
      },
      {
        type: "p",
        text: "この前提では、持ち家の方が35年トータルで約1,100万円ほど安くなります。ただしこれは『東京で新築を買って長く住み、35年後にそれなりの価格で売れる』という楽観シナリオ。下記の条件が変わると、結論は容易に逆転します。",
        textEn: "Under these assumptions, owning is about 11 million yen cheaper over 35 years. But this is an optimistic scenario — \"buy a new place in Tokyo, live there long-term, and sell it for a reasonable price 35 years later.\" The conclusion easily flips if any of the following conditions change.",
      },
      {
        type: "label",
        label: "結論を逆転させる3つの仮定変更",
        labelEn: "Three Assumption Changes That Flip the Result",
        text: "①金利が変動1.0%→2.0%に上昇すると、ローン支払総額が約1,500万円増。②売却時残価が想定より2,000万円低い、③途中で転勤・離婚などで10年以内に売却（市況次第で含み損）。いずれかが起これば、賃貸の方が安くなります。",
        textEn: "(1) If the variable rate rises from 1.0% to 2.0%, total loan payments rise by roughly 15 million yen. (2) Residual value at sale comes in 20 million yen below expectation. (3) A job transfer, divorce, or other life event forces a sale within 10 years (an unrealized loss depending on the market). If any of these happen, renting comes out cheaper.",
      },
    ],
  },
  {
    n: "04",
    heading: "持ち家が向いている人・賃貸が向いている人",
    headingEn: "Who Should Choose Which",
    lead: "金額より重要なのは、自分のライフスタイルがどちらに合うかです。",
    leadEn: "More important than the numbers is which option fits your lifestyle.",
    blocks: [
      {
        type: "label",
        label: "持ち家が向いている人",
        labelEn: "Who Owning Suits",
        text: "①勤務地・生活拠点が10年以上動かない見込み、②自分でカスタマイズしたい・ペットや楽器など賃貸では制約のある暮らしがしたい、③老後の住居費を確定させたい、④親からの援助・相続が見込める。",
        textEn: "(1) Your job location and life base are unlikely to move for 10+ years; (2) you want to customize your home or have pets, musical instruments, or other lifestyles that rentals restrict; (3) you want to lock down housing costs for retirement; (4) you expect financial help or inheritance from parents.",
      },
      {
        type: "label",
        label: "賃貸が向いている人",
        labelEn: "Who Renting Suits",
        text: "①転勤・転職・海外赴任の可能性がある、②キャリアパスが流動的で年収の見通しが立ちにくい、③ライフイベント（結婚・出産・離婚）で生活設計が変わりやすい、④投資・事業など他の用途で資金を回したい。",
        textEn: "(1) There's a chance of a job transfer, career change, or overseas posting; (2) your career path is fluid and income is hard to forecast; (3) life events (marriage, children, divorce) may reshape your plans; (4) you want to direct funds into investing, a business, or other uses.",
      },
      {
        type: "callout",
        text: "持ち家は『住居費を固定化＋強制貯蓄＋自由度の制限』の3点セット。賃貸は『毎月コスト＋自由度＋資金の流動性』の3点セット。どちらが優れているかではなく、どちらが自分の人生に合うかで決める。",
        textEn: "Owning is a package of three: locked-in housing costs, forced savings, and reduced flexibility. Renting is a package of three: monthly costs, flexibility, and liquid capital. Don't ask which is better — ask which fits your life.",
      },
    ],
  },
  {
    n: "05",
    heading: "2026年特有の3つのリスク",
    headingEn: "Three 2026-Specific Risks",
    lead: "今住宅購入を検討する人が必ず織り込むべき、2026年特有のリスクがあります。",
    leadEn: "There are 2026-specific risks that anyone considering a home purchase right now must factor in.",
    blocks: [
      {
        type: "label",
        label: "①日銀の追加利上げ",
        labelEn: "(1) Further BOJ Rate Hikes",
        text: "2026年中に政策金利がさらに上がる可能性があります。変動金利は1.5%超のシナリオも現実味を帯びており、ローン契約後の金利上昇リスクを必ず試算に織り込む必要があります。0.5%上昇で月返済額が約2万円増、35年合計で約840万円の追加負担です。",
        textEn: "The BOJ may raise rates further during 2026. A variable rate above 1.5% is a realistic scenario, and rate-rise risk after signing the mortgage must be built into your calculation. A 0.5% increase raises monthly payments by about 20,000 yen — roughly 8.4 million yen over 35 years.",
      },
      {
        type: "label",
        label: "②東京新築マンションのバブル懸念",
        labelEn: "(2) Bubble Concerns for Tokyo New-Build Condos",
        text: "東京23区の新築マンション平均価格は1.3億円を超え、年収倍率（年収に対する物件価格）は10倍を超える水準です。歴史的には7倍が安全圏とされており、価格調整リスクは過去最大級。今買って5年後に1〜2割値下がりするシナリオも織り込むべきです。",
        textEn: "The average new condo price in Tokyo's 23 wards now exceeds 130 million yen, and price-to-income ratios have passed 10x. Historically, 7x has been considered the safe zone, making price-adjustment risk as large as it's ever been. A scenario where you buy now and prices fall 10–20% in five years is worth considering.",
      },
      {
        type: "label",
        label: "③人口減少と空き家問題",
        labelEn: "(3) Population Decline and Vacant Homes",
        text: "日本の総人口は減少局面に入り、地方では空き家率が13.8%（2023年住宅・土地統計調査）に達しています。東京の中心部は当面需要が底堅いものの、郊外・地方の物件は『買って住めるが売れない』リスクが顕在化しています。",
        textEn: "Japan's total population is now declining, and regional vacant-home rates have reached 13.8% (2023 Housing and Land Survey). Demand holds up in central Tokyo for now, but suburban and regional properties increasingly face the risk of \"you can buy and live there, but you can't sell.\"",
      },
    ],
  },
  {
    n: "06",
    heading: "結論 — 2026年の判断軸",
    headingEn: "Bottom Line",
    blocks: [
      {
        type: "p",
        text: "結論はシンプルです。『金利上昇＋価格高止まり＋人口減少』という2026年の組み合わせは、2014年頃の『金利低下＋価格上昇＋緩和マネー』とは正反対です。2010年代の『買えるなら買え』というアドバイスは、2026年にはそのまま使えません。",
        textEn: "The conclusion is simple. The 2026 combination of rising rates, elevated prices, and declining population is the opposite of the mid-2010s combo of falling rates, rising prices, and easy money. The 2010s advice of \"buy if you can\" doesn't translate directly to 2026.",
      },
      {
        type: "list",
        items: [
          "都心の駅近・実需が強いエリア → 持ち家にも合理性あり。ただし変動金利＋無理なローンは禁物",
          "郊外・地方都市 → 流動性リスクが大きい。賃貸＋資産運用の方が柔軟",
          "30代独身 → 賃貸＋新NISA満額の方が、長期では有利になりやすい",
          "40代・夫婦＋子ども・転勤なし → 持ち家のメリットが活きる代表ケース",
          "50代以降 → 残りのキャッシュフローで現金一括 or 退職金返済で組む方が安全",
        ],
        itemsEn: [
          "Central Tokyo, near a station, strong real demand → owning can make sense. But avoid variable rates plus an over-stretched loan",
          "Suburbs and regional cities → liquidity risk is high. Renting plus investing is more flexible",
          "Single, in your 30s → renting plus maxing out NISA tends to win long-term",
          "40s, couple with kids, no transfer risk → the textbook case where owning really pays off",
          "50s and older → safer to pay cash from remaining cash flow, or structure repayment around your retirement lump sum",
        ],
      },
      {
        type: "callout",
        text: "2026年の答えは『どちらが得かは人による』ではなく、『どちらに向いているかは人による』。金額差は5〜15%程度で、ライフスタイルの違いより小さいケースが多い。",
        textEn: "The 2026 answer isn't \"which is cheaper depends on the person\" but \"which suits you depends on the person.\" The price gap is usually 5–15% — smaller than the lifestyle differences in most cases.",
      },
    ],
  },
];

export default function OwnVsRent2026Page() {
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
        <span className="text-foreground/60 line-clamp-1"><T ja={TITLE} en="Own vs Rent — Recalculated for 2026" /></span>
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
            <T ja="住まい / お金" en="Housing / Money" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={<><span style={{ color: COLUMN_COLOR }}>持ち家 vs 賃貸</span><br className="hidden sm:block" /><span className="text-foreground/70 text-[20px] sm:text-[28px]">— 2026年の金利と物価で再計算する</span></>}
            en={<><span style={{ color: COLUMN_COLOR }}>Own vs Rent</span><br className="hidden sm:block" /><span className="text-foreground/70 text-[20px] sm:text-[28px]">— Recalculated for 2026's rates and prices</span></>}
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          Own vs Rent — Recalculated for 2026
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${COLUMN_COLOR}40` }}
        >
          <T
            ja={SUMMARY}
            en={`The Bank of Japan's gradual rate hikes have pushed variable mortgage rates higher, and average new condo prices in Tokyo have broken 130 million yen. Does the 2010s-era wisdom of "owning beats renting" still apply in 2026? We recalculate the total cost of owning vs. renting against four variables: interest rates, prices, taxes, and liquidity.`}
          />
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{DATE}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="約 11 分" en="About 11 min" /></span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="全 6 章" en="6 chapters" /></span>
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
            ja="本コラムは2026年4月時点の市場環境に基づく一般的な情報提供を目的としています。試算は特定の前提に依存しており、実際の住宅購入・賃貸の判断は個別の状況・地域・物件・家族構成により異なります。具体的な意思決定にあたっては、ファイナンシャルプランナー・不動産専門家にご相談ください。"
            en="This column provides general information based on market conditions as of April 2026. Estimates depend on specific assumptions, and actual buy-vs-rent decisions vary by individual circumstances, region, property, and family composition. For specific decisions, please consult a financial planner or real estate professional."
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
