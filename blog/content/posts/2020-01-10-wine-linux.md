---
title: "Wine on Linux"
created_at: Fri Jan 10 17:51:51 MST 2020
kind: article
tags:
  - wine_linux
  - garmin_express
---
<h1>
  <a href="https://www.winehq.org/" target="_blank">winehq.org</a>
  Wine
</h1>
<h3>
  <a href="https://wiki.winehq.org/Wine_User%27s_Guide" target="_blank">wiki.winehq.org</a>
  Wine User's Guide
</h3>
<h3>
  <a href="https://wiki.winehq.org/List_of_Commands" target="_blank">wiki.winehq.org</a>
  List of Commands
</h3>

<h1>Wine on Arch</h1>
<h4>
  <a href="https://wiki.archlinux.org/index.php/Wine" target="_blank">wiki.archlinux.org</a>
  Wine
</h4>
<pre>
Fri Jan 10 18:13:11 MST 2020
Repo Multilib
Name Wine
5.0rc4-1
Last updated 2020-01-04
</pre>

<h2>Garmin Express in Wine</h2>
<h4>
  <a href="https://www.christitus.com/garmin-express-linux/" target="_blank">christitus.com</a>
  Garmin Express on Linux | Step by Step Guide
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=hg01Z6VCox0" target="_blank">Chris Titus Tech youtube</a>
  Garmin Express on Linux | Wine Setup and Configuration
</h4>

<h4>
  <a href="https://download.garmin.com/omt/express/GarminExpress.exe" target="_blank">download.garmin.com</a>
  Garmin Express Installer
</h4>

<h3>Remove to start over</h3>
<pre>
sudo pacman -R wine-mono
sudo pacman -R wine-gecko
sudo pacman -R wine
</pre>
<h3>Start over</h3>
<pre>
sudo pacman -S wine
  Packages (1) wine-5.0rc4-1
</pre>
<h4>install at /home/craig/bin/GarminExpress.exe</h4>
<pre>
sudo pacman -S winetricks
sudo pacman -S wine-mono wine-gecko
</pre>
<h4>First we start by creating a wineprefix and installing our prerequisites from terminal:</h4>
<pre>
WINEARCH=win32 WINEPREFIX=/home/craig/bin/GarminExpress winetricks dotnet452 vcrun2010 corefonts
WINEARCH=win32 WINEPREFIX=/home/craig/bin/GarminExpress winetricks win7
</pre>
<h4>run the installer</h4>
<pre>
WINEPREFIX=/home/craig/bin/GarminExpress wine explorer /desktop=garmin,1200x700 /home/craig/bin/GarminExpress.exe
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
