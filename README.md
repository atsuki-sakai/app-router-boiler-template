This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Project Structure

### ディレクトリ概要

- **app/**: Next.jsアプリケーションのコードを言語別に整理しています。

  - **[lang]/**: 異なる言語の動的ルートを処理します。

    - **blog/**: ブログ関連のページ。
    
      - **[id]/page.tsx**: 個別ブログ投稿用の動的ページ。
      
      - **page.tsx**: ブログ一覧ページ。

    - **news/**: ニュース関連のページ。

      - **[id]/page.tsx**: 個別ニュースアイテム用の動的ページ。
      
      - **page.tsx**: ニュース一覧ページ。

    - **page.tsx**: ホームページ。

- **components/common/**: アプリケーション全体で使用される共通の再利用可能なコンポーネント。

  - **BreadCrumb.tsx**: パンくずリストナビゲーションコンポーネント。
  
  - **LangSwitcher.tsx**: 言語切替コンポーネント。

- **service/microcms/**: MicroCMSとの統合を担当するサービス層。

  - **microcmsService.ts**: MicroCMS APIからデータを取得するサービスクラス。

- **app/i18n/**: 国際化（i18n）の設定。

  - **index.ts**: i18nの初期化と翻訳フックの提供。
  
  - **locales/**: ローカリゼーションファイル。

    - **en/common.json**: 英語の翻訳ファイル。
    
    - **ja/common.json**: 日本語の翻訳ファイル。

- **README.md**: プロジェクトのドキュメント。