---
name: html-slide
description: End-to-end HTML slide workflow. Trigger when the user wants a slide deck as editable HTML/CSS/JS from a reference design, source files, and a deck prompt. Runs design, plan, prompt, and render stages in order.
---

# HTML Slide Workflow

Use this skill when the user asks for the full HTML slide workflow, for example:

- `$html-slide`
- "create an HTML slide deck"
- "make browser-rendered slides from this reference"
- "build editable web slides"

This is the HTML orchestrator. If the user asks for only one step, use the matching step skill instead:

- `$slide-design` for `DESIGN.md`
- `$html-slide-plan` for `slide_plan.json`
- `$html-slide-prompt` for `html_slide_prompts.json`
- `$html-slide-render` for final HTML/CSS/JS slide files

## Required Sequence

Run these stages in order:

1. Extract `DESIGN.md` from the reference visual.
2. Build `slide_plan.json` from `DESIGN.md`, user files, and the deck request.
3. Build `html_slide_prompts.json` with per-slide implementation instructions.
4. Implement an HTML deck and verify it in a browser when possible.

## Output Contract

The full workflow should leave these files in the workspace:

- `DESIGN.md`
- `slide_plan.json`
- `html_slide_prompts.json`
- an HTML slide deck, usually under `slides-html/`

## Routing Rule

If the user asks for GPT native image generation, PNG pages, or imagegen output, use the `gpt-image-slide` skill family instead.
