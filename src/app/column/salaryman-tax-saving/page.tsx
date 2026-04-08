import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/salaryman-tax-saving";
const TITLE = "社会人のための節税方法 — 知らないと損する7つの制度";
const SUMMARY =
  "会社員でも使える節税策は意外と多い。ふるさと納税・iDeCo・新NISA・医療費控除・生命保険料控除・住宅ローン控除・特定支出控除の7つを、2026年現在の制度に沿って整理します。";
const SUMMARY_EN =
  "Salaried workers have more tax-saving options than most realize. This guide walks through the seven core tools — furusato nozei, iDeCo, the new NISA, medical expense deductions, life insurance premium deductions, the mortgage tax credit, and the specified expense deduction — as of 2026.";
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
    headingJa: "そもそも会社員に節税余地はあるのか",
    headingEn: "Is There Room to Save?",
    lead: {
      ja: "「会社員は給与天引きで税金が決まるから節税できない」と言われがちですが、それは半分正しく、半分間違っています。",
      en: "People often say salaried workers can't save on taxes because withholding handles it all. That's half right and half wrong.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "確かに会社員の給与所得は源泉徴収で計算され、フリーランスのように経費を自由に積み上げることはできません。しかし、所得税・住民税には『控除（こうじょ）』という仕組みがあり、申告すれば課税対象から差し引ける枠が存在します。控除を最大限に使うことが、会社員にとっての『節税』の本質です。",
          en: "It's true that salary income is calculated via withholding, and employees can't rack up expenses the way freelancers do. But income tax and resident tax both have deductions — amounts you can subtract from taxable income if you file. Maximizing these deductions is what tax saving really means for a salaried worker.",
        },
      },
      {
        type: "p",
        text: {
          ja: "また、運用益が非課税になる制度（NISA・iDeCo）も実質的な節税策です。これらは申告が不要なものから、年末調整や確定申告で申告するものまで、難易度がさまざまです。本コラムでは7つの代表策を、難易度順に整理して紹介します。",
          en: "Accounts that make investment gains tax-free (NISA and iDeCo) are effectively tax-saving tools too. Some require no filing at all; others need year-end adjustment or a tax return. This column walks through seven core strategies, ordered by difficulty.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "節税の基本式：『使える控除を漏らさない × 非課税口座を最大限活用する』。この2点に尽きます。",
          en: "The basic formula for tax saving: don't miss any available deduction, and make full use of tax-free accounts. It really comes down to those two things.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "ふるさと納税 — もっとも手軽な節税の入口",
    headingEn: "Furusato Nozei",
    lead: {
      ja: "ふるさと納税は、自己負担2,000円で全国の自治体から返礼品が受け取れる『寄附金控除』の一種です。会社員の節税策として真っ先に挙がる定番制度です。",
      en: "Furusato nozei (hometown tax donation) is a form of charitable-contribution deduction. For an out-of-pocket cost of just 2,000 yen, you can receive gifts from municipalities across Japan. It's the go-to first step for salaried tax savers.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "仕組み", en: "How it works" },
        text: {
          ja: "好きな自治体に寄附すると、寄附額から2,000円を引いた金額が、翌年の住民税（および所得税）から控除されます。年収・家族構成によって上限額が決まっており、その範囲内であれば実質負担2,000円で返礼品分だけ得をする計算になります。",
          en: "Donate to any municipality you like, and all but 2,000 yen of the donation is deducted from next year's resident tax (and income tax). Your annual cap is set by income and household composition, and as long as you stay within it, your real out-of-pocket cost is 2,000 yen and the gift is pure upside.",
        },
      },
      {
        type: "label",
        label: { ja: "ワンストップ特例", en: "One-stop exception" },
        text: {
          ja: "1年間の寄附先が5自治体以内であれば、確定申告をしなくても申請書を郵送するだけで控除が受けられる『ワンストップ特例制度』が使えます。会社員にとっては最も手間の少ないルートです。",
          en: "If you donate to five or fewer municipalities in a year, you can use the one-stop exception: just mail in an application form — no tax return required. It's the lowest-effort path for salaried workers.",
        },
      },
      {
        type: "label",
        label: {
          ja: "2025〜2026年の重要な変更点",
          en: "Key 2025–2026 rule changes",
        },
        text: {
          ja: "2025年10月以降、各ふるさと納税ポータルサイトによる『ポイント還元』は廃止されました。さらに2026年10月以降は地場産品基準が厳格化され、返礼品ラインナップが見直される見込みです。『お得感』のピークは過ぎつつありますが、純粋な税控除＋返礼品の枠組みは変わりません。",
          en: "As of October 2025, portal-site point rebates (Rakuten points, PayPay points, etc.) have been banned. From October 2026 the local-product rules will tighten further, and the gift lineup will be reworked. The peak of the 'great deal' era is passing, but the underlying tax-deduction-plus-gift framework is intact.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "上限額は年収・家族構成で変動。各ポータルのシミュレーターで必ず試算する",
            en: "Your cap varies with income and household. Always run the simulator on a portal site.",
          },
          {
            ja: "寄附は1月〜12月の暦年単位。年末に駆け込みが集中するのでサーバーが重くなりがち",
            en: "Donations are counted by calendar year (Jan–Dec). Year-end rush traffic slows the servers.",
          },
          {
            ja: "ワンストップ特例は寄附した翌年1月10日必着。期限切れは確定申告で救済可能",
            en: "One-stop exception forms must arrive by January 10 of the following year. If you miss it, a tax return still works.",
          },
          {
            ja: "クレジットカード決済時のカード会社ポイントは引き続き付与される",
            en: "Credit card reward points on payment are still earned as usual.",
          },
        ],
      },
    ],
  },
  {
    n: "03",
    headingJa: "iDeCo — 掛金が全額所得控除になる最強の老後資金",
    headingEn: "iDeCo (Defined Contribution Pension)",
    lead: {
      ja: "iDeCo（個人型確定拠出年金）は、自分で積み立てた掛金が全額『小規模企業共済等掛金控除』として所得控除される、節税効果の極めて高い制度です。",
      en: "iDeCo (individual defined-contribution pension) lets you deduct your entire contribution from taxable income under the small-business mutual aid premium deduction. The tax benefit is enormous.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "3つの税制メリット", en: "Three tax benefits" },
        text: {
          ja: "①拠出時：掛金が全額所得控除になる。②運用時：運用益が非課税。③受取時：退職所得控除や公的年金等控除が使える。この3点セットが揃う制度は他にありません。",
          en: "(1) On contribution: the full amount is deducted from income. (2) During investment: gains are tax-free. (3) On withdrawal: the retirement-income deduction or public-pension deduction applies. No other system bundles all three.",
        },
      },
      {
        type: "p",
        text: {
          ja: "たとえば年収500万円の会社員が月2万円（年24万円）を拠出すると、所得税・住民税合わせておおよそ年4.8万円前後の節税になります（税率約20％想定）。これが拠出を続ける限り毎年効きます。",
          en: "For a salaried worker earning 5 million yen contributing 20,000 yen a month (240,000 yen a year), combined income and resident tax savings come to roughly 48,000 yen per year (assuming an effective rate around 20%). That benefit repeats every year you keep contributing.",
        },
      },
      {
        type: "label",
        label: {
          ja: "2026年12月の制度改正に注意",
          en: "December 2026 rule change",
        },
        text: {
          ja: "2026年12月施行の改正により、企業年金のない会社員の月額拠出上限が現行の23,000円から62,000円に大幅引き上げされる予定です。実際に拠出限度額が反映されるのは2027年1月引き落とし分から。節税余地が一気に広がります。",
          en: "A reform effective December 2026 will raise the monthly contribution ceiling for salaried workers without a corporate pension from the current 23,000 yen to 62,000 yen. The new limit applies from the January 2027 withdrawal onward, opening up dramatically more room to save.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "原則60歳まで引き出せない（流動性は犠牲になる）",
            en: "In principle you can't withdraw until age 60 — liquidity is the trade-off.",
          },
          {
            ja: "金融機関ごとに口座管理手数料が異なる。ネット証券系は安価",
            en: "Account fees vary by institution. Online brokers are generally cheapest.",
          },
          {
            ja: "投資信託は信託報酬の安いインデックス型を選ぶのが基本",
            en: "Stick to low-fee index funds as your default choice.",
          },
          {
            ja: "申告は年末調整時に『小規模企業共済等掛金払込証明書』を提出するだけ",
            en: "Filing is as simple as submitting the contribution certificate at year-end adjustment.",
          },
        ],
      },
      {
        type: "callout",
        text: {
          ja: "節税効果と老後資金作りを同時に達成できる制度。流動性さえ許容できるなら、会社員の節税策の本命です。",
          en: "You save on taxes and build retirement funds at the same time. If you can live with the liquidity trade-off, iDeCo is the top pick for salaried tax savers.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "新NISA — 運用益が一生非課税になる枠",
    headingEn: "New NISA",
    lead: {
      ja: "2024年に刷新された新NISAは、所得控除こそありませんが、運用益と配当が無期限・非課税になる点で実質的な節税策です。",
      en: "The new NISA launched in 2024 doesn't provide an income deduction, but investment gains and dividends are tax-free forever — effectively a powerful tax-saving vehicle.",
    },
    blocks: [
      {
        type: "table",
        caption: {
          ja: "新NISAの非課税枠（2024年〜現在）",
          en: "New NISA tax-free allowances (2024 – present)",
        },
        headers: [
          { ja: "項目", en: "Item" },
          { ja: "つみたて投資枠", en: "Tsumitate slot" },
          { ja: "成長投資枠", en: "Growth slot" },
          { ja: "合計", en: "Total" },
        ],
        rows: [
          [
            { ja: "年間投資上限", en: "Annual cap" },
            { ja: "120万円", en: "1.2M yen" },
            { ja: "240万円", en: "2.4M yen" },
            { ja: "360万円", en: "3.6M yen" },
          ],
          [
            { ja: "生涯非課税保有限度額", en: "Lifetime holding cap" },
            { ja: "—", en: "—" },
            { ja: "1,200万円まで", en: "up to 12M yen" },
            { ja: "1,800万円", en: "18M yen" },
          ],
          [
            { ja: "対象商品", en: "Eligible products" },
            { ja: "金融庁認定の投信中心", en: "Mostly FSA-approved funds" },
            { ja: "上場株・ETF・投信", en: "Listed stocks, ETFs, funds" },
            { ja: "—", en: "—" },
          ],
          [
            { ja: "非課税期間", en: "Tax-free period" },
            { ja: "無期限", en: "Indefinite" },
            { ja: "無期限", en: "Indefinite" },
            { ja: "—", en: "—" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "通常の課税口座では運用益・配当に約20.315％の税金がかかります。仮に100万円の利益が出れば約20万円が税金として消える計算ですが、NISA口座であればまるごと自分のものになります。20年・30年という長期で見ると、この差は数百万円単位になり得ます。",
          en: "In an ordinary taxable account, gains and dividends are taxed at roughly 20.315%. On a 1-million-yen profit, about 200,000 yen disappears in tax; inside a NISA account the whole thing stays yours. Over 20 or 30 years the difference easily runs to millions of yen.",
        },
      },
      {
        type: "label",
        label: { ja: "iDeCoとの使い分け", en: "iDeCo vs NISA" },
        text: {
          ja: "iDeCoは『拠出時の所得控除＋老後資金』、NISAは『運用益非課税＋いつでも引き出し可能』。どちらか一方ではなく、両方を併用するのが基本戦略です。流動性が必要な分はNISAで、確実に老後まで置ける分はiDeCoで、と使い分けます。",
          en: "iDeCo is 'income deduction on contribution + retirement savings'; NISA is 'tax-free gains + withdraw anytime.' The baseline strategy is to use both, not pick one. Put funds you might need into NISA, and funds you can leave until retirement into iDeCo.",
        },
      },
    ],
  },
  {
    n: "05",
    headingJa: "医療費控除・セルフメディケーション税制",
    headingEn: "Medical Expense Deduction",
    lead: {
      ja: "病院にかかった年は、医療費控除を忘れずに。会社員でも確定申告で申請できる代表的な節税策です。",
      en: "In any year when you rack up medical bills, don't forget the medical expense deduction. It's one of the classic tax savings salaried workers can claim on a tax return.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "医療費控除の基本",
          en: "The basics of the medical expense deduction",
        },
        text: {
          ja: "1年間（1〜12月）に支払った医療費が、自己負担額10万円（または所得の5％のいずれか低い方）を超えた場合、その超過分が所得から控除されます。家族分を合算して申告できるのが大きなポイントです。",
          en: "If your annual (Jan–Dec) out-of-pocket medical expenses exceed 100,000 yen — or 5% of your income if that's lower — the excess is deductible from income. Crucially, you can combine the bills for your whole household.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "対象は本人＋生計を一にする家族の医療費合計",
            en: "Covers yourself plus family members who share household finances.",
          },
          {
            ja: "病院・歯科・薬局に加え、通院の交通費（領収書のないバス代等もOK）も対象",
            en: "Hospitals, dental, pharmacies — plus transport to appointments, even bus fares without receipts.",
          },
          {
            ja: "出産費用、医療目的の歯科矯正、レーシック、不妊治療なども原則対象",
            en: "Childbirth, medically necessary orthodontics, LASIK, and fertility treatment generally qualify.",
          },
          {
            ja: "美容目的・健康増進サプリなどは対象外",
            en: "Cosmetic procedures and general health supplements are not eligible.",
          },
        ],
      },
      {
        type: "label",
        label: {
          ja: "セルフメディケーション税制（特例）",
          en: "Self-medication tax exception",
        },
        text: {
          ja: "健康診断などを受けている人が、特定のOTC医薬品(市販薬)を年12,000円超購入した場合、超過分を最大8.8万円まで所得控除できる特例です。医療費控除との併用はできず、どちらか有利な方を選択します。家族の医療費合計が10万円に届かない年は、こちらが使えるか確認しましょう。",
          en: "If you've had a health checkup and you spend more than 12,000 yen a year on certain OTC medicines, you can deduct the excess up to 88,000 yen. You can't combine it with the regular medical deduction — pick whichever is better. In a year when the household medical total doesn't reach 100,000 yen, check whether this alternative fits.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "領収書は捨てない。年末にまとめて家族分の医療費を集計するのが鉄則です。",
          en: "Don't throw out receipts. Tally the household's medical costs in one sitting at year-end — that's the rule to live by.",
        },
      },
    ],
  },
  {
    n: "06",
    headingJa: "生命保険料控除・地震保険料控除",
    headingEn: "Insurance Premium Deductions",
    lead: {
      ja: "民間の保険に入っている人は、年末調整で保険料控除を申告するだけで税金が戻ります。新規加入を勧める話ではなく、『すでに払っているなら必ず申告しよう』という話です。",
      en: "If you already carry private insurance, claiming the premium deduction at year-end adjustment gets some tax back. This isn't about signing up for new policies — it's about not leaving money on the table on premiums you're already paying.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "生命保険料控除（新制度）",
          en: "Life insurance premium deduction (new system)",
        },
        text: {
          ja: "①一般生命保険料、②介護医療保険料、③個人年金保険料、の3区分があり、それぞれ最大4万円（住民税は2.8万円）まで控除されます。3区分すべて使えば所得税で最大12万円・住民税で最大7万円の所得控除になります。",
          en: "There are three categories — general life insurance, nursing care/medical insurance, and individual annuity insurance — each capped at 40,000 yen (28,000 yen for resident tax). Using all three gives you up to 120,000 yen of income-tax deduction and 70,000 yen of resident-tax deduction.",
        },
      },
      {
        type: "label",
        label: { ja: "地震保険料控除", en: "Earthquake insurance deduction" },
        text: {
          ja: "地震保険料は最大5万円まで所得控除できます。火災保険単体は対象外なので、加入時に地震保険特約が付いているか確認が必要です。",
          en: "Earthquake insurance premiums are deductible up to 50,000 yen. Standalone fire insurance isn't eligible, so check whether your policy includes an earthquake rider.",
        },
      },
      {
        type: "p",
        text: {
          ja: "これらは年末調整で完結するため、保険会社から10〜11月頃に届く『控除証明書』を会社に提出するだけです。提出忘れが意外に多いので、郵便物のチェックを忘れずに。",
          en: "Both deductions are handled entirely at year-end adjustment — you just hand your employer the certificate that arrives from the insurer in October or November. Forgetting to submit it is surprisingly common, so keep an eye on the mail.",
        },
      },
    ],
  },
  {
    n: "07",
    headingJa: "住宅ローン控除と特定支出控除",
    headingEn: "Mortgage & Specified Expenses",
    lead: {
      ja: "対象者は限られますが、当てはまれば節税効果がきわめて大きい2つの制度です。",
      en: "These two only apply to a subset of workers, but when they do the tax savings are massive.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "住宅ローン控除（住宅借入金等特別控除）",
          en: "Mortgage tax credit",
        },
        text: {
          ja: "住宅ローンで家を購入・新築・増改築した会社員は、年末ローン残高の0.7％を所得税（足りなければ住民税の一部）から税額控除できる制度です。控除期間は新築住宅で最大13年。所得控除ではなく『税額控除』なので、節税インパクトが非常に大きいのが特徴です。",
          en: "If you bought, built, or renovated a home with a mortgage, you can credit 0.7% of the year-end loan balance directly against your income tax (with any remainder offset against part of your resident tax). For new construction the credit runs up to 13 years. It's a tax credit rather than an income deduction, which makes the impact enormous.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "初年度のみ確定申告が必要。2年目以降は年末調整で完結",
            en: "Only the first year needs a tax return; subsequent years are handled through year-end adjustment.",
          },
          {
            ja: "省エネ基準を満たさない新築は控除対象外。事前確認が必須",
            en: "New builds that don't meet energy-efficiency standards are ineligible — check before buying.",
          },
          {
            ja: "床面積要件（原則50㎡以上）など細かい条件あり",
            en: "There are fine-print conditions such as a minimum floor area of 50 m².",
          },
        ],
      },
      {
        type: "label",
        label: {
          ja: "特定支出控除（あまり知られていない）",
          en: "Specified expense deduction (little-known)",
        },
        text: {
          ja: "通勤費・転居費・研修費・資格取得費・図書費・衣服費・交際費など、業務に必要な支出を会社員でも経費的に控除できる制度です。ただし、控除の対象になるのはこれらの合計が『給与所得控除額の1/2』を超えた部分のみ。ハードルは高いですが、士業資格を取りに行く年や転勤の年など、当てはまる人は確定申告で挑戦する価値があります。",
          en: "Salaried workers can deduct work-related spending — commuting, relocation, training, qualification exams, books, work clothes, and business entertainment — as a kind of expense. The catch: only the portion above half of the standard salary income deduction counts. The bar is high, but in a year you pursue a professional qualification or relocate, it can be worth attempting on a tax return.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "住宅ローン控除は申告必須。1年目を忘れると後から取り戻すのが面倒なので、購入したその年にカレンダーへ入れておきましょう。",
          en: "The mortgage tax credit must be filed. Missing year one and clawing it back later is a pain, so put a reminder on your calendar the year you buy.",
        },
      },
    ],
  },
  {
    n: "08",
    headingJa: "実務上の優先順位 — 何から始めるか",
    headingEn: "Where to Start",
    lead: {
      ja: "ここまで7つの制度を紹介しましたが、すべてを一度に始める必要はありません。難易度・効果・流動性のバランスで優先順位をつけるのが現実的です。",
      en: "We've covered seven tools, but you don't need to tackle them all at once. Prioritize by difficulty, impact, and liquidity.",
    },
    blocks: [
      {
        type: "table",
        caption: {
          ja: "難易度と節税インパクトの整理（編集部目安）",
          en: "Difficulty vs. tax-saving impact (editor estimates)",
        },
        headers: [
          { ja: "制度", en: "Tool" },
          { ja: "難易度", en: "Difficulty" },
          { ja: "節税インパクト", en: "Tax-saving impact" },
          { ja: "流動性", en: "Liquidity" },
        ],
        rows: [
          [
            { ja: "ふるさと納税", en: "Furusato nozei" },
            { ja: "★☆☆", en: "★☆☆" },
            { ja: "★★☆", en: "★★☆" },
            { ja: "—", en: "—" },
          ],
          [
            { ja: "生命保険料控除", en: "Life insurance deduction" },
            { ja: "★☆☆", en: "★☆☆" },
            { ja: "★☆☆", en: "★☆☆" },
            { ja: "—", en: "—" },
          ],
          [
            { ja: "新NISA", en: "New NISA" },
            { ja: "★★☆", en: "★★☆" },
            { ja: "★★★（長期）", en: "★★★ (long term)" },
            { ja: "高", en: "High" },
          ],
          [
            { ja: "iDeCo", en: "iDeCo" },
            { ja: "★★☆", en: "★★☆" },
            { ja: "★★★", en: "★★★" },
            { ja: "低（60歳まで）", en: "Low (until age 60)" },
          ],
          [
            { ja: "医療費控除", en: "Medical expense deduction" },
            { ja: "★★☆", en: "★★☆" },
            { ja: "★☆〜★★", en: "★☆ – ★★" },
            { ja: "—", en: "—" },
          ],
          [
            { ja: "住宅ローン控除", en: "Mortgage tax credit" },
            { ja: "★★★（初年度）", en: "★★★ (year 1)" },
            { ja: "★★★", en: "★★★" },
            { ja: "—", en: "—" },
          ],
          [
            { ja: "特定支出控除", en: "Specified expenses" },
            { ja: "★★★", en: "★★★" },
            { ja: "★☆〜★★", en: "★☆ – ★★" },
            { ja: "—", en: "—" },
          ],
        ],
      },
      {
        type: "list",
        items: [
          {
            ja: "まずはふるさと納税と保険料控除など『申告するだけ』の制度を漏らさない",
            en: "Start by not missing the 'just file it' items like furusato nozei and insurance deductions.",
          },
          {
            ja: "次に新NISAで運用益の非課税枠を確保する",
            en: "Next, lock in the tax-free investment-gains room via the new NISA.",
          },
          {
            ja: "老後資金として置ける余裕資金があればiDeCoを追加（2026年12月の上限拡大も視野に）",
            en: "If you have cash you can leave until retirement, add iDeCo — keeping the December 2026 cap hike in mind.",
          },
          {
            ja: "家を買う／医療費が多い／資格取得する年は、忘れず確定申告",
            en: "In a year you buy a home, rack up medical bills, or pursue a qualification, don't skip the tax return.",
          },
        ],
      },
      {
        type: "callout",
        text: {
          ja: "節税の本質は『将来の自分に資金を移すこと』。今年の手取りを少し減らしてでも、長期的に見て効くものから順に手を付けるのがおすすめです。",
          en: "The essence of tax saving is shifting money to your future self. It's worth trimming this year's take-home a little to prioritize the things that pay off over the long run.",
        },
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
            <T ja="ライフハック / 税金" en="Life Hacks / Tax" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={
              <>
                社会人のための
                <br className="hidden sm:block" />
                <span style={{ color: COLUMN_COLOR }}>節税方法</span>
                <span className="text-foreground/70"> — 知らないと損する7つの制度</span>
              </>
            }
            en={
              <>
                A Salaryman&apos;s Guide to
                <br className="hidden sm:block" />
                <span style={{ color: COLUMN_COLOR }}>Tax Saving</span>
                <span className="text-foreground/70"> — 7 Tools You Can&apos;t Afford to Miss</span>
              </>
            }
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          A Salaryman&apos;s Guide to Tax Saving in 2026
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
          <span><T ja="全 8 章" en="8 chapters" /></span>
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
            ja="本コラムは2026年4月時点の制度の一般的な解説を目的としています。各制度の上限額・要件・税率は法改正や個々の状況により変動します。実際の適用にあたっては、勤務先の人事・総務、税務署、税理士、ファイナンシャルプランナー等の専門家に必ずご確認ください。"
            en="This column offers a general overview of the rules as of April 2026. Caps, requirements, and tax rates all change with legislation and personal circumstances. Before acting, please consult your HR or accounting department, the tax office, a tax accountant, or a qualified financial planner."
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
