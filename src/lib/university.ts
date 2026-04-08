export type UniversityCategory = {
  id: string;
  label: string;
  labelEn: string;
  color: string;
  desc: string;
  descEn: string;
  lead: string;
  leadEn: string;
  subs: {
    name: string;
    nameEn: string;
    items: string[];
    itemsEn: string[];
    href?: string;
  }[];
};

export const universityCategories: UniversityCategory[] = [
  {
    id: "formal",
    label: "形式科学",
    labelEn: "Formal Sciences",
    color: "#6366f1",
    desc: "論理・記号・構造を扱う",
    descEn: "Logic, symbols, and structure",
    lead: "抽象的なルールや構造を扱い、他分野の基盤言語にもなる領域です。数式、論理、計算、システム設計の考え方がここに集まります。",
    leadEn: "Disciplines that handle abstract rules and structures and serve as the foundational language for other fields. Mathematics, logic, computation, and systems design converge here.",
    subs: [
      { name: "数学", nameEn: "Mathematics", items: ["代数学", "解析学", "幾何学", "位相幾何学", "数論", "確率論", "離散数学"], itemsEn: ["Algebra", "Analysis", "Geometry", "Topology", "Number Theory", "Probability", "Discrete Math"], href: "/university/formal/math" },
      { name: "統計学", nameEn: "Statistics", items: ["記述統計", "確率分布", "推測統計", "回帰分析", "ベイズ統計"], itemsEn: ["Descriptive Statistics", "Probability Distributions", "Inferential Statistics", "Regression Analysis", "Bayesian Statistics"], href: "/university/formal/statistics" },
      { name: "論理学", nameEn: "Logic", items: ["形式論理学", "数理論理学", "哲学的論理学", "計算論理学"], itemsEn: ["Formal Logic", "Mathematical Logic", "Philosophical Logic", "Computational Logic"], href: "/university/formal/logic" },
      { name: "計算機科学", nameEn: "Computer Science", items: ["アルゴリズム理論", "計算理論", "情報理論", "暗号理論", "形式言語理論"], itemsEn: ["Algorithms", "Theory of Computation", "Information Theory", "Cryptography", "Formal Language Theory"], href: "/university/formal/computer-science" },
      { name: "システム科学", nameEn: "Systems Science", items: ["制御理論", "サイバネティクス", "システム工学", "オペレーションズ・リサーチ"], itemsEn: ["Control Theory", "Cybernetics", "Systems Engineering", "Operations Research"], href: "/university/formal/systems-science" },
    ],
  },
  {
    id: "natural",
    label: "自然科学",
    labelEn: "Natural Sciences",
    color: "#10b981",
    desc: "自然界の法則を解明する",
    descEn: "Uncovering the laws of nature",
    lead: "物質、生命、地球、宇宙を対象に、再現可能な法則やメカニズムを明らかにする学問群です。観測と実験が中心になります。",
    leadEn: "Disciplines that study matter, life, the Earth, and the universe to reveal reproducible laws and mechanisms. Observation and experiment are central.",
    subs: [
      { name: "物理学", nameEn: "Physics", items: ["古典力学", "量子力学", "熱力学", "電磁気学", "相対性理論", "素粒子物理学", "物性物理学", "宇宙物理学", "光学", "流体力学"], itemsEn: ["Classical Mechanics", "Quantum Mechanics", "Thermodynamics", "Electromagnetism", "Relativity", "Particle Physics", "Condensed Matter", "Astrophysics", "Optics", "Fluid Dynamics"], href: "/university/natural/physics" },
      { name: "化学", nameEn: "Chemistry", items: ["有機化学", "無機化学", "物理化学", "分析化学", "生化学", "高分子化学", "電気化学", "環境化学"], itemsEn: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry", "Analytical Chemistry", "Biochemistry", "Polymer Chemistry", "Electrochemistry", "Environmental Chemistry"], href: "/university/natural/chemistry" },
      { name: "生物学", nameEn: "Biology", items: ["分子生物学", "細胞生物学", "遺伝学", "生態学", "進化生物学", "微生物学", "動物学", "植物学", "神経科学", "免疫学", "発生生物学"], itemsEn: ["Molecular Biology", "Cell Biology", "Genetics", "Ecology", "Evolutionary Biology", "Microbiology", "Zoology", "Botany", "Neuroscience", "Immunology", "Developmental Biology"], href: "/university/natural/biology" },
      { name: "地球科学", nameEn: "Earth Science", items: ["地質学", "気象学", "海洋学", "古生物学", "地球物理学", "火山学", "地震学", "鉱物学"], itemsEn: ["Geology", "Meteorology", "Oceanography", "Paleontology", "Geophysics", "Volcanology", "Seismology", "Mineralogy"], href: "/university/natural/earth-science" },
      { name: "天文学", nameEn: "Astronomy", items: ["恒星天文学", "銀河天文学", "宇宙論", "惑星科学", "電波天文学"], itemsEn: ["Stellar Astronomy", "Galactic Astronomy", "Cosmology", "Planetary Science", "Radio Astronomy"], href: "/university/natural/astronomy" },
    ],
  },
  {
    id: "humanities",
    label: "人文科学",
    labelEn: "Humanities",
    color: "#f59e0b",
    desc: "人間の精神・文化・歴史を探究する",
    descEn: "Exploring mind, culture, and history",
    lead: "人間が何を考え、どう表現し、どのような歴史や文化を築いてきたかを読み解く学問です。解釈、批評、文脈理解が中心になります。",
    leadEn: "Disciplines that interpret what humans think, how they express themselves, and the histories and cultures they have built. Interpretation, criticism, and contextual understanding are central.",
    subs: [
      { name: "哲学", nameEn: "Philosophy", items: ["形而上学", "認識論", "倫理学", "美学", "科学哲学", "言語哲学", "心の哲学", "政治哲学", "宗教哲学", "現象学", "実存主義"], itemsEn: ["Metaphysics", "Epistemology", "Ethics", "Aesthetics", "Philosophy of Science", "Philosophy of Language", "Philosophy of Mind", "Political Philosophy", "Philosophy of Religion", "Phenomenology", "Existentialism"], href: "/university/humanities/philosophy" },
      { name: "歴史学", nameEn: "History", items: ["古代史", "中世史", "近現代史", "社会史", "経済史", "文化史", "思想史", "科学史", "考古学", "史学史"], itemsEn: ["Ancient History", "Medieval History", "Modern History", "Social History", "Economic History", "Cultural History", "Intellectual History", "History of Science", "Archaeology", "Historiography"], href: "/university/humanities/history" },
      { name: "文学", nameEn: "Literature", items: ["日本文学", "英文学", "比較文学", "文芸批評", "詩学", "修辞学", "児童文学"], itemsEn: ["Japanese Literature", "English Literature", "Comparative Literature", "Literary Criticism", "Poetics", "Rhetoric", "Children's Literature"], href: "/university/humanities/literature" },
      { name: "言語学", nameEn: "Linguistics", items: ["音声学", "音韻論", "形態論", "統語論", "意味論", "語用論", "社会言語学", "歴史言語学", "応用言語学", "認知言語学"], itemsEn: ["Phonetics", "Phonology", "Morphology", "Syntax", "Semantics", "Pragmatics", "Sociolinguistics", "Historical Linguistics", "Applied Linguistics", "Cognitive Linguistics"], href: "/university/humanities/linguistics" },
      { name: "芸術学", nameEn: "Arts Studies", items: ["美術史", "音楽学", "演劇学", "映画学", "デザイン論", "写真論"], itemsEn: ["Art History", "Musicology", "Theater Studies", "Film Studies", "Design Theory", "Photography Theory"], href: "/university/humanities/arts" },
      { name: "宗教学", nameEn: "Religious Studies", items: ["比較宗教学", "神学", "仏教学", "聖書学", "宗教社会学"], itemsEn: ["Comparative Religion", "Theology", "Buddhist Studies", "Biblical Studies", "Sociology of Religion"], href: "/university/humanities/religious-studies" },
    ],
  },
  {
    id: "social",
    label: "社会科学",
    labelEn: "Social Sciences",
    color: "#ef4444",
    desc: "人間社会の仕組みを分析する",
    descEn: "Analyzing how human society works",
    lead: "制度、市場、政治、教育、心理、地域など、人間社会を構成する仕組みを分析する領域です。政策や実務との接続も強い分野です。",
    leadEn: "Disciplines that analyze the institutions, markets, politics, education, psychology, and communities that make up human society. Strongly connected to policy and practice.",
    subs: [
      { name: "経済学", nameEn: "Economics", items: ["ミクロ経済学", "マクロ経済学", "計量経済学", "行動経済学", "開発経済学", "労働経済学", "国際経済学", "金融経済学", "公共経済学", "環境経済学"], itemsEn: ["Microeconomics", "Macroeconomics", "Econometrics", "Behavioral Economics", "Development Economics", "Labor Economics", "International Economics", "Financial Economics", "Public Economics", "Environmental Economics"], href: "/university/social/economics" },
      { name: "経営学", nameEn: "Business Administration", items: ["経営戦略", "組織論", "マーケティング", "ファイナンス", "人的資源管理", "経営情報学", "イノベーション論"], itemsEn: ["Business Strategy", "Organization Theory", "Marketing", "Finance", "Human Resource Management", "Management Information Systems", "Innovation Studies"], href: "/university/social/business" },
      { name: "会計学", nameEn: "Accounting", items: ["複式簿記", "財務会計", "原価計算", "管理会計", "IFRS", "サステナビリティ会計"], itemsEn: ["Double-entry Bookkeeping", "Financial Accounting", "Cost Accounting", "Management Accounting", "IFRS", "Sustainability Accounting"], href: "/university/social/accounting" },
      { name: "法学", nameEn: "Law", items: ["憲法", "民法", "刑法", "商法", "行政法", "国際法", "法哲学", "知的財産法", "労働法", "環境法"], itemsEn: ["Constitutional Law", "Civil Law", "Criminal Law", "Commercial Law", "Administrative Law", "International Law", "Philosophy of Law", "IP Law", "Labor Law", "Environmental Law"], href: "/university/social/law" },
      { name: "政治学", nameEn: "Political Science", items: ["政治理論", "比較政治学", "行政学", "公共政策", "政治経済学", "選挙研究", "安全保障論"], itemsEn: ["Political Theory", "Comparative Politics", "Public Administration", "Public Policy", "Political Economy", "Electoral Studies", "Security Studies"], href: "/university/social/political-science" },
      { name: "国際関係論", nameEn: "International Relations", items: ["リアリズム", "リベラリズム", "コンストラクティビズム", "国際政治経済", "グローバルガバナンス", "経済安全保障"], itemsEn: ["Realism", "Liberalism", "Constructivism", "International Political Economy", "Global Governance", "Economic Security"], href: "/university/social/international-relations" },
      { name: "社会学", nameEn: "Sociology", items: ["社会理論", "家族社会学", "都市社会学", "犯罪社会学", "医療社会学", "教育社会学", "メディア社会学", "ジェンダー論", "社会階層論"], itemsEn: ["Social Theory", "Family Sociology", "Urban Sociology", "Criminology", "Medical Sociology", "Sociology of Education", "Media Sociology", "Gender Studies", "Social Stratification"], href: "/university/social/sociology" },
      { name: "心理学", nameEn: "Psychology", items: ["認知心理学", "発達心理学", "社会心理学", "臨床心理学", "神経心理学", "産業・組織心理学", "教育心理学", "進化心理学", "知覚心理学"], itemsEn: ["Cognitive Psychology", "Developmental Psychology", "Social Psychology", "Clinical Psychology", "Neuropsychology", "Industrial-Organizational Psychology", "Educational Psychology", "Evolutionary Psychology", "Perception"], href: "/university/social/psychology" },
      { name: "教育学", nameEn: "Education", items: ["教育哲学", "教育史", "教育方法学", "カリキュラム論", "生涯教育", "特別支援教育", "比較教育学"], itemsEn: ["Philosophy of Education", "History of Education", "Pedagogy", "Curriculum Studies", "Lifelong Learning", "Special Education", "Comparative Education"], href: "/university/social/education" },
      { name: "人類学", nameEn: "Anthropology", items: ["文化人類学", "社会人類学", "自然人類学", "言語人類学", "医療人類学"], itemsEn: ["Cultural Anthropology", "Social Anthropology", "Physical Anthropology", "Linguistic Anthropology", "Medical Anthropology"], href: "/university/social/anthropology" },
      { name: "地理学", nameEn: "Geography", items: ["自然地理学", "人文地理学", "経済地理学", "都市地理学", "GIS学"], itemsEn: ["Physical Geography", "Human Geography", "Economic Geography", "Urban Geography", "GIS"], href: "/university/social/geography" },
    ],
  },
  {
    id: "applied",
    label: "応用科学・工学",
    labelEn: "Applied Sciences & Engineering",
    color: "#3b82f6",
    desc: "科学知識を実社会に応用する",
    descEn: "Applying science to society",
    lead: "科学的知見を技術、医療、農業、看護などの形で社会実装する領域です。産業やインフラとの距離が近く、実践的な学問が並びます。",
    leadEn: "Disciplines that apply scientific knowledge to technology, medicine, agriculture, nursing, and more. Close to industry and infrastructure, with a practical orientation.",
    subs: [
      { name: "工学", nameEn: "Engineering", items: ["機械工学", "電気工学", "電子工学", "通信工学", "土木工学", "建築学", "化学工学", "材料工学", "航空宇宙工学", "原子力工学", "ロボット工学"], itemsEn: ["Mechanical Engineering", "Electrical Engineering", "Electronics Engineering", "Communications Engineering", "Civil Engineering", "Architecture", "Chemical Engineering", "Materials Engineering", "Aerospace Engineering", "Nuclear Engineering", "Robotics"], href: "/university/applied/engineering" },
      { name: "情報工学", nameEn: "Information Engineering", items: ["ソフトウェア工学", "データベース", "コンピュータネットワーク", "人工知能", "機械学習", "コンピュータビジョン", "自然言語処理", "ヒューマンコンピュータインタラクション"], itemsEn: ["Software Engineering", "Databases", "Computer Networks", "Artificial Intelligence", "Machine Learning", "Computer Vision", "Natural Language Processing", "Human-Computer Interaction"], href: "/university/applied/informatics" },
      { name: "医学", nameEn: "Medicine", items: ["内科学", "外科学", "小児科学", "産婦人科学", "精神医学", "放射線医学", "救急医学", "病理学", "薬理学", "公衆衛生学", "疫学"], itemsEn: ["Internal Medicine", "Surgery", "Pediatrics", "Obstetrics & Gynecology", "Psychiatry", "Radiology", "Emergency Medicine", "Pathology", "Pharmacology", "Public Health", "Epidemiology"], href: "/university/applied/medicine" },
      { name: "歯学", nameEn: "Dentistry", items: ["保存修復学", "口腔外科学", "矯正歯科学", "歯周病学"], itemsEn: ["Restorative Dentistry", "Oral Surgery", "Orthodontics", "Periodontics"], href: "/university/applied/dentistry" },
      { name: "薬学", nameEn: "Pharmacy", items: ["薬剤学", "薬物動態学", "臨床薬学", "天然物化学", "創薬科学"], itemsEn: ["Pharmaceutics", "Pharmacokinetics", "Clinical Pharmacy", "Natural Product Chemistry", "Drug Discovery"], href: "/university/applied/pharmacy" },
      { name: "農学", nameEn: "Agriculture", items: ["作物学", "園芸学", "畜産学", "林学", "水産学", "土壌学", "農業経済学", "食品科学"], itemsEn: ["Crop Science", "Horticulture", "Animal Science", "Forestry", "Fisheries", "Soil Science", "Agricultural Economics", "Food Science"], href: "/university/applied/agriculture" },
      { name: "獣医学", nameEn: "Veterinary Medicine", items: ["獣医病理学", "獣医外科学", "獣医公衆衛生学"], itemsEn: ["Veterinary Pathology", "Veterinary Surgery", "Veterinary Public Health"], href: "/university/applied/veterinary" },
      { name: "看護学", nameEn: "Nursing", items: ["基礎看護学", "成人看護学", "老年看護学", "小児看護学", "地域看護学"], itemsEn: ["Fundamentals of Nursing", "Adult Nursing", "Gerontological Nursing", "Pediatric Nursing", "Community Nursing"], href: "/university/applied/nursing" },
    ],
  },
  {
    id: "interdisciplinary",
    label: "学際・新領域",
    labelEn: "Interdisciplinary",
    color: "#8b5cf6",
    desc: "複数領域を横断する新しい学問",
    descEn: "New disciplines crossing fields",
    lead: "既存の分野の境界を横断し、社会課題や新技術に対応するために生まれた領域です。複数分野の言語を行き来するのが前提になります。",
    leadEn: "Disciplines that cross the boundaries of existing fields, born to address social challenges and new technologies. They assume fluency in the languages of multiple fields.",
    subs: [
      { name: "環境科学", nameEn: "Environmental Science", items: ["環境工学", "生態経済学", "気候変動科学", "環境政策", "サステナビリティ学"], itemsEn: ["Environmental Engineering", "Ecological Economics", "Climate Change Science", "Environmental Policy", "Sustainability Studies"], href: "/university/interdisciplinary/environmental-science" },
      { name: "認知科学", nameEn: "Cognitive Science", items: ["認知神経科学", "人工知能", "認知言語学", "認知心理学", "哲学（心の哲学）"], itemsEn: ["Cognitive Neuroscience", "Artificial Intelligence", "Cognitive Linguistics", "Cognitive Psychology", "Philosophy of Mind"], href: "/university/interdisciplinary/cognitive-science" },
      { name: "データサイエンス", nameEn: "Data Science", items: ["統計モデリング", "ビッグデータ解析", "機械学習応用", "データ可視化", "計算社会科学"], itemsEn: ["Statistical Modeling", "Big Data Analytics", "Applied Machine Learning", "Data Visualization", "Computational Social Science"], href: "/university/interdisciplinary/data-science" },
      { name: "生命情報科学", nameEn: "Bioinformatics", items: ["バイオインフォマティクス", "ゲノム科学", "システム生物学", "合成生物学"], itemsEn: ["Bioinformatics", "Genomics", "Systems Biology", "Synthetic Biology"], href: "/university/interdisciplinary/bioinformatics" },
      { name: "都市・地域研究", nameEn: "Urban & Regional Studies", items: ["都市計画", "地域政策", "スマートシティ", "交通工学", "防災学"], itemsEn: ["Urban Planning", "Regional Policy", "Smart Cities", "Transportation Engineering", "Disaster Mitigation"], href: "/university/interdisciplinary/urban-studies" },
      { name: "メディア・情報学", nameEn: "Media & Information Studies", items: ["情報社会学", "デジタルヒューマニティーズ", "ジャーナリズム論", "コミュニケーション学"], itemsEn: ["Information Sociology", "Digital Humanities", "Journalism Studies", "Communication Studies"], href: "/university/interdisciplinary/media-studies" },
      { name: "ジェンダー・文化研究", nameEn: "Gender & Cultural Studies", items: ["ジェンダー学", "クィア・スタディーズ", "ポストコロニアル研究", "文化研究（カルスタ）"], itemsEn: ["Gender Studies", "Queer Studies", "Postcolonial Studies", "Cultural Studies"], href: "/university/interdisciplinary/gender-studies" },
    ],
  },
];

export function getUniversityCategory(id: string) {
  return universityCategories.find((category) => category.id === id);
}

export function getUniversityCounts(category: UniversityCategory) {
  return {
    subCount: category.subs.length,
    itemCount: category.subs.reduce((sum, sub) => sum + sub.items.length, 0),
  };
}
