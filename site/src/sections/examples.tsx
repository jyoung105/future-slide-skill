import { useLocale } from "@/i18n/use-locale";
import { ARTIFACT_CHAIN, WORKFLOW_STEPS } from "@/lib/workflow-data";
import { SectionHead } from "./section-head";
import { CodeBlock, ShellComment, ShellPrompt } from "./codeblock";

export function Examples() {
  const { t } = useLocale();
  const planStep = WORKFLOW_STEPS[1];

  return (
    <section id="examples" className="space-y-6">
      <SectionHead title={t("examples.title")} />
      <p className="max-w-xl text-neutral-600 dark:text-neutral-400 dark:opacity-80">
        {t("examples.sub")}
      </p>

      <CodeBlock title="end-to-end">
        {WORKFLOW_STEPS.map((step, index) => (
          <span key={step.num}>
            {index > 0 ? "\n\n" : null}
            <ShellComment>
              # {index + 1}) {t(step.exampleKey)}
            </ShellComment>
            {"\n"}
            <ShellPrompt />
            {step.command}
            {step === planStep ? (
              <>
                {"\n  "}
                {t("examples.c2note")}
              </>
            ) : null}
          </span>
        ))}
      </CodeBlock>

      <ol
        aria-label="artifact chain"
        className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-300 font-mono list-none p-0 m-0"
      >
        {ARTIFACT_CHAIN.flatMap((artifact, i) => {
          const items = [
            <li key={artifact} className="tag-pill">
              {artifact}
            </li>,
          ];
          if (i < ARTIFACT_CHAIN.length - 1) {
            items.push(
              <li
                key={`${artifact}-sep`}
                aria-hidden
                className="text-neutral-300 dark:text-neutral-600"
              >
                →
              </li>,
            );
          }
          return items;
        })}
      </ol>
    </section>
  );
}
