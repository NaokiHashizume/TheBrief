import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import { T } from "@/components/T";
import { PageMasthead } from "@/components/PageMasthead";
import {
  JapanBirthsDeclineDiagram,
  JapanAgingBurdenDiagram,
  JapanFiscalDebtDiagram,
  JapanDefenseSpendingDiagram,
  JapanLaborShortageDiagram,
  JapanSelfSufficiencyDiagram,
} from "@/components/JapanChallengesDiagrams";

const challenges = [
  {
    slug: "births",
    title: "少子化の加速",
    titleEn: "Declining Births",
    description: "出生率1.15、出生数68.6万人。世界最速ペースで進む人口減少と未婚化の構造。",
    descriptionEn: "Fertility rate at 1.15 and only 686k births. The world's fastest population decline and rising lifetime singlehood.",
    stat: "1.15",
    statLabel: "出生率",
    statLabelEn: "Fertility Rate",
    color: "#ef4444",
    Diagram: JapanBirthsDeclineDiagram,
    detail:
      "2024年の合計特殊出生率は**1.15**で過去最低を更新し、2025年の出生数（日本人）は**約66.8万人**と統計史上最少となった。国立社会保障・人口問題研究所の将来推計より**17年早い**ペースで少子化が進行しており、2026年は丙午にあたるためさらなる減少も懸念される。未婚率の上昇と晩婚化が主因で、生涯未婚率は男性**28.3%**・女性**17.8%**（2020年国勢調査）に達している。",
    detailEn:
      "Japan's total fertility rate hit a record low of **1.15** in 2024, and the number of Japanese births fell to approximately **668,000** in 2025—the lowest since records began. The decline is progressing **17 years faster** than the National Institute of Population and Social Security Research projected. Lifelong singlehood rates have reached **28.3%** for men and **17.8%** for women (2020 Census), driving the structural collapse in birth numbers.",
    causes: [
      "経済的不安：非正規雇用の増加と実質賃金の低迷により、結婚・出産を経済的に踏み切れない若者が増加している。20代・30代の非正規雇用比率は約30%前後で推移し、将来設計が立てにくい状況が続く。",
      "未婚・晩婚化：価値観の多様化やキャリア優先志向の高まりから、生涯未婚率が男性28.3%・女性17.8%（2020年）に達した。平均初婚年齢も男性31.1歳・女性29.7歳（2023年）まで上昇している。",
      "子育て環境の整備不足：待機児童問題は改善されつつあるが、保育料の高さ・長時間労働文化・育休取得率（男性34.2%、2024年）のギャップが、出産後のキャリア継続を困難にしている。",
    ],
    causesEn: [
      "Economic insecurity: Rising non-regular employment and stagnant real wages make it financially difficult for young people to marry and have children. Around 30% of people in their 20s and 30s work in non-regular positions.",
      "Rising singlehood and delayed marriage: Diversifying values and career-first attitudes have pushed lifelong singlehood rates to 28.3% for men and 17.8% for women (2020). Average age at first marriage reached 31.1 for men and 29.7 for women in 2023.",
      "Inadequate childcare environment: Despite improvement in nursery waitlists, high childcare costs, long-hours culture, and low paternity leave uptake (34.2% in 2024) make it hard for parents—especially mothers—to continue working after childbirth.",
    ],
    solutions: [
      "こども未来戦略（2023年閣議決定）：2026年度までの3年間を集中取組期間とし、総額**3.6兆円**の「こども・子育て支援加速化プラン」を実施。2026年4月から子ども・子育て支援金（健康保険料への上乗せ徴収）が開始される。",
      "児童手当の拡充（2024年10月施行）：所得制限を撤廃し支給対象を高校生年代まで拡大。第3子以降は月**3万円**を支給し、支払月も年6回へ増加。より広い層が恩恵を受けられるよう制度を改革した。",
      "こども誰でも通園制度（2026年度全国実施）：保育所に通っていない0〜3歳未満の子どもでも月**10時間**まで保育施設を利用できる制度を全国展開。親のキャリア継続と育児負担軽減を同時に支援する。",
    ],
    solutionsEn: [
      "Children's Future Strategy (Cabinet decision 2023): A concentrated three-year push through FY2026, deploying **¥3.6 trillion** in the Children & Child-Rearing Acceleration Plan. From April 2026, a new child-rearing support levy is added to health insurance premiums to fund the plan.",
      "Child benefit expansion (October 2024): Income limits abolished, coverage extended to high school age, and the third-child-and-beyond monthly benefit raised to **¥30,000**. Payment frequency doubled to six times per year.",
      "Universal nursery access scheme (nationwide FY2026): Children aged 0–3 not enrolled in daycare can use certified childcare centers for up to **10 hours per month**. Designed to ease caregiving burdens and help parents—especially mothers—sustain careers.",
    ],
  },
  {
    slug: "aging",
    title: "高齢化と社会保障",
    titleEn: "Aging & Social Security",
    description: "高齢化率29.3%、社会保障給付費140兆円。現役世代の負担と医療・介護需要の急増。",
    descriptionEn: "29.3% aged population and ¥140T in social security spending. Soaring care demand strains the working-age base.",
    stat: "29.3%",
    statLabel: "高齢化率",
    statLabelEn: "Aging Rate",
    color: "#f97316",
    Diagram: JapanAgingBurdenDiagram,
    detail:
      "2025年に団塊の世代（約800万人）が全員75歳以上となり、国民の約**15人に1人**が後期高齢者になった。高齢化率は**29.3%**でG7最高水準に達し、社会保障給付費は**約140兆円**（2025年度）を突破した。2030年には介護離職者が毎年**約10万人**に上ると予測され、仕事と介護を両立する「ビジネスケアラー」は約**318万人**に達する見込みだ。支え手となる現役世代の縮小が制度の持続性を脅かしている。",
    detailEn:
      "In 2025, the entire baby-boom generation (some 8 million people) turned 75 or older, making roughly **1 in 15** Japanese citizens a 'late-stage elderly' individual. The aging rate hit **29.3%**—the highest among G7 nations—and social security expenditure surpassed approximately **¥140 trillion** in FY2025. By 2030, some **100,000** people are projected to leave the workforce annually to care for relatives, with 'business caregivers' numbering around **3.18 million**. A shrinking working-age population is threatening the system's sustainability.",
    causes: [
      "団塊世代の高齢化：第二次大戦直後（1947〜1949年）に生まれた約800万人の団塊世代が2025年に全員75歳以上となり、後期高齢者の医療・介護需要が一気に急増した。この「2025年問題」は長年予測されていたが、対策が追いつかなかった。",
      "平均寿命の延伸と少子化の同時進行：男性81.09歳・女性87.14歳（2023年）と平均寿命が伸び続ける一方、出生率低下で現役世代が縮小。現役1人が高齢者を支える割合が悪化の一途をたどっている。",
      "介護・医療人材の不足：介護職の離職率は高く、2040年には介護職員が約**69万人**不足すると推計される。待遇改善が進まなければ、需要の増加に供給が追いつかない構造が続く。",
    ],
    causesEn: [
      "Baby boom aging: The roughly 8 million baby boomers born just after WWII (1947–1949) all turned 75 or older in 2025, triggering a sudden surge in late-stage elderly healthcare and care needs. This '2025 problem' had long been anticipated, but policy responses could not keep pace.",
      "Longer lifespans combined with a falling birth rate: Average life expectancy reached 81.09 for men and 87.14 for women in 2023, yet a falling birth rate is simultaneously shrinking the working-age population, worsening the dependency ratio.",
      "Shortage of caregiving and medical workers: Turnover in caregiving roles remains high. By 2040, the shortage of care workers is projected to reach approximately **690,000**. Without significant wage improvements, supply will continue to fall short of rising demand.",
    ],
    solutions: [
      "2026年度医療・介護制度改革：OTC類似薬の保険給付見直し、地域フォーミュラリの全国展開、新たな地域医療構想に基づく病床再編を2026年度から実行。給付の効率化と現役世代の保険料負担軽減を同時に目指す。",
      "地域包括ケアシステムの構築：要介護状態になっても住み慣れた地域で生活できるよう、医療・介護・予防・住まい・生活支援を一体的に提供する仕組みを全国で整備。入院から在宅へのシフトで施設コストを抑制する。",
      "介護職の処遇改善と外国人材の活用：介護職員の賃金引き上げや、EPA（経済連携協定）・特定技能制度を通じた外国人介護人材の受け入れ拡大を推進。AIや介護ロボットの導入支援も合わせて進め、人材不足の緩和を図る。",
    ],
    solutionsEn: [
      "FY2026 healthcare and care reform: From FY2026, reforms include reviewing insurance coverage for OTC-equivalent drugs, nationwide rollout of regional formularies, and hospital bed restructuring under a new regional healthcare vision—aimed at improving efficiency and easing working-generation premium burdens.",
      "Community-based integrated care system: A nationwide push to provide seamless medical, caregiving, preventive, housing, and daily-life support services so elderly people can remain in familiar communities. The shift from hospital to home-based care is designed to contain institutional costs.",
      "Caregiver pay improvements and foreign talent: Efforts to raise wages in the care sector, expand acceptance of foreign care workers under EPA and Specified Skilled Worker programs, and support adoption of AI and care robots to ease the structural labor shortage.",
    ],
  },
  {
    slug: "fiscal",
    title: "財政の崖",
    titleEn: "Fiscal Cliff",
    description: "債務残高はGDP比235%で先進国最悪。利払いの増加と国債発行依存が常態化。",
    descriptionEn: "Public debt at 235% of GDP—the worst among advanced economies. Rising interest costs and chronic deficit financing.",
    stat: "235%",
    statLabel: "債務 GDP比",
    statLabelEn: "Debt / GDP",
    color: "#eab308",
    Diagram: JapanFiscalDebtDiagram,
    detail:
      "2025年度末の普通国債残高は**1,129兆円**に達し、GDP比は**約235%**と先進国で最悪の水準が続く。日本銀行の金利正常化に伴い国債の利払い費は急増しており、2025年度予算で利払い費は**27.9兆円**を計上した。一方、政府は2026年度にプライマリーバランス（基礎的財政収支）を対GDP比**0.5%**の黒字化する目標を掲げるが、防衛費倍増・少子化対策の歳出増が財政再建と相反する課題となっている。",
    detailEn:
      "Outstanding government bonds are projected to reach **¥1,129 trillion** by end-FY2025, keeping the debt-to-GDP ratio at approximately **235%**—the worst among advanced economies. As the Bank of Japan normalizes interest rates, debt-servicing costs have soared; the FY2025 budget allocated **¥27.9 trillion** for interest payments alone. The government targets a primary balance surplus of **0.5% of GDP** in FY2026, but rising outlays on defense and child-rearing policy are pulling in the opposite direction.",
    causes: [
      "バブル崩壊後の景気対策と税収不足：1990年代のバブル崩壊後、景気刺激のための公共投資拡大と減税が繰り返された。一方、少子化・デフレによる名目GDP成長の停滞で税収は伸び悩み、歳出と歳入のギャップが慢性化した。",
      "社会保障給付費の膨張：高齢化の進展により医療・介護・年金給付が毎年増加し続けている。2002年度以降、プライマリーバランスの黒字化は一度も達成されておらず、社会保障関係費の自然増が財政を圧迫している。",
      "防衛費倍増と新規政策の積み上げ：2022年の安保3文書改定で防衛費をGDP比**2%**（約11兆円）まで引き上げる方針が決定。さらに少子化対策3.6兆円・GX（グリーントランスフォーメーション）投資など新規歳出が次々と積み上がっている。",
    ],
    causesEn: [
      "Post-bubble stimulus and weak revenue: After the bubble burst in the 1990s, repeated fiscal stimulus packages and tax cuts expanded spending. Stagnant nominal GDP growth driven by deflation and a falling birth rate kept tax revenues flat, entrenching a chronic gap between revenues and expenditures.",
      "Expanding social security outlays: Aging demographics have driven year-on-year increases in medical, nursing care, and pension spending. Japan has not achieved a primary balance surplus even once since FY2002, with mandatory social security cost increases continuously pressuring the budget.",
      "Defense doubling and new policy commitments: The 2022 National Security Strategy set a path to raise defense spending to **2% of GDP** (roughly ¥11 trillion). On top of that, ¥3.6 trillion in child-rearing support and large GX investment commitments continue to stack up.",
    ],
    solutions: [
      "プライマリーバランス黒字化目標（2026年度）：歳出改革と税収増を組み合わせ、基礎的財政収支の黒字化を目指す。歳出面では社会保障の給付効率化、歳入面では防衛力強化のための増税（法人税・所得税・たばこ税）を段階的に導入する計画だ。",
      "歳出改革とデジタル行政の推進：行政のデジタル化（マイナンバー活用・給付の適正化）や独立行政法人の見直しにより、無駄な歳出を削減。骨太の方針2025でも「歳出の質の改善」が重点課題に位置づけられた。",
      "名目GDP成長による債務比率の改善：インフレと賃上げが続く現局面では、名目GDPが拡大すれば債務残高のGDP比は自然に低下する。2026年度は名目成長率**3%前後**が見込まれており、分母の拡大が財政再建の補助線となる。",
    ],
    solutionsEn: [
      "Primary balance surplus target (FY2026): The government aims to balance its primary budget by combining spending reform with revenue increases. On the expenditure side, social security efficiency gains are planned; on the revenue side, incremental tax hikes on corporate income, personal income, and tobacco are being phased in to fund defense buildup.",
      "Spending reform and digital government: Administrative digitization (expanded My Number ID use, payment accuracy improvements) and reform of independent agencies aim to cut wasteful spending. The FY2025 Basic Policy on Economic and Fiscal Management also designated 'improving expenditure quality' as a priority.",
      "Debt-ratio improvement via nominal GDP growth: With ongoing inflation and wage growth, expanding nominal GDP naturally lowers the debt-to-GDP ratio. Nominal growth of approximately **3%** is projected for FY2026, making the denominator effect an important lever for fiscal consolidation.",
    ],
  },
  {
    slug: "defense",
    title: "安全保障の激変",
    titleEn: "Security Shift",
    description: "防衛費は9兆円超へ。中国・北朝鮮・台湾有事を見据えた防衛力の抜本的強化。",
    descriptionEn: "Defense spending exceeds ¥9T. Sweeping force buildup amid China, North Korea, and Taiwan contingencies.",
    stat: "9兆円+",
    statLabel: "防衛費",
    statLabelEn: "Defense Budget",
    color: "#3b82f6",
    Diagram: JapanDefenseSpendingDiagram,
    detail:
      "2026年度の防衛関係費は過去最大の**9兆353億円**（前年度比**3.8%増**）に達した。2022年12月に改定された安保3文書でGDP比**2%**（約11兆円）への増額方針が決定され、2027年度までの5年間で総額**43兆円**の防衛力整備が進む。反撃能力（敵基地攻撃能力）保有の明記、無人防衛システム「SHIELD」構築（**2,773億円**計上）、スタンド・オフ・ミサイル整備（**9,733億円**）など、戦後安全保障政策の歴史的転換が進行中だ。",
    detailEn:
      "Japan's FY2026 defense budget hit a record **¥9.0353 trillion**, up **3.8%** year-on-year. The December 2022 National Security Strategy set a path to **2% of GDP** (~¥11 trillion), with a total of **¥43 trillion** allocated for defense capability development over five years through FY2027. Key shifts include the formal adoption of counterstrike (enemy-base attack) capability, the **¥277.3 billion** SHIELD unmanned defense network, and **¥973.3 billion** for stand-off missiles—marking a historic departure from postwar security policy.",
    causes: [
      "中国の軍事的台頭と台湾有事リスク：中国は国防費を毎年7%以上増やし続け、2023年度の国防費は約**1,554億ドル**。台湾海峡の緊張が高まる中、日本は台湾有事への巻き込まれリスクを現実的脅威として認識し、南西諸島防衛の強化を急ぐ。",
      "北朝鮮の核・ミサイル能力の高度化：北朝鮮はICBM（大陸間弾道ミサイル）や極超音速ミサイルの開発を加速し、2022年には過去最多の70発以上のミサイルを発射。日本の既存の迎撃能力では対処困難な脅威が増大している。",
      "ロシアのウクライナ侵攻による安全保障環境の悪化：2022年2月のロシア侵攻が「力による一方的な現状変更」の現実を示し、日本でも防衛費増額・反撃能力保有への世論が転換。NATO加盟国の多くがGDP比2%目標を達成する中、日本も足並みを揃えた。",
    ],
    causesEn: [
      "China's military rise and Taiwan contingency risk: China has continued to increase its defense budget by over 7% annually, reaching approximately **$155.4 billion** in 2023. As Taiwan Strait tensions rise, Japan views a Taiwan contingency as a real threat and is urgently reinforcing defense of its southwestern island chain.",
      "North Korea's advancing nuclear and missile capabilities: North Korea has accelerated development of ICBMs and hypersonic missiles, firing more than 70 missiles in 2022 alone—a record. These threats increasingly exceed the capacity of Japan's existing missile-intercept systems.",
      "Russia's invasion of Ukraine and deteriorating security environment: Russia's February 2022 invasion demonstrated the reality of 'unilateral change of the status quo by force,' shifting public and political opinion in Japan toward higher defense spending and counterstrike capability. Japan aligned with NATO members' 2% of GDP defense commitments.",
    ],
    solutions: [
      "反撃能力の整備と抑止力強化：スタンド・オフ・ミサイル（12式地対艦誘導弾能力向上型・トマホーク・JSM）を取得し、相手の脅威圏外から反撃できる能力を早期確立。2026年度予算で**9,733億円**を計上し、抑止力の実効性を高める。",
      "無人防衛システム「SHIELD」の構築：陸・海・空の各領域で10種類・数千機規模の無人機を整備する「SHIELD」計画に**2,773億円**を投入。有人機と無人機の連携によるスウォーム戦術で、中国・北朝鮮の脅威に非対称的に対処する。",
      "同志国との多国間安全保障協力：英国・イタリアとの次期戦闘機GCAP（2035年配備目標）共同開発、オーストラリア海軍の次期フリゲート艦建造への参画など、防衛装備品の共同開発・輸出を通じた安全保障協力を拡大。日米同盟の深化と合わせて抑止力を多層化する。",
    ],
    solutionsEn: [
      "Counterstrike capability development: Japan is acquiring stand-off missiles—including the upgraded Type-12 surface-to-ship missile, Tomahawk, and JSM—to establish the ability to strike threats from outside enemy-weapons range. The FY2026 budget allocates **¥973.3 billion** for this, enhancing deterrence credibility.",
      "SHIELD unmanned defense network: The SHIELD program (**¥277.3 billion**) will field thousands of unmanned assets across ten types for land, sea, and air domains. Coordinating manned and unmanned platforms for swarm tactics is designed to counter Chinese and North Korean threats asymmetrically.",
      "Multilateral security cooperation with like-minded nations: Expanding defense cooperation through co-development of the GCAP next-generation fighter with the UK and Italy (targeted 2035 deployment), participation in Australia's next frigate program, and defense-equipment exports. These efforts multilayer deterrence alongside the deepened Japan-US alliance.",
    ],
  },
  {
    slug: "labor",
    title: "労働力不足",
    titleEn: "Labor Shortage",
    description: "2030年には700万人の労働力不足が見込まれる。外国人材・自動化・賃上げ競争。",
    descriptionEn: "A projected 7 million worker shortfall by 2030. Foreign labor, automation, and wage competition intensify.",
    stat: "700万人",
    statLabel: "2030年不足",
    statLabelEn: "Shortfall by 2030",
    color: "#8b5cf6",
    Diagram: JapanLaborShortageDiagram,
    detail:
      "経済産業省の推計では2040年に日本全体で約**1,100万人**の労働力が不足し、特にAI・ロボット活用人材が**340万人**不足するとされる。一方、事務職は**440万人**の余剰が生じる見込みで、職種間のミスマッチが深刻化する。2025年10月時点の外国人労働者数は初めて**250万人**を突破したが、特定技能・育成就労制度を通じたさらなる受け入れ拡大と、AI・ロボットによる生産性向上が急務となっている。",
    detailEn:
      "METI projects a nationwide labor shortfall of approximately **11 million** by 2040, including a gap of **3.4 million** specifically in AI and robotics-related roles. Conversely, clerical workers are projected to be surplus by **4.4 million** due to automation, creating severe occupational mismatch. Foreign workers in Japan surpassed **2.5 million** for the first time as of October 2025, yet accelerating acceptance via the Specified Skilled Worker and Ikusei Shuro programs—alongside AI and robotics-driven productivity gains—remains urgent.",
    causes: [
      "少子高齢化による生産年齢人口の縮小：15〜64歳の生産年齢人口は2023年時点で約**7,395万人**で、2040年には約**6,213万人**まで減少する見込み。少子化が続く限り、国内の労働供給は構造的に縮小し続ける。",
      "高度成長期モデルの制度的残滓：年功序列・終身雇用・長時間労働を前提とした雇用慣行が女性・高齢者・外国人の活躍を阻んできた。女性就業率は上昇しているが、管理職比率（女性**13.4%**、2024年）は依然低い。",
      "職種・地域・スキルのミスマッチ：介護・建設・物流などの現場職は深刻な人手不足の一方、事務職はAIに代替されつつある。また、東京圏への人口集中で地方の労働力不足が先行して悪化している。",
    ],
    causesEn: [
      "Shrinking working-age population: Japan's 15-64 age group stood at roughly **73.95 million** in 2023 and is projected to fall to about **62.13 million** by 2040. As long as the birth rate remains low, domestic labor supply will continue to contract structurally.",
      "Institutional legacy of the high-growth era: Employment norms built around seniority pay, lifetime employment, and long working hours have historically hindered full participation by women, older workers, and foreign nationals. Female labor participation has risen, but female managerial share remains just **13.4%** (2024).",
      "Occupational, regional, and skill mismatch: Care, construction, and logistics face severe shortages while clerical roles are being displaced by AI. Compounding this, population concentration in the Tokyo area means rural labor markets are deteriorating first and fastest.",
    ],
    solutions: [
      "育成就労制度の新設（2027年度開始）：技能実習制度に代わる新在留資格「育成就労」の受け入れ枠を2028年度までに**43万人**とする方針。特定技能制度と合わせて計**123万人**まで外国人労働者を受け入れ可能とし、深刻な人手不足分野を補完する。",
      "AI・ロボット活用による生産性向上：経産省の推計では事務職で**440万人**の余剰が生じるが、それはAIで代替された人材をAI活用人材として再教育できれば**340万人**の不足を相殺できることを意味する。リスキリング支援に2025年度で約**6,000億円**が投じられた。",
      "女性・高齢者・外国人の活躍推進：男女間賃金格差の是正（2022年改正法で大企業に開示義務）、70歳までの就業機会確保、在留外国人の定住支援などを組み合わせて供給サイドを拡大。最低賃金は2025年に全国加重平均**1,055円**まで引き上げられ、賃上げによる就業インセンティブも強化された。",
    ],
    solutionsEn: [
      "New Ikusei Shuro (Skills Development) visa (from FY2027): The new status of residence, replacing the Trainee program, targets acceptance of **430,000** workers by FY2028. Combined with the Specified Skilled Worker track, up to **1.23 million** foreign workers can be accepted, plugging the most severe shortage sectors.",
      "AI and robotics for productivity: METI projections show a **4.4 million** clerical surplus from automation—but if those workers can be reskilled into AI-related roles, they could offset the projected shortfall of **3.4 million** AI/robotics personnel. Approximately **¥600 billion** was allocated to reskilling support in FY2025.",
      "Activating women, older workers, and foreign residents: Mandatory gender pay-gap disclosure (2022 reform for large companies), securing employment opportunities up to age 70, and settlement support for foreign residents expand the supply side. The nationwide weighted average minimum wage rose to **¥1,055/hour** in 2025, strengthening work incentives.",
    ],
  },
  {
    slug: "energy",
    title: "エネルギー脆弱性",
    titleEn: "Energy Vulnerability",
    description: "エネルギー自給率はわずか13%。中東・LNG依存と原発再稼働を巡る難題。",
    descriptionEn: "Energy self-sufficiency at just 13%. Heavy reliance on Middle East oil/LNG and unresolved nuclear restart debates.",
    stat: "13%",
    statLabel: "エネルギー自給率",
    statLabelEn: "Energy Self-Sufficiency",
    color: "#06b6d4",
    Diagram: null,
    detail:
      "2023年度の日本のエネルギー自給率は**15.2%**（再エネ・原発を含む）で、G7最低水準にある。発電電力量に占める再生可能エネルギーは**22.9%**（うち太陽光**9.8%**）まで増加したが、化石燃料依存は**68.6%**のまま続く。2025年2月に閣議決定した第7次エネルギー基本計画では2040年度の電源構成目標として再エネ**4〜5割**・原子力**2割程度**を掲げ、非化石電源の最大活用へ政策転換した。2025年時点で**14基**の原子炉が再稼働済みだ。",
    detailEn:
      "Japan's energy self-sufficiency rate stood at **15.2%** (including renewables and nuclear) in FY2023—the lowest among G7 nations. Renewables accounted for **22.9%** of electricity generation (solar **9.8%**), yet fossil fuels still make up **68.6%**. The Seventh Strategic Energy Plan (Cabinet decision, February 2025) sets a FY2040 power-mix target of renewables at **40–50%** and nuclear at **approximately 20%**, marking a policy shift toward maximizing non-fossil sources. As of 2025, **14 reactors** have restarted under post-Fukushima safety rules.",
    causes: [
      "福島第一原発事故（2011年）の後遺症：事故後に全50基の原子炉が停止し、エネルギー自給率は2010年の**20.3%**から2014年には**6.4%**まで急落。LNGなどの化石燃料輸入が急増し、貿易収支の悪化と電気料金の高騰を招いた。再稼働は進んでいるが、2025年時点で稼働は14基にとどまる。",
      "資源小国という構造的宿命：国産の化石燃料資源がほぼゼロで、石油の約**90%**を中東に依存。地政学リスク（ホルムズ海峡封鎖リスク等）や価格変動が直接、国内エネルギーコストと産業競争力に影響する。",
      "再エネ導入の系統制約と地域偏在：太陽光発電は急増しているが、送電網の容量不足・出力制御の多発・需要地と供給地の地理的ミスマッチが普及の足かせとなっている。洋上風力は世界的に拡大しているが、日本では漁業権・安全規制・地元合意が壁となり遅れている。",
    ],
    causesEn: [
      "Aftermath of the 2011 Fukushima disaster: All 50 reactors shut down after the accident, sending energy self-sufficiency plummeting from **20.3%** in 2010 to **6.4%** in 2014. Surging fossil-fuel imports—especially LNG—worsened the trade balance and pushed up electricity prices. Though restarts are ongoing, only 14 reactors are operating as of 2025.",
      "Structural resource scarcity: Japan has virtually no domestic fossil fuel resources, importing roughly **90%** of its oil from the Middle East. Geopolitical risks (e.g., Strait of Hormuz disruption) and price volatility directly translate into domestic energy costs and industrial competitiveness.",
      "Grid constraints and regional mismatch for renewables: Solar capacity has grown rapidly, but transmission bottlenecks, frequent output curtailment, and geographic mismatch between generation and demand areas are holding back further deployment. Offshore wind is expanding globally but faces delays in Japan due to fishing rights disputes, safety regulations, and local consent processes.",
    ],
    solutions: [
      "第7次エネルギー基本計画（2025年2月閣議決定）：2040年度の電源目標を再エネ**4〜5割**・原子力**2割程度**・火力**3〜4割**に設定。再エネと原子力の「最大限活用」を明記し、エネルギー安全保障と脱炭素を同時に追求する方針に転換した。2026年度からGX排出量取引制度（GX-ETS）が本格稼働する。",
      "原子力発電の再稼働推進と次世代炉開発：既設33基のうち14基が再稼働済み。2040年目標の「原子力2割」達成には既設炉のほぼ全基稼働が必要で、安全審査の迅速化を推進。同時に次世代革新炉（高温ガス炉・小型モジュール炉）の開発・実証を進め、将来の脱炭素基盤を整備する。",
      "洋上風力と送電網の大規模整備：2030年代半ばまでに洋上風力**1,000万kW**の導入を目指し、港湾整備・系統接続ルールの整備を加速。電力系統の広域化・デジタル化（スマートグリッド）を通じて再エネの出力変動を吸収し、安定供給と低コスト化を両立させる。",
    ],
    solutionsEn: [
      "Seventh Strategic Energy Plan (Cabinet decision, February 2025): Sets FY2040 power-mix targets of renewables at **40–50%**, nuclear at **approximately 20%**, and fossil fuels at **30–40%**. The plan explicitly calls for 'maximizing' both renewables and nuclear, pivoting to pursue energy security and decarbonization simultaneously. The GX Emissions Trading System (GX-ETS) enters full operation from FY2026.",
      "Nuclear restart and next-generation reactor development: 14 of 33 existing reactors have restarted. Reaching the '20% nuclear by 2040' target requires nearly all of them to operate, driving a push to streamline safety reviews. Simultaneously, development and demonstration of next-generation reactors (high-temperature gas reactors, small modular reactors) is underway to build a future low-carbon base.",
      "Large-scale offshore wind and grid expansion: Japan aims to install **10 GW** of offshore wind by the mid-2030s, accelerating port development and grid interconnection rules. Wide-area grid digitization (smart grids) will be used to absorb renewable output variability and achieve both stable supply and lower costs.",
    ],
  },
  {
    slug: "food",
    title: "食料安全保障",
    titleEn: "Food Security",
    description: "食料自給率はカロリーベースで38%。輸入依存・農業従事者の高齢化・耕作放棄地の拡大。",
    descriptionEn: "Calorie-based food self-sufficiency at 38%. Import dependence, aging farmers, and rising abandoned farmland.",
    stat: "38%",
    statLabel: "食料自給率",
    statLabelEn: "Food Self-Sufficiency",
    color: "#22c55e",
    Diagram: JapanSelfSufficiencyDiagram,
    detail:
      "2024年度の日本のカロリーベース食料自給率は**37%**で、先進国最低水準のまま推移している（政府目標**45%**）。生産額ベースでは**61%**だが、小麦・大豆・飼料穀物など主要穀物の多くを輸入に依存する構造は変わらない。基幹的農業従事者は20年で半減し、**70歳以上が63%**を占める深刻な高齢化が進行中。荒廃農地は2023年時点で約**28万ha**に拡大しており、農業の担い手不足と生産基盤の劣化が食料安全保障の根幹を揺るがしている。",
    detailEn:
      "Japan's calorie-based food self-sufficiency rate fell to **37%** in FY2024—the lowest among advanced nations against a government target of **45%**. In production-value terms the figure is **61%**, but structural dependence on imported wheat, soybeans, and feed grains persists. The number of core farming workers has halved in 20 years, with **63%** now aged 70 or older. Abandoned farmland reached approximately **280,000 hectares** by 2023, and the combined shortage of farming successors and degrading agricultural infrastructure is undermining the foundation of food security.",
    causes: [
      "農業従事者の急速な高齢化と後継者不足：基幹的農業従事者の平均年齢は**68.4歳**（2023年）で、70歳以上が63%を占める。高齢農家の引退後に農地を引き継ぐ後継者が見つからず、毎年数万ha規模で耕作放棄地が増加し続けている。",
      "国際市場への過度な依存と輸入リスク：小麦の自給率は約**16%**、大豆は約**7%**にすぎず、主な輸入先はアメリカ・カナダ・オーストラリアに集中。ロシアのウクライナ侵攻（2022年）以降、国際穀物価格の高騰が食料安全保障の脆弱性を鮮明にした。",
      "農業の収益性低下と新規参入障壁：農産物価格の低迷・生産コストの上昇（肥料・燃料）・農地取得の複雑さが、若い世代の農業参入を阻む。農家の平均農業所得は年間**約100万円**と低く、専業農業での生計が成り立ちにくい。",
    ],
    causesEn: [
      "Rapid aging of farmers and lack of successors: The average age of core farm workers is **68.4 years** (2023), with 63% aged 70 or older. Without successors, farmland abandoned after elderly farmers retire grows by tens of thousands of hectares each year.",
      "Excessive dependence on international markets: Wheat self-sufficiency is only about **16%** and soybeans about **7%**, with imports concentrated in the US, Canada, and Australia. Russia's 2022 invasion of Ukraine triggered sharp international grain price increases, exposing the fragility of Japan's food supply chains.",
      "Low farm profitability and barriers to entry: Depressed agricultural commodity prices, rising input costs (fertilizer, fuel), and complex land acquisition rules deter young people from entering farming. Average farm household income from agriculture is only about **¥1 million per year**, making full-time farming financially unviable for most.",
    ],
    solutions: [
      "農地集約と担い手育成（2026年度重点政策）：農地中間管理機構（農地バンク）を通じた農地の集積・集約を加速し、大規模経営体への転換を促進。2026年度には「農地の集約化・国産穀物強化・次世代農業人材育成」を重点政策に据え、新規就農者への資金支援（就農給付金）も拡充する。",
      "スマート農業・AI農業の普及：ドローンによる農薬散布・自動走行トラクター・AIを活用した生育管理システムの導入支援を強化。省力化により高齢農家でも農業継続が可能になるほか、少ない担い手で広大な農地をカバーできる体制を整備する。",
      "食料・農業・農村基本法の改正（2024年成立）：約25年ぶりの基本法改正により、「食料安全保障の確保」を法の基本理念として明記。輸入途絶リスクへの備えとして国内生産能力の維持・強化を義務付け、有事における食料増産計画の策定も法律上に位置づけた。",
    ],
    solutionsEn: [
      "Farmland consolidation and successor development (FY2026 priority): Accelerating farmland aggregation through the Agricultural Land Intermediary Management Organization (Farmland Bank) to promote large-scale operations. FY2026 key policies include 'farmland consolidation, domestic grain reinforcement, and next-generation farming talent development,' with expanded financial support grants for new farmers.",
      "Smart and AI-powered agriculture: Strengthening support for drone-based pesticide application, autonomous tractors, and AI crop-management systems. Mechanization allows elderly farmers to continue operating while enabling fewer workers to cover larger areas—both critical for sustaining output.",
      "Revised Food, Agriculture and Rural Areas Basic Act (enacted 2024): The first major revision in about 25 years formally enshrines 'ensuring food security' as a foundational principle. The law mandates maintaining and reinforcing domestic production capacity against supply-disruption risks and requires the government to formulate emergency food production plans.",
    ],
  },
];

