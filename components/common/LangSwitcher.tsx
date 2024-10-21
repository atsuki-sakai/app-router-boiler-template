import { useTranslation } from "@/app/i18n/index";
import { languages } from "@/app/i18n/settings";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import LangSwitchLink from "./LangSwitchLink";

async function LangSwitcher({ currentLang }: { currentLang: string }) {
  const { t } = await useTranslation(currentLang, "common");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          {t("components.common.currentLanguage")}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{t("menu.switchLanguage")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {languages.map((lang: string) => (
          <LangSwitchLink key={lang} lang={lang} currentLang={currentLang} />
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default LangSwitcher;
