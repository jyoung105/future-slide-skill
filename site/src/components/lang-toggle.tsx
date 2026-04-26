import { Button } from "@/components/ui/button";
import { useLocale } from "@/i18n/use-locale";
import { cn } from "@/lib/utils";

export function LangToggle() {
  const { locale, setLocale, t } = useLocale();
  return (
    <Button
      variant="outline"
      size="sm"
      aria-label={t("a11y.langToggle")}
      title={t("a11y.langToggle")}
      onClick={() => setLocale(locale === "ko" ? "en" : "ko")}
      className="font-mono"
    >
      <span
        className={cn(
          "transition-colors",
          locale === "en" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        EN
      </span>
      <span className="text-outline" aria-hidden>
        /
      </span>
      <span
        className={cn(
          "transition-colors",
          locale === "ko" ? "text-foreground" : "text-muted-foreground",
        )}
      >
        KO
      </span>
    </Button>
  );
}
