# Tightened Map Component

Use this component for geography, routes, event locations, store networks, campuses, or city relationships. It is not a new layout. It is an `S08 Duo Compare` right-slot extension.

## Contract

- Keep `data-layout="S08"` on the slide.
- Keep the left side as relationship notes or explanation cards.
- Replace the right side with a map panel.
- Include markers, connection lines, cards, and `+`, `-`, `DRAG` controls.
- Disable wheel zoom and drag by default so slide navigation remains stable.
- Provide static fallback content so the slide remains readable if live map assets fail.

## Minimal HTML

```html
<section class="slide light" data-layout="S08" data-animate="duo-mirror">
  <div class="canvas-card">
    <div class="chrome-min">
      <div class="l">Field Map</div>
      <div class="r">08 / NN</div>
    </div>
    <div class="duo-compare">
      <div>
        <div class="t-meta">Route Logic</div>
        <h2 class="h-xl">One network, three anchors</h2>
        <div class="map-note-list">
          <div class="relation-card">
            <div class="nb">01</div>
            <div>
              <div class="ttl">Anchor A to Anchor B</div>
              <div class="desc">State the spatial or operational relationship.</div>
            </div>
          </div>
          <div class="relation-card">
            <div class="nb">02</div>
            <div>
              <div class="ttl">Anchor B to Anchor C</div>
              <div class="desc">Keep text short enough for slide reading.</div>
            </div>
          </div>
        </div>
      </div>
      <div class="map-panel">
        <div class="map-controls">
          <button type="button" data-map-ctrl="zoom-in">+</button>
          <button type="button" data-map-ctrl="zoom-out">-</button>
          <button type="button" data-map-ctrl="drag">DRAG</button>
        </div>
        <div class="map-static">
          <div class="map-line"></div>
          <div class="map-marker" style="left:22%;top:62%">A</div>
          <div class="map-marker" style="left:56%;top:38%">B</div>
          <div class="map-marker" style="left:78%;top:58%">C</div>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Optional CSS

```css
.map-panel{position:relative;min-height:58vh;background:var(--grey-1);overflow:hidden}
.map-controls{position:absolute;right:16px;top:16px;z-index:2;display:flex;gap:8px}
.map-controls button{border:1px solid var(--ink);background:var(--paper);padding:8px 10px;font:600 12px var(--mono);border-radius:0}
.map-static{position:absolute;inset:0}
.map-line{position:absolute;left:24%;top:52%;width:54%;height:1px;background:var(--ink);transform:rotate(-6deg);transform-origin:left center}
.map-marker{position:absolute;width:34px;height:34px;display:grid;place-items:center;background:var(--accent);color:var(--accent-on);font:600 12px var(--mono)}
.map-note-list{display:grid;gap:16px;margin-top:32px}
.relation-card{display:grid;grid-template-columns:auto 1fr;gap:14px;border-top:1px solid var(--ink);padding-top:14px}
.relation-card .nb{font:600 12px var(--mono);color:var(--accent)}
.relation-card .ttl{font-weight:500}
.relation-card .desc{margin-top:6px;color:var(--text-secondary);font-weight:300;line-height:1.5}
```
