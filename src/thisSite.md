---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
date: 2020-10-30
altTitle: This Website.
tags: 
  - all
description: "documenting how and why ƒdisk is made."
navi:
  key: thisSite
  parent: about
  excerpt: building a digital garden.
---

I built this website mainly for myself, both as a kind of digital notebook, and as a way learn a bit more of modern html practices (last time I touched html was in late 90s). However, I found that modern web is a mess of dependencies and data collection, which I don't want to touch.

So I thought I'll just build the site the way I would have in the 90s. Fortunately, I was talked out of this by people smarter than me. Instead, this website uses contemporary (semantic and human readable) html + few kilobytes of handwritten css. However, unlike the bulk of modern web, it does not use any cookies, JavaScript, or any other kind of external content. This means the website is free any surveillance capitalism shenanigans.

On my end, it's written in markdown and generated locally with [11ty](https://www.11ty.dev/). I never used a static generator before, but I really wanted a "folder structure" and breadcrumb navigation. Doing this with hand written html would lead to madness, so I decided to offload it to a script. I chose 11ty because a fellow Merveillite [Clemens Scott](https://nchrs.xyz/) used it for his site, and it gave me the blueprint to work of, so the website would work like it should. Then with css help from [Thomasorus](https://thomasorus.com) I was able to make the website look the way I wanted. 

I opted for almost a brutalist art direction for the site, in part because I didn't want the design to distract from contents (either the viewer by being flashy, or myself by constantly wanting to tweak it), but mostly because I'm a sucker for lo-fi aesthetic and early computing. I set out to make the site feel a bit like a computer terminal from some alternative timeline where color and GUI never really took off. 

Most importantly, I wanted to avoid a "feed" for this website. There is plenty of other lineal content out there, and it all feels very fleeting; fire and forget. I don't want to produce *content*, it's not what this site is about. It's a [digital garden](/designPhilosophy/#digital-garden) that is meant to grow and last, a place where I can cultivate my thoughts and ideas. 

<details>
<summary>Still plenty to do to make it just the way I want it.</summary>

* down arrow - add an arrow icon in top right to scroll to the bottom to make navigation easier.
* dark mode - investigate non-js way to enable dark mode. Will need to add extra css to turn black svgs and pngs into white if needed. Moon icon in top right?
* fix rss - the rss currently has some formatting issues. Needs 11ty troubleshooting.
* fix breadcrumb format - change breadcrumb up top from a list into a string of links, to make it work better with css disabled/text only/gemini
* backlinks - investigate backlinks as a way to add connectivity between sites.
* footnotes - test and format (css) footnotes from the 11ty plugin. Consider how they will look with bottom navigation AND the possible backlinks?
* tags - use 11ty tags as categories? Place them after "contents of X" up top. Should encourage more exploration. Possibly wait until the site is decently populated, otherwise they are pointless.
* seedling icon? - consider adding a seedling icon to let the viewer know what to expect before clicking on a nav link. 
* multi category entries? - can be faked with adding permalink "pages" to 11ty navigation that points to an existing page elsewhere. Should have a shortcut/alias icon?
* fix printing of the website to actually work. I think it has something to do with the drop-shadow I use.

</details>

See also: [my philosophy for the web](/designPhilosophy)