// 各政党の基本情報・理念・主要政策
// ソース: jimin.jp, craj.jp, o-ishin.jp, new-kokumin.jp, sanseito.jp, team-mir.ai, jcp.or.jp, reiwa-shinsengumi.com

export interface PartyInfo {
  name: string;
  nameEn: string;
  founded: string;
  leader: string;
  philosophy: string;
  policies: string[];
  color: string;
}

export const partyInfoList: PartyInfo[] = [
  {
    name: "自由民主党",
    nameEn: "Liberal Democratic Party",
    founded: "1955年",
    leader: "高市 早苗",
    philosophy:
      "正しい自由主義と民主主義のもと、秩序の中に進歩を求め、国際社会の責任を果たしつつ自主独立を守る保守政党。",
    policies: [
      "自主憲法の制定",
      "経済安全保障と防衛力強化",
      "賃上げが物価を上回る持続的成長",
      "地域・家族の絆の再生",
    ],
    color: "#3CA324",
  },
  {
    name: "中道改革連合",
    nameEn: "Centrist Reform Alliance",
    founded: "2026年",
    leader: "小川 淳也",
    philosophy:
      "生命・生活・生存を最大に尊重する人間主義を掲げ、立憲主義を政治の土台として対話と包摂を重んじる中道政党。",
    policies: [
      "持続的経済成長への政策転換",
      "現役世代も安心の社会保障改革",
      "包摂社会の実現と多様性の尊重",
      "不断の政治改革と選挙制度改革",
    ],
    color: "#0073BD",
  },
  {
    name: "日本維新の会",
    nameEn: "Nippon Ishin no Kai",
    founded: "2015年",
    leader: "馬場 伸幸",
    philosophy:
      "「自立する個人・自立する地域・自立する国家」を目指し、既得権益と闘い身を切る改革を断行する改革政党。",
    policies: [
      "首相公選制・一院制の実現",
      "大阪都構想と道州制",
      "政治家の身分保障廃止・議員定数削減",
      "規制改革と産業構造の転換",
    ],
    color: "#6FBA2C",
  },
  {
    name: "国民民主党",
    nameEn: "Democratic Party for the People",
    founded: "2020年",
    leader: "玉木 雄一郎",
    philosophy:
      "「自由」「共生」「未来への責任」を基本理念に、穏健保守からリベラルまでを包摂する改革中道政党。",
    policies: [
      "「手取りを増やす」減税・社会保険料軽減",
      "教育国債による教育無償化",
      "エネルギー安全保障と原発活用",
      "現実的な安全保障と積極外交",
    ],
    color: "#F8BC00",
  },
  {
    name: "参政党",
    nameEn: "Sanseito",
    founded: "2020年",
    leader: "神谷 宗幣",
    philosophy:
      "「日本の国益を守り、世界に大調和を生む」を理念に、天皇を中心とした日本の精神と伝統を活かす国民政党。",
    policies: [
      "日本の教育・人づくりの再建",
      "化学物質に依存しない食と医療",
      "国防力の強化と自主外交",
      "国民の参政意識の向上",
    ],
    color: "#D85D0F",
  },
  {
    name: "チームみらい",
    nameEn: "Team Mirai",
    founded: "2025年",
    leader: "安野 貴博",
    philosophy:
      "「テクノロジーで、誰も取り残さない日本をつくる」を掲げ、AI時代にふさわしい成長戦略とデジタル民主主義を推進。",
    policies: [
      "AIで行政・政治を改革（デジタル目安箱）",
      "「今の生活」支援と「未来への投資」の両立",
      "遅い政治を速くするIT化",
      "子どもの世代が安心できる社会づくり",
    ],
    color: "#66FFCC",
  },
  {
    name: "日本共産党",
    nameEn: "Japanese Communist Party",
    founded: "1922年",
    leader: "田村 智子",
    philosophy:
      "ルールある経済社会と平和な日本を目指し、資本主義の矛盾を民主的改革で解決する社会変革の政党。",
    policies: [
      "消費税減税・大企業への民主的規制",
      "原発即時ゼロと再生エネルギー転換",
      "社会保障の充実と子育て支援",
      "憲法9条を守り軍事費削減",
    ],
    color: "#DB001C",
  },
  {
    name: "れいわ新選組",
    nameEn: "Reiwa Shinsengumi",
    founded: "2019年",
    leader: "山本 太郎",
    philosophy:
      "「生きているだけで価値がある社会」を目指し、積極財政で困窮する人々の生活を底上げする。",
    policies: [
      "消費税の廃止",
      "全国一律 最低賃金1,500円",
      "奨学金の返済免除（徳政令）",
      "原発即時禁止と被曝防止",
    ],
    color: "#E4027E",
  },
];
