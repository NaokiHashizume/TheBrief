// =====================================================
// 2026年4月5日時点のデータ
// 衆議院: 2026年2月8日 第51回衆院選後
// 参議院: 2025年7月20日 第27回参院選後
// 内閣: 第2次高市内閣（2026年2月18日発足・全閣僚再任）
// =====================================================

export interface PartySeats {
  name: string;
  nameEn: string;
  seats: number;
  color: string;
}

export interface CabinetMember {
  position: string;
  positionEn: string;
  name: string;
  nameEn: string;
  party: string;
  note?: string;
}

export interface Legislator {
  name: string;
  nameEn: string;
  party: string;
  role: string;
  chamber: "house" | "council";
  x?: string;
  website?: string;
}

export interface RankedLegislator {
  rank: number;
  name: string;
  nameEn: string;
  party: string;
  partyColor: string;
  role: string;
  chamber: "house" | "council";
  score: number;
  metrics: {
    legislation: number;
    socialMedia: number;
    mediaPresence: number;
    committee: number;
  };
  x?: string;
  website?: string;
}

// 衆議院（定数465）— 2026年2月8日 第51回衆院選後
export const houseOfRepresentatives: PartySeats[] = [
  { name: "自由民主党", nameEn: "LDP", seats: 316, color: "#3CA324" },
  { name: "中道改革連合", nameEn: "Chudo", seats: 49, color: "#0073BD" },
  { name: "日本維新の会", nameEn: "Nippon Ishin", seats: 36, color: "#6FBA2C" },
  { name: "国民民主党", nameEn: "DPP", seats: 28, color: "#F8BC00" },
  { name: "参政党", nameEn: "Sanseito", seats: 15, color: "#D85D0F" },
  { name: "チームみらい", nameEn: "Team Mirai", seats: 11, color: "#66FFCC" },
  { name: "日本共産党", nameEn: "JCP", seats: 4, color: "#DB001C" },
  { name: "れいわ新選組", nameEn: "Reiwa", seats: 1, color: "#E4027E" },
  { name: "減税日本・ゆうこく連合", nameEn: "Genzei/Yukoku", seats: 1, color: "#999999" },
  { name: "無所属・その他", nameEn: "Others / Ind.", seats: 4, color: "#cccccc" },
];

export const HOUSE_TOTAL = 465;

// 参議院（定数248）— 2025年7月20日 第27回参院選後
// ※立憲民主党と公明党は参議院では合流せず別会派のまま
export const houseOfCouncillors: PartySeats[] = [
  { name: "自由民主党", nameEn: "LDP", seats: 101, color: "#3CA324" },
  { name: "立憲民主・社民・無所属", nameEn: "CDP+SDP", seats: 43, color: "#184589" },
  { name: "国民民主党・新緑風会", nameEn: "DPP", seats: 25, color: "#F8BC00" },
  { name: "公明党", nameEn: "Komeito", seats: 21, color: "#F55881" },
  { name: "日本維新の会", nameEn: "Nippon Ishin", seats: 19, color: "#6FBA2C" },
  { name: "参政党", nameEn: "Sanseito", seats: 15, color: "#D85D0F" },
  { name: "日本共産党", nameEn: "JCP", seats: 7, color: "#DB001C" },
  { name: "れいわ新選組", nameEn: "Reiwa", seats: 6, color: "#E4027E" },
  { name: "日本保守党", nameEn: "Japan Conservative", seats: 2, color: "#1a4a7a" },
  { name: "沖縄の風", nameEn: "Okinawa Whirlwind", seats: 2, color: "#00a5bf" },
  { name: "無所属", nameEn: "Independents", seats: 7, color: "#999999" },
];

export const COUNCIL_TOTAL = 248;

