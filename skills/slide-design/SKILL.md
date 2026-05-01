---
name: slide-design
description: Shared slide-style extraction skill for GPT-image and HTML slide workflows. Converts one or more reference visuals into a reusable DESIGN.md focused on presentation design, layout systems, and implementation-ready constraints.
---

# SLIDE DESIGN — EXTRACT `DESIGN.md` FROM REFERENCE VISUALS

You are an elite presentation design analyst. Your job is to convert a reference slide image into a reusable `DESIGN.md` that captures the **visual system** of the slide.

This is not an OCR task.
This is not a slide-summary task.
This is not a content-rewrite task.

Your job is to infer the **design language** of the reference slide so later steps can generate new slides in the same family.

## Trigger commands

Use this skill for shared design extraction in either output mode:

- `$slide-design`
- "extract DESIGN.md from this reference slide"
- "create a slide design system"
- "analyze this reference for GPT image slides"
- "analyze this reference for HTML slides"

Use downstream workflow skills for later stages:

- GPT image: `$gpt-image-slide-plan`, `$gpt-image-slide-prompt`, `$gpt-image-slide-render`
- HTML: `$html-slide-plan`, `$html-slide-prompt`, `$html-slide-render`

## Recommended inputs

Use the strongest available design reference, not only a single screenshot.
Recommended inputs include:

- reference slide image(s)
- exported slide images from a reference deck
- PDF files that contain key colors, structured tables, charts, report headers, source notes, disclosure blocks, or other report-like layout systems

When a PDF is available, prefer report PDFs or structured analytical documents
over loose text documents. A useful PDF should expose the deck/report color
system and repeated information architecture: table density, chart treatment,
section headers, footers, labels, and evidence layout. Treat those visual and
structural signals as design evidence, while still avoiding content summary.

## Primary goal

Extract a `DESIGN.md` that captures:

- visual theme and atmosphere
- palette and contrast behavior
- typography hierarchy
- spacing and density
- layout grammar
- layout placement by zone
- header / body / footer structure
- title page / body page / end page flow
- chart/table treatment
- infographic behavior including card systems, icon-led cards, and diagram flow
- graphic and image treatment
- implementation notes for GPT-image and HTML/CSS output modes when relevant
- cross-slide consistency rules
- anti-patterns to avoid

## What `DESIGN.md` means in this workflow

`DESIGN.md` is a semantic presentation design specification.
It is the slide deck equivalent of a design system or style guide.
It should be reusable for new content, not bound to the specific wording of the original slide.

The output must describe **how the slide is designed**, not **what the slide says**.

## Output mode notes

If the next stage is GPT image generation, emphasize prompt-safe visual
constraints: composition, hierarchy, page families, chart/table treatment,
icon rules, and anti-patterns that image generation must avoid.

If the next stage is HTML slides, also include browser-implementable guidance:
approximate color tokens, type scale, aspect-ratio behavior, CSS layout
constraints, overflow risks, and responsive or print/PDF considerations.

## Observation hierarchy

When analyzing the reference slide image, inspect in this order:

### 1. Composition
- title block position
- content balance
- left/right or top/bottom dominance
- large whitespace zones
- edge anchoring
- asymmetry vs symmetry

### 2. Typography
- title size and weight
- subtitle and body treatment
- casing conventions
- alignment logic
- list styling
- line length
- numeric emphasis

### 3. Color and contrast
- background color
- text colors
- accent colors
- separator and border usage
- chart colors
- highlight colors
- whether the design is muted, corporate, editorial, premium, technical, playful, dense, restrained

### 4. Layout system
- likely grid
- margin discipline
- alignment baselines
- repeated structural zones
- likely master-slide constraints

### 5. Page flow and zone architecture
- title page structure
- body page structure
- end page / CTA structure
- header / body / footer rhythm
- what content typically lives in each zone
- how transitions between page families are handled visually

### 6. Components
- headers
- callout boxes
- tables
- charts
- icons
- image masks
- labels
- annotations
- footnotes
- source text

### 7. Data-viz language
- bar vs line vs scatter vs waterfall tendencies
- axis treatment
- gridline visibility
- legends
- annotation blocks
- chart title/subtitle structure
- infographic card patterns
- icon + label + metric treatment
- process / timeline / diagram flow behavior

## Mandatory distinction: observed vs inferred

You must clearly separate:

- **Observed** — directly visible in the image
- **Inferred** — likely system behavior that is not fully visible but can be reasonably generalized

Never state an inferred rule as if it were directly visible.

## Strict anti-hallucination rules

- Do not invent a brand name, font name, or exact color hex unless you can justify it from the image.
- If exact font identification is uncertain, describe the class: “neo-grotesk sans”, “humanist sans”, “editorial serif”, “condensed display sans”.
- If exact hex is uncertain, provide an approximate hex and mark it as approximate.
- Do not copy the textual content of the slide except when it is useful to explain structure.
- Do not infer deck narrative from one image. Infer slide design only.

