import { GithubLogo } from "@phosphor-icons/react";
import { ThemeToggle } from "@/components/theme-toggle";
import { LangToggle } from "@/components/lang-toggle";

export function SiteHeader() {
  return (
    <header className="absolute top-12 left-0 right-0 md:top-6 z-50">
      <div className="w-full max-w-2xl mx-auto px-6 flex justify-end items-center gap-3">
        <a
          href="https://tonylee.im"
          target="_blank"
          rel="noreferrer noopener"
          className="text-sm text-neutral-500 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          tony
        </a>
        <div className="flex items-center gap-1">
          <a
            href="https://github.com/jyoung105/future-slide-skill"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="GitHub"
            title="GitHub"
            className="cursor-pointer inline-flex items-center justify-center size-9 rounded-md text-neutral-500 hover:text-neutral-900 hover:bg-neutral-200 dark:text-neutral-300 dark:hover:text-white dark:hover:bg-neutral-700 transition-colors"
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
