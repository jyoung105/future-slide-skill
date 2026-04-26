import { Translate } from "@phosphor-icons/react";
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
      className="cursor-pointer inline-flex items-center justify-center size-9 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700 transition-colors"
    >
      <Translate className="h-4 w-4" weight="regular" aria-hidden />
    </button>
  );
}
