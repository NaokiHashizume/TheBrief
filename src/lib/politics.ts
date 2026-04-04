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

// 議員活動ランキング Top 10
// 国会質疑・法案提出・委員会出席・SNS発信力・メディア露出を総合評価
export const legislatorRanking: RankedLegislator[] = [
  { rank: 1, name: "小泉 進次郎", nameEn: "Koizumi Shinjiro", party: "自由民主党", partyColor: "#3CA324", role: "防衛大臣", chamber: "house", score: 94, metrics: { legislation: 88, socialMedia: 95, mediaPresence: 98, committee: 90 }, x: "https://x.com/shinjirokoiz", website: "https://shinjiro.info/" },
  { rank: 2, name: "玉木 雄一郎", nameEn: "Tamaki Yuichiro", party: "国民民主党", partyColor: "#F8BC00", role: "代表", chamber: "house", score: 92, metrics: { legislation: 90, socialMedia: 96, mediaPresence: 90, committee: 88 }, x: "https://x.com/tamakiyuichiro", website: "https://tamakinet.jp/" },
  { rank: 3, name: "音喜多 駿", nameEn: "Otokita Shun", party: "日本維新の会", partyColor: "#6FBA2C", role: "政調会長", chamber: "council", score: 90, metrics: { legislation: 85, socialMedia: 98, mediaPresence: 88, committee: 86 }, x: "https://x.com/otokita", website: "https://otokitashun.com/" },
  { rank: 4, name: "高市 早苗", nameEn: "Takaichi Sanae", party: "自由民主党", partyColor: "#3CA324", role: "総裁（内閣総理大臣）", chamber: "house", score: 89, metrics: { legislation: 82, socialMedia: 92, mediaPresence: 97, committee: 80 }, x: "https://x.com/takaichi_sanae", website: "https://www.sanae.gr.jp/" },
  { rank: 5, name: "山本 太郎", nameEn: "Yamamoto Taro", party: "れいわ新選組", partyColor: "#E4027E", role: "代表", chamber: "council", score: 87, metrics: { legislation: 78, socialMedia: 95, mediaPresence: 92, committee: 75 }, x: "https://x.com/yamamototaro0", website: "https://taro-yamamoto.jp/" },
  { rank: 6, name: "小野田 紀美", nameEn: "Onoda Kimi", party: "自由民主党", partyColor: "#3CA324", role: "経済安全保障担当大臣", chamber: "council", score: 85, metrics: { legislation: 80, socialMedia: 94, mediaPresence: 82, committee: 82 }, x: "https://x.com/onoda_kimi", website: "https://onoda-kimi.com/" },
  { rank: 7, name: "山添 拓", nameEn: "Yamazoe Taku", party: "日本共産党", partyColor: "#DB001C", role: "政策委員長", chamber: "council", score: 84, metrics: { legislation: 92, socialMedia: 80, mediaPresence: 78, committee: 90 }, x: "https://x.com/yaaborecord" },
  { rank: 8, name: "片山 さつき", nameEn: "Katayama Satsuki", party: "自由民主党", partyColor: "#3CA324", role: "財務大臣", chamber: "house", score: 82, metrics: { legislation: 76, socialMedia: 92, mediaPresence: 85, committee: 72 }, x: "https://x.com/katayama_s", website: "https://www.satsuki-katayama.com/" },
  { rank: 9, name: "安野 貴博", nameEn: "Anno Takahiro", party: "チームみらい", partyColor: "#66FFCC", role: "代表", chamber: "house", score: 80, metrics: { legislation: 65, socialMedia: 98, mediaPresence: 95, committee: 55 }, x: "https://x.com/takahiroanno", website: "https://team-mir.ai/" },
  { rank: 10, name: "小川 淳也", nameEn: "Ogawa Junya", party: "中道改革連合", partyColor: "#0073BD", role: "代表", chamber: "house", score: 79, metrics: { legislation: 80, socialMedia: 72, mediaPresence: 85, committee: 78 }, x: "https://x.com/junyaog", website: "https://www.ogawajunya.com/" },
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

  // ━━━━━━━━━━ 中道改革連合 — 衆議院 ━━━━━━━━━━
  { name: "小川 淳也", nameEn: "Ogawa Junya", party: "中道改革連合", role: "代表", chamber: "house", x: "https://x.com/junyaog", website: "https://www.ogawajunya.com/" },
  { name: "野田 佳彦", nameEn: "Noda Yoshihiko", party: "中道改革連合", role: "最高顧問", chamber: "house", x: "https://x.com/nodayoshi55", website: "https://www.nodayoshi.gr.jp/" },
  { name: "枝野 幸男", nameEn: "Edano Yukio", party: "中道改革連合", role: "幹事長", chamber: "house", x: "https://x.com/edanoyukio0531", website: "https://www.edano.gr.jp/" },
  { name: "泉 健太", nameEn: "Izumi Kenta", party: "中道改革連合", role: "政調会長", chamber: "house", x: "https://x.com/izmkenta", website: "https://izumi-kenta.net/" },
  { name: "長妻 昭", nameEn: "Nagatsuma Akira", party: "中道改革連合", role: "衆議院議員", chamber: "house", x: "https://x.com/nagatsumaakira", website: "https://naga.tv/" },
  { name: "逢坂 誠二", nameEn: "Osaka Seiji", party: "中道改革連合", role: "衆議院議員", chamber: "house", x: "https://x.com/seiji_ohsaka" },
  { name: "近藤 昭一", nameEn: "Kondo Shoichi", party: "中道改革連合", role: "衆議院議員", chamber: "house" },
  { name: "石井 啓一", nameEn: "Ishii Keiichi", party: "中道改革連合", role: "衆議院議員（元公明代表）", chamber: "house" },
  { name: "北側 一雄", nameEn: "Kitagawa Kazuo", party: "中道改革連合", role: "衆議院議員（元公明副代表）", chamber: "house" },
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

  // ━━━━━━━━━━ 参政党 — 衆議院 ━━━━━━━━━━
  { name: "松田 学", nameEn: "Matsuda Manabu", party: "参政党", role: "共同代表", chamber: "house", x: "https://x.com/matsudamanabu" },
  { name: "吉川 里奈", nameEn: "Yoshikawa Rina", party: "参政党", role: "副代表", chamber: "house", x: "https://x.com/rina_yoshikawa_", website: "https://yoshikawa-rina.jp/" },
  { name: "河西 泰介", nameEn: "Kasai Taisuke", party: "参政党", role: "衆議院議員", chamber: "house" },
  // ━━━━━━━━━━ 参政党 — 参議院 ━━━━━━━━━━
  { name: "神谷 宗幣", nameEn: "Kamiya Sohei", party: "参政党", role: "代表", chamber: "council", x: "https://x.com/jinkamiya", website: "https://www.kamiyasohei.jp/" },
  { name: "赤尾 由美", nameEn: "Akao Yumi", party: "参政党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ チームみらい — 衆議院 ━━━━━━━━━━
  { name: "安野 貴博", nameEn: "Anno Takahiro", party: "チームみらい", role: "代表", chamber: "house", x: "https://x.com/takahiroanno", website: "https://team-mir.ai/" },
  { name: "東 国幹", nameEn: "Higashi Kunimoto", party: "チームみらい", role: "幹事長", chamber: "house" },

  // ━━━━━━━━━━ 日本共産党 — 衆議院 ━━━━━━━━━━
  { name: "志位 和夫", nameEn: "Shii Kazuo", party: "日本共産党", role: "議長", chamber: "house", website: "https://www.shii.gr.jp/" },
  { name: "塩川 鉄也", nameEn: "Shiokawa Tetsuya", party: "日本共産党", role: "衆議院議員", chamber: "house", x: "https://x.com/ShiokawaTetsuya" },
  { name: "宮本 徹", nameEn: "Miyamoto Toru", party: "日本共産党", role: "衆議院議員", chamber: "house", x: "https://x.com/miyamototooru" },
  // ━━━━━━━━━━ 日本共産党 — 参議院 ━━━━━━━━━━
  { name: "田村 智子", nameEn: "Tamura Tomoko", party: "日本共産党", role: "委員長", chamber: "council", x: "https://x.com/tamutomojcp", website: "https://www.tamura-tomoko.jp/" },
  { name: "小池 晃", nameEn: "Koike Akira", party: "日本共産党", role: "書記局長", chamber: "council", x: "https://x.com/koike_akira", website: "https://www.koike-akira.jp/" },
  { name: "山添 拓", nameEn: "Yamazoe Taku", party: "日本共産党", role: "政策委員長", chamber: "council", x: "https://x.com/yaaborecord" },
  { name: "吉良 よし子", nameEn: "Kira Yoshiko", party: "日本共産党", role: "参議院議員", chamber: "council", website: "https://kirayoshiko.com/" },
  { name: "井上 哲士", nameEn: "Inoue Satoshi", party: "日本共産党", role: "参議院議員", chamber: "council" },

  // ━━━━━━━━━━ れいわ新選組 — 衆議院 ━━━━━━━━━━
  { name: "櫛渕 万里", nameEn: "Kushibuchi Mari", party: "れいわ新選組", role: "衆議院議員", chamber: "house", x: "https://x.com/kushibuchi_mari", website: "https://kushibuchi.jp/" },
  // ━━━━━━━━━━ れいわ新選組 — 参議院 ━━━━━━━━━━
  { name: "山本 太郎", nameEn: "Yamamoto Taro", party: "れいわ新選組", role: "代表", chamber: "council", x: "https://x.com/yamamototaro0", website: "https://taro-yamamoto.jp/" },
  { name: "木村 英子", nameEn: "Kimura Eiko", party: "れいわ新選組", role: "参議院議員", chamber: "council", x: "https://x.com/eikimurareiwa" },
  { name: "舩後 靖彦", nameEn: "Funago Yasuhiko", party: "れいわ新選組", role: "参議院議員", chamber: "council", x: "https://x.com/funagoyasuhiko" },
  { name: "天畠 大輔", nameEn: "Amahata Daisuke", party: "れいわ新選組", role: "参議院議員", chamber: "council", x: "https://x.com/amahatadaisuke" },
];
