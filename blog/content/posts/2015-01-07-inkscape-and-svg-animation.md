---
title: "Inkscape and SVG Animation"
created_at: Wed Jan  7 08:05:20 MST 2015
kind: article
tags:
  - svg
  - inkscape
  - animation
---

## Mozilla IRC server irc.mozilla.org

* [Mozilla SVG page](https://developer.mozilla.org/en-US/docs/Web/SVG)

### IRC Channels

* #svg

## Research

* [Inkscape Wiki - SVG Animation](http://wiki.inkscape.org/wiki/index.php/SVG_Animation)
* [w3.org SVG/ - AnimationElements](http://www.w3.org/TR/SVG/animate.html#AnimationElements)
* [W3C Recommendation SMIL Animation](http://www.w3.org/TR/2001/REC-smil-animation-20010904/)

## Inkscape Script Extensions



## Questions on irc.freenode.#inkscape.weechatlog

### How could I reorigin a group so the upper left of the bounding box is at 0,0?

2015-01-07 08:59:08

LiamW	create guides around the page enable snap to bbox corners snap
it to the corner

sanguivor	Upper left at 0,0 would mean it would not be on the page.

su_v	0,0 as in SVG origin probably (which is upper left of the page
in Inkscape, originally) (could be a question about the translate()
transforms on layer groups?)

cootcraig	su_v Yes I want to prepare groups to become svg <g>
elements for placement and animation in a browser.

su_v	cootcraig: ungroup, regroup the selection again this will however
cause the transform attribute to be inherited by the former members of the
original group if it's about a translate() on an Inkscape layer (because
the page size (height) was chanegd): add a new layer, move content to the
new layer same effect though: the translate() of the original layer will
be passed on to the objects formerly on that layer repeat for each group
(ungroup, regroup) until you reached the level of 'flatness' (without
transforms) as needed inkscape shapes will keep the transform no matter
what (in 0.48), convert to path if needed without, and nudge path with
arrow keys to force a rewrite of the path data (which converts preseved
transforms into optimized transforms aka stored in the path 'd' itself)

cootcraig	su_v Thanks for the helpful comments.

cootcraig	I plan to edit one group at a time in inkscape, then hand
edit the inkscape file to be a <g> element for import into the browser.


## Research

* [Inkscape Forum](http://www.inkscapeforum.com/index.php)
* [rasem ruby gem - describe your SVG images in ruby code](https://github.com/aseldawy/rasem)
* [manuel-strehl.de - A Simple Icon Set](http://www.manuel-strehl.de/var/simple_icons.en.html)
* [svg file from above](http://www.manuel-strehl.de/assets/image/simple_icons/icons.svg)
* [jwatt.org - SVG Authoring Guidelines](https://jwatt.org/svg/authoring/)
* [manuel-strehl.de - Wire­frames with SVG](http://www.manuel-strehl.de/dev/wireframes_with_svg.en.html)
* [Tavmjong Bah's Blog about Inkscape, SVG](http://tavmjong.free.fr/blog/)
* [Tavmjong Bah - using SVG in HTML](http://tavmjong.free.fr/SVG/)

