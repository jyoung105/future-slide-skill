---
name: html-slide-plan
description: Second HTML slide stage. Trigger when the user wants only deck planning, slide ordering, evidence mapping, or slide_plan.json before implementing an HTML slide deck.
---

# HTML Slide Plan

Use this skill for commands like:

- `$html-slide-plan`
- "plan the HTML slide deck"
- "create slide_plan.json for web slides"
- "decide slide order before implementation"

## Goal

Create `slide_plan.json`: the deck story, slide order, content mapping, and HTML-friendly layout direction for each page.

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
- per-slide role, page family, core message, evidence, recommended HTML layout, and header/body/footer plan

## Hard Rules

- Do not write HTML yet.
- Do not create image-generation prompts.
- Use `DESIGN.md` as visual constraints.
- Prefer layouts that can be built cleanly with semantic HTML and CSS.
- Stop after `slide_plan.json` unless the user explicitly asks to continue.
