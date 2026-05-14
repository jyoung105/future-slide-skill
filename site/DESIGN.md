# future-slide Site Design

This site uses the shared Tony "Urban Loft" editorial system used by the
`side-scraper`, `free-router`, and `future-slide` project sites.

## Structure

All three sites keep the same hand-maintained source shape:

```text
site/
  DESIGN.md
  index.html
  package.json
  tsconfig.json
  vite.config.ts
  public/
  src/
    content.ts
    i18n.ts
    main.ts
    style.css
    theme.ts
    utils.ts
    vite-env.d.ts
```

Product-specific public assets are allowed. This site adds
`public/diagram/` for the English and Korean workflow diagrams.

## Visual System

- Single editorial column: `--page-max: 42rem`, centered with
  `clamp(1rem, 4vw, 1.5rem)` side padding.
- Floating right-aligned header with author link, GitHub icon, language
  toggle, and theme toggle.
- Neutral ramp plus terracotta only: `#fafafa`, `#000000`, `#a35e47`,
  `#c97d63`, `#f5e8e2`, `#7a4534`.
- Anton uppercase wordmark, Source Serif 4 section labels, Barlow body
  copy, JetBrains Mono terminal blocks.
- No marketing hero, no card grid, no full-bleed section shells.
  Bordered surfaces are reserved for diagrams and terminal/code blocks.

## Interaction

- Theme state is stored in `fss-theme`; language state is stored in
  `fss-locale`.
- Language switching updates all `[data-i18n]` text and swaps the workflow
  diagram between `four-skill-flow.png` and `four-skill-flow_ko.png`.
- Hovering a `.featured-link` dims sibling `.home-dimmable-item` rows to
  `0.38` opacity in light mode and `0.3` in dark mode.
- Copy buttons use `data-copy` or `data-cmd` and show the shared copied
  icon state.

## Project Notes

The page must preserve the current flow:

1. Hero
2. Workflow diagram
3. Four-stage workflow
4. Why four skills
5. Example prompts
6. Install
7. Optimization principles
8. Footer

The implementation is intentionally pure Vite + TypeScript. Do not add
React, Tailwind, or a cross-project shared package for this static site.
