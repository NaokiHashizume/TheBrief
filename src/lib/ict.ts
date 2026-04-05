export interface IndustryArticle {
  slug: string;
  title: string;
  titleEn: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
  summary: string;
  sections: {
    heading: string;
    headingEn?: string;
    body: string;
    diagramId?: string;
  }[];
}

export const ictArticles: IndustryArticle[] = [
  {
    slug: "how-networks-work",
    title: "ネットワークの仕組み — インターネットはどう動いているのか",
    titleEn: "How Networks Work — The Mechanics Behind the Internet",
    date: "2026-04-05",
    author: "Tech Desk",
    readTime: "15 min",
    tags: ["ネットワーク", "インフラ", "TCP/IP", "入門"],
    summary:
      "私たちが毎日使うインターネット。しかしその裏側では、データがどのように世界中を駆け巡っているのか。ネットワークの基礎から最新の通信技術まで、仕組みを体系的に解説する。",
    sections: [
      {
        heading: "インターネットとは何か",
        headingEn: "What is the Internet?",
        diagramId: "internet-scale",
        body: `インターネットとは、世界中のコンピュータやデバイスを相互に接続する巨大なネットワークの集合体である。その名前は「Inter-Network（ネットワーク間）」に由来し、文字通り「ネットワークのネットワーク」だ。

2025年10月時点で、世界のインターネットユーザーは60億4,000万人に達し（世界人口の約73%）、接続デバイス数はIoT機器を含め300億台を超える。日本国内では固定ブロードバンド契約数が約5,350万件（2025年9月末時点）、モバイルブロードバンドは約2億回線に上る。

インターネットの本質は「パケット交換ネットワーク」にある。電話のように通信相手と専用回線を占有する「回線交換」とは異なり、データを小さな「パケット」に分割して送受信する。この仕組みにより、一つの回線を複数の通信が効率的に共有できる。`,
      },
      {
        heading: "TCP/IP — インターネットの共通言語",
        headingEn: "TCP/IP — The Common Language of the Internet",
        diagramId: "tcpip-layers",
        body: `インターネット上のすべての通信は、TCP/IP（Transmission Control Protocol / Internet Protocol）というプロトコル群に基づいている。これはいわばインターネットの「共通言語」であり、異なるメーカーのハードウェア、異なるOSのコンピュータが互いに通信できる理由でもある。

TCP/IPは4つの層（レイヤー）で構成される：

【アプリケーション層】ユーザーが直接触れる部分。HTTP（Web）、SMTP（メール）、DNS（名前解決）などのプロトコルが動作する。

【トランスポート層】データの信頼性を担保する層。TCP（Transmission Control Protocol）は、データが確実に順序通り届くことを保証する。速度を優先するリアルタイム通信にはUDP（User Datagram Protocol）が使われる。

【インターネット層】IPアドレスを使ってパケットを目的地まで届けるルーティングを担当。IPv4（32ビット、約43億個のアドレス）とIPv6（128ビット、事実上無限のアドレス）が共存している。

【ネットワークインターフェース層】物理的な通信を担う。イーサネット（有線LAN）、Wi-Fi（無線LAN）、光ファイバーなどが該当する。`,
      },
      {
        heading: "データの旅 — パケットが届くまで",
        headingEn: "The Journey of Data — How Packets Reach Their Destination",
        diagramId: "packet-journey",
        body: `あなたがブラウザで「thebrief.info」と入力してからページが表示されるまでに、データは以下のような旅をする：

まず、ブラウザはDNS（Domain Name System）サーバーに問い合わせ、「thebrief.info」というドメイン名をIPアドレス（例: 104.21.32.1）に変換する。DNSは「インターネットの電話帳」と呼ばれ、世界中に分散配置されたサーバーが連携して名前解決を行う。

次に、ブラウザはそのIPアドレスに対してHTTPリクエストを送信する。このリクエストはTCPパケットに分割され、IPヘッダーが付与されて、あなたのルーターからISP（インターネットサービスプロバイダ）のネットワークへと送り出される。

パケットは複数のルーターを経由して目的地に向かう。各ルーターは「ルーティングテーブル」と呼ばれる経路情報を参照し、パケットを次のルーターへ転送する。東京からサンフランシスコのサーバーに到達するまでに、15〜20のルーターを経由することもある。

海を越える場合は海底ケーブルを通過する。日本と米国を結ぶ太平洋横断海底ケーブルは複数本敷設されており、データは光ファイバー内を約20万km/秒で伝送される。`,
      },
      {
        heading: "海底ケーブル — インターネットの大動脈",
        headingEn: "Submarine Cables — The Arteries of the Internet",
        diagramId: "submarine-cable",
        body: `意外に思われるかもしれないが、国際インターネット通信の99%は衛星ではなく海底ケーブルを通じて行われている。2026年現在、世界には600本以上の海底ケーブルが稼働・敷設中であり、総延長は150万kmを超える（TeleGeography調べ）。

日本は太平洋のハブとして、米国、東南アジア、オーストラリアを結ぶ複数の主要海底ケーブルが陸揚げされている。千倉（千葉県）、志摩（三重県）、二宮（神奈川県）、北九州などが主要な陸揚げ地点だ。

近年はGoogleやMeta、Amazonなどのテック大手が独自の海底ケーブルの敷設を進めている。Googleが出資した日本とカナダを結ぶ「Topaz」ケーブルは2024年6月に運用を開始し、16ファイバーペア・240Tbpsの容量を持つ。2025年にはMoxが同ケーブルのスペクトラムを取得し、参加事業者が拡大している。

1本の最新世代の海底ケーブルは、毎秒数百テラビット（Tbps）のデータを伝送できる。これは高画質の映画約数万本を1秒で送れる計算だ。`,
      },
      {
        heading: "ルーティングとBGP — 経路を決める仕組み",
        headingEn: "Routing and BGP — How Paths Are Determined",
        body: `インターネットは10万以上の「AS（Autonomous System）」と呼ばれる独立したネットワークの集合体だ（2020年末にASN割当数は10万を突破）。各ISPや大企業、大学はそれぞれASを運営しており、AS間の経路情報の交換にはBGP（Border Gateway Protocol）というプロトコルが使われる。

BGPは「インターネットの郵便局」とも呼ばれ、各ASが「自分のネットワークにはこのIPアドレス範囲が所属している」という情報を隣接するASに広告する。この情報が伝播することで、世界中のルーターが最適な経路を学習する。2026年初頭時点で、IPv4のBGPルーティングテーブルは120万プレフィックスを超えている（APNIC調べ）。

しかしBGPには脆弱性もある。設定ミスや悪意ある操作により、トラフィックが意図しない経路を通過する「BGPハイジャック」が世界中で散発的に発生している。この問題に対処するため、RPKI（Resource Public Key Infrastructure）という認証技術の普及が進んでいる。

日本ではJPNIC（日本ネットワークインフォメーションセンター）がIPアドレスやAS番号の割り当てを管理し、インターネットの安定運用を支えている。`,
      },
      {
        heading: "DNS — インターネットの電話帳",
        headingEn: "DNS — The Phone Book of the Internet",
        diagramId: "dns-hierarchy",
        body: `DNS（Domain Name System）は、人間が覚えやすいドメイン名（例: thebrief.info）を、コンピュータが理解できるIPアドレス（例: 104.21.32.1）に変換するシステムだ。

DNSの仕組みは階層構造になっている。最上位に「ルートサーバー」があり（世界に13系統、数百台のミラーサーバーで分散運用）、その下に「.jp」「.com」「.info」などのTLD（トップレベルドメイン）サーバー、さらにその下に各ドメインの権威サーバーが位置する。

名前解決の手順はこうだ。まず端末のリゾルバ（キャッシュDNS）がルートサーバーに問い合わせ、「.info」の管理サーバーを教えてもらう。次に「.info」サーバーに問い合わせて「thebrief.info」の権威サーバーを特定し、最終的にIPアドレスを取得する。この一連の処理は通常数十ミリ秒で完了する。

日本では、IIJ、NTT、GoogleのPublic DNS（8.8.8.8）、CloudflareのDNS（1.1.1.1）などが広く利用されている。DNSのセキュリティを強化するDNSSEC（DNS Security Extensions）やDoH（DNS over HTTPS）の普及も進んでいる。`,
      },
      {
        heading: "5Gからの進化 — 日本の通信インフラの現在地",
        headingEn: "Beyond 5G — Japan's Communication Infrastructure Today",
        diagramId: "mobile-generation",
        body: `2026年4月現在、日本の5G人口カバー率は98.4%に達している（2024年度末時点、総務省）。NTTドコモ、KDDI、ソフトバンク、楽天モバイルの4キャリアが全国47都道府県でサービスを展開している。

5G（第5世代移動通信システム）は、4Gと比較して最大20倍の通信速度（理論値20Gbps）、10分の1の遅延（1ミリ秒以下）、100倍の接続密度を実現する。これにより、リアルタイム映像配信、遠隔手術、自動運転車両間通信などの新しいユースケースが現実のものとなりつつある。

一方、NTTが推進する「IOWN（Innovative Optical and Wireless Network）」構想も注目されている。IOWNは光技術をネットワークの末端まで活用する次世代インフラで、電力消費を100分の1、伝送容量を125倍、遅延を200分の1にすることを目標としている。APN（All-Photonics Network）は既に商用化が始まり、2025年大阪・関西万博では実証展示が行われた。

さらに、2030年代の実用化を目指す6G（第6世代）の研究開発も始動。日本ではNTTドコモ、NEC、富士通などがBeyond 5G推進コンソーシアムを通じて研究を加速させている。テラヘルツ波の利用や、空・海・宇宙を含む3次元通信ネットワークが構想されている。`,
      },
      {
        heading: "セキュリティ — ネットワークを守る技術",
        headingEn: "Security — Technologies Protecting the Network",
        diagramId: "security-layers",
        body: `ネットワークの利便性が増すほど、セキュリティの重要性も高まる。日本国内におけるサイバー攻撃の脅威は年々増大し、企業・政府機関のセキュリティ投資は拡大を続けている。

現代のネットワークセキュリティは複数の層で構成される。通信の暗号化にはTLS（Transport Layer Security）が広く使われており、Webサイトの「https://」はこのTLSによる暗号化通信を意味する。2026年現在、Chrome（デスクトップ）のページ読み込みの95%以上がHTTPSを使用している（Google透明性レポート）。

ファイアウォール、IDS/IPS（侵入検知・防御システム）、WAF（Webアプリケーションファイアウォール）といった防御技術に加え、近年は「ゼロトラスト」モデルが主流となっている。これは「社内ネットワークだから安全」という前提を捨て、すべてのアクセスを検証するアプローチだ。

量子コンピュータの発展に備えた「耐量子暗号（PQC: Post-Quantum Cryptography）」の標準化も進んでいる。NISTは2024年8月に最初の3つのPQC標準（FIPS 203, 204, 205）を正式公開した。CRYSTALS-KyberやCRYSTALS-Dilithiumなどのアルゴリズムが含まれ、2035年までに量子脆弱なアルゴリズムを段階的に廃止する計画だ。日本のNICT（情報通信研究機構）もPQCの実装検証を進めている。`,
      },
    ],
  },
];
