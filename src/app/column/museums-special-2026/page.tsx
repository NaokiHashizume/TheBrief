import type { Metadata } from "next";
import Link from "next/link";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { RecommendedReads } from "@/components/RecommendedReads";
import { T } from "@/components/T";
import { ExhibitionCalendar } from "@/components/ExhibitionCalendar";

const COLUMN_COLOR = "#0d9488";
const ACCENT = "#be185d";

const URL = "https://thebrief.info/column/museums-special-2026";
const TITLE = "美術館特集 2026 — 一度は訪れたい日本の美術館8選";
const SUMMARY =
  "建築・コレクション・地域性。2026年に体験したい、日本を代表する美術館8館を厳選。各館の見どころと、2026年に開催される企画展ラインナップを一覧で紹介します。";

export const metadata: Metadata = {
  title: `${TITLE} — Column | The Brief`,
  description: SUMMARY,
  alternates: { canonical: URL },
  openGraph: {
    title: TITLE,
    description: SUMMARY,
    url: URL,
    type: "article",
    locale: "ja_JP",
    siteName: "The Brief",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SUMMARY,
  },
};

type Region = "東京" | "神奈川" | "京都";

const regionEn: Record<Region, string> = {
  "東京": "Tokyo",
  "神奈川": "Kanagawa",
  "京都": "Kyoto",
};

type Exhibition = {
  title: string;
  titleEn: string;
  period: string;
  periodEn: string;
  description: string;
  descriptionEn: string;
  url?: string;
};

type Museum = {
  title: string;
  titleEn: string;
  founded: number;
  region: Region;
  city: string;
  cityEn: string;
  category: string;
  categoryEn: string;
  architect?: string;
  architectEn?: string;
  summary: string;
  summaryEn: string;
  why: string;
  whyEn: string;
  note?: string;
  noteEn?: string;
  exhibitions2026: Exhibition[];
};

