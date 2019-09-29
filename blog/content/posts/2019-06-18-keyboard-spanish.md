---
title: "Keyboard Spanish"
created_at: Tue Jun 18 19:20:54 MDT 2019
kind: article
tags:
  - learn_spanish
  - keyboard_spanish
---

Edit /etc/default/keyboard as shown below.

<h1>
  <a href="https://www.coolermaster.com/us/en-us/catalog/peripheral/keyboards/quick-fire-stealth/" target="_blank">coolermaster.com</a>
  Quick Fire Stealth
</h1>

<img src="/assets/images/quickfire-stealth-keyboard-01.png" width="600px">

<h2>
  <a href="https://www.newegg.com/cooler-master-cm-storm-quickfire-stealth-sgk-4000-gkcm2-us-usb-or-ps-2-wired/p/N82E16823129014" target="_blank">newegg.com</a>
  CM Storm QuickFire Stealth
</h2>

Compact “tenkeyless” (aka TKL or 80%, no numeric pad) 87-key
layout. Features a frameless design with a minimal desktop footprint

<pre>
Brand Cooler Master
Name CM Storm QuickFire Stealth
Model SGK-4000-GKCM2-US

87 Keys (no 10-key pad)
Keyboard Interface USB or PS/2
Design Style Mini
Key Switch Type Brown Cherry MX
Keyboard Color Black
Type Wired

Mechanical CHERRY MX switches
Extremely compact size
Covert keycaps
Removable braided USB cable
</pre>

<h3>
<a href="https://en.wikipedia.org/wiki/AltGr_key" target="_blank">wikipedia.org</a>
AltGr key
</h3>

<h3>
  <a href="https://lists.x.org/archives/xorg/2007-July/026534.html" target="_blank">lists.x.org/archives</a>
  International US keyboard - AltGr deadkeys
</h3>

<h3>
  <a href="https://tylercipriani.com/blog/2015/01/23/toward-a-useful-keyboard-in-x/" target="_blank">tylercipriani.com</a>
  Toward a More Useful X Keyboard
</h3>

<h3>
  <a href="https://viliampucik.blogspot.com/2011/10/us-international-keyboard.html" target="_blank">viliampucik.blogspot.com</a>
  US International Keyboard
</h3>

To enable typing of international characters with AltGr key while using US layout:

<pre>
Some useful key combinations:

á ← AltGr+a
ä ← AltGr+q
č ← Shift+AltGr+.+c
ď ← Shift+AltGr+.+d
é ← AltGr+e
í ← AltGr+i
ĺ ← AltGr+'+l
ľ ← Shift+AltGr+.+l
ň ← Shift+AltGr+.+n
ó ← AltGr+o
ô ← AltGr+6+o
ŕ ← AltGr+'+r
š ← Shift+AltGr+.+s
ť ← Shift+AltGr+.+t
ú ← AltGr+u
ý ← AltGr+'+y
ž ← Shift+AltGr+.+z
£ ← Shift+AltGr+4
€ ← AltGr+5
¥ ← AltGr+-
© ← AltGr+c
° ← Shift+AltGr+;
¶ ← AltGr+;
</pre>

<h3>
  <a href="https://www.scottseverance.us/html/keyboard/win_intl_altgr/" target="_blank">scottseverance.us</a>
  “English (intl., with AltGr dead keys)” keyboard layout
</h3>

<h3>
  <a href="https://linoxide.com/linux-how-to/configure-keyboard-ubuntu/" target="_blank">linoxide.com/</a>
  How to Configure Keyboard on Ubuntu 18.04 
</h3>

<h3>
  <a href="https://wiki.archlinux.org/index.php/Xorg/Keyboard_configuration" target="_blank">wiki.archlinux.org</a>
  Xorg/Keyboard configuration
</h3>

<h3>
  <a href="https://wiki.archlinux.org/index.php/Linux_console/Keyboard_configuration" target="_blank">wiki.archlinux.org</a>
  Linux console/Keyboard configuration
</h3>

<h4>/etc/default/keyboard - this works</h4>

XKBVARIANT="intl" or "altgr-intl"

<pre>
XKBMODEL="pc105"
XKBLAYOUT="us"
XKBVARIANT="altgr-intl"
XKBOPTIONS=""

BACKSPACE="guess"
</pre>

<h4>
/usr/share/X11/xkb/rules/base.lst
</h4>

<pre>
! model

! layout

! variant

! option
</pre>


