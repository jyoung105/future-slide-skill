import { Check } from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";
import type { TranslationKey } from "@/i18n/translations";
import { IconBulletList } from "./icon-bullet-list";
import { SectionHead } from "./section-head";

const KEYS: readonly TranslationKey[] = [
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
      <IconBulletList icon={Check} keys={KEYS} />
    </section>
  );
}
