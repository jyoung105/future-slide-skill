import { Translate } from "@phosphor-icons/react";
import { ICON_BUTTON_CLASS } from "@/components/icon-button";
import { useLocale } from "@/i18n/use-locale";

export function LangToggle() {
  const { locale, setLocale, t } = useLocale();
  const label = t("a11y.langToggle");
  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "ko" ? "en" : "ko")}
      aria-label={label}
      title={label}
      className={ICON_BUTTON_CLASS}
    >
      <Translate className="h-4 w-4" weight="regular" aria-hidden />
    </button>
  );
}