<h3>
  <a href="https://www.thoughtco.com/panish-accents-and-symbols-in-ubuntu-3080298" target="_blank">thoughtco.com/</a>
  How To Make Spanish Accents and Symbols in Ubuntu Linux
</h3>

The USA International (with dead keys) layout gives you a second method
of typing the accented letters, as well as the only method for Spanish
punctuation. This method uses the RightAlt key (usually to the right of
the space bar) pressed at the same time as another key.

<h4>The following match AltGr-intl</h4>

<pre>
RightAlt-
RightAlt-shift-

RightAlt-a á
RightAlt-shift-A Á
RightAlt-e é
RightAlt-shift-E É
RightAlt-i í
RightAlt-shift-I Í
RightAlt-n ñ
RightAlt-shift-N Ñ
RightAlt-o ó
RightAlt-shift-O Ó
RightAlt-u ú
RightAlt-shift-U Ú
RightAlt-y ü
RightAlt-shift-Y Ü
RightAlt-/ ¿
RightAlt-shift-! ¡
RightAlt-[ «
RightAlt-] »
</pre>

<h4>Log altgr-intl keys on ivie Debian 9.9 stretch</h4>

<pre>
Tue Jul  2 14:27:26 MDT 2019
Release:	9.9
Codename:	stretch

rightalt-
RightAlt-shift-

RightAlt-1 ¹
RightAlt-2 ²
RightAlt-3 ³
RightAlt-4 ¤
RightAlt-5 €
RightAlt-6 dead
RightAlt-7 dead
RightAlt-8 dead
RightAlt-9 ‘
RightAlt-0 ’
RightAlt-- ¥
RightAlt-= ×

RightAlt-shift-1-!  ¡
RightAlt-shift-2-@ dead
RightAlt-shift-3-# dead
RightAlt-shift-4-$ £
RightAlt-shift-5-% dead
RightAlt-shift-6-^ ¼
RightAlt-shift-7-& ½
RightAlt-shift-8-* ¾
RightAlt-shift-9 dead
RightAlt-shift-_ dead
RightAlt-shift-+ ÷

RightAlt-q ä
rightalt-w å
rightalt-e é
rightalt-r ë
rightalt-t þ
rightalt-y ü
rightalt-u ú
rightalt-i í
rightalt-o ó
rightalt-p ö
rightalt-[ «
rightalt-] »
rightalt-\ ¬

RightAlt-shift-Q Ä
RightAlt-shift-W Å
RightAlt-shift-E É
RightAlt-shift-R Ë
RightAlt-shift-T Þ
RightAlt-shift-Y Ü
RightAlt-shift-U Ú
RightAlt-shift-I Í
RightAlt-shift-O Í
RightAlt-shift-P Ö
RightAlt-shift-{ “
RightAlt-shift-} ”
RightAlt-shift-| ¦

RightAlt-a á
RightAlt-s ß
RightAlt-d ð
RightAlt-f f
RightAlt-g g
RightAlt-h h
RightAlt-j ï
RightAlt-k œ
RightAlt-l ø
RightAlt-; ¶
RightAlt-' dead

RightAlt-shift-A Á
RightAlt-shift-S §
RightAlt-shift-D Ð
RightAlt-shift-F F
RightAlt-shift-G G
RightAlt-shift-H H
RightAlt-shift-J Ï
RightAlt-shift-K Œ
RightAlt-shift-L Ø
RightAlt-shift-: °
RightAlt-shift-" dead

RightAlt-z æ
RightAlt-x œ
RightAlt-c ©
RightAlt-v ®
RightAlt-b b
RightAlt-n ñ
RightAlt-m µ
RightAlt-, ç
RightAlt-. dead
RightAlt-/ ¿

RightAlt-shift-Z Æ
RightAlt-shift-X Œ
RightAlt-shift-C ¢
RightAlt-shift-V ®
RightAlt-shift-B B
RightAlt-shift-N Ñ
RightAlt-shift-M µ
RightAlt-shift-< ç
RightAlt-shift-> dead
RightAlt-shift-? dead
</pre>

<!--
html boilerplate fragments
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
  <li><a href="" target="_blank"></a></li>
</ul>
<pre>
</pre>
<p style="margin-bottom: 2em;"></p>
<hr style="border: 0; height: 3px; background: #333; background-image: linear-gradient(to right, #ccc, #333, #ccc);">
<pre><code>
</code></pre>
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
:-->
