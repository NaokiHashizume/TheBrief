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

// 衆議院（定数465）— 2026年2月8日 第51回衆院選後
export const houseOfRepresentatives: PartySeats[] = [
  { name: "自由民主党", nameEn: "LDP", seats: 316, color: "#003DA5" },        // 自民ブルー
  { name: "中道改革連合", nameEn: "Chudo", seats: 49, color: "#1B813E" },      // 立憲グリーン系（立憲+公明の合流）
  { name: "日本維新の会", nameEn: "Nippon Ishin", seats: 36, color: "#38B548" }, // 維新グリーン
  { name: "国民民主党", nameEn: "DPP", seats: 28, color: "#F39800" },          // 国民オレンジ
  { name: "参政党", nameEn: "Sanseito", seats: 15, color: "#C84B2B" },         // 参政党オレンジレッド
  { name: "チームみらい", nameEn: "Team Mirai", seats: 11, color: "#00B9F2" }, // みらいスカイブルー
  { name: "日本共産党", nameEn: "JCP", seats: 4, color: "#CF000E" },           // 共産レッド
  { name: "れいわ新選組", nameEn: "Reiwa", seats: 1, color: "#ED008C" },       // れいわピンク
  { name: "減税日本・ゆうこく連合", nameEn: "Genzei/Yukoku", seats: 1, color: "#00A0AA" }, // 減税日本ティール
  { name: "無所属・その他", nameEn: "Others / Ind.", seats: 4, color: "#999999" },
];

export const HOUSE_TOTAL = 465;

