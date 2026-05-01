---
name: gpt-image-slide-prompt
description: Third GPT image slide stage. Trigger when the user wants only page-by-page GPT image prompts, slide_prompts.json, or prompt engineering from DESIGN.md and slide_plan.json.
---

# GPT Image Slide Prompt

Use this skill for commands like:

- `$gpt-image-slide-prompt`
- "create slide_prompts.json"
- "write image prompts for each slide"
- "convert the plan into generation prompts"

## Goal

Create `slide_prompts.json`: one detailed GPT image-generation prompt per slide.

## Inputs

- `DESIGN.md`
- `slide_plan.json`
- source files if facts need verification

## Required Output

Return valid JSON only. For every slide include:

- slide number
- slide role
- page family
- slide title
- layout family
- objective
- narrative function
- visual intent
- content blocks
- header/body/footer instructions
- design constraints
- content constraints
- image-generation notes

## Hard Rules

- Do not reorder the plan unless it is clearly broken.
- Do not render images in this step.
- Preserve the body-slide system from `DESIGN.md`.
- Make anti-generic rules explicit.
- Stop after `slide_prompts.json` unless the user explicitly asks to continue.
