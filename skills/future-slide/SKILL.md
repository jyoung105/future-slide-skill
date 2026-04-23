---
name: future-slide
description: Orchestrates a strict 3-stage presentation workflow: extract slide DESIGN.md from a reference image, build a persuasive slide plan from user files and prompt, then generate page-by-page slide prompts in JSON while preserving the extracted visual system.
---

# FUTURE SLIDE — ORCHESTRATOR SKILL

This skill exists to prevent a common GPT failure mode: trying to design, plan, and write slides all at once.

You must execute the workflow in this order and never skip ahead:

1. **DESIGN EXTRACTION**
2. **DECK PLAN**
3. **PAGE PROMPTS**

The order is mandatory because the deck theme must come from the reference slide image first, and only then should user files and user intent shape the narrative and the page-level prompting.

## Core rule

When a reference slide image exists, you must treat it as the **design authority**.
When user files and user prompt exist, you must treat them as the **content authority**.
Do not reverse these roles.

- Reference image decides: theme, palette, typography, layout language, chart language, spacing, component style.
- User files and prompt decide: storyline, evidence, arguments, slide sequence, page content.

## Mandatory execution contract

You must always produce these three deliverables, in order:

### Deliverable 1 — `DESIGN.md`
A slide-design system extracted from the reference slide image.

### Deliverable 2 — `slide_plan.json`
A persuasive, logically ordered deck plan using the extracted design system plus user files and user prompt.

### Deliverable 3 — `slide_prompts.json`
A page-by-page prompt package that can be used to generate PPT slides or slide images while staying faithful to the extracted design language.

## Hard sequencing rules

- Never write slide-by-slide prompts before `DESIGN.md` is complete.
- Never finalize slide ordering before you have mapped user evidence to slides.
- Never let design extraction be contaminated by the semantic content of the reference slide.
- Never let slide prompts invent a new theme that conflicts with `DESIGN.md`.
- Never make body slides visually unrelated to one another; reuse a controlled layout family.

## Input priority rules

Always resolve conflicting instructions using this order:

1. **Reference slide image** for design language
2. **Explicit user prompt** for deck objective and audience
3. **User files** for facts, evidence, charts, examples, terminology
4. **Your own inference** only when the above are incomplete

If something is uncertain, mark it as uncertain. Do not hallucinate hidden design rules or hidden file content.

## Required output structure

Use the following section order in your answer:

1. `# DESIGN.md`
2. `# slide_plan.json`
3. `# slide_prompts.json`

If the user asks for intermediate output only, you may stop after the requested stage. Otherwise do all three.

## Pre-flight checklist

Before producing final output, verify:

- the reference image was used to derive the design system
- the design system was completed before planning
- the plan has a persuasive narrative flow
- every slide in the plan has a reason to exist
- every slide prompt references a layout family compatible with `DESIGN.md`
- cross-slide consistency is preserved, especially for body slides
- page numbering is explicit and sequential
- JSON is valid and internally consistent

## Failure handling

If the reference slide image is missing:
- say that design extraction cannot be grounded
- still provide a placeholder `DESIGN.md` template only if the user explicitly wants a starter

If user files are missing:
- build a plan from the user prompt only
- clearly mark evidence-light slides

If there are too many files:
- cluster them into themes
- map each theme to the most persuasive slide(s)
- do not dump files in upload order
