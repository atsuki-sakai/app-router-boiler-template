import React from "react";
import { useTranslation } from "@/app/i18n";

const Contact = async ({ params: { lang } }: { params: { lang: string } }) => {
  const { t } = await useTranslation(lang, "common");
  return <div>{t("contact.title")}</div>;
};

export default Contact;