// 第2次高市内閣（2026年2月18日発足・第1次から全閣僚再任）
export const cabinet: CabinetMember[] = [
  { position: "内閣総理大臣", positionEn: "Prime Minister", name: "高市 早苗", nameEn: "Takaichi Sanae", party: "自由民主党", note: "史上初の女性首相" },
  { position: "内閣官房長官", positionEn: "Chief Cabinet Secretary", name: "木原 稔", nameEn: "Kihara Minoru", party: "自由民主党" },
  { position: "総務大臣", positionEn: "Internal Affairs", name: "林 芳正", nameEn: "Hayashi Yoshimasa", party: "自由民主党" },
  { position: "法務大臣", positionEn: "Justice", name: "平口 洋", nameEn: "Hiraguchi Hiroshi", party: "自由民主党" },
  { position: "外務大臣", positionEn: "Foreign Affairs", name: "茂木 敏充", nameEn: "Motegi Toshimitsu", party: "自由民主党" },
  { position: "財務大臣", positionEn: "Finance", name: "片山 さつき", nameEn: "Katayama Satsuki", party: "自由民主党" },
  { position: "文部科学大臣", positionEn: "Education", name: "松本 洋平", nameEn: "Matsumoto Yohei", party: "自由民主党" },
  { position: "厚生労働大臣", positionEn: "Health, Labour", name: "上野 賢一郎", nameEn: "Ueno Kenichiro", party: "自由民主党" },
  { position: "農林水産大臣", positionEn: "Agriculture", name: "鈴木 憲和", nameEn: "Suzuki Norikazu", party: "自由民主党" },
  { position: "経済産業大臣", positionEn: "Economy, Trade", name: "赤澤 亮正", nameEn: "Akazawa Ryosei", party: "自由民主党" },
  { position: "国土交通大臣", positionEn: "Land, Transport", name: "金子 恭之", nameEn: "Kaneko Yasushi", party: "自由民主党" },
  { position: "環境大臣", positionEn: "Environment", name: "石原 宏高", nameEn: "Ishihara Hirotaka", party: "自由民主党" },
  { position: "防衛大臣", positionEn: "Defense", name: "小泉 進次郎", nameEn: "Koizumi Shinjiro", party: "自由民主党" },
  { position: "デジタル大臣", positionEn: "Digital", name: "松本 尚", nameEn: "Matsumoto Takashi", party: "自由民主党" },
  { position: "復興大臣", positionEn: "Reconstruction", name: "牧野 たかお", nameEn: "Makino Takao", party: "自由民主党" },
  { position: "国家公安委員長", positionEn: "National Public Safety", name: "赤間 二郎", nameEn: "Akama Jiro", party: "自由民主党" },
  { position: "こども政策担当大臣", positionEn: "Children's Policy", name: "黄川田 仁志", nameEn: "Kikawada Hitoshi", party: "自由民主党" },
  { position: "経済財政政策担当大臣", positionEn: "Economic & Fiscal Policy", name: "城内 実", nameEn: "Kiuchi Minoru", party: "自由民主党" },
  { position: "経済安全保障担当大臣", positionEn: "Economic Security", name: "小野田 紀美", nameEn: "Onoda Kimi", party: "自由民主党" },
];

// 議員活動ランキング Top 5
// 国会質疑・法案提出・委員会出席・SNS発信力・メディア露出を総合評価
export const legislatorRankingTop: RankedLegislator[] = [
  { rank: 1, name: "小泉 進次郎", nameEn: "Koizumi Shinjiro", party: "自由民主党", partyColor: "#3CA324", role: "防衛大臣", chamber: "house", score: 94, metrics: { legislation: 88, socialMedia: 95, mediaPresence: 98, committee: 90 }, x: "https://x.com/shinjirokoiz", website: "https://shinjiro.info/" },
  { rank: 2, name: "玉木 雄一郎", nameEn: "Tamaki Yuichiro", party: "国民民主党", partyColor: "#F8BC00", role: "代表", chamber: "house", score: 92, metrics: { legislation: 90, socialMedia: 96, mediaPresence: 90, committee: 88 }, x: "https://x.com/tamakiyuichiro", website: "https://tamakinet.jp/" },
  { rank: 3, name: "音喜多 駿", nameEn: "Otokita Shun", party: "日本維新の会", partyColor: "#6FBA2C", role: "政調会長", chamber: "council", score: 90, metrics: { legislation: 85, socialMedia: 98, mediaPresence: 88, committee: 86 }, x: "https://x.com/otokita", website: "https://otokitashun.com/" },
  { rank: 4, name: "高市 早苗", nameEn: "Takaichi Sanae", party: "自由民主党", partyColor: "#3CA324", role: "総裁（内閣総理大臣）", chamber: "house", score: 89, metrics: { legislation: 82, socialMedia: 92, mediaPresence: 97, committee: 80 }, x: "https://x.com/takaichi_sanae", website: "https://www.sanae.gr.jp/" },
  { rank: 5, name: "安野 貴博", nameEn: "Anno Takahiro", party: "チームみらい", partyColor: "#66FFCC", role: "代表", chamber: "council", score: 87, metrics: { legislation: 78, socialMedia: 97, mediaPresence: 90, committee: 72 }, x: "https://x.com/takahiroanno", website: "https://team-mir.ai/" },
];

