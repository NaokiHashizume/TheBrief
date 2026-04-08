import type { Metadata } from "next";
import Link from "next/link";
import { T } from "@/components/T";
import {
  houseOfRepresentatives,
  houseOfCouncillors,
  HOUSE_TOTAL,
  COUNCIL_TOTAL,
} from "@/lib/politics";
import { SeatChart, CoalitionIndicator } from "@/components/SeatChart";

const dietHistory = [
  {
    year: "1868",
    tag: "明治維新",
    tagEn: "Meiji Restoration",
    title: "明治維新と近代国家の出発",
    titleEn: "The Meiji Restoration and the Birth of a Modern State",
    description:
      "王政復古の大号令により江戸幕府が倒れ、明治新政府が発足。五箇条の御誓文で「広ク会議ヲ興シ万機公論ニ決スベシ」と宣言し、議会制度の理念が初めて国家方針として示された。",
    descriptionEn:
      "The Decree for the Restoration of Imperial Rule brought down the Tokugawa shogunate and established the new Meiji government. The Charter Oath declared that “deliberative assemblies shall be widely established and all matters decided by public discussion,” marking the first time the ideal of a parliamentary system was set as national policy.",
  },
  {
    year: "1874",
    tag: "自由民権運動",
    tagEn: "Freedom and People's Rights Movement",
    title: "民撰議院設立建白書",
    titleEn: "Petition for the Establishment of an Elected Assembly",
    description:
      "板垣退助・後藤象二郎らが政府に「民撰議院設立建白書」を提出し、国民の代表による議会の開設を求めた。これを契機に自由民権運動が全国に広がり、各地で政治結社や私擬憲法が生まれた。",
    descriptionEn:
      "Itagaki Taisuke, Gotō Shōjirō, and others submitted the Petition for the Establishment of an Elected Assembly to the government, calling for a legislature composed of elected representatives. This spurred the nationwide spread of the Freedom and People's Rights Movement, giving rise to political associations and privately drafted constitutions across the country.",
  },
  {
    year: "1881",
    tag: "国会開設の勅諭",
    tagEn: "Imperial Edict on Opening the Diet",
    title: "明治天皇、国会開設を約束",
    titleEn: "Emperor Meiji Pledges to Open the Diet",
    description:
      "明治天皇が「国会開設の勅諭」を発し、1890年に国会を開くことを公約。これに応じて自由党（板垣退助）、立憲改進党（大隈重信）などの政党が結成され、近代政党政治の基盤が作られた。",
    descriptionEn:
      "Emperor Meiji issued the Imperial Edict on Opening the Diet, pledging to convene a national assembly in 1890. In response, parties such as the Liberal Party (led by Itagaki Taisuke) and the Constitutional Progressive Party (led by Ōkuma Shigenobu) were formed, laying the foundations of modern party politics.",
  },
  {
    year: "1889",
    tag: "大日本帝国憲法",
    tagEn: "Constitution of the Empire of Japan",
    title: "大日本帝国憲法の発布",
    titleEn: "Promulgation of the Meiji Constitution",
    description:
      "伊藤博文がプロイセン（ドイツ）の憲法を参考に起草した大日本帝国憲法が発布された。天皇主権のもと帝国議会（貴族院・衆議院）の設置が規定されたが、議会の権限は限定的で、天皇の統帥権や勅令による立法が認められていた。",
    descriptionEn:
      "The Constitution of the Empire of Japan, drafted by Itō Hirobumi with reference to the Prussian (German) constitution, was promulgated. It provided for an Imperial Diet (House of Peers and House of Representatives) under imperial sovereignty, but the Diet's powers were limited; the Emperor retained supreme command of the military and the authority to legislate by imperial ordinance.",
  },
  {
    year: "1890",
    tag: "帝国議会",
    tagEn: "Imperial Diet",
    title: "第1回帝国議会の開会",
    titleEn: "Opening of the First Imperial Diet",
    description:
      "アジア初の近代的議会として帝国議会が開会。衆議院は制限選挙（直接国税15円以上を納める25歳以上の男子）により選ばれた300名の議員で構成された。有権者は全人口の約1.1%に過ぎなかった。",
    descriptionEn:
      "The Imperial Diet convened as Asia's first modern legislature. The House of Representatives comprised 300 members chosen by a restricted franchise (men aged 25 or older paying at least 15 yen in direct national taxes). Eligible voters made up only about 1.1% of the population.",
  },
  {
    year: "1925",
    tag: "普通選挙法",
    tagEn: "Universal Manhood Suffrage Law",
    title: "普通選挙法の成立",
    titleEn: "Enactment of Universal Manhood Suffrage",
    description:
      "納税資格を撤廃し、25歳以上のすべての男子に選挙権が付与された。有権者は約330万人から約1,240万人へと約4倍に拡大。同時に治安維持法も成立し、社会運動への弾圧が強化された。",
    descriptionEn:
      "Tax-based qualifications were abolished and all men aged 25 or older were granted the right to vote. The electorate roughly quadrupled, from about 3.3 million to about 12.4 million. At the same time, the Peace Preservation Law was enacted, tightening suppression of social movements.",
  },
  {
    year: "1932",
    tag: "政党政治の終焉",
    tagEn: "End of Party Government",
    title: "五・一五事件と政党内閣の崩壊",
    titleEn: "The May 15 Incident and the Collapse of Party Cabinets",
    description:
      "海軍青年将校らが犬養毅首相を暗殺。以後、軍部の台頭により政党内閣は終わりを迎え、軍人や官僚を中心とする挙国一致内閣が続いた。帝国議会は形骸化し、軍部の意向が政策を左右する時代に突入した。",
    descriptionEn:
      "Young naval officers assassinated Prime Minister Inukai Tsuyoshi. With the rise of the military, party cabinets came to an end and were succeeded by a series of national-unity cabinets dominated by military officers and bureaucrats. The Imperial Diet was reduced to a formality as the military's will increasingly dictated policy.",
  },
  {
    year: "1945",
    tag: "終戦と民主化",
    tagEn: "End of War and Democratization",
    title: "ポツダム宣言受諾と戦後改革",
    titleEn: "Acceptance of the Potsdam Declaration and Postwar Reforms",
    description:
      "日本がポツダム宣言を受諾し終戦。GHQ（連合国軍最高司令官総司令部）の指導のもと民主化改革が進められた。女性参政権が認められ、1946年4月の総選挙で初めて女性が投票・立候補し、39名の女性議員が誕生した。",
    descriptionEn:
      "Japan accepted the Potsdam Declaration, ending the war. Under the guidance of GHQ (General Headquarters of the Supreme Commander for the Allied Powers), democratic reforms were carried out. Women were granted suffrage, and in the April 1946 general election women voted and stood for office for the first time, producing 39 female Diet members.",
  },
  {
    year: "1947",
    tag: "日本国憲法",
    tagEn: "Constitution of Japan",
    title: "日本国憲法の施行と国会の誕生",
    titleEn: "The Constitution of Japan Takes Effect and the Diet Is Reborn",
    description:
      "日本国憲法が施行され、国会は「国権の最高機関」かつ「唯一の立法機関」と位置づけられた。貴族院は廃止され参議院に替わり、主権は天皇から国民へ移った。現在の二院制がここに始まる。",
    descriptionEn:
      "The Constitution of Japan took effect, defining the Diet as “the highest organ of state power” and “the sole law-making organ of the State.” The House of Peers was abolished and replaced by the House of Councillors, and sovereignty shifted from the Emperor to the people. The current bicameral system dates from this moment.",
  },
  {
    year: "1955",
    tag: "55年体制",
    tagEn: "The 1955 System",
    title: "自由民主党の結党と55年体制の成立",
    titleEn: "Founding of the LDP and Establishment of the 1955 System",
    description:
      "自由党と日本民主党が合併し自由民主党が誕生（保守合同）。左右に分裂していた社会党も統一され、自民党と社会党の二大政党制（55年体制）が確立。以後38年間、自民党が一貫して政権を担い、高度経済成長を推進した。",
    descriptionEn:
      "The Liberal Party and the Japan Democratic Party merged to form the Liberal Democratic Party (the conservative merger). The Socialist Party, previously split between left and right factions, was also reunited, establishing a two-party system between the LDP and the Socialists known as the 1955 System. For the next 38 years the LDP continuously held power and drove Japan's rapid economic growth.",
  },
  {
    year: "1993",
    tag: "55年体制の崩壊",
    tagEn: "Collapse of the 1955 System",
    title: "非自民連立政権の誕生",
    titleEn: "Birth of a Non-LDP Coalition Government",
    description:
      "自民党が分裂し、日本新党の細川護熙を首班とする非自民・非共産の連立政権が成立。55年体制が崩壊し、小選挙区比例代表並立制が導入された。以後、政党の離合集散が繰り返される流動的な政治状況が続く。",
    descriptionEn:
      "The LDP split and a non-LDP, non-Communist coalition government was formed under Hosokawa Morihiro of the Japan New Party. The 1955 System collapsed, and a parallel system of single-member districts and proportional representation was introduced. A fluid political landscape of repeated party realignments has continued since.",
  },
  {
    year: "2009",
    tag: "政権交代",
    tagEn: "Change of Government",
    title: "民主党への政権交代",
    titleEn: "Power Shifts to the Democratic Party of Japan",
    description:
      "民主党が衆議院選挙で308議席を獲得し歴史的大勝。鳩山由紀夫内閣が発足し、戦後初の本格的な政権交代が実現した。しかし普天間基地問題、東日本大震災への対応などで支持を失い、2012年に自民党が政権を奪還。",
    descriptionEn:
      "The Democratic Party of Japan won a historic landslide of 308 seats in the House of Representatives election. The Hatoyama Yukio cabinet was formed, marking the first full-fledged change of government in the postwar era. The DPJ lost public support over issues such as the Futenma base relocation and its response to the Great East Japan Earthquake, and the LDP returned to power in 2012.",
  },
  {
    year: "2012",
    tag: "自民党復権",
    tagEn: "LDP Returns to Power",
    title: "安倍内閣の発足とアベノミクス",
    titleEn: "The Abe Cabinet and Abenomics",
    description:
      "第2次安倍内閣が発足。大胆な金融緩和・機動的な財政政策・成長戦略の「三本の矢」（アベノミクス）で経済再生を推進した。安倍晋三は連続在職日数2,822日を記録し憲政史上最長の首相となったが、2020年に体調不良で辞任。",
    descriptionEn:
      "The second Abe cabinet was formed, pursuing economic revival through the “three arrows” of Abenomics: bold monetary easing, flexible fiscal policy, and a growth strategy. Abe Shinzō served a record 2,822 consecutive days in office, becoming the longest-serving prime minister in Japan's constitutional history, before resigning in 2020 due to health problems.",
  },
  {
    year: "2025–26",
    tag: "現在",
    tagEn: "Present",
    title: "高市内閣と第221回国会",
    titleEn: "The Takaichi Cabinet and the 221st Diet",
    description:
      "2025年10月の自民党総裁選で高市早苗が史上初の女性総裁に選出され、第1次高市内閣が発足。2026年2月の第51回衆院選で自民党が316議席を獲得し歴史的大勝。現在、第221回特別国会が開会中。経済安全保障、防衛力強化、少子化対策が主要課題。",
    descriptionEn:
      "In October 2025, Takaichi Sanae was elected as the LDP's first-ever female president, and the first Takaichi cabinet was formed. In the 51st House of Representatives election in February 2026, the LDP won a historic landslide of 316 seats. The 221st special session of the Diet is currently in progress, with economic security, strengthening defense capabilities, and measures against the declining birthrate as the main agenda.",
  },
];

