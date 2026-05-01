import { useLocale } from "@/i18n/use-locale";
import { SectionHead } from "./section-head";
import { CodeBlock, ShellPrompt } from "./codeblock";

export function Install() {
  const { t } = useLocale();
  return (
    <section id="install" className="space-y-6">
      <SectionHead title={t("install.title")} />

      <div className="space-y-4">
        <div>
          <p className="mt-0 mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
            {t("install.cliTitle")} · {t("install.cliBody")}
          </p>
          <CodeBlock title="terminal">
            <ShellPrompt />
            npx skills add jyoung105/future-slide-skill
          </CodeBlock>
        </div>

        <div>
          <p className="mt-0 mb-2 text-xs uppercase tracking-wide text-neutral-500 dark:text-neutral-300">
            {t("install.manualTitle")} · {t("install.manualBody")}
          </p>
          <CodeBlock title="terminal">
            <ShellPrompt />
            mkdir -p ~/.codex/skills{"\n"}
            <ShellPrompt />
            cp -R skills/slide-design ~/.codex/skills/{"\n"}
            <ShellPrompt />
            cp -R skills/gpt-image-slide-plan ~/.codex/skills/{"\n"}
            <ShellPrompt />
            cp -R skills/gpt-image-slide-prompt ~/.codex/skills/{"\n"}
            <ShellPrompt />
            cp -R skills/gpt-image-slide-render ~/.codex/skills/
          </CodeBlock>
        </div>
      </div>
    </section>
  );
}
