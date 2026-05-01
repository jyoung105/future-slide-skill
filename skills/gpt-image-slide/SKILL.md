---
name: gpt-image-slide
description: End-to-end GPT image slide workflow. Trigger when the user wants to create a slide deck as generated images from a reference slide, source files, and a deck prompt. Runs design, plan, prompt, and render stages in order.
---

# GPT Image Slide Workflow

Use this skill when the user asks for the full GPT-image slide workflow, for example:

- `$gpt-image-slide`
- "create slide images from this reference slide and report"
- "make a deck with GPT image generation"
- "run the full future-slide image workflow"

This is the orchestrator. If the user asks for only one step, use the matching step skill instead:

- `$gpt-image-slide-design` for `DESIGN.md`
- `$gpt-image-slide-plan` for `slide_plan.json`
- `$gpt-image-slide-prompt` for `slide_prompts.json`
- `$gpt-image-slide-render` for final `page_<n>.png` images

## Required Sequence

Run these stages in order:

1. Extract `DESIGN.md` from the reference slide image or visual reference.
2. Build `slide_plan.json` from `DESIGN.md`, user files, and the deck request.
3. Build `slide_prompts.json` from `DESIGN.md` and `slide_plan.json`.
4. Render page images sequentially with Codex native image generation.

Do not skip ahead. Do not render before the prompt JSON exists.

## Output Contract

The full workflow should leave these files in the workspace:

- `DESIGN.md`
- `slide_plan.json`
- `slide_prompts.json`
- `page_1.png` through `page_N.png`

## Routing Rule

If the user mentions HTML, browser-rendered slides, editable web slides, or export from HTML, use the `html-slide` skill family instead.
