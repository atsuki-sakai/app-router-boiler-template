import React from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";
import { MicroCMSService } from "@/service/microcms/microcmsService";

// const PER_PAGE = 10;
// const microCMS = new MicroCMSService();

export async function generateMetadata({
  params,
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(params.lang, "common");
  return {
    title: t("news.title"),
  };
}

const News = async ({
  params,
}: {
  params: { lang: string; page?: string };
}) => {
  // const page = Number(params.page) || 1;
  // const { contents: newslist, totalCount } = await microCMS.getNews({
  //   offset: (page - 1) * PER_PAGE,
  //   limit: PER_PAGE,
  // });
  const { t } = await useTranslation(params.lang, "common");

  return (
    <div>
      <h2>{t("news.title")}</h2>
      {/* {newslist.map((news) => (
        <div key={news.id}>
          <h3>{news.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: news.body }} />
        </div>
      ))}
      <div>
        {page > 1 && <Link href={`/news?page=${page - 1}`}>前のページへ</Link>}
        {page < totalCount && (
          <Link href={`/news?page=${page + 1}`}>次のページへ</Link>
        )}
      </div> */}
    </div>
  );
};

export default News;
