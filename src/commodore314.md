---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
altTitle: "The Commodore 314."
description: "a raspberry pi inside a dead C64 breadbin."
date: Last Modified
navi:
  key: commodore314
  parent: workshop
  excerpt: emulation station in C64 case. 
---

**!!! No vintage hardware was harmed during making of this project !!!** 

Commodore 314 is my custom  80s & 90s emulation / nostalgia machine. It's a Raspberry Pi with a bunch of adapters and some custom designed 3d printed parts inside an original [Commodore 64](https://en.wikipedia.org/wiki/Commodore_64) case. It runs [RetroPie](https://retropie.org.uk/) and [BMC64](http://accentual.com/bmc64/), outputs to both composite and HDMI and uses the C64 keyboard, USB and Atari compatible joysticks as input.  

## Background

The year was 1989. Poland just ended its affair with communism. I was 4 years old. My dad brought home a beige plastic box and connected it to the living room TV. I got my first computer! ...well, technically it was meant for my (then) 12 year old brother, but he didn't really use it, unless I bothered him to load a game from the tape deck for me. For me, on the other hand, the thing was fascinating.  While I only had this computer for couple years (I soon convinced my parents to jump onto the 16bit bandwagon), it gave me many happy memories and holds a very important place in my heart to this day.

Growing up in Poland in the 90s meant that I was limited to select home computers, some arcades and an occasional [famiclone](https://en.wikipedia.org/wiki/Pegasus_(console)) for playing games. I was aware that other systems did exist, but the price meant experiencing them was out of question. This was, until I've learned about emulation from a computer magazine. The article pointed me to some websites to get me started, but with home internet still being a luxury at a time, it took a while before I could actually get my hands any of those  magical programs. Suffice it to say, my first time online was to get emulators. By the time internet cafes started popping up I was already hooked.

The Commodore 314 project combines those two "first" experiences. It's my happy beige nostalgia box that lets me (re)capture a bit of my childhood.

## Build Process

Honestly, the actual build process is quite simple. Once you have the parts, all you need is screwdrivers, some glue and a bit of patience. The hard part was the design and planning. I wanted the process to be non-destructive, fully reversible and use the case to its full extent. This means: working keyboard and using the spots where original ports were for my new ports! 

Anyway, here's the stuff I ended up using in my project:

### Commodore 64

You obviously need a C64. I got mine on ebay. Its the "breadbin" model - the same as the one I had as a kid. It was cheap - sold 'as-is.' It boots, but the display is all messed up. It's probably fixable, and I plan to try to repair the board down the line, but for this project, what I wanted is a case to be in a decent condition and a working keyboard. The seller couldn't confirm the latter, so I just took a gamble - it looked decently cared for, so hopefully the keyboard would be fine (it was!).

Opening the computer is a matter of removing some screws on the bottom and lifting up the top. Disconnect the keyboard and LED connectors and few screws later you can remove the C64 motherboard. Now is a good time to give the case a bit of TLC. I unscrewed the keyboard and washed the whole case. It had some cracks on the back, so I superglued them together from the inside so it wouldn't show much. I cleaned the keyboard separately and after letting everything dry, my case was ready!

### Raspberry Pi

The other major component is the raspi - it's the brain of this project. For playing retro games any model will do. I already had a 3b+ so I used that. The pi will need a microSD for OS and storage and a power supply (its best to get a dedicated power supply, as there can be underpowering issues with using using phone chargers or siphoning power from a USB on a PC). 

My main OS is [RetroPie](https://retropie.org.uk/) with Rasbian, so I can jump to a familiar GUI for everyday computing if I ever need it. RetroPie is pretty straightforward, it boots you to a nice menu you only need a controller for and takes care of organizing your emulators and roms. The only drawback to RetroPie is that you can't use Shift + Arrows to indicate the opposite direction (C64 only has down and right arrow keys), but if you have a USB or DB controller connected, it's a non issue.

I have a second microSD with [BMC64](http://accentual.com/bmc64/) if I want something much closer to the original C64 experience. It boots super fast and the keyboard works as expected (this is a function of VICE emulator, not the distro itself). At this time I need to reopen the case each time I want to swap SD cards, so it's not perfect.

### Cables, connectors and adaptors

The idea is to hide the raspi inside the case and use the original case openings on the back and side for the raspi connections. To do that, I needed a bunch of short extension cables to (relatively) neatly run from raspi to the case. Fortunately, six inch cables are quite common nowadays so I picked up the needed USB and HDMI extensions. The two other types of connectors are more exotic, so they required a bit more searching. I ended up using:

* 2x 6" USB male to female cables - for controllers & other USB devices.
* 6" mciroUSB male to female cable - for raspi power supply.
* 6" HDMI male to female cable - for modern display.
*  Audio jack to RCA - for composite display. The right one is tricky to find!
* 3x female to female RCA couplers 
* Keyrah V2 - keyboard and DB9 interface.
* Donor USB cable for connecting Keyrah internally.

Simply connect the extension cables to Raspberry pi and you're *technically* good to go. The functionality is there, just not properly mounted inside the case. The only real problem I have run into was getting the composite output working. Turns out, there are [multiple wiring schemes](https://pinoutguide.com/PortableDevices/pda_audio_video_out_pinout.shtml) for that connector. You want the one that matches iPod video / Zune wiring. Male to female connectors like that seem not to exist, so I added some couplers to be able to use standard composite cables. 

[Keyrah V2](http://wiki.icomp.de/wiki/Keyrah_V2): A lot of the heavy lifting here is obviously done by this board. It's a little interface that translates Commodore keyboards to USB, and gives you other goodies, like DB9 ports and ability to change the layout of the keys with a toggle switch. It's good, especially that its 'plug-and-play', but it's not without faults (more on that later). Nevertheless, all you need to do is put a dip switch to match your keyboard model and use the C64 plugs to connect the keyboard and LED to the board. Voila! Your C64 now works like a USB keyboard! By default you connect it via external USB type B connector to your device, but there are 4 hidden holes under a sticker just behind the USB connector that you can use to connect it internally. I used an old USB charging cable and spliced four wire pins. If you don't want to solder, you can just grab an USB to 4 pin cable and plop it there for the same effect. You might want to secure that with some hot glue.

### 3D printed brackets

I designed my own brackets - they are available for free on [thingiverse](https://www.thingiverse.com/thing:3691730). They are based of another design, rebuilt from scratch to fit the connectors I wanted to use.

I wanted to have my connectors snug-fit, but the tolerances ended up being a little too small - I ended using an exacto knife on some connectors to make them a little thinner (there's plenty of plastic around them) and some superglue to make sure they will stay in place.  Your mileage may vary.

Installing the brackets is pretty simple. They snap in place in the back of the case and are secured at the original motherboard mounting points. To secure the Raspberry Pi to the bracket I got some PC motherboard stand-offs and pushed them into the holes with some superglue. They work well - much better than trying to print a screw thread on my budget 3d printer ;)

Now, all that's left is screwing the case back together and power it on. 
