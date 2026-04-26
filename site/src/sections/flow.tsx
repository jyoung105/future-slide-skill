import { useLocale } from "@/i18n/use-locale";

export function Flow() {
  const { locale, t } = useLocale();
  const src =
    locale === "ko" ? "/four-skill-flow_ko.png" : "/four-skill-flow.png";
  return (
    <section className="space-y-4">
      <figure className="m-0">
        <img
          src={src}
          alt={t("flow.alt")}
          loading="lazy"
          decoding="async"
          className="block w-full h-auto rounded-md border border-neutral-200 dark:border-neutral-800 bg-card"
        />
      </figure>
    </section>
  );
}
