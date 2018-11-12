---
title: "ArcoLinux Install vr2kr"
created_at: Tue Oct  9 21:31:53 MDT 2018
kind: article
tags:
  - arch_linux
  - arcolinux
  - linux
---

<pre>
iso image: /home/craig/Downloads/arcolinuxb-i3-v18.9.5.iso

7 => vr2kr - arcolinux-vr2kr - 20181009
base memory: 3072 MB
video memory: 128 MB
Hard Disk
Type: Normal (VDI)
Virtual Size: 32.00 GB
Actual Size: ???
Details: Dynamically allocated differencing storage
Location: /home/craig/VirtualBox VMs/windows7-8qxer/arcolinux-vr2kr
</pre>

<h1>
  <a href="https://arcolinuxd.com/1-installation-of-arcolinuxd-i3/" target="_blank">arcolinuxd.com</a>
 Installation of ArcoLinuxD i3 Jul 21, 2018 
</h1>

<h1>Generate unique private host id hash</h1>

<pre>
hash: vr2kr
hostname: arcolinux-vr2kr
</pre>

<a href="https://codepen.io/ivanakimov/pen/bNmExm" target="_blank">Based on this codepen - ivanakimov</a>

See
<a href="/posts/2015/04/generate-private-hostnames/" target="_blank">local - Generate Private Host Names</a>

<pre>
https://codepen.io/ivanakimov/pen/bNmExm

var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(7);
var numbers = hashids.decode(id);

$("#input").text("["+numbers.join(", ")+"]");
$("#output").text(id);

7 => vr2kr - arcolinux-vr2kr - 20181009
</pre>

<h1>ISO</h1>

/home/craig/Downloads/arcolinuxb-i3-v18.9.5.iso

From
<a href="https://sourceforge.net/projects/arcolinux-community-editions/files/i3/" target="_blank">sourceforge.net/projects/arcolinux-community-editions</a>

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
