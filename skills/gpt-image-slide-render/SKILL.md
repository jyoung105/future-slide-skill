---
name: gpt-image-slide-render
description: Final GPT image slide stage. Trigger when the user wants to render slide images one by one from DESIGN.md and slide_prompts.json using Codex native image generation.
---

# GPT Image Slide Render

Use this skill for commands like:

- `$gpt-image-slide-render`
- "generate the slide images"
- "render page_1.png to page_N.png"
- "use slide_prompts.json to create images"

## Goal

Generate final slide images sequentially using Codex native image generation.

## Inputs

- `DESIGN.md`
- `slide_prompts.json`

## Required Output

Save final selected images in the workspace as:

- `page_1.png`
- `page_2.png`
- `page_3.png`
- continuing through the final slide

## Required Workflow

1. Read `DESIGN.md`.
2. Read `slide_prompts.json`.
3. Confirm slide count and numbering.
4. Generate one slide at a time in order.
5. Inspect each generated image before continuing.
6. Save the accepted image into the workspace with the correct page number.
7. Report saved paths.

## Hard Rules

- Use Codex native image generation.
- Do not batch all pages at once.
- Do not leave final assets only in a generated-image cache.
- Do not overwrite unrelated files.
- Stop after rendering unless the user asks for a different export format.
