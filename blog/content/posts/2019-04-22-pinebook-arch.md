---
title: "Pinebook Arch April 2019"
created_at: Mon Apr 22 17:54:59 MDT 2019
kind: article
tags:
  - pinebook
  - linux
  - arch_linux
---

<h3>
  <a href="https://github.com/pine64dev/PINE64-Installer" target="_blank">github.com</a>
  PINE64-Installer
</h3>

<h3>
  <a href="https://github.com/anarsoul/linux-build/releases" target="_blank">github.com/anarsoul</a>
  linux-build/releases
</h3>

<h4>
  <a href="https://github.com/ayufan-pine64/linux-build/releases/latest" target="_blank">github.com</a>
  Pine64 latest release - ayufan-pine64
</h4>

<h4>
  <a href="https://github.com/pine64dev/PINE64-Installer/releases" target="_blank">github.com</a>
  PINE64-Installer Releases
</h4>

<h3>
  <a href="https://github.com/anarsoul/linux-build/releases/tag/20190112" target="_blank">github.com/anarsoul</a>
  20190112 - New Archlinux release with XFCE - 2019 January 12
</h3>

choose 'desktop: xfce session' on first login, it won't login with 'default'

Audiocard number may change across reboots. Select necessary audio device (HDMI or analog) using pavucontrol

Use 'alsamixer -Dhw:0' to control speaker volume, control name is 'Line out'.

Reported battery level isn't accurate. Will be fixed in next releases

Suspend doesn't work. That's upstream kernel limitation since it doesn't use ARISC core. Future release will have hibernate. Standby works but note it's not real suspend - it stops all the user processes and shuts down all devices it can. CPU and memory are still running and drawing power. The only wake up source is lid switch, so setup it up to go into standby when lid is closed and it'll resume when lid is open

Root partition is not resized on first boot. Will be fixed in next releases. As a workaround, download this script and run it as root on your device: https://raw.githubusercontent.com/anarsoul/linux-build/mainline/otherfiles/resize_rootfs.sh - replace mmcblk0 with mmcblk2 if you installed it on eMMC.

Dual-screen is broken on Pinebook - will be eventually fixed with kernel update. If you want to use HDMI without LCD do 'xrandr --output HDMI-1 --off; xrandr --output eDP-1 --off; xrandr --output HDMI-1 --auto'. To enable LCD back do 'xrandr --output HDMI-1 --off; xrandr --output eDP-1 --off; xrandr --output eDP-1 --auto'. If xrandr is not installed do 'pacman -S xorg-xrandr'

<h3>
  <a href="https://forum.pine64.org/showthread.php?tid=5067&pid=32886#pid32886" target="_blank">forum.pine64.org</a>
  enable emmc_compat=150mhz mode
</h3>

I tried 150 MHz and it is faster, from about 75 to more than 100 MB/s.

<h2>
  <a href="http://files.pine64.org/doc/pinebook/guide/Pinebook_14-eMMC_Removal_Guide.pdf" target="_blank">files.pine64.org/doc/pinebook</a>
  Removing eMMC from the 14” Pinebook
</h2>

<pre>
Tue Apr 23 12:37:38 MDT 2019
pine2 microsd has
archlinux-xfce-pinebook-20190112.img.xz
flashed
</pre>

<h3>
  <a href="http://anarsoul.blogspot.com/2017/09/hacking-u-boot-for-pinebook-part-1.html" target="_blank">anarsoul.blogspot.com</a>
  Hacking u-boot for Pinebook. Part #1 - using FEL 
</h3>

<h3>
  <a href="http://linux-sunxi.org/Linux_mainlining_effort" target="_blank">linux-sunxi.org</a>
  Linux mainlining effort
</h3>

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
