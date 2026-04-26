import type { ReactNode } from "react";

export function CodeBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-md border border-neutral-200 bg-[#1a1a1a] shadow-sm dark:border-neutral-800">
      <div className="flex items-center gap-1.5 border-b border-neutral-700 bg-neutral-800 px-3 py-2">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[0.7rem] uppercase tracking-[0.08em] text-neutral-400">
          {title}
        </span>
      </div>
      <pre className="m-0 overflow-x-auto whitespace-pre p-4 font-mono text-[0.86rem] leading-[1.65] text-neutral-100">
        {children}
      </pre>
    </div>
  );
}

export function ShellComment({ children }: { children: ReactNode }) {
  return <span className="italic text-neutral-500">{children}</span>;
}

export function ShellPrompt() {
  return (
    <span className="select-none pr-1.5 text-[var(--terra-light)]">$</span>
  );
}
