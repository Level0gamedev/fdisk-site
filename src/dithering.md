---
layout: layouts/page.njk
templateEngineOverride: njk,md
hideTitle: false
description: "an in-depth look at faking color depth."
date: 2020-08-31
order: -1
tags: 
  - art
  - "info dump"
navi:
  key: dithering
  parent: grimoire
  excerpt: an in-depth look at faking color depth.
---

Dithering is a (usually automated & algorithmic) process creating an illusion of greater color depth in an image than its limited color palette would normally allow. It is done by combing pixels of different colors in such way that the human eye perceives the cluster of colors as a new, different color. It works on a similar principle to how pointillism creates the illusion of depth in painting.  

In the past, dithering was used to accurately display images on systems with limited color capabilities (aided by the fact that this effect is much more pronounced on CRT screens). Nowadays however, it is used mainly as an aesthetic choice, or as a way to minimize file size of images. 

ƒdisk uses 1bit dithering for both those reasons. One of the ideas behind this website is making it lightweight without resorting to pure minimalism. And while I was a fan of the dithered aesthetic long before then, only after I began working on ƒdisk I spent time properly researching the topic.

## image → mode → indexed 
Dithering an image requires an algorithm that will decrease the color depth and try to prevent color banding by "mixing" color pixels around. Any good raster editor will be able to do it. Both Gimp and Photoshop do that by switching to an indexed color space (using the path in the header), selecting the number of colors and choosing which algorithm to use. This will produce an 8bit image with a depth up to 255 colors. 

To achieve true 1bit (or 2 color) mode, you need to mark the option in Gimp's indexed mode options window, or switch to "Bitmap Mode" in Photoshop. Doing it this way will make the file smaller than a two-color 8bit copy of the same image.

## dither it!
Alternative to using a fully featured raster editor is simply running the image through a dithering algorithm. You can find implementations of those algorithms in pretty much any language there is and run it this way, or take a easy way and simply [ditherit.com](https://ditherit.com/)

Dither It is a user friendly implementation of multiple dithering algorithms on the web. Just upload your image, choose output colors and resolution and you're good to go. You can test multiple algorithms and choose the one that looks best.

This is my preferred method nowadays, as the website is a breeze to use and it's FOSS with source code available on [github](https://github.com/alexharris/ditherit-v2). So even if it ever goes down you can setup your own. The png files it produces are pretty well optimized, but can be shrunk even more by tweaking the file type options in a raster editor as explained below.
 
## .gif VS .png
While you can save indexed/1bit images in pretty much any file format, when optimizing for small size there are only two contenders: gif and png. Both fully support indexed color, transparency and are supported by web browsers. 

All in all, the same image saved as a gif will always be smaller than a png (gifs have less overhead), but pngs support partial transparency and display better in modern browsers when scaled down. With some tweaks you can get a png pretty damn close to gif size. Open your file in a raster program, make your changes (for ƒdisk, I change white for transparency) and export the file to your chosen file format.

**Always Export the file** (instead of Save/As)!!! Modern graphics programs like to "hide" the advanced options each file type provides and just apply non-optimized defaults. Photoshop is the biggest offender here, hiding access to those extras under "Export for web (legacy)" option. For me this meant a difference between 10kb and 5kb png.

Once you get to the file type option screen you want to make sure you disable any features you don't need (like interlacing, including color-profile and meta-data) and include only the colors you used (often there will be a window showing all the included colors). This is especially important with **1bit transparency**, as programs like to add white to the mix, making it no longer tiny 1bit (as it now includes 3 colors). 


