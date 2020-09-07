---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
description: "a cheatsheet of handy css solutions."
date: Last Modified
altTitle: "The css bits."
navi:
  key: ".css"
  parent: grimoire
  excerpt: simple, useful bits of css.
---

## Responsive text size
<pre>font-size:clamp(--min, (X)vw, --max)</pre>

Clamping the value of font sizes is a really simple way for making text be pleasant to read at different resolution/devices. It is also a godsend for headers, so they change their size instead of breaking into new lines (and generally look huge) on smaller resolutions. It takes some trial and error to get the size based on vw (% of the width of the viewport) value just right, but it's worth it. 

The only drawback is that both clamp() and vw are relatively new additions to css, so older browsers might revert to default sizes. This can be avoided by adding another `font-size` rule before the clamp and using one of the supported units.

## External Resources:
* [thomasorus' html-tips](https://thomasorus.com/html-tips.html) - a great html+css primer from a fellow merveillalite.