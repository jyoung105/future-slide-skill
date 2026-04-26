# future-slide — Landing Page Design System

Voice extracted from `tonylee.im` (`/solo/tony/src/components/home/HomePage.astro`,
`globals.css`, `header.tsx`, `footer.tsx`). The future-slide landing page
matches that voice: a quiet, narrow editorial column with restrained
terracotta accents, Anton uppercase grotesk for the wordmark, Source
Serif 4 for section labels, and Phosphor Icons throughout.

## 1. Tone

- **Editorial, not promotional.** No oversized hero CTAs, no card grids
  competing for attention. A single content column reads top-to-bottom.
- **Terracotta as accent, not decoration.** The brand color appears only
  on focus rings, the "read more →" forward link, and selection. Body
  copy lives on neutral grays.
- **Hover dims the rest.** When the visitor hovers any list item, the
  surrounding items drop to opacity 0.38 (light) / 0.30 (dark). Mirrors
  `.home-dimmable-block` / `.home-dimmable-item` in tonylee.im.

## 2. Layout

### 2.1 Container

| Token              | Value             | Notes                              |
|--------------------|-------------------|------------------------------------|
| `--page-max-width` | `42rem` (~672px)  | Tailwind `max-w-2xl`. Narrow column reads like editorial. |
| `--page-padding-x` | `clamp(1rem, 4vw, 1.5rem)` | Tighter than a typical landing page. |
| `--section-gap`    | `4rem`            | `space-y-16` between top-level sections. |
| `--inner-gap`      | `1.5rem`          | `space-y-6` within a section.      |

The hero, every section, the codeblocks, the footer — all live inside
a single `max-w-2xl mx-auto px-6` container. **No edge-to-edge sections,
no full-bleed cards.**

### 2.2 Header (floating, right-aligned)

```
┌──────────────────────────────────────── viewport ────────────────────────────────────────┐
│                                                                                          │
│                                          ⌘   ⌘   ⌘   GitHub  [ Connect ]   🌐  ☾ / ☀     │
│                                                                                          │
│                ──────── content column (max-w-2xl) ────────                              │
│                                                                                          │
```

- `position: absolute; top: 3rem md:top-1.5rem; left: 0; right: 0; z: 50`
- `flex justify-end items-center gap-3`
- Inner row: nav links → primary CTA → language toggle → theme toggle.
- On mobile (≤640px) the nav links collapse; CTA + language + theme toggles remain.

### 2.3 Section rhythm

A page section follows one shape:

```
┌─ section ─────────────────────────────────────────────────────┐
│  <h2 class="home-section-label home-section-label--projects">  │
│    Workflow                                                    │
│  </h2>                                                         │
│                                                                │
│  ▢ list item                                                   │
│  ▢ list item                                                   │
│  ▢ list item                                                   │
└────────────────────────────────────────────────────────────────┘
```

- Section label: Source Serif 4, `clamp(1.2rem, 2.2vw, 1.55rem)`,
  `font-weight: 500`, `letter-spacing: -0.04em`, `line-height: 0.95`.
- List items use `gap-8` between rows. Each row has a title row + tag
  pill + 1-line description. **No background cards.** Bordered cards
  are reserved for codeblocks.

### 2.4 Responsive rules

| Breakpoint | Behavior                                                   |
|------------|------------------------------------------------------------|
| `≥ 768px`  | Header offset `top-6`. Title row uses `sm:flex-row sm:items-baseline sm:justify-between`. Hover preview shadows enabled. |
| `< 768px`  | Header offset `top-12`. Title rows stack vertically (`flex-col gap-1`). Body background switches from `fixed` → `scroll`. |
| `< 640px`  | Header drops the secondary nav links; preview popovers disabled (`@media (hover: none)`). |
| `pointer: coarse` | Body `background-attachment: scroll` (avoid iOS jank). Hover-only effects suppressed. |
| `prefers-reduced-motion` | All transitions, hover-dim, scroll smoothing disabled. |

## 3. Typography

