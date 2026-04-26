import { GithubLogo, Scales } from "@phosphor-icons/react";

export function SiteFooter() {
  return (
    <footer className="w-full py-12 border-t border-neutral-100 dark:border-white/10 mt-12 bg-neutral-50 dark:bg-black">
      <div className="max-w-3xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 dark:opacity-80 text-sm text-neutral-500 dark:text-neutral-300">
        <span className="inline-flex items-center gap-1.5">
          <Scales className="h-3.5 w-3.5" weight="regular" aria-hidden />
          <span>Apache-2.0</span>
        </span>
        <span aria-hidden className="text-neutral-300 dark:text-neutral-600">·</span>
        <a
          href="https://github.com/jyoung105/future-slide-skill"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 hover:text-neutral-900 dark:hover:text-white transition-colors"
        >
          <GithubLogo className="h-3.5 w-3.5" weight="regular" aria-hidden />
          <span>GitHub</span>
        </a>
        <span aria-hidden className="text-neutral-300 dark:text-neutral-600">·</span>
        <span className="text-neutral-400 dark:text-neutral-400">
          ©&nbsp;2026{" "}
          <a
            href="https://tonylee.im"
            target="_blank"
            rel="noreferrer noopener"
            className="text-primary hover:text-accent-foreground dark:hover:text-accent-foreground transition-colors"
          >
            Tony
          </a>
          . All rights reserved.
        </span>
      </div>
    </footer>
  );
}
