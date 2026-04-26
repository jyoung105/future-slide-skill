import {
  ArrowRight,
  Clock,
  GithubLogo,
  Scales,
} from "@phosphor-icons/react";
import { useLocale } from "@/i18n/use-locale";

export function Hero() {
  const { t } = useLocale();
  return (
    <section className="flex flex-col gap-6 pt-6 md:pt-12">
      <h1 className="home-dimmable-block force-english-grotesk text-[clamp(2.25rem,6vw,3.75rem)] leading-[1.05] font-normal uppercase tracking-tight text-neutral-900 dark:text-neutral-100">
        future-slide
      </h1>

      <div className="home-dimmable-block flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-neutral-500 dark:text-neutral-300 dark:opacity-80">
        <span className="inline-flex items-center gap-1.5">
          <Clock className="h-3 w-3" weight="regular" aria-hidden />
          <span>v0.0.2</span>
        </span>
        <span aria-hidden className="text-neutral-300 dark:text-neutral-600">
          |
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Scales className="h-3 w-3" weight="regular" aria-hidden />
          <span>Apache-2.0</span>
        </span>
      </div>

      <div className="home-dimmable-block max-w-none text-base leading-relaxed text-neutral-600 dark:text-neutral-400 dark:opacity-80">
        <p className="m-0">
          <span className="text-neutral-900 dark:text-neutral-100 font-medium">
            {t("hero.titleA")}
          </span>{" "}
          {t("hero.titleB")}
          <br />
          {t("hero.lede")}
        </p>
      </div>

      <div className="home-dimmable-block flex items-center">
        <a
          href="https://github.com/jyoung105/future-slide-skill"
          target="_blank"
          rel="noreferrer noopener"
          className="blog-forward-link group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent-foreground dark:hover:text-accent-foreground"
        >
          <GithubLogo className="h-4 w-4" weight="regular" aria-hidden />
          <span>{t("hero.ctaSkill")}</span>
          <ArrowRight
            className="blog-forward-link__icon h-4 w-4"
            weight="regular"
            aria-hidden
          />
        </a>
      </div>
    </section>
  );
}
