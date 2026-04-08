---
name: check
description: サイト全体のSEO・UI/UX・コード品質を監査し、改善ポイントをレポートする。
user-invocable: true
allowed-tools:
  - Read
  - Glob
  - Grep
  - Bash
  - Agent
---

# /check — サイト監査スキル

The Brief のコードベースを横断的に監査し、**SEO・UI/UX・アクセシビリティ・コード品質**の改善ポイントを洗い出してレポートします。

## 使い方

```
/check
/check seo        # SEOのみ
/check ux         # UI/UXのみ
/check a11y       # アクセシビリティのみ
/check [ページパス]  # 特定ページのみ（例: /check politics）
```

`$ARGUMENTS` が空の場合はサイト全体を対象にします。

---

## 監査フロー

### Phase 1: 構造把握

以下を確認する:

```bash
# ルート一覧
ls src/app/

# 主要ページファイル
find src/app -name "page.tsx" | head -50

# コンポーネント一覧
ls src/components/
```

### Phase 2: SEO 監査

#### 2-1. メタデータ完全性チェック

各 `page.tsx` に以下がすべて揃っているか確認:

- `export const metadata: Metadata` ブロック
- `title` — ページ固有のタイトル（サイト名を含む）
- `description` — 120〜160文字の説明文
- `alternates.canonical` — 正規URL
- `openGraph.title / description / url / type / locale / siteName`
- `twitter.card / title / description`

**確認コマンド例:**
```bash
grep -rL "alternates.*canonical" src/app/**/page.tsx
grep -rL "openGraph" src/app/**/page.tsx
```

#### 2-2. 構造化データ（JSON-LD）

- 記事ページ: `ArticleJsonLd` が含まれているか
- 一覧ページ: `BreadcrumbJsonLd` が含まれているか
- トップページ: `BreadcrumbJsonLd` があるか

```bash
grep -rL "BreadcrumbJsonLd" src/app/**/page.tsx
grep -rL "ArticleJsonLd" src/app/industry/**/[slug]/page.tsx
```

#### 2-3. サイトマップ完全性

`src/app/sitemap.ts` を読み、実際の `src/app/` ディレクトリと突合:

- すべての主要ルートが含まれているか
- 削除されたページが残っていないか
- `lastModified` が適切か

#### 2-4. OGP画像

各セクション・記事に `opengraph-image.tsx` と `twitter-image.tsx` があるか:

```bash
find src/app -name "opengraph-image.tsx" | sort
find src/app -name "twitter-image.tsx" | sort
```

#### 2-5. robots.txt / manifest.json

- `public/robots.txt` または `src/app/robots.ts` の内容確認
- `public/manifest.json` の有無と内容

---

### Phase 3: UI/UX 監査

#### 3-1. 見出し階層

各ページで H1 が1つだけあり、H2/H3 が適切な順序になっているか:

```bash
grep -rn "<h[1-6]" src/app/**/page.tsx | grep -v "className"
```

#### 3-2. ナビゲーション一貫性

- ヘッダー・フッター・パンくずリストが全ページで統一されているか
- 主要ページへのリンクが `/politics`, `/industry`, `/economy`, `/column`, `/university` にあるか

#### 3-3. モバイル対応

- `max-w-*`, `px-*`, `sm:`, `md:` などのレスポンシブ Tailwind クラスが使われているか
- テーブルは `overflow-x-auto` でスクロール対応しているか

#### 3-4. ローディング・エラー状態

- 空状態（記事0件など）の表示があるか
- 404ページ（`src/app/not-found.tsx`）があるか

---

### Phase 4: アクセシビリティ (a11y) 監査

#### 4-1. 画像の alt テキスト

```bash
grep -rn "<img" src/ --include="*.tsx" | grep -v "alt="
```

#### 4-2. インタラクティブ要素の aria ラベル

```bash
grep -rn "<button" src/components/ | grep -v "aria-label"
grep -rn "<svg" src/components/ | grep -v -e "aria-" -e "role="
```

#### 4-3. フォーカス管理

- `<Link>` や `<button>` に `:focus-visible` スタイルがあるか
- モーダル・ドロワーのフォーカストラップ

#### 4-4. カラーコントラスト

- `text-foreground/40` 以下（薄すぎる）のテキストが本文に使われていないか
- カラーアクセント（`brief-red` 等）が背景に対して十分なコントラストを持つか

---

### Phase 5: コード品質チェック

#### 5-1. 重複コード

- 同じレンダリングロジックを持つ page.tsx が複数ないか（共通コンポーネント化の機会）
- 類似した Diagrams コンポーネントのパターン統一

#### 5-2. 型安全性

```bash
npx tsc --noEmit 2>&1 | head -30
```

#### 5-3. ビルド警告

```bash
npm run build 2>&1 | grep -E "Warning|Error|warn" | head -20
```

#### 5-4. 未使用ファイル

- `src/components/` に import されていない孤立コンポーネントがないか
- `src/lib/` に参照されていない孤立データファイルがないか

---

### Phase 6: レポート出力

以下の形式でまとめる:

```
## 🔍 The Brief サイト監査レポート — YYYY-MM-DD

### 🔴 優先度 High（今すぐ対応）
- [ ] ...

### 🟡 優先度 Medium（次のスプリントで対応）
- [ ] ...

### 🟢 優先度 Low（余裕があれば）
- [ ] ...

### ✅ 問題なし
- ...

---
対象ファイル数: XX
チェック項目数: XX
```

各項目には必ず **ファイルパス・行番号・具体的な修正方法** を記載する。

---

## 判断基準

| 優先度 | 条件 |
|--------|------|
| 🔴 High | SEOクロールに影響、本番エラー、アクセシビリティ重大欠陥 |
| 🟡 Medium | ソーシャル拡散に影響（OGP欠如など）、UX低下 |
| 🟢 Low | コード品質、将来の保守性、マイナーなa11y改善 |

---

## 注意事項

- **修正は行わない**。問題点の列挙とレポートのみ。修正を実施する場合はユーザーの確認を取る。
- ページ数が多い場合は Agent を使って並列チェックする。
- `$ARGUMENTS` でページパスが指定された場合は、そのセクション配下のみを対象とする。