// 参議院（定数248）— 2025年7月20日 第27回参院選後
// ※立憲民主党と公明党は参議院では合流せず別会派
export const houseOfCouncillors: PartySeats[] = [
  { name: "自由民主党", nameEn: "LDP", seats: 117, color: "#003DA5" },        // 自民ブルー
  { name: "立憲民主党", nameEn: "CDP", seats: 40, color: "#1B813E" },          // 立憲グリーン
  { name: "公明党", nameEn: "Komeito", seats: 27, color: "#F5A800" },          // 公明イエロー
  { name: "日本維新の会", nameEn: "Nippon Ishin", seats: 18, color: "#38B548" }, // 維新グリーン
  { name: "国民民主党", nameEn: "DPP", seats: 19, color: "#F39800" },          // 国民オレンジ
  { name: "参政党", nameEn: "Sanseito", seats: 14, color: "#C84B2B" },         // 参政党オレンジレッド
  { name: "日本共産党", nameEn: "JCP", seats: 6, color: "#CF000E" },           // 共産レッド
  { name: "れいわ新選組", nameEn: "Reiwa", seats: 5, color: "#ED008C" },       // れいわピンク
  { name: "その他・無所属", nameEn: "Others / Ind.", seats: 2, color: "#999999" },
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

// 主要議員（政党別）
export const legislators: Legislator[] = [
  // ── 自由民主党 ──
  { name: "高市 早苗", nameEn: "Takaichi Sanae", party: "自由民主党", role: "総裁（内閣総理大臣）", chamber: "house", x: "https://x.com/takaichi_sanae", website: "https://www.sanae.gr.jp/" },
  { name: "茂木 敏充", nameEn: "Motegi Toshimitsu", party: "自由民主党", role: "外務大臣", chamber: "house", x: "https://x.com/motaborian", website: "https://www.motegi.gr.jp/" },
  { name: "小泉 進次郎", nameEn: "Koizumi Shinjiro", party: "自由民主党", role: "防衛大臣", chamber: "house", x: "https://x.com/koaborian", website: "https://shinjiro.info/" },
  { name: "片山 さつき", nameEn: "Katayama Satsuki", party: "自由民主党", role: "財務大臣", chamber: "house", x: "https://x.com/katayama_s", website: "https://www.satsuki-katayama.com/" },
  { name: "林 芳正", nameEn: "Hayashi Yoshimasa", party: "自由民主党", role: "総務大臣", chamber: "house", x: "https://x.com/hayaborian", website: "https://www.yoshimasa.com/" },
  { name: "木原 稔", nameEn: "Kihara Minoru", party: "自由民主党", role: "内閣官房長官", chamber: "house", x: "https://x.com/kaborian_minoru" },
  { name: "赤澤 亮正", nameEn: "Akazawa Ryosei", party: "自由民主党", role: "経済産業大臣", chamber: "house", website: "https://www.akazawa-ryosei.jp/" },
  { name: "小野田 紀美", nameEn: "Onoda Kimi", party: "自由民主党", role: "経済安全保障担当大臣", chamber: "council", x: "https://x.com/onoda_kimi", website: "https://onoda-kimi.com/" },

  // ── 中道改革連合 ──
  { name: "野田 佳彦", nameEn: "Noda Yoshihiko", party: "中道改革連合", role: "代表", chamber: "house", x: "https://x.com/nodayoshi55", website: "https://www.nodayoshi.gr.jp/" },
  { name: "枝野 幸男", nameEn: "Edano Yukio", party: "中道改革連合", role: "幹事長", chamber: "house", x: "https://x.com/edanoyukio0531", website: "https://www.edano.gr.jp/" },
  { name: "泉 健太", nameEn: "Izumi Kenta", party: "中道改革連合", role: "政調会長", chamber: "house", x: "https://x.com/izmkenta", website: "https://izumi-kenta.net/" },
  { name: "山口 那津男", nameEn: "Yamaguchi Natsuo", party: "中道改革連合", role: "副代表", chamber: "council", website: "https://www.n-yamaguchi.gr.jp/" },

  // ── 日本維新の会 ──
  { name: "馬場 伸幸", nameEn: "Baba Nobuyuki", party: "日本維新の会", role: "代表", chamber: "house", x: "https://x.com/baba_ishin", website: "https://www.baba-nobuyuki.com/" },
  { name: "藤田 文武", nameEn: "Fujita Fumitake", party: "日本維新の会", role: "幹事長", chamber: "house", x: "https://x.com/fujitaborian" },
  { name: "音喜多 駿", nameEn: "Otokita Shun", party: "日本維新の会", role: "政調会長", chamber: "council", x: "https://x.com/otokita", website: "https://otokitashun.com/" },

  // ── 国民民主党 ──
  { name: "玉木 雄一郎", nameEn: "Tamaki Yuichiro", party: "国民民主党", role: "代表", chamber: "house", x: "https://x.com/tamakiyuichiro", website: "https://tamakinet.jp/" },
  { name: "榛葉 賀津也", nameEn: "Shinba Kazuya", party: "国民民主党", role: "幹事長", chamber: "council", x: "https://x.com/shinba_kazuya" },
  { name: "前原 誠司", nameEn: "Maehara Seiji", party: "国民民主党", role: "代表代行", chamber: "house", x: "https://x.com/Maehara2016", website: "https://www.maehara21.com/" },

  // ── 参政党 ──
  { name: "神谷 宗幣", nameEn: "Kamiya Sohei", party: "参政党", role: "代表", chamber: "council", x: "https://x.com/jinkamiya", website: "https://www.kamiyasohei.jp/" },
  { name: "松田 学", nameEn: "Matsuda Manabu", party: "参政党", role: "共同代表", chamber: "house", x: "https://x.com/matsuda_policy" },

  // ── チームみらい ──
  { name: "成田 悠輔", nameEn: "Narita Yusuke", party: "チームみらい", role: "共同代表", chamber: "house", x: "https://x.com/naaborian" },
  { name: "東 国幹", nameEn: "Higashi Kunimoto", party: "チームみらい", role: "幹事長", chamber: "house" },

  // ── 日本共産党 ──
  { name: "田村 智子", nameEn: "Tamura Tomoko", party: "日本共産党", role: "委員長", chamber: "council", x: "https://x.com/tamutomojcp", website: "https://www.tamura-tomoko.jp/" },
  { name: "小池 晃", nameEn: "Koike Akira", party: "日本共産党", role: "書記局長", chamber: "council", x: "https://x.com/koike_akira", website: "https://www.koike-akira.jp/" },

  // ── れいわ新選組 ──
  { name: "山本 太郎", nameEn: "Yamamoto Taro", party: "れいわ新選組", role: "代表", chamber: "council", x: "https://x.com/yaborian_taro", website: "https://taro-yamamoto.jp/" },
];
