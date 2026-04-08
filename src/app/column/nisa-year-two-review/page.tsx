import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/nisa-year-two-review";
const TITLE = "新NISA 2年目の見直し方 — つみたて枠と成長投資枠の最適配分";
const SUMMARY =
  "2024年に始まった新NISAは2年目（2025年）を終え、3年目に入ろうとしています。最初の年は『とりあえず始めた』人が多かったはず。生涯非課税枠1,800万円、年間360万円という巨大な箱の中で、今あらためて何を見直すべきかを整理します。";
const SUMMARY_EN =
  "The new NISA that launched in 2024 just finished its second year and is entering year three. Most people started off by 'just getting in,' and now it's time to take a serious look. Inside a giant 18-million-yen lifetime, 3.6-million-yen-per-year box, what should you revisit?";
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

type Bilingual = { ja: string; en: string };

type Section = {
  n: string;
  headingJa: string;
  headingEn: string;
  lead?: Bilingual;
  blocks: Block[];
};

type Block =
  | { type: "p"; text: Bilingual }
  | { type: "label"; label: Bilingual; text: Bilingual }
  | { type: "callout"; text: Bilingual }
  | { type: "list"; items: Bilingual[] }
  | { type: "table"; caption?: Bilingual; headers: Bilingual[]; rows: Bilingual[][] };

