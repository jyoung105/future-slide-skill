# Tightened Slide Layout Lock

This file is the structural contract for Tightened Slide decks. It prevents pages from looking visually related while using unregistered structures.

## Generation Rules

1. Every body slide must pick one registered layout before markup is written.
2. Every `<section class="slide">` must include `data-layout="Sxx"` or an allowed cover or closing layout id.
3. Do not invent new body structures.
4. Use `S22 Image Hero` for one large visual.
5. Use `S15` or `S16` grid adaptations for multiple visuals.
6. Use `S08 + Tightened Map Component` for maps, routes, and location networks.
7. Keep body titles on the left/top content axis unless the registered statement or split layout says otherwise.
8. SVG is for geometry only. Visible labels belong in HTML.
9. Choose the image slot before generating or placing an image.

## Registered Layouts

| ID | Name | Required Skeleton | Image Rule |
|---|---|---|---|
| S01 | Index Cover | Three `cover-row` rows with large index and title | None |
| S02 | Vertical Timeline + KPI | Top title, `.timeline-v`, bottom `.kpi-row-4` | None |
| S03 | Split Statement | `.slide.split` with a large left statement and right explanation | None |
| S04 | Six Cells | Top title and `.sub-grid-3-2` six-cell grid | Small icons only |
| S05 | Three Layers | Top title and `.stack-row` three-block structure | None |
| S06 | KPI Tower | Left title, right note, unequal KPI towers | None |
| S07 | Horizontal Bar | Left-aligned title and horizontal bar list | None |
| S08 | Duo Compare | `.duo-compare` two columns with a center rule | Map component may replace the right slot |
| S09 | Dot Matrix Statement | Large statement plus dot matrix decoration | None |
| S10 | Split Closing | `.slide.split` with left statement and right takeaway list | None |
| S11 | Horizontal Timeline | Header plus `.timeline-h` | None |
| S12 | Manifesto + Ink Banner | Large statement and full-width ink banner | None |
| S13 | Three Forces | Left ink hero block and three right cards | None |
| S14 | Loop Form | Left steps and right geometric loop | SVG geometry only |
| S15 | Matrix + Hero Stat | Matrix grid and bottom hero stat | Multi-image grid may be adapted |
| S16 | Multi-card Brief | Three by two brief cards | Multi-image cards may be adapted |
| S17 | System Diagram | Header, geometric system diagram, bottom notes | SVG geometry only |
| S18 | Why Now | Three progressive columns and bottom numbers | None |
| S19 | Four Cards | Top accent rule and four equal cards | None |
| S20 | Stacked KPI Ledger | Vertical ledger rows with large numbers | None |
| S21 | Tech Spec Sheet | Large title, KPI row, vertical bar matrix | None |
| S22 | Image Hero | Full-width top image, title block, lower KPI row | Main image must be `21:9` |

## Image Slot Rules

### S22 Hero Strip

- Slot: `s22-hero-21x9`.
- Ratio: `21:9`.
- Use for real scenes, product scenes, UI scenes, or case evidence.
- The subject must stay in the central safe area.
- Photos should use `object-fit:cover` and `object-position:center 35%` or `center center`.
- Dense UI or infographic images may use `object-fit:contain` only when needed.

### S15 and S16 Image Grids

- Use one ratio per group: `21:9` or `16:10`.
- Use one visual scale per group.
- Use `.frame-img.r-21x9` or `.frame-img.r-16x10` for regenerated slot images.
- Use `.fit-contain` only for uncontrolled screenshots or dense text images.

## Banned Patterns

- Missing `data-layout`.
- Unregistered body pages.
- Centered body titles outside registered statement or split layouts.
- Visible SVG `<text>`.
- Images without `data-image-slot`.
- Rounded image containers, shadows, gradients, or glass effects.
- S22 photos with `object-position:top center`.