| Role                | Font stack                         | Weight  | Size              | Tracking  | Notes |
|---------------------|------------------------------------|---------|-------------------|-----------|-------|
| Wordmark / page-h1  | `Anton, sans-serif` (`force-english-grotesk`) | 400 | `clamp(2.25rem, 6vw, 3.75rem)` | `-0.04em` | Uppercase, `leading-[1.05]`. |
| Section label (h2)  | `Source Serif 4, serif`            | 500     | `clamp(1.2rem, 2.2vw, 1.55rem)` | `-0.04em` | `line-height: 0.95`. |
| Card title (h3)     | `Source Serif 4, serif`            | 500     | `1.125rem` (`text-lg`) | `-0.04em` | Hover underline `decoration-neutral-400 underline-offset-4`. |
| Tag pill            | `Source Serif 4, serif`            | 500     | `11px`            | normal    | Inset top-light shadow. |
| UI nav / meta       | `Barlow, sans-serif`               | 500     | `text-sm`         | `-0.02em` | `text-neutral-500 dark:text-neutral-300`. |
| Date / kicker       | `Barlow, sans-serif`               | 500     | `text-xs`         | wide (`tracking-wide`) | `uppercase`. |
| Body                | `Barlow, sans-serif`               | 400     | `text-base`       | `-0.02em` | `leading-relaxed`, `text-neutral-600 dark:text-neutral-400 dark:opacity-80`. |
| Mono                | `ui-monospace, ...`                | 400     | `0.86rem`         | normal    | Code blocks only. |

Korean (`:root[lang="ko"]`):

