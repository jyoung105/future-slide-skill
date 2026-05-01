---
name: html-slide-render
description: Final HTML slide stage. Trigger when the user wants to implement or render an editable HTML slide deck from DESIGN.md, slide_plan.json, and html_slide_prompts.json.
---

# HTML Slide Render

Use this skill for commands like:

- `$html-slide-render`
- "build the HTML deck"
- "render the slides as HTML"
- "implement html_slide_prompts.json"

## Goal

Build an editable browser-rendered slide deck from the planned design and prompts.

## Inputs

- `DESIGN.md`
- `slide_plan.json`
- `html_slide_prompts.json`

## Default Output

Create a project-local folder such as:

```text
slides-html/
├── index.html
├── styles.css
├── slides.js
└── assets/
```

Use a simpler single-file `index.html` only when the user asks for a portable standalone artifact.

## Implementation Rules

- Build actual slides as the first screen, not a landing page.
- Preserve the extracted design system.
- Use stable 16:9 slide dimensions unless the user specifies another format.
- Use semantic HTML for slide content.
- Keep CSS tokens readable and centralized.
- Use SVG, CSS, or chart libraries only when they improve the slide content.
- Keep text legible and prevent overflow.
- Verify in a browser when possible.

## Hard Rules

- Do not use Codex native image generation as the primary renderer.
- Do not collapse dense analytical slides into generic card grids.
- Do not leave generated assets outside the workspace.
- Report the final HTML entry path and any verification performed.