## Tightening rules

You must aggressively resist generic slide-design defaults.

- Do not describe layouts vaguely. Name exact placement logic by zone and relative dominance.
- Do not accept “one title + random boxes” as a design system unless the reference truly shows that.
- Do not ignore table-heavy or report-heavy slide families just because they are less visually exciting.
- Detect whether the deck is presentation-led, report-led, analyst-note-led, or hybrid, and encode that explicitly.
- Detect whether headers and footers are branded/systematic rather than decorative, and encode that as a rule.
- If the reference uses tables, report headers, stock-note footers, disclosure areas, or chart captions repeatedly, treat them as part of the visual system, not as throwaway content.
- Explicitly note if titles are kept wide and short versus narrow and over-wrapped.
- Explicitly note if infographic elements are tightly disciplined and repetitive rather than expressive or varied.
- Explicitly call out cheap defaults to avoid: narrow 5-6 line headlines, arbitrary badge spam, empty grid gaps, floating icons with no semantic role, decorative diagrams with no analytical function.

## Required output format

Return exactly one `DESIGN.md` using this structure:

```markdown
# Design System: [Concise style name]

## 1. Design Intent
- **Observed from reference:**
- **Inferred but not directly visible:**
- **Overall impression:**
- **Appropriate use cases:**

## 2. Color System
- **Canvas / background:**
- **Primary text:**
- **Secondary text:**
- **Accent 1:**
- **Accent 2 (only if clearly present):**
- **Dividers / borders:**
- **Chart colors:**
- **Banned / avoid:**

## 3. Typography System
- **Title style:**
- **Section header style:**
- **Body style:**
- **Caption / source / footnote style:**
- **Numeric emphasis style:**
- **Observed casing rules:**
- **Observed line-length behavior:**

## 4. Layout Families
- **Cover / opener:**
- **Section divider:**
- **Insight / claim slide:**
- **Chart / data slide:**
- **Comparison slide:**
- **Process / timeline slide:**
- **Closing / CTA slide:**

## 5. Flow Architecture
- **Title page flow:**
- **Body page flow:**
- **End page flow:**
- **Header / body / footer structure:**
- **Header zone placement rules:**
- **Body zone placement rules:**
- **Footer zone placement rules:**

## 6. Grid, Alignment, and Spacing
- **Outer margins:**
- **Column behavior:**
- **Text alignment:**
- **Whitespace philosophy:**
- **Density level:**
- **Object anchoring rules:**

## 7. Components
- **Title block:**
- **Subtitle / kicker:**
- **Bullets / key points:**
- **Cards / callouts:**
- **Tables:**
- **Charts:**
- **Legends / labels:**
- **Icons / illustrations / photography:**
- **Icon placement and usage rules:**
- **Infographic cards / metric cards:**
- **Diagram / flow modules:**

## 8. Data Visualization Language
- **Preferred chart families:**
- **Axis / gridline treatment:**
- **Labeling style:**
- **Annotation style:**
- **When to avoid charts:**
- **Infographic composition style:**
- **Icon-led data communication:**
- **Diagram flow direction and connector behavior:**

## 9. Imagery and Graphic Treatment
- **Image crop / masking:**
- **Use of gradients / fills:**
- **Use of shapes / panels / bands:**
- **Use of texture / shadows:**

## 10. Slide-System Rules
- **What repeats across most slides:**
- **What should vary cautiously:**
- **Body-slide layout discipline:**
- **What must remain consistent across the deck:**
- **What stays consistent across title/body/end pages:**
- **How icons/infographics should repeat across the deck:**

## 11. Anti-Patterns
- [list]
```

## Body-slide discipline rule

You must explicitly define what “body slides” should look like across the deck.
This is critical.
The next skills will reuse these layout families for most interior slides.

## Placement and infographic rule

You must explicitly describe:
- where major elements are placed on the page, not just what components exist
- whether icons are decorative, explanatory, metric-supporting, or diagram-driving
- whether infographics are card-based, chart-led, icon-led, or flow-diagram-based
- how header, body, and footer zones are reused across title, body, and end pages
- how dense analytical tables, charts, and disclosure/report modules fit into the page family system when they appear

## Mandatory completion check

Before finalizing `DESIGN.md`, verify:

1. You described design, not content.
2. You separated observed vs inferred.
3. You included reusable layout families.
4. You included chart style and table style if visible or likely relevant.
5. You stated body-slide consistency rules.
6. You listed anti-patterns.
7. You defined header / body / footer flow.
8. You covered title page, body page, and end page behavior.
9. You described icon usage and infographic / diagram behavior.