const sections: Section[] = [
  {
    n: "01",
    headingJa: "新NISAの基本構造をあらためて整理する",
    headingEn: "The Two-Bucket Design",
    lead: {
      ja: "2024年スタートの新NISAは、つみたて投資枠と成長投資枠という2つの箱からできています。",
      en: "The new NISA that launched in 2024 is built around two buckets: the tsumitate (accumulation) slot and the growth investment slot.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "新NISAは旧つみたてNISA／一般NISAを統合・恒久化した制度です。最大の特徴は『つみたて投資枠（年120万円）』と『成長投資枠（年240万円）』の併用が可能で、合計年360万円・生涯1,800万円までの非課税投資ができることです。売却して空いた枠は翌年以降に再利用できる『簿価管理』方式が採られました。",
          en: "The new NISA merged the old tsumitate NISA and general NISA into a single permanent system. The headline feature: you can use the tsumitate slot (1.2M yen/year) and the growth slot (2.4M yen/year) together, for up to 3.6M yen a year and 18M yen in lifetime tax-free investing. Allowances freed up by selling become reusable from the following year onward, under a book-value management scheme.",
        },
      },
      {
        type: "table",
        caption: {
          ja: "新NISAの基本枠（2026年4月時点）",
          en: "New NISA core allowances (as of April 2026)",
        },
        headers: [
          { ja: "区分", en: "Slot" },
          { ja: "年間上限", en: "Annual cap" },
          { ja: "対象商品", en: "Eligible products" },
          { ja: "生涯枠の上限", en: "Lifetime cap" },
        ],
        rows: [
          [
            { ja: "つみたて投資枠", en: "Tsumitate slot" },
            { ja: "120万円", en: "1.2M yen" },
            { ja: "金融庁基準を満たす投信・ETF", en: "Funds and ETFs meeting FSA criteria" },
            { ja: "1,800万円のうち枠制限なし", en: "No sub-limit within the 18M yen total" },
          ],
          [
            { ja: "成長投資枠", en: "Growth slot" },
            { ja: "240万円", en: "2.4M yen" },
            { ja: "上場株式・投信・ETF（一部除外）", en: "Listed stocks, funds, ETFs (some excluded)" },
            { ja: "1,800万円のうち1,200万円まで", en: "Up to 12M yen of the 18M yen total" },
          ],
          [
            { ja: "合計", en: "Total" },
            { ja: "360万円", en: "3.6M yen" },
            { ja: "—", en: "—" },
            { ja: "1,800万円", en: "18M yen" },
          ],
        ],
      },
      {
        type: "callout",
        text: {
          ja: "ポイントは『簿価管理＋枠の再利用』。一度買ってしまえば終わりではなく、ライフイベントに応じて売却→再投資ができる柔軟な制度になった。",
          en: "The key is book-value management plus reusable allowances. Buying isn't a one-shot deal — you can sell and reinvest around life events in a flexible system.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "1年目によくある『無自覚オーバーウェイト』",
    headingEn: "Common Year-One Mistakes",
    lead: {
      ja: "1年目は『とりあえず満額』が多い分、ポートフォリオが意図せず偏っているケースが目立ちます。",
      en: "A lot of year-one investors just maxed everything out, and portfolios often end up unintentionally skewed.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "①オルカン1本のつもりが、実は米国株80%",
          en: "(1) You thought you were 'all-country,' but you're 80% US stocks",
        },
        text: {
          ja: "もっとも人気のeMAXIS Slim 全世界株式（オール・カントリー）は、構成上およそ60%が米国株です。さらにS&P500ファンドも併せて持っている人は、結果的にポートフォリオの80%以上が米国株、ということが珍しくありません。『分散したつもり』が一極集中になっています。",
          en: "The most popular fund, eMAXIS Slim All Country, is about 60% US stocks by construction. Hold an S&P 500 fund alongside it and it's easy to end up with more than 80% of your portfolio in US equity. What felt like diversification is actually concentration.",
        },
      },
      {
        type: "label",
        label: {
          ja: "②成長投資枠で個別株を雰囲気買い",
          en: "(2) Vibe-buying individual names in the growth slot",
        },
        text: {
          ja: "成長投資枠で『話題の銘柄を試しに』買った株が、知らぬ間にポートフォリオの中で大きな比率を占めているケース。半導体、AI関連、米国大型ハイテクなど、トレンドに乗った銘柄は短期では強くても、長期の最適解とは限りません。",
          en: "A 'let's try the hot name' purchase in the growth slot can quietly grow into an oversized position. Semiconductor, AI, and mega-cap US tech names can be strong in the short term, but that doesn't make them the long-term optimum.",
        },
      },
      {
        type: "label",
        label: {
          ja: "③現預金とのバランスを忘れる",
          en: "(3) Forgetting the cash balance",
        },
        text: {
          ja: "新NISAに毎月10万円を入れた結果、生活防衛資金が足りないことに後から気づくケース。投資資金は『生活費6ヶ月分＋3年以内に使う予定のお金』を確保したうえで、残りを充てるのが鉄則です。",
          en: "Pour 100,000 yen a month into the new NISA and you may later find your emergency fund is too thin. The rule is to secure six months of living expenses plus any money you'll need within three years first, then invest what's left.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "2年目以降に確認すべき5つの数字",
    headingEn: "Five Numbers to Check",
    lead: {
      ja: "ポートフォリオの健康診断は、年1回・5つの数字を見るだけで十分です。",
      en: "An annual portfolio checkup can be boiled down to just five numbers.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "①生涯非課税枠の使用率（残り何万円）",
            en: "(1) Lifetime allowance used (how many 10,000-yen units left).",
          },
          {
            ja: "②つみたて投資枠と成長投資枠の比率",
            en: "(2) Tsumitate-to-growth-slot ratio.",
          },
          {
            ja: "③日本株／米国株／その他の地域別比率",
            en: "(3) Regional split: Japan, US, and the rest.",
          },
          {
            ja: "④株式／債券／現預金の資産クラス比率",
            en: "(4) Asset-class mix: stocks, bonds, cash.",
          },
          {
            ja: "⑤生活防衛資金の月数（手取りの何ヶ月分）",
            en: "(5) Emergency fund in months of take-home pay.",
          },
        ],
      },
      {
        type: "p",
        text: {
          ja: "①は使い切り目標があるなら逆算します。年間360万円フル活用でも生涯枠1,800万円を埋めるには5年。ペースが落ちている場合、つみたて額の自動引き上げを検討します。",
          en: "For (1), if you're aiming to fill the box, work backward. Even maxing the 3.6M yen annual cap, you need five years to fill the 18M yen lifetime cap. If you've fallen behind, consider stepping up your auto-contributions.",
        },
      },
      {
        type: "p",
        text: {
          ja: "③④はリバランスの判断材料です。米国株が大きく上昇した結果、ポートフォリオの90%が米国株になっているなら、追加投資先を欧州・新興国・債券に振り向けることでリスクを下げられます。新NISAは売却すると非課税枠を消費するため、リバランスは『新規買付の配分を変える』方が合理的です。",
          en: "(3) and (4) drive rebalancing. If US stocks have ripped and now represent 90% of your book, you can dial down risk by steering new contributions into Europe, emerging markets, or bonds. Selling inside the new NISA uses up your allowance, so it's more efficient to rebalance by changing the allocation of new purchases.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "新NISAでのリバランスは『売る』のではなく『次の買付方向を変える』が基本。売却は枠の再利用が翌年なので、年末年始のタイミングを意識する。",
          en: "In the new NISA, the default way to rebalance is to redirect future buys rather than sell. Freed-up allowance only comes back the following year, so time any sales around the turn of the year.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "つみたて枠 vs 成長投資枠の役割分担",
    headingEn: "Role Allocation",
    lead: {
      ja: "2つの枠は性質が違います。役割を意識して配分するだけで、リスク管理が一段安定します。",
      en: "The two slots are fundamentally different. Simply being deliberate about their roles makes risk management noticeably steadier.",
    },
    blocks: [
      {
        type: "table",
        caption: {
          ja: "枠の特性比較",
          en: "Slot characteristics compared",
        },
        headers: [
          { ja: "観点", en: "Aspect" },
          { ja: "つみたて投資枠", en: "Tsumitate slot" },
          { ja: "成長投資枠", en: "Growth slot" },
        ],
        rows: [
          [
            { ja: "年間上限", en: "Annual cap" },
            { ja: "120万円", en: "1.2M yen" },
            { ja: "240万円", en: "2.4M yen" },
          ],
          [
            { ja: "対象商品", en: "Eligible products" },
            { ja: "金融庁基準クリア投信のみ", en: "FSA-approved funds only" },
            { ja: "ほぼ全ての上場株・投信", en: "Most listed stocks and funds" },
          ],
          [
            { ja: "買付方法", en: "Buying method" },
            { ja: "積立のみ", en: "Auto-contributions only" },
            { ja: "積立／一括どちらも可", en: "Either auto or lump-sum" },
          ],
          [
            { ja: "向いている用途", en: "Best used for" },
            { ja: "コア（長期分散）", en: "Core (long-term diversification)" },
            { ja: "サテライト（個別株・テーマ・配当）", en: "Satellite (stocks, themes, dividends)" },
          ],
          [
            { ja: "心理的な扱い", en: "Mental posture" },
            { ja: "触らない", en: "Don't touch" },
            { ja: "見直し可", en: "Revisit periodically" },
          ],
        ],
      },
      {
        type: "label",
        label: {
          ja: "推奨の役割分担",
          en: "Recommended division of labor",
        },
        text: {
          ja: "つみたて投資枠は『絶対に売らない・絶対に手を出さないコア資産』。eMAXIS Slim オルカン or S&P500を毎月10万円の自動積立に設定し、忘れる。成長投資枠は『年1回見直すサテライト』。高配当ETF、新興国株、リート、金、必要に応じて個別株などを少量ずつ組み合わせます。",
          en: "Treat the tsumitate slot as core assets you never sell and never touch. Auto-invest 100,000 yen a month in eMAXIS Slim All Country or S&P 500 and forget it. Treat the growth slot as a satellite you review once a year, combining small positions in high-dividend ETFs, emerging-market equity, REITs, gold, and individual stocks as needed.",
        },
      },
      {
        type: "p",
        text: {
          ja: "成長投資枠の生涯上限は1,200万円です。つまり最大でもポートフォリオの2/3まで。残り600万円以上は必ずつみたて投資枠で埋まる計算で、自然と『コア＞サテライト』のバランスに収まる設計になっています。",
          en: "The growth slot's lifetime cap is 12M yen — at most two-thirds of the portfolio. The remaining 6M yen or more has to come from the tsumitate slot, so the design naturally enforces a core-heavier-than-satellite balance.",
        },
      },
    ],
  },
  {
    n: "05",
    headingJa: "ライフステージ別・見直しの方向性",
    headingEn: "Life Stage Tactics",
    lead: {
      ja: "同じ新NISAでも、年齢・収入・家族構成によって最適解は変わります。",
      en: "Even inside the same new NISA, the right answer depends on age, income, and household situation.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "20代・30代独身 — 攻めて良い時期",
          en: "Single 20s–30s: a time to be aggressive",
        },
        text: {
          ja: "投資期間が30年以上あるので、株式100%でも問題ない時期です。つみたて投資枠でオルカン or S&P500、成長投資枠で米国成長株や新興国株を組み合わせる『株式フル投資』で長期リターンを取りに行く判断は合理的。生活防衛資金（6ヶ月分）を確保したうえでなら、月10万円の積立も無理筋ではありません。",
          en: "With 30-plus years of runway, going 100% equity is fine. Pair All Country or the S&P 500 in the tsumitate slot with US growth or emerging-market names in the growth slot to chase long-term returns. Once you have a six-month emergency fund in place, 100,000 yen a month is a reasonable target.",
        },
      },
      {
        type: "label",
        label: {
          ja: "30代・40代子育て世代 — 教育費との両立",
          en: "Parents in their 30s–40s: balancing education costs",
        },
        text: {
          ja: "子どもの教育費（特に大学入学時のまとまった出費）が10年以内に控えている場合、その分を新NISAから出すかどうかで判断が変わります。新NISAは流動性が高いので教育資金の置き場としても使えますが、相場が悪い時期に取り崩すと損失確定のリスクがあります。教育費は別途、定期預金や個人向け国債で確保しておくのが安全策。",
          en: "If a big education bill — college tuition in particular — is under a decade away, whether you'll fund it from the new NISA changes the calculus. The new NISA is liquid enough to hold education money, but withdrawing in a down market locks in losses. The safer play is to park education funds separately in term deposits or JGBs for individuals.",
        },
      },
      {
        type: "label",
        label: {
          ja: "40代・50代 — 退職後を逆算",
          en: "40s–50s: working backward from retirement",
        },
        text: {
          ja: "退職後の取り崩しを意識し、株式比率を徐々に下げる『グライドパス』の考え方が有効になってきます。50歳で株式70%・債券30%、60歳で50%・50%というように、リスク資産を段階的に減らします。新NISAでは債券ファンド、バランスファンド、高配当ETFなどが選択肢になります。",
          en: "With withdrawal in mind, a glide-path approach — gradually cutting equity — starts to matter. Perhaps 70/30 stocks/bonds at 50 and 50/50 at 60, trimming risk in stages. Inside the new NISA, bond funds, balanced funds, and high-dividend ETFs all become relevant options.",
        },
      },
      {
        type: "label",
        label: {
          ja: "50代後半・60代 — 取り崩しフェーズの設計",
          en: "Late 50s and 60s: designing the withdrawal phase",
        },
        text: {
          ja: "新NISAの強みは、配当・分配金・売却益すべてが非課税であること。退職後は4%ルール（毎年資産の4%を取り崩す）を参考に、生活費の補完として活用できます。iDeCo・年金との合算で月収の見通しを立てましょう。",
          en: "The new NISA's edge is that dividends, distributions, and capital gains are all tax-free. Post-retirement, use something like the 4% rule to supplement your living costs, and combine it with iDeCo and public pension payouts to map out monthly income.",
        },
      },
    ],
  },
  {
    n: "06",
    headingJa: "やってはいけない3つのこと",
    headingEn: "Three Things to Avoid",
    lead: {
      ja: "最後に、新NISAでやりがちな3つの落とし穴をまとめます。",
      en: "To close, here are three common traps in the new NISA.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "①レバレッジ型・インバース型を買う",
          en: "(1) Buying leveraged or inverse funds",
        },
        text: {
          ja: "成長投資枠ではレバレッジ型（日経レバ等）・インバース型は対象外です。にもかかわらず、似た商品名のレバナス系投信を『成長型』と勘違いして買うケースがあります。長期・複利の前提に合わず、長期投資の選択肢としては推奨されません。",
          en: "Leveraged products (like Nikkei leveraged ETFs) and inverse products are not eligible in the growth slot. Even so, some people buy 'leveraged Nasdaq' funds with similar names thinking they count as 'growth.' They don't fit the long-term, compounding premise and aren't recommended as long-term holdings.",
        },
      },
      {
        type: "label",
        label: {
          ja: "②高配当株を毎月『取り崩し』する",
          en: "(2) Spending high-dividend distributions every month",
        },
        text: {
          ja: "高配当ETFの分配金を毎月生活費に充てる戦略は、出口設計としては理解できますが、現役世代のうちは『再投資』した方が複利が効きます。配当再投資をオフにした瞬間、長期リターンは目減りします。",
          en: "Using high-dividend ETF distributions for monthly living expenses is a reasonable drawdown strategy, but while you're still working, reinvesting compounds harder. The moment you turn dividend reinvestment off, long-term returns take a hit.",
        },
      },
      {
        type: "label",
        label: {
          ja: "③相場急落時に売却して枠を消費する",
          en: "(3) Selling in a crash and burning allowance",
        },
        text: {
          ja: "新NISAの非課税枠は売却しても翌年以降に復活しますが、その年の年間枠（360万円）は復活しません。相場急落で恐怖売りすると『安値で売って高値で買い直す』最悪パターンに陥りがち。下落局面ほど淡々と積立を続けることが、長期リターンを最大化します。",
          en: "Freed-up lifetime allowance comes back the following year, but the current year's 3.6M yen annual cap does not. Panic-selling into a crash is a fast track to the worst-case 'sell low, rebuy high' pattern. Quietly continuing contributions through downturns is what maximizes long-term returns.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "新NISAは『買って忘れる』が9割、『年1回見直す』が残り1割。それだけで十分機能する制度設計になっている。",
          en: "The new NISA is 90% 'buy and forget' and 10% 'review once a year.' That's really all it takes — the design does the rest.",
        },
      },
    ],
  },
];

