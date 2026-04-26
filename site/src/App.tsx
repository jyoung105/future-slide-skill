import { SiteHeader } from "./sections/header";
import { Hero } from "./sections/hero";
import { Why } from "./sections/why";
import { Workflow } from "./sections/workflow";
import { Examples } from "./sections/examples";
import { Install } from "./sections/install";
import { Optimize } from "./sections/optimize";
import { SiteFooter } from "./sections/footer";
import { useLocale } from "./i18n/use-locale";

export function App() {
  const { t } = useLocale();
  return (
    <>
      <a
        href="#main"
        className="absolute -left-[9999px] top-0 z-[60] bg-primary px-3 py-2 text-primary-foreground focus:left-0"
      >
        {t("a11y.skip")}
      </a>
      <SiteHeader />
      <main id="main" className="relative">
        <div className="w-full max-w-2xl mx-auto px-6 pt-28 md:pt-24 pb-16 home-content space-y-16">
          <Hero />
          <Workflow />
          <Why />
          <Examples />
          <Install />
          <Optimize />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
