import { Translate } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";
import { cn } from "@/lib/utils";

export function LangToggle() {
  const { locale, setLocale, t } = useLocale();
  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "ko" ? "en" : "ko")}
      aria-label={t("a11y.langToggle")}
      title={t("a11y.langToggle")}
      className="cursor-pointer inline-flex items-center gap-1.5 h-9 px-2.5 rounded-md text-sm font-medium text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700 transition-colors"
    >
      <Translate className="h-4 w-4" weight="regular" aria-hidden />
      <span
        className={cn(
          "font-mono tracking-tight",
          locale === "en" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        EN
      </span>
      <span aria-hidden className="text-neutral-300 dark:text-neutral-600">
        /
      </span>
      <span
        className={cn(
          "font-mono tracking-tight",
          locale === "ko" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        KO
      </span>
    </button>
  );
}