export default function NisaYearTwoReviewPage() {
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
            <T ja="投資 / NISA" en="Investing / NISA" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={
              <>
                <span style={{ color: COLUMN_COLOR }}>新NISA</span>
                <span className="text-foreground/70">2年目の見直し方</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— つみたて枠と成長投資枠の最適配分</span>
              </>
            }
            en={
              <>
                <span style={{ color: COLUMN_COLOR }}>New NISA</span>
                <span className="text-foreground/70">: The Year-Two Review</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— Balancing the Tsumitate and Growth Slots</span>
              </>
            }
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          New NISA — A Year-Two Tune-up
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
          <span><T ja="約 10 分" en="~10 min read" /></span>
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
                  <span className="text-[13px] font-medium">
                    <T ja={s.headingJa} en={s.headingEn} />
                  </span>
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
                  return (
                    <p key={j} className="text-[15px] text-foreground/75 leading-[2] tracking-[0.02em]">
                      <T ja={b.text.ja} en={b.text.en} />
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
                              <tr
                                key={ri}
                                className="border-t border-foreground/[0.05]"
                              >
                                {row.map((cell, ci) => (
                                  <td key={ci} className="px-3 py-2.5 text-foreground/75">
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
            ja="本コラムは2026年4月時点の制度の一般的な解説を目的としており、特定の投資商品の推奨や投資助言ではありません。投資判断はご自身の責任で行ってください。NISA制度の詳細・対象商品は金融庁・各証券会社の最新情報をご確認ください。"
            en="This column is intended as a general overview of the system as of April 2026 and is not a recommendation of any specific investment product or investment advice. Investment decisions are your own responsibility. For details of the NISA system and eligible products, please refer to the latest information from the FSA and your brokerage."
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
