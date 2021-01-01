---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
date: 2020-10-21
order: -1
description: "I want to make tiny games."
tags: 
  - "video game"
  - research
navi:
  key: dreamEngine
  parent: digital
  excerpt: "still searching for the one."
--- 
I am not much of a programmer, but I do enjoy making games. However, I feel like I don't have the time to learn a "big boy" engine and make it do what I want (tried in the past, issues were had) and definitely lack the skills to write my own engine from scratch. Because of that, for some time now I am on the hunt for an engine or framework built for making tiny pixel art games with a retro feel.

What I mean by that, is an engine or framework that lets me manipulate pixels in a similar manner like old consoles and micros did: palette swapping, accessing/changing pixel data (and screen) at runtime, drawing directly to screen, etc. Basically I am looking for something like PICO-8, sans the restrictions. In a perfect world, it could also export to both HTML5 and native apps and let me code in something relatively simple... will make a proper list of my dream features later. 

The plan is to find (and they tend to be hard to find) bunch of engines, check them out and try to make a tiny game in my favorite this winter.


## Currently considered

[micro Studio](https://microstudio.dev/) - I just discovered it today, haven't had time to check it out yet. Definitely could become a contender. Still missing some features (sound/music), but is under active development. Really like the lua-like script (although would prefer a pure lua, I really like lua's tables). Not sure if it can be used offline. Will come back with my findings 

[Bitmelo](https://bitmelo.com/) - my current favorite. It is still early in its development, but already does most of what I need. Everything is done in the editor/IDE. You code in js, currently everything has to exist in a single file, which is not too bad for my needs.

[Pyxel](https://github.com/kitao/pyxel) - a really strong contender. It started as Yet-Another-Fantasy-Console-Clone, but has turned into more of a Python framework for low-rez pixel games (with an odd hybrid ide). What currently holds it back is lack of good documentation and no html export (currently only exports to .py file or a native app). The html export is planned, so I will be checking back on it.

[TileEngine](http://www.tilengine.org/) - this looks like a really good framework designed for exactly what I was looking for, but I don't currently have setup for writing in C (and honestly, never did before, C is still a bit scary) and the documentation is missing stuff (e.g it mentions tilesheets and tilemaps as specific resources with a dedicated format, but they are not explained in API). Still something to keep tabs on.

[PixelBox js](https://pixwlk.itch.io/pixelbox) - lastly, the framework/IDE that lead me on this quest. PixelBox is a really good start, but right now it feels just a bit too unpolished to use (I have run into some annoying (but not breaking) bugs). It is missing some the stuff I am looking for and the documentation is not quite there. If the dev continues with development it might be THE framework to use, but right now, I am feeling like I am too often fighting the engine.

Honorary mentions go to tools for making games for actual retro machines: [NESmaker](https://www.thenew8bitheroes.com/), [gbStudio](https://www.gbstudio.dev/) and [Multi-Platform Arcade Game Designer](https://jonathan-cauldwell.itch.io/multi-platform-arcade-game-designer) - they make gamedev for the retro systems much easier, but they are limiting in what you can do.

And of course [ALL the fantasy consoles!](https://github.com/paladin-t/fantasy)