# 專案協作指南

## 專案技術基線

- 本專案使用 Next.js 15.5.4、React 19 與 TypeScript。
- 採用 Next.js App Router；路由與版面檔案位於 `src/app/`。
- 使用 Tailwind CSS v4 撰寫樣式，入口為 `src/app/globals.css`。
- 使用 pnpm 作為唯一的套件管理工具。所有套件安裝與 script 執行均使用 `pnpm`，例如 `pnpm install`、`pnpm run <script>` 或 `pnpm <script>`；不要使用 npm、yarn 或 bun。
- 維護 `pnpm-lock.yaml` 作為唯一 lockfile；不要新增或更新 `package-lock.json`。
- TypeScript 必須維持 `strict: true`，不得為了繞過型別錯誤而放寬嚴格設定、濫用 `any` 或忽略錯誤。

## 路由與檔案命名

- 保留目前在 `next.config.ts` 設定的 `*.page.tsx` 命名規則。
- App Router 的頁面使用 `page.page.tsx`，根版面使用 `layout.page.tsx`；新增路由時也必須遵循相同規則。
- 不要將檔案改回 Next.js 慣用的 `page.tsx` 或 `layout.tsx`，也不要移除或變更 `pageExtensions` 設定，除非需求明確要求。

## React 與元件原則

- 優先使用 Server Components。只有確實需要瀏覽器 API、互動狀態、事件處理或 React client-side hooks 時，才在最小必要範圍內加入 `"use client"`。
- 將 Client Component 邊界維持在葉節點，避免讓整個頁面或 layout 不必要地成為 Client Component。
- 元件應以單一明確職責設計，並盡量保持可重用；重複的 UI 或邏輯應抽成共用元件，而非複製貼上。
- 維持語意化 HTML、可存取性與響應式設計；互動元素應有合適的標籤、名稱與鍵盤可用性。

## 履歷內容與呈現分離

- 履歷文字、經歷、技能、專案與聯絡資料，應集中在獨立的資料模組（例如 `src/data/`）或型別化資料來源。
- UI 元件只負責版面與資料呈現；不要把大量履歷文案直接硬編碼在頁面或可重用元件內。
- 新增區塊時，優先建立可接收資料的元件，再由頁面組合內容與順序。

## 依賴與樣式

- 不要任意新增 dependency。優先使用 Next.js、React、TypeScript 與既有 Tailwind CSS v4 能力；只有在需求明確且現有工具無法合理完成時，才提出新增依賴的理由。
- 優先以 Tailwind utility classes 與既有全域主題變數實作樣式。除非是全域基礎樣式或無法用 utility class 清楚表達的情況，避免新增大量自訂 CSS。
- 使用 `next/image` 處理適用的圖片資源，並將公開靜態資源放在 `public/`。

## 驗證與交付

在完成程式碼或設定修改後，依變更範圍執行下列驗證：

```bash
pnpm run lint
pnpm exec tsc --noEmit
pnpm run build
```

- 若某項檢查未能執行或失敗，請清楚說明原因、影響範圍與已採取的處置。
- 不要修改或刪除現有檔案來掩蓋 lint、型別檢查或建置錯誤。
