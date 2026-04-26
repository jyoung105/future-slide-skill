import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";

const STEPS = [
  {
    num: "01",
    name: "gpt-slide-design",
    bodyKey: "workflow.s1.body",
    inKey: "workflow.s1.in",
    out: "DESIGN.md",
  },
  {
    num: "02",
    name: "gpt-slide-plan",
    bodyKey: "workflow.s2.body",
    inKey: "workflow.s2.in",
    out: "slide_plan.json",
  },
  {
    num: "03",
    name: "gpt-slide-prompt",
    bodyKey: "workflow.s3.body",
    inKey: "workflow.s3.in",
    out: "slide_prompts.json",
  },
  {
    num: "04",
    name: "gpt-slide-generate",
    bodyKey: "workflow.s4.body",
    inKey: "workflow.s4.in",
    out: "page_*.png",
  },
] as const;

export function Workflow() {
  const { t } = useLocale();
  return (
    <section id="workflow" className="space-y-6">
      <SectionHead title={t("workflow.title")} />
      <div className="flex flex-col gap-8">
        {STEPS.map((s) => (
          <div key={s.num} className="group home-dimmable-item">
            <div className="block featured-link">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <div className="flex flex-wrap items-baseline gap-3">
                  <span className="font-mono text-xs tracking-[0.1em] text-neutral-500 dark:text-neutral-400">
                    {s.num}
                  </span>
                  <h3 className="force-english-serif text-lg font-medium text-neutral-900 dark:text-neutral-100 group-hover:underline underline-offset-4 decoration-neutral-400">
                    {s.name}
                  </h3>
                  <span className="tag-pill">{s.out}</span>
                </div>
              </div>
              <p className="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400 dark:opacity-80">
                {t(s.bodyKey)}
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
                {t("workflow.in")} · {t(s.inKey)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
