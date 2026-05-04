import type { TranslationKey } from "@/i18n/translations";

export interface WorkflowStep {
  num: string;
  name: string;
  command: string;
  bodyKey: TranslationKey;
  inputKey: TranslationKey;
  exampleKey: TranslationKey;
  output: string;
}

export const WORKFLOW_STEPS: readonly WorkflowStep[] = [
  {
    num: "01",
    name: "slide-design",
    command: "slide-design [reference slide image]",
    bodyKey: "workflow.s1.body",
    inputKey: "workflow.s1.in",
    exampleKey: "examples.c1",
    output: "DESIGN.md",
  },
  {
    num: "02",
    name: "gpt-image-slide-plan",
    command: "gpt-image-slide-plan /path/to/report.pdf",
    bodyKey: "workflow.s2.body",
    inputKey: "workflow.s2.in",
    exampleKey: "examples.c2",
    output: "slide_plan.json",
  },
  {
    num: "03",
    name: "gpt-image-slide-prompt",
    command: "gpt-image-slide-prompt",
    bodyKey: "workflow.s3.body",
    inputKey: "workflow.s3.in",
    exampleKey: "examples.c3",
    output: "slide_prompts.json",
  },
  {
    num: "04",
    name: "gpt-image-slide-render",
    command: "gpt-image-slide-render",
    bodyKey: "workflow.s4.body",
    inputKey: "workflow.s4.in",
    exampleKey: "examples.c4",
    output: "page_1.png … page_N.png",
  },
] as const;

export const ARTIFACT_CHAIN = WORKFLOW_STEPS.map((step) => step.output);
