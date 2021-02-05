---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
altTitle: The Colophon.
date: last modified
order: -1
tags: 
  - web tech
description: "No cookies, No JS, No backend BS - just static html."
navi:
  key: siteColophon
  parent: about
  excerpt: the how and why behind ƒdisk.
---

After seeing the realities of [modern webdev](/mainstreamWeb), I honestly was ready to handcode this site like it's 1999 - frames, tables, warts and all. Fortunately, people smarter than me talked me out of it. 

ƒdisk is a static site written in markup and  generated locally with [11ty](https://www.11ty.dev/) using nunjuck templates and couple plugins. It uses no cookies, no JavaScript and loads no external content of any kind. A few kilobytes of handwritten css completes the look.

ƒdisk uses whatever fonts you have installed and tries to look good while doing it.

ƒdisk is a proud member of [NoJS](https://nojs.club/) and [512kb](https://512kb.club/) clubs.

The source files can be found on [github](https://github.com/Level0gamedev/fdisk-site) - it's a patchwork mess that I plan to untangle one day.


<details>
<summary>Tweaks both pending and completed...</summary>

* dark mode - investigate non-js way to enable dark mode. Will need to add extra css to turn black svgs and pngs into white if needed. Moon icon in top right?
* seedling icon? - consider adding a seedling icon to let the viewer know what to expect before clicking on a nav link. 
* multi category entries? - can be faked with adding permalink "pages" to 11ty navigation that points to an existing page elsewhere. Should have a shortcut/alias icon?
* fix printing of the website to actually work. I think it has something to do with the drop-shadow I use 
* &#10004; down arrow - add an arrow icon in top right to scroll to the bottom to make navigation easier - *added, but scrolls to the bottom navigation instead.*
* &#10004; fix breadcrumb format - change breadcrumb up top from a list into a string of links, to make it work better with css disabled/text only/gemini - *fixed and made so it only shows 3 "folders" deep to avoid obnoxiously long file path up top.*
* &#10004; tags - use 11ty tags as categories? Place them after "contents of X" up top. Should encourage more exploration. Possibly wait until the site is decently populated, otherwise they are pointless. - *after wrestling with 11ty for a bit, added them so tag pages auto-generate!*
* &#10004; footnotes - test and format (css) footnotes from the 11ty plugin. Consider how they will look with bottom navigation AND the possible backlinks - *footnotes work now, and even look half-decent with just a bit of extra css.*
* &#10008; ~~backlinks - investigate backlinks as a way to add connectivity between sites~~ - *decided against it in the end as it could get a bit messy, manual "see also" used as needed*. 
</details>


### Credits due:

* [Clemens Scott](https://nchrs.xyz/) for showing me the ropes in 11ty and letting me use his code.
* [Thomasorus](https://thomasorus.com) for teaching me the modern html and css practices.
 


See also: [my philosophy for the web](/designPhilosophy)