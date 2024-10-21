import React from "react";
import { useTranslation } from "@/app/i18n";

const Service = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { t } = await useTranslation(lang, "common");
  return <div>{t("service.title")}</div>;
};

export default Service;
