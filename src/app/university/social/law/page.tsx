import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "法学の基礎 — 講義ノート | University",
  description:
    "大学初年度向けの法学入門レクチャー。法とは何か、六法の構造、憲法・民法・刑法の基本、判例の読み方までを体系的に解説します。",
  alternates: { canonical: "https://thebrief.info/university/social/law" },
};

const LAW_COLOR = "#ef4444";

type Section = {
  n: string;
  heading: string;
  headingEn: string;
  lead: string;
  body: { label?: string; text: string }[];
  keyTerms?: { term: string; def: string }[];
  callout?: string;
};

const sections: Section[] = [
  {
    n: "01",
    heading: "法とは何か",
    headingEn: "What is Law?",
    lead: "法学（jurisprudence）とは、社会における「ルール」の仕組みと働き方を体系的に研究する学問です。道徳や習慣との違い、そして「強制力」を伴うという点が、法の最大の特徴になります。",
    body: [
      {
        label: "定義",
        text: "法とは、国家または公的な機関によって制定・承認され、その違反に対して強制的なサンクション（刑罰・損害賠償など）を伴う社会規範の体系である、と一般に定義されます。",
      },
      {
        label: "道徳との違い",
        text: "道徳も人の行動を律する規範ですが、違反しても国家による強制はありません。一方で法は、最終的には裁判所と国家権力によってその実現が担保されます。",
      },
      {
        label: "法の三つの機能",
        text: "①紛争解決機能（裁判による決着）、②行為規範機能（事前に何をすべきかを示す）、③社会統制機能（秩序の維持）。法学ではこれら三つの機能を常に意識します。",
      },
    ],
    keyTerms: [
      { term: "規範", def: "「〜すべきである」という当為を示すルール。" },
      { term: "サンクション", def: "違反に対する制裁。刑罰、損害賠償、行政処分など。" },
      { term: "強行法規 / 任意法規", def: "当事者の合意で変更できない規範／できる規範。" },
    ],
    callout:
      "法学の学びは「条文の暗記」ではなく、「なぜその条文が存在し、どのような問題を解決しようとしているか」を考える営みです。",
  },
  {
    n: "02",
    heading: "六法と法体系",
    headingEn: "The Six Codes and Legal System",
    lead: "日本の法律は階層構造になっています。頂点に憲法、その下に法律、さらに政令・省令・条例が続きます。中心にある主要法典は「六法」と呼ばれ、法学部の学習の基礎となります。",
    body: [
      {
        label: "法源のピラミッド",
        text: "①憲法 → ②条約 → ③法律（国会の制定） → ④政令（内閣） → ⑤省令（各省大臣） → ⑥条例・規則（地方公共団体）。上位の規範に反する下位の規範は無効になります。",
      },
      {
        label: "六法とは",
        text: "伝統的に「六法」と呼ばれるのは、憲法・民法・刑法・商法・民事訴訟法・刑事訴訟法の6つです。このうち憲法・民法・刑法は「実体法の三本柱」、訴訟法2つは「手続法」に分類されます。",
      },
      {
        label: "実体法と手続法",
        text: "実体法は「権利・義務の内容」を定める法（何をすれば罰せられるか、など）。手続法は「その権利義務を実現する手順」を定める法（どう裁判を進めるか）。両輪として機能します。",
      },
      {
        label: "公法と私法",
        text: "国家と個人の関係を規律するのが公法（憲法・刑法・行政法など）、私人同士の関係を規律するのが私法（民法・商法など）です。近年は労働法や経済法のように両者を横断する「社会法」も重要になっています。",
      },
    ],
    keyTerms: [
      { term: "法源", def: "法として認められる規範の源泉。成文法・慣習法・判例法など。" },
      { term: "成文法 / 不文法", def: "条文として書かれた法／慣習・判例など文書化されていない法。" },
      { term: "特別法は一般法に優先", def: "同じ事項について特別法がある場合はそちらが適用される原則。" },
    ],
  },
  {
    n: "03",
    heading: "憲法 — 国家の最高法規",
    headingEn: "Constitutional Law",
    lead: "憲法は国家の根本規範であり、あらゆる法律の上位に立ちます。日本国憲法は①国民主権、②基本的人権の尊重、③平和主義の三大原理を柱としています。",
    body: [
      {
        label: "立憲主義",
        text: "憲法は「国家権力を縛るための法」であるという考え方を立憲主義といいます。法律が国民を縛るのに対し、憲法は国家を縛る点が決定的に違います。",
      },
      {
        label: "統治機構と三権分立",
        text: "立法権（国会）、行政権（内閣）、司法権（裁判所）が相互にチェックし合う仕組み。権力が一箇所に集中することを防ぎ、自由を守るための設計です。",
      },
      {
        label: "基本的人権",
        text: "憲法11〜40条が定める、人が生まれながらに持つ権利。自由権（表現の自由・信教の自由など）、社会権（生存権・教育を受ける権利など）、参政権、請求権に分類されます。",
      },
      {
        label: "違憲審査制",
        text: "裁判所は法律・行政行為が憲法に違反していないかを審査する権限を持ちます（81条）。最高裁判所は「憲法の番人」と呼ばれます。",
      },
    ],
    keyTerms: [
      { term: "硬性憲法", def: "通常の法律より改正手続が厳格な憲法。日本国憲法もこれ。" },
      { term: "公共の福祉", def: "人権相互の調整原理。人権も無制限ではない。" },
      { term: "違憲立法審査権", def: "裁判所が法令の合憲性を判断する権限。" },
    ],
    callout:
      "憲法を学ぶとき最も重要なのは「条文の文言」だけでなく、その背後にある価値（個人の尊厳・自由・平等）がどう保護されているかを読むことです。",
  },
  {
    n: "04",
    heading: "民法 — 市民生活の基本法",
    headingEn: "Civil Law",
    lead: "民法は私人同士の関係を規律する最も身近な法です。買い物、結婚、相続、契約、借金の返済、事故の損害賠償 — 日常のほとんどの場面で民法が働いています。",
    body: [
      {
        label: "民法の三大原則",
        text: "①権利能力平等の原則、②私的自治の原則（契約自由の原則）、③過失責任の原則。近代市民社会を支える基本思想です。",
      },
      {
        label: "民法の構成",
        text: "第1編 総則（法律行為・時効など）/ 第2編 物権（所有権・抵当権など）/ 第3編 債権（契約・不法行為など）/ 第4編 親族 / 第5編 相続。いわゆる「パンデクテン方式」で整理されています。",
      },
      {
        label: "契約の成立",
        text: "契約は原則として、①申込と②承諾の意思表示が合致すれば成立します（諾成契約）。書面は必須ではなく、口約束でも契約は成立します。ただし一部（保証契約など）は書面が必要です。",
      },
      {
        label: "不法行為",
        text: "故意または過失によって他人の権利・法益を侵害し損害を生じさせた者は、損害賠償責任を負います（709条）。交通事故・名誉毀損などの処理の土台となる条文です。",
      },
    ],
    keyTerms: [
      { term: "法律行為", def: "意思表示によって権利義務関係を発生させる行為。契約・遺言など。" },
      { term: "時効", def: "一定期間の経過によって権利が消滅または取得する制度。" },
      { term: "物権 / 債権", def: "物に対する直接支配権／特定人への請求権。" },
    ],
  },
  {
    n: "05",
    heading: "刑法 — 犯罪と刑罰の法",
    headingEn: "Criminal Law",
    lead: "刑法は「どのような行為が犯罪となり、それにどのような刑罰が科されるか」を定める法です。国家による刑罰権の行使を厳格に統制する意味でも極めて重要な領域です。",
    body: [
      {
        label: "罪刑法定主義",
        text: "「法律なければ犯罪なし、法律なければ刑罰なし」。あらかじめ法律で犯罪と刑罰を明示しておかなければ、人を処罰することはできないという近代刑法の大原則です。",
      },
      {
        label: "犯罪の成立要件",
        text: "①構成要件該当性（条文の定める行為にあたるか）、②違法性（違法性阻却事由がないか：正当防衛・緊急避難など）、③責任（非難可能性：故意・過失、責任能力）。三段階で検討します。",
      },
      {
        label: "故意と過失",
        text: "原則として刑法は故意犯を処罰します（38条）。過失犯は業務上過失致死傷罪など、法律に特別の定めがある場合のみ処罰されます。",
      },
      {
        label: "刑罰の種類",
        text: "主刑として死刑、懲役、禁錮、罰金、拘留、科料。付加刑として没収があります。刑罰の目的については応報刑論と目的刑論（予防刑論）の議論が続いています。",
      },
    ],
    keyTerms: [
      { term: "構成要件", def: "犯罪として類型化された行為の要素。" },
      { term: "違法性阻却事由", def: "形式上は犯罪でも違法性を否定する事情。正当防衛など。" },
      { term: "責任能力", def: "自分の行為の意味を理解し制御する能力。" },
    ],
    callout:
      "刑法を学ぶことは、国家が人の自由を奪う権限をどこまで認めるかを学ぶことでもあります。被害者保護と被告人の権利保障のバランスが常に問われます。",
  },
  {
    n: "06",
    heading: "判例の読み方",
    headingEn: "How to Read Case Law",
    lead: "条文だけでは具体的な問題に結論は出ません。実務では過去の判決（判例）が大きな意味を持ちます。判例の構造を理解することは法学学習の必修スキルです。",
    body: [
      {
        label: "判決の基本構造",
        text: "①事実の概要 → ②争点 → ③判旨（裁判所の判断） → ④理由。とくに「争点」と「判旨」を正確に特定できるかが読み方の肝です。",
      },
      {
        label: "判例と裁判例",
        text: "一般に、最高裁判所の判決で法的先例価値を持つものを「判例」、下級審のものを「裁判例」と呼び分けます。判例は下級審を事実上拘束します。",
      },
      {
        label: "レイシオ と オビタ",
        text: "判決の結論を導くのに不可欠な理由づけ（ratio decidendi）と、傍論的な記述（obiter dictum）を区別することが重要です。先例拘束力があるのは原則として前者のみです。",
      },
    ],
    keyTerms: [
      { term: "先例拘束性", def: "過去の判例が後の同種事件を拘束する性質。" },
      { term: "判例変更", def: "最高裁大法廷が従来の判例を変更すること。" },
    ],
  },
  {
    n: "07",
    heading: "法学をどう学ぶか",
    headingEn: "How to Study Law",
    lead: "法学の学習は「記憶」ではなく「論理の組み立て」が中心です。条文・判例・学説の三つを往復しながら、具体的事案に対する「あてはめ」を練習していくのが王道です。",
    body: [
      {
        label: "学習の三本柱",
        text: "①基本書で体系を掴む → ②条文と判例で裏付けを取る → ③事例問題で「あてはめ」を練習する。この往復運動を続けることで「法的思考（リーガルマインド）」が育ちます。",
      },
      {
        label: "IRAC という型",
        text: "Issue（論点）→ Rule（規範）→ Application（あてはめ）→ Conclusion（結論）。英米法圏で教えられる論述スタイルですが、日本の答案作成にも応用できます。",
      },
      {
        label: "次に読むべき分野",
        text: "基礎三法（憲法・民法・刑法）を踏まえた上で、行政法・商法・民事訴訟法・刑事訴訟法へと進むのが標準ルートです。関心に応じて労働法・国際法・知的財産法などへ展開していきましょう。",
      },
    ],
    callout:
      "法学は「正解」よりも「なぜそう考えるか」を問う学問です。結論よりも理由づけを大切にする姿勢が、そのまま良い法律家・良い市民への訓練になります。",
  },
];

