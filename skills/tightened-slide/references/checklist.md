# Tightened Slide Delivery Checklist

Run this before handing off a deck.

## Required Checks

- Every slide has a registered `data-layout`.
- Body pages use only `S01` to `S22`.
- Map/location relationship pages use `S08 + Tightened Map Component`.
- No custom body layout was invented for image split, evidence wall, or decorative geometry.
- Every local image has `data-image-slot`.
- `S22` uses `data-image-slot="s22-hero-21x9"`.
- No visible `<text>` appears inside SVG.
- The validator passes:

```bash
node scripts/validate-deck.mjs path/to/index.html
```

## Language Checks

- The deck uses either English mode or Korean mode.
- English decks use `<html lang="en" data-language="en">`.
- Korean decks use `<html lang="ko" data-language="ko">`.
- Korean decks use the template Korean font stack: `SUIT`, `Pretendard`, `Noto Sans KR`, and `Noto Sans`.
- Diagram labels and generated-image text match the chosen language.

## Visual System

- One accent color only.
- No gradient, shadow, glass effect, rounded card, neon, or decorative border.
- Large titles use light weight, normally `200` or `300`.
- Large type uses `font-size:min(Xvw,Yvh)` with enough `vh` headroom.
- Body slide titles sit on the left/top content axis unless the registered layout is a statement or split page.
- Kicker/meta text sits above the title.
- `.canvas-card` horizontal padding is not duplicated by a nested `padding:... 5vw ...`.
- Content does not touch the bottom navigation safe area.

## Image Checks

- Single large visual pages use `S22`.
- Multiple image pages adapt `S15` or `S16`.
- Image groups share one ratio and one visual scale.
- S22 photos use `object-position:center 35%` or `center center`, not `top center`.
- UI and information graphics use `fit-contain` only when preserving an uncontrolled original screenshot or dense text.
- Regenerated slot images fill their ratio frame, for example `.frame-img.r-21x9`.
- Generated images contain no slide title, footer, page number, corner mark, logo, signature, or border.

## Browser Checks

- Open the deck and inspect every page after animation settles.
- Use arrow navigation, wheel navigation, touch if relevant, ESC index, and `B` static mode.
- Confirm ESC index thumbnails show animated content.
- Confirm captions, timeline labels, footnotes, and KPI blocks clear the navigation dots.
