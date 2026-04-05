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

近年はGoogleやMeta、Amazonなどのテック大手が独自の海底ケーブルの敷設を進めている。Googleが出資した日本とカナダを結ぶ「Topaz」ケーブルは2023年に運用を開始し、16ファイバーペア・240Tbpsの容量を持つ。2025年にはMoxが同ケーブルのスペクトラムを取得し、参加事業者が拡大している。

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
  {
    slug: "gemma-4-guide",
    title:
      "Gemma 4 徹底解説 — Googleが放つ最強オープンモデルの全貌と使い方",
    titleEn:
      "Gemma 4 Deep Dive — Google's Most Capable Open Model: Features & How to Use",
    date: "2026-04-06",
    author: "Tech Desk",
    readTime: "16 min",
    tags: ["AI", "オープンモデル", "Google", "LLM", "マルチモーダル"],
    summary:
      "2026年4月2日、Google DeepMindが発表したGemma 4は、スマートフォンからサーバーまで対応する4つのモデルで構成されるオープンモデルファミリーだ。Arena AIリーダーボードで世界3位、数学競技ベンチマーク AIME 2026で89.2%を記録し、前世代Gemma 3から劇的な性能向上を遂げた。Apache 2.0ライセンスで完全に自由な商用利用が可能な本モデルの特徴、アーキテクチャ、使い方をコード付きで徹底解説する。",
    sections: [
      {
        heading: "Gemma 4とは何か — 4つのモデルと設計思想",
        headingEn: "What Is Gemma 4 — Four Models and the Design Philosophy",
        diagramId: "gemma4-model-family",
        body: `2026年4月2日、GoogleはGoogle Cloud Nextにおいて、オープンモデルファミリー「Gemma 4」を発表した。Geminiと同じ研究基盤から生まれた第4世代のオープンモデルであり、「バイト単位で最も高性能なオープンモデル」を標榜している。

Gemma 4は4つのバリエーションで構成される。最小のE2B（有効パラメータ2.3B）はスマートフォンやIoTデバイスで動作するエッジ向けモデル。E4B（有効パラメータ4.5B）はモバイル・タブレット向けの中間モデル。26B A4B（総パラメータ25.2B、有効パラメータ3.8B）はMixture of Experts（MoE）アーキテクチャを採用し、26Bの知識量を3.8Bのコストで利用できる。そして最大の31B Dense（30.7B）はフルサイズの高精度モデルだ。

「E」はEffective（有効）の略で、E2BとE4BにはPer-Layer Embeddings（PLE）という技術が使われている。各デコーダ層に独立した埋め込み信号を注入することで、少ないパラメータ数でも高い表現力を実現する革新的なアプローチだ。

全モデルがApache 2.0ライセンスで公開されている。月間アクティブユーザー（MAU）の上限もなく、利用規約の制約もなく、完全な商用自由が保証されている。これはMetaのLlama 4（700M MAU制限付きの独自ライセンス）と対照的だ。`,
      },
      {
        heading:
          "ベンチマーク — 前世代から「次元の違う」進化",
        headingEn: "Benchmarks — A Quantum Leap from Gemma 3",
        diagramId: "gemma4-benchmarks",
        body: `Gemma 4の性能向上は、前世代のGemma 3から文字通り「次元の違う」ものだ。特に数学とコーディングにおける飛躍は目覚ましい。

数学競技ベンチマーク AIME 2026では、Gemma 4 31Bが89.2%を記録した。Gemma 3 27Bのスコアはわずか20.8%であり、4倍以上の改善だ。Codeforces（競技プログラミング）のELOレーティングは、Gemma 3の110からGemma 4の2150へと約20倍に跳ね上がった。

31B Denseモデルの推定LMArenaスコア（テキストのみ）は1452で、オープンモデルとして世界第3位にランクイン。26B MoEモデルも1441で第6位を確保している。注目すべきは、26B MoEがわずか3.8Bの有効パラメータでこのスコアを達成していることだ。自身の20倍のサイズのモデルと互角以上の性能を発揮している。

総合知識ベンチマークMMU Proでは31Bが85.2%、科学推論のGPQA Diamondでは84.3%を記録。ただし、AlibabaのQwen 3.5 27BはMMU Proで86.1%、GPQA Diamondで85.5%とわずかにGemma 4を上回っており、オープンモデルの競争が激化していることがわかる。`,
      },
      {
        heading: "アーキテクチャの革新 — なぜ小さくても強いのか",
        headingEn:
          "Architectural Innovation — Why Smaller Means Stronger",
        diagramId: "gemma4-architecture",
        body: `Gemma 4が「バイト単位で最強」を実現できる背景には、複数のアーキテクチャ革新がある。

【ハイブリッドアテンション】デコーダ層はローカルスライディングウィンドウアテンション（512〜1024トークン）とグローバルフルコンテキストアテンションを交互に配置している。ローカル層は近接するトークン間の関係を効率的に処理し、グローバル層が文書全体の長距離依存関係を捉える。これにより、256Kトークンという長大なコンテキストウィンドウを計算コストを抑えながら実現している。

【Per-Layer Embeddings（PLE）】E2BとE4Bに採用された技術で、通常の入力埋め込みに加えて、各デコーダ層に個別の埋め込み信号を供給する。これにより、少ないパラメータ数でも層ごとに異なる表現を学習でき、結果として小さなモデルの表現力を大幅に向上させている。

【Shared KV Cache】後半N層のキー・バリューキャッシュが前半の層と共有される仕組み。推論時のメモリ使用量を大幅に削減し、長いコンテキストの処理をより実用的にしている。

【Dual RoPE】位置エンコーディングにも工夫がある。スライディングウィンドウ層には標準のRoPE（Rotary Position Embedding）を、グローバル層にはProportional RoPEを採用。異なるスケールの位置情報を適切にエンコードしている。

【ビジョン・オーディオエンコーダ】画像入力には約550M（小モデルは150M）パラメータのビジョンエンコーダを搭載。可変アスペクト比に対応し、トークンバジェット（70、140、280、560、1120）を設定可能。E2B/E4Bにはさらに約300MパラメータのUSMスタイルConformerオーディオエンコーダが搭載され、音声入力にも対応する。`,
      },
      {
        heading:
          "オープンモデル戦国時代 — Gemma 4の立ち位置",
        headingEn:
          "The Open Model Wars — Where Gemma 4 Stands",
        diagramId: "gemma4-comparison",
        body: `2026年のオープンAIモデル市場は、かつてないほど競争が激化している。Gemma 4の立ち位置を主要な競合モデルとの比較で確認しよう。

最大の競合はAlibabaのQwen 3.5だ。Qwen 3.5 27BはMMU ProやGPQA Diamondでわずかにgemma 4 31Bを上回り、LMArenaスコアも1460とGemma 4の1452を超える。ただしQwen 3.5はテキスト専用モデルであり、Gemma 4のようなネイティブマルチモーダル能力は持たない。

MetaのLlama 4 Scoutは109Bの総パラメータ（17B有効）と10Mトークンのコンテキストウィンドウが特徴だが、推論ベンチマークではGemma 4に及ばず、700M MAUの利用制限がある独自ライセンスも懸念材料だ。

Zhipu AIのGLM-5 32BはLMArena 1448と健闘しているが、エッジ向けの小型モデルは提供していない。

Gemma 4の最大の差別化要因は3つある。第一に、2.3Bから31Bまでの幅広いモデルレンジ。第二に、画像・音声を含むネイティブマルチモーダル対応。第三に、Apache 2.0ライセンスによる完全な商用自由。エッジからクラウドまで一貫したモデルファミリーで対応できるのは、現時点でGemma 4のみだ。`,
      },
      {
        heading: "使い方ガイド — コード付き実践入門",
        headingEn: "How to Use — Practical Guide with Code",
        diagramId: "gemma4-code-example",
        body: `Gemma 4はHugging Face Transformers、Google AI Studio、Ollama、llama.cppなど複数のプラットフォームで利用可能だ。ここではPython + Hugging Face Transformersを使った基本的な使い方を紹介する。

Hugging Faceには全モデルのベース版（事前学習済み）とIT版（命令チューニング済み）が公開されている。通常の対話・タスク実行にはIT版（末尾に-it）を使用する。モデルIDは「google/gemma-4-e2b-it」「google/gemma-4-e4b-it」「google/gemma-4-26B-A4B-it」「google/gemma-4-31B-it」だ。

テキスト生成の最もシンプルな方法はpipelineを使う方法だ。「any-to-any」タスクを指定し、モデルIDとdevice_map="auto"を設定するだけで、GPUの自動検出と最適な配置が行われる。

マルチモーダル入力（画像＋テキスト）では、messagesのcontent配列にtype: "image"とtype: "text"を並べる。画像はURLまたはローカルファイルパスを指定できる。E2B/E4Bではさらにtype: "audio"やtype: "video"（load_audio_from_video=True指定）も利用可能だ。

Function Calling（ツール使用）は、Gemma 4の最も強力な機能の一つだ。JSON Schemaで定義したツールをapply_chat_templateのtools引数に渡すと、モデルが自律的にツール呼び出しの判断と引数の生成を行う。enable_thinking=Trueを指定すれば、モデルが段階的に推論してからツールを呼び出す「Thinkingモード」が有効になる。

GGUF量子化版もllama.cpp用に公開されており、Ollamaを使えばコマンド一行（ollama run gemma4）でローカル実行が可能だ。E2Bモデルは2ビット量子化で1.5GB未満のメモリで動作し、Raspberry Pi 5でも毎秒7.6トークンの生成速度を実現する。`,
      },
      {
        heading:
          "ユースケース別モデル選択ガイド",
        headingEn: "Model Selection Guide by Use Case",
        diagramId: "gemma4-use-cases",
        body: `Gemma 4の4つのモデルはそれぞれ異なるユースケースに最適化されている。目的に応じた選び方を整理する。

【E2B / E4B — エッジ・モバイル向け】スマートフォンアプリ内でのオフラインAIアシスタント、IoTデバイスでのリアルタイム音声認識、カメラアプリでの物体検出（バウンディングボックスをJSON形式で返却）などに最適。LiteRT-LMの最適化により、4,000入力トークンを2つのスキルで3秒以内に処理できる。Qualcomm Dragonwing IQ8 NPUでは毎秒3,700のプリフィルトークンを処理可能。

【26B A4B MoE — PCローカル向け】プログラマーのローカルコード補完、長文ドキュメントの要約・分析（256Kコンテキスト）、マルチステップの論理的推論タスクに最適。3.8Bの有効パラメータで31B級の性能を発揮するため、消費メモリが少なく一般的なGPU（16GB VRAM）で動作する。

【31B Dense — サーバー・API向け】高精度が要求されるプロダクション環境、エージェント型ワークフロー（Function Calling + JSON構造化出力）、140言語以上の多言語カスタマーサポートに最適。AIME 89.2%、Codeforces ELO 2150という数学・コーディング性能は、有料APIのクローズドモデルにも匹敵する。

ファインチューニングも全モデルで対応している。Hugging Face TRL、QLoRA、PEFT（LoRA）、Unsloth Studioなどのツールが利用可能で、特定ドメインへの適応も容易だ。Google AI StudioやVertex AIからクラウド経由でも利用でき、オンプレミスからクラウドまで柔軟なデプロイメントが可能である。`,
      },
      {
        heading: "Gemma 4が意味するもの — オープンAIの新局面",
        headingEn:
          "What Gemma 4 Means — A New Phase for Open AI",
        body: `Gemma 4の登場は、オープンAIモデルの世界が新たな局面に入ったことを示している。

第一に、「小さなモデルでも十分に賢い」時代の到来だ。26B MoEモデルが3.8Bの有効パラメータで世界第6位の性能を発揮するという事実は、モデルサイズの競争が終わりを迎えつつあることを意味する。重要なのはパラメータの総数ではなく、そのパラメータをいかに効率的に使うかだ。

第二に、エッジAIの本格化。E2Bモデルが1.5GB未満のメモリで音声・画像・テキストを処理できることは、クラウドに依存しないAIアプリケーションの可能性を大きく広げる。プライバシーの懸念や通信環境の制約がある場面でも、高品質なAI体験を提供できるようになる。

第三に、Apache 2.0ライセンスの重要性。OpenAIやAnthropicのクローズドモデル、あるいはMetaの制限付きライセンスと異なり、Gemma 4は真の意味で「オープン」だ。企業が自社製品にAIを組み込む際のライセンスリスクがゼロであることは、商用展開の障壁を大きく下げる。

日本においても、Gemma 4は140言語以上のサポートにより日本語での利用が可能であり、国内企業のAI活用を加速する潜在力を持つ。エッジモデルの進化は、製造業のIoT、医療機器、自動運転など、日本が強みを持つ分野でのオンデバイスAI活用に直結する。

オープンモデルの性能がクローズドモデルに迫る中、AIの民主化はさらに加速していくだろう。Gemma 4は、その最前線に立つモデルの一つだ。`,
      },
    ],
  },
];
