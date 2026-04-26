import { Moon, Sun } from "@phosphor-icons/react";
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
      className="cursor-pointer inline-flex items-center justify-center size-9 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700 transition-colors"
    >
      <span className="pointer-events-none">
        <Sun className="hidden h-4 w-4 dark:block" weight="regular" />
        <Moon className="h-4 w-4 dark:hidden" weight="regular" />
      </span>
    </button>
  );
}
