// 成立済・未施行の法律
// 国会で可決・成立したが、2026年5月3日時点でまだ施行されていない法令
// ソース: clb.go.jp, sangiin.go.jp, shugiin.go.jp

export interface PassedItem {
  slug: string;
  title: string;
  titleEn: string;
  enactedDate: string;
  effectiveDate: string;
  dietSession: string;
  dietSessionEn: string;
  committee: string;
  committeeEn: string;
  summary: string;
  summaryEn: string;
  detail: string;
  detailEn: string;
  keyPoints: string[];
  keyPointsEn: string[];
  impact: string;
  impactEn: string;
  category: string;
  categoryEn: string;
}

export const passedItems: PassedItem[] = [
  // ──────────────────────────────────────────
  // 2026年5月 施行予定
  // ──────────────────────────────────────────
  {
    slug: "civil-procedure-digitalization",
    title: "改正民事訴訟法（民事裁判のIT化）",
    titleEn: "Revised Code of Civil Procedure (IT Civil Trials)",
    enactedDate: "2022-05-25",
    effectiveDate: "2026-05-21",
    dietSession: "第208回国会",
    dietSessionEn: "208th Diet Session",
    committee: "法務委員会",
    committeeEn: "Judicial Affairs Committee",
    category: "司法・法務",
    categoryEn: "Judiciary & Legal Affairs",
    summary:
      "民事訴訟手続きを全面的にIT化。訴えの提起から判決までをオンラインで完結可能にする抜本改革。",
    summaryEn:
      "A sweeping reform digitizing civil court procedures, allowing the entire process from filing to judgment to be completed online.",
    detail:
      "民事訴訟のデジタルトランスフォーメーションを実現する改正法の最終フェーズが2026年5月21日に施行。インターネットを利用した訴えの提起、準備書面の提出、口頭弁論のウェブ会議参加が可能となる。裁判所からの送達もオンラインで行えるようになり、当事者は裁判所に物理的に出向く必要性が大幅に低減。2022年成立後、段階的に施行されてきた最終段階で、これにより民事訴訟手続きの完全IT化が実現する。",
    detailEn:
      "The final phase of the amendment digitally transforming civil litigation enters into force on May 21, 2026. Parties will be able to file complaints, submit pleadings, and attend oral arguments via web conference over the internet. Court service of documents can also be conducted online, substantially reducing the need for parties to appear in person. This marks the culmination of phased enforcement since passage in 2022, completing full IT integration of civil procedure.",
    keyPoints: [
      "訴えの提起・準備書面提出をオンラインで可能に",
      "口頭弁論へのウェブ会議での参加を認める",
      "裁判所からのオンライン送達を実施",
      "訴訟記録の電子化と閲覧のオンライン化",
      "2022年成立の改正法の最終フェーズ施行",
    ],
    keyPointsEn: [
      "Online filing of complaints and pleadings enabled",
      "Participation in oral arguments via web conference permitted",
      "Online service of documents by the court implemented",
      "Digitalization of case records and online access",
      "Final phase enforcement of the 2022 amendment",
    ],
    impact:
      "裁判手続きが完全オンライン化。年間約150万件の民事訴訟の利便性が向上。",
    impactEn:
      "Court procedures become fully online, improving convenience for roughly 1.5 million civil cases per year.",
  },

  // ──────────────────────────────────────────
  // 2026年後半〜2027年 施行予定
  // ──────────────────────────────────────────
  {
    slug: "child-violence-prevention-dbs",
    title: "こども性暴力防止法（日本版DBS）",
    titleEn: "Child Sexual Violence Prevention Act (Japanese DBS)",
    enactedDate: "2024-06-19",
    effectiveDate: "2026-12-25",
    dietSession: "第213回国会",
    dietSessionEn: "213th Diet Session",
    committee: "内閣委員会",
    committeeEn: "Cabinet Committee",
    category: "子ども・教育",
    categoryEn: "Children & Education",
    summary:
      "教育・保育に関わる職員の性犯罪歴を確認する「日本版DBS」制度を導入。子どもと接する事業者に犯罪歴照会を義務付ける。",
    summaryEn:
      "Introduces a 'Japanese DBS' system to check sex-offense records of staff working in education and childcare, mandating background checks for businesses working with children.",
    detail:
      "学校や保育所、学習塾など子どもと接する施設の職員について、性犯罪の前科を確認する制度（日本版DBS）を創設する法律。学校設置者等には犯罪歴の確認が義務付けられ、民間の教育保育事業者には認定制度を通じて確認を促す。性犯罪歴のある者を子どもと接する業務に従事させないことを目的とし、子どもの安全確保を最優先とする。公布から2年6ヶ月以内の施行が定められ、2026年12月25日に施行予定。",
    detailEn:
      "A new law creating a Japanese-style DBS system for verifying sex-offense criminal records of personnel at facilities that work with children, including schools, nurseries, and cram schools. School operators are required to check records, while private education and childcare providers are encouraged to do so through a certification scheme. The goal is to prevent those with sex-offense histories from engaging in work involving children, prioritizing child safety. Enforcement is set within 2.5 years of promulgation, scheduled for December 25, 2026.",
    keyPoints: [
      "学校・保育所等の職員に対する性犯罪歴の照会を義務化",
      "民間事業者向けの認定制度を創設",
      "性犯罪歴のある者の子ども関連業務への従事を制限",
      "犯罪歴情報の適正管理に関する規定を整備",
      "施行は2026年12月25日（公布から2年6ヶ月以内）",
    ],
    keyPointsEn: [
      "Mandatory sex-offense record checks for school and nursery staff",
      "New certification system for private operators",
      "Restrictions on those with sex-offense records working with children",
      "Rules for proper handling of criminal record information",
      "Entry into force on December 25, 2026 (within 2.5 years of promulgation)",
    ],
    impact:
      "教師・保育士など子どもに関わる約120万人の従事者に影響。性犯罪歴の確認が義務化される。",
    impactEn:
      "Affects about 1.2 million workers involved with children, including teachers and nursery staff, by mandating sex-offense record checks.",
  },
  {
    slug: "security-collateral-reform",
    title: "譲渡担保契約法（担保法制の整備）",
    titleEn: "Security Assignment Contract Act (Collateral Law Reform)",
    enactedDate: "2025-06-11",
    effectiveDate: "2026-10-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "法務委員会",
    committeeEn: "Judicial Affairs Committee",
    category: "司法・法務",
    categoryEn: "Judiciary & Legal Affairs",
    summary:
      "譲渡担保や所有権留保など、判例法理に委ねられてきた非典型担保を初めて法制化する画期的な法律。",
    summaryEn:
      "A landmark law codifying non-typical security interests such as security assignment and retention of title, which had previously been governed only by case law.",
    detail:
      "譲渡担保契約及び所有権留保契約に関する法律。これまで判例法理に委ねられてきた譲渡担保と所有権留保について、初めて包括的な成文法を制定。担保権の対抗要件、優先順位、実行手続きを明確化し、中小企業の事業性資産を担保とした融資（ABL）の促進を図る。登記制度の創設により第三者対抗要件を整備。",
    detailEn:
      "A statute on security-assignment and retention-of-title contracts. For the first time, it enacts comprehensive legislation for these forms of security that were previously governed solely by judicial precedent. It clarifies perfection requirements, priority, and enforcement procedures for security interests, and promotes asset-based lending (ABL) against the business assets of SMEs. A new registration system establishes third-party perfection requirements.",
    keyPoints: [
      "譲渡担保・所有権留保の初の法制化",
      "担保権の対抗要件・優先順位の明確化",
      "事業成長担保権の創設",
      "登記制度の創設（第三者対抗要件）",
      "中小企業のABL（動産担保融資）の促進",
    ],
    keyPointsEn: [
      "First-ever codification of security assignment and retention of title",
      "Clarified perfection and priority rules for security interests",
      "Creation of a business-growth security interest",
      "New registration system for third-party perfection",
      "Promotion of SME asset-based lending (ABL)",
    ],
    impact:
      "中小企業の資金調達手段が多様化。約360万社の中小企業の金融アクセスが改善。",
    impactEn:
      "Diversifies SME financing options, improving access to funds for roughly 3.6 million small and medium-sized enterprises.",
  },
  {
    slug: "early-business-restructuring",
    title: "早期事業再生法（私的整理の法的枠組み）",
    titleEn: "Early Business Restructuring Act (Legal Framework for Out-of-Court Workouts)",
    enactedDate: "2025-06-11",
    effectiveDate: "2026-09-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "経済産業委員会",
    committeeEn: "Committee on Economy, Trade and Industry",
    category: "金融・経済",
    categoryEn: "Finance & Economy",
    summary:
      "中小企業の事業再生を迅速に進めるため、裁判外の債務整理手続き（私的整理）に法的な枠組みを整備する新法。",
    summaryEn:
      "A new law establishing a legal framework for out-of-court debt workouts (private restructuring) to accelerate SME business turnarounds.",
    detail:
      "円滑な事業再生を図るための事業者の金融機関等に対する債務の調整の手続等に関する法律。これまで法的根拠のなかった私的整理手続きに法的な枠組みを与え、中小企業が裁判所の関与なく金融機関と債務調整を行うことを可能にする。手続きの透明性・公正性を確保しつつ、倒産に至る前の早期再生を促進。",
    detailEn:
      "A law on procedures for adjusting debts owed by business operators to financial institutions, aimed at facilitating smooth business rehabilitation. It provides a legal foundation for private workout procedures that previously had no statutory basis, allowing SMEs to restructure debts with financial institutions without court involvement. It ensures transparency and fairness while promoting early restructuring before insolvency.",
    keyPoints: [
      "私的整理手続きの法的枠組みの創設",
      "裁判外での金融機関との債務調整手続き",
      "第三者（中立的事業再生支援者）の関与",
      "手続きの透明性・公正性の確保",
      "早期再生による事業と雇用の維持",
    ],
    keyPointsEn: [
      "New legal framework for private workout procedures",
      "Out-of-court debt adjustment procedures with financial institutions",
      "Involvement of neutral third-party business-rehabilitation facilitators",
      "Ensuring transparency and fairness of procedures",
      "Preserving businesses and jobs through early restructuring",
    ],
    impact:
      "年間約8,000件の企業倒産を減少させる効果が期待。中小企業の再生を後押し。",
    impactEn:
      "Expected to reduce corporate bankruptcies by roughly 8,000 cases per year, supporting SME revival.",
  },
  {
    slug: "offshore-wind-promotion",
    title: "改正海洋再生可能エネルギー発電設備整備法（洋上風力発電促進）",
    titleEn: "Revised Offshore Renewable Energy Generation Facilities Act (Offshore Wind Promotion)",
    enactedDate: "2025-06-04",
    effectiveDate: "2026-07-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "内閣委員会",
    committeeEn: "Cabinet Committee",
    category: "環境・エネルギー",
    categoryEn: "Environment & Energy",
    summary:
      "洋上風力発電の導入を加速するため、促進区域の指定手続きの迅速化とEEZ（排他的経済水域）での設置を可能にする改正法。",
    summaryEn:
      "An amendment accelerating offshore wind deployment by streamlining promotion-zone designations and enabling installation in the Exclusive Economic Zone (EEZ).",
    detail:
      "再エネ海域利用法を改正し、洋上風力発電の導入目標（2030年10GW、2040年30〜45GW）の達成に向けた制度整備を行う。促進区域の指定手続きの迅速化、EEZでの洋上風力発電を可能にする法的枠組みの整備、系統接続の優先措置を含む。",
    detailEn:
      "An amendment to the Marine Renewable Energy Utilization Act designed to meet offshore wind targets (10 GW by 2030, 30–45 GW by 2040). It streamlines designation of promotion zones, establishes a legal framework enabling offshore wind in the EEZ, and includes priority grid-connection measures.",
    keyPoints: [
      "促進区域の指定手続きの迅速化",
      "EEZでの洋上風力発電設置の法的枠組み",
      "系統接続の優先措置",
      "浮体式洋上風力発電の導入支援",
      "漁業との共存ルールの整備",
    ],
    keyPointsEn: [
      "Faster designation of offshore wind promotion zones",
      "Legal framework for offshore wind installation in the EEZ",
      "Priority measures for grid connection",
      "Support for floating offshore wind deployment",
      "Rules for coexistence with the fishing industry",
    ],
    impact:
      "2030年のカーボンニュートラル中間目標に向けた再エネ導入が加速。洋上風力産業の本格的な発展に寄与。",
    impactEn:
      "Accelerates renewable energy deployment toward the 2030 interim carbon-neutrality target and fosters full-scale growth of the offshore wind industry.",
  },
  {
    slug: "academic-council-reform",
    title: "改正日本学術会議法",
    titleEn: "Revised Science Council of Japan Act",
    enactedDate: "2025-05-28",
    effectiveDate: "2026-10-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "内閣委員会",
    committeeEn: "Cabinet Committee",
    category: "行政・研究",
    categoryEn: "Administration & Research",
    summary:
      "日本学術会議の組織運営を見直し、会員選考方法の透明化と政府からの独立性強化を図る改正法。",
    summaryEn:
      "An amendment reforming the Science Council of Japan's governance, making member selection more transparent and strengthening its independence from government.",
    detail:
      "菅政権下での会員任命拒否問題を受け、日本学術会議のあり方を見直す改正法。会員選考に外部有識者を交えた選考助言委員会を設置、会長の任期制限（連続2期まで）の導入、財政の透明性向上を規定。学術会議の政府からの独立性を法的に担保しつつ、運営の近代化を図る。",
    detailEn:
      "In response to the appointment-rejection controversy under the Suga administration, this amendment overhauls the Science Council of Japan. It establishes a selection advisory committee including outside experts, introduces term limits for the president (up to two consecutive terms), and improves financial transparency. It legally guarantees the Council's independence from government while modernizing its operations.",
    keyPoints: [
      "選考助言委員会の設置（外部有識者を含む）",
      "会長の任期制限の導入",
      "財政運営の透明性向上",
      "政府からの独立性の法的担保",
    ],
    keyPointsEn: [
      "Establishment of a selection advisory committee (including outside experts)",
      "Introduction of term limits for the president",
      "Improved financial transparency",
      "Legal guarantee of independence from government",
    ],
    impact:
      "日本学術会議の210名の会員選考と運営に影響。学術界の自律性に関わる改革。",
    impactEn:
      "Affects the selection and operation of the Council's 210 members, a reform touching on academic autonomy.",
  },
  {
    slug: "criminal-procedure-digitalization",
    title: "改正刑事訴訟法等（サイバー犯罪対応）",
    titleEn: "Revised Code of Criminal Procedure (Cybercrime Response)",
    enactedDate: "2025-05-28",
    effectiveDate: "2026-07-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "法務委員会",
    committeeEn: "Judicial Affairs Committee",
    category: "司法・法務",
    categoryEn: "Judiciary & Legal Affairs",
    summary:
      "サイバー犯罪捜査の実効性を高めるため、電子的証拠の収集・保全手続きを整備する刑事訴訟法等の改正。",
    summaryEn:
      "Amendments to the Code of Criminal Procedure strengthening the collection and preservation of electronic evidence to improve cybercrime investigations.",
    detail:
      "情報通信技術の進展等に対応するための刑事訴訟法等の改正。電磁的記録の差押え手続きの明確化、リモートアクセスによる証拠収集の要件整備、クラウド上のデータの保全命令制度の創設を含む。サイバー空間での犯罪捜査の実効性を高めつつ、通信の秘密や個人のプライバシーへの配慮規定も設ける。",
    detailEn:
      "Amendments responding to advances in information and communications technology. They clarify procedures for seizing electromagnetic records, establish requirements for remote-access evidence collection, and create a preservation-order system for cloud data. While strengthening cybercrime investigative capability, the amendments also include provisions protecting communications secrecy and personal privacy.",
    keyPoints: [
      "電磁的記録の差押え手続きの明確化",
      "リモートアクセスによる証拠収集の要件整備",
      "クラウド上データの保全命令制度の創設",
      "通信の秘密・プライバシーへの配慮規定",
    ],
    keyPointsEn: [
      "Clarified procedures for seizing electromagnetic records",
      "Requirements established for remote-access evidence collection",
      "New preservation-order system for cloud-stored data",
      "Provisions protecting communications secrecy and privacy",
    ],
    impact:
      "サイバー犯罪への捜査能力が強化。デジタル証拠の収集・保全が迅速化。",
    impactEn:
      "Strengthens investigative capability against cybercrime and speeds up collection and preservation of digital evidence.",
  },
  {
    slug: "environmental-assessment-reform",
    title: "改正環境影響評価法",
    titleEn: "Revised Environmental Impact Assessment Act",
    enactedDate: "2025-06-11",
    effectiveDate: "2026-07-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "環境委員会",
    committeeEn: "Committee on the Environment",
    category: "環境・エネルギー",
    categoryEn: "Environment & Energy",
    summary:
      "再エネ発電事業等のアセスメント手続きを迅速化し、環境保全と開発の両立を図る改正法。",
    summaryEn:
      "An amendment streamlining environmental assessment procedures for renewable-energy projects, balancing environmental protection with development.",
    detail:
      "大規模な再生可能エネルギー発電事業（太陽光・風力等）のアセスメント手続きについて、事前段階の配慮書手続きの簡素化、審査期間の短縮、デジタル化の推進を盛り込む。環境保全の実効性は維持しつつ、カーボンニュートラルの実現に必要な再エネ導入のスピードアップを図る。",
    detailEn:
      "Simplifies the preliminary consideration-document procedure for large-scale renewable energy projects (solar, wind, etc.), shortens review periods, and promotes digitalization. While maintaining the effectiveness of environmental protection, it accelerates renewable-energy deployment needed to achieve carbon neutrality.",
    keyPoints: [
      "配慮書手続きの簡素化",
      "アセスメント審査期間の短縮",
      "手続きのデジタル化推進",
      "環境保全の実効性の維持",
    ],
    keyPointsEn: [
      "Simplified consideration-document procedures",
      "Shorter environmental assessment review periods",
      "Digitalization of procedures",
      "Maintained effectiveness of environmental protection",
    ],
    impact:
      "再エネ事業の開発期間が短縮。2050年カーボンニュートラル実現に向けた導入加速に寄与。",
    impactEn:
      "Shortens development timelines for renewable projects, helping accelerate deployment toward 2050 carbon neutrality.",
  },
  {
    slug: "child-welfare-reform",
    title: "改正児童福祉法等",
    titleEn: "Revised Child Welfare Act and Related Laws",
    enactedDate: "2025-04-18",
    effectiveDate: "2026-10-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "厚生労働委員会",
    committeeEn: "Health, Labour and Welfare Committee",
    category: "子ども・教育",
    categoryEn: "Children & Education",
    summary:
      "児童虐待防止対策の強化と、社会的養護（里親・児童養護施設）の充実を図る児童福祉法等の改正。",
    summaryEn:
      "Amendments strengthening child abuse prevention and expanding social care (foster care and residential care facilities).",
    detail:
      "児童相談所の体制強化（児童福祉司の増員）、一時保護の適正化（司法審査の導入）、里親支援の拡充、ヤングケアラー支援の法定化を含む改正法。2024年に発生した複数の児童虐待死亡事案を受け、対策の強化が図られた。",
    detailEn:
      "The amendments strengthen child guidance centers by increasing the number of child welfare officers, introduce judicial review for temporary custody, expand foster-parent support, and codify support for young carers. They were prompted by multiple child-abuse fatality cases in 2024.",
    keyPoints: [
      "児童相談所の体制強化（児童福祉司の増員）",
      "一時保護への司法審査の導入",
      "里親支援の拡充",
      "ヤングケアラー支援の法定化",
      "児童虐待対応の強化",
    ],
    keyPointsEn: [
      "Strengthened child guidance centers (more child welfare officers)",
      "Judicial review introduced for temporary custody",
      "Expanded foster-parent support",
      "Statutory support for young carers",
      "Stronger response to child abuse",
    ],
    impact:
      "児童虐待への対応力が強化。約20万件/年の虐待相談に対する体制が改善。",
    impactEn:
      "Strengthens responses to child abuse, improving capacity to handle roughly 200,000 abuse consultations per year.",
  },
  {
    slug: "raa-implementation",
    title: "円滑化協定（RAA）実施法",
    titleEn: "Reciprocal Access Agreement (RAA) Implementation Act",
    enactedDate: "2025-06-18",
    effectiveDate: "2026-07-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "外務委員会",
    committeeEn: "Foreign Affairs Committee",
    category: "安全保障",
    categoryEn: "National Security",
    summary:
      "同盟国・友好国の軍隊との相互アクセスを円滑化する協定の国内実施法。日豪・日英・日比等のRAAを一括実施。",
    summaryEn:
      "Domestic implementing legislation for Reciprocal Access Agreements enabling smoother access by allied and friendly militaries. Implements RAAs with Australia, the UK, the Philippines and others in a single law.",
    detail:
      "日本と複数の締約国（オーストラリア、英国、フィリピン等）との間の円滑化協定（RAA：Reciprocal Access Agreement）を国内法として実施するための法律。相手国の軍隊の出入国手続き、施設利用、刑事裁判管轄権等の法的枠組みを整備。共同訓練・災害救援活動の迅速な実施を可能にする。",
    detailEn:
      "A law implementing as domestic law the Reciprocal Access Agreements (RAAs) between Japan and multiple partner countries (Australia, the UK, the Philippines, etc.). It establishes the legal framework for entry/exit procedures, facility use, and criminal jurisdiction regarding partner militaries, enabling rapid joint training and disaster-relief operations.",
    keyPoints: [
      "同盟国・友好国軍隊の日本での活動の法的基盤整備",
      "出入国手続き・施設利用の簡素化",
      "刑事裁判管轄権の取り決め",
      "共同訓練・災害救援活動の迅速化",
    ],
    keyPointsEn: [
      "Legal basis for allied and friendly military activities in Japan",
      "Simplified entry/exit procedures and facility use",
      "Arrangements for criminal jurisdiction",
      "Faster joint training and disaster-relief operations",
    ],
    impact:
      "日本の安全保障体制が強化。インド太平洋地域における多国間防衛協力が加速。",
    impactEn:
      "Strengthens Japan's security posture and accelerates multilateral defense cooperation in the Indo-Pacific.",
  },
  {
    slug: "my-number-reform",
    title: "改正マイナンバー法",
    titleEn: "Revised My Number Act",
    enactedDate: "2025-06-04",
    effectiveDate: "2026-09-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "内閣委員会",
    committeeEn: "Cabinet Committee",
    category: "デジタル・IT",
    categoryEn: "Digital & IT",
    summary:
      "マイナンバーの利用範囲を国家資格管理や在留カードに拡大し、行政のデジタル化を推進する改正法。",
    summaryEn:
      "An amendment expanding the scope of My Number use to national qualifications and residence cards, advancing digitalization of public services.",
    detail:
      "マイナンバー法を改正し、マイナンバーの利用範囲を拡大。国家資格（医師・弁護士等）の管理へのマイナンバー活用、在留カードとマイナンバーカードの一体化、健康保険証の完全廃止に伴う経過措置の延長を規定。行政手続きの効率化とデジタル社会の基盤整備を推進。",
    detailEn:
      "Expands the scope of My Number (Japan's national ID number) use, applying it to the management of national qualifications (physicians, lawyers, etc.), unifying residence cards with My Number Cards, and extending transitional measures for the full abolition of the paper health insurance card. It advances administrative efficiency and the infrastructure of a digital society.",
    keyPoints: [
      "マイナンバーの利用範囲を国家資格管理に拡大",
      "在留カードとマイナンバーカードの一体化",
      "健康保険証廃止に伴う経過措置の延長",
      "行政手続きの効率化",
    ],
    keyPointsEn: [
      "Expansion of My Number use to national qualification management",
      "Integration of residence cards with My Number Cards",
      "Extended transitional measures for abolition of paper health insurance cards",
      "Streamlined administrative procedures",
    ],
    impact:
      "全国民のマイナンバー利用場面が拡大。行政サービスのデジタル化が加速。",
    impactEn:
      "Expands situations in which all citizens use My Number and accelerates digitalization of government services.",
  },
  {
    slug: "gambling-addiction-reform",
    title: "改正ギャンブル等依存症対策基本法",
    titleEn: "Revised Basic Act on Measures against Gambling Addiction",
    enactedDate: "2025-06-18",
    effectiveDate: "2026-07-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "内閣委員会",
    committeeEn: "Cabinet Committee",
    category: "社会保障",
    categoryEn: "Social Security",
    summary:
      "オンラインカジノ等の新たなギャンブル形態への対策を追加し、依存症対策を強化する改正法。",
    summaryEn:
      "An amendment adding measures against new forms of gambling such as online casinos and strengthening addiction countermeasures.",
    detail:
      "ギャンブル等依存症対策基本法を改正し、オンラインカジノやスマートフォンを通じた賭博等の新たな形態のギャンブルへの対策を追加。相談窓口の拡充、医療体制の整備、予防教育の充実を盛り込む。",
    detailEn:
      "Amends the Basic Act on Measures against Gambling Addiction to add countermeasures for new forms of gambling such as online casinos and smartphone-based betting. Expands counseling services, strengthens medical systems, and enhances preventive education.",
    keyPoints: [
      "オンラインカジノ等への対策追加",
      "相談窓口の拡充",
      "医療体制の整備",
      "予防教育の充実",
    ],
    keyPointsEn: [
      "New countermeasures against online casinos and similar forms",
      "Expanded counseling services",
      "Strengthened medical care systems",
      "Enhanced preventive education",
    ],
    impact:
      "推定約320万人のギャンブル依存症が疑われる方への支援体制が強化。",
    impactEn:
      "Strengthens support for an estimated 3.2 million people suspected of having gambling addiction.",
  },
  {
    slug: "sign-language-promotion",
    title: "手話施策推進法",
    titleEn: "Sign Language Policy Promotion Act",
    enactedDate: "2025-06-18",
    effectiveDate: "2026-07-01",
    dietSession: "第217回国会",
    dietSessionEn: "217th Diet Session",
    committee: "厚生労働委員会",
    committeeEn: "Health, Labour and Welfare Committee",
    category: "社会保障",
    categoryEn: "Social Security",
    summary:
      "手話を言語として法的に位置づけ、手話の普及と手話通訳者の養成を推進する新法。",
    summaryEn:
      "A new law legally recognizing sign language as a language and promoting its dissemination and the training of sign-language interpreters.",
    detail:
      "参議院議員提出の議員立法として成立。手話を日本語と対等な言語として法的に位置づけ、国・地方公共団体に手話の普及施策と手話通訳者の養成・派遣体制の整備を義務付ける。行政窓口や教育現場での手話利用の環境整備も規定。",
    detailEn:
      "Passed as a Member Bill submitted by members of the House of Councillors. Legally positions sign language as a language on equal footing with Japanese and obliges national and local governments to promote sign language and establish systems for training and dispatching interpreters. It also mandates environments enabling sign-language use at public service counters and in education.",
    keyPoints: [
      "手話を言語として法的に位置づけ",
      "国・地方公共団体に普及施策を義務付け",
      "手話通訳者の養成・派遣体制の整備",
      "行政窓口での手話利用環境の整備",
    ],
    keyPointsEn: [
      "Legal recognition of sign language as a language",
      "Obligations on national and local governments to promote sign language",
      "Development of training and dispatch systems for interpreters",
      "Environment for sign-language use at government service counters",
    ],
    impact:
      "約34万人のろう者・難聴者の権利保障が前進。手話の社会的地位が向上。",
    impactEn:
      "Advances rights protections for roughly 340,000 deaf and hard-of-hearing people and elevates the social standing of sign language.",
  },
];
