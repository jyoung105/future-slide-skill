---
name: gpt-image-slide-design
description: First GPT image slide stage. Trigger when the user wants only design extraction, a slide style guide, or DESIGN.md from reference slide images for later GPT-image deck generation.
---

# GPT Image Slide Design

Use this skill for commands like:

- `$gpt-image-slide-design`
- "extract DESIGN.md from this slide"
- "analyze this reference slide style"
- "create the design system before slide generation"

## Goal

Create `DESIGN.md`: a reusable slide design system extracted from the visual reference.

Focus on presentation design, not source content summary.

## Inputs

- Reference slide image, screenshot, deck export, or visually structured report PDF.
- Optional user notes about audience or desired deck type.

## Required Output

Return or save one `DESIGN.md` with:

- design intent
- color system
- typography system
- layout families
- title/body/end page flow
- header/body/footer zoning
- grid, spacing, density, and alignment rules
- component rules for tables, charts, cards, icons, and diagrams
- observed vs inferred rules
- anti-patterns to avoid

## Hard Rules

- Treat the reference visual as the design authority.
- Do not infer story or deck narrative from the reference alone.
- Do not invent exact fonts, brand names, or hex colors unless justified.
- Mark uncertain design rules as inferred.
- Stop after `DESIGN.md` unless the user explicitly asks to continue.
