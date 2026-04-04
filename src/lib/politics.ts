// =====================================================
// 注意: このデータは2024年10月衆院選後の情報がベースです。
// 2026年4月時点の最新データに更新してください。
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
}

// 衆議院（定数465）— 2024年10月27日総選挙後
export const houseOfRepresentatives: PartySeats[] = [
  { name: "自由民主党", nameEn: "LDP", seats: 191, color: "#1e56a0" },
  { name: "立憲民主党", nameEn: "CDP", seats: 148, color: "#1b813e" },
  { name: "日本維新の会", nameEn: "Nippon Ishin", seats: 38, color: "#00a651" },
  { name: "国民民主党", nameEn: "DPP", seats: 28, color: "#f39800" },
  { name: "公明党", nameEn: "Komeito", seats: 24, color: "#e60012" },
  { name: "れいわ新選組", nameEn: "Reiwa", seats: 9, color: "#ed6d8a" },
  { name: "日本共産党", nameEn: "JCP", seats: 8, color: "#c8161d" },
  { name: "参政党", nameEn: "Sanseito", seats: 3, color: "#d4a017" },
  { name: "その他・無所属", nameEn: "Others / Ind.", seats: 16, color: "#999999" },
];

export const HOUSE_TOTAL = 465;

// 参議院（定数248）
export const houseOfCouncillors: PartySeats[] = [
  { name: "自由民主党", nameEn: "LDP", seats: 115, color: "#1e56a0" },
  { name: "立憲民主党", nameEn: "CDP", seats: 40, color: "#1b813e" },
  { name: "公明党", nameEn: "Komeito", seats: 27, color: "#e60012" },
  { name: "日本維新の会", nameEn: "Nippon Ishin", seats: 21, color: "#00a651" },
  { name: "国民民主党", nameEn: "DPP", seats: 11, color: "#f39800" },
  { name: "日本共産党", nameEn: "JCP", seats: 11, color: "#c8161d" },
  { name: "れいわ新選組", nameEn: "Reiwa", seats: 5, color: "#ed6d8a" },
  { name: "その他・無所属", nameEn: "Others / Ind.", seats: 18, color: "#999999" },
];

export const COUNCIL_TOTAL = 248;

// 内閣（石破内閣）
export const cabinet: CabinetMember[] = [
  { position: "内閣総理大臣", positionEn: "Prime Minister", name: "石破 茂", nameEn: "Ishiba Shigeru", party: "自由民主党" },
  { position: "総務大臣", positionEn: "Internal Affairs", name: "村上 誠一郎", nameEn: "Murakami Seiichiro", party: "自由民主党" },
  { position: "法務大臣", positionEn: "Justice", name: "鈴木 馨祐", nameEn: "Suzuki Keisuke", party: "自由民主党" },
  { position: "外務大臣", positionEn: "Foreign Affairs", name: "岩屋 毅", nameEn: "Iwaya Takeshi", party: "自由民主党" },
  { position: "財務大臣", positionEn: "Finance", name: "加藤 勝信", nameEn: "Kato Katsunobu", party: "自由民主党" },
  { position: "文部科学大臣", positionEn: "Education", name: "あべ 俊子", nameEn: "Abe Toshiko", party: "自由民主党" },
  { position: "厚生労働大臣", positionEn: "Health, Labour", name: "福岡 資麿", nameEn: "Fukuoka Takamaro", party: "自由民主党" },
  { position: "農林水産大臣", positionEn: "Agriculture", name: "江藤 拓", nameEn: "Eto Taku", party: "自由民主党" },
  { position: "経済産業大臣", positionEn: "Economy, Trade", name: "武藤 容治", nameEn: "Muto Yoji", party: "自由民主党" },
  { position: "国土交通大臣", positionEn: "Land, Transport", name: "中野 洋昌", nameEn: "Nakano Hiromasa", party: "公明党" },
  { position: "環境大臣", positionEn: "Environment", name: "浅尾 慶一郎", nameEn: "Asao Keiichiro", party: "自由民主党" },
  { position: "防衛大臣", positionEn: "Defense", name: "中谷 元", nameEn: "Nakatani Gen", party: "自由民主党" },
  { position: "官房長官", positionEn: "Chief Cabinet Secretary", name: "林 芳正", nameEn: "Hayashi Yoshimasa", party: "自由民主党" },
  { position: "デジタル大臣", positionEn: "Digital", name: "平 将明", nameEn: "Taira Masaaki", party: "自由民主党" },
  { position: "復興大臣", positionEn: "Reconstruction", name: "伊藤 忠彦", nameEn: "Ito Tadahiko", party: "自由民主党" },
  { position: "国家公安委員長", positionEn: "National Public Safety", name: "坂井 学", nameEn: "Sakai Manabu", party: "自由民主党" },
  { position: "経済再生担当大臣", positionEn: "Economic Revitalization", name: "赤澤 亮正", nameEn: "Akazawa Ryosei", party: "自由民主党" },
  { position: "少子化対策担当大臣", positionEn: "Declining Birthrate", name: "三原 じゅん子", nameEn: "Mihara Junko", party: "自由民主党" },
];

// 主要議員（党首・幹事長級）
export const keyLegislators: Legislator[] = [
  { name: "石破 茂", nameEn: "Ishiba Shigeru", party: "自由民主党", role: "総裁（内閣総理大臣）", chamber: "house" },
  { name: "野田 佳彦", nameEn: "Noda Yoshihiko", party: "立憲民主党", role: "代表", chamber: "house" },
  { name: "馬場 伸幸", nameEn: "Baba Nobuyuki", party: "日本維新の会", role: "代表", chamber: "house" },
  { name: "玉木 雄一郎", nameEn: "Tamaki Yuichiro", party: "国民民主党", role: "代表", chamber: "house" },
  { name: "山口 那津男", nameEn: "Yamaguchi Natsuo", party: "公明党", role: "代表", chamber: "council" },
  { name: "山本 太郎", nameEn: "Yamamoto Taro", party: "れいわ新選組", role: "代表", chamber: "council" },
  { name: "田村 智子", nameEn: "Tamura Tomoko", party: "日本共産党", role: "委員長", chamber: "council" },
];
