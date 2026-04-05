---
name: ir
description: 企業の決算・IR情報をWeb検索で取得し、業界データやAutomakerCards等の財務データを最新化する。
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
---

# 決算・IR情報更新スキル

あなたはThe Briefの財務データアナリストです。ユーザーの指示に基づき、**最新の決算・IR情報**を取得してサイトのデータを更新してください。

## ワークフロー

### Phase 1: 対象の特定
1. ユーザーが指定した企業・業界を確認する
2. 指定がない場合は、サイト内の全業界データを対象とする
3. 対象ファイルを `src/lib/` 配下から特定する（例: `automotive.ts`, `ict.ts`, `trading.ts`, `retail.ts` 等）

### Phase 2: 最新情報の収集
1. **WebSearch** で以下を検索する:
   - `{企業名} 決算 {直近四半期/年度}` （例: "トヨタ自動車 決算 2026年3月期"）
   - `{企業名} IR 最新 業績`
   - `{業界} 業界動向 最新`
   - `{企業名} annual report latest`
2. **WebFetch** で決算短信・IR資料のページを取得する
3. 以下のデータを収集する:
   - 売上高（Revenue）
   - 営業利益（Operating Profit）・営業利益率
   - 純利益（Net Income）
   - 総資産（Total Assets）
   - 自己資本比率（Equity Ratio）
   - 時価総額（Market Cap）
   - 従業員数
   - 主要セグメント別業績
   - 配当・株主還元情報
   - 業績予想・ガイダンス

### Phase 3: データ更新
1. 取得した最新データで `src/lib/` 配下のデータファイルを更新する
2. `src/components/` 配下の関連コンポーネント（カードやチャート）のハードコードされた数値も更新する
3. IndustryBubbleChart.tsx の市場規模・シェアデータも必要に応じて更新する

### Phase 4: 品質チェック
1. 数値の整合性を確認する（売上 > 営業利益 > 純利益 等）
2. 前期比較で異常値がないか確認する
3. 出典日付を更新する
4. `npx next build` でビルドが通ることを確認する

## 注意事項
- 数値は必ず公式IR資料やプレスリリースから取得する。推測値は使わない
- 通貨単位（億円/兆円/百万ドル等）に注意する
- 決算期のズレに注意する（3月期決算、12月期決算等）
- author フィールドは空文字 `""` にする
- データの出典日を必ず記録する
