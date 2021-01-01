---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
description: "a cheatsheet of handy css solutions."
date: Last Modified
altTitle: "The css bits."
order: -1
tags: 
  - "web tech"
  - "info dump"
navi:
  key: ".css"
  parent: grimoire
  excerpt: simple, useful bits of css.
---

## Responsive text size
<pre>font-size:clamp(--min, (X)vw, --max)</pre>

Clamping the value of font sizes is a really simple way for making text be pleasant to read at different resolution/devices. It is also a godsend for headers, so they change their size instead of breaking into new lines (and generally look huge) on smaller resolutions. It takes some trial and error to get the size based on vw (% of the width of the viewport) value just right, but it's worth it. 

The only drawback is that both clamp() and vw are relatively new additions to css, so older browsers might revert to default sizes. This can be avoided by adding another `font-size` rule before the clamp and using one of the supported units.

## js free load image(s) on click

Here's a great solution if you want to keep the site light on kb, but would still want to include a gallery. Original code courtesy of [Paul Glushak](https://0xff.nu/), you can test it on [codepen.io](https://codepen.io/nocte/pen/wvGpOyE)

```
----------css----------
.fig {
  display: inline;
}

.fig label {
  color: blue;
  cursor: pointer;
  text-decoration: underline;
}

.fig input {
  display: none;
}

.fig img {
  position: absolute;
  left: -9999px;
  display: none;
}

.fig input:checked ~ img {
  position: relative;
  left: 0;
  display: block;
}

----------html----------
<div class="container">
  Please click the link to <div class="fig">
    <input type="checkbox" id="loadimage" name="loadimage">
    <label for="loadimage">Load Image</label>
  <img src="----FILE URL-----" loading="lazy" alt="">
  </div>
  <p>This is some other text</p>
</div>
```


## External Resources:
* [thomasorus' html-tips](https://thomasorus.com/html-tips.html) - a great html+css primer from a fellow merveillalite.