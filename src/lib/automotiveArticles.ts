import type { IndustryArticle } from "./ict";

export const automotiveArticles: IndustryArticle[] = [
  {
    slug: "automotive-business-model-2026",
    title: "自動車産業のビジネスモデル — トヨタ・ホンダ・日産はどう稼いでいるか",
    titleEn: "How the Auto Industry Actually Makes Money",
    date: "2026-04-08",
    author: "",
    readTime: "13 min",
    tags: ["自動車", "トヨタ", "ホンダ", "日産", "EV", "サプライチェーン", "ビジネスモデル"],
    summary:
      "日本の自動車産業は、年間 **約60兆円** の出荷額と **約550万人** の関連雇用を抱える。トヨタ単独で売上 **45兆円**、営業利益 **5兆円超**。だがその「稼ぎ方」は意外と知られていない。本記事では完成車メーカーの **販売台数 → 売上 → 営業利益** までのフロー、為替感応度、地域別売上構成、サプライチェーンの階層、EVシフトでの収益構造の変化、そしてトヨタ・ホンダ・日産の **3社比較** までを整理する。",
    sections: [
      {
        heading: "自動車産業の規模 ― なぜ「日本の屋台骨」と呼ばれるのか",
        headingEn: "The Scale of Japan's Auto Industry",
        diagramId: "auto-overview",
        body: `日本の自動車産業の規模は、他のあらゆる産業と比べても突出している。

> この記事でわかること：自動車産業の規模、3社の収益構造、為替感応度、地域別売上、サプライチェーンの階層、EVシフトの影響。

【マクロの数字】
**■ 製造品出荷額**：約60兆円（製造業全体の約20%）
**■ 関連雇用**：約550万人（就業者の約8%）
**■ 輸出額**：約17兆円（日本の総輸出の約2割）
**■ 設備投資**：約1.5兆円/年
**■ R&D投資**：約3兆円/年（民間R&Dの約2割）

【「自動車1台」の波及効果】
完成車メーカーは氷山の一角。1台の自動車には **約3万点の部品** が使われ、その背後に **1次・2次・3次の下請けピラミッド** が広がる。

**■ Tier 1**（1次サプライヤー）：デンソー、アイシン、トヨタ紡織など
**■ Tier 2**（2次）：Tier1に部品を供給する中堅企業
**■ Tier 3**（3次）：素材・加工を担う中小企業

このピラミッドが日本のものづくりの厚みを生み、同時にEVシフトで最も影響を受ける部分でもある。

【「自動車立国」の意味】
自動車産業は単なる製造業ではない。**輸出・設備投資・R&D・雇用** のすべてで日本経済の柱となっている。だからこそ円相場・通商政策・脱炭素規制のすべてが自動車の業績を左右する。`,
      },
      {
        heading: "完成車メーカーの収益構造 ― トヨタの場合",
        headingEn: "How Toyota Actually Makes Money",
        diagramId: "auto-toyota-pl",
        body: `日本最大の自動車メーカー、トヨタ自動車の収益構造を分解する。

【トヨタの基本数字（2025年3月期）】
**■ 連結売上**：約45兆円
**■ 営業利益**：約5兆円（営業利益率約11%）
**■ 当期純利益**：約4.7兆円
**■ 販売台数**：約1,000万台（連結）
**■ 1台当たり売上**：約450万円
**■ 1台当たり営業利益**：約50万円

【セグメント別の利益】
トヨタの利益は **「自動車事業」と「金融事業」** に大別される。
**■ 自動車事業**：営業利益の約8割
**■ 金融事業**（自動車ローンとリース）：約1.5割
**■ その他（住宅、マリンなど）**：残り

意外と知られていないが、**金融事業はトヨタの大きな利益源**。販売金融子会社（TFS）が世界中で自動車ローンを提供しており、安定的な利益を生み出している。

【為替感応度】
トヨタの **対ドル為替感応度は約450億円/円**。1円の円安で営業利益が450億円増える。**1円の円安 = 営業利益 0.9% 増** という規模だ。

これはトヨタの輸出比率の高さを反映している。日本生産・北米輸出という構造が変わらない限り、トヨタの業績は **円相場の支配下** にある。`,
      },
      {
        heading: "ホンダ・日産との比較 ― 3社の違い",
        headingEn: "Toyota vs Honda vs Nissan",
        diagramId: "auto-three-companies",
        body: `日本の自動車3社には、それぞれ異なる「DNA」がある。

【トヨタ（Toyota）】
**■ 売上**：約45兆円 ／ 営業利益率 約11%
**■ 強み**：HV、生産効率（カイゼン）、販売金融、グローバルでの高い販売力
**■ 弱み**：EVへの移行が後発、北米依存
**■ DNA**：「ジャスト・イン・タイム」のものづくり。**保守的かつ全方位**

【ホンダ（Honda）】
**■ 売上**：約20兆円 ／ 営業利益率 約8%
**■ 強み**：二輪世界1位、F1、燃費、北米市場
**■ 弱み**：四輪は中規模、中国苦戦
**■ DNA**：技術志向のエンジニアカルチャー。**「やんちゃな本田技研」**

【日産（Nissan）】
**■ 売上**：約13兆円 ／ 営業利益率 約2-3%
**■ 強み**：EVリーフ（先駆者）、e-POWER、ルノー連合
**■ 弱み**：ガバナンス問題（ゴーン後）、財務体質、利益率
**■ DNA**：技術力はあるが経営難。**ホンダとの統合協議も話題に**

【3社の違いを一言で】
- **トヨタは「全方位の規模戦略」**
- **ホンダは「技術と二輪のグローバル」**
- **日産は「EV先駆者だが経営が課題」**

EVシフト・中国市場・ホンダ/日産統合論議など、業界の地殻変動が続くなかで、各社の戦略は岐路に立っている。`,
      },
      {
        heading: "地域別売上と為替感応度",
        headingEn: "Regional Sales and FX Sensitivity",
        diagramId: "auto-regions",
        body: `日本の自動車3社は、いずれも **「日本生産・海外販売」** の構造で利益を上げてきた。地域別に見ると、その依存度がよくわかる。

【トヨタの地域別売上（2025年3月期 概算）】
**■ 北米**：約35%（最大市場）
**■ 日本**：約20%
**■ アジア**：約15%
**■ 欧州**：約12%
**■ 中国**：約8%
**■ その他**：約10%

【北米依存の意味】
3社とも **北米（特に米国）が最大の利益源**。日本での販売は規模としては大きいが、**利益率はそれほど高くない**。米国でレクサス・ピックアップトラックなどの **高単価車を売る** ことが、日本企業の利益の源泉だ。

【中国市場の苦境】
かつて成長市場だった中国は、いまや日本車にとって **最も厳しい市場** になった。BYDをはじめとする中国EVメーカーの急成長で、日本車のシェアは急落。**ホンダと日産は中国合弁のリストラ** を進めている。

【為替の二段階の効果】
円安は2つの経路で利益を押し上げる。
**■ 直接効果**：日本から輸出する完成車・部品の円換算売上が増える
**■ 間接効果**：海外子会社の利益を円に換算したときに増える

このため **1円の円安 = 営業利益 数百億円増** という巨大な感応度になる。逆に円高局面では業績が一気に悪化する。`,
      },
      {
        heading: "サプライチェーンの階層と部品メーカー",
        headingEn: "The Supply Chain Pyramid",
        diagramId: "auto-supply-chain",
        body: `自動車1台には **約3万点の部品** が使われ、それを支える **3層のサプライヤーピラミッド** がある。

【Tier 1：1次サプライヤー】
完成車メーカーに **直接** 部品を納入する企業。多くは大手で、自社で設計・開発もできる。
**■ デンソー**：トヨタグループ最大のTier1。電装系、半導体、空調
**■ アイシン**：トランスミッション、ブレーキ
**■ トヨタ紡織**：内装、シート
**■ ジヤトコ**：CVT
**■ 矢崎総業**：ワイヤーハーネス（非上場）

【Tier 2：2次サプライヤー】
Tier1に部品を納入する中堅企業。専門技術を持ち、Tier1の指示に従って製造する。日本には **約1万社** あるとされる。

【Tier 3：3次サプライヤー】
素材加工・部品の機械加工を担う中小企業。**多くが家族経営**。地方の自動車関連クラスター（愛知・静岡・群馬・広島）の根幹を成す。

【ピラミッドの強みと脆さ】
**■ 強み**：JIT（ジャスト・イン・タイム）と摺り合わせ型のものづくり。トヨタの強さの源泉。
**■ 脆さ**：1社の問題が全体に波及する。半導体不足やコロナで明らかになった。

【EVシフトの衝撃】
EVは部品点数がガソリン車の **約3分の2** とされる。エンジン関連部品（約1万点）が消える。これは **Tier2・Tier3の中小企業に最も大きな影響** を与える。

事実、すでに **エンジン部品メーカーの再編** や廃業が始まっており、政府も「サプライチェーン転換支援」を進めている。`,
      },
      {
        heading: "EVシフトと収益構造の変化",
        headingEn: "How EVs Are Changing the Profit Structure",
        diagramId: "auto-ev-shift",
        body: `EVシフトは「環境対応」だけの話ではない。**自動車メーカーの収益構造そのものを変える** 大変動だ。

【EVの何が違うのか】
**■ 部品点数**：約3分の2（エンジン関連が消える）
**■ 製造工程**：シンプル化（機械加工が減る）
**■ 部品コスト**：バッテリーが車両原価の **30〜40%** を占める
**■ 開発費**：従来の電子制御に加え、ソフトウェアと電池技術が必須
**■ 販売後収益**：OTA（ソフト更新）でアップグレード販売が可能に

【「テスラショック」】
テスラは **販売価格の3割が利益** という時期があった。直販モデル、OTA、垂直統合により、**従来メーカーの2倍の利益率** を実現した。これが既存メーカーに「EVは儲かる」と思わせる契機となった。

【中国メーカーの脅威】
BYDをはじめとする中国EVメーカーは、**バッテリーの内製＋低価格＋高品質** で世界市場を席巻している。BYDは2024年にトヨタを抜いて **世界最大の自動車メーカー** になった（販売台数ベース）。

【日本メーカーの戦略】
**■ トヨタ**：HV（ハイブリッド）の継続強化＋全固体電池開発＋多品種戦略
**■ ホンダ**：EV専業ブランド「0シリーズ」、日産との連携模索
**■ 日産**：e-POWER（シリーズハイブリッド）＋EV量産

【3つのリスク】
1. **コスト**：バッテリーの内製化ができないと利益率が圧迫される
2. **速度**：中国メーカーの開発スピードに追いつけない
3. **インフラ**：充電インフラの整備が遅れれば需要が伸びない

【まとめ】
日本の自動車産業は、巨大で安定した「ドル箱」だが、**EV化と中国メーカーの台頭** で根底から揺らいでいる。トヨタ・ホンダ・日産はそれぞれ違う道を模索しているが、**この5年が「自動車立国・日本」の正念場** だと言える。`,
      },
    ],
  },
  {
    slug: "honda-nissan-one-year-after",
    title: "ホンダ・日産統合白紙から1年 — 「再統合」ではなく「事業ごとの提携」へ",
    titleEn: "One Year After the Honda–Nissan Merger Collapse — From Merger to Project-Based Alliance",
    date: "2026-04-08",
    author: "",
    readTime: "11 min",
    tags: ["ホンダ", "日産", "M&A", "EV", "北米", "Re:Nissan", "アライアンス"],
    summary:
      "2025年2月13日、ホンダと日産は経営統合協議を打ち切った。発表からわずか2か月、世界3位の自動車メーカー誕生という構想は、ホンダ側の「日産子会社化」案と日産取締役会12人中10人の反対であっけなく崩れた。あれから1年。日産はエスピノーサ新CEOの下「Re:Nissan」で固定費2,500億円削減・7工場統廃合に着手、ホンダも0シリーズで巻き返しを図る。両社は北米での車両・パワートレイン共同開発という、より地味で実務的な提携に静かに着地しつつある。",
    summaryEn:
      "On February 13, 2025, Honda and Nissan called off their merger talks just two months after announcing them. The plan to create the world's third-largest automaker collapsed when Honda proposed turning Nissan into a wholly-owned subsidiary and 10 of Nissan's 12 directors said no. One year later, Nissan is executing 'Re:Nissan' — ¥250B in fixed-cost cuts and the consolidation of seven plants — under new CEO Ivan Espinosa, while Honda pushes its '0 Series' EV line. The two are quietly converging on something far smaller and more practical: joint vehicle and powertrain development in North America.",
    sections: [
      {
        heading: "白紙までの90日 — 何が起きたのか",
        headingEn: "90 Days to Collapse — What Actually Happened",
        diagramId: "hn-timeline",
        body: `2024年12月23日、ホンダと日産は **経営統合に向けた協議の開始** を電撃発表した。両社に三菱自を加えた新しい持株会社を2026年8月に設立し、世界販売台数 **約800万台** で **トヨタ・フォルクスワーゲンに次ぐ世界3位** の自動車グループを目指す——という壮大な構想だった。

【発表時の前提】当初の前提は **「対等な経営統合」**。共同持株会社の下に両社がぶら下がり、株式の交換比率は両社時価総額に基づいて決める、という建て付けだった。2025年6月に最終契約、2026年8月に統合完了というスケジュールが示された。

【ホンダ側の方針転換】ところが2025年1月後半、ホンダ側が **「対等統合ではなく株式交換による日産の子会社化」** を提案。日産の業績悪化と北米での赤字を踏まえ、「対等」ではガバナンスが機能しないとの判断だった。

【日産取締役会の反発】日産の取締役会は **12人中10人が継続交渉に反対**。「対等を約束したはずだ」という不信感が一気に広がり、2025年 **2月13日** に両社は協議打ち切りを共同発表した。発表からわずか **52日** での白紙化だった。

> 後から振り返れば、両社の体力差・ガバナンス文化・本田技研創業以来の独立志向、そして三菱自の立ち位置——破談の伏線は最初から揃っていた。`,
        bodyEn: `On December 23, 2024, Honda and Nissan dropped a bombshell: the **start of formal merger talks**. With Mitsubishi Motors potentially joining, the plan was to set up a new joint holding company in August 2026 and create a roughly **8-million-vehicle** group — **the world's third-largest automaker after Toyota and Volkswagen**.

【The original premise】The whole idea rested on a **"merger of equals."** The two companies would sit under a common holding company, with the share-exchange ratio set by their respective market caps. A definitive agreement was targeted for June 2025 and closing for August 2026.

【Honda's pivot】Late in January 2025, Honda flipped the script and proposed **converting Nissan into a wholly-owned subsidiary via share exchange**, instead of an equal merger. With Nissan's results deteriorating and its US business losing money, Honda concluded that "equal" governance simply would not work.

【Nissan's board pushes back】Nissan's board met and **10 of 12 directors opposed continuing the talks**. The sense that "you promised equals" hardened, and on **February 13, 2025**, the two companies issued a joint statement calling everything off. The whole episode lasted **just 52 days**.

> In hindsight, the gap in financial strength, the clash of governance cultures, Honda's deeply ingrained streak of independence going back to its founding, and Mitsubishi's awkward position — all the ingredients for collapse were there from day one.`,
      },
      {
        heading: "1年後の日産 — Re:Nissan の数字",
        headingEn: "Nissan One Year On — Re:Nissan by the Numbers",
        diagramId: "renissan-numbers",
        body: `破談直後の2025年4月1日、**イバン・エスピノーサ** が日産のCEOに就任。5月には再生計画 **「Re:Nissan」** を発表し、抜本的なリストラに踏み込んだ。

【固定費削減目標】**2,500億円** の固定費削減を2026年度までに達成することを掲げる。発表時点では「実現可能性に懐疑的」との市場評価だったが、2025年12月時点で **既に1,600億円** を達成し、目標達成への自信を示している。

【7工場の統廃合】グローバルで **7拠点の閉鎖・統合** を10か月以内に決定。日本国内では追浜工場の生産整理、メキシコ・タイでの拠点見直しが進む。横浜本社ビルも **セール&リースバック** で売却した。

【FY2025業績見通し】2025年4-12月期の連結売上は **8.6兆円**、営業損益は **-101億円**。第3四半期は **+175億円** の営業黒字を達成し、通期見通しを上方修正した。それでも通期営業損失は **-600億円** 規模、純損失は **-6,500億円** が見込まれる（多くは非現金の会計処理）。

【それでも残る課題】売上は前年度比でも回復軌道にない。米国の関税環境、中国合弁の苦戦、EV戦略の遅れ——どれも単独での解決が難しく、**「外部パートナー」を排除しない経営姿勢** を維持している点が、ホンダとの再接近を可能にしている。`,
        bodyEn: `On April 1, 2025, just weeks after the merger collapsed, **Ivan Espinosa** took over as Nissan's CEO. In May he unveiled the recovery plan **"Re:Nissan"** and got to work on a deep restructuring.

【Fixed-cost target】Cut **¥250 billion** in fixed costs by fiscal 2026. Markets initially doubted it was doable, but by December 2025 Nissan had **already taken out ¥160 billion** and now expects to overshoot the target.

【Seven plants consolidated】Nissan announced the **closure or consolidation of seven sites** worldwide within 10 months. In Japan that means production reorganization at Oppama, plus footprint reviews in Mexico and Thailand. The Yokohama global HQ has been **sold and leased back**.

【FY2025 outlook】For April–December 2025, revenue was **¥8.6 trillion** and operating profit **–¥10.1 billion**. Q3 alone returned to a **+¥17.5 billion** operating profit, prompting Nissan to lift its full-year guidance. Even so, the full-year operating loss is still around **–¥60 billion** and the net loss roughly **–¥650 billion**, much of it non-cash accounting charges.

【What hasn't been fixed】Revenue is not yet back on a growth trajectory. US tariffs, the struggling China JV, the EV roadmap that fell behind schedule — none of these can be solved alone. By keeping the door explicitly open to **"external partners,"** Espinosa has left a path back toward Honda.`,
      },
      {
        heading: "1年後のホンダ — 0シリーズと中国の影",
        headingEn: "Honda One Year On — The 0 Series and the China Drag",
        diagramId: "honda-after",
        body: `ホンダは破談後、**自前路線の徹底** に舵を切った。2026年1月のCESで「0シリーズ」第1弾の市販モデルを発表、北米で2026年内に **サルーン** と **SUV** の2モデルを順次投入する。

【0シリーズの中身】専用のEVプラットフォームに、自社開発の **車両OS** と **AD/ADAS** を統合した「Software-Defined Vehicle」を標榜する。サルーン版の航続距離は **約480km**（EPAサイクル）、急速充電は10分で15%→80%を謳う。生産は **オハイオ州メアリーズビル工場** のEV専用ラインで2026年下半期から立ち上がる。

【中国市場の苦戦】一方、中国では2025年通年の販売が **前年比約30%減**。広汽ホンダ・東風ホンダの両合弁で **生産能力の削減と人員整理** が続いている。BYD・吉利・小鵬といった現地EV勢の攻勢で、日系の地位は崩れつつある。

【北米の構造課題】北米はホンダの稼ぎ頭だが、**HVシフトの加速** にラインナップが追いついていない。米国市場は2025〜2026年にかけてHV比率が急上昇し、トヨタが先行する形になっている。ホンダのHV比率引き上げと、EV「0シリーズ」の立ち上がり——この **2正面作戦** が、北米事業の死活線になっている。

> 0シリーズで「自前のEV」を立ち上げつつ、北米で日産とどこまで組むのか——破談1年後のホンダは、自前と協業のあいだで微妙なバランスを取り始めている。`,
        bodyEn: `Post-collapse, Honda doubled down on **going it alone**. At CES in January 2026, it unveiled the production version of the first **0 Series** car and committed to launching a **sedan** and an **SUV** in North America during 2026.

【Inside the 0 Series】Built on a dedicated EV platform with Honda's own **vehicle OS** and integrated AD/ADAS, the 0 Series is being pitched as a true "software-defined vehicle." The sedan claims around **480 km** of range on the EPA cycle and a 15→80% fast-charge in roughly 10 minutes. Production starts in the second half of 2026 on a dedicated EV line at the **Marysville plant in Ohio**.

【The China problem】Meanwhile, China sales fell about **30% year-on-year** in 2025. At both joint ventures — GAC Honda and Dongfeng Honda — Honda is **cutting capacity and reducing headcount**. With BYD, Geely and Xpeng on the offensive, the position of Japanese brands in China keeps eroding.

【The structural North America issue】North America is Honda's profit engine, but its lineup has not kept up with the **acceleration of hybrid demand**. Through 2025–2026, the US market has rapidly tilted toward HEVs — a segment Toyota leads. Honda is now fighting a **two-front war**: lift its hybrid mix and ramp the 0 Series EVs at the same time. North America's profitability hangs on getting both right.

> Honda is rolling out its own EVs while quietly figuring out how far to go with Nissan in North America. One year after the breakup, it is treading a careful line between independence and partnership.`,
      },
      {
        heading: "北米での車両・パワートレイン共同開発という静かな着地点",
        headingEn: "The Quiet Landing Zone — Joint Vehicle and Powertrain Development in North America",
        diagramId: "hn-na-cooperation",
        body: `2025年11月、エスピノーサCEOは **「米国でホンダと共同で車両やパワートレインの開発をできないか議論している」** と日経インタビューで明言した。経営統合という大きな構想は破綻したが、**事業ごとの提携** はむしろ前進している。

【3つのテーマ】議論の俎上に乗っているとされるのは、(1) **HV/PHEVパワートレインの共通化**、(2) **北米向けピックアップ・SUVの共同開発**、(3) **EV充電・ソフトウェア領域の連携**——の3つ。いずれも単独では投資負担が重く、共通化の経済合理性が高い領域だ。

【米国での事業環境】2025年から関税環境は厳しさを増しており、両社とも **米国生産・米国販売** の比率を上げる必要がある。日産にはメキシコの遊休能力、ホンダにはオハイオ・アラバマの生産網があり、この組み合わせには物理的な余地がある。

【三菱自の位置】2024年12月時点では三菱自も統合枠組みに名を連ねていたが、破談後は再び距離を取りつつある。北米での実需は限られ、ASEANに集中する三菱自と、北米偏重の日産・ホンダとは、提携の重心が異なる。

> 統合という「全部一緒にやる」発想ではなく、**「効く部分だけを選んで組む」** という現実解に、両社は静かに移っている。`,
        bodyEn: `In a November 2025 interview with Nikkei, CEO Espinosa went on record: **"We're discussing whether we can jointly develop vehicles and powertrains with Honda in the US."** The grand merger plan is dead — but **project-by-project cooperation** is, if anything, moving forward.

【Three threads】Three areas are reportedly on the table: (1) **shared HV/PHEV powertrains**, (2) **joint development of North America-bound pickups and SUVs**, and (3) **collaboration on EV charging and software**. All three are areas where doing it alone is expensive, and where pooling resources makes obvious economic sense.

【The US environment】Tariffs have only become more aggressive since 2025, forcing both companies to raise their **US-built / US-sold** ratio. Nissan has spare capacity in Mexico, Honda runs strong assembly footprints in Ohio and Alabama — the physical pieces fit together.

【Where Mitsubishi sits】Mitsubishi was nominally part of the original merger framework in December 2024, but has stepped back since the collapse. Its real-world demand is concentrated in ASEAN, not North America, so the center of gravity of any cooperation looks different from Nissan/Honda.

> Both sides are quietly migrating from "let's combine everything" to a far more pragmatic answer: **pick the pieces that actually work, and team up only on those.**`,
      },
      {
        heading: "「再統合」シナリオはあるか",
        headingEn: "Is a Second Merger Realistic?",
        diagramId: "hn-rematch-scenarios",
        body: `1年後の現時点で、市場とアナリストが描いている将来像は **3つのシナリオ** に整理できる。

【シナリオA / 再統合（確率: 低）】Re:Nissanが想定どおり進み、2026年度に営業黒字化が見えた段階で再交渉。今度は **対等統合に近い形** で、ホンダ側もガバナンスで譲歩する。前提は日産の自力回復と、両社経営陣の世代交代。

【シナリオB / 北米限定の合弁（確率: 中〜高）】北米事業のみを切り出した **JV（合弁会社）** を設立し、車両・パワートレインの共同開発と生産を統合。日米の本社機能はそれぞれ独立を保つ。実務的・低リスクで、現状もっとも蓋然性が高い。

【シナリオC / 別の組み合わせ（確率: 中）】日産がホンダ以外と組む可能性。具体的には **テスラ**（北米での製造提携）、**鴻海（Foxconn）**（EV受託生産）、あるいは **中国EVメーカー** との合弁が候補に挙がる。ただし米国の経済安全保障上の制約から、中国勢との提携は政治リスクが極めて高い。

【何が決定要因か】最終的にどのシナリオに落ち着くかは、(1) Re:Nissanの達成度、(2) ホンダ0シリーズの北米での売れ行き、(3) 米国の関税政策——の3変数に大きく依存する。**2026年度後半（2026年10月〜2027年3月）** が次の意思決定のヤマ場になる。

> 1年前、「世界3位の自動車グループ誕生」という見出しが躍った。1年後に分かったのは、**現実の企業統合は見出しでは動かない** ということだ。次の判断は、もっと地味で、もっと実務的なものになる。`,
        bodyEn: `One year on, the market and analysts have narrowed the future down to **three scenarios**.

【Scenario A / Re-merger (probability: low)】Re:Nissan delivers as planned, fiscal 2026 looks like it will return to operating profit, and the two sides come back to the table — this time on something **closer to a merger of equals**, with Honda offering real concessions on governance. It assumes Nissan recovers on its own and a generational change at the top of both companies.

【Scenario B / North America-only JV (probability: medium-to-high)】A **joint venture limited to North America**, integrating vehicle and powertrain development and production. HQ functions in Japan and the US stay independent. It is practical, low-risk, and currently the most likely outcome.

【Scenario C / Different partner (probability: medium)】Nissan ties up with someone other than Honda. The names floated are **Tesla** (North American manufacturing), **Foxconn** (EV contract manufacturing), or even a **Chinese EV maker**. A China deal carries enormous US economic-security risk, however.

【What decides it】Which scenario actually plays out depends heavily on (1) how much of Re:Nissan gets delivered, (2) how Honda's 0 Series sells in North America, and (3) US tariff policy. The next decision window is **the second half of fiscal 2026 (October 2026 to March 2027)**.

> A year ago the headline was "World's #3 automaker is born." A year later, the real lesson is that **corporate combinations don't move at the speed of headlines**. The next call will be quieter, smaller, and a lot more practical.`,
      },
    ],
  },
  {
    slug: "chinese-evs-europe-2026",
    title: "中国EV勢の欧州進出 — 関税の壁を越え、市場の10%を獲った1年",
    titleEn: "Chinese EVs in Europe — How They Cleared the Tariff Wall and Took 10% of the Market",
    date: "2026-04-08",
    author: "",
    readTime: "10 min",
    tags: ["BYD", "中国EV", "欧州", "関税", "PHEV", "ハンガリー", "EU"],
    summary:
      "2025年12月、欧州で売れた新車の **10台に1台** が中国ブランドになった。Audi・Renaultを上回る数字だ。2024年10月のEU相殺関税（BYD 17.0%、Geely 18.8%、SAIC 35.3%）にもかかわらず、中国メーカーは1年で **市場シェアを倍増**。鍵は (1) **PHEVへの転換**（関税対象外）、(2) **ハンガリー・スペインの現地工場**、(3) EUとの **最低価格制度** 交渉だ。本記事は、関税を「迂回する方法」を見つけてしまった中国EVが、欧州市場をどう変えたかを整理する。",
    summaryEn:
      "In December 2025, **one in ten new cars sold in Europe** was a Chinese brand — outselling Audi and Renault. Despite the EU's October 2024 countervailing duties (17.0% on BYD, 18.8% on Geely, 35.3% on SAIC), Chinese makers have **doubled their European market share** in one year. The keys: (1) **a pivot to PHEVs** (not covered by the tariffs), (2) **local plants in Hungary and Spain**, and (3) negotiations over an **EU minimum-price mechanism**. This article maps how Chinese EVs found a way around the tariff wall and what it has done to the European market.",
    sections: [
      {
        heading: "シェア倍増 — 2025年の数字",
        headingEn: "Market Share Doubled — The 2025 Numbers",
        diagramId: "cn-eu-share",
        body: `欧州自動車市場における中国ブランドの存在感は、2025年の1年間で劇的に変わった。Schmidt Automotive Researchなどの集計によれば、**EU+EFTA+UK** での中国ブランド乗用車の販売シェアは2024年通年の **約5%** から、2025年12月には **10%** に到達した。

【販売台数の絶対値】2025年通年の中国ブランド販売台数は **約150万台**。前年同期比で **+90%** 超の伸びを記録した。BYD、Geely（含むVolvo・Polestar・Lynk&Co）、SAIC（MG）、Chery、Leapmotorの5社で全体の約8割を占める。

【セグメント別】最も伸びたのは **Cセグメント**（コンパクト〜ミドルクラス）。BYD Atto 3、MG4、Geely EX5あたりが中核。**価格帯は €30,000〜€45,000** が中心で、これは欧州メーカーのEVより約2割安い水準だ。

【国別の浸透】最大市場はスペインとイギリス、次いでドイツ・イタリア。**フランスは関税ゼロ車種（PHEV）でしか入りにくい** 構造だが、それでも前年比で大きく伸びた。

> Audi・Renault・Stellantis（PSA系ブランド）を **販売台数で上回った** という事実が、欧州メーカーの危機感を一気に高めている。`,
        bodyEn: `In a single year, the presence of Chinese brands in Europe's car market has changed fundamentally. According to Schmidt Automotive Research and other trackers, the share of Chinese-brand passenger cars across **EU + EFTA + UK** went from roughly **5%** in 2024 to **10%** in December 2025.

【Absolute volume】Chinese-brand sales in 2025 came to roughly **1.5 million units**, more than **90% above** the prior year. BYD, Geely (including Volvo, Polestar and Lynk & Co), SAIC (MG), Chery and Leapmotor together account for around 80% of that.

【By segment】The biggest gains were in the **C segment** (compact to mid-size). The core models are the BYD Atto 3, MG4 and Geely EX5. **Most pricing sits in the €30,000–€45,000 range**, about 20% below comparable European EVs.

【By country】The biggest markets are Spain and the UK, followed by Germany and Italy. **France is structurally hard to enter except via tariff-free models (PHEVs)**, but even there sales jumped year-on-year.

> The headline that lands hardest in European boardrooms: Chinese brands **outsold Audi, Renault and Stellantis (PSA) by unit volume** in late 2025.`,
      },
      {
        heading: "関税の壁とPHEVへの転換",
        headingEn: "The Tariff Wall and the Pivot to PHEVs",
        diagramId: "cn-eu-tariffs",
        body: `EUは **2024年10月** に中国製BEVに対する相殺関税を発動した。当時の根拠は「中国政府の補助金で不当な競争優位を得ている」というもの。それから1年半が経過しても、関税の構造は基本的に維持されている。

【関税率の内訳】BYD: **+17.0%**、Geely: **+18.8%**、SAIC: **+35.3%**。これに既存の **乗用車一律10%関税** が上乗せされる。BYDで合計27%、SAIC（MG）で45.3%。一見すると参入障壁として十分に見える。

【対象：BEV のみ】重要なのは、この関税が **BEV（純電気自動車）** だけを対象にしている点だ。PHEV（プラグインハイブリッド）と通常HVは **対象外**。中国メーカーはここに気づき、2025年を通じて **PHEVの欧州輸出を一気に拡大** した。

【PHEV輸出の伸び】2024年8月から2025年8月までの1年間で、中国製PHEVの欧州輸出は **約14倍** に増加した。BYDの "Seal U DM-i" や Chery の "Tiggo 7 PHEV" がベストセラー。**「BEVが売れなければPHEVで売る」** という戦略転換が完璧に機能した。

【結果】関税で守られたはずの欧州BEV市場では、確かに中国製BEVの伸びは鈍化した。だが、**PHEVを含めた「電動化全体」での中国シェアはむしろ拡大**。EUの関税は意図した効果を出せていない。`,
        bodyEn: `In **October 2024**, the EU imposed countervailing duties on Chinese-built BEVs, on the grounds that Chinese state subsidies were creating an unfair competitive advantage. A year and a half later, the structure is largely unchanged.

【The tariff stack】BYD: **+17.0%**, Geely: **+18.8%**, SAIC: **+35.3%**. On top of that sits the EU's **standard 10% passenger-car duty**. That brings BYD to a combined 27% and SAIC (MG) to 45.3%. On paper, more than enough to keep them out.

【Crucially: BEVs only】The key detail is that the duties cover **only BEVs**. PHEVs and conventional hybrids are **exempt**. Chinese makers spotted this immediately and spent 2025 **dramatically scaling up PHEV exports** to Europe.

【The PHEV surge】Between August 2024 and August 2025, Chinese PHEV exports to Europe rose **roughly 14x**. The BYD Seal U DM-i and Chery Tiggo 7 PHEV became bestsellers. **"If BEVs are blocked, sell PHEVs instead"** — the pivot worked perfectly.

【Result】Within the BEV category that the tariffs were designed to protect, Chinese growth did slow. But across **electrified vehicles overall, including PHEVs, the Chinese share actually expanded**. The EU's tariffs are not delivering what they were designed to deliver.`,
      },
      {
        heading: "ハンガリー・スペイン — 現地工場という回避策",
        headingEn: "Hungary and Spain — The Local-Production Workaround",
        diagramId: "cn-eu-factories",
        body: `関税の本質的な迂回路は **「欧州域内で生産する」** ことだ。中国メーカーはこの1〜2年で、EU加盟国に **複数の組立工場** を立ち上げつつある。

【BYDのハンガリー工場】最大規模はBYDのハンガリー・セゲド工場。2025年下半期に試作生産を開始し、**2026年から量産** を立ち上げる。年産能力は最終的に **20万台** を想定。ローンチモデルは小型ハッチバック **Dolphin Surf**（中国名 Seagull）で、欧州での販売価格は **€20,000〜€34,000** の小型BEVだ。

【ChineseメーカーのEU南欧攻略】Chery はスペインのバルセロナ近郊で、 EV Motorsの旧日産工場を引き取って組立を開始した。Leapmotor は Stellantis との合弁を通じてポーランドで小型EVの欧州向け生産を進める。**「中国本社 + 欧州組立」** の二層構造が一般化しつつある。

【EU加盟国の誘致合戦】ハンガリー、スペイン、ポーランドなどの **東欧・南欧の中所得国** は、雇用創出と税収を狙って中国メーカーを積極的に誘致している。一方、ドイツ・フランスは「欧州の自動車産業の空洞化」を理由に、EUレベルでの **追加規制** を求めている。

【欧州内のねじれ】この構図は欧州内で **東西・南北の利害対立** を生んでいる。EU全体としては関税で守りたいが、加盟国レベルでは投資と雇用を欲しがる——という典型的な集合行為のジレンマだ。`,
        bodyEn: `The fundamental way around tariffs is to **produce inside the EU**. Over the last 12–24 months, Chinese makers have been spinning up **multiple assembly plants** across EU member states.

【BYD's Hungary plant】The largest is BYD's Szeged plant in Hungary. Pilot production started in late 2025, with **mass production from 2026**. Eventual capacity is around **200,000 vehicles a year**. The launch model is the small **Dolphin Surf** (called Seagull in China), priced at **€20,000–€34,000** in Europe.

【The southern European push】Chery has taken over a former Nissan plant near Barcelona via EV Motors and started assembly. Leapmotor, through its JV with Stellantis, is scaling small-EV production for Europe out of Poland. A two-tier **"China HQ + EU assembly"** model is becoming the norm.

【Member states compete to attract them】Mid-income economies in **Eastern and Southern Europe** — Hungary, Spain, Poland — are aggressively courting Chinese investment for the jobs and tax base. Germany and France, by contrast, see the same trend as the **hollowing-out of Europe's auto industry** and are pressing the EU for **additional restrictions**.

【The internal split】This sets up a classic **east–west, north–south** tension inside Europe. At the EU level, the bloc wants to protect itself with tariffs; at the member-state level, the same governments want the investment and jobs. A textbook collective-action problem.`,
      },
      {
        heading: "最低価格制度 — 関税の代替案",
        headingEn: "Minimum-Price Mechanism — A Tariff Replacement",
        diagramId: "cn-eu-minprice",
        body: `EUと中国は2025年から、**「最低価格制度（minimum price commitment）」** をめぐる交渉を続けている。2026年1月、ブルームバーグは「EUが関税を最低価格制度に置き換える方向で検討している」と報じた。

【最低価格制度とは】輸入される中国製EVに対し、**メーカーごとに合意した最低販売価格** を設定し、これを下回る価格で売られた場合に追加課税する仕組み。形式は反ダンピング規制の発展型だが、関税のような一律徴収ではなく **個別合意ベース** になる点が特徴だ。

【中国側のメリット】中国メーカーから見ると、関税よりも **販売価格をコントロールできる** ぶん、ブランドの「安売り感」を回避できる。BYDのような上位ブランドにとっては、むしろ歓迎する向きもある。

【欧州メーカーの懸念】一方、欧州メーカーから見ると **「価格の床」が中国EVに有利な水準** で設定される危険があり、自社EVの価格競争力がさらに削がれる懸念がある。Stellantis・Renaultは交渉プロセスに強く介入している。

【交渉の現状】2026年4月時点で、最低価格制度が実装される時期は確定していない。だが、関税が望んだ効果を出していない以上、**何らかの代替制度に移行する可能性は高まっている**。2026年後半が実装の山場と見られている。

> 最終的に「中国EVを欧州市場から排除する」ことは、もはや現実的な選択肢ではない。論点は、**「どう共存させるか」** の制度設計に移っている。`,
        bodyEn: `Since 2025, the EU and China have been negotiating a **minimum-price commitment**. In January 2026, Bloomberg reported that the EU was considering replacing its tariffs with a minimum-price mechanism altogether.

【How it works】Rather than a flat tariff, each importer agrees to a **minimum sales price for its vehicles**, with extra duties triggered if cars are sold below that floor. Structurally it is an evolution of anti-dumping rules — but instead of being uniform, the floors are **negotiated company by company**.

【Why it appeals to China】Chinese makers gain because they can **control their own pricing** rather than absorbing a flat tariff, which lets premium-positioned brands like BYD avoid the "discount-bin" image. Some Chinese OEMs actively prefer this regime.

【European concerns】European OEMs worry that the **floor will be set at a level that still favors Chinese EVs**, eroding their own price competitiveness even further. Stellantis and Renault have been pushing hard inside the negotiation.

【Where things stand】As of April 2026, no implementation date has been set. But with tariffs clearly failing to deliver the intended effect, **a switch to some form of replacement regime is increasingly likely**. The second half of 2026 looks like the implementation window.

> "Keep Chinese EVs out of Europe" is no longer a realistic option. The debate has shifted to **how to live with them** — and what set of rules will govern that coexistence.`,
      },
      {
        heading: "欧州メーカーへの衝撃と日本勢への含意",
        headingEn: "Shockwaves Through European OEMs — and What It Means for Japan",
        diagramId: "cn-eu-impact",
        body: `中国EVの欧州攻略は、欧州OEMに **二つの衝撃** を与えている。

【衝撃1 / 価格構造の再定義】中国メーカーの参入により、欧州市場の **「EVの適正価格」が€10,000〜€15,000下方修正** された。€40,000前後を中心に価格が形成されていた欧州EVは、€25,000〜€35,000のレンジへの **値下げ圧力** に晒されている。Stellantis・Renault・VWはいずれも2025〜2026年にEV値下げを実施した。

【衝撃2 / ソフトウェアと開発速度】中国メーカーは新車の **モデルチェンジサイクルが2〜3年** と、欧州メーカーの **5〜7年** に対して圧倒的に短い。BYDは年間で複数の新モデルを投入し、ソフトウェアもOTAで頻繁にアップデートする。**「欧州式の長いライフサイクル」** が市場の常識から外れつつある。

【欧州メーカーの対応】VWはXpengと、Stellantisは零跑（Leapmotor）と提携して中国の開発ノウハウを取り込もうとしている。Renaultは Geely との協業でハイブリッドパワートレインを共同開発する。**「対立」から「学習と提携」へ** の転換が始まっている。

【日本勢への含意】欧州市場での日本メーカーのシェアは小さいが、中国EVの欧州攻略は **2027年以降の北米市場** で同じことが起きる予兆として読むべきだ。米国の関税環境は厳しいが、**メキシコ経由の生産** という回避路は同じ構造で存在する。トヨタ・ホンダ・日産にとって、欧州の事例は **「2年後の自分たち」** の予習材料になる。

> 関税は時間を稼ぐ。だがその時間で **競争力を取り戻せなければ、関税は単なる延命措置に終わる** ——欧州の1年が示した教訓だ。`,
        bodyEn: `The Chinese push into Europe has hit European OEMs with **two distinct shocks**.

【Shock 1 / A reset of price expectations】Chinese entrants have **knocked the "right price" of an EV in Europe down by €10,000–€15,000**. European EVs that used to cluster around €40,000 are now under **discount pressure** toward the €25,000–€35,000 range. Stellantis, Renault and VW all cut EV prices through 2025–2026.

【Shock 2 / Software and development speed】Chinese makers refresh their cars every **2–3 years**, against European cycles of **5–7 years**. BYD launches multiple new models a year and updates software via OTA constantly. The **"long European product life-cycle"** is no longer the market default.

【How Europeans are responding】VW has tied up with Xpeng, Stellantis with Leapmotor, both to absorb Chinese development know-how. Renault is co-developing a hybrid powertrain with Geely. The mood is shifting from **"confrontation" to "learning and partnership."**

【What this means for Japan】Japanese makers have small share in Europe today, but they should read the Chinese push as **a preview of what is coming to the North American market from 2027 onward**. US tariffs are harsh, but **production via Mexico** offers exactly the same kind of workaround. For Toyota, Honda and Nissan, Europe's last 12 months are a dress rehearsal for **"themselves two years from now."**

> Tariffs buy time. But if you can't **rebuild competitiveness within that window, tariffs become nothing more than life-support** — and that is the lesson of one year in Europe.`,
      },
    ],
  },
  {
    slug: "solid-state-battery-race-2026",
    title: "全固体電池量産レース 2026 — トヨタ・日産・サムスンの現在地",
    titleEn: "The Solid-State Battery Race in 2026 — Where Toyota, Nissan and Samsung Stand",
    date: "2026-04-08",
    author: "",
    readTime: "11 min",
    tags: ["全固体電池", "EV", "トヨタ", "日産", "出光興産", "Samsung SDI", "バッテリー"],
    summary:
      "全固体電池は **「EVのゲームチェンジャー」** と呼ばれて長い。2026年、ようやく『約束』が『試作』に変わりつつある。トヨタは出光と組んで2027〜2028年の市場投入を目標に、年産 **9 GWh** のロードマップを公表。日産は2025年1月から横浜でパイロットラインを稼働し、2028年度の車両搭載を狙う。Samsung SDI は2027年の小規模量産を目指し、米中勢も急追する。本記事は、**「いつ・誰が・どの方式で」** 全固体を量産するのかを、2026年4月時点の正確な数字で整理する。",
    summaryEn:
      "Solid-state batteries have been called the **EV game-changer** for years. In 2026, the promise is finally turning into pilot production. Toyota, working with Idemitsu, is targeting market entry in 2027–2028 with a roadmap calling for **9 GWh** of annual capacity. Nissan has been running a pilot line in Yokohama since January 2025 and is aiming for vehicle integration in fiscal 2028. Samsung SDI targets small-scale mass production in 2027, with US and Chinese players racing hard. This article maps out **who, when, and with what chemistry** is actually going to build solid-state batteries — using the numbers as of April 2026.",
    sections: [
      {
        heading: "なぜ全固体が決定打なのか",
        headingEn: "Why Solid-State Is the Holy Grail",
        diagramId: "ssb-why",
        body: `現行のリチウムイオン電池は、正極と負極の間に **液体電解質** を満たした構造をしている。この液体を **固体電解質** に置き換えたものが全固体電池だ。理屈上の利点は3つある。

【利点1 / エネルギー密度】固体電解質は液体より化学的に安定なため、高電圧・高容量の正極材を使える。理論上のエネルギー密度は **400〜500 Wh/kg**。現行の最良のNCMリチウムイオンが約 **280 Wh/kg** であるのと比べて **約2倍**。同じバッテリー重量で航続距離が2倍、または同じ航続距離でバッテリー重量が半分になる計算だ。

【利点2 / 安全性】液体電解質は可燃性の有機溶媒を含み、過充電や物理破損で **発火・爆発のリスク** がある。固体電解質はこの可燃性がないか極めて低く、熱暴走のリスクが構造的に下がる。

【利点3 / 急速充電】固体電解質の中でもイオン伝導度が高い材料を使えば、**10分で80%充電** が現実的なターゲットになる。現行の急速充電（350kW級）でも30分かかるのと比べると、ガソリン給油に近い体験になる。

> ただし、これらは **すべて「うまく作れれば」の話**。実際の量産では、固体電解質の成形性、電極との界面抵抗、製造コスト——課題が山のようにある。2026年は、その「壁」をようやく一部突破しつつある年だ。`,
        bodyEn: `Today's lithium-ion battery sandwiches a **liquid electrolyte** between positive and negative electrodes. A solid-state battery replaces that liquid with a **solid electrolyte**. In theory, this delivers three big wins.

【Win 1 / Energy density】Solid electrolytes are chemically more stable than liquids, allowing higher-voltage, higher-capacity cathode materials. The theoretical energy density is **400–500 Wh/kg** — roughly **double** today's best NCM lithium-ion at about **280 Wh/kg**. That means twice the range at the same pack weight, or the same range at half the weight.

【Win 2 / Safety】Liquid electrolytes are flammable organic solvents that can **catch fire or explode** under overcharge or physical damage. Solid electrolytes either eliminate or dramatically reduce this flammability, structurally lowering the risk of thermal runaway.

【Win 3 / Fast charging】With the right ion-conducting solid electrolyte, **10 minutes to 80%** is a credible target. Today's 350 kW DC fast-charging still needs roughly 30 minutes — solid-state would bring EV charging closer to a gasoline fill-up.

> All of these gains assume **you can actually manufacture them**. In real production, solid-electrolyte formability, the resistive interface between solid and electrode, and cost — there is a mountain of problems. 2026 is the year companies are starting to break through the first part of that wall.`,
      },
      {
        heading: "トヨタ × 出光 — 9 GWh ロードマップ",
        headingEn: "Toyota × Idemitsu — The 9 GWh Roadmap",
        diagramId: "ssb-toyota",
        body: `日本勢で最も早期に **「2027〜2028年に量産開始」** を公表しているのがトヨタだ。鍵を握るのが、2023年に発表された **出光興産との協業** である。

【出光の役割】出光は元々は石油元売りだが、副産物の硫黄から **硫化物系固体電解質** を製造する独自技術を持っている。両社の協業は、出光が固体電解質を供給し、トヨタが電池セル・パック・車載統合を担う分業構造になっている。

【2026年の進捗】出光は **2026年1月に大型パイロット装置の建設を開始**。千葉県内の事業所で、量産を見据えた装置とライン構成の検証を進めている。トヨタ側もパイロットラインでセル試作を継続中で、自動車技術会・電池技術会での発表によれば **エネルギー密度は400 Wh/kg級** に到達しつつある。

【生産規模目標】3件の計画を合わせた最終的な生産規模は **年間9 GWh** 規模を想定。2030年の本格量産を目標としている。9 GWhは「全固体専用」としては大規模だが、トヨタ全体のEVバッテリー需要（年100 GWh規模）から見ると **約1割** にとどまる。あくまで **高級・スポーツ車向けの上位SKU** からの投入になる見通しだ。

【トヨタの戦略意図】注目すべきは、トヨタが「全固体オンリー」ではなく **「全固体＋液系LFP/NCM＋HV」のマルチ電池戦略** を取っていること。固体は航続600km超のフラッグシップに、LFPは普及帯に、HVは内燃機関を残す市場に——という棲み分けだ。

> 全固体を「打ち出の小槌」と見なさず、**製品ポートフォリオの一部** に位置づけているのが、トヨタの現実主義の表れだ。`,
        bodyEn: `Among Japanese makers, Toyota has been the most explicit about a **2027–2028 mass-production target**. The key piece is its collaboration with **Idemitsu**, announced in 2023.

【Idemitsu's role】Idemitsu is best known as a petroleum company, but it has its own technology for producing **sulfide-based solid electrolytes** from sulfur, a refining by-product. Idemitsu supplies the solid electrolyte; Toyota handles cell, pack and vehicle integration.

【Where things are in 2026】Idemitsu **broke ground on a large pilot facility in January 2026** at a site in Chiba prefecture, validating both equipment and line configurations for mass production. Toyota has continued cell prototyping on its own pilot line, and presentations at the JSAE and battery societies suggest **energy density is approaching the 400 Wh/kg class**.

【Production scale】Across three planned projects, Toyota envisions a final scale of around **9 GWh per year**, with full mass production targeted for 2030. 9 GWh is large for "solid-state only," but represents only about **10%** of Toyota's overall EV battery demand (on the order of 100 GWh per year). The first applications will be **high-end, sports-oriented top SKUs** with ranges above 600 km.

【Strategic intent】The thing to notice is that Toyota is not betting on solid-state alone. It is running a **multi-battery strategy** — solid-state plus liquid LFP and NCM plus HEVs — with each chemistry mapped to a different segment.

> By treating solid-state as **part of a portfolio**, not a magic wand, Toyota is showing its characteristic pragmatism.`,
      },
      {
        heading: "日産 — 横浜パイロットラインと2028年搭載",
        headingEn: "Nissan — The Yokohama Pilot Line and the 2028 Vehicle Target",
        diagramId: "ssb-nissan",
        body: `日産は **2025年1月** に横浜事業所内で全固体電池のパイロット生産ラインを稼働開始した。ラインの試運転は順調に進み、2028年度の **車両搭載** を目標として開発を続けている。

【日産の方式】日産も **硫化物系固体電解質** を採用。トヨタと同じ系統だが、独自の電極設計と製造プロセスを開発している。エネルギー密度の目標値は約 **350 Wh/kg**、急速充電は **15分で15→80%** を目標とする。

【ラインの位置づけ】横浜のパイロットラインは年産規模としては小さい（およそ1 GWh以下）が、**「製造プロセスを実証する」** ための位置づけだ。本格量産ラインは別途、福岡や追浜のいずれかに建設する計画とされる。

【車両側の準備】2028年度の車両搭載は、当初は **e-POWER（シリーズ式HV）の高性能モデル** または **小型EV** での展開が有力視されている。エスピノーサCEOは2025年のインタビューで「全固体は日産の技術差別化の核になる」と発言している。

【課題】ただし、Re:Nissan のリストラで研究開発予算は厳しい状況にある。**2026年度の固定費削減目標2,500億円** には、R&Dへのメスも含まれており、全固体の量産投資のスケジュールが後ろ倒しになるリスクは残る。

> 日産にとって全固体は、**「ブランドを技術で取り戻す」最後のカード** に近い。だからこそ、リストラの中でも開発を止められない。`,
        bodyEn: `Nissan started operating a solid-state battery pilot line at its Yokohama site in **January 2025**. Line commissioning has gone smoothly, and the company is still aiming for **vehicle integration in fiscal 2028**.

【Chemistry choice】Nissan has also gone with **sulfide-based solid electrolytes** — the same family as Toyota — but with its own electrode design and production process. The targets are around **350 Wh/kg** of energy density and a **15→80% fast-charge in 15 minutes**.

【Purpose of the line】Yokohama is small in capacity terms (under roughly 1 GWh), and is positioned as **a process-validation line**. The actual mass-production line is to be built separately, most likely in Fukuoka or Oppama.

【On the vehicle side】The leading candidates for the fiscal 2028 launch are a **high-performance e-POWER (series hybrid) model** or a **small EV**. CEO Espinosa said in a 2025 interview that solid-state would be **"a core part of how Nissan differentiates on technology."**

【The constraint】The catch is that the Re:Nissan restructuring puts R&D under serious pressure. The **¥250 billion fixed-cost reduction target for fiscal 2026** also takes the knife to R&D, leaving real risk that solid-state mass-production investment slips.

> For Nissan, solid-state is close to **the last card it has to win the brand back through technology** — which is why, even amid restructuring, it cannot stop developing it.`,
      },
      {
        heading: "Samsung SDI と米中勢の追走",
        headingEn: "Samsung SDI and the US/Chinese Pursuit",
        diagramId: "ssb-rivals",
        body: `日本勢に迫る最大の競争相手は、韓国の **Samsung SDI** だ。さらに米国の **QuantumScape**・**Solid Power**、中国の **CATL** や **WeLion** も独自技術で猛追している。

【Samsung SDI】2027年の **小規模量産（パイロット量産）** を目標に発表。日本勢と同じ硫化物系を採用し、自動車用セルとしての検証を進めている。Stellantis との合弁工場での試験投入が2027〜2028年の予定。

【QuantumScape（米国）】Volkswagenが大株主。**酸化物セラミックスの単層セル** で2024〜2025年に外部評価機関の試験をクリアし、2026年は車両搭載評価のフェーズに入った。エネルギー密度の数値は公表されていないが、業界では **300 Wh/kg級** と推測されている。

【CATL（中国）】中国最大の電池メーカー。**「凝集態電池（condensed-state battery）」** という半固体・準固体の電池を発表しており、2027年に商用化を予定。完全な全固体ではないが、安全性とエネルギー密度で従来比1.5倍を謳う。

【WeLion（中国）】NIO・XPENG向けに **半固体電池** を既に2024年から実車に搭載している。完全な全固体ではないが、市場に「全固体に近い体験」を先に持ち込んでいる事例として注目されている。

【業界全体の見立て】**2027年前後** に主要メーカーが小規模量産を開始し、**2030年前後** に普及帯への展開が始まる——というのが業界コンセンサス。日本勢の優位は **硫化物系の素材技術** と、**製造プロセスのノウハウ** に集約されつつある。`,
        bodyEn: `The biggest threat to Japan is Korea's **Samsung SDI**, with the US's **QuantumScape** and **Solid Power**, and China's **CATL** and **WeLion**, all chasing hard with their own approaches.

【Samsung SDI】Targeting **small-scale (pilot) mass production in 2027**. Like the Japanese, it has gone with sulfide chemistry, and is validating cells for automotive use. Initial vehicle introduction is planned through its joint plant with Stellantis in 2027–2028.

【QuantumScape (US)】Volkswagen is its largest shareholder. Its **oxide-ceramic single-layer cell** cleared third-party testing in 2024–2025, and 2026 is its vehicle-validation phase. Energy density figures are not public, but the industry estimates the **300 Wh/kg class**.

【CATL (China)】China's biggest battery maker has announced its **"condensed-state battery,"** a semi-solid / quasi-solid cell, with commercialization slated for 2027. Not fully solid-state, but it claims 1.5x energy density and improved safety versus today's cells.

【WeLion (China)】Has been shipping **semi-solid cells** in actual NIO and XPENG vehicles since 2024. Again, not true solid-state, but the most prominent case of bringing **"close-to-solid-state" experience** to market early.

【Industry consensus】Most majors will start small-scale mass production **around 2027** and broader deployment **around 2030**. Japan's edge is narrowing to **sulfide-electrolyte material science** and **manufacturing-process know-how**.`,
      },
      {
        heading: "「量産」のリアル — コストと歩留まり",
        headingEn: "What 'Mass Production' Really Means — Cost and Yield",
        diagramId: "ssb-production-reality",
        body: `2026年現在、業界が直面している最大の課題は「技術が動くか」ではなく **「コストと歩留まり」** だ。

【コストの壁】試作セルでの製造コストは、現行リチウムイオンの **3〜5倍** とされる。このギャップが詰まらない限り、普及帯への展開はできない。コストドライバーは、(1) 固体電解質の素材原価、(2) 高純度・乾燥環境（ドライルーム）の維持コスト、(3) 歩留まりの低さ——の3つだ。

【歩留まりの壁】固体電解質は液体と違って **電極との接触界面で抵抗が生じやすく**、わずかな製造ばらつきがセル性能に直結する。試作段階での歩留まりは **数十パーセント** とされ、これを **95%以上** まで持ち上げる工程改良が量産化の鍵だ。

【サプライチェーン】硫化物系固体電解質の主原料は硫黄（出光が強い）と **硫化リチウム**。後者は高純度品の安定供給がまだ確立されておらず、2027年に向けた供給網整備が業界全体の課題になっている。

【市場投入の現実的シナリオ】業界アナリストの2026年4月時点の標準シナリオは以下の通り:
**■ 2027〜2028年**: フラッグシップ車向け少量搭載（年数千台規模）
**■ 2029〜2030年**: プレミアム帯への拡大（年数万台規模）
**■ 2031〜2033年**: 普及帯への展開（年10万台超）
**■ 2035年以降**: 主流化の可能性

【日本勢が勝つ条件】日本勢が「素材から車載まで」の垂直統合を活かして勝つには、(1) 出光・三井化学などの **電解質素材の量産確立**、(2) トヨタ・日産・パナソニックの **製造プロセスの歩留まり向上**、(3) 自動車側での **車両アーキテクチャ最適化**——の3つを2027年までに揃える必要がある。

> 全固体電池の本当の競争は、**「最初に作ったメーカー」ではなく「最初に安く・大量に作れたメーカー」** が勝つ。2026年は、その「2人目以降の競争」が始まった年だ。`,
        bodyEn: `In 2026, the biggest challenge facing the industry is not "does the technology work" but **cost and yield**.

【The cost wall】Manufacturing cost for prototype cells is **3–5x** that of current lithium-ion. Until that gap closes, you cannot move into the volume segments. The cost drivers are: (1) the raw cost of solid electrolytes, (2) the cost of running ultra-pure, dry-room environments, and (3) low yields.

【The yield wall】Unlike liquids, solid electrolytes **create resistive interfaces with the electrodes**, and small process variations cascade straight into cell performance. Prototype yields are reportedly **in the tens of percent**, and pushing them above **95%** is the key process challenge for mass production.

【Supply chain】The main raw materials for sulfide electrolytes are sulfur (Idemitsu's strength) and **lithium sulfide**. High-purity lithium sulfide is not yet on a stable supply footing, and securing it for 2027 is an industry-wide issue.

【Realistic deployment scenario】The April 2026 consensus among analysts looks roughly like this:
**■ 2027–2028**: Small volumes in flagship vehicles (thousands of cars per year)
**■ 2029–2030**: Expansion into premium segments (tens of thousands per year)
**■ 2031–2033**: Push into mainstream segments (over 100,000 per year)
**■ From 2035**: Potential to become the mainstream chemistry

【What Japan needs to win】For Japan to leverage its end-to-end vertical integration, three things have to come together by 2027: (1) **mass production of electrolyte materials** at Idemitsu, Mitsui Chemicals and others; (2) **process yield improvements** at Toyota, Nissan and Panasonic; and (3) **vehicle-architecture optimization** at the OEM side.

> The real solid-state competition will not be won by **"who built the first one"** but by **"who built them cheaply and at volume first."** 2026 is the year that second race actually began.`,
      },
    ],
  },
];
