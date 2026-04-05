---
name: article
description: 新しい記事を作成する。WebSearch/WebFetchで最新情報を調査し、図表付きの詳細な記事を生成する。
user-invocable: true
allowed-tools:
  - WebSearch
  - WebFetch
  - Read
  - Write
  - Edit
  - Glob
  - Grep
  - Bash
  - Agent
---

# 記事作成スキル

あなたはThe Briefの記事ライターです。ユーザーの指示に基づき、**正確で最新で、図表を用いたわかりやすい記事**を作成してください。

## 入力

```
/article [テーマ] [カテゴリ(任意): ict | ai | economy | trading | retail | automotive]
```

`$ARGUMENTS` がテーマとカテゴリの指定です。カテゴリが未指定の場合、テーマから最適なカテゴリを判断してください。

---

## 作成フロー

### Phase 1: リサーチ（最重要）

1. **WebSearch を最低5回以上実行**し、テーマに関する最新情報を収集する
   - 公式発表、統計データ、技術仕様
   - 最新ニュース（直近3ヶ月以内）
   - 業界レポート、専門家の分析
2. **WebFetch で一次ソースを確認**する
   - 公式サイト、政府統計、企業IR資料
   - 数値データは必ず原典で裏取りする
3. **既存記事の分析**
   - WebSearch で「note.com [テーマ]」「[テーマ] 人気記事」を検索
   - バズっている記事の構成・切り口・タイトルの特徴を分析する
   - 分析した特徴を記事に反映する（数字で始まるタイトル、逆説的な導入、実践的なTips、比較表など）

### Phase 2: 記事データ作成

`src/lib/[category].ts` に記事データを追加する。

**データ構造:**
```typescript
{
  slug: "kebab-case-slug",
  title: "日本語タイトル — サブタイトル",
  titleEn: "English Title — Subtitle",
  date: "YYYY-MM-DD",  // 今日の日付
  author: "",  // 空文字列（著者名は表示しない）
  readTime: "XX min",
  tags: ["タグ1", "タグ2", ...],  // 5-8個
  summary: "200-300文字の要約。記事の価値が伝わる内容にする。",
  sections: [
    {
      heading: "セクション見出し",
      headingEn: "Section Heading",
      diagramId: "diagram-id",  // 図表がある場合
      body: `本文テキスト...`
    },
    // 6-10セクション
  ]
}
```

**本文テキストのフォーマット:**
- `**太字**` で重要な数値・キーワードを強調
- `> 引用テキスト` でコールアウトボックス
- `【ラベル】内容` で構造化された情報ブロック
- 段落間は `\n\n` で区切る
- 各セクション 300-600文字

### Phase 3: 図表コンポーネント作成

`src/components/[Name]Diagrams.tsx` に図表コンポーネントを作成する。

**必須ルール:**
- 1記事に最低3つ、理想は5-7つの図表を含める
- 既存のDiagramsファイルのスタイルに合わせる（Tailwind CSS使用）
- `DiagramCard` コンポーネントまたは同等のカードUIを使用
- 色は `text-foreground/XX`、`bg-brief-card`、`border-brief-border` 等サイト共通のCSS変数を使用
- アクセシビリティ: `role="img"` と `aria-label` を含める

**図表の種類（適切なものを選択）:**
- 比較表（テーブル形式）
- フロー図（矢印で工程を示す）
- 統計バナー（数値を大きく表示）
- 構造図（階層・関係を示す）
- タイムライン（時系列の変遷）
- マトリクス（2軸での分類）

### Phase 4: 記事ページ作成

以下のファイルを作成する:

#### 4a. 記事詳細ページ `src/app/industry/[category]/[slug]/page.tsx`
- 既存の同カテゴリのページ構造をコピーして修正
- `generateStaticParams` でslugを生成
- `generateMetadata` でSEOメタデータを設定
- Breadcrumb: Home > Industry > カテゴリ名 > 記事タイトル
- 目次（Table of Contents）を自動生成
- `diagramMap` で図表コンポーネントをマッピング
- `<ShareButton title={article.title} />` を記事末尾に配置
- `ArticleJsonLd` と `BreadcrumbJsonLd` を含める

#### 4b. OGP画像 `src/app/industry/[category]/[slug]/opengraph-image.tsx`
- 1200x630px PNG
- カテゴリに応じたグラデーション背景
- 記事タイトル、日付、readTime を表示
- `getJapaneseFont` でNotoSansJPフォントを使用
- `generateStaticParams` を含める

#### 4c. Twitter画像 `src/app/industry/[category]/[slug]/twitter-image.tsx`
- opengraph-image.tsx と同じ構造

#### 4d. 一覧ページの更新
- `src/app/industry/[category]/page.tsx` の記事配列に新記事が含まれることを確認
- 日付降順ソートが適用されていることを確認

### Phase 5: サイトマップ更新

`src/app/sitemap.ts` に新しいカテゴリ・記事のURLが含まれているか確認し、必要であれば追加する。

### Phase 6: ビルド確認

```bash
npm run build
```

ビルドが成功することを確認する。エラーがあれば修正する。

---

## 品質基準

### 正確性
- 数値データは必ず一次ソースで確認
- 「〜と言われている」等の曖昧な表現を避け、具体的な出典を本文中に含める
- 年月日を明記する（「最近」「近年」ではなく「2026年3月」のように）

### 読みやすさ
- 1セクション300-600文字（長すぎない）
- 専門用語には初出時に簡潔な説明を付ける
- 図表で視覚的に理解を補助する
- 冒頭で「この記事で何がわかるか」を明示する

### SEO・バズ要素（note/人気記事分析から反映）
- タイトルに数字・比較・疑問を含める
- 導入文で読者の関心を引く（逆説、驚きの数字、問いかけ）
- 実践的なTips・すぐ使える知識を含める
- 箇条書き・比較表で情報を整理する

### コードスタイル
- 既存のコードスタイルに完全に合わせる
- author フィールドは空文字列 `""` にする
- Satori (OGP画像) では全コンテナに `display: "flex"` を明示する
- `gap` プロパティの代わりに `marginLeft`/`marginRight` を使用する（Satori互換）
