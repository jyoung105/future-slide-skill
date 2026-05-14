# Tightened Slide Image Prompts

Use these prompts only after the deck layout and image slot are chosen. Generated images are embedded assets, not standalone slides.

## Hard Rules

- Match the selected image slot before generating.
- Use one accent color only: International Klein Blue, Lemon Yellow, Lemon Green, or Safety Orange.
- Keep the Tightened Slide baseline: 12/16 column grid, Helvetica/Inter feel, asymmetry, hairline rules, sharp rectangles, large whitespace.
- Do not generate gradients, shadows, rounded corners, glass effects, 3D, neon, cartoons, fake logos, borders, slide chrome, page numbers, footers, signatures, or title bars.
- Infographic and UI text must match the deck language.
- Supported deck languages are English and Korean.
- For 21:9 assets, keep the subject in the central 70% safe area.
- Same-page image groups must share ratio, visual scale, margin density, and line weight.

## Slot Ratios

| Slot | Ratio | Use |
|---|---:|---|
| `s22-hero-21x9` | 21:9 | S22 hero strip |
| `s15-grid-21x9` | 21:9 | S15 image matrix adaptation |
| `s15-grid-16x10` | 16:10 | S15 denser UI or infographic grid |
| `s16-brief-21x9` | 21:9 | S16 brief card image row |
| `s16-brief-16x10` | 16:10 | S16 UI or chart cards |

## Documentary Photo

For S22 hero strips or case evidence.

```text
Generate a 21:9 ultra-wide documentary photograph about [page concept]. Style: Tightened Slide editorial, high contrast, restrained saturation, real office/city/product-use setting, large negative space, subject centered in the safe middle area. No AI robot, sci-fi interface, staged commercial stock pose, logo, watermark, text, title, footer, page chrome, signature, or border. Output only the core photo.
```

## System Or Relationship Infographic

For architecture, workflow, comparison, or concept diagrams.

```text
Generate a horizontal International Typographic infographic explaining [concept/process/system relationship]. Use Helvetica/Inter-like sans labels, a strict 12/16-column grid, sharp rectangular modules, 1px hairline rules, black/white/gray, and one [IKB blue / lemon yellow / lemon green / safety orange] accent. Text language: [English/Korean]. Keep each label under 8 words. No gradient, shadow, rounded corner, 3D, cartoon, neon, SaaS template look, logo, title, footer, page number, signature, decorative border, or slide frame. Ratio: [21:9/16:10].
```

## UI Redesign Asset

For screenshots, dashboards, workspaces, code, or product flows.

```text
Generate a horizontal UI scene that redesigns [screenshot/interface/workspace content] in the Tightened Slide layout language. Use a minimal dashboard/workspace structure, sharp panels, hairline rules, 12-column grid, restrained black/white/gray, and one [IKB blue / lemon yellow / lemon green / safety orange] accent. Text language: [English/Korean], short labels only. No real brand logos, gradients, shadows, rounded corners, 3D, neon, title bar, footer, page number, signature, border, or slide chrome. Ratio: 16:10.
```

## Multi-Image Grid Asset

For one image inside an S15 or S16 group.

```text
Generate one horizontal evidence image about [evidence A/B/C]. It belongs to a coordinated International Typographic image group, so keep the same ratio, element scale, margins, line weight, label density, black/white/gray palette, and single [IKB blue / lemon yellow / lemon green / safety orange] accent as the group. Text language: [English/Korean], short labels only. No title, footer, page number, logo, signature, decorative border, or slide frame. Ratio: [21:9/16:10].
```

## Minimal Data Poster

For numeric evidence and small chart assets.

```text
Generate a horizontal International Typographic data graphic. Core data: [number/comparison/ranking]. Meaning: [explanation]. Use oversized light-weight sans numerals, 1px hairline rules, sharp color blocks, black/white/gray, and one [IKB blue / lemon yellow / lemon green / safety orange] accent. Text language: [English/Korean], only necessary labels. No gradients, shadows, rounded corners, 3D, decorative border, page chrome, title, footer, page number, or signature. Ratio: [16:9/16:10].
```
