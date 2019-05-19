---
title: "Pinebook Debian April 2019"
created_at: Mon Apr 22 17:54:59 MDT 2019
kind: article
tags:
  - pinebook
  - linux
  - debian
---

<h3>
  <a href="https://github.com/ayufan-pine64/linux-build/releases" target="_blank">github.com/ayufan-pine64</a>
  linux-build/releases
</h3>

<pre>
Sun Apr 28 21:39:00 MDT 2019

Latest Release:
0.7.28: jenkins-linux-build-pine-a64-136
 ...
stretch-minimal-pinebook-bspkernel-0.7.28-136.img.xz

https://github.com/ayufan-pine64/linux-build/releases/download/0.7.28/stretch-minimal-pinebook-bspkernel-0.7.28-136.img.xz
</pre>

<h2>
  <a href="https://www.debian.org/releases/" target="_blank">debian.org</a>
  Debian Releases
</h2>

<pre>
Sun Apr 28 21:33:06 MDT 2019

The "stable" distribution contains the latest officially released
distribution of Debian.

This is the production release of Debian, the one which we primarily
recommend using.

The current "stable" distribution of Debian is version 9, codenamed
stretch. It was initially released as version 9 on June 17th, 2017 and
its latest update, version 9.9, was released on April 27th, 2019.
</pre>

<h3>
  <a href="https://wiki.debian.org/LXDE#Installation" target="_blank">wiki.debian.org</a>
  LXDE#Installation
</h3>

<pre>
A complete Debian LXDE desktop environment (starting from Debian 7.0 "Wheezy"):
apt-get install task-lxde-desktop
</pre>

<h3>
  <a href="https://wiki.debian.org/DebianDesktopHowTo" target="_blank">wiki.debian.org</a>
  DebianDesktopHowTo
</h3>

<h3>
  <a href="https://wiki.lxde.org/en/Debian" target="_blank">wiki.lxde.org</a>
  Debian
</h3>

<h1>Log</h1>

No wifi

<pre>
/etc/network/interfaces.d/wlan0

auto wlan0
iface wlan0 inet dhcp
	wpa-ssid Pirates
	wpa-psk Percydog
</pre>

<h3>X.org fails</h3>

<pre>
X.org log
Load module fbturbo
Warning couldn't open module fbturbo
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