export default function LawLecturePage() {
  return (
    <div className="max-w-[760px] mx-auto px-5 sm:px-6 py-16">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "University", href: "/university" },
          { name: "社会科学", href: "/university/social" },
          { name: "法学", href: "/university/social/law" },
        ]}
      />

      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-[11px] text-foreground/40 mb-10 font-medium tracking-wide flex-wrap">
        <Link href="/" className="hover:text-foreground/70 transition-colors">Home</Link>
        <span className="opacity-30">/</span>
        <Link href="/university" className="hover:text-foreground/70 transition-colors">University</Link>
        <span className="opacity-30">/</span>
        <Link href="/university/social" className="hover:text-foreground/70 transition-colors">社会科学</Link>
        <span className="opacity-30">/</span>
        <span className="text-foreground/60">法学</span>
      </nav>

      {/* Header */}
      <header className="mb-14">
        <div className="flex items-center gap-2.5 mb-5 flex-wrap">
          <span
            className="text-[10px] tracking-[2.5px] uppercase font-semibold px-2.5 py-1 rounded-md border"
            style={{
              color: LAW_COLOR,
              borderColor: `${LAW_COLOR}33`,
              backgroundColor: `${LAW_COLOR}10`,
            }}
          >
            Lecture Notes
          </span>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/40">
            社会科学 / 法学
          </span>
        </div>

        <h1 className="font-serif text-[30px] sm:text-[40px] font-bold leading-[1.2] tracking-tight">
          法学の基礎
          <br className="hidden sm:block" />
          <span className="text-foreground/60">— 条文を読み、社会を読む</span>
        </h1>

        <p className="mt-3 text-[11px] tracking-[1px] text-foreground/30 font-medium uppercase">
          Foundations of Law — A First Lecture
        </p>

        <p
          className="mt-8 text-[15px] text-foreground/70 leading-[1.95] border-l-2 pl-5"
          style={{ borderColor: `${LAW_COLOR}40` }}
        >
          この講義では、法学を初めて学ぶ人に向けて「法とは何か」「六法はどう組み立てられているか」「憲法・民法・刑法はどんな問いを扱うか」「判例はどう読むか」を一通り案内します。将来の学習のための地図として使ってください。
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-5 text-[11px] text-foreground/40 font-medium">
          <span>全 7 章</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>約 25 分</span>
          <span className="w-1 h-1 rounded-full bg-foreground/20" />
          <span>Lv. 入門</span>
        </div>
      </header>

      {/* Table of contents */}
      <nav className="mb-16 relative">
        <div className="relative p-6 sm:p-8 rounded-2xl border border-foreground/[0.06] bg-foreground/[0.015]">
          <div className="flex items-center gap-3 mb-5">
            <div
              className="w-6 h-6 rounded-md flex items-center justify-center"
              style={{ backgroundColor: `${LAW_COLOR}14`, color: LAW_COLOR }}
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
              Syllabus
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
                    style={{ color: `${LAW_COLOR}80` }}
                  >
                    {s.n}
                  </span>
                  <span className="text-[13px] font-medium">{s.heading}</span>
                  <span className="ml-auto text-[10px] text-foreground/30 uppercase tracking-wider hidden sm:inline">
                    {s.headingEn}
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

      {/* Lecture sections */}
      <article>
        {sections.map((s) => (
          <section key={s.n} id={`section-${s.n}`} className="mb-20 scroll-mt-24">
            <div className="mb-8">
              <div className="flex items-baseline gap-4 mb-3">
                <span
                  className="text-[36px] sm:text-[44px] font-bold tabular-nums leading-none select-none font-serif"
                  style={{ color: `${LAW_COLOR}1A` }}
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
                  background: `linear-gradient(to right, ${LAW_COLOR}30, ${LAW_COLOR}08, transparent)`,
                }}
              />
            </div>

            <p className="text-[16px] text-foreground/85 leading-[2] tracking-[0.02em] mb-6">
              {s.lead}
            </p>

            <div className="space-y-5">
              {s.body.map((b, j) => (
                <div key={j} className="group pl-5 py-3 relative">
                  <div
                    className="absolute left-0 top-0 bottom-0 w-[3px] rounded-full"
                    style={{ backgroundColor: `${LAW_COLOR}33` }}
                  />
                  {b.label && (
                    <div
                      className="text-[11px] font-bold tracking-wide mb-1.5"
                      style={{ color: `${LAW_COLOR}CC` }}
                    >
                      {b.label}
                    </div>
                  )}
                  <p className="text-[14.5px] text-foreground/75 leading-[1.95]">{b.text}</p>
                </div>
              ))}
            </div>

            {s.keyTerms && s.keyTerms.length > 0 && (
              <div
                className="mt-8 rounded-2xl border p-5"
                style={{
                  borderColor: `${LAW_COLOR}22`,
                  backgroundColor: `${LAW_COLOR}08`,
                }}
              >
                <div
                  className="text-[10px] font-bold uppercase tracking-[2.5px] mb-4"
                  style={{ color: LAW_COLOR }}
                >
                  Key Terms
                </div>
                <dl className="space-y-3">
                  {s.keyTerms.map((k) => (
                    <div key={k.term} className="grid grid-cols-1 sm:grid-cols-[140px_1fr] gap-1 sm:gap-4">
                      <dt
                        className="text-[13px] font-semibold"
                        style={{ color: LAW_COLOR }}
                      >
                        {k.term}
                      </dt>
                      <dd className="text-[13px] text-foreground/70 leading-[1.8]">
                        {k.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}

            {s.callout && (
              <div
                className="mt-8 pl-5 py-4 rounded-r-lg border-l-[3px]"
                style={{
                  backgroundColor: `${LAW_COLOR}0D`,
                  borderColor: `${LAW_COLOR}55`,
                }}
              >
                <p className="text-[14px] text-foreground/80 leading-[1.9] italic">
                  {s.callout}
                </p>
              </div>
            )}
          </section>
        ))}
      </article>

      {/* Footer nav */}
      <div className="mt-16 pt-10 border-t border-foreground/[0.05]">
        <div
          className="rounded-2xl border p-6"
          style={{
            borderColor: `${LAW_COLOR}22`,
            backgroundColor: `${LAW_COLOR}08`,
          }}
        >
          <div
            className="text-[10px] font-bold uppercase tracking-[2.5px] mb-2"
            style={{ color: LAW_COLOR }}
          >
            Further Study
          </div>
          <p className="text-[13px] text-foreground/70 leading-[1.9]">
            次のステップとして、まずは憲法と民法総則の基本書を1冊ずつ通読してみてください。その後、判例百選で最高裁の主要判例に触れると、条文と実務の距離感が掴めるようになります。
          </p>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/university/social"
            className="inline-flex items-center gap-2 text-[12px] text-foreground/40 hover:text-foreground/70 transition-colors font-medium tracking-wide"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-60">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            社会科学に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