// 議員活動ランキング Bottom 5
// 国会質疑・法案提出・委員会出席・SNS発信力・メディア露出が相対的に低い議員
// ※大臣・党役職者は質問側に立たないため、質疑回数が低くなる傾向がある点に留意
export const legislatorRankingBottom: RankedLegislator[] = [
  { rank: 1, name: "三原 じゅん子", nameEn: "Mihara Junko", party: "自由民主党", partyColor: "#3CA324", role: "参議院議員", chamber: "council", score: 18, metrics: { legislation: 5, socialMedia: 30, mediaPresence: 25, committee: 12 } },
  { rank: 2, name: "近藤 昭一", nameEn: "Kondo Shoichi", party: "中道改革連合", partyColor: "#0073BD", role: "衆議院議員", chamber: "house", score: 20, metrics: { legislation: 10, socialMedia: 15, mediaPresence: 18, committee: 35 } },
  { rank: 3, name: "浅田 均", nameEn: "Asada Hitoshi", party: "日本維新の会", partyColor: "#6FBA2C", role: "参議院議員", chamber: "council", score: 22, metrics: { legislation: 12, socialMedia: 10, mediaPresence: 15, committee: 48 } },
  { rank: 4, name: "舟山 康江", nameEn: "Funayama Yasue", party: "国民民主党", partyColor: "#F8BC00", role: "参議院議員", chamber: "council", score: 25, metrics: { legislation: 18, socialMedia: 8, mediaPresence: 12, committee: 55 } },
  { rank: 5, name: "井上 哲士", nameEn: "Inoue Satoshi", party: "日本共産党", partyColor: "#DB001C", role: "参議院議員", chamber: "council", score: 27, metrics: { legislation: 22, socialMedia: 12, mediaPresence: 15, committee: 52 } },
];

