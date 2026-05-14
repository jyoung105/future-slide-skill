# Tightened Slide Layouts

This file describes the registered Tightened Slide layouts and when to use them. Body slides must use `S01` to `S22`. Do not invent new page structures.

## Baseline

- Use Inter, Helvetica, Arial, and system sans fonts in English mode.
- Use SUIT, Pretendard, Noto Sans KR, and Noto Sans in Korean mode.
- Use one accent color per deck.
- Use 16-column grid thinking even when the markup uses local CSS grids.
- Use sharp rectangles, hairline rules, and large whitespace.
- Do not use gradients, shadows, rounded cards, glass effects, neon effects, or decorative borders.
- Large type uses `font-weight:200` or `300`.
- Body text usually uses `300`; small category labels use `600`.
- Large font sizes must use `min(Xvw,Yvh)` with enough `vh` headroom.
- Put category or meta text above the title, not beside it.
- The `.canvas-card` already provides page padding. Do not add another full-width inner padding layer.
- Keep captions, footnotes, and low labels above the bottom navigation area.
- SVG is for geometry only. Put all readable labels in HTML.

## Language Modes

English mode:

- Use `<html lang="en" data-language="en">`.
- Write concise sentence case titles.
- Keep labels short and diagram text under eight words where possible.

Korean mode:

- Use `<html lang="ko" data-language="ko">`.
- Write compact Korean titles and short body lines.
- Keep product names and technical terms consistent across slides.

## Layout Planning Table

Before writing slides, draft this table:

```text
page -> data-layout -> reason -> image slot
```

Example:

```text
01 -> S01 -> cover and topic frame -> none
02 -> S03 -> central thesis -> none
03 -> S08 -> before and after comparison -> none
04 -> S14 -> loop model -> none
05 -> S22 -> product evidence -> s22-hero-21x9
06 -> S10 -> closing takeaways -> none
```

## Layout Diversity

- A 7 or 8 page deck should use at least six different `Sxx` layouts.
- A deck with 10 or more pages should use at least eight different `Sxx` layouts.
- Avoid three consecutive pages with the same body structure.
- Test decks should include a cover, a closing page, one comparison or timeline, one structure diagram, and one image layout.

## Registered Layouts

### S01 Index Cover

Use for deck openers or section openers. It carries the title, subtitle, and metadata. Keep it bold, sparse, and highly structured.

Recommended classes: `.slide.accent`, `.canvas-card`, `.chrome-min`, `.ascii-bg`, `.h-hero`, `.lead`.

### S02 Vertical Timeline + KPI

Use for evolution over time with real numeric signals. Each node needs a date or stage, a metric, and a short explanation. If there is no numeric signal, use `S11`.

Recommended classes: `.timeline-v`, `.tl-node`, `.tl-axis`, `.dot`, `.kpi-row-4`.

### S03 Split Statement

Use for a thesis, chapter statement, or strong claim. Keep one large idea on the left and a short explanation on the right.

Recommended classes: `.slide.split`, `.half`, `.b-ink`, `.b-paper`, `.h-statement`.

### S04 Six Cells

Use for exactly six peer items: concepts, features, principles, or short definitions. Do not force four or five items into this layout.

Recommended classes: `.sub-grid-3-2`, `.card-fill`, `.t-cat`, `.body-sm`.

### S05 Three Layers

Use for three stages, three layers, or three peer ideas with moderate explanation.

Recommended classes: `.stack-row`, `.card-fill`, `.h-md`, `.lead`.

### S06 KPI Tower

Use for four comparable quantitative metrics. Bar height must reflect real data. Do not use this for qualitative feature lists.

Recommended classes: `.kpi-tower-row`, `.bar-tower`, `.card-outlined`.

### S07 Horizontal Bar

Use for five to ten ranked or proportional values. Every bar needs a real comparable value.

Recommended classes: `.h-bar-chart`, `.bar-row`, `.bar-fill`.

### S08 Duo Compare

Use for before/after, old/new, model A/model B, or two-track explanations. The two sides should be structurally parallel.

Recommended classes: `.duo-compare`, `.vrule`, `.card-fill`.

Use `S08 + Tightened Map Component` for route or location networks.

### S09 Dot Matrix Statement

Use for a second statement page or a visual pause. It should carry a compressed claim, not a data table or long paragraph.

