---
title: "Debian Package Management"
created_at: Sat Aug 20 11:51:17 MDT 2016
kind: article
tags:
  - debian
  - apt-get
---
debian 9 The Debian Administrator's Handbook

<h1>
  <a href="https://www.debian.org/doc/" target="_blank">debian.org/doc</a>
  Debian Documentation
</h1>

<h1>
  <a href="https://wiki.debian.org/DebianPackageManagement" target="_blank">wiki.debian.org</a>
  DebianPackageManagement
</h1>

Debian package management consists of several layers. The lowest layers are made up of 
<a href="https://wiki.debian.org/dpkg" target="_blank">dpkg</a>
and associated programs. On top of these layers is the 
<a href="https://wiki.debian.org/Apt" target="_blank">Apt</a>
family of tools such as apt, apt-get, apt-cache, and others. See the 
<a href="https://wiki.debian.org/PackageManagement/PkgTools" target="_blank">Package Management Tools</a>
page for a description of other tools for working with 
<a href="https://wiki.debian.org/DebianPackage" target="_blank">DebianPackage</a>
files. 

<h4>
<a href="https://wiki.debian.org/DebianPackageManagement#Apt" target="_blank">wiki.debian.org</a>
DebianPackageManagement#Apt
</h4>

<h3>
  <a href="https://wiki.debian.org/Apt" target="_blank">wiki.debian.org</a>
  Apt
</h3>

<h4>
  <a href="https://www.reddit.com/r/debian/comments/bi95hz/has_the_aptitude_development_been_abandoned/" target="_blank">reddit.com/r/debian</a>
  Has the Aptitude development been abandoned?
</h4>

Good discussion on package management tools.

<h4>
  <a href="https://www.reddit.com/r/debian/comments/akmm4o/can_someone_explain_aptget_vs_apt_vs_aptitude_to/" target="_blank">reddit.com/r/debian</a>
  Can someone explain apt-get vs apt vs aptitude to me?
</h4>

<a href="https://www.debian.org/doc/manuals/debian-faq/ch-pkgtools.en.html" target="_blank">debian.org/doc/</a>

## The Debian GNU/Linux FAQ - Chapter 8 - The Debian package management tools 

Remove a package (but not its configuration files): dpkg --remove foo.

Remove a package (including its configuration files): dpkg --purge foo.


### For instance, use this PPA repo

use ubuntu ppa repo on debian

<pre>
sudo add-apt-repository ppa:openscad/releases
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
