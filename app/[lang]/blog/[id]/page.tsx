import React from "react";
import { notFound } from "next/navigation";
import { useTranslation } from "@/app/i18n";
// import { MicroCMSService } from "@/service/microcms/microcmsService";

// const microCMS = new MicroCMSService();

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const blog = await microCMS.getBlogsById(params.id);
//   if (!blog) {
//     return {};
//   }
//   return {
//     title: blog.title,
//     description: blog.content
//       .replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")
//       .slice(0, 100),
//   };
// }

// export async function generateStaticParams() {
//   const response = await microCMS.getBlogs();
//   return response.contents.map((blog) => ({
//     id: blog.id,
//   }));
// }

const BlogId = async ({ params }: { params: { lang: string; id: string } }) => {
  //   const blog = await microCMS.getBlogsById(params.id);
  //   if (!blog) {
  //     return notFound();
  //   }
  const { t } = await useTranslation(params.lang, "common");
  return <div>{t("blog.title")}</div>;
};

export default BlogId;
