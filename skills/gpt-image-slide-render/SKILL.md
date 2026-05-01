---
name: gpt-image-slide-render
description: Render slide images sequentially from DESIGN.md and slide prompt JSON using Codex native image generation, saving each output into the workspace with page-number filenames.
---

# GPT IMAGE SLIDE RENDER — RENDER PAGE IMAGES FROM `DESIGN.md` + PROMPT JSON

You are a slide production operator.
Your job is to take:

- `DESIGN.md`
- a page-level slide prompt JSON file such as `slide_prompts.json`

and generate final slide images one page at a time using Codex native image generation.

## Primary goal

Produce all requested slide images sequentially and save them into the current project using a stable page-number naming rule such as:

- `page_1.png`
- `page_2.png`
- `page_3.png`

Do not stop after generating only inline previews.
If the slides are meant for the project, copy the final selected images into the workspace.

## Required workflow

1. Read `DESIGN.md` first.
2. Read the prompt JSON file and confirm slide count and page order.
3. Generate slides **one by one**, in slide-number order.
4. After each generation:
   - inspect the generated image
   - verify it matches the intended layout family, page family, and major text/content structure
   - copy the chosen generated image from Codex's default generated-images directory into the workspace
   - save it using the page-number naming rule
5. Continue until every requested page is generated and saved.
6. Report the saved file paths.

## Hard rules

- Use Codex native image generation, not a custom OpenAI SDK runner.
- Do not batch all prompts into one generation call.
- Do not skip visual inspection between pages.
- Do not leave the final project asset only in Codex's generated-images cache.
- Do not overwrite unrelated existing files.
- If regenerating an existing page, overwrite only that page file unless the user asked for versioning.
- Keep page numbering exactly aligned with the prompt JSON.

## Prompt-construction rules

When converting each slide prompt entry into an image-generation prompt:

- preserve the page family: `title`, `body`, `end`, or `appendix`
- preserve the layout family named in the prompt JSON
- preserve header / body / footer zoning explicitly
- preserve table-led vs chart-led vs card-led vs diagram-led hierarchy explicitly
- preserve icon rules and infographic rules from the JSON
- preserve anti-pattern bans

Do not collapse a table-led research slide into a marketing card layout.
Do not collapse a comparison slide into a generic four-box template.
Do not improvise imagery if the slide is specified as table-led or text/chart-led only.

## Verification checklist per slide

Before accepting a generated page:

1. Is the page number correct?
2. Does the major composition match the intended layout family?
3. Are the header, body, and footer zones visibly separated as planned?
4. Does the slide follow the deck's design system?
5. Are icons absent/minimal/present according to the prompt?
6. Does the slide avoid the listed anti-patterns?
7. Is the text legible enough for the intended use?

If not, regenerate that page before moving to the next.

## Output behavior

- Save the final selected images in the current workspace.
- Use `page_<n>.png` by default.
- If the prompt JSON clearly implies a different extension or the tool output is not PNG, still normalize to a project-safe final asset naming rule unless the user explicitly asked otherwise.

## Example save contract

If the prompt JSON contains 5 slides, the final outputs should be:

- `page_1.png`
- `page_2.png`
- `page_3.png`
- `page_4.png`
- `page_5.png`

## Final completion rule

You are not done when the images are merely generated.
You are done only when:

- every requested page has been generated
- every page has been visually checked
- every page has been copied into the workspace with the correct numbered filename
