---
title: "ivie OS Upgrade"
created_at: Sun Aug 12 12:54:09 MDT 2018
kind: article
tags:
  - linux
  - debian
---

<pre>
cat /etc/issue
Debian GNU/Linux 8

lsb_release -a
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 8.7 (jessie)
Release:	8.7
Codename:	jessie
</pre>

<h1>
  Upgrades from Debian 8 (jessie)
  <a href="https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html" target="_blank">debian.org/releases/stable/</a>
</h1>

<pre>
% dpkg --audit

The following packages have an unknown foreign architecture, which will
cause dependency issues on front-ends. This can be fixed by registering
the foreign architecture with dpkg --add-architecture:
 brhl5250dnlpr        Brother HL-5250DN LPR driver
 cupswrapperhl5270dn  Brother HL5270DN CUPS wrapper driver
</pre>

<h1>jessie 8.7 update</h1>

<pre>
Sun Aug 12 17:17:37 MDT 2018
apt-get update

E: The method driver /usr/lib/apt/methods/https could not be found.
N: Is the package apt-transport-https installed?

apt-get install apt-transport-https
 ...
  apt-transport-https
0 upgraded, 1 newly installed, 0 to remove and 486 not upgraded.
 ...
Unpacking apt-transport-https (1.0.9.8.4) ...
Setting up apt-transport-https (1.0.9.8.4) ...
</pre>

<h3>
  “method driver /usr/lib/apt/methods/https could not be found” update error -
  <a href="https://askubuntu.com/questions/104160/method-driver-usr-lib-apt-methods-https-could-not-be-found-update-error" target="_blank">askubuntu.com/questions/104160</a>
</h3>

<pre>
Sun Aug 12 17:44:25 MDT 2018
apt-get update
  worked

apt-get dist-upgrade
</pre>

<h4>Nate C-K - answered Aug 29 '14 at 17:24</h4>

I encountered this problem as well. I was unable to fix it by installing
apt-transport-https, because it had been quite a while since I'd done
any package updates on the machine in question, and the version of
that package that I needed was no longer available in the package
repository. (To get an available version, I first had to be able to
apt-get update successfully.) Thus, I was forced to track down the reason
why apt-get was suddenly trying to use HTTPS, and stop it from doing that.

In my case, it turns out that one of the third-party apt sources that
was listed in a config file in my /etc/apt/sources.list.d directory had
switched to using HTTPS for all downloads, and they had begun redirecting
the http:// URL to an https:// URL. This was making apt attempt to use
HTTPS even though none of my source configurations requested it. (I
discovered this by opening the source repository URL in my web browser,
and noticing that the URL in the address bar changed to https:// when
the page loaded.)

Since this was a third-party repository and thus non-essential, I simply
disabled that source temporarily, then reran apt-get update and it worked
with no problem. After apt-get update, apt-get upgrade and apt-get install
apt-transport-https, I was able to re-enable that third-party apt source,
and from there on everything worked.

<h1>
  How to upgrade Debian 8 Jessie to Debian 9 Stretch by Lubos Rendek 02 March 2018 
  <a href="https://linuxconfig.org/how-to-upgrade-debian-8-jessie-to-debian-9-stretch" target="_blank">linuxconfig.org/how-to-upgrade</a>
</h1>

<h1>
  How to Upgrade Debian 8 (Jessie) to 9 (Stretch) safely
  <a href="https://www.howtoforge.com/tutorial/how-to-upgrade-debian-8-jessie-to-9-stretch/" target="_blank">howtoforge.com/tutorial/how-to</a>
</h1>

<h1>Backups</h1>

<pre>
bash setup
i3 WM
dev folder
windows VM
  Taxes
  Automotive Wolf
</pre>

<h1>Consider Distro other than Debian</h1>

<h2>Arch</h2>

<ul>
  <li>
    <a href="https://www.archlinux.org/" target="_blank">Main Site</a>
  </li>
  <li>
    <a href="https://wiki.archlinux.org/" target="_blank">Wiki</a>
  </li>
  <li>
    <a href="https://bbs.archlinux.org/" target="_blank">Forums</a>
  </li>
  <li>
    <a href="https://aur.archlinux.org/" target="_blank">AUR page</a>
  </li>
</ul>

<h3>
  Overview of Arch Linux
  <a href="https://wiki.archlinux.org/index.php/Arch_Linux" target="_blank"></a>
</h3>

<h2>Reviews</h2>

<h3>
  <a href="https://www.makeuseof.com/tag/reasons-install-arch-linux/" target="_blank">makeuseof.com/tag/reasons</a>
  10 Reasons to Install an Arch Linux-Based OS on Your PC Bertel King, Jr. April 2, 2018
</h3>

<h3>
  <a href="https://hackernoon.com/manjaro-deepin-review-a-clean-minimal-and-powerful-linux-distro-6c0ccac04cd8" target="_blank">hackernoon.com/manjaro</a>
  Manjaro Deepin Review: A Clean Minimal and Powerful Linux Distro
</h3>

<h3>
  <a href="https://computingforgeeks.com/best-linux-distributions-2018-arch-linux-complete-review/" target="_blank">computingforgeeks.com/best-linux</a>
  Best Linux Distributions 2018 – Arch Linux complete review
  By Josphat Mutai - March 1, 2018
</h3>



<h3>
  <a href="http://www.akitaonrails.com/2017/01/10/arch-linux-best-distro-ever" target="_blank">akitaonrails.com/2017/01/10</a>
  AkitaOnRails - Arch Linux - Best distro ever? - 2017 January 10
</h3>

glowing review

<!--

html boilerplate fragments
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<img type="image/svg+xml" src="abc.svg" width="400px">
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
