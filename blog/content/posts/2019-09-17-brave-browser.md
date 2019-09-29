---
title: "Brave Browser"
created_at: Wed Sep 18 20:05:29 MDT 2019
kind: article
tags:
  - brave_browser
  - debian
  - arch
  - arcolinux
  - linux
---

<h2>Brave Releases</h2>

<h4>
  <a href="https://github.com/brave/brave-browser/wiki/Brave-Release-Schedule" target="_blank">github.com/brave</a>
  Brave Release Schedule
</h4>

<pre>
Tue Sep 17 15:01:14 MDT 2019
Last date is release date.
0.61.x	73	March 5, 2019	March 12, 2019	
0.62.x	73	March 26, 2019	April 2, 2019	
0.63.x	74	April 16, 2019	April 23, 2019	
0.64.x	74	May 7, 2019	May 14, 2019	
0.65.x	75	May 29, 2019	June 6, 2019	
0.66.x	75	June 25, 2019	July 2, 2019	
0.67.x	76	July 23, 2019	August 1, 2019	
0.68.x	76	August 13, 2019	August 21, 2019	
0.69.x	77	September 4, 2019	October 1, 2019	
0.70.x	78	October 15, 2019	October 22, 2019	
0.71.x	78	November 5, 2019	November 12, 2019	
0.72.x	79	December 3, 2019	December 10, 2019	
</pre>

<h2>Debian 9</h2>

<pre>
Tue Sep 17 15:01:14 MDT 2019
brave-browser --version
Brave Browser 77.0.68.138 

So this release
0.69.x	77	September 4, 2019	October 1, 2019	
0.69.x 77 version is not working
</pre>

<h2>arcolinuxb-mate-0qw5q</h2>

<pre>
Tue Sep 17 15:01:14 MDT 2019
arcolinuxb-mate-0qw5q is working
brave --version
Brave Browser 76.0.68.132 unknown

So this release
0.68.x	76	August 13, 2019	August 21, 2019	
</pre>


<h4>
  <a href="https://support.brave.com/hc/en-us/articles/360018666072-How-do-I-install-Brave-on-Linux-using-the-terminal-" target="_blank">support.brave.com/</a>
  How do I install Brave on Linux using the terminal? 
</h4>

<h5>Debian 9, Ubuntu 14.04 and Mint 17</h5>

<pre>
If you get gnutls_handshake() errors after adding the Brave repository on Debian 9, you may need to uninstall old conflicting packages.
sudo apt install apt-transport-https
curl -s https://brave-browser-apt-release.s3.brave.com/brave-core.asc | sudo apt-key --keyring /etc/apt/trusted.gpg.d/brave-browser-release.gpg add -
echo "deb [arch=amd64] https://brave-browser-apt-release.s3.brave.com/ trusty main" | sudo tee /etc/apt/sources.list.d/brave-browser-release-trusty.list
sudo apt update
sudo apt install brave-browser
</pre>

<h4>
  <a href="https://community.brave.com/t/brave-browser-wont-open-on-debian-64bit/38203/7" target="_blank">community.brave.com/</a>
  Brave browser won’t open on debian 64bit
</h4>

Update, Can confirm that the workaround does the trick. Use:

<pre>
sudo sysctl kernel.unprivileged_userns_clone=1 
echo kernel.unprivileged_userns_clone = 1 | sudo tee /etc/sysctl.d/00-local-userns.conf
</pre>

To set user sandboxes. This should allow you to launch the app via shortcut.
Solution

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