export function generateStaticParams() {
  return challenges.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = challenges.find((ch) => ch.slug === slug);
  if (!c) return {};
  return {
    title: `${c.title} — 日本が抱える課題`,
    description: c.description,
    alternates: { canonical: `https://thebrief.info/politics/challenges/${slug}` },
    openGraph: {
      title: `${c.title} — 日本が抱える課題`,
      description: c.description,
      url: `https://thebrief.info/politics/challenges/${slug}`,
      siteName: "The Brief",
      locale: "ja_JP",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${c.title} — 日本が抱える課題`,
      description: c.description,
    },
  };
}

export default async function ChallengePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = challenges.find((ch) => ch.slug === slug);
  if (!c) notFound();

  const index = challenges.indexOf(c);
  const prev = challenges[index - 1] ?? null;
  const next = challenges[index + 1] ?? null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Politics", href: "/politics" },
          { name: "日本が抱える課題", href: "/politics/challenges" },
          { name: c.title, href: `/politics/challenges/${slug}` },
        ]}
      />

      <PageMasthead
        breadcrumbs={[
          { ja: "Home", en: "Home", href: "/" },
          { ja: "Politics", en: "Politics", href: "/politics" },
          { ja: "日本が抱える課題", en: "Japan's Challenges", href: "/politics/challenges" },
          { ja: c.title, en: c.titleEn },
        ]}
        eyebrow={`課題 ${index + 1} / 7`}
        eyebrowEn={`Challenge ${index + 1} of 7`}
        accent={c.color}
        title={<T ja={c.title} en={c.titleEn} />}
        titleEn={c.titleEn}
        description={c.description}
        descriptionEn={c.descriptionEn}
        meta={
          <span>
            <T ja="キーデータ：" en="Key figure: " />
            <span className="font-bold tabular-nums" style={{ color: c.color }}>
              {c.stat}
            </span>
            {"　"}
            <T ja={c.statLabel} en={c.statLabelEn} />
          </span>
        }
      />

      {c.Diagram ? (
        <c.Diagram />
      ) : (
        <div className="py-12 text-center text-foreground/40 text-sm border border-dashed border-brief-border rounded-xl">
          <T ja="図表は準備中です。" en="Diagrams coming soon." />
        </div>
      )}

      {/* 詳細・原因・解決策 */}
      <div className="mt-10 space-y-8">
        {/* 課題の詳細 */}
        <section>
          <h2 className="font-serif text-xl font-bold mb-3">
            <T ja="課題の詳細" en="Overview" />
          </h2>
          <p className="text-sm text-foreground/70 leading-relaxed">
            <T ja={c.detail} en={c.detailEn} />
          </p>
        </section>

        {/* なぜそうなったか */}
        <section>
          <h2 className="font-serif text-xl font-bold mb-3">
            <T ja="なぜ、こうなったのか" en="Root Causes" />
          </h2>
          <ul className="space-y-3">
            {c.causes.map((cause, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold mt-0.5" style={{ backgroundColor: `${c.color}20`, color: c.color }}>{i + 1}</span>
                <T ja={cause} en={c.causesEn[i]} />
              </li>
            ))}
          </ul>
        </section>

        {/* 解決策 */}
        <section>
          <h2 className="font-serif text-xl font-bold mb-3">
            <T ja="解決に向けた取り組み" en="Policy Responses" />
          </h2>
          <ul className="space-y-3">
            {c.solutions.map((sol, i) => (
              <li key={i} className="flex gap-3 text-sm text-foreground/70 leading-relaxed">
                <span className="flex-shrink-0 text-lg leading-none" style={{ color: c.color }}>→</span>
                <T ja={sol} en={c.solutionsEn[i]} />
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Prev / Next navigation */}
      <nav className="mt-16 pt-8 border-t border-brief-border grid grid-cols-2 gap-4">
        <div>
          {prev && (
            <a
              href={`/politics/challenges/${prev.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-brief-border hover:border-foreground/20 transition-all"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-foreground/40">
                <T ja="← 前の課題" en="← Previous" />
              </span>
              <span className="font-serif font-bold text-sm group-hover:text-brief-red transition-colors">
                <T ja={prev.title} en={prev.titleEn} />
              </span>
            </a>
          )}
        </div>
        <div>
          {next && (
            <a
              href={`/politics/challenges/${next.slug}`}
              className="group flex flex-col gap-1 p-4 rounded-xl border border-brief-border hover:border-foreground/20 transition-all text-right"
            >
              <span className="text-[10px] uppercase tracking-[2px] text-foreground/40">
                <T ja="次の課題 →" en="Next →" />
              </span>
              <span className="font-serif font-bold text-sm group-hover:text-brief-red transition-colors">
                <T ja={next.title} en={next.titleEn} />
              </span>
            </a>
          )}
        </div>
      </nav>
    </div>
  );
}
