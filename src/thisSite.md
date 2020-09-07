---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
date: Last Modified
altTitle: This Website.
description: "documenting how and why ƒdisk is made."
navi:
  key: thisSite
  parent: workshop
  excerpt: building a digital garden.
---

ƒdisk is inspired by personal websites of Merveilles community members, and would not exist without the help and inspiration of [Clemens Scott](https://nchrs.xyz/) and [Thomasorus](https://thomasorus.com). 

It's a static website written in markdown and generated locally with [11ty](https://www.11ty.dev/). It doesn't use cookies, loads no JavaScript or any other kind of external content and requires only few kilobytes of handwritten css to run. 

## TODO

* down arrow - add an arrow icon in top right to scroll to the bottom to make navigation easier.
* dark mode - investigate non-js way to enable dark mode. Will need to add extra css to turn black svgs and pngs into white if needed. Moon icon in top right?
* fix rss - the rss currently has some formatting issues. Needs 11ty troubleshooting.
* fix breadcrumb format - change breadcrumb up top from a list into a string of links, to make it work better with css disabled/text only/gemini
* backlinks - investigate backlinks as a way to add connectivity between sites.
* footnotes - test and format (css) footnotes from the 11ty plugin. Consider how they will look with bottom navigation AND the possible backlinks?
* tags - use 11ty tags as categories? Place them after "contents of X" up top. Should encourage more exploration. Possibly wait until the site is decently populated, otherwise they are pointless.
* seedling icon? - consider adding a seedling icon to let the viewer know what to expect before clicking on a nav link. 
* multi category entries? - can be faked with adding permalink "pages" to 11ty navigation that points to an existing page elsewhere. Should have a shortcut/alias icon?
 