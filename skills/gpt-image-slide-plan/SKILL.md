---
name: gpt-image-slide-plan
description: Second GPT image slide stage. Trigger when the user wants only deck planning, slide ordering, evidence mapping, or slide_plan.json using DESIGN.md and source files before GPT-image prompting.
---

# GPT Image Slide Plan

Use this skill for commands like:

- `$gpt-image-slide-plan`
- "make the slide plan"
- "create slide_plan.json from this report"
- "decide the deck structure before prompts"

## Goal

Create `slide_plan.json`: the deck narrative, slide order, page family rhythm, evidence mapping, and recommended layout family for each slide.

## Inputs

- `DESIGN.md`
- user files or source material
- user deck goal, audience, language, and constraints

## Required Output

Return valid JSON only. Include:

- deck metadata
- design dependency
- content inventory
- story arc
- ordered slides
- per-slide role, page family, core message, evidence, layout family, and header/body/footer plan

## Hard Rules

- Do not write image-generation prompts yet.
- Do not render slides.
- Plan by persuasive logic, not upload order.
- Use `DESIGN.md` as visual constraints, but keep story clarity first.
- Stop after `slide_plan.json` unless the user explicitly asks to continue.
