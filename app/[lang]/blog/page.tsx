import React from "react";
import { useTranslation } from "../../i18n";
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
    title: t("blog.title"),
  };
}

export default async function Blog({
  params,
}: {
  params: { lang: string; page?: string };
}) {
  // const page = Number(params.page) || 1;

  // const { contents: blogs, totalCount } = await microCMS.getBlogs({
  //   offset: (page - 1) * PER_PAGE,
  //   limit: PER_PAGE,
  // });
  const { t } = await useTranslation(params.lang, "common");
  return (
    <div>
      <h2>{t("blog.title")}</h2>
      {/* <div>
        {page > 1 && <Link href={`/blogs?page=${page - 1}`}>前のページへ</Link>}
        {page < totalPages && (
          <Link href={`/blogs?page=${page + 1}`}>次のページへ</Link>
        )}
      </div> */}
    </div>
  );
}