export const metadata: Metadata = {
  title: "国会 — 衆議院・参議院の構成",
  description:
    "日本の国会を構成する衆議院と参議院の役割、政党別議席数をわかりやすく解説します。",
  alternates: { canonical: "https://thebrief.info/politics/diet" },
};

function ChamberExplainer({
  title,
  titleEn,
  points,
}: {
  title: string;
  titleEn: string;
  points: { label: React.ReactNode; value: React.ReactNode; key: string }[];
}) {
  return (
    <div className="p-5 bg-brief-card rounded-xl">
      <h4 className="font-serif font-bold text-lg">{title}</h4>
      <span className="text-[9px] tracking-[2px] uppercase text-foreground/50">{titleEn}</span>
      <dl className="mt-4 space-y-2">
        {points.map((p) => (
          <div key={p.key} className="flex gap-3">
            <dt className="text-xs text-foreground/55 w-24 flex-shrink-0 pt-0.5">{p.label}</dt>
            <dd className="text-sm text-foreground/70 leading-relaxed">{p.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function DietPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs text-foreground/50 mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/politics" className="hover:text-foreground transition-colors">Politics</Link>
        <span>/</span>
        <span><T ja="国会" en="National Diet" /></span>
      </div>

      <h1 className="font-serif text-3xl md:text-4xl font-bold"><T ja="国会" en="National Diet" /></h1>
      <p className="mt-3 text-sm text-foreground/60 leading-relaxed">
        <T ja="日本の国会は、衆議院（下院）と参議院（上院）の二院制で構成されています。両院はそれぞれ異なる役割と権限を持ち、法律の制定・予算の議決・条約の承認などを行います。" en="Japan's National Diet is a bicameral legislature composed of the House of Representatives (lower house) and the House of Councillors (upper house). Each chamber has distinct roles and powers, including enacting laws, approving budgets, and ratifying treaties." />
      </p>
      <p className="mt-2 text-xs text-foreground/45">
        <T ja="衆議院: 2026-02-08 第51回衆院選時点 ｜ 参議院: 2025-07-20 第27回参院選時点" en="House of Representatives: as of the 51st general election, 2026-02-08 | House of Councillors: as of the 27th regular election, 2025-07-20" />
      </p>

      {/* 二院制の解説 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
        <ChamberExplainer
          title="衆議院"
          titleEn="House of Representatives"
          points={[
            {
              key: "seats",
              label: <T ja="定数" en="Seats" />,
              value: (
                <T
                  ja="465議席（小選挙区289・比例代表176）"
                  en="465 seats (289 single-member districts, 176 proportional representation)"
                />
              ),
            },
            {
              key: "term",
              label: <T ja="任期" en="Term" />,
              value: <T ja="4年（解散あり）" en="4 years (subject to dissolution)" />,
            },
            {
              key: "eligibility",
              label: <T ja="被選挙権" en="Eligibility" />,
              value: <T ja="25歳以上" en="Age 25 or older" />,
            },
            {
              key: "priority",
              label: <T ja="優越権" en="Priority" />,
              value: (
                <T
                  ja="予算の先議権、予算・条約の承認、内閣総理大臣の指名で参議院に優越"
                  en="Takes precedence over the House of Councillors in initiating the budget, approving the budget and treaties, and designating the Prime Minister"
                />
              ),
            },
            {
              key: "features",
              label: <T ja="特徴" en="Features" />,
              value: (
                <T
                  ja="解散があるため国民の最新の民意を反映しやすく、より強い権限を持つ。内閣不信任決議は衆議院のみが提出可能。"
                  en="Because it can be dissolved, it more readily reflects the latest public opinion and holds stronger powers. Only the House of Representatives can submit a motion of no confidence in the Cabinet."
                />
              ),
            },
          ]}
        />
        <ChamberExplainer
          title="参議院"
          titleEn="House of Councillors"
          points={[
            {
              key: "seats",
              label: <T ja="定数" en="Seats" />,
              value: (
                <T
                  ja="248議席（選挙区148・比例代表100）"
                  en="248 seats (148 electoral districts, 100 proportional representation)"
                />
              ),
            },
            {
              key: "term",
              label: <T ja="任期" en="Term" />,
              value: (
                <T
                  ja="6年（3年ごとに半数改選・解散なし）"
                  en="6 years (half re-elected every 3 years; no dissolution)"
                />
              ),
            },
            {
              key: "eligibility",
              label: <T ja="被選挙権" en="Eligibility" />,
              value: <T ja="30歳以上" en="Age 30 or older" />,
            },
            {
              key: "unique",
              label: <T ja="独自権限" en="Unique powers" />,
              value: (
                <T
                  ja="衆議院の解散中に緊急集会を開催可能"
                  en="May convene an emergency session while the House of Representatives is dissolved"
                />
              ),
            },
            {
              key: "features",
              label: <T ja="特徴" en="Features" />,
              value: (
                <T
                  ja="解散がなく長期的な視点で審議を行う「良識の府」。衆議院の行き過ぎを抑制するチェック機能を担う。"
                  en="With no dissolution, it deliberates from a long-term perspective as the “House of Good Sense,” serving as a check on the excesses of the House of Representatives."
                />
              ),
            },
          ]}
        />
      </div>

      {/* 法案の流れ */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            <T ja="法案の流れ" en="How a Bill Becomes Law" />
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            <T ja="How a Bill Becomes Law" en="How a Bill Becomes Law" />
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>

      <p className="text-sm text-foreground/60 leading-relaxed mb-6">
        <T ja="法案が国会に提出されてから法律として施行されるまでの流れです。" en="The process from when a bill is submitted to the Diet until it is enacted into law." />
      </p>

      <div className="flex flex-col md:flex-row items-stretch gap-3">
        {[
          {
            step: "1",
            title: "法案提出",
            titleEn: "Bill Submitted",
            desc: "内閣または議員が法案を国会に提出",
            descEn: "The Cabinet or a Diet member submits a bill to the Diet",
            color: "bg-foreground/10",
          },
          {
            step: "2",
            title: "委員会審議",
            titleEn: "Committee Review",
            desc: "専門委員会で質疑・修正・採決",
            descEn: "A specialized committee debates, amends, and votes on the bill",
            color: "bg-foreground/10",
          },
          {
            step: "3",
            title: "衆議院 本会議",
            titleEn: "House of Representatives Plenary",
            desc: "衆議院本会議で審議・採決",
            descEn: "The bill is debated and voted on in the plenary session of the House of Representatives",
            color: "bg-brief-red/10",
          },
          {
            step: "4",
            title: "参議院 本会議",
            titleEn: "House of Councillors Plenary",
            desc: "参議院本会議で審議・採決",
            descEn: "The bill is debated and voted on in the plenary session of the House of Councillors",
            color: "bg-brief-red/10",
          },
          {
            step: "5",
            title: "成立",
            titleEn: "Enacted",
            desc: "両院で可決されれば法案成立",
            descEn: "Once passed by both chambers, the bill becomes law",
            color: "bg-amber-500/10",
          },
          {
            step: "6",
            title: "公布・施行",
            titleEn: "Promulgation & Entry into Force",
            desc: "天皇が公布し、指定日に施行",
            descEn: "The Emperor promulgates the law, which takes effect on the designated date",
            color: "bg-green-500/10",
          },
        ].map((s, i, arr) => (
          <div key={s.step} className="flex items-center gap-3 flex-1">
            <div className={`flex-1 p-4 rounded-xl ${s.color} border border-brief-border`}>
              <div className="text-[10px] tracking-wider uppercase text-foreground/45 mb-1">Step {s.step}</div>
              <div className="font-serif font-bold text-sm"><T ja={s.title} en={s.titleEn} /></div>
              <div className="text-[10px] text-foreground/55 mt-1 leading-relaxed"><T ja={s.desc} en={s.descEn} /></div>
            </div>
            {i < arr.length - 1 && (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground/30 flex-shrink-0 hidden md:block">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 p-4 bg-brief-card rounded-lg text-xs text-foreground/50 leading-relaxed">
        <T ja="※ 衆議院で可決後60日以内に参議院が議決しない場合、衆議院は参議院が否決したとみなすことができます（みなし否決）。衆議院で出席議員の2/3以上の多数で再び可決した場合、法律となります（衆議院の再議決権・憲法59条）。" en="Note: If the House of Councillors fails to vote within 60 days after a bill passes the House of Representatives, the House of Representatives may deem the bill rejected. If the House of Representatives passes the bill again with a two-thirds majority of members present, it becomes law (Article 59 of the Constitution)." />
      </div>

      {/* 衆議院 議席 */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            <T ja="衆議院の議席構成" en="House of Representatives Seats" />
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            <T ja="House of Representatives — Seats" en="House of Representatives — Seats" />
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>
      <div className="p-6 border border-brief-border rounded-xl">
        <SeatChart
          parties={houseOfRepresentatives}
          total={HOUSE_TOTAL}
          title={`衆議院 (${HOUSE_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfRepresentatives} total={HOUSE_TOTAL} />
      </div>

      {/* 参議院 議席 */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            <T ja="参議院の議席構成" en="House of Councillors Seats" />
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            <T ja="House of Councillors — Seats" en="House of Councillors — Seats" />
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>
      <div className="p-6 border border-brief-border rounded-xl">
        <SeatChart
          parties={houseOfCouncillors}
          total={COUNCIL_TOTAL}
          title={`参議院 (${COUNCIL_TOTAL}議席)`}
        />
        <CoalitionIndicator parties={houseOfCouncillors} total={COUNCIL_TOTAL} />
      </div>

      {/* ━━━ 国会の歴史 ━━━ */}
      <div className="flex items-center gap-4 mb-6 mt-14">
        <div>
          <h2 className="font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-1.5 h-5 bg-brief-red rounded-full inline-block" />
            <T ja="国会の歴史" en="History of the National Diet" />
          </h2>
          <span className="text-[10px] tracking-[2px] uppercase text-foreground/45 ml-3.5">
            <T ja="History of the National Diet" en="History of the National Diet" />
          </span>
        </div>
        <div className="flex-1 h-px bg-brief-border" />
      </div>

      <p className="text-sm text-foreground/60 leading-relaxed mb-8">
        <T ja="明治維新から現代まで、日本の議会制度は約150年の歴史を持ちます。自由民権運動による国会開設の要求から、帝国議会の誕生、戦後の新憲法下での国会の再出発まで、その歩みを時系列で辿ります。" en="Japan's parliamentary system has a history spanning approximately 150 years, from the Meiji Restoration to the present day. This timeline traces the journey from the Freedom and People's Rights Movement's demands for a national assembly, through the birth of the Imperial Diet, to the postwar rebirth of the Diet under the new Constitution." />
      </p>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-[11px] top-0 bottom-0 w-px bg-foreground/5" />

        {dietHistory.map((era, i) => (
          <div key={era.year} className="relative pb-10 last:pb-0">
            {/* Dot */}
            <div
              className={`absolute left-[-25px] top-1 w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                i === 0
                  ? "bg-brief-red border-brief-red"
                  : "bg-background border-white/20"
              }`}
            >
              {i === 0 && (
                <div className="w-2 h-2 rounded-full bg-brief-card" />
              )}
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-bold tabular-nums text-brief-red">{era.year}</span>
                <span className="text-[9px] tracking-wider uppercase px-2 py-0.5 rounded-full bg-foreground/5 text-foreground/45 font-medium">
                  <T ja={era.tag} en={era.tagEn} />
                </span>
              </div>
              <h3 className="font-serif text-lg font-bold leading-snug"><T ja={era.title} en={era.titleEn} /></h3>
              <p className="mt-1.5 text-sm text-foreground/60 leading-relaxed">
                <T ja={era.description} en={era.descriptionEn} />
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="mt-12 p-4 bg-brief-card rounded-lg text-xs text-foreground/50 leading-relaxed">
        <T ja="※ 議席数は補欠選挙・離党等により変動する場合があります。最新の情報は各政党・国会の公式サイトをご確認ください。" en="Note: Seat counts may change due to by-elections, party departures, etc. Please refer to official party and Diet websites for the latest information." />
      </div>
    </div>
  );
}