const museums: Museum[] = [
  {
    title: "国立西洋美術館",
    titleEn: "The National Museum of Western Art (NMWA)",
    founded: 1959,
    region: "東京",
    city: "台東区上野公園",
    cityEn: "Ueno Park, Taito-ku",
    category: "国立 / 西洋美術",
    categoryEn: "National / Western Art",
    architect: "ル・コルビュジエ（本館）",
    architectEn: "Le Corbusier (Main Building)",
    summary:
      "日本で唯一、ル・コルビュジエが設計した本館を持つ国立美術館。松方コレクションを核にした中世末期から20世紀初頭までの西洋美術コレクションは国内随一で、本館は2016年に世界文化遺産に登録された。",
    summaryEn:
      "Japan's only national museum housed in a building designed by Le Corbusier. Built around the Matsukata Collection, its holdings of Western art from the late medieval period to the early 20th century are unrivaled in Japan, and the main building was inscribed as a UNESCO World Heritage Site in 2016.",
    why: "印象派と西洋古典の二本柱で、いまの日本美術館史を語るうえで避けて通れない『基準館』。2026年は北欧・印象派・近代版画と分野を横断する大型展が連続する。",
    whyEn:
      "Anchored by Impressionism and Western classics, this is the benchmark museum no account of Japanese museum history can skip. In 2026, large-scale exhibitions spanning Nordic art, Impressionism and modern printmaking arrive in succession.",
    exhibitions2026: [
      {
        title: "チュルリョーニス展 内なる星図",
        titleEn: "Čiurlionis: Inner Star Maps",
        period: "2026年3月28日 — 6月14日",
        periodEn: "March 28 — June 14, 2026",
        url: "https://2026ciurlionis.nmwa.go.jp/",

        description:
          "リトアニアを代表する画家・作曲家ミカロユス・コンスタンティナス・チュルリョーニスの大回顧展。象徴主義と音楽が交差する独特の宇宙観を、東欧美術の文脈とともに紹介する日本初の本格展。",
        descriptionEn:
          "A major retrospective of Mikalojus Konstantinas Čiurlionis, Lithuania's pre-eminent painter and composer. The first full-scale exhibition in Japan to introduce his unique cosmology, where Symbolism and music intersect, set within the broader context of Eastern European art.",
      },
      {
        title: "版画家レンブラント — 挑戦、継承、インパクト",
        titleEn: "Rembrandt the Printmaker: Innovation, Legacy, Impact",
        period: "2026年7月7日 — 9月23日",
        periodEn: "July 7 — September 23, 2026",
        url: "https://www.nmwa.go.jp/jp/exhibitions/2026rembrandt.html",

        description:
          "油彩で知られるレンブラントを『版画家』として再定義する企画。エッチングの技術革新と、後世の版画家たちへのインパクトを、版下と摺りの比較で具体的に追う。",
        descriptionEn:
          "An exhibition that recasts Rembrandt — best known for his oil paintings — as a printmaker, tracing his etching innovations and their impact on later printmakers through side-by-side comparisons of plates and impressions.",
      },
      {
        title: "テート美術館 ターナー展 — 崇高の絵画、現代美術との対話",
        titleEn: "Turner from the Tate: The Sublime in Dialogue with Contemporary Art",
        period: "2026年10月24日 — 2027年2月21日",
        periodEn: "October 24, 2026 — February 21, 2027",
        url: "https://www.nmwa.go.jp/jp/exhibitions/2026turner.html",

        description:
          "テート所蔵のターナー作品を軸に、19世紀英国の『崇高』の美学が現代美術にどう受け継がれているかを、現代作家とのカップリングで示す野心的な構成。",
        descriptionEn:
          "Built around Turner works from the Tate, this ambitious show pairs his canvases with contemporary artists to ask how the 19th-century British aesthetic of the Sublime survives in art today.",
      },
      {
        title: "井内コレクション 葛飾北斎『冨嶽三十六景』一挙公開",
        titleEn: "The Iuchi Collection: Hokusai's Thirty-Six Views of Mount Fuji in Full",
        period: "2026年予定",
        periodEn: "Scheduled for 2026",
        description:
          "井内コレクションから国立西洋美術館に寄託された北斎『冨嶽三十六景』全揃を、まとめて公開する小特集。西洋美術の館で日本美術の名品をどう見るか、というキュレーションの問いを孕む。",
        descriptionEn:
          "A focused presentation of the complete Thirty-Six Views of Mount Fuji from the Iuchi Collection, on long-term loan to the NMWA. The show implicitly asks how Japanese masterpieces should be viewed inside a museum of Western art.",
      },
    ],
  },
  {
    title: "東京都美術館",
    titleEn: "Tokyo Metropolitan Art Museum",
    founded: 1926,
    region: "東京",
    city: "台東区上野公園",
    cityEn: "Ueno Park, Taito-ku",
    category: "公立 / 総合",
    categoryEn: "Public / General",
    architect: "前川國男（1975年再建）",
    architectEn: "Kunio Maekawa (1975 rebuild)",
    summary:
      "1926年開館、日本初の公立美術館。前川國男によるレンガ壁の現本館は、日本のモダニズム建築の代表作。海外からの大型巡回展、公募展、教育普及プログラムを並行して走らせる『総合型美術館』の原型。",
    summaryEn:
      "Opened in 1926 as Japan's first public art museum. The current brick-walled main building by Kunio Maekawa is a landmark of Japanese modernist architecture. A prototypical 'general' museum that runs major touring exhibitions from abroad alongside open-call shows and education programs.",
    why: "2026年は開館100周年のメモリアルイヤー。海外巡回展・公募展・地域連携事業が同時に走る、日本の公立美術館の到達点を体感できる稀有な一年。",
    whyEn:
      "2026 marks the museum's 100th anniversary. International touring shows, juried exhibitions and regional collaborations all run in parallel — a rare year in which to take the measure of how far Japan's public art museums have come.",
    note: "2026年は開館100周年。特別展に加え、アーカイブズ資料展示やシンポジウムなど100周年記念事業が年間を通じて展開される。",
    noteEn:
      "2026 is the 100th-anniversary year. Alongside the special exhibitions, archive displays and symposia tied to the centenary will run throughout the year.",
    exhibitions2026: [
      {
        title: "スウェーデン絵画 北欧の光、日常のかがやき",
        titleEn: "Swedish Painting: Nordic Light and the Glow of the Everyday",
        period: "2026年1月27日 — 4月12日",
        periodEn: "January 27 — April 12, 2026",
        url: "https://www.swedishpainting2026.jp/",

        description:
          "スウェーデン国立美術館の全面協力で実現する、19世紀末から20世紀初頭のスウェーデン絵画黄金期の特別展。北欧特有の光と『日常』を描くことの意味を、日本でまとめて見られる貴重な機会。",
        descriptionEn:
          "Realized in full cooperation with the Nationalmuseum in Stockholm, this special exhibition surveys the golden age of Swedish painting from the late 19th to early 20th century — a rare chance in Japan to consider the meaning of Nordic light and the everyday subject.",
      },
      {
        title: "都美セレクション グループ展 2026",
        titleEn: "TOBI Selection Group Show 2026",
        period: "2026年6月10日 — 7月1日",
        periodEn: "June 10 — July 1, 2026",
        description:
          "公募で選ばれた若手・中堅作家のグループ展。海外巡回展とは別の、日本の現代美術の足元を見る企画として東京都美術館の伝統的なプログラム。",
        descriptionEn:
          "A group show of young and mid-career artists selected through open call — a long-running TMAM program that, in contrast to its international touring shows, takes the temperature of contemporary art in Japan from the ground up.",
      },
      {
        title: "この場所の風景 〜 上野・大牟田・ブエノスアイレス",
        titleEn: "Landscapes of This Place: Ueno, Omuta, Buenos Aires",
        period: "2026年7月23日 — 10月7日",
        periodEn: "July 23 — October 7, 2026",
        description:
          "上野（東京）、大牟田（福岡）、ブエノスアイレス（アルゼンチン）という三つの都市を『場所』というキーワードで横断する企画展。100周年記念事業のひとつとして、地域と美術館の関係を問い直す。",
        descriptionEn:
          "An exhibition that cuts across three cities — Ueno in Tokyo, Omuta in Fukuoka and Buenos Aires in Argentina — under the keyword of 'place.' One of the centenary projects, it reframes the relationship between region and museum.",
      },
      {
        title: "大英博物館日本美術コレクション 百花繚乱 〜 海を越えた江戸絵画",
        titleEn: "The British Museum Japanese Art Collection: Edo Painting Across the Seas",
        period: "2026年7月25日 — 10月18日",
        periodEn: "July 25 — October 18, 2026",
        url: "https://www.tobikan.jp/exhibition/2026_britishmuseum.html",

        description:
          "大英博物館が所蔵する日本美術コレクションから、海を渡った江戸絵画の名品を里帰り展示する特別展。鈴木春信から葛飾北斎、伊藤若冲まで、英国に渡った日本美の歴史を辿る。",
        descriptionEn:
          "A homecoming display of Edo-period painting masterpieces from the British Museum's Japanese art collection. From Suzuki Harunobu to Hokusai and Ito Jakuchu, the show traces the history of Japanese art that crossed the seas to Britain.",
      },
      {
        title: "オルセー美術館所蔵 いまを生きる歓び",
        titleEn: "From the Musée d'Orsay: The Joy of Living in the Present",
        period: "2026年11月14日 — 2027年3月28日",
        periodEn: "November 14, 2026 — March 28, 2027",
        url: "https://art.nikkei.com/orsay2627/",

        description:
          "オルセー美術館コレクションを軸にした特別展。19世紀末から20世紀初頭、近代化のなかで人々が日常の歓びをどう描いたかをテーマに、ナビ派・印象派の名品が一堂に並ぶ100周年締めくくりの大型展。",
        descriptionEn:
          "A special exhibition built around the Musée d'Orsay collection. As modernization advanced, how did artists depict everyday joy? Masterworks of Nabis and Impressionism gather for the show that closes the centenary year.",
      },
    ],
  },
  {
    title: "上野の森美術館",
    titleEn: "The Ueno Royal Museum",
    founded: 1972,
    region: "東京",
    city: "台東区上野公園",
    cityEn: "Ueno Park, Taito-ku",
    category: "私立 / 企画展・公募展",
    categoryEn: "Private / Special & Juried Shows",
    summary:
      "公益財団法人日本美術協会が運営する私立美術館。固定的なコレクションを持たず、国際的な大型企画展と若手登竜門の公募展（VOCA展、上野の森美術館大賞展ほか）を両輪で展開する、上野公園内のもう一つの拠点。",
    summaryEn:
      "A private museum operated by the Japan Art Association. With no permanent collection, it runs in parallel two engines — major international touring shows and juried exhibitions that have served as a gateway for younger artists (VOCA, the Ueno Royal Museum Grand Prize and others) — making it the other anchor inside Ueno Park.",
    why: "国立館とは違うフットワークで、現代の動向と海外巡回展を組み合わせる私立美術館のスタイルが見える。混雑必至の話題展は時間帯を選んで訪れたい。",
    whyEn:
      "With nimbler footwork than its national neighbors, it shows what the private-museum playbook looks like when it combines contemporary trends with international touring shows. For the inevitable blockbusters, pick your time slot carefully.",
    exhibitions2026: [
      {
        title: "VOCA展 2026 — 現代美術の展望 新しい平面の作家たち",
        titleEn: "VOCA 2026: Vision of Contemporary Art — New Painters of the Two-Dimensional",
        period: "2026年春",
        periodEn: "Spring 2026",
        description:
          "全国の学芸員・美術評論家の推薦で選ばれた40歳以下の若手作家による平面作品の展覧会。現代日本の絵画・写真・新メディアの最前線を、毎年の定点観測として追える同館の看板公募展。",
        descriptionEn:
          "An annual show of two-dimensional work by artists under 40, nominated by curators and critics from across Japan. The museum's flagship juried exhibition, it acts as an annual barometer of contemporary Japanese painting, photography and new media.",
      },
      {
        title: "大ゴッホ展 夜のカフェテラス",
        titleEn: "The Great Van Gogh: Café Terrace at Night",
        period: "2026年5月29日 — 8月12日",
        periodEn: "May 29 — August 12, 2026",
        url: "https://grand-van-gogh.com/",

        description:
          "クレラー＝ミュラー美術館所蔵の傑作『夜のカフェテラス』を中心に、ゴッホの代表作と関連資料を集めた大型企画展。アルル時代の色彩と筆致の革新を、油彩・素描・書簡で立体的に紹介する。",
        descriptionEn:
          "A major exhibition built around Café Terrace at Night from the Kröller-Müller Museum, gathering Van Gogh's signature works and related materials. The innovations of color and brushwork from his Arles period are presented in three dimensions through paintings, drawings and letters.",
      },
      {
        title: "シンシナティ美術館展 — アメリカに渡ったヨーロッパの至宝",
        titleEn: "Cincinnati Art Museum: European Treasures That Crossed to America",
        period: "2026年10月10日 — 2027年1月10日",
        periodEn: "October 10, 2026 — January 10, 2027",
        description:
          "米国オハイオ州のシンシナティ美術館コレクションから、欧州絵画の名品を紹介する特別展。米国の財団とコレクターが20世紀にどのように欧州美術を蓄積したかが見える、文化資本の地政学を読む展覧会。",
        descriptionEn:
          "A special exhibition of European painting masterpieces from the Cincinnati Art Museum in Ohio. The show reveals how American foundations and collectors built up European art in the 20th century — an exhibition for reading the geopolitics of cultural capital.",
      },
      {
        title: "第44回 上野の森美術館大賞展 / 第39回 日本の自然を描く展",
        titleEn: "44th Ueno Royal Museum Grand Prize / 39th Painting Nature of Japan Exhibition",
        period: "2026年予定",
        periodEn: "Scheduled for 2026",
        description:
          "同館を象徴する公募展2本。『大賞展』は写実から抽象まで現代日本の絵画を広く掬い、『日本の自然を描く展』は風景画というクラシックな主題で全国の作家を集める。日本のアマチュア／プロの裾野を知る窓口。",
        descriptionEn:
          "The two open-call shows that define the museum. The Grand Prize spans contemporary Japanese painting from realism to abstraction; Painting Nature of Japan gathers artists from around the country under the classic theme of landscape. A window onto the breadth of Japan's amateur and professional art scenes.",
      },
    ],
  },
  {
    title: "国立新美術館",
    titleEn: "The National Art Center, Tokyo",
    founded: 2007,
    region: "東京",
    city: "港区六本木",
    cityEn: "Roppongi, Minato-ku",
    category: "国立 / 企画展",
    categoryEn: "National / Special Exhibitions",
    architect: "黒川紀章",
    architectEn: "Kisho Kurokawa",
    summary:
      "コレクションを持たず、年間を通じて多彩な企画展と公募展を開催する『展覧会のための美術館』。波打つガラスファサードと吹き抜けロビーは、東京の現代建築を代表する空間のひとつ。",
    summaryEn:
      "A 'museum for exhibitions,' with no permanent collection, that hosts a wide range of special and juried shows year-round. Its undulating glass facade and soaring atrium make it one of the signature spaces of contemporary Tokyo architecture.",
    why: "美術館の役割が『所蔵』から『場の編集』へと拡張する流れを、最も体感しやすい一館。2026年度は『多様な美術表現』と『女性のクリエーション』をテーマに5本の大型企画が並ぶ。",
    whyEn:
      "The clearest place to feel the shift in the museum's role from 'collecting' to 'editing a space.' The 2026 season lines up five major projects under the themes of diverse artistic expression and women's creativity.",
    exhibitions2026: [
      {
        title: "テート美術館 — YBA & BEYOND 世界を変えた90s 英国アート",
        titleEn: "Tate: YBA & Beyond — 1990s British Art That Changed the World",
        period: "2026年2月11日 — 5月11日",
        periodEn: "February 11 — May 11, 2026",
        url: "https://www.nact.jp/exhibition_special/2026/ybabeyond/",

        description:
          "ダミアン・ハースト、トレイシー・エミン、サラ・ルーカスら『Young British Artists（YBA）』と1990年代以降の英国現代美術を、テート・コレクションから一望する大型企画展。",
        descriptionEn:
          "A major survey, drawn from the Tate collection, of Damien Hirst, Tracey Emin, Sarah Lucas and the rest of the Young British Artists (YBA) along with British contemporary art from the 1990s onward.",
      },
      {
        title: "生誕100年 森英恵 ヴァイタル・タイプ",
        titleEn: "Hanae Mori: Vital Type — 100 Years Since Her Birth",
        period: "2026年4月15日 — 7月6日",
        periodEn: "April 15 — July 6, 2026",
        url: "https://www.nact.jp/exhibition_special/2026/hanaemori/",

        description:
          "戦後日本のファッションを世界に押し上げたデザイナー・森英恵の生誕100年を記念する大規模回顧展。代表作の衣装、写真、映像で創作の全貌に迫る。",
        descriptionEn:
          "A large retrospective marking the 100th birthday of Hanae Mori, the designer who carried postwar Japanese fashion to the world stage. Signature garments, photographs and film offer a comprehensive view of her creative output.",
      },
      {
        title: "ピカソ meets ポール・スミス 遊び心の冒険へ",
        titleEn: "Picasso Meets Paul Smith: An Adventure in Play",
        period: "2026年予定",
        periodEn: "Scheduled for 2026",
        description:
          "20世紀美術の巨匠ピカソと、英国を代表するファッションデザイナー、ポール・スミスをクロスオーバーさせる異色の企画。色彩と遊び心という共通項で2人の創造を読み解く。",
        descriptionEn:
          "An unconventional pairing of the 20th-century master Picasso with the leading British fashion designer Paul Smith. The show reads their work through the shared lenses of color and playfulness.",
      },
      {
        title: "ルーヴル美術館展 ルネサンス",
        titleEn: "The Louvre: Renaissance",
        period: "2026年9月9日 — 12月13日",
        periodEn: "September 9 — December 13, 2026",
        url: "https://www.nact.jp/exhibition_special/2026/louvre2026/",

        description:
          "ルーヴル美術館の至宝を紹介するシリーズ最新章。日本初公開となるレオナルド・ダ・ヴィンチの作品を含むイタリア・ルネサンスの傑作群が一堂に並ぶ、2026年の目玉。",
        descriptionEn:
          "The latest chapter in the museum's Louvre treasures series. Italian Renaissance masterpieces — including a Leonardo da Vinci shown in Japan for the first time — gather in one place for one of the highlights of 2026.",
      },
      {
        title: "少女漫画・インフィニティ 萩尾望都×山岸凉子×大和和紀 三人展",
        titleEn: "Shojo Manga Infinity: Moto Hagio × Ryoko Yamagishi × Waki Yamato",
        period: "2026年10月28日 — 2027年2月8日",
        periodEn: "October 28, 2026 — February 8, 2027",
        description:
          "1970年代に少女漫画を芸術へと押し上げた3人の女性作家の原画と関連資料を網羅。漫画とアートの境界を更新する、世代を越えて訪れたい展覧会。",
        descriptionEn:
          "A comprehensive show of original drawings and related materials by the three women artists who elevated shojo manga to an art form in the 1970s. An exhibition that updates the boundary between manga and art, worth seeing across generations.",
      },
    ],
  },
  {
    title: "森美術館",
    titleEn: "Mori Art Museum",
    founded: 2003,
    region: "東京",
    city: "港区六本木",
    cityEn: "Roppongi, Minato-ku",
    category: "現代美術 / 私立",
    categoryEn: "Contemporary / Private",
    summary:
      "六本木ヒルズ森タワー53階に位置する、日本の現代アートシーンを牽引する美術館。アジアの新しい才能の紹介と、社会・テクノロジー・環境を主題にした企画が特徴。",
    summaryEn:
      "Located on the 53rd floor of Roppongi Hills Mori Tower, this museum leads Japan's contemporary art scene. It is known for introducing new talent from Asia and for exhibitions that take society, technology and the environment as their subject.",
    why: "アートが社会や経済のテーマをどう批評するかを最前線で観察できる。2026年度は『時間と人間の本質を問う』ことをテーマに、海外の巨匠と日本の重要作家の個展が並ぶ。",
    whyEn:
      "A front-row seat for watching how art critiques the themes of society and economy. The 2026 season pairs solo shows by an international master and a major Japanese artist under the theme of questioning time and the essence of being human.",
    exhibitions2026: [
      {
        title: "ロン・ミュエク展",
        titleEn: "Ron Mueck",
        period: "2026年4月29日 — 9月23日",
        periodEn: "April 29 — September 23, 2026",
        url: "https://www.mori.art.museum/jp/exhibitions/ronmueck/",

        description:
          "等身大を超えるハイパーリアリズム彫刻で知られるオーストラリア出身の作家、ロン・ミュエクの日本では16年ぶりとなる個展。生・老・死をめぐる作品が、人間の身体感覚を揺さぶる。",
        descriptionEn:
          "The first solo exhibition in Japan in 16 years for the Australian-born artist known for hyperrealist sculpture at scales beyond life-size. His work on life, aging and death unsettles our sense of the human body.",
      },
      {
        title: "森万里子展",
        titleEn: "Mariko Mori",
        period: "2026年10月31日 — 2027年3月28日",
        periodEn: "October 31, 2026 — March 28, 2027",
        url: "https://www.mori.art.museum/jp/exhibitions/marikomori/index.html",

        description:
          "国内では2002年の東京都現代美術館『森万里子ピュアランド』以来24年ぶりの大規模美術館個展。インスタレーション、彫刻、映像、ドローイング、パフォーマンスなど30年以上の実践から約80点が一堂に会する。",
        descriptionEn:
          "Her first major museum solo show in Japan in 24 years, since 'Mariko Mori: Pure Land' at MOT in 2002. About 80 works drawn from more than 30 years of practice — installation, sculpture, video, drawing and performance — come together in a single space.",
      },
    ],
  },
  {
    title: "アーティゾン美術館",
    titleEn: "Artizon Museum",
    founded: 2020,
    region: "東京",
    city: "中央区京橋",
    cityEn: "Kyobashi, Chuo-ku",
    category: "私立 / 印象派・近代",
    categoryEn: "Private / Impressionism & Modern",
    summary:
      "旧ブリヂストン美術館がリブランドして開館。石橋財団の世界有数の印象派・近代美術コレクションを、日時指定予約制でゆとりある鑑賞体験として提供する。",
    summaryEn:
      "The rebranded successor to the former Bridgestone Museum of Art. It presents the Ishibashi Foundation's world-class collection of Impressionist and modern art under a timed-entry reservation system, in unhurried viewing conditions.",
    why: "戦後日本の財団がいかに西洋近代絵画を蓄積してきたか、文化資本の歴史が見える場所。2026年は印象派の巨匠と日本の前衛、現代アーティストとの対話が交差する一年。",
    whyEn:
      "A place to see the history of cultural capital — how a postwar Japanese foundation built up a collection of modern Western painting. In 2026, dialogues among an Impressionist master, the Japanese avant-garde and contemporary artists intersect across the year.",
    exhibitions2026: [
      {
        title: "クロード・モネ — 風景への問いかけ",
        titleEn: "Claude Monet: Questioning the Landscape",
        period: "2026年2月7日 — 5月24日",
        periodEn: "February 7 — May 24, 2026",
        url: "https://www.artizon.museum/exhibition_sp/monet2026/",

        description:
          "印象派の中核としてのモネを『風景画家』として再考する企画展。没後100年に合わせ、石橋財団コレクションと国内外の名品で、モネが生涯にわたり問い続けた『見ること』を辿る。",
        descriptionEn:
          "An exhibition reconsidering Monet, the core of Impressionism, as a 'landscape painter.' Marking the centenary of his death, it traces — through the Ishibashi Foundation collection and masterpieces from Japan and abroad — the question of 'seeing' that Monet pursued throughout his life.",
      },
      {
        title: "瀧口修造 書くことと描くこと",
        titleEn: "Shuzo Takiguchi: Writing and Drawing",
        period: "2026年6月23日 — 10月4日",
        periodEn: "June 23 — October 4, 2026",
        description:
          "戦後日本の前衛詩人にしてシュルレアリスム最大の理論的支柱、瀧口修造の言葉と造形を横断する大型企画。詩・批評・デカルコマニーまで全方位的にその仕事を再評価する。",
        descriptionEn:
          "A large-scale project crossing words and forms in the work of Shuzo Takiguchi, postwar Japan's avant-garde poet and the foremost theoretical pillar of Surrealism. The show reassesses his output across poetry, criticism and decalcomania.",
      },
      {
        title: "エトランゼたち(仮題)",
        titleEn: "Strangers (working title)",
        period: "2026年10月24日 — 2027年1月31日",
        periodEn: "October 24, 2026 — January 31, 2027",
        description:
          "『異邦人』としての視点をテーマに、20世紀以降の作家たちが土地と所属の境界をどう描いたかを問う企画。同時代の越境的な美術史を組み立て直す試み。",
        descriptionEn:
          "Taking the viewpoint of the 'foreigner' as its theme, this project asks how artists since the 20th century have depicted the boundaries of land and belonging — an attempt to reassemble a transnational history of contemporary art.",
      },
      {
        title: "エットレ・ソットサス(仮題) / ジャム・セッション 藤井光",
        titleEn: "Ettore Sottsass (working title) / Jam Session: Hikaru Fujii",
        period: "2026年夏 — 2027年初頭",
        periodEn: "Summer 2026 — early 2027",
        description:
          "日本初の本格回顧展となるイタリアのデザイナー、エットレ・ソットサス展に加え、現代美術家・藤井光と石橋財団コレクションを掛け合わせる『ジャム・セッション』の2本も予定。",
        descriptionEn:
          "Plans include the first full-scale Japanese retrospective of the Italian designer Ettore Sottsass, plus a 'Jam Session' that pairs contemporary artist Hikaru Fujii with the Ishibashi Foundation collection.",
      },
    ],
  },
  {
    title: "京都市京セラ美術館",
    titleEn: "Kyoto City KYOCERA Museum of Art",
    founded: 1933,
    region: "京都",
    city: "京都市左京区岡崎",
    cityEn: "Okazaki, Sakyo-ku, Kyoto",
    category: "公立 / 近現代",
    categoryEn: "Public / Modern & Contemporary",
    architect: "前田健二郎（1933年）／青木淳・西澤徹夫（2020年リニューアル）",
    architectEn: "Kenjiro Maeda (1933) / Jun Aoki & Tetsuo Nishizawa (2020 renovation)",
    summary:
      "1933年開館の旧京都市美術館。2020年に青木淳・西澤徹夫の設計でリニューアルし、地下に新エントランス『ガラス・リボン』を設けて公園と一体化させた。京都市現代美術コレクションを核に、近代日本画から海外巡回展まで横断的に扱う関西最大級の総合美術館。",
    summaryEn:
      "The former Kyoto Municipal Museum of Art, opened in 1933. Renovated in 2020 by Jun Aoki and Tetsuo Nishizawa, who added a new underground entrance — the Glass Ribbon — that knits the building into the surrounding park. Built around Kyoto's contemporary art collection, it is one of Kansai's largest general museums, spanning modern Japanese painting to international touring shows.",
    why: "戦前のクラシカルな本館と、令和のリノベーション建築が同居する稀有な空間。2026年はジブリ・浮世絵・写真祭・YBA英国アートと、ポップから現代美術まで振れ幅の大きい一年。",
    whyEn:
      "A rare space where the prewar classical main building and a Reiwa-era renovation coexist. 2026 swings widely from Studio Ghibli and ukiyo-e to a photo festival and YBA British art — pop culture to contemporary art in one year.",
    exhibitions2026: [
      {
        title: "KYOTOGRAPHIE 京都国際写真祭 2026",
        titleEn: "KYOTOGRAPHIE International Photography Festival 2026",
        period: "2026年4月18日 — 5月17日",
        periodEn: "April 18 — May 17, 2026",
        url: "https://www.kyotographie.jp/",

        description:
          "京都市内全域を会場に開催される国際写真祭のメイン会場のひとつ。海外作家の初公開作と日本人若手のキュレーション展示が並び、写真というメディアの『いま』を一気に俯瞰できる毎春の定点観測。",
        descriptionEn:
          "One of the main venues of the international photography festival held across Kyoto. World-premiere works by international artists sit alongside curated shows of younger Japanese photographers — an annual spring snapshot that lets you take in the 'now' of photography in one sweep.",
      },
      {
        title: "テート美術館 — YBA & BEYOND 世界を変えた90s 英国アート",
        titleEn: "Tate: YBA & Beyond — 1990s British Art That Changed the World",
        period: "2026年6月3日 — 9月6日",
        periodEn: "June 3 — September 6, 2026",
        description:
          "国立新美術館（東京）と巡回する大型企画の関西会場。ダミアン・ハースト、トレイシー・エミンらYBA世代と1990年代以降の英国現代美術を、テート・コレクションから一望できる。",
        descriptionEn:
          "The Kansai leg of the major exhibition touring with The National Art Center, Tokyo. From the Tate collection, take in Damien Hirst, Tracey Emin and the rest of the YBA generation, plus British contemporary art from the 1990s onward.",
      },
      {
        title: "浮世絵スーパークリエイター 歌川国芳展",
        titleEn: "Ukiyo-e Super Creator: Utagawa Kuniyoshi",
        period: "2026年7月18日 — 9月23日",
        periodEn: "July 18 — September 23, 2026",
        url: "https://kyotocity-kyocera.museum/exhibition/20260718-20260923",

        description:
          "幕末江戸の鬼才・歌川国芳の大規模回顧展。武者絵、戯画、洋風表現、猫絵まで国芳の振り幅の広さを総覧し、現代マンガ・アニメへの影響まで射程に入れる構成。",
        descriptionEn:
          "A large retrospective of Utagawa Kuniyoshi, the maverick genius of late-Edo Tokyo. Warrior prints, comic prints, Western-influenced styles and his famous cat pictures together survey his enormous range, with the show extending its scope to his influence on contemporary manga and anime.",
      },
      {
        title: "生誕140年記念 染織家 山鹿清華 — 宙翔ぶイマジネーション",
        titleEn: "Seika Yamaga at 140: Imagination Soaring Through the Heavens",
        period: "2026年9月19日 — 12月20日",
        periodEn: "September 19 — December 20, 2026",
        description:
          "京都を拠点に近代日本の染織界を牽引した山鹿清華の生誕140年を期する大規模個展。京都ならではの工芸文脈で、デザイン史とテクスチャーの革新を辿る。",
        descriptionEn:
          "A major solo show marking the 140th birthday of Seika Yamaga, the Kyoto-based textile artist who led modern Japanese dyeing and weaving. Within a uniquely Kyoto craft context, it traces innovation in design history and texture.",
      },
      {
        title: "禅とジブリ展",
        titleEn: "Zen and Ghibli",
        period: "2026年10月3日 — 12月6日",
        periodEn: "October 3 — December 6, 2026",
        description:
          "スタジオジブリと禅文化を交差させる企画展。京都という土地で『禅』のイメージとジブリ作品の絵づくりを照らし合わせ、日本のアニメーションと宗教美術の関係を掘る話題作。",
        descriptionEn:
          "An exhibition crossing Studio Ghibli with Zen culture. From its Kyoto location, the show holds the imagery of Zen up against the picture-making of Ghibli's films, digging into the relationship between Japanese animation and religious art.",
      },
    ],
  },
  {
    title: "ポーラ美術館",
    titleEn: "Pola Museum of Art",
    founded: 2002,
    region: "神奈川",
    city: "足柄下郡箱根町",
    cityEn: "Hakone, Ashigarashimo District",
    category: "私立 / 印象派・近代",
    categoryEn: "Private / Impressionism & Modern",
    architect: "日建設計",
    architectEn: "Nikken Sekkei",
    summary:
      "箱根・仙石原の森の中に埋め込まれるように建つ美術館。創業家のコレクションを核に、モネ、ルノワール、セザンヌら印象派と20世紀絵画を約1万点所蔵する。",
    summaryEn:
      "A museum embedded into the forest of Sengokuhara in Hakone. Built around the founding family's collection, it holds some 10,000 works of Impressionist and 20th-century painting, including Monet, Renoir and Cézanne.",
    why: "化粧品メーカーの企業コレクションが、地方創生と文化振興にどう寄与しているかが分かる。2026年は開館25周年、モネ没後100年というふたつの節目が重なる特別な一年。",
    whyEn:
      "A clear case study of how a cosmetics company's corporate collection contributes to regional revitalization and cultural promotion. 2026 is a special year in which two milestones overlap: the museum's 25th anniversary and the centenary of Monet's death.",
    exhibitions2026: [
      {
        title: "SPRING わきあがる鼓動",
        titleEn: "SPRING: A Surging Pulse",
        period: "2025年12月13日 — 2026年5月31日",
        periodEn: "December 13, 2025 — May 31, 2026",
        url: "https://www.polamuseum.or.jp/exhibition/",

        description:
          "アートにおける『飛躍する力』をテーマに、絵画・彫刻・工芸・インスタレーションを横断的に紹介。私たちの存在と感性を揺さぶる作品群で『生命のリズム』を体感する企画。",
        descriptionEn:
          "Taking the 'force of leaping forward' as its theme, the show cuts across painting, sculpture, craft and installation. A project to feel the 'rhythm of life' through works that shake our being and sensibility.",
      },
      {
        title: "開館25周年記念 没後100年 モネ×現代アート(仮)",
        titleEn: "25th Anniversary: Monet × Contemporary Art, 100 Years After His Death (working title)",
        period: "2026年6月17日 — 2027年4月7日（予定）",
        periodEn: "June 17, 2026 — April 7, 2027 (planned)",
        url: "https://www.polamuseum.or.jp/exhibition/",

        description:
          "ポーラ美術館の開館25周年と、クロード・モネ没後100年を記念する大型企画。世界有数の質を誇るポーラのモネ・コレクションを一堂に展観し、現代アーティストとの対話を通じてモネが現代に投げかける問いを浮かび上がらせる。",
        descriptionEn:
          "A major project commemorating the museum's 25th anniversary and the centenary of Claude Monet's death. Pola's Monet collection — among the finest anywhere — is shown together, while a dialogue with contemporary artists brings into view the questions Monet still poses today.",
      },
    ],
  },
];

