# Tightened Slide Theme Presets

Use exactly one accent color per deck. Do not mix accents and do not accept arbitrary custom hex values.

## How To Apply A Theme

1. Open `assets/template.html`.
2. Find the `:root` block.
3. Replace the theme variables as a group.
4. Leave the spacing, type, and motion tokens unchanged.

## International Klein Blue

Best for general use, AI products, commercial launches, design systems, and analytical talks.

```css
--paper:#fafaf8;
--paper-rgb:250,250,248;
--ink:#0a0a0a;
--ink-rgb:10,10,10;
--grey-1:#f0f0ee;
--grey-2:#d4d4d2;
--grey-3:#737373;
--accent:#002FA7;
--accent-rgb:0,47,167;
--accent-on:#ffffff;
--accent-bright:#5B7BFF;
```

## Lemon Yellow

Best for youth, sport, retail, consumer energy, and retro themes.

```css
--paper:#fafaf8;
--paper-rgb:250,250,248;
--ink:#0a0a0a;
--ink-rgb:10,10,10;
--grey-1:#f0f0ee;
--grey-2:#d4d4d2;
--grey-3:#737373;
--accent:#FFD500;
--accent-rgb:255,213,0;
--accent-on:#0a0a0a;
--accent-bright:#FFE866;
```

## Lemon Green

Best for sustainability, health, new technology, and future-facing brands.

```css
--paper:#fafaf8;
--paper-rgb:250,250,248;
--ink:#0a0a0a;
--ink-rgb:10,10,10;
--grey-1:#f0f0ee;
--grey-2:#d4d4d2;
--grey-3:#737373;
--accent:#C5E803;
--accent-rgb:197,232,3;
--accent-on:#0a0a0a;
--accent-bright:#DBFF2F;
```

## Safety Orange

Best for industrial topics, alerts, motorsport, launches, and decision points.

```css
--paper:#fafaf8;
--paper-rgb:250,250,248;
--ink:#0a0a0a;
--ink-rgb:10,10,10;
--grey-1:#f0f0ee;
--grey-2:#d4d4d2;
--grey-3:#737373;
--accent:#FF6B35;
--accent-rgb:255,107,53;
--accent-on:#ffffff;
--accent-bright:#FF8A5F;
```

## Selection Guide

| Use Case | Theme |
|---|---|
| Default, AI, technology, design, product launch | International Klein Blue |
| Youth, sport, retail, energetic consumer work | Lemon Yellow |
| Sustainability, health, future technology | Lemon Green |
| Industrial, warning, urgent, decision-focused topics | Safety Orange |

## Do Not

- Do not mix two accent colors.
- Do not change the gray scale variables.
- Do not add gradients, shadows, transparency effects, or rounded accent blocks.
