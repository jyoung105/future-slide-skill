import { Check } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";

const KEYS = [
  "opt.l1",
  "opt.l2",
  "opt.l3",
  "opt.l4",
  "opt.l5",
  "opt.l6",
  "opt.l7",
];

export function Optimize() {
  const { t } = useLocale();
  return (
    <section className="space-y-6">
      <SectionHead title={t("opt.title")} />
      <ul className="flex flex-col gap-2.5">
        {KEYS.map((k) => (
          <li
            key={k}
            className="home-dimmable-item flex items-start gap-2.5 text-neutral-600 dark:text-neutral-400 dark:opacity-80"
          >
            <Check
              className="mt-1 h-3.5 w-3.5 shrink-0 text-primary"
              weight="bold"
              aria-hidden
            />
            <span>{t(k)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
