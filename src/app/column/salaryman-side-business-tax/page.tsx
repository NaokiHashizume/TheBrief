import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import ShareButton from "@/components/ShareButton";
import { T } from "@/components/T";

const COLUMN_COLOR = "#0d9488";

const URL = "https://thebrief.info/column/salaryman-side-business-tax";
const TITLE = "サラリーマンが副業を始める前に知る税務 — 20万円の壁から開業届まで";
const SUMMARY =
  "副業解禁の流れを受けて会社員でも副収入を得る人が増えています。一方で『20万円の壁』『開業届』『青色申告』『住民税の普通徴収』といった税務まわりの知識が抜けていると、後で痛い目に遭います。副業を始める前に最低限知っておきたい税務の基本を整理します。";
const SUMMARY_EN =
  "As Japan opens up to moonlighting, more salaried workers are earning on the side. But missing the basics — the 200,000-yen threshold, the sole-proprietor filing, the blue-form tax return, switching resident tax to self-payment — can bite hard later. Here's what you need to know before you start a side business.";
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
    headingJa: "20万円の壁の正体",
    headingEn: "The 200K Threshold",
    lead: {
      ja: "副業税務でもっとも有名な『20万円ルール』。意味を正確に理解している人は意外と少数派です。",
      en: "The famous 200,000-yen rule of side-business taxation is widely known, but surprisingly few people understand exactly what it covers.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "『副業所得が年20万円以下なら確定申告不要』と聞いたことがあるはずです。これは正しいのですが、対象になっているのは『所得税』だけです。住民税は1円から申告義務があります。",
          en: "You've probably heard that a side-business income of 200,000 yen or less per year means no tax return required. That's correct — but it applies only to income tax. Resident tax has to be declared from one yen up.",
        },
      },
      {
        type: "label",
        label: {
          ja: "20万円ルールの正確な定義",
          en: "The exact definition of the 200K rule",
        },
        text: {
          ja: "給与所得者で、給与・退職所得以外の所得（副業の所得）の合計が年20万円以下の場合、所得税の確定申告は不要。ここでの『所得』は『収入−必要経費』のことで、売上ベースではありません。",
          en: "If a salaried worker has non-salary, non-retirement income (side-business income) totaling 200,000 yen or less in a year, no income tax return is required. 'Income' here means revenue minus necessary expenses, not gross sales.",
        },
      },
      {
        type: "label",
        label: {
          ja: "見落としがちな住民税",
          en: "The resident-tax trap people miss",
        },
        text: {
          ja: "所得税の申告が不要でも、住民税の申告は別途必要です。市区町村役場で『住民税申告書』を出すことになります。20万円以下だから何もしなくていい、は誤りです。",
          en: "Even if no income tax return is needed, you still have to file a separate resident-tax return at your city/ward office. 'Under 200K means do nothing' is wrong.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "20万円ルールは『所得税の特例』であって『住民税の免除』ではない。住民税は1円から申告対象。",
          en: "The 200K rule is an income-tax exception, not a resident-tax exemption. Resident tax is reportable from yen one.",
        },
      },
    ],
  },
  {
    n: "02",
    headingJa: "副業の所得区分 — 雑所得と事業所得の境目",
    headingEn: "Miscellaneous vs Business Income",
    lead: {
      ja: "副業の収入は『雑所得』か『事業所得』に分類されます。どちらに区分されるかで税制メリットが大きく違います。",
      en: "Side-business income is classified as either miscellaneous income or business income, and the tax benefits differ dramatically between the two.",
    },
    blocks: [
      {
        type: "table",
        caption: {
          ja: "雑所得と事業所得の比較",
          en: "Miscellaneous vs. business income",
        },
        headers: [
          { ja: "観点", en: "Aspect" },
          { ja: "雑所得", en: "Miscellaneous" },
          { ja: "事業所得", en: "Business" },
        ],
        rows: [
          [
            { ja: "青色申告", en: "Blue-form return" },
            { ja: "不可", en: "Not allowed" },
            { ja: "可（最大65万円控除）", en: "Allowed (up to 650K yen deduction)" },
          ],
          [
            { ja: "損益通算", en: "Loss offsetting" },
            { ja: "給与と通算不可", en: "Cannot offset against salary" },
            { ja: "給与と通算可", en: "Can offset against salary" },
          ],
          [
            { ja: "損失の繰越", en: "Loss carryforward" },
            { ja: "不可", en: "Not allowed" },
            { ja: "3年間可", en: "Three years" },
          ],
          [
            { ja: "開業届", en: "Sole-proprietor filing" },
            { ja: "不要", en: "Not required" },
            { ja: "必要", en: "Required" },
          ],
          [
            { ja: "対象となる副業", en: "Typical side work" },
            { ja: "単発・趣味的・小規模", en: "One-off, hobby-level, small scale" },
            { ja: "継続性・反復性・営利性のあるもの", en: "Continuous, repeated, profit-seeking activity" },
          ],
        ],
      },
      {
        type: "p",
        text: {
          ja: "事業所得として認められれば、青色申告特別控除65万円、損益通算、損失の繰越という3つのメリットが使えます。一方、ハードルもあり、2022年の所得税基本通達改正で『収入が300万円以下の副業は、原則として雑所得とする』という方針が示されました。",
          en: "If your side work qualifies as business income, you get three benefits: the 650,000-yen blue-return special deduction, the ability to offset losses against salary, and three-year loss carryforward. But the bar is high — a 2022 revision of the income tax basic directive set a policy that side businesses with revenue of 3 million yen or less are, as a rule, to be treated as miscellaneous income.",
        },
      },
      {
        type: "label",
        label: {
          ja: "事業所得として認められる条件",
          en: "Conditions for business-income treatment",
        },
        text: {
          ja: "①継続性・反復性がある、②営利目的で行っている、③社会通念上、事業と認められる規模・実態である、④帳簿（複式簿記）を作成している、⑤独立した収入源として確立している。300万円以下でも、これらを満たし帳簿が完備されていれば事業所得として認められる余地はあります。",
          en: "(1) Continuous and repeated activity, (2) profit-seeking intent, (3) scale and substance socially recognized as a business, (4) double-entry bookkeeping in place, (5) established as an independent income stream. Even under 3 million yen in revenue, meeting these and keeping solid books leaves room to be treated as business income.",
        },
      },
    ],
  },
  {
    n: "03",
    headingJa: "開業届と青色申告承認申請書",
    headingEn: "Filing for Sole Proprietorship",
    lead: {
      ja: "事業所得を狙うなら、最初に2つの書類を税務署に出します。",
      en: "If you're aiming for business-income treatment, there are two forms to submit to the tax office up front.",
    },
    blocks: [
      {
        type: "label",
        label: {
          ja: "①個人事業の開業・廃業等届出書（開業届）",
          en: "(1) Notification of opening a sole proprietorship",
        },
        text: {
          ja: "事業を開始した日から1ヶ月以内に税務署に提出します。提出はオンライン（e-Tax）でも可能。提出しても税負担はゼロですが、出さないと青色申告ができません。なお、副業が会社にバレるかどうかとは関係ありません（後述）。",
          en: "File with the tax office within one month of starting the business, online via e-Tax if you prefer. The form itself creates zero tax burden, but without it you can't use the blue-form return. It has nothing to do with whether your employer finds out (more below).",
        },
      },
      {
        type: "label",
        label: {
          ja: "②所得税の青色申告承認申請書",
          en: "(2) Application for blue-form return approval",
        },
        text: {
          ja: "青色申告をしたい年の3月15日まで（または開業から2ヶ月以内）に提出します。これを出さないと自動的に白色申告になり、最大65万円の特別控除が使えなくなります。",
          en: "File by March 15 of the year you want blue-form treatment — or within two months of opening. Without it you default to white-form filing and lose access to the 650,000-yen special deduction.",
        },
      },
      {
        type: "label",
        label: {
          ja: "③（任意）青色事業専従者給与に関する届出書",
          en: "(3) (Optional) Notification of blue-form full-time family employee salaries",
        },
        text: {
          ja: "配偶者や親族に手伝ってもらい給料を払う場合、この届出を出すことで給料を経費にできます。家族経営の副業ではよく使われます。",
          en: "If a spouse or relative helps out and you pay them, filing this form lets you deduct those payments as expenses. Common in family-run side operations.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "開業届＋青色申告承認申請書は『出すだけ無料・出さないと損する』典型例。副業が事業の体をなしてきたら速やかに提出を。",
          en: "Filing the opening notification and the blue-form application is free and costly to skip. Once your side business actually looks like a business, file both without delay.",
        },
      },
    ],
  },
  {
    n: "04",
    headingJa: "経費にできるもの・できないもの",
    headingEn: "Deductible Expenses",
    lead: {
      ja: "経費の判断は『事業のために使ったか』が基準です。プライベートと混在する支出は『家事按分』で計算します。",
      en: "The expense test is whether the money was spent for the business. When private and business use are mixed, you apportion the cost on a household-use basis.",
    },
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "○ 事業専用のPC・ソフト・サーバー代・ドメイン代",
            en: "Yes: PCs, software, hosting, and domains used solely for the business.",
          },
          {
            ja: "○ 仕事用の書籍・有料情報・セミナー受講料",
            en: "Yes: work-related books, paid information, and seminar fees.",
          },
          {
            ja: "○ 取材・打ち合わせの交通費・カフェ代（記録があれば）",
            en: "Yes: transport and cafe costs for interviews and meetings (if logged).",
          },
          {
            ja: "○ 自宅を仕事場とする場合の家賃・電気代の按分（作業時間や面積比）",
            en: "Yes: a share of rent and electricity when working from home, based on work time or floor area.",
          },
          {
            ja: "△ スマホ代・通信費（事業用と私用の比率で按分）",
            en: "Maybe: smartphone and telecom bills, apportioned between business and personal use.",
          },
          {
            ja: "× 私的な飲食・娯楽・洋服代",
            en: "No: personal food, entertainment, and clothing.",
          },
          {
            ja: "× 健康診断・人間ドック（事業に直接関係しない）",
            en: "No: health checkups and medical screenings (not directly business-related).",
          },
        ],
      },
      {
        type: "label",
        label: {
          ja: "家事按分の考え方",
          en: "How to apportion household use",
        },
        text: {
          ja: "自宅の一部を仕事に使う場合、面積比または使用時間比で按分するのが一般的です。たとえば60m²の住居のうち15m²を仕事専用にしているなら25%が経費。家賃15万円なら3.75万円が月の経費になります。説明のつく按分根拠と記録（写真・図面・スケジュール）を残しておくことが大切です。",
          en: "When part of your home is used for work, you generally split by floor area or hours of use. For example, 15 m² of a 60 m² home reserved for work gives 25%, so on 150,000 yen rent, 37,500 yen is a monthly expense. Keep defensible records — photos, floor plans, schedules — to back up the split.",
        },
      },
      {
        type: "label",
        label: {
          ja: "30万円未満の少額減価償却資産",
          en: "Small-value depreciable assets under 300K",
        },
        text: {
          ja: "青色申告事業者なら、1個あたり30万円未満のPC・カメラ等を一括で経費計上できます（年間合計300万円まで）。20万円のMacBookを買って初年度に全額経費にできるのは、青色申告の大きなメリットです。",
          en: "Blue-form filers can expense PCs, cameras, and the like in full in the year of purchase as long as each item costs less than 300,000 yen (up to 3 million yen per year in total). Writing off a 200,000-yen MacBook in year one is one of the big perks of the blue-form return.",
        },
      },
    ],
  },
  {
    n: "05",
    headingJa: "会社に副業がバレない（と言われる）方法",
    headingEn: "Keeping It Off the Books",
    lead: {
      ja: "副業がバレる経路の9割は『住民税の通知』です。これを断つのが第一歩。",
      en: "Nine times out of ten, employers learn about a side business via the resident-tax notice. Cutting that channel is step one.",
    },
    blocks: [
      {
        type: "p",
        text: {
          ja: "会社員の住民税は通常、給与から天引き（特別徴収）されています。副業所得が増えると、住民税の総額も増え、会社に届く住民税通知書から『この人、給与以外にも収入があるな』と気づかれます。",
          en: "Salaried workers normally have resident tax withheld from pay (special collection). When side income rises, total resident tax rises too, and the notice sent to the employer reveals that this person has income beyond salary.",
        },
      },
      {
        type: "label",
        label: {
          ja: "住民税を『普通徴収』に切り替える",
          en: "Switch resident tax to self-payment",
        },
        text: {
          ja: "確定申告書の第二表に『住民税に関する事項』があり、給与・公的年金等以外の所得に係る住民税の徴収方法を『自分で納付（普通徴収）』にチェックを入れます。これにより副業分の住民税は自宅に納付書が届き、会社を経由しなくなります。",
          en: "On page two of the tax return, there's a 'resident tax matters' section where you can check 'self-payment (ordinary collection)' for resident tax on non-salary, non-pension income. After that, the tax bill for the side-business portion comes straight to your home rather than through your employer.",
        },
      },
      {
        type: "label",
        label: { ja: "ただし完璧ではない", en: "It isn't foolproof" },
        text: {
          ja: "自治体によっては技術的・実務的な理由で普通徴収への切り替えに応じないケース、給与扱いの副業（パート・アルバイト）は普通徴収にできないケースもあります。さらに、社会保険の扶養範囲を超えた場合は別の経路でバレる可能性も。確実性を求めるなら、就業規則を確認し、堂々と申告するのがベストです。",
          en: "Some municipalities refuse to switch to self-payment for technical or administrative reasons, and side jobs classed as wages (part-time work) can't be moved at all. Exceeding social-insurance dependent thresholds opens up other ways for employers to notice. If you want certainty, check your employment rules and disclose the side work openly.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "『バレない副業』を狙うより『バレても問題ない副業』を選ぶ方が、長い目で見れば安全。多くの会社は2018年の副業解禁通達以降、容認方向に動いている。",
          en: "Over the long run it's safer to pick a side business that's fine if it surfaces than to hunt for one that stays hidden. Since the 2018 side-business liberalization directive, most companies have moved toward acceptance.",
        },
      },
    ],
  },
  {
    n: "06",
    headingJa: "始める前にやるべきチェックリスト",
    headingEn: "Pre-Launch Checklist",
    blocks: [
      {
        type: "list",
        items: [
          {
            ja: "①就業規則で副業が禁止・許可制になっていないか確認",
            en: "(1) Check whether your employment rules ban or require permission for side work.",
          },
          {
            ja: "②本業の競業避止義務に抵触しないか確認",
            en: "(2) Check that it doesn't conflict with non-compete duties from your main job.",
          },
          {
            ja: "③副業用の銀行口座・クレジットカードを分ける",
            en: "(3) Set up separate bank accounts and credit cards for the side business.",
          },
          {
            ja: "④経費の領収書を保存する仕組みを作る（クラウド会計ソフト推奨）",
            en: "(4) Build a system for saving receipts — cloud accounting software recommended.",
          },
          {
            ja: "⑤年20万円を超えそうなら確定申告を予定表に入れる",
            en: "(5) If you'll likely clear 200,000 yen, put the tax return on your calendar now.",
          },
          {
            ja: "⑥事業所得を狙うなら開業届＋青色申告承認申請書を提出",
            en: "(6) If aiming for business-income treatment, file the opening notification and blue-form application.",
          },
          {
            ja: "⑦住民税は普通徴収を選択",
            en: "(7) Select self-payment for resident tax.",
          },
          {
            ja: "⑧売上が1,000万円を超えそうならインボイス・消費税の検討",
            en: "(8) If revenue may top 10 million yen, think about the invoice system and consumption tax.",
          },
        ],
      },
      {
        type: "p",
        text: {
          ja: "副業は『やってみないと自分に合うかわからない』面が大きく、最初から完璧な税務対応をする必要はありません。ただし、上のチェックリストの①②と③④は最初から押さえておく方が後で楽です。年末になって慌てて領収書をかき集める、という事態は避けましょう。",
          en: "Much of whether a side business suits you only becomes clear by doing it, so you don't need perfect tax handling from day one. That said, items (1)(2) and (3)(4) above are much easier if nailed down at the start. Don't end up scrambling for receipts at year-end.",
        },
      },
      {
        type: "callout",
        text: {
          ja: "副業の税務は『難しい』のではなく『手順を踏めば誰でもできる』。最大の敵は『面倒くさい』と感じた瞬間の先延ばし。",
          en: "Side-business taxation isn't hard — it's just a sequence anyone can follow. The real enemy is the procrastination that kicks in the moment it starts to feel like a hassle.",
        },
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
            <T ja="副業 / 税金" en="Side Business / Tax" />
          </span>
        </div>

        <h1 className="font-serif text-[28px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          <T
            ja={
              <>
                <span style={{ color: COLUMN_COLOR }}>サラリーマンが副業を始める前に知る税務</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— 20万円の壁から開業届まで</span>
              </>
            }
            en={
              <>
                <span style={{ color: COLUMN_COLOR }}>Tax Basics Before Starting a Side Business</span>
                <br className="hidden sm:block" />
                <span className="text-foreground/70 text-[20px] sm:text-[28px]">— From the 200K Threshold to Filing as a Sole Proprietor</span>
              </>
            }
          />
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          Tax Basics for the Salaried Side-Hustler
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
          <span><T ja="約 11 分" en="~11 min read" /></span>
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
            ja="本コラムは2026年4月時点の制度の一般的な解説を目的としています。所得区分の判定・経費認定・申告手続きは個別の事業実態により異なります。実際の副業開始・申告にあたっては、税務署または税理士にご確認ください。"
            en="This column is intended as a general overview of the rules as of April 2026. Classification of income, expense eligibility, and filing procedures all depend on the specifics of your situation. Before launching a side business or filing, please consult the tax office or a tax accountant."
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
