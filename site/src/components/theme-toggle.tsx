import { Moon, Sun } from "@phosphor-icons/react";
import { ICON_BUTTON_CLASS } from "@/components/icon-button";
import { useTheme } from "@/components/theme-provider";
import { useLocale } from "@/i18n/use-locale";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useLocale();
  const label =
    theme === "dark" ? t("a11y.themeToLight") : t("a11y.themeToDark");

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={ICON_BUTTON_CLASS}
    >
      <span className="pointer-events-none">
        <Sun className="hidden h-4 w-4 dark:block" weight="regular" />
        <Moon className="h-4 w-4 dark:hidden" weight="regular" />
      </span>
    </button>
  );
}
