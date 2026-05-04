import type { Icon } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";
import type { TranslationKey } from "@/i18n/translations";

interface IconBulletListProps {
  icon: Icon;
  keys: readonly TranslationKey[];
}

export function IconBulletList({ icon: Icon, keys }: IconBulletListProps) {
  const { t } = useLocale();

  return (
    <ul className="flex flex-col gap-2.5">
      {keys.map((key) => (
        <li
          key={key}
          className="home-dimmable-item flex items-start gap-2.5 text-neutral-600 dark:text-neutral-400 dark:opacity-80"
        >
          <Icon
            className="mt-1 h-3.5 w-3.5 shrink-0 text-primary"
            weight="bold"
            aria-hidden
          />
          <span>{t(key)}</span>
        </li>
      ))}
    </ul>
  );
}
