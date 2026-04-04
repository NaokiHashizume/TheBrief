// 2026年に成立・確定した法案・政策
// 審議を経て可決・施行された内容

export interface EnactedItem {
  slug: string;
  title: string;
  titleEn: string;
  committee: string;
  enactedDate: string;
  effectiveDate: string;
  summary: string;
  detail: string;
  keyPoints: string[];
  voteResult: { for: number; against: number; abstain?: number };
  parties: { name: string; vote: "賛成" | "反対" | "棄権" }[];
  timeline: { date: string; event: string }[];
  impact: string;
}

export const enactedItems: EnactedItem[] = [
  {
    slug: "defense-budget-special",
    title: "防衛力強化特別措置法",
    titleEn: "Defense Enhancement Special Measures Act",
    committee: "安全保障委員会",
    enactedDate: "2026-03-28",
    effectiveDate: "2026-04-01",
    summary: "防衛費をGDP比2%に引き上げるための安定財源を確保する特別措置法。建設国債の防衛転用と復興特別所得税の一部充当を規定。",
    detail: "2023年に閣議決定された防衛力整備計画（43兆円）の安定的な財源確保を法制化。建設国債の防衛施設整備への転用を可能とし、復興特別所得税の税率1%のうち0.3%を防衛目的に充当する。法人税への4〜4.5%の付加税も段階的に導入。5年間で総額43兆円の防衛費を確保する法的枠組みを整えた。",
    keyPoints: [
      "防衛費GDP比2%の法定化",
      "建設国債の防衛施設整備への転用容認",
      "復興特別所得税0.3%分の防衛財源化",
      "法人税付加税の段階的導入（4〜4.5%）",
      "5年間43兆円の財源フレームワーク確立",
    ],
    voteResult: { for: 341, against: 112, abstain: 12 },
    parties: [
      { name: "自由民主党", vote: "賛成" },
      { name: "日本維新の会", vote: "賛成" },
      { name: "国民民主党", vote: "賛成" },
      { name: "参政党", vote: "賛成" },
      { name: "中道改革連合", vote: "反対" },
      { name: "日本共産党", vote: "反対" },
      { name: "れいわ新選組", vote: "反対" },
      { name: "チームみらい", vote: "棄権" },
    ],
    timeline: [
      { date: "2026-01-25", event: "法案を閣議決定・国会提出" },
      { date: "2026-02-28", event: "衆議院安全保障委員会で審議開始" },
      { date: "2026-03-12", event: "衆議院本会議で可決" },
      { date: "2026-03-20", event: "参議院安全保障委員会で審議" },
      { date: "2026-03-28", event: "参議院本会議で可決・成立" },
      { date: "2026-04-01", event: "施行" },
    ],
    impact: "2026年度から防衛費は8.5兆円規模となり、自衛隊の装備近代化・弾薬備蓄・サイバー防衛能力の大幅強化が本格化する。一方、復興財源の転用に対しては被災地から反発の声もある。",
  },
  {
    slug: "semiconductor-support",
    title: "半導体産業基盤強化法",
    titleEn: "Semiconductor Industry Foundation Act",
    committee: "経済産業委員会",
    enactedDate: "2026-03-15",
    effectiveDate: "2026-04-01",
    summary: "国内半導体産業の復活に向け、TSMC・Rapidusなどへの政府支援の法的根拠を整備。10年間で10兆円規模の公的支援枠を設定。",
    detail: "経済安全保障の観点から、先端半導体の国内生産能力を確保するための包括的支援法。TSMC熊本工場（第1〜3）への支援継続、Rapidus北海道工場への追加出資、国内半導体人材の育成基金創設を法制化。設備投資への最大50%補助、研究開発費の税額控除拡大、半導体関連学科の定員増支援を盛り込む。",
    keyPoints: [
      "10年間で10兆円の公的支援枠を法定化",
      "先端半導体工場への設備投資補助（最大50%）",
      "半導体人材育成基金（5000億円）の創設",
      "研究開発費の税額控除を30%に拡大",
      "半導体関連学科の大学定員増を支援",
    ],
    voteResult: { for: 398, against: 55, abstain: 12 },
    parties: [
      { name: "自由民主党", vote: "賛成" },
      { name: "日本維新の会", vote: "賛成" },
      { name: "国民民主党", vote: "賛成" },
      { name: "中道改革連合", vote: "賛成" },
      { name: "チームみらい", vote: "賛成" },
      { name: "参政党", vote: "賛成" },
      { name: "日本共産党", vote: "反対" },
      { name: "れいわ新選組", vote: "反対" },
    ],
    timeline: [
      { date: "2026-01-30", event: "法案を閣議決定" },
      { date: "2026-02-15", event: "衆議院経済産業委員会で審議開始" },
      { date: "2026-02-28", event: "衆議院本会議で可決" },
      { date: "2026-03-08", event: "参議院経済産業委員会で審議" },
      { date: "2026-03-15", event: "参議院本会議で可決・成立" },
      { date: "2026-04-01", event: "施行" },
    ],
    impact: "TSMCの第3工場建設が正式決定し、2028年稼働を目指す。Rapidusの2nm量産計画にも弾みがつく。半導体関連の雇用が九州・北海道を中心に5万人規模で創出される見込み。",
  },
  {
    slug: "election-reform",
    title: "公職選挙法改正（衆議院選挙制度改革）",
    titleEn: "Electoral Reform Act",
    committee: "政治倫理・選挙制度特別委員会",
    enactedDate: "2026-02-05",
    effectiveDate: "2026-02-08",
    summary: "「10増10減」を反映した新たな区割りと比例代表の議席配分見直しを盛り込んだ選挙制度改革。第51回衆院選から適用。",
    detail: "2020年国勢調査に基づくアダムズ方式による「10増10減」の議席再配分を完了。東京・神奈川・埼玉など都市部の選挙区を増やし、地方の選挙区を削減。比例代表ブロックの定数も一部見直し。さらに、選挙運動期間中のSNS広告に関する規制を新設し、資金収支報告のデジタル化を義務付けた。",
    keyPoints: [
      "アダムズ方式による10増10減の確定",
      "289小選挙区の新区割り確定",
      "SNS選挙広告の出稿者表示義務",
      "政治資金収支報告のデジタル提出義務化",
      "在外投票の手続き簡素化",
    ],
    voteResult: { for: 380, against: 72, abstain: 13 },
    parties: [
      { name: "自由民主党", vote: "賛成" },
      { name: "中道改革連合", vote: "賛成" },
      { name: "日本維新の会", vote: "賛成" },
      { name: "国民民主党", vote: "賛成" },
      { name: "チームみらい", vote: "賛成" },
      { name: "日本共産党", vote: "反対" },
      { name: "れいわ新選組", vote: "反対" },
      { name: "参政党", vote: "反対" },
    ],
    timeline: [
      { date: "2025-12-20", event: "法案を国会提出" },
      { date: "2026-01-15", event: "衆議院特別委員会で審議" },
      { date: "2026-01-25", event: "衆議院本会議で可決" },
      { date: "2026-02-01", event: "参議院本会議で可決・成立" },
      { date: "2026-02-05", event: "公布" },
      { date: "2026-02-08", event: "第51回衆議院総選挙で初適用" },
    ],
    impact: "新区割りで実施された第51回衆院選で自民党が316議席の歴史的大勝。都市部での議席増が選挙結果に大きな影響を与えた。",
  },
  {
    slug: "political-funds-reform",
    title: "政治資金規正法改正（裏金問題対応）",
    titleEn: "Political Funds Control Act Reform",
    committee: "政治倫理・選挙制度特別委員会",
    enactedDate: "2026-01-28",
    effectiveDate: "2026-04-01",
    summary: "自民党派閥の政治資金パーティー裏金問題を受け、政治資金の透明性を大幅に強化する改正法。",
    detail: "2024年に発覚した自民党派閥の裏金問題を受けた抜本的改正。政治資金パーティーの収入を全額銀行振込に限定し、20万円超の支出には領収書添付を義務化。政策活動費を廃止し、旧文通費（調査研究広報滞在費）の使途公開を10年後から即時公開に変更。違反した場合の罰則も大幅に強化し、公民権停止期間を延長。",
    keyPoints: [
      "政治資金パーティー収入の全額銀行振込義務化",
      "政策活動費の完全廃止",
      "旧文通費の使途即時公開",
      "20万円超の支出に領収書添付を義務化",
      "違反時の公民権停止期間を5年→10年に延長",
    ],
    voteResult: { for: 420, against: 30, abstain: 15 },
    parties: [
      { name: "自由民主党", vote: "賛成" },
      { name: "中道改革連合", vote: "賛成" },
      { name: "日本維新の会", vote: "賛成" },
      { name: "国民民主党", vote: "賛成" },
      { name: "チームみらい", vote: "賛成" },
      { name: "参政党", vote: "賛成" },
      { name: "日本共産党", vote: "賛成" },
      { name: "れいわ新選組", vote: "賛成" },
    ],
    timeline: [
      { date: "2025-12-10", event: "与野党協議で改正案の骨子合意" },
      { date: "2026-01-10", event: "法案を国会提出" },
      { date: "2026-01-20", event: "衆議院特別委員会で可決" },
      { date: "2026-01-25", event: "衆議院本会議で可決" },
      { date: "2026-01-28", event: "参議院本会議で可決・成立" },
      { date: "2026-04-01", event: "施行" },
    ],
    impact: "全会一致に近い賛成で成立。政治資金の透明性が飛躍的に向上し、国民の政治不信解消に向けた一歩となった。2026年4月以降の政治資金パーティーは全て新ルールが適用される。",
  },
];