Recommended classes: `.dot-mat`, `.h-statement`, `.t-meta`.

### S10 Split Closing

Use once near the end. Use the left side for the final statement and the right side for three short takeaways.

Recommended classes: `.slide.split`, `.half`, `.b-accent`, `.closing-list`.

### S11 Horizontal Timeline

Use for a linear process or timeline with four to seven steps. Use `S14` for loops.

Recommended classes: `.timeline-h`, `.tl-h-node`, `.tl-h-axis`.

### S12 Manifesto + Ink Banner

Use for a section close or a strong mid-deck conclusion. It carries a claim plus one high-contrast banner.

Recommended classes: `.manifesto-top`, `.ink-banner-full`.

### S13 Three Forces

Use for exactly three rich peer ideas. Each card should have the same internal structure.

Recommended classes: `.three-forces`, `.hero-ink-col`, `.force-card`, `.force-num`.

### S14 Loop Form

Use for feedback loops, automation loops, learning loops, or repeated cycles. Do not use it for linear sequences.

Recommended classes: `.loop-diagram`, `.loop-steps`, `.loop-svg`.

### S15 Matrix + Hero Stat

Use for eight to twelve peer items plus a total or summary metric. It may be adapted into a multi-image grid when all image slots share one ratio.

Recommended classes: `.matrix-fill`, `.matrix-cell`, `.hero-stat-bottom`, `.frame-img.r-21x9`.

### S16 Multi-card Brief

Use for exactly six compact notes, tips, or small feature cards. It may be adapted into a six-image brief grid.

Recommended classes: `.brief-grid`, `.brief-card`, `.frame-img.r-21x9`.

### S17 System Diagram

Use for a strict three-layer system, ecosystem, or architecture map. Labels must be HTML, not SVG text.

Recommended classes: `.system-diagram`, `.sys-svg`, `.sys-label`.

### S18 Why Now

Use for three reasons, each backed by a number or clear evidence. The last column may carry the accent.

Recommended classes: `.why-now-grid`, `.why-col`, `.why-num-bottom`.

### S19 Four Cards

Use for exactly four equal features or modules. Keep the card style consistent.

Recommended classes: `.four-cards`, `.fc-col`.

### S20 Stacked KPI Ledger

Use for four to six core metrics in ledger form. Each row needs a number, label, and short context.

Recommended classes: `.stacked-ledger`, `.ledger-row`, `.ledger-num`.

### S21 Tech Spec Sheet

Use for product specs, benchmarks, model performance, or dense technical evidence. It needs real multi-dimensional data.

Recommended classes: `.tech-spec`, `.spec-title-col`, `.spec-kpi-grid`, `.spec-bars`, `.bar-vert`.

### S22 Image Hero

Use for a large visual plus three supporting metrics. The top image must be a `21:9` slot with `data-image-slot="s22-hero-21x9"`.

Recommended classes: `.image-hero-body`, `.image-hero-stats`, `.frame-img`, `.r-21x9`.

## Content To Layout Index

| Content Shape | Use | Avoid |
|---|---|---|
| Cover or opener | S01 | Dense data layouts |
| Thesis or chapter statement | S03 or S09 | KPI layouts |
| Before and after | S08 | Six-cell grids |
| Four peer ideas | S19 | S04 |
| Six peer ideas | S04 or S16 | S19 |
| Three peer ideas | S05 or S13 | S04 |
| Linear process | S11 | S14 |
| Loop or feedback cycle | S14 | S11 |
| Ranked quantitative values | S07 | Statement layouts |
| Four quantitative values | S06 | Qualitative card layouts |
| Dense product specs | S21 | Light statement pages |
| One large visual | S22 | Unregistered split image pages |
| Multiple related visuals | S15 or S16 adaptation | Unregistered evidence walls |
| Route or location network | S08 map extension | Generic cards |
| Closing | S10 | Reusing cover structure |

## Common Errors

1. Adding `border-radius` to cards or image frames.
2. Adding shadows or gradients.
3. Using visible SVG text.
4. Centering a normal body title.
5. Using data layouts without real data.
6. Using one generic animation recipe for every page.
7. Placing captions too close to the navigation dots.
8. Duplicating `.canvas-card` page padding inside the body.
9. Using mixed image ratios in one group.
10. Generating images before deciding the slot.
