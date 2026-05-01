---
name: html-slide-prompt
description: Third HTML slide stage. Trigger when the user wants only page-by-page implementation instructions, html_slide_prompts.json, or HTML/CSS slide build prompts from DESIGN.md and slide_plan.json.
---

# HTML Slide Prompt

Use this skill for commands like:

- `$html-slide-prompt`
- "create html_slide_prompts.json"
- "write implementation prompts for each HTML slide"
- "convert the slide plan into build instructions"

## Goal

Create `html_slide_prompts.json`: one implementation-ready instruction object per slide.

## Inputs

- `DESIGN.md`
- `slide_plan.json`
- source files if facts need verification

## Required Output

Return valid JSON only. For every slide include:

- slide number
- page family
- slide title
- HTML layout family
- content blocks
- semantic structure
- CSS layout instructions
- responsive behavior
- chart/table/icon instructions
- assets required
- accessibility notes
- anti-patterns to avoid

## Hard Rules

- Do not render final HTML in this step.
- Do not use GPT image-generation language unless an image asset is explicitly needed.
- Keep instructions buildable with normal HTML/CSS/JS.
- Stop after `html_slide_prompts.json` unless the user explicitly asks to continue.
