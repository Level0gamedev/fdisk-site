---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
altTitle: "Hi!"
date: 2020-09-11
tags: 
  - all
navi:
  key: ƒdisk
---

Welcome to ƒdisk!

I'm [Fred](/author) and this is my personal [digital garden](/designphilosophy/#digital-garden) containing a loosely organized mélange of personal projects, research, musings and other assorted notes. 

This website isn't about any one thing in particular. It's an open thinking platform, a space where I store, share and work on ideas. The entries here aren't all organized, or even all complete; it's a living archive which will grow and change over time.

Nevertheless – you found your way to this place. That means that you'll probably find something interesting inside. So, stay around and explore! 


{% set postslist = collections.all | head(-10) %}
{% set postslistCounter = collections.all | length %}
{#% include "postslist.njk" %#}
