---
title: "ArcoLinuxb Mate 0qw5q"
created_at: Fri Oct 19 04:15:39 MDT 2018
kind: article
tags:
  - arch_linux
  - arcolinux
  - linux
---

<h1>Purpose</h1>

Quick and dirty install
to run LibreOffice and sigil
to work on on creating epub documents.

<h1>Generate unique private host id hash</h1>

See
<a href="/posts/2015/04/generate-private-hostnames/" target="_blank">local - Generate Private Host Names</a>

<pre>
https://codepen.io/ivanakimov/pen/bNmExm

var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(8);
var numbers = hashids.decode(id);

$("#input").text("["+numbers.join(", ")+"]");
$("#output").text(id);

8 => 0qw5q - arcolinuxb-mate-0qw5q - 20181019
</pre>

<h1>ISO</h1>

<h4>
  <a href="https://sourceforge.net/projects/arcolinux-community-editions/files/mate/" target="_blank">sourceforge.net</a>
  ArcoLinuxB Community Editions - mate
</h4>


<h4>
  <a href="https://sourceforge.net/projects/arcolinux-community-editions/files/mate/arcolinuxb-mate-v18.10.4.iso/download" target="_blank">sourceforge.net/</a>
  download arcolinuxb-mate-v18.10.4.iso
</h4>

<pre>
arcolinuxb-mate-v18.10.4.iso
modified 2018-10-12
2.2 GB
/home/craig/Downloads/arcolinuxb-mate-v18.10.4.iso

first user: craig
want user craig to have uid:gid 1000:1000 - Yes this is install first user 1000:1000
</pre>

<h1>Packages added</h1>

<h4>
  <a href="https://www.archlinux.org/packages/?name=terminator" target="_blank">archlinux.org/packages</a>
  terminator
</h4>

<pre>
pacman -S terminator
</pre>

<h4>
  <a href="https://www.archlinux.org/packages/?name=gvim" target="_blank">archlinux.org/packages</a>
  gvim
</h4>

<pre>
pacman -S gvim
  asked to uninstall vim first. said yes.
</pre>

<h4>
  <a href="https://www.archlinux.org/packages/?name=libreoffice-fresh" target="_blank">archlinux.org/packages</a>
  libreoffice-fresh
</h4>

<pre>
pacman -S libreoffice-fresh
  ran to completion
</pre>

<h4>
  <a href="https://www.archlinux.org/packages/community/x86_64/sigil/" target="_blank">archlinux.org/packages</a>
  2018-10-19 sigil 0.9.10-2
</h4>

<pre>
pacman -S sigil
  ran to completion 
</pre>

<h3>2018-10-21 gthumb 3.6.2-1</h3>

<h4>
  <a href="https://wiki.gnome.org/action/show/Apps/Gthumb?action=show&redirect=gthumb" target="_blank">wiki.gnome.org</a>
  gThumb at gnome.org
</h4>

<h4>
  <a href="https://www.archlinux.org/packages/extra/x86_64/gthumb/" target="_blank">archlinux.org/packages</a>
  gthumb in arch extra
</h4>

<h1>Configuration</h1>

<h2>virtualbox host shares</h2>

<h4>Check version of virtualbox guest additions</h4>

<pre>
$ pacman -Qe |grep virtualbox
virtualbox-guest-modules-arch 5.2.20-1
virtualbox-guest-utils 5.2.20-1
</pre>

<h4>Manual mounting of host shares</h4>

<pre>
sudo mount -t vboxsf craig /mnt/craig
sudo mount -t vboxsf r1 /mnt/r1
</pre>

<h4>Automatic mounting of host shares</h4>

See
<a href="/posts/2018/10/arch-linux/#Automounting" target="_blank">virtualbox automounting</a>

<h3>
  <a href="https://arcolinux.com/updating-a-6-months-old-arcolinux-or-how-to-keep-rolling-and-never-clean-install/" target="_blank">arcolinux.com/</a>
  Updating a 6 months old ArcoLinux or how to keep rolling and never clean install
</h3>

<pre>
Good video, lots of information.
update command: sudo pacman -Syyu
  has alias: update
alias update="sudo pacman -Syyu"

sudo pacman -S archlinux-keyring
update
</pre>

<h1>Wallpaper</h1>

<h3>
  <a href="https://arcolinux.com/how-to-change-the-wallpaper-with-variety/" target="_blank">arcolinux.com/</a>
  How to change the wallpaper with variety
</h3>

<h3>
  <a href="https://arcolinuxforum.com/viewtopic.php?t=1153" target="_blank">arcolinuxforum.com</a>
  [SOLVED] How to keep wallpaper from changing
</h3>

<pre>
There are tons of video's and articles about our wallpaper changer and provider.
But you need to know the name aka variety
Search our websites to look what you want to do next
https://arcolinux.com/?s=variety
</pre>

<h3>
  <a href="https://arcolinux.com/how-to-delete-variety-and-all-its-configuration-files/" target="_blank">arcolinux.com/</a>
  How to delete variety and all its configuration files
</h3>

<pre>
See ~/.config/variety/variety.conf

sudo pacman -R variety
sudo pacman -R arcolinux-variety-git
Manually remove the folder: ~/.config/variety
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
-->
