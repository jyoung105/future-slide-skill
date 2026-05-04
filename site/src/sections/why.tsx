import { X } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";
import type { TranslationKey } from "@/i18n/translations";
import { IconBulletList } from "./icon-bullet-list";
import { SectionHead } from "./section-head";

const KEYS: readonly TranslationKey[] = [
  "why.p1",
  "why.p2",
  "why.p3",
  "why.p4",
  "why.p5",
  "why.p6",
];

export function Why() {
  const { t } = useLocale();
  return (
    <section id="why" className="space-y-6">
      <SectionHead title={t("why.title")} />
      <p className="max-w-xl text-neutral-600 dark:text-neutral-400 dark:opacity-80">
        {t("why.sub")}
      </p>
      <IconBulletList icon={X} keys={KEYS} />
    </section>
  );
}
