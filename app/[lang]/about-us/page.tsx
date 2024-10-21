import React from "react";
import { useTranslation } from "../../i18n";

export default async function AboutUs({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const { t } = await useTranslation(lang, "common");
  return <div>{t("about-us.title")}</div>;
}
