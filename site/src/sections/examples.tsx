import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";
import { CodeBlock, ShellComment, ShellPrompt } from "./codeblock";

const CHAIN = [
  "DESIGN.md",
  "slide_plan.json",
  "slide_prompts.json",
  "page_1.png … page_N.png",
];

export function Examples() {
  const { t } = useLocale();
  return (
    <section id="examples" className="space-y-6">
      <SectionHead title={t("examples.title")} />
      <p className="max-w-xl text-neutral-600 dark:text-neutral-400 dark:opacity-80">
        {t("examples.sub")}
      </p>

      <CodeBlock title="end-to-end">
        <ShellComment># 1) {t("examples.c1")}</ShellComment>
        {"\n"}
        <ShellPrompt />
        gpt-slide-design [reference slide image]
        {"\n\n"}
        <ShellComment># 2) {t("examples.c2")}</ShellComment>
        {"\n"}
        <ShellPrompt />
        gpt-slide-plan /path/to/report.pdf
        {"\n  "}
        {t("examples.c2note")}
        {"\n\n"}
        <ShellComment># 3) {t("examples.c3")}</ShellComment>
        {"\n"}
        <ShellPrompt />
        gpt-slide-prompt
        {"\n\n"}
        <ShellComment># 4) {t("examples.c4")}</ShellComment>
        {"\n"}
        <ShellPrompt />
        gpt-slide-generate
      </CodeBlock>

      <ol
        aria-label="artifact chain"
        className="flex flex-wrap items-center gap-2 text-sm text-neutral-500 dark:text-neutral-300 font-mono list-none p-0 m-0"
      >
        {CHAIN.flatMap((c, i) => {
          const items = [
            <li key={c} className="tag-pill">
              {c}
            </li>,
          ];
          if (i < CHAIN.length - 1) {
            items.push(
              <li
                key={`${c}-sep`}
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
