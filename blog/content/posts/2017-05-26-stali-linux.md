---
title: "Stali Linux"
created_at: Fri May 26 08:48:57 MDT 2017
kind: article
tags:
  - musl_libc
  - stali_linux
---

<h1>
  <a href="http://sta.li/" target="_blank">Stali Static Linux</a>
</h1>

<h2>About</h2>

stali is a brand new static linux distribution based on the original
pre-2010 plans of the suckless.org project, but with a couple of revised
goals:

<h2>stali goals</h2>

<ul>
  <li>Follow the suckless philosophy</li>
  <li>Target x86_64 and arm (RPi) support</li>
  <li>Use custom stali.mk Makefile’s for the base system (except Linux kernel so far)</li>
  <li>Ignore FHS of Linux, it simply sucks. Use a decent filesystem structure instead</li>
  <li>Don’t use systemd (read more about why it sucks)</li>
  <li>Make everything musl libc based</li>
  <li>Achieve binary size reduction (through the avoidance of glibc and other bloated GNU libraries)</li>
  <li>Achieve better performance than any other x86_64 or arm distribution, as only statically linked binaries are used</li>
  <li>Achieve better memory footprint than heavyweight distros using dynamic linking and all its problems</li>
  <li>Achieve better ABI stability and long-term maintenability of the static binaries (compared to their dynamic counterparts)</li>
  <li>Minimize security threat vector - potential flaws only on a per static binary basis (say good bye to the famous LD_PRELOAD and .so dependency resolver problems)</li>
  <li>Include a hand selected collection of the best tools for each task (including sbase, ubase, …)</li>
  <li>Upgrade/install using git, no package manager needed</li>
</ul>

<!--
html boilerplate
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
</ul>
<pre>
</pre>
<pre><code>
</code></pre>
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->

