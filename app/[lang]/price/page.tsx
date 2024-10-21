import React from "react";
import { useTranslation } from "@/app/i18n";

const Price = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { t } = await useTranslation(lang, "common");
  return <div>{t("price.title")}</div>;
};

export default Price;
