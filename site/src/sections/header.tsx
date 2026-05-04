import { GithubLogo } from "@phosphor-icons/react";
import { ICON_BUTTON_CLASS } from "@/components/icon-button";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";
import { PROJECT_META } from "@/lib/project-meta";

export function SiteHeader() {
  return (
    <header className="absolute top-12 left-0 right-0 md:top-6 z-50">
      <div className="w-full max-w-2xl mx-auto px-6 flex justify-end items-center gap-3">
        <a
          href={PROJECT_META.authorUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          tony
        </a>
        <div className="flex items-center gap-1">
          <a
            href={PROJECT_META.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            title="GitHub"
            className={ICON_BUTTON_CLASS}
          >
            <GithubLogo className="h-4 w-4" weight="regular" aria-hidden />
          </a>
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