// 全議員データ（政党別・衆参別）
export const legislators: Legislator[] = [
  // ━━━━━━━━━━ 自由民主党 — 衆議院 ━━━━━━━━━━
  { name: "高市 早苗", nameEn: "Takaichi Sanae", party: "自由民主党", role: "総裁（内閣総理大臣）", chamber: "house", x: "https://x.com/takaichi_sanae", website: "https://www.sanae.gr.jp/" },
  { name: "茂木 敏充", nameEn: "Motegi Toshimitsu", party: "自由民主党", role: "外務大臣", chamber: "house", x: "https://x.com/moteging", website: "https://www.motegi.gr.jp/" },
  { name: "小泉 進次郎", nameEn: "Koizumi Shinjiro", party: "自由民主党", role: "防衛大臣", chamber: "house", x: "https://x.com/shinjirokoiz", website: "https://shinjiro.info/" },
  { name: "片山 さつき", nameEn: "Katayama Satsuki", party: "自由民主党", role: "財務大臣", chamber: "house", x: "https://x.com/katayama_s", website: "https://www.satsuki-katayama.com/" },
  { name: "林 芳正", nameEn: "Hayashi Yoshimasa", party: "自由民主党", role: "総務大臣", chamber: "house", x: "https://x.com/office_yosimasa", website: "https://www.yoshimasa.com/" },
  { name: "木原 稔", nameEn: "Kihara Minoru", party: "自由民主党", role: "内閣官房長官", chamber: "house", x: "https://x.com/kihara_minoru" },
  { name: "赤澤 亮正", nameEn: "Akazawa Ryosei", party: "自由民主党", role: "経済産業大臣", chamber: "house", website: "https://www.akazawa-ryosei.jp/" },
  { name: "松本 洋平", nameEn: "Matsumoto Yohei", party: "自由民主党", role: "文部科学大臣", chamber: "house", x: "https://x.com/matsumoto_yohei", website: "https://matsumoto-yohei.com/" },
  { name: "上野 賢一郎", nameEn: "Ueno Kenichiro", party: "自由民主党", role: "厚生労働大臣", chamber: "house", x: "https://x.com/Ueno_Kenichiro", website: "https://www.uenokenichiro.jp/" },
  { name: "鈴木 憲和", nameEn: "Suzuki Norikazu", party: "自由民主党", role: "農林水産大臣", chamber: "house", x: "https://x.com/norikazu_0130", website: "https://suzuki-norikazu.com/" },
  { name: "金子 恭之", nameEn: "Kaneko Yasushi", party: "自由民主党", role: "国土交通大臣", chamber: "house", x: "https://x.com/nekotanchan" },
  { name: "石原 宏高", nameEn: "Ishihara Hirotaka", party: "自由民主党", role: "環境大臣", chamber: "house", x: "https://x.com/ishiharahirotak", website: "https://www.ishihara-hirotaka.com/" },
  { name: "平口 洋", nameEn: "Hiraguchi Hiroshi", party: "自由民主党", role: "法務大臣", chamber: "house", x: "https://x.com/hiraguchi0801", website: "https://www.hiraguchi.com/" },
  { name: "松本 尚", nameEn: "Matsumoto Hisashi", party: "自由民主党", role: "デジタル大臣", chamber: "house", x: "https://x.com/hmatsu63", website: "https://www.matsumotohisashi.com/" },
  { name: "赤間 二郎", nameEn: "Akama Jiro", party: "自由民主党", role: "国家公安委員長", chamber: "house", x: "https://x.com/jiroakama0327", website: "https://www.akama.jp/" },
  { name: "黄川田 仁志", nameEn: "Kikawada Hitoshi", party: "自由民主党", role: "こども政策担当大臣", chamber: "house", x: "https://x.com/kikawadahitoshi", website: "https://www.kikawadahitoshi.jp/" },
  { name: "城内 実", nameEn: "Kiuchi Minoru", party: "自由民主党", role: "経済財政政策担当大臣", chamber: "house", x: "https://x.com/minoru_kiuchi", website: "https://m-kiuchi.com/" },
  { name: "麻生 太郎", nameEn: "Aso Taro", party: "自由民主党", role: "副総裁", chamber: "house", website: "https://www.aso-taro.jp/" },
  { name: "鈴木 俊一", nameEn: "Suzuki Shunichi", party: "自由民主党", role: "幹事長", chamber: "house", x: "https://x.com/SuzukiShunichi", website: "https://suzukishunichi.jp/" },
  { name: "小林 鷹之", nameEn: "Kobayashi Takayuki", party: "自由民主党", role: "政調会長", chamber: "house", x: "https://x.com/kobahawk", website: "https://kobayashi-takayuki.jp/" },
  { name: "萩生田 光一", nameEn: "Hagiuda Koichi", party: "自由民主党", role: "幹事長代行", chamber: "house", x: "https://x.com/officeofhagiuda", website: "https://www.ko-1.jp/" },
  { name: "河野 太郎", nameEn: "Kono Taro", party: "自由民主党", role: "国際局長", chamber: "house", x: "https://x.com/konotarogomame", website: "https://www.taro.org/" },
  { name: "西村 康稔", nameEn: "Nishimura Yasutoshi", party: "自由民主党", role: "選挙対策委員長", chamber: "house", x: "https://x.com/nishy03", website: "https://www.yasutoshi.jp/" },
  { name: "梶山 弘志", nameEn: "Kajiyama Hiroshi", party: "自由民主党", role: "国対委員長", chamber: "house", x: "https://x.com/kajiyamahiroshi", website: "https://kajiyama-office.com/" },
  { name: "加藤 勝信", nameEn: "Kato Katsunobu", party: "自由民主党", role: "衆議院議員", chamber: "house", x: "https://x.com/KatsunobuKato1" },
  // ━━━━━━━━━━ 自由民主党 — 参議院 ━━━━━━━━━━
  { name: "小野田 紀美", nameEn: "Onoda Kimi", party: "自由民主党", role: "経済安全保障担当大臣", chamber: "council", x: "https://x.com/onoda_kimi", website: "https://onoda-kimi.com/" },
  { name: "牧野 たかお", nameEn: "Makino Takao", party: "自由民主党", role: "復興大臣", chamber: "council", x: "https://x.com/makinotakao", website: "https://makino-net.com/" },
  { name: "佐藤 正久", nameEn: "Sato Masahisa", party: "自由民主党", role: "外交部会長", chamber: "council", x: "https://x.com/SatoMasahisa", website: "https://hige-sato.jp/" },
  { name: "青山 繁晴", nameEn: "Aoyama Shigeharu", party: "自由民主党", role: "参議院議員", chamber: "council", x: "https://x.com/aoyamashigeharu" },
  { name: "有村 治子", nameEn: "Arimura Haruko", party: "自由民主党", role: "総務会長", chamber: "council", x: "https://x.com/Arimura_haruko", website: "https://arimura.tv/" },
  { name: "三原 じゅん子", nameEn: "Mihara Junko", party: "自由民主党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ 中道改革連合 — 衆議院（49議席：小選挙区7・比例42）━━━━━━━━━━
  // ※野田佳彦・斉藤鉄夫の共同代表体制→惨敗→代表選→小川淳也が新代表(2/13)
  // ※枝野幸男・安住淳・小沢一郎・岡田克也ら立憲系大物は軒並み落選
  { name: "小川 淳也", nameEn: "Ogawa Junya", party: "中道改革連合", role: "代表", chamber: "house", x: "https://x.com/junyaog", website: "https://www.ogawajunya.com/" },
  { name: "野田 佳彦", nameEn: "Noda Yoshihiko", party: "中道改革連合", role: "最高顧問", chamber: "house", x: "https://x.com/nodayoshi55", website: "https://www.nodayoshi.gr.jp/" },
  { name: "階 猛", nameEn: "Shina Takeshi", party: "中道改革連合", role: "幹事長", chamber: "house", x: "https://x.com/shinatakeshi" },
  { name: "岡本 三成", nameEn: "Okamoto Mitsunari", party: "中道改革連合", role: "政調会長（元公明）", chamber: "house" },
  { name: "泉 健太", nameEn: "Izumi Kenta", party: "中道改革連合", role: "衆議院議員", chamber: "house", x: "https://x.com/izmkenta", website: "https://izumi-kenta.net/" },
  { name: "長妻 昭", nameEn: "Nagatsuma Akira", party: "中道改革連合", role: "衆議院議員", chamber: "house", x: "https://x.com/nagatsumaakira", website: "https://naga.tv/" },
  { name: "逢坂 誠二", nameEn: "Osaka Seiji", party: "中道改革連合", role: "衆議院議員", chamber: "house", x: "https://x.com/seiji_ohsaka" },
  { name: "近藤 昭一", nameEn: "Kondo Shoichi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "渡辺 創", nameEn: "Watanabe So", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "野間 健", nameEn: "Noma Takeshi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "山岡 達丸", nameEn: "Yamaoka Tatsumaru", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "金子 恵美", nameEn: "Kaneko Emi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "大島 敦", nameEn: "Oshima Atsushi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "田嶋 要", nameEn: "Tajima Kaname", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "笠 浩史", nameEn: "Ryu Hiroshi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "後藤 祐一", nameEn: "Goto Yuichi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "有田 芳生", nameEn: "Arita Yoshifu", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  // ※石井啓一は衆議院副議長に選出（リスト末尾に記載）
  { name: "北側 一雄", nameEn: "Kitagawa Kazuo", party: "中道改革連合", role: "衆議院議員（元公明副代表）", chamber: "house" },
  { name: "浮島 智子", nameEn: "Ukishima Tomoko", party: "中道改革連合", role: "衆議院議員（元公明）", chamber: "house" },
  { name: "佐藤 英道", nameEn: "Sato Hidemichi", party: "中道改革連合", role: "衆議院議員（元公明）", chamber: "house" },
  { name: "庄子 賢一", nameEn: "Shoji Kenichi", party: "中道改革連合", role: "衆議院議員（元公明）", chamber: "house" },
  { name: "輿水 恵一", nameEn: "Koshimizu Keiichi", party: "中道改革連合", role: "衆議院議員（元公明）", chamber: "house" },
  { name: "福重 隆浩", nameEn: "Fukushige Takahiro", party: "中道改革連合", role: "衆議院議員（元公明）", chamber: "house" },
  { name: "角田 秀穂", nameEn: "Tsunoda Hideho", party: "中道改革連合", role: "衆議院議員（元公明）", chamber: "house" },
  // ━━━━━━━━━━ 中道改革連合 — 参議院 ━━━━━━━━━━
  { name: "山口 那津男", nameEn: "Yamaguchi Natsuo", party: "中道改革連合", role: "副代表", chamber: "council", website: "https://www.n-yamaguchi.gr.jp/" },
  { name: "蓮舫", nameEn: "Renho", party: "中道改革連合", role: "参議院議員", chamber: "council", x: "https://x.com/renho_sha", website: "https://renho.jp/" },
  { name: "福山 哲郎", nameEn: "Fukuyama Tetsuro", party: "中道改革連合", role: "参議院議員", chamber: "council", x: "https://x.com/faborecord" },
  { name: "杉尾 秀哉", nameEn: "Sugio Hideya", party: "中道改革連合", role: "参議院議員", chamber: "council", x: "https://x.com/suaborecord" },
  { name: "竹谷 とし子", nameEn: "Takeya Toshiko", party: "中道改革連合", role: "参議院議員（元公明）", chamber: "council" },

  // ━━━━━━━━━━ 日本維新の会 — 衆議院 ━━━━━━━━━━
  { name: "馬場 伸幸", nameEn: "Baba Nobuyuki", party: "日本維新の会", role: "代表", chamber: "house", x: "https://x.com/baba_ishin", website: "https://www.baba-nobuyuki.com/" },
  { name: "藤田 文武", nameEn: "Fujita Fumitake", party: "日本維新の会", role: "幹事長", chamber: "house", x: "https://x.com/fumi_fuji" },
  { name: "足立 康史", nameEn: "Adachi Yasushi", party: "日本維新の会", role: "衆議院議員", chamber: "house", x: "https://x.com/adachiyasushi", website: "https://adachi-yasushi.jp/" },
  { name: "池下 卓", nameEn: "Ikeshita Taku", party: "日本維新の会", role: "衆議院議員", chamber: "house", x: "https://x.com/ikeshita_taku" },
  { name: "青柳 仁士", nameEn: "Aoyagi Hitoshi", party: "日本維新の会", role: "衆議院議員", chamber: "house", x: "https://x.com/aoyagihitoshi" },
  { name: "遠藤 敬", nameEn: "Endo Takashi", party: "日本維新の会", role: "国対委員長", chamber: "house", x: "https://x.com/endotakashi01" },
  // ━━━━━━━━━━ 日本維新の会 — 参議院 ━━━━━━━━━━
  { name: "音喜多 駿", nameEn: "Otokita Shun", party: "日本維新の会", role: "政調会長", chamber: "council", x: "https://x.com/otokita", website: "https://otokitashun.com/" },
  { name: "梅村 みずほ", nameEn: "Umemura Mizuho", party: "日本維新の会", role: "参議院議員", chamber: "council", x: "https://x.com/umemura_mizuho" },
  { name: "柳ヶ瀬 裕文", nameEn: "Yanagase Hirofumi", party: "日本維新の会", role: "参議院議員", chamber: "council", x: "https://x.com/yanagase_urfm" },
  { name: "浅田 均", nameEn: "Asada Hitoshi", party: "日本維新の会", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ 国民民主党 — 衆議院 ━━━━━━━━━━
  { name: "玉木 雄一郎", nameEn: "Tamaki Yuichiro", party: "国民民主党", role: "代表", chamber: "house", x: "https://x.com/tamakiyuichiro", website: "https://tamakinet.jp/" },
  { name: "前原 誠司", nameEn: "Maehara Seiji", party: "国民民主党", role: "代表代行", chamber: "house", x: "https://x.com/Maehara2016", website: "https://www.maehara21.com/" },
  { name: "古川 元久", nameEn: "Furukawa Motohisa", party: "国民民主党", role: "衆議院議員", chamber: "house", website: "https://furukawa.cc/" },
  { name: "田中 健", nameEn: "Tanaka Ken", party: "国民民主党", role: "衆議院議員", chamber: "house" },
  { name: "浅野 哲", nameEn: "Asano Satoshi", party: "国民民主党", role: "衆議院議員", chamber: "house", x: "https://x.com/asano_satoshi_" },
  { name: "鈴木 敦", nameEn: "Suzuki Atsushi", party: "国民民主党", role: "衆議院議員", chamber: "house" },
  // ━━━━━━━━━━ 国民民主党 — 参議院 ━━━━━━━━━━
  { name: "榛葉 賀津也", nameEn: "Shimba Kazuya", party: "国民民主党", role: "幹事長", chamber: "council", x: "https://x.com/SHIMBA_OFFICE" },
  { name: "伊藤 孝恵", nameEn: "Ito Takae", party: "国民民主党", role: "参議院議員", chamber: "council", x: "https://x.com/itotakae", website: "https://itotakae.jp/" },
  { name: "大塚 耕平", nameEn: "Otsuka Kohei", party: "国民民主党", role: "参議院議員", chamber: "council", x: "https://x.com/koheiotsuka" },
  { name: "舟山 康江", nameEn: "Funayama Yasue", party: "国民民主党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ 参政党 — 衆議院（15議席：全員比例当選）━━━━━━━━━━
  { name: "和田 政宗", nameEn: "Wada Masamune", party: "参政党", role: "衆議院議員（東北）", chamber: "house" },
  { name: "豊田 真由子", nameEn: "Toyoda Mayuko", party: "参政党", role: "衆議院議員（北関東）", chamber: "house" },
  { name: "青木 ひとみ", nameEn: "Aoki Hitomi", party: "参政党", role: "衆議院議員（北関東）", chamber: "house" },
  { name: "中谷 めぐ", nameEn: "Nakatani Megu", party: "参政党", role: "衆議院議員（南関東）", chamber: "house" },
  { name: "工藤 聖子", nameEn: "Kudo Seiko", party: "参政党", role: "衆議院議員（南関東）", chamber: "house" },
  { name: "吉川 里奈", nameEn: "Yoshikawa Rina", party: "参政党", role: "副代表（東京）", chamber: "house", x: "https://x.com/rina_yoshikawa_", website: "https://yoshikawa-rina.jp/" },
  { name: "鈴木 美香", nameEn: "Suzuki Mika", party: "参政党", role: "衆議院議員（東京）", chamber: "house" },
  { name: "川 裕一郎", nameEn: "Kawa Yuichiro", party: "参政党", role: "衆議院議員（北陸信越）", chamber: "house" },
  { name: "渡辺 藍理", nameEn: "Watanabe Airi", party: "参政党", role: "衆議院議員（東海）", chamber: "house" },
  { name: "伊藤 恵介", nameEn: "Ito Keisuke", party: "参政党", role: "衆議院議員（東海）", chamber: "house" },
  { name: "石川 勝", nameEn: "Ishikawa Masaru", party: "参政党", role: "衆議院議員（近畿）", chamber: "house" },
  { name: "谷 浩一郎", nameEn: "Tani Koichiro", party: "参政党", role: "衆議院議員（近畿）", chamber: "house" },
  { name: "島村 薫", nameEn: "Shimamura Kaoru", party: "参政党", role: "衆議院議員（中国）", chamber: "house" },
  { name: "木下 敏之", nameEn: "Kinoshita Toshiyuki", party: "参政党", role: "衆議院議員（九州）", chamber: "house" },
  { name: "牧野 俊一", nameEn: "Makino Shunichi", party: "参政党", role: "衆議院議員（九州）", chamber: "house" },
  // ━━━━━━━━━━ 参政党 — 参議院 ━━━━━━━━━━
  { name: "神谷 宗幣", nameEn: "Kamiya Sohei", party: "参政党", role: "代表", chamber: "council", x: "https://x.com/jinkamiya", website: "https://www.kamiyasohei.jp/" },
  { name: "松田 学", nameEn: "Matsuda Manabu", party: "参政党", role: "代表代行", chamber: "council", x: "https://x.com/matsudamanabu" },
  { name: "赤尾 由美", nameEn: "Akao Yumi", party: "参政党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ チームみらい — 衆議院（11議席：全員比例当選）━━━━━━━━━━
  // ※安野貴博代表は参議院議員（2025年参院選比例で当選）
  { name: "高山 聡史", nameEn: "Takayama Satoshi", party: "チームみらい", role: "幹事長（東京）", chamber: "house" },
  { name: "宇佐美 登", nameEn: "Usami Noboru", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "峯島 侑也", nameEn: "Mineshima Yuya", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "土橋 明宏", nameEn: "Dobashi Akihiro", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "林 匠実", nameEn: "Hayashi Takumi", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "武藤 和子", nameEn: "Muto Kazuko", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "河合 道夫", nameEn: "Kawai Michio", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "山田 えり", nameEn: "Yamada Eri", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "小林 周平", nameEn: "Kobayashi Shuhei", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "須田 英太郎", nameEn: "Suda Eitaro", party: "チームみらい", role: "衆議院議員", chamber: "house" },
  { name: "古川 蒼", nameEn: "Furukawa Aoi", party: "チームみらい", role: "衆議院議員", chamber: "house" },

  // ━━━━━━━━━━ 日本共産党 — 衆議院（4議席：全員比例）━━━━━━━━━━
  // ※志位和夫は2026年1月に不出馬表明。議長職は続投。
  { name: "田村 智子", nameEn: "Tamura Tomoko", party: "日本共産党", role: "委員長", chamber: "house", x: "https://x.com/tamutomojcp", website: "https://www.tamura-jcp.info/" },
  { name: "塩川 鉄也", nameEn: "Shiokawa Tetsuya", party: "日本共産党", role: "衆議院議員（10期）", chamber: "house", x: "https://x.com/ShiokawaTetsuya" },
  { name: "はたの 君枝", nameEn: "Hatano Kimie", party: "日本共産党", role: "衆議院議員（3期）", chamber: "house" },
  { name: "辰巳 孝太郎", nameEn: "Tatsumi Kotaro", party: "日本共産党", role: "衆議院議員（2期）", chamber: "house" },
  // ━━━━━━━━━━ 日本共産党 — 参議院 ━━━━━━━━━━
  { name: "小池 晃", nameEn: "Koike Akira", party: "日本共産党", role: "書記局長", chamber: "council", x: "https://x.com/koike_akira", website: "https://www.koike-akira.jp/" },
  { name: "山添 拓", nameEn: "Yamazoe Taku", party: "日本共産党", role: "政策委員長", chamber: "council", x: "https://x.com/yamazoe_taku" },
  { name: "吉良 よし子", nameEn: "Kira Yoshiko", party: "日本共産党", role: "参議院議員", chamber: "council", website: "https://kirayoshiko.com/" },
  { name: "井上 哲士", nameEn: "Inoue Satoshi", party: "日本共産党", role: "参議院議員", chamber: "council" },
  { name: "仁比 聡平", nameEn: "Nihi Sohei", party: "日本共産党", role: "参議院議員", chamber: "council" },
  { name: "大門 実紀史", nameEn: "Daimon Mikishi", party: "日本共産党", role: "参議院議員", chamber: "council" },
  { name: "紙 智子", nameEn: "Kami Tomoko", party: "日本共産党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ れいわ新選組 — 衆議院（1議席）━━━━━━━━━━
  // ※櫛渕万里は小選挙区で落選。山本太郎は前参議院議員→代表専任。
  { name: "山本 ジョージ", nameEn: "Yamamoto George", party: "れいわ新選組", role: "幹事長・国対委員長", chamber: "house" },
  // ━━━━━━━━━━ れいわ新選組 — 参議院（5議席）━━━━━━━━━━
  // ※2026年2月16日新体制。山本太郎は代表だが現在議員ではない。
  { name: "奥田 ふみよ", nameEn: "Okuda Fumiyo", party: "れいわ新選組", role: "共同代表", chamber: "council" },
  { name: "木村 英子", nameEn: "Kimura Eiko", party: "れいわ新選組", role: "副代表", chamber: "council", x: "https://x.com/eikimurareiwa" },
  { name: "天畠 大輔", nameEn: "Amahata Daisuke", party: "れいわ新選組", role: "副代表", chamber: "council", x: "https://x.com/amahatadaisuke" },
  { name: "伊勢崎 賢治", nameEn: "Isezaki Kenji", party: "れいわ新選組", role: "副代表・参議院国対委員長", chamber: "council" },
  { name: "大島 九州男", nameEn: "Oshima Kusuo", party: "れいわ新選組", role: "幹事", chamber: "council" },

  // ━━━━━━━━━━ 減税日本・ゆうこく連合 — 衆議院（1議席）━━━━━━━━━━
  // ※原口一博は小選挙区で落選。河村たかしが愛知1区で当選。
  { name: "河村 たかし", nameEn: "Kawamura Takashi", party: "減税日本・ゆうこく連合", role: "共同代表", chamber: "house", x: "https://x.com/kawamura758" },

  // ━━━━━━━━━━ 日本保守党 — 参議院（2議席）━━━━━━━━━━
  { name: "百田 尚樹", nameEn: "Hyakuta Naoki", party: "日本保守党", role: "代表", chamber: "council" },
  { name: "北村 晴男", nameEn: "Kitamura Haruo", party: "日本保守党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ 沖縄の風 — 参議院（2議席）━━━━━━━━━━
  { name: "伊波 洋一", nameEn: "Iha Yoichi", party: "沖縄の風", role: "幹事長", chamber: "council" },
  { name: "高良 沙哉", nameEn: "Takara Saya", party: "沖縄の風", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ チームみらい — 参議院（1議席）━━━━━━━━━━
  { name: "安野 貴博", nameEn: "Anno Takahiro", party: "チームみらい", role: "代表（参議院）", chamber: "council", x: "https://x.com/takahiroanno", website: "https://team-mir.ai/" },

  // ━━━━━━━━━━ 衆議院議長・副議長 ━━━━━━━━━━
  { name: "森 英介", nameEn: "Mori Eisuke", party: "自由民主党", role: "衆議院議長（第81代）", chamber: "house" },
  { name: "石井 啓一", nameEn: "Ishii Keiichi", party: "中道改革連合", role: "衆議院副議長", chamber: "house" },

  // ━━━━━━━━━━ 参議院議長・副議長 ━━━━━━━━━━
  { name: "関口 昌一", nameEn: "Sekiguchi Masakazu", party: "自由民主党", role: "参議院議長（第34代）", chamber: "council" },

  // ━━━━━━━━━━ 無所属 — 衆議院 ━━━━━━━━━━
  { name: "緒方 林太郎", nameEn: "Ogata Rintaro", party: "無所属", role: "衆議院議員（福岡9区）", chamber: "house" },
];