const categories = Array.from(new Set(museums.map((m) => m.category)));
const categoriesEn = Array.from(new Set(museums.map((m) => m.categoryEn)));
const regions = Array.from(new Set(museums.map((m) => m.region)));

function RegionBadge({ region }: { region: Region }) {
  return (
    <span
      className="inline-flex items-center justify-center rounded-md text-[10px] font-bold tracking-wide px-2 py-1"
      style={{
        backgroundColor: `${ACCENT}14`,
        color: ACCENT,
      }}
    >
      <T ja={region} en={regionEn[region]} />
    </span>
  );
}

export default function MuseumsSpecial2026Page() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <ArticleJsonLd
        title={TITLE}
        description={SUMMARY}
        datePublished="2026-04-09"
        author="The Brief"
        url={URL}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", href: "/" },
          { name: "Column", href: "/column" },
          { name: "美術館特集 2026", href: "/column/museums-special-2026" },
        ]}
      />

      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-[11px] text-foreground/45 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/column" className="hover:text-foreground transition-colors">Column</Link>
        <span>/</span>
        <span><T ja="美術館特集 2026" en="Museums Special 2026" /></span>
      </div>

      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-[30px] border px-6 py-10 md:px-10 md:py-14"
        style={{
          borderColor: `${ACCENT}33`,
          background: `linear-gradient(135deg, ${ACCENT}14, ${COLUMN_COLOR}08, rgba(255,255,255,0.6))`,
        }}
      >
        <span
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[2.8px]"
          style={{
            color: ACCENT,
            borderColor: `${ACCENT}40`,
            backgroundColor: `${ACCENT}12`,
          }}
        >
          Special / Museums 2026
        </span>
        <h1 className="mt-4 font-serif text-3xl md:text-5xl font-bold leading-tight">
          <T
            ja={
              <>
                一度は訪れたい、
                <br className="hidden sm:block" />
                日本の美術館8選
              </>
            }
            en={
              <>
                8 Japanese Museums
                <br className="hidden sm:block" />
                Worth Visiting at Least Once
              </>
            }
          />
        </h1>
        <p className="mt-5 max-w-2xl text-sm md:text-[15px] leading-relaxed text-foreground/70">
          <T
            ja="建築・コレクション・地域性。2026年に体験したい日本の美術館を、上野・京橋・六本木から京都・箱根まで8館に絞って紹介します。各館の見どころに加え、2026年に開催される企画展のラインナップを一覧でまとめました。"
            en="Architecture, collections and a sense of place. Eight Japanese museums to experience in 2026, from Ueno, Kyobashi and Roppongi to Kyoto and Hakone. For each, we cover the highlights and lay out the lineup of special exhibitions running through the year."
          />
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((c, i) => (
            <span
              key={c}
              className="text-[10px] px-2.5 py-1 rounded-full font-medium"
              style={{
                color: ACCENT,
                backgroundColor: `${ACCENT}12`,
              }}
            >
              <T ja={c} en={categoriesEn[i]} />
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3 flex-wrap">
          <span className="text-[10px] uppercase tracking-[1.5px] text-foreground/45">
            <T ja="掲載エリア" en="Featured Regions" />
          </span>
          {regions.map((r) => (
            <RegionBadge key={r} region={r} />
          ))}
        </div>
        <p className="mt-3 text-[11px] text-foreground/50 leading-relaxed">
          <T
            ja="※ 開館時間・休館日・企画展のスケジュールは2026年4月時点で公表されている情報をもとに編集しています。会期・名称は変更される可能性があるため、訪問前に各館の公式情報をご確認ください。"
            en="* Opening hours, closing days and exhibition schedules are based on information publicly available as of April 2026. Dates and titles are subject to change — please check each museum's official information before visiting."
          />
        </p>
      </section>

      {/* Exhibition Calendar */}
      <section className="mt-10">
        <ExhibitionCalendar museums={museums} accent={ACCENT} />
      </section>

      {/* Museums */}
      <section className="mt-10">
        <div className="mb-4 flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-bold">
            <T ja="セレクト8館" en="The 8 Selections" />
          </h2>
          <span className="text-[11px] uppercase tracking-[2px] text-foreground/40">
            {museums.length} museums
          </span>
        </div>

        <div className="space-y-4">
          {museums.map((m, i) => (
            <article
              key={m.titleEn}
              className="p-6 rounded-xl border border-brief-border bg-brief-card"
            >
              <div className="flex items-center gap-2 mb-3 flex-wrap">
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold tracking-wide"
                  style={{
                    color: ACCENT,
                    backgroundColor: `${ACCENT}12`,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-md font-semibold"
                  style={{
                    color: COLUMN_COLOR,
                    backgroundColor: `${COLUMN_COLOR}12`,
                  }}
                >
                  <T ja={m.category} en={m.categoryEn} />
                </span>
                <RegionBadge region={m.region} />
                <span className="text-[10px] tabular-nums text-foreground/45">
                  <T ja={`開館 ${m.founded}`} en={`Est. ${m.founded}`} />
                </span>
              </div>

              <h3 className="font-serif text-xl md:text-2xl font-bold leading-snug">
                <T ja={m.title} en={m.titleEn} />
              </h3>
              <p className="mt-1 text-[11px] tracking-[1px] text-foreground/40 font-medium uppercase">
                <T
                  ja={
                    <>
                      {m.titleEn} · {m.city}
                      {m.architect ? ` · 設計: ${m.architect}` : ""}
                    </>
                  }
                  en={
                    <>
                      {m.titleEn} · {m.cityEn}
                      {m.architectEn ? ` · Architect: ${m.architectEn}` : ""}
                    </>
                  }
                />
              </p>

              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">
                <T ja={m.summary} en={m.summaryEn} />
              </p>

              <div className="mt-3 p-3 rounded-lg border border-dashed border-brief-border">
                <p className="text-[11px] uppercase tracking-[1.5px] text-foreground/45 mb-1">
                  Why TheBrief
                </p>
                <p className="text-xs text-foreground/65 leading-relaxed">
                  <T ja={m.why} en={m.whyEn} />
                </p>
              </div>

              {m.note && (
                <div
                  className="mt-3 p-3 rounded-lg border text-[11px] leading-relaxed"
                  style={{
                    borderColor: `${ACCENT}33`,
                    backgroundColor: `${ACCENT}08`,
                    color: "rgb(var(--foreground) / 0.7)",
                  }}
                >
                  <span className="font-semibold mr-1" style={{ color: ACCENT }}>
                    Note
                  </span>
                  <T ja={m.note} en={m.noteEn ?? m.note} />
                </div>
              )}

              {/* 2026 exhibitions */}
              <div className="mt-5">
                <div className="flex items-baseline justify-between mb-2">
                  <p
                    className="text-[10px] uppercase tracking-[1.8px] font-bold"
                    style={{ color: ACCENT }}
                  >
                    2026 Exhibitions
                  </p>
                  <span className="text-[10px] text-foreground/40 tabular-nums">
                    <T
                      ja={`${m.exhibitions2026.length} 本`}
                      en={`${m.exhibitions2026.length} ${m.exhibitions2026.length === 1 ? "show" : "shows"}`}
                    />
                  </span>
                </div>

                <ol className="space-y-3">
                  {m.exhibitions2026.map((ex, j) => (
                    <li
                      key={`${m.titleEn}-ex-${j}`}
                      className="p-3 rounded-lg border border-brief-border"
                      style={{ backgroundColor: `${ACCENT}06` }}
                    >
                      <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                        <span
                          className="text-[10px] tabular-nums font-bold"
                          style={{ color: ACCENT }}
                        >
                          {String(j + 1).padStart(2, "0")}
                        </span>
                        <h4 className="text-[13px] md:text-sm font-bold leading-snug text-foreground/90">
                          <T ja={ex.title} en={ex.titleEn} />
                        </h4>
                      </div>
                      <p
                        className="text-[10px] tabular-nums mb-1.5"
                        style={{ color: ACCENT }}
                      >
                        <T
                          ja={`会期: ${ex.period}`}
                          en={`Dates: ${ex.periodEn}`}
                        />
                      </p>
                      <p className="text-[12px] text-foreground/65 leading-relaxed">
                        <T ja={ex.description} en={ex.descriptionEn} />
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </article>
          ))}
        </div>
      </section>

      <RecommendedReads currentSlug="museums-special-2026" currentTags={["美術館", "文化", "アート", "特集"]} />

      {/* Footer nav */}
      <div className="mt-10 flex items-center justify-between gap-4 p-5 rounded-xl border border-brief-border bg-brief-card">
        <p className="text-sm text-foreground/60">
          <T
            ja="特集は不定期で更新します。映画・読書・ドキュメンタリー特集もあわせてどうぞ。"
            en="Specials are updated from time to time. See also our features on movies, reading and documentaries."
          />
        </p>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="/column/movies-special"
            className="text-xs font-semibold underline underline-offset-4"
            style={{ color: ACCENT }}
          >
            <T ja="映画特集 →" en="Movies Special →" />
          </Link>
          <Link
            href="/column"
            className="text-xs font-semibold underline underline-offset-4 text-foreground/60"
          >
            <T ja="Columnへ戻る" en="Back to Column" />
          </Link>
        </div>
      </div>
    </div>
  );
}
