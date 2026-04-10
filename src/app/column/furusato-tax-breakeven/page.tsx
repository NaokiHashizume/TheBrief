import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { RecommendedReads } from "@/components/RecommendedReads";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/furusato-tax-breakeven";
const TITLE = "ふるさと納税の損益分岐点 — 2026年改正後の本当の損得";
const SUMMARY =
  "2025年10月のポイント還元廃止、2026年10月の地場産品基準の見直し。改正続きのふるさと納税は、本当にまだ得なのか。年収・寄附額・返礼品還元率の3変数で『損益分岐点』を計算し、2026年時点で誰が・どのくらい得をするのかを整理します。";
const SUMMARY_EN =
  "With portal-point rebates banned in October 2025 and the local-product rules tightening again in October 2026, is furusato nozei (hometown tax donation) still worth it? We work out the break-even point across three variables — income, donation amount, and gift rebate rate — to show exactly who still benefits in 2026, and how much.";
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
    headingJa: "ふるさと納税は『得』ではなく『再分配』",
    headingEn: "Not a Discount — A Reallocation",
    lead: {
      ja: "ふるさと納税の本質は値引きではありません。本来住んでいる自治体に納める住民税の一部を、好きな自治体に振り替える制度です。",
      en: "Furusato nozei isn't fundamentally a discount. It's a way to redirect part of the resident tax you'd otherwise pay your home city to any municipality of your choice.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "勘違いされやすいのですが、ふるさと納税で『安くなる』のは税金そのものではありません。寄附額のうち2,000円を超える部分が、翌年の住民税から控除されるだけ。つまり、トータルの税負担は2,000円増えています。",
          en: "It's a common misunderstanding: furusato nozei doesn't actually cut your tax. It just lets you deduct the portion of your donation above 2,000 yen from next year's resident tax. Your total tax bill is actually 2,000 yen higher.",
        },
      },
      {
        type: "p",
        text: {
          ja: "それでも『得』と感じられるのは、返礼品が自己負担2,000円を上回る価値で受け取れるからです。寄附額3万円・返礼品価値1万円（還元率30%）であれば、自己負担2,000円で1万円分のモノが届く — 差額8,000円が実質的なリターンです。",
          en: "It still feels like a win because the gift you receive is worth more than the 2,000-yen cost. Donate 30,000 yen and get a gift worth 10,000 yen (a 30% rebate rate), and you've paid 2,000 yen for 10,000 yen of goods — an effective return of 8,000 yen.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "ふるさと納税は『税金の値引き』ではなく『2,000円で返礼品を買う権利』。この前提を取り違えると損益計算は狂う。",
          en: "Furusato nozei isn't a tax discount — it's the right to buy gifts for 2,000 yen. Miss that framing and your math goes sideways.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "2025〜2026年の制度改正カレンダー",
    headingEn: "Recent Rule Changes",
    lead: {
      ja: "ここ2年で、ふるさと納税の『お得感』は確実に削られています。改正の流れをまず押さえましょう。",
      en: "Over the past two years, the 'great deal' layer of furusato nozei has been steadily stripped away. Let's line up the changes first.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "2023年10月 — 経費5割ルール厳格化",
          en: "October 2023 — tighter 50% cost rule",
        },
        text: {
          ja: "総務省は『募集経費（返礼品代＋送料＋ポータル手数料など）は寄附額の5割以内』という基準を厳格化。これにより返礼品の還元率は実質3割上限のままに据え置かれ、自治体の裁量余地が縮みました。",
          en: "The Ministry of Internal Affairs tightened the rule that solicitation costs — gift, shipping, portal fees and the like — must stay within 50% of the donation. That locked the effective rebate rate at an unofficial 3-in-10 ceiling and shrank the room municipalities had to maneuver.",
        },
      },
      {
        type: "label",
        label: {
          ja: "2025年10月 — ポータルポイント還元の禁止",
          en: "October 2025 — portal-point rebates banned",
        },
        text: {
          ja: "楽天ふるさと納税・さとふるなど主要ポータルが提供してきた『楽天ポイント』『PayPayポイント』等の付与が禁止されました。この影響は大きく、これまで実質還元率を底上げしていた『ポイント分』が消滅。利用者の体感は『1〜2割得が減った』という声が多数派です。",
          en: "Major portals like Rakuten Furusato Nozei and Satofull were banned from handing out Rakuten points, PayPay points, and similar rebates. The impact is big: the points layer that had been padding the effective rebate rate is gone. Most users say the experience feels 10–20% less generous.",
        },
      },
      {
        type: "label",
        label: {
          ja: "2026年10月 — 地場産品基準の見直し（予定）",
          en: "October 2026 — local-product rules reworked (planned)",
        },
        text: {
          ja: "返礼品が『当該自治体で生産・製造されたもの』であることをより厳しく問う方向で、2026年秋に基準見直しが予定されています。家電・日用品など『どこで作っても同じ』カテゴリは縮小し、農産物・水産物・地場加工品にシフトする見込みです。",
          en: "Planned for autumn 2026: stricter enforcement that gifts must actually be produced or manufactured in the donating municipality. Categories like home appliances and household goods — where the location doesn't really matter — will shrink, and the lineup will shift toward farm produce, seafood, and local processed goods.",
        },
      },
      {
        type: "p",
        text: {
          ja: "改正の方向性は一貫しています。『自治体間の返礼品競争を抑え、本来の地方財源寄附の趣旨に戻す』という総務省の意図です。利用者にとっては、返礼品の選択肢が狭まり、ポイント還元という抜け道も塞がれた、という形になります。",
          en: "The direction is consistent: dial back the inter-municipality arms race on gifts and return the system to its original purpose of funding local finance. For users, that means a narrower gift selection and a closed point-rebate loophole.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "損益分岐点の計算式",
    headingEn: "The Break-even Formula",
    lead: {
      ja: "では、いくら寄附すれば、いくら得をするのか。シンプルな式で整理します。",
      en: "So how much do you need to donate, and how much do you actually come out ahead? Here's the simple formula.",
    },
    blocks: [
      {
        type: "callout",
        text: {
          ja: "実質リターン ＝（寄附額 × 返礼品還元率）− 2,000円",
          en: "Effective return = (donation × gift rebate rate) − 2,000 yen",
        },
      },
      {
        type: "p",
        text: {
          ja: "返礼品還元率は2026年4月時点でおおむね3割が上限です。この前提で寄附額別のリターンを試算すると、次のようになります。",
          en: "The gift rebate rate is capped at roughly 30% as of April 2026. Running the numbers at that rate gives the following returns by donation size.",
        },
      },
      {
        type: "table",
        caption: {
          ja: "返礼品還元率30%・自己負担2,000円のときの実質リターン",
          en: "Effective return at a 30% rebate rate and 2,000-yen out-of-pocket",
        },
        headers: [
          { ja: "寄附額", en: "Donation" },
          { ja: "返礼品価値", en: "Gift value" },
          { ja: "実質リターン", en: "Net return" },
          { ja: "実質還元率", en: "Effective rate" },
        ],
        rows: [
          [
            { ja: "10,000円", en: "10,000 yen" },
            { ja: "3,000円", en: "3,000 yen" },
            { ja: "+1,000円", en: "+1,000 yen" },
            { ja: "10.0%", en: "10.0%" },
          ],
          [
            { ja: "20,000円", en: "20,000 yen" },
            { ja: "6,000円", en: "6,000 yen" },
            { ja: "+4,000円", en: "+4,000 yen" },
            { ja: "20.0%", en: "20.0%" },
          ],
          [
            { ja: "30,000円", en: "30,000 yen" },
            { ja: "9,000円", en: "9,000 yen" },
            { ja: "+7,000円", en: "+7,000 yen" },
            { ja: "23.3%", en: "23.3%" },
          ],
          [
            { ja: "50,000円", en: "50,000 yen" },
            { ja: "15,000円", en: "15,000 yen" },
            { ja: "+13,000円", en: "+13,000 yen" },
            { ja: "26.0%", en: "26.0%" },
          ],
          [
            { ja: "100,000円", en: "100,000 yen" },
            { ja: "30,000円", en: "30,000 yen" },
            { ja: "+28,000円", en: "+28,000 yen" },
            { ja: "28.0%", en: "28.0%" },
          ],
          [
            { ja: "200,000円", en: "200,000 yen" },
            { ja: "60,000円", en: "60,000 yen" },
            { ja: "+58,000円", en: "+58,000 yen" },
            { ja: "29.0%", en: "29.0%" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "寄附額が増えれば増えるほど、固定費の2,000円が薄まり、実質還元率は30%に漸近します。しかし、寄附できる上限は『年収・家族構成で決まる住民税の控除枠』に縛られます。枠を超えて寄附すると、超過分は自腹で控除されません。",
          en: "The bigger the donation, the smaller the fixed 2,000 yen looks, and the effective return asymptotes toward 30%. But your donation ceiling is capped by the resident-tax deduction room your income and household allow. Go over, and the excess comes out of your own pocket without any deduction.",
        },
      },
      {
        type: "label",
        label: {
          ja: "損益分岐点 — 寄附額10,000円の意味",
          en: "Break-even — what 10,000 yen really means",
        },
        text: {
          ja: "寄附額が10,000円の場合、返礼品価値3,000円・自己負担2,000円なので、リターンはわずか+1,000円です。これより少ない寄附は『手間を考えると割に合わない』水準。事実上、ふるさと納税は『年収300万円以上・寄附枠2万円以上』が損益分岐点と言えます。",
          en: "At a 10,000-yen donation, you get a 3,000-yen gift minus the 2,000-yen out-of-pocket: a meager 1,000 yen of return. Smaller than that and the effort isn't worth it. Practically, the break-even point for furusato nozei is income of 3 million yen and a donation room of at least 20,000 yen.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "年収別の寄附上限と『得する金額』の目安",
    headingEn: "Annual Income vs Cap",
    lead: {
      ja: "年収・家族構成によって寄附上限は大きく変わります。代表的な独身会社員のケースで整理します。",
      en: "The donation cap depends heavily on income and household composition. Let's look at the classic single salaried worker case.",
    },
    blocks: [
      {
        type: "table",
        caption: {
          ja: "独身・社会保険加入の会社員（給与所得のみ）の目安。各種控除なし前提",
          en: "Single salaried worker enrolled in social insurance (salary income only). Assumes no other deductions.",
        },
        headers: [
          { ja: "年収", en: "Annual income" },
          { ja: "寄附上限の目安", en: "Approximate cap" },
          { ja: "実質リターン（30%還元）", en: "Net return (30% rebate)" },
        ],
        rows: [
          [
            { ja: "300万円", en: "3M yen" },
            { ja: "約 28,000円", en: "~28,000 yen" },
            { ja: "約 +6,400円", en: "~+6,400 yen" },
          ],
          [
            { ja: "400万円", en: "4M yen" },
            { ja: "約 42,000円", en: "~42,000 yen" },
            { ja: "約 +10,600円", en: "~+10,600 yen" },
          ],
          [
            { ja: "500万円", en: "5M yen" },
            { ja: "約 61,000円", en: "~61,000 yen" },
            { ja: "約 +16,300円", en: "~+16,300 yen" },
          ],
          [
            { ja: "700万円", en: "7M yen" },
            { ja: "約 108,000円", en: "~108,000 yen" },
            { ja: "約 +30,400円", en: "~+30,400 yen" },
          ],
          [
            { ja: "1,000万円", en: "10M yen" },
            { ja: "約 176,000円", en: "~176,000 yen" },
            { ja: "約 +50,800円", en: "~+50,800 yen" },
          ],
          [
            { ja: "1,500万円", en: "15M yen" },
            { ja: "約 389,000円", en: "~389,000 yen" },
            { ja: "約 +114,700円", en: "~+114,700 yen" },
          ],
          [
            { ja: "2,000万円", en: "20M yen" },
            { ja: "約 564,000円", en: "~564,000 yen" },
            { ja: "約 +167,200円", en: "~+167,200 yen" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "年収500万円なら年6.1万円の枠で1.6万円相当のリターン。年収1,000万円なら年17.6万円の枠で5万円相当のリターンです。年収が上がるほど枠が広がり、固定費2,000円の影響も薄まるため、リターンの絶対額・率ともに増えます。",
          en: "At 5M yen of annual income, a 61,000-yen cap yields about 16,000 yen in returns. At 10M, a 176,000-yen cap yields about 50,000 yen. As income rises, the cap grows and the fixed 2,000-yen cost fades, so both the absolute return and the return rate go up.",
        },
      },
      {
        type: "label",
        label: { ja: "家族構成での違い", en: "How family composition changes things" },
        text: {
          ja: "配偶者控除・扶養控除がある場合、課税所得が下がるため上限額も下がります。たとえば年収500万円・配偶者あり（専業主婦/夫）の上限は約4.9万円。シミュレーターで必ず家族構成を入れて試算してください。",
          en: "If you have a spousal or dependent deduction, your taxable income drops — and so does your cap. For example, a 5M-yen earner with a stay-at-home spouse has a cap of around 49,000 yen. Always plug your household into a simulator before donating.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "もっとも得をするのは『高年収・独身・各種控除なし』の人。逆に住宅ローン控除フル適用中・iDeCo満額拠出中の人は、上限がかなり下がるので注意。",
          en: "The biggest winners are high earners who are single with no other deductions. Watch out if you're already fully using the mortgage tax credit or maxing out iDeCo — your cap drops considerably.",
        },
      },
    ],
  },
  {
    n: "05",
    headingJa: "ポイント還元廃止後の『見えないコスト』",
    headingEn: "Hidden Costs After 2025",
    lead: {
      ja: "実質還元率を計算するときに、見落とされがちなコストが3つあります。",
      en: "When you calculate your effective rebate, there are three costs people routinely miss.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "①ポータルポイントの消失",
          en: "(1) Lost portal points",
        },
        text: {
          ja: "2025年10月以前は、楽天ふるさと納税の場合、SPU（スーパーポイントアッププログラム）と組み合わせて寄附額の数%〜十数%のポイントが付与されていました。年間10万円寄附で1万ポイント以上稼げたケースも珍しくなく、実質還元率は40%超。これがゼロになりました。",
          en: "Before October 2025, Rakuten Furusato Nozei donors could combine the SPU (Super Point-Up Program) to earn anywhere from a few percent to over ten percent of the donation back in points. It wasn't unusual to collect 10,000+ points on 100,000 yen in donations, pushing the effective rebate past 40%. All of that is now zero.",
        },
      },
      {
        type: "label",
        label: {
          ja: "②返礼品の品質低下リスク",
          en: "(2) Risk of lower gift quality",
        },
        text: {
          ja: "5割ルールと地場産品基準の厳格化で、自治体は『3割以内・地場産・送料込み』という縛りを満たすため、調達コストの低い品目に集約しがちです。同じ寄附額でも以前ほど豪華な返礼品が選べない、という声が増えています。",
          en: "With the 50% cost rule and tighter local-product standards, municipalities have to fit within 'under 30%, local, shipping included,' and they tend to concentrate on cheaper-to-source items. Users increasingly say that the same donation buys a less impressive gift than it used to.",
        },
      },
      {
        type: "label",
        label: { ja: "③申告の手間", en: "(3) The filing hassle" },
        text: {
          ja: "ワンストップ特例（5自治体以内）を超えて寄附する場合、確定申告が必要になります。e-Taxで30分〜1時間程度ですが、医療費控除や住宅ローン控除（初年度）と合わせて申告する人も多く、実務的なコストは無視できません。時給換算で1,000〜3,000円程度のコストとして見ておくのが現実的です。",
          en: "Donate to more than five municipalities and the one-stop exception no longer applies — you have to file a tax return. E-Tax takes 30 minutes to an hour, but many people combine it with medical-expense or first-year mortgage credit filings, so the real-world cost isn't trivial. On an hourly basis, budget 1,000 to 3,000 yen of opportunity cost.",
        },
      },
      {
        type: "p",
        text: {
          ja: "これらを引いたうえでの『実質リターン』は、改正前と比べて1〜2割程度は目減りしている、というのが2026年4月時点の体感です。それでも年収500万円以上で年1万円以上のリターンが期待できるなら、選択しない手はありません。",
          en: "Net these out and the effective return as of April 2026 feels about 10–20% smaller than before the reforms. Even so, if you earn 5M yen or more and can count on 10,000 yen or more of returns a year, there's still no reason to pass it up.",
        },
      },
    ],
  },
  {
    n: "06",
    headingJa: "結論 — 誰に・いくら向いているか",
    headingEn: "Bottom Line",
    lead: {
      ja: "2026年改正後の『新しいふるさと納税』は、誰にとっての最適解か。",
      en: "After the 2026 reforms, who does the new furusato nozei actually make sense for?",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "年収300万円未満：寄附枠が小さすぎて手間に合わない。スキップ推奨",
            en: "Income under 3M yen: the cap is too small to be worth the effort — skip.",
          },
          {
            ja: "年収300〜500万円：3〜5万円の寄附で1万円前後のリターン。お米・肉などの定番品で十分得",
            en: "3M–5M yen: 30–50K yen of donations yields around 10K in returns. Staples like rice and meat deliver the value.",
          },
          {
            ja: "年収500〜1,000万円：6〜18万円の寄附で1.5〜5万円のリターン。複数自治体を組み合わせて家計の実費削減に充てる",
            en: "5M–10M yen: 60–180K yen of donations yields 15–50K in returns. Combine multiple municipalities to trim household spending.",
          },
          {
            ja: "年収1,000万円以上：上限が大きく開く。冷凍食品・日用品・ふるさと納税で家計の食費・雑費の相当部分をカバー可能",
            en: "10M yen and up: the cap opens up dramatically. Frozen foods, household goods, and gift items can cover a meaningful share of household food and miscellaneous spending.",
          },
          {
            ja: "住宅ローン控除フル・iDeCo満額・配偶者控除あり：上限が大きく下がるので必ず再シミュレート",
            en: "Full mortgage credit, maxed iDeCo, or spousal deduction: your cap drops sharply — always re-run the simulator.",
          },
        ],
      },
      {
        type: "callout",
        text: {
          ja: "ポイント還元という『おまけ』が消えた今、ふるさと納税は『高年収者ほど純粋に得をする制度』に戻った。改正の趣旨どおりだが、利用者目線では『得が薄くなった』のも事実。",
          en: "With the points bonus gone, furusato nozei has reverted to a system that rewards high earners most. That matches the intent of the reforms — but from a user's perspective, it's undeniably less generous than it used to be.",
        },
      },
      {
        type: "p",
        text: {
          ja: "とはいえ、自己負担2,000円という枠組み自体は変わりません。年収500万円以上で確実に上限まで使い切る前提なら、年1万円以上のリターンは堅い。新NISA・iDeCoほどのインパクトはないものの、もっとも手軽な節税策であることに変わりはありません。",
          en: "That said, the 2,000-yen out-of-pocket structure itself is unchanged. If you earn 5M yen or more and reliably use the whole cap, 10,000 yen or more of annual return is a safe bet. It doesn't hit as hard as the new NISA or iDeCo, but it remains the easiest tax-saving move available.",
        },
      },
    ],
  },
];

export default function FurusatoTaxBreakevenPage() {
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
            <T ja="ライフハック / 税金" en="Life Hacks / Tax" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={
              <>
                <span style={{ color: COLUMN_COLOR }}>ふるさと納税</span>
                <span className="text-foreground/70">の損益分岐点</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— 2026年改正後の本当の損得</span>
              </>
            }
            en={
              <>
                <span style={{ color: COLUMN_COLOR }}>Furusato Nozei</span>
                <span className="text-foreground/70">: The Break-even Point</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— The Real Math After the 2026 Reforms</span>
              </>
            }
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          The Real Economics of Furusato Nozei in 2026
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
          <span><T ja="約 9 分" en="~9 min read" /></span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="全 6 章" en="6 chapters" /></span>
        </div>
      </header>

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
            ja="本コラムは2026年4月時点の制度の一般的な解説を目的としています。寄附上限額・控除額・返礼品の還元率は年収・家族構成・各種控除の状況により大きく変動します。実際の寄附にあたっては、各ふるさと納税ポータルのシミュレーターおよび税務署・税理士等の専門家にご確認ください。"
            en="This column offers a general overview of the rules as of April 2026. Donation caps, deduction amounts, and gift rebate rates all vary widely depending on income, household, and other deductions. Before donating, please check each furusato nozei portal's simulator and consult the tax office or a qualified tax professional."
          />
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <ShareButton title={TITLE} />
      </div>

      <RecommendedReads currentSlug="furusato-tax-breakeven" currentTags={["ふるさと納税", "税金", "節税"]} />

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
