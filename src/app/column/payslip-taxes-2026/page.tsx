import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { RecommendedReads } from "@/components/RecommendedReads";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/payslip-taxes-2026";
const TITLE = "給与明細の税金と社会保険料 — 天引きされる6項目の正体";
const SUMMARY =
  "毎月の給与明細に並ぶ「所得税・住民税・健康保険・厚生年金・雇用保険・介護保険」。何をどんな仕組みで引かれているのか、2026年度の最新料率で徹底解説。手取りを増やすヒントも。";
const SUMMARY_EN =
  "Every paycheque lists income tax, resident tax, health insurance, employees' pension, employment insurance, and long-term care insurance. This column explains exactly what each deduction is, how it is calculated, and what changed in the 2026 fiscal year.";
const DATE = "2026-04-10";

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
    headingJa: "給与明細の「控除」とは何か",
    headingEn: "What Are Payslip Deductions?",
    lead: {
      ja: "給与明細を受け取るたびに「総支給額と手取りの差が大きい」と感じる人は多いはずです。その差の正体は、法律で強制的に差し引かれる『法定控除』です。",
      en: "Every time you receive a payslip, the gap between gross pay and take-home pay can feel jarring. The difference is made up of legally mandated deductions — amounts the law requires your employer to withhold.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "法定控除には大きく分けて「税金」と「社会保険料」の2種類があります。税金は所得税と住民税、社会保険料は健康保険・厚生年金・雇用保険・介護保険（40歳以上）の計6項目です。これらは会社が代わりに支払う『天引き』の形をとっており、従業員が自分で振り込む必要はありません。",
          en: "Legally mandated deductions fall into two categories: taxes (income tax and resident tax) and social insurance premiums (health insurance, employees' pension, employment insurance, and — for those aged 40 and over — long-term care insurance). In total that is six line items. Your employer withholds them on your behalf, so you never have to transfer the money yourself.",
        },
      },
      {
        type: "label",
        label: { ja: "法定控除と法定外控除の違い", en: "Mandatory vs voluntary deductions" },
        text: {
          ja: "給与明細には法定控除のほかに『財形貯蓄』『社員食堂費』『組合費』などの法定外控除が載る場合があります。法定外控除は、会社と労働者側の労使協定があって初めて差し引ける任意のものです。本稿では法律で決まっている法定控除6項目に絞って解説します。",
          en: "In addition to the mandatory deductions, some payslips include voluntary items like employee savings plans, cafeteria charges, or union dues. These are optional and only valid if a labour-management agreement is in place. This column focuses strictly on the six legally mandated items.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "総支給額から法定控除6項目を引いた残りが『手取り（差引支給額）』です。年収600万円の人が実際に受け取る手取りは、おおよそ450〜470万円前後になります。",
          en: "Take-home pay is gross salary minus the six mandatory deductions. For someone earning 6 million yen a year, the take-home figure typically comes out somewhere between 4.5 and 4.7 million yen.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "所得税 — 毎月は概算、年末に精算する国税",
    headingEn: "Income Tax — Monthly Estimate, Year-End True-Up",
    lead: {
      ja: "所得税は国に納める税金です。会社員の場合、毎月の給与から『とりあえず』差し引かれ、12月の年末調整で正確な額に調整されます。",
      en: "Income tax goes to the national government. For salaried workers it is withheld monthly on an estimated basis, then reconciled to the exact figure at the year-end adjustment in December.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "計算の流れ", en: "How the calculation works" },
        text: {
          ja: "毎月の源泉所得税は、課税対象額（総支給額から社会保険料を引いた金額）を国税庁の『源泉徴収税額表』にあてはめて計算します。税率は5〜45%の8段階の超過累進課税です。年収が上がると、上の段の税率が上乗せされていくイメージです。",
          en: "Monthly withholding is calculated by looking up the taxable amount (gross pay minus social insurance premiums) in the National Tax Agency's withholding tax table. The rate is a progressive scale with eight brackets ranging from 5% to 45%. As income rises, higher rates apply only to the portion above each threshold.",
        },
      },
      {
        type: "table",
        caption: { ja: "所得税の速算表（2026年現在）", en: "Income tax rate schedule (2026)" },
        headers: [
          { ja: "課税所得", en: "Taxable income" },
          { ja: "税率", en: "Rate" },
          { ja: "控除額", en: "Deduction" },
        ],
        rows: [
          [
            { ja: "195万円以下", en: "Up to ¥1.95M" },
            { ja: "5%", en: "5%" },
            { ja: "0円", en: "¥0" },
          ],
          [
            { ja: "195万円超〜330万円以下", en: "¥1.95M–¥3.3M" },
            { ja: "10%", en: "10%" },
            { ja: "97,500円", en: "¥97,500" },
          ],
          [
            { ja: "330万円超〜695万円以下", en: "¥3.3M–¥6.95M" },
            { ja: "20%", en: "20%" },
            { ja: "427,500円", en: "¥427,500" },
          ],
          [
            { ja: "695万円超〜900万円以下", en: "¥6.95M–¥9M" },
            { ja: "23%", en: "23%" },
            { ja: "636,000円", en: "¥636,000" },
          ],
          [
            { ja: "900万円超〜1,800万円以下", en: "¥9M–¥18M" },
            { ja: "33%", en: "33%" },
            { ja: "1,536,000円", en: "¥1,536,000" },
          ],
          [
            { ja: "1,800万円超〜4,000万円以下", en: "¥18M–¥40M" },
            { ja: "40%", en: "40%" },
            { ja: "2,796,000円", en: "¥2,796,000" },
          ],
          [
            { ja: "4,000万円超", en: "Over ¥40M" },
            { ja: "45%", en: "45%" },
            { ja: "4,796,000円", en: "¥4,796,000" },
          ],
        ],
      },
      {
        type: "label",
        label: { ja: "2026年の重要な変更点", en: "What changed in 2026" },
        text: {
          ja: "2025年の税制改正により、2026年1月分給与から**基礎控除が48万円→58万円**に、**給与所得控除の最低保障額が55万円→65万円**に引き上げられました。これにより所得税がかかり始める年収の壁が従来の103万円から178万円に引き上げられています。源泉徴収税額表も全面改訂されており、毎月の天引き額が昨年より少なくなっているケースが多いです。",
          en: "The 2025 tax reform raised the basic deduction from ¥480,000 to ¥580,000 and the minimum floor of the salary income deduction from ¥550,000 to ¥650,000, effective January 2026 pay. As a result, the threshold at which income tax kicks in has risen from ¥1.03 million to ¥1.78 million. The withholding table was also fully revised, so many workers are seeing lower monthly withholding than last year.",
        },
      },
      {
        type: "p",
        text: {
          ja: "なお、所得税には「復興特別所得税」が2.1%上乗せされます（2013〜2037年）。給与明細上は合算されて記載されるのが一般的なため意識しにくいですが、正確には所得税額×102.1%が徴収されています。",
          en: "Income tax also carries a 2.1% surcharge for reconstruction (2013–2037). It typically appears combined with the base income tax on your payslip, so it is easy to overlook — but the actual amount withheld is income tax × 102.1%.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "住民税 — 去年の所得が今年6月に来る地方税",
    headingEn: "Resident Tax — Last Year's Income, This June",
    lead: {
      ja: "住民税は、都道府県と市区町村に納める地方税です。所得税と違い、毎年6月から翌年5月の12か月で分割して給与から天引きされます。",
      en: "Resident tax is a local tax paid to both the prefecture and municipality. Unlike income tax, it is collected in 12 instalments from June through to the following May.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "前年所得課税の仕組み", en: "Prior-year basis" },
        text: {
          ja: "住民税の特徴は『前年所得課税』です。2026年6月〜2027年5月に引かれる住民税は、2025年（1〜12月）の所得をもとに計算されます。転職・昇給・副業を始めた年は翌年6月に税額が変わる、という時間差があります。新卒1年目の6月〜翌5月は住民税がゼロ（前年所得がないため）、2年目の6月から急に天引きが始まります。",
          en: "The key feature of resident tax is that it is based on prior-year income. The amounts deducted from June 2026 to May 2027 are calculated on your 2025 earnings (January–December). This means a job change, pay rise, or new side income won't hit your payslip until the following June. New graduates pay no resident tax in their first year (no prior income) and then see a sudden new deduction in June of year two.",
        },
      },
      {
        type: "table",
        caption: { ja: "住民税の構成（2026年度）", en: "Resident tax breakdown (FY2026)" },
        headers: [
          { ja: "区分", en: "Component" },
          { ja: "都道府県民税", en: "Prefectural tax" },
          { ja: "市区町村民税", en: "Municipal tax" },
          { ja: "合計", en: "Total" },
        ],
        rows: [
          [
            { ja: "所得割（税率）", en: "Income-based rate" },
            { ja: "4%", en: "4%" },
            { ja: "6%", en: "6%" },
            { ja: "10%", en: "10%" },
          ],
          [
            { ja: "均等割（固定額）", en: "Flat-rate levy" },
            { ja: "1,500円", en: "¥1,500" },
            { ja: "3,500円", en: "¥3,500" },
            { ja: "5,000円", en: "¥5,000" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "均等割は2024年度から森林環境税（国税・年1,000円）が加わり、実質的な均等割負担は年5,000円に増えています。所得割は課税所得（前年の所得から各種控除を引いた額）に対して一律10%が課税されます。",
          en: "The flat-rate levy increased in 2024 when the Forest Environment Tax (a national tax of ¥1,000 per year) was added, bringing the effective flat charge to ¥5,000 a year. The income-based rate is a flat 10% applied to taxable income (prior-year income after various deductions).",
        },
      },
      {
        type: "callout",
        text: {
          ja: "住民税は「後払い」の感覚で理解すると把握しやすい。今月天引きされているのは昨年稼いだ分、という意識を持つと、収入変動時の手取り変化が予測しやすくなります。",
          en: "Think of resident tax as 'pay later' and it becomes easier to manage. What's being deducted this month reflects last year's earnings. This mental model helps you predict how take-home pay will shift when your income changes.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "健康保険料 — 2026年度から全国平均9.9%に引き下げ",
    headingEn: "Health Insurance — National Average Cut to 9.9% in FY2026",
    lead: {
      ja: "健康保険は病気・ケガ・出産・死亡などのリスクに備える公的保険です。会社員が加入するのは主に「協会けんぽ」または「組合健保」の2種類です。",
      en: "Health insurance is the public safety net for illness, injury, childbirth, and death. Salaried workers belong to one of two types: the Society-Managed Health Insurance (Kyōkai Kenpō) run by the Japan Health Insurance Association, or a company-managed health insurance union.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "2026年度の保険料率（協会けんぽ）", en: "FY2026 rates — Kyōkai Kenpō" },
        text: {
          ja: "協会けんぽの保険料率は2026年3月分（4月納付分）から改定されました。全国平均は9.9%（前年度比0.1%引き下げ）と、34年ぶりの引き下げです。ただし都道府県によって異なり、東京9.85%・大阪10.13%・愛知9.37%など幅があります。保険料は労使折半のため、従業員の負担は料率の半分です。",
          en: "Kyōkai Kenpō rates were revised from the March 2026 premium (paid April 2026). The national average fell by 0.1 percentage point to 9.9% — the first reduction in 34 years. Rates vary by prefecture: Tokyo 9.85%, Osaka 10.13%, Aichi 9.37%, among others. Because the cost is split evenly between employer and employee, the worker's share is half the stated rate.",
        },
      },
      {
        type: "table",
        caption: { ja: "主要都道府県の健康保険料率（2026年度）", en: "Health insurance rates by prefecture (FY2026)" },
        headers: [
          { ja: "都道府県", en: "Prefecture" },
          { ja: "保険料率（全体）", en: "Total rate" },
          { ja: "従業員負担（折半）", en: "Employee share" },
        ],
        rows: [
          [
            { ja: "東京", en: "Tokyo" },
            { ja: "9.85%", en: "9.85%" },
            { ja: "4.925%", en: "4.925%" },
          ],
          [
            { ja: "神奈川", en: "Kanagawa" },
            { ja: "9.98%", en: "9.98%" },
            { ja: "4.990%", en: "4.990%" },
          ],
          [
            { ja: "大阪", en: "Osaka" },
            { ja: "10.13%", en: "10.13%" },
            { ja: "5.065%", en: "5.065%" },
          ],
          [
            { ja: "愛知", en: "Aichi" },
            { ja: "9.37%", en: "9.37%" },
            { ja: "4.685%", en: "4.685%" },
          ],
          [
            { ja: "全国平均", en: "National average" },
            { ja: "9.90%", en: "9.90%" },
            { ja: "4.950%", en: "4.950%" },
          ],
        ],
      },
      {
        type: "label",
        label: { ja: "子ども・子育て支援金（2026年4月〜）", en: "Childcare support levy (from April 2026)" },
        text: {
          ja: "2026年4月から健康保険料に「子ども・子育て支援金」が上乗せされています。年収600万円で月575円、800万円で月767円、1,000万円で月959円が目安です（0.23%相当）。給与明細上は健康保険料に含まれて記載されるケースと別記されるケースがあります。",
          en: "From April 2026 a childcare support levy is added on top of health insurance premiums. At a salary of ¥6 million a year the charge is roughly ¥575 per month; at ¥8 million it is ¥767; at ¥10 million, ¥959 (equivalent to 0.23%). Depending on the employer, it may appear as part of the health insurance line or as a separate item.",
        },
      },
      {
        type: "p",
        text: {
          ja: "標準報酬月額（等級制）をもとに計算されるため、実際の月給と若干ズレる場合があります。4〜6月の残業が多いと9月以降の社会保険料が上がる（定時決定の仕組み）ため、注意が必要です。",
          en: "Premiums are calculated on a standardised monthly salary (grade system), which may differ slightly from actual pay. Heavy overtime in April through June can push up social insurance premiums from September onward (through the annual remuneration determination), so it is worth being aware of the timing.",
        },
      },
    ],
  },
  {
    n: "05",
    headingJa: "厚生年金保険料 — 老後の自分への強制貯蓄",
    headingEn: "Employees' Pension — Forced Saving for Your Future Self",
    lead: {
      ja: "厚生年金は会社員・公務員が加入する公的年金で、将来の老齢年金・障害年金・遺族年金の財源となります。保険料率は全国一律18.3%で、労使折半です。",
      en: "Employees' pension is the public pension scheme for company employees and civil servants, funding future old-age, disability, and survivor pensions. The premium rate is a uniform 18.3% nationwide, split equally between employer and employee.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "従業員の実負担は9.15%", en: "Employee share: 9.15%" },
        text: {
          ja: "厚生年金の保険料率18.3%のうち、従業員が負担するのは半分の**9.15%**です。月給30万円（標準報酬月額300,000円）の場合、厚生年金保険料は月27,450円が給与から引かれます。この料率は2017年9月以降変わっておらず、当面据え置きの見通しです。",
          en: "Of the 18.3% total pension premium, the employee pays half: **9.15%**. On a monthly salary of ¥300,000 (standard monthly remuneration ¥300,000), the employee's share comes to ¥27,450 per month. The rate has been unchanged since September 2017 and is expected to remain so for the foreseeable future.",
        },
      },
      {
        type: "label",
        label: { ja: "上限（標準報酬月額の上限）", en: "Cap on standard monthly remuneration" },
        text: {
          ja: "標準報酬月額には上限があり、2026年時点では**65万円**が最高等級です。月給が65万円を超えても厚生年金保険料の計算上は65万円として扱われるため、保険料は頭打ちになります（65万円×9.15%＝月59,475円が上限）。",
          en: "Standard monthly remuneration is capped, and as of 2026 the top grade is ¥650,000. Even if your monthly salary exceeds ¥650,000, premiums are calculated as if it were ¥650,000 — so the maximum employee contribution is ¥650,000 × 9.15% = ¥59,475 per month.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "厚生年金保険料は『高い』と感じやすいが、会社が同額を上乗せして払っている。自営業者の国民年金（月16,980円・2026年度）と比べると、会社員の厚生年金は受給額が大きく、事実上の隠れた報酬と言える。",
          en: "Employees' pension premiums feel steep, but your employer matches every yen you contribute. Compared with the flat ¥16,980 per month that self-employed individuals pay into the basic national pension (FY2026), salaried workers benefit from a far higher eventual payout — an underappreciated form of hidden compensation.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "産前産後・育児休業中は本人・会社分ともに保険料が免除される（年金の受給額は維持）",
            en: "Premiums for both employee and employer are waived during maternity/parental leave, and pension entitlement is preserved.",
          },
          {
            ja: "60歳まで働けば、老齢基礎年金（国民年金部分）に加え、給与・期間に比例した老齢厚生年金が上乗せされる",
            en: "Working until 60 means you receive the basic old-age pension plus an earnings-related supplement proportional to your salary and years of coverage.",
          },
          {
            ja: "障害を負った場合の障害厚生年金、死亡時の遺族厚生年金も受給できる",
            en: "The scheme also pays disability and survivor benefits if you become disabled or die.",
          },
        ],
      },
    ],
  },
  {
    n: "06",
    headingJa: "雇用保険料 — 2026年度から0.5%に引き下げ",
    headingEn: "Employment Insurance — Down to 0.5% from FY2026",
    lead: {
      ja: "雇用保険は失業給付・育児休業給付・教育訓練給付などの財源となる保険です。保険料は健康保険や厚生年金と比べてわずかですが、失業時の収入保障として重要な役割を持ちます。",
      en: "Employment insurance funds unemployment benefits, parental leave benefits, and job-training grants. Premiums are small compared with health insurance and pension, but the coverage is critical protection against income loss if you lose your job.",
    },
    blocks: [
      {
        type: "table",
        caption: { ja: "2026年度 雇用保険料率（一般事業）", en: "FY2026 employment insurance rates (general industry)" },
        headers: [
          { ja: "負担者", en: "Who pays" },
          { ja: "料率", en: "Rate" },
          { ja: "月給30万円の場合", en: "On ¥300,000 salary" },
        ],
        rows: [
          [
            { ja: "従業員", en: "Employee" },
            { ja: "0.5%（5/1,000）", en: "0.5% (5/1,000)" },
            { ja: "1,500円", en: "¥1,500" },
          ],
          [
            { ja: "事業主", en: "Employer" },
            { ja: "0.85%（8.5/1,000）", en: "0.85% (8.5/1,000)" },
            { ja: "2,550円", en: "¥2,550" },
          ],
          [
            { ja: "合計", en: "Total" },
            { ja: "1.35%（13.5/1,000）", en: "1.35% (13.5/1,000)" },
            { ja: "4,050円", en: "¥4,050" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "2026年4月から従業員の雇用保険料率が0.6%から**0.5%**に引き下げられました（0.1ポイント下げ）。月給30万円の人は月300円の負担減となります。雇用保険料は賞与からも同率で差し引かれる点に注意が必要です。",
          en: "From April 2026 the employee's share was cut from 0.6% to **0.5%** (a 0.1-point reduction). For a ¥300,000 monthly salary that means ¥300 less per month. Note that the same rate also applies to bonuses.",
        },
      },
      {
        type: "label",
        label: { ja: "育児休業給付は実は雇用保険", en: "Parental leave benefit is employment insurance" },
        text: {
          ja: "育児休業中に受け取れる『育児休業給付金』も、雇用保険の給付の一つです。支給額は育休開始前6か月の平均賃金（休業開始時賃金日額）の67%（育休開始後6か月）→50%と定められており、上限額も設けられています。毎月払っている雇用保険料は、いざというときの収入保障であることを覚えておきましょう。",
          en: "The parental leave benefit you receive during childcare leave is also an employment insurance payment. The benefit is set at 67% of average daily wages for the first six months of leave, then 50% after that, subject to a cap. The premium you pay each month is ultimately funding this kind of income safety net.",
        },
      },
    ],
  },
  {
    n: "07",
    headingJa: "介護保険料 — 40歳の誕生月から自動的に追加される",
    headingEn: "Long-Term Care Insurance — Added Automatically From Your 40th Birthday",
    lead: {
      ja: "介護保険は要介護状態になったときの介護サービス費用を支援する制度です。40歳になると健康保険料に上乗せで徴収が始まります。",
      en: "Long-term care insurance helps pay for care services if you become unable to look after yourself. Contributions begin on top of your health insurance premium from the month you turn 40.",
    },
    blocks: [
      {
        type: "label",
        label: { ja: "2026年度の保険料率：1.62%（労使折半）", en: "FY2026 rate: 1.62% (split equally)" },
        text: {
          ja: "介護保険料率は全国一律で、2026年3月分（4月納付分）から**1.62%**（前年度1.59%から引き上げ）に改定されました。協会けんぽ加入者の場合、健康保険料に上乗せされる形で給与から引かれます。月給30万円の場合、従業員負担は月**2,430円**（30万円×1.62%÷2）です。",
          en: "The long-term care insurance rate is uniform nationwide and was raised to **1.62%** from the March 2026 premium (a slight increase from 1.59% the year before). For Kyōkai Kenpō members it is added on top of health insurance on your payslip. On a ¥300,000 monthly salary the employee's share is **¥2,430** per month (¥300,000 × 1.62% ÷ 2).",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "40〜64歳（第2号被保険者）：健康保険料と合算して給与から天引き",
            en: "Ages 40–64 (category 2 insured persons): collected together with health insurance via payroll.",
          },
          {
            ja: "65歳以上（第1号被保険者）：年金から直接引かれる（特別徴収）か市区町村に直接納付",
            en: "Age 65 and over (category 1 insured persons): deducted directly from pension payments or paid directly to the municipality.",
          },
          {
            ja: "40歳の誕生月の給与明細から急に金額が増えるのは、介護保険料の追加が理由",
            en: "If your payslip deductions suddenly jump in the month you turn 40, it is because long-term care insurance has been added.",
          },
        ],
      },
      {
        type: "callout",
        text: {
          ja: "介護保険は「自分が使うかどうか」にかかわらず支払い義務があります。ただし、40〜64歳でも特定疾病（16種類）が原因で要介護状態になれば介護サービスを受けられます。",
          en: "Long-term care insurance contributions are compulsory regardless of whether you expect to use the service. That said, even at age 40–64 you can receive care services if you develop a care need caused by one of 16 specified conditions.",
        },
      },
    ],
  },
  {
    n: "08",
    headingJa: "年収別・手取りシミュレーション",
    headingEn: "Take-Home Pay by Income Level",
    lead: {
      ja: "実際に総支給からどれだけ引かれるのか、年収別に概算を示します。東京都在住・独身・40歳未満・協会けんぽ加入という条件での目安です。",
      en: "How much is actually deducted from gross pay? Here is a rough breakdown by annual salary, assuming a single, under-40 worker in Tokyo enrolled in Kyōkai Kenpō.",
    },
    blocks: [
      {
        type: "table",
        caption: { ja: "年収別 控除額・手取り概算（東京・独身・40歳未満、2026年度）", en: "Approximate deductions and take-home pay by annual salary (Tokyo, single, under 40, FY2026)" },
        headers: [
          { ja: "年収", en: "Annual salary" },
          { ja: "所得税（年）", en: "Income tax (annual)" },
          { ja: "住民税（年）", en: "Resident tax (annual)" },
          { ja: "社会保険料（年）", en: "Social insurance (annual)" },
          { ja: "手取り（年）", en: "Take-home (annual)" },
          { ja: "手取り率", en: "Take-home rate" },
        ],
        rows: [
          [
            { ja: "300万円", en: "¥3M" },
            { ja: "約4万円", en: "~¥40,000" },
            { ja: "約12万円", en: "~¥120,000" },
            { ja: "約42万円", en: "~¥420,000" },
            { ja: "約242万円", en: "~¥2.42M" },
            { ja: "約80%", en: "~80%" },
          ],
          [
            { ja: "500万円", en: "¥5M" },
            { ja: "約15万円", en: "~¥150,000" },
            { ja: "約23万円", en: "~¥230,000" },
            { ja: "約69万円", en: "~¥690,000" },
            { ja: "約393万円", en: "~¥3.93M" },
            { ja: "約79%", en: "~79%" },
          ],
          [
            { ja: "700万円", en: "¥7M" },
            { ja: "約43万円", en: "~¥430,000" },
            { ja: "約40万円", en: "~¥400,000" },
            { ja: "約90万円", en: "~¥900,000" },
            { ja: "約527万円", en: "~¥5.27M" },
            { ja: "約75%", en: "~75%" },
          ],
          [
            { ja: "1,000万円", en: "¥10M" },
            { ja: "約115万円", en: "~¥1.15M" },
            { ja: "約65万円", en: "~¥650,000" },
            { ja: "約110万円", en: "~¥1.1M" },
            { ja: "約710万円", en: "~¥7.1M" },
            { ja: "約71%", en: "~71%" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "年収が上がるほど手取り率が下がるのは、所得税の累進課税効果と、住民税・社会保険料の絶対額増加が重なるためです。一方で社会保険料は標準報酬月額に上限があるため、超高年収では逆に手取り率が改善する傾向があります。",
          en: "The higher the salary, the lower the take-home rate, because progressive income tax compounds with rising absolute amounts of resident tax and social insurance. However, since standard monthly remuneration is capped, the take-home rate actually starts to recover at very high salaries where social insurance premiums plateau.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "「4〜6月は残業を抑えると手取りが増える」というのは、この時期の残業代が標準報酬月額の算定基礎に含まれ、9月から翌8月の社会保険料が増えるためです。年間で見ると数万円単位の差になることもあります。",
          en: "The advice to 'avoid overtime in April through June' exists because bonuses and overtime in that period feed into the annual remuneration determination, raising social insurance premiums from September onward. Over a full year the difference can amount to tens of thousands of yen.",
        },
      },
    ],
  },
  {
    n: "09",
    headingJa: "2026年の変更点まとめ",
    headingEn: "2026 Changes at a Glance",
    lead: {
      ja: "2026年は給与明細の控除額に影響する制度変更が重なった年です。手取りへのプラス・マイナス双方の変化をまとめます。",
      en: "2026 has seen an unusually large cluster of changes that affect payslip deductions. Here is a summary of what helps and what hurts take-home pay.",
    },
    blocks: [
      {
        type: "table",
        caption: { ja: "2026年 給与天引きに影響する主要な制度変更", en: "Key 2026 changes affecting payslip deductions" },
        headers: [
          { ja: "項目", en: "Item" },
          { ja: "変更内容", en: "Change" },
          { ja: "手取りへの影響", en: "Effect on take-home" },
          { ja: "適用開始", en: "Effective from" },
        ],
        rows: [
          [
            { ja: "基礎控除・給与所得控除の引き上げ", en: "Basic & salary income deductions raised" },
            { ja: "合計+20万円引き上げ", en: "Combined +¥200,000" },
            { ja: "プラス（所得税・住民税減）", en: "Positive (less income & resident tax)" },
            { ja: "2026年1月〜", en: "Jan 2026" },
          ],
          [
            { ja: "協会けんぽ健康保険料率引き下げ", en: "Kyōkai Kenpō rate cut" },
            { ja: "平均9.9%（-0.1%）", en: "Avg 9.9% (–0.1pp)" },
            { ja: "プラス（微小）", en: "Positive (small)" },
            { ja: "2026年3月分〜", en: "Mar 2026 premium" },
          ],
          [
            { ja: "雇用保険料率引き下げ", en: "Employment insurance rate cut" },
            { ja: "0.6%→0.5%", en: "0.6%→0.5%" },
            { ja: "プラス（月〜300円）", en: "Positive (~¥300/month)" },
            { ja: "2026年4月〜", en: "Apr 2026" },
          ],
          [
            { ja: "介護保険料率引き上げ", en: "Long-term care insurance rate raised" },
            { ja: "1.59%→1.62%", en: "1.59%→1.62%" },
            { ja: "マイナス（月〜450円）", en: "Negative (~–¥450/month)" },
            { ja: "2026年3月分〜", en: "Mar 2026 premium" },
          ],
          [
            { ja: "子ども・子育て支援金の開始", en: "Childcare support levy introduced" },
            { ja: "0.23%相当を医療保険に上乗せ", en: "+0.23% on health insurance" },
            { ja: "マイナス（月575〜959円）", en: "Negative (¥575–¥959/month)" },
            { ja: "2026年4月〜", en: "Apr 2026" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "プラス面（所得税・住民税の軽減）は累進性があり、収入が多いほど恩恵が大きい変化です。一方のマイナス面（子ども・子育て支援金・介護保険料引き上げ）は比較的フラットな負担増で、中低収入層の体感として重く映るケースもあります。手取りの実感は年収帯によって異なるため、自分の給与明細を照らし合わせて確認することを推奨します。",
          en: "The positive changes (reductions in income and resident tax) are progressive and benefit higher earners most. The negative changes (childcare levy and care insurance rate rise) are relatively flat burdens that can feel heavier for lower-to-middle earners. The net effect on take-home pay varies by income level, so checking your own payslip is the most reliable way to assess the impact.",
        },
      },
      {
        type: "list",
        items: [
          {
            ja: "給与明細は毎月必ず確認する習慣を。天引き額の変化に早めに気づくことが家計管理の第一歩",
            en: "Make it a habit to check your payslip every month. Noticing changes in deductions early is the first step in managing household finances.",
          },
          {
            ja: "社会保険料の料率改定は毎年3〜4月に集中する。年度初めに変化を把握しておくと予算管理がしやすい",
            en: "Most social insurance rate revisions land in March–April each year. Getting your head around changes at the start of the fiscal year makes budgeting much easier.",
          },
          {
            ja: "住民税は前年所得反映のため、転職・昇給の年は来年6月以降の手取りを計算し直す必要がある",
            en: "Resident tax reflects prior-year income, so in any year of a job change or pay rise you should recalculate expected take-home pay from the following June.",
          },
        ],
      },
    ],
  },
];

export default function PayslipTaxes2026Page() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Lifestyle", href: "/column" },
          { name: TITLE, href: `/column/payslip-taxes-2026` },
        ]}
      />
      <ArticleJsonLd
        url={URL}
        title={TITLE}
        description={SUMMARY}
        datePublished={DATE}
        dateModified={DATE}
        author=""
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span className="truncate max-w-[160px]">{TITLE}</span>
      </div>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-4">
          <span
            className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
            style={{
              color: COLUMN_COLOR,
              borderColor: `${COLUMN_COLOR}40`,
              backgroundColor: `${COLUMN_COLOR}12`,
            }}
          >
            Column
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight tracking-tight mb-2">
          <T ja={TITLE} en="Payslip Taxes & Social Insurance — The 6 Deductions Explained" />
        </h1>
        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${COLUMN_COLOR}40` }}
        >
          <T ja={SUMMARY} en={SUMMARY_EN} />
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <time className="tabular-nums">{DATE}</time>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="約 12 分" en="~12 min read" /></span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span><T ja="全 9 章" en="9 chapters" /></span>
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
            ja="本コラムは2026年4月時点の制度の一般的な解説を目的としています。保険料率・税率・控除額は法改正や個々の状況（加入健保組合・家族構成・居住地など）により異なります。実際の適用にあたっては、勤務先の人事・総務、税務署、税理士、社会保険労務士などの専門家に必ずご確認ください。"
            en="This column offers a general overview of the rules as of April 2026. Rates, deductions, and caps all vary with legislation and personal circumstances (health insurance union, household composition, place of residence, etc.). Before acting, please consult your HR or accounting department, the tax office, a tax accountant, or a qualified social insurance labour consultant."
          />
        </p>
      </div>

      <div className="mt-8 flex justify-center">
        <ShareButton title={TITLE} />
      </div>

      <RecommendedReads currentSlug="payslip-taxes-2026" currentTags={["税金", "社会保険", "給与", "家計"]} />

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
