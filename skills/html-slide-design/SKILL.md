---
name: html-slide-design
description: First HTML slide stage. Trigger when the user wants only design extraction, a browser-implementable slide style guide, or DESIGN.md from reference visuals for an HTML deck.
---

# HTML Slide Design

Use this skill for commands like:

- `$html-slide-design`
- "extract an HTML slide design system"
- "make DESIGN.md for web slides"
- "analyze this reference for browser-rendered slides"

## Goal

Create `DESIGN.md`: a reusable design system that can be implemented in HTML/CSS.

## Inputs

- Reference slide image, screenshot, deck export, or visual PDF.
- Optional implementation constraints such as fixed 16:9 slides, responsive web deck, print/PDF export, or animation needs.

## Required Output

Return or save one `DESIGN.md` with:

- design intent
- color tokens with approximate values when possible
- type scale and font-class recommendations
- slide dimensions and aspect-ratio behavior
- layout families
- header/body/footer zones
- component rules for tables, charts, cards, icons, and diagrams
- CSS implementation notes
- anti-patterns to avoid

## Hard Rules

- Treat the reference visual as the design authority.
- Keep implementation details practical for HTML/CSS.
- Do not render the deck in this step.
- Stop after `DESIGN.md` unless the user explicitly asks to continue.
