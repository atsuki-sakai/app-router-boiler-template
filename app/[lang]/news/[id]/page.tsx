import React from "react";
import { useTranslation } from "@/app/i18n";
import { MicroCMSService } from "@/service/microcms/microcmsService";

// const microCMS = new MicroCMSService();

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const news = await microCMS.getNewsById(params.id);
//   if (!news) {
//     return {};
//   }
//   return {
//     title: news.title,
//     description: news.body
//       .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
//       .slice(0, 100),
//   };
// }

// export async function generateStaticParams() {
//   const response = await microCMS.getNews();
//   return response.contents.map((news) => ({
//     id: news.id,
//   }));
// }

const NewsId = async ({ params }: { params: { lang: string; id: string } }) => {
  const { t } = await useTranslation(params.lang, "common");
  //   const news = await microCMS.getNewsById(params.id);
  return <div>{t("news.title")}</div>;
};

export default NewsId;