- `word-break: keep-all`
- `letter-spacing: 0` everywhere (negative tracking hurts Hangul)
- Body & headings get the **Pretendard Variable** stack with Barlow /
  Poppins / Source Serif 4 as fallbacks (mirrors tony's `globals.css`).

## 4. Color

The Urban Loft palette is inherited from `/solo/tony/DESIGN.md`. The
landing page uses **only the neutral ramp + terracotta** — never both
strong simultaneously.

### 4.1 Light

| Token                  | Value     |
|------------------------|-----------|
| `--background`         | `#fafafa` |
| `--foreground`         | `#000000` |
| `--vignette-start/end` | `transparent` → `#f0efee` |
| `--primary` (terracotta) | `#a35e47` |
| `--accent`             | `#f5e8e2` |
| `--accent-foreground`  | `#7a4534` |
| Selection bg / fg      | `#f5e8e2` / `#7a4534` |

### 4.2 Dark

| Token                  | Value     |
|------------------------|-----------|
| `--background`         | `#000000` |
| `--foreground`         | `#fafafa` |
| `--vignette-end`       | `#000000` |
| `--primary` (lightened) | `#c97d63` |
| `--accent`             | `#4a2a20` |
| `--accent-foreground`  | `#d99680` |
| Selection bg / fg      | `#c97d63` / `#000000` |

### 4.3 Where each color appears

- **Terracotta `--primary`**: focus rings, the single forward-link
  ("Workflow →"), selection, the dot before "Codex Skill Bundle".
- **Neutral-500 / neutral-300**: meta line, nav text, dates.
- **Neutral-600 / neutral-400**: body copy.
- **Neutral-900 / neutral-100**: page title, card titles.
- **Black on white** (or **white on black**): the single primary CTA
  button. Mirrors tony's `.cta-button`.

## 5. Iconography

Icons come from **`@phosphor-icons/react`**, always `weight="regular"`.
Common icons used on this page:

| Symbol meaning      | Phosphor name           |
|---------------------|-------------------------|
| Time / version      | `Clock`                 |
| Place / scope       | `MapPin`                |
| Code / repo         | `GithubLogo`            |
| Web / live          | `GlobeHemisphereWest`   |
| License             | `Scales`                |
| Theme — dark        | `Moon`                  |
| Theme — light       | `Sun`                   |
| Language            | `Translate`             |
| Forward link        | `ArrowRight`            |
| Copy / clipboard    | `CopySimple`            |
| Confirm             | `Check`                 |
| Stage marker (1-4)  | numeric chips, no icon  |

Sizing: `h-3 w-3` for inline meta, `h-3.5 w-3.5` for inline action,
`h-4 w-4` for nav, `h-5 w-5` for the primary toggles.

## 6. Components

### 6.1 Tag pill (used on stages, version, license)

```html
<span class="force-english-serif inline-flex items-center justify-center
             rounded-[0.8rem] border border-neutral-200
             bg-neutral-100/90 px-2.5 py-1
             text-[11px] font-source-serif font-medium leading-none
             text-neutral-600
             shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]
             dark:border-neutral-700 dark:bg-neutral-800/90
             dark:text-neutral-300
             dark:shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
  v0.0.1
</span>
```

### 6.2 List item (workflow stage / why bullet)

```html
<div class="group home-dimmable-item">
  <a class="block featured-link">
    <div class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
      <div class="flex items-center gap-3">
        <span class="font-mono text-xs tracking-[0.1em] text-primary">01</span>
        <h3 class="force-english-serif text-lg font-medium
                   text-neutral-900 dark:text-neutral-100
                   group-hover:underline underline-offset-4 decoration-neutral-400">
          gpt-slide-design
        </h3>
        <span class="tag-pill">DESIGN.md</span>
      </div>
    </div>
    <p class="mt-2 max-w-xl text-neutral-600 dark:text-neutral-400 dark:opacity-80">
      Description goes here.
    </p>
  </a>
</div>
```

### 6.3 Codeblock (terminal style)

A single dark surface, regardless of theme — same pattern as the
existing `CodeBlock` primitive. Used only for shell snippets.

### 6.4 Forward link

```html
<a class="blog-forward-link group inline-flex items-center gap-1
         text-sm font-medium text-primary
         hover:text-accent-foreground
         dark:hover:text-accent-foreground">
  <span>Read the README</span>
  <span class="blog-forward-link__icon">→</span>
</a>
```

The arrow translates `+3px` on hover via `.blog-forward-link__icon`.

### 6.5 Primary CTA (header "Connect"-style)

```html
<button class="cta-button shrink-0 bg-black text-white
               dark:bg-white dark:text-black
               h-9 px-3 rounded-md text-sm font-medium">
  Install
</button>
```

Hover adds a soft 24px shadow (matches `globals.css:328`).

## 7. Hover dim behavior

When any `.featured-link` inside `.home-content` is hovered, every
`.home-dimmable-item` that does **not** contain the hovered link drops
to `opacity: 0.38`. The hovered item stays at `opacity: 1`. Selectors
mirror tony's `globals.css`:

```css
.home-content:has(.featured-link:hover) .home-dimmable-item:not(:has(.featured-link:hover)) {
  opacity: 0.38;
}
.dark .home-content:has(.featured-link:hover) .home-dimmable-item:not(:has(.featured-link:hover)) {
  opacity: 0.3;
}
```

`@media (prefers-reduced-motion: reduce)` removes the transitions but
keeps the dim end-state — the visual hierarchy still works without the
animation.

## 8. Accessibility

- All hover affordances also fire on `:focus-within`.
- Skip-link as the first focusable element.
- Theme + language toggles carry localized `aria-label` strings.
- All icons are `aria-hidden="true"` when paired with text; standalone
  icon buttons get an `aria-label`.
- Color contrast: foreground on background ≥ 18:1 in both themes
  (matches the source `DESIGN.md`).

## 9. Page outline

```
┌── Floating header (right-aligned) ─────────────────────────────────┐
│  [GitHub] [Install]  EN/KO  ☾                                      │
└────────────────────────────────────────────────────────────────────┘

[ max-w-2xl content column ]

  future-slide                                              ← Anton h1
  ⏱ v0.0.1   |   ⚖ Apache-2.0   |   🌐 Codex Skills          ← meta row
  Disciplined slide generation, one stage at a time. ...    ← lede
  [GitHub icon] [npx icon] [Read the README →]              ← link row

  Workflow                                                  ← h2
  01  gpt-slide-design   [DESIGN.md]
      Extract a reusable design system from a reference slide.
  02  gpt-slide-plan     [slide_plan.json]
      Build the storyline and page-family rhythm.
  03  gpt-slide-prompt   [slide_prompts.json]
      Convert the plan into strict per-page prompts.
  04  gpt-slide-generate [page_*.png]
      Render slide images sequentially.

  Why four skills                                           ← h2
  ✕ Single-prompt failure mode 1
  ✕ Single-prompt failure mode 2
  ...

  Examples                                                  ← h2
  [terminal codeblock]
  artifact chain →

  Install                                                   ← h2
  [terminal codeblock]
  Manual instructions

  What it optimizes for                                     ← h2
  ✓ rule 1
  ✓ rule 2
  ...

[ Footer ]
  Apache-2.0 · Built by tonylee.im · GitHub
```
