---
name: renewal
description: サイト内のデータ（記事を除く）を指定日時点の最新情報に更新する。盲目的な書き換えではなく、まず鮮度を調査して実際に更新が必要な箇所を特定してから差分更新する。
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

# サイトデータ最新化スキル

あなたはThe Briefのデータキュレーターです。ユーザーの指示に基づき、**サイト内データ（記事本文を除く）を指定された日付時点の最新情報に更新**してください。

## 入力

```
/renewal [対象日付(任意、未指定なら本日)] [スコープ(任意): all | politics | economy | industry | university]
```

例:
- `/renewal` — 本日時点で全データ更新
- `/renewal 2026-04-07` — 指定日時点
- `/renewal economy` — 経済データのみ

---

## 重要原則

**盲目的な全ファイル書き換えは禁止。** 既に最新化されているデータを古い情報で上書きするリスクの方が高いため、必ず以下のフローで進める:

1. **鮮度調査** → 2. **差分特定** → 3. **ユーザー確認** → 4. **対象限定更新**

---

## 対象外（更新しない）

- `src/lib/*Articles.ts`（記事本文）
- `src/app/**/[slug]/page.tsx`（記事詳細ページ）
- `src/components/*Diagrams.tsx`（記事内図表）

---

## ワークフロー

### Phase 1: 鮮度調査（最重要）

**まず src/lib/ をスキャンして既存データの鮮度を把握する。** 全ファイルを書き換える前に、何が実際に古いのかを特定する。

1. `Bash: ls src/lib/` でデータファイル一覧を取得
2. 主要ファイルを `Read` してサンプリング:
   - **Politics**: `partyInfo.ts`, `cabinetPolicy.ts`, `politicsNews.ts`, `politics.ts`, `debates.ts`, `passed.ts`, `enacted.ts`
   - **Economy**: `economy.ts`
   - **Industry**: `industryFinancials.ts`, 各業界の `*.ts` / `*Companies.ts`（19業界）
   - **University**: `university.ts`
   - **i18n**: `i18n.ts`
3. 各ファイルの `lastUpdated` / `date` / `asOf` フィールドや本文中の年月を確認
4. **対象日との差分が30日以上ある項目** をリストアップ

### Phase 2: 差分レポート

ユーザーに以下を提示する:

```
鮮度調査結果:

✅ 既に最新（更新不要）:
- partyInfo.ts (政党リーダー、設立年は時間軸的に変化なし)
- cabinetPolicy.ts (lastUpdated: 2026-03〜04)
- politicsNews.ts (トップ記事: YYYY-MM-DD)

⚠️ 要更新の可能性:
- economy.ts の指標値 (lastUpdated: YYYY-MM-DD、X日経過)
- industryFinancials.ts (前回IR取得から数四半期経過)
- debates.ts の法案ステータス (会期進行による状態変化)

どのカテゴリを更新しますか？
1. 業界財務データ (ir skill 連携)
2. 政治法案ステータス
3. 経済指標値
4. 全部
5. なし（中止）
```

### Phase 3: ユーザー確認待ち

**ユーザーが明示的に対象を指定するまで実際の書き換えは行わない。** これにより、既に最新のデータを劣化させるリスクを防ぐ。

「すべて」と言われた場合でも、Phase 2で「要更新」と判定された項目に限定する。

### Phase 4: 対象限定更新

ユーザー指定の対象のみ実行:

#### 4a. 業界財務データの場合
→ `ir` skill のワークフローに従う（WebSearch で各社IR、`industryFinancials.ts` と `*Companies.ts` を更新）

#### 4b. 政治データの場合
- `WebSearch`: 「{法案名} 国会 審議状況」「閣議決定 {YYYY-MM}」「内閣支持率 {YYYY-MM}」
- `WebFetch`: kantei.go.jp, sangiin.go.jp, shugiin.go.jp の公式ページ
- `debates.ts` の法案ステータス（審議中/可決/施行）を更新
- `politicsNews.ts` に新規ニュース項目を追加（先頭に挿入、日付降順）
- `cabinetPolicy.ts` の `progress` / `current` / `lastUpdated` を更新

#### 4c. 経済指標の場合
- `WebSearch`: 「日本 CPI {YYYY-MM}」「日経平均 終値 {YYYY-MM-DD}」「USD/JPY {YYYY-MM-DD}」「日銀 政策金利」
- `WebFetch`: stat.go.jp, boj.or.jp, esri.cao.go.jp
- `economy.ts` の `economicIndicators` 配列を更新（value, change, sparkline, lastUpdated）

#### 4d. 大規模並列更新の場合
複数ドメイン同時更新時は `Agent` (general-purpose) を `worktree` isolation で並列実行し、それぞれ独立したブランチで作業させる。

### Phase 5: 整合性チェック

1. 数値の妥当性（前期比較で異常値ないか）
2. 日付の整合性（lastUpdated が対象日以前か）
3. 出典の信頼性（一次ソースか）
4. `npm run build` でビルド通過確認

### Phase 6: コミット

ブランチ命名規則（user feedback memo準拠）:
- データ更新内容ごとにブランチを分ける
- 例: `feature/refresh-economy-2026-04`, `feature/refresh-politics-bills-2026-04`
- 1ブランチに複数ドメインを混ぜない

---

## 注意事項

- **必ず一次ソース** から数値を取得する（推測・要約サイトは禁止）
- **日付は絶対表記** で記録する（「最近」「直近」ではなく「2026年4月7日」）
- **author フィールドは空文字** `""` にする
- **既に最新のデータを上書きしない** — Phase 1の調査結果を最優先する
- **記事本文（`*Articles.ts`、記事詳細ページ）には触れない**
- 対象日が未来日付の場合はユーザーに確認する
- WebSearch で十分な情報が得られない場合は、不確実性を明示してユーザーに判断を委ねる
