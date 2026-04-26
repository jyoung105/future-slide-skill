import { X } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";

const KEYS = ["why.p1", "why.p2", "why.p3", "why.p4", "why.p5", "why.p6"];

export function Why() {
  const { t } = useLocale();
  return (
    <section id="why" className="space-y-6">
      <SectionHead title={t("why.title")} />
      <p className="max-w-xl text-neutral-600 dark:text-neutral-400 dark:opacity-80">
        {t("why.sub")}
      </p>
      <ul className="flex flex-col gap-2.5">
        {KEYS.map((k) => (
          <li
            key={k}
            className="home-dimmable-item flex items-start gap-2.5 text-neutral-600 dark:text-neutral-400 dark:opacity-80"
          >
            <X
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
