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

<pre>
XKBMODEL="pc105"
XKBLAYOUT="us"
XKBVARIANT="intl"
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

<pre>
á — RightAlt + a
Á — RightAlt + Shift + a
é — RightAlt + e
É — RightAlt + e + Shift
í — RightAlt + i
Í — RightAlt + i + Shift
ñ — RightAlt + n
Ñ — RightAlt + n + Shift
ó — RightAlt + o
Ó — RightAlt + o + Shift
ú — RightAlt + u
Ú — RightAlt + u + Shift
ü — RightAlt + y
Ü — RightAlt + y + Shift
¿ — RightAlt + ?
¡ — RightAlt + !
« — RightAlt + [
» — RightAlt + ]
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
