---
title: "Arch Network Configuration"
created_at: Fri Dec  6 09:47:17 MST 2019
kind: article
tags:
  - arch_linux
  - arch_network_configuration
  - network_configuration
  - linux
---

<h2>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">wiki.archlinux.org</a>
  Network configuration
</h2>
Medium-specifics are handled in the 
<a href="https://wiki.archlinux.org/index.php/Network_configuration/Ethernet" target="_blank">/Ethernet</a>
and 
<a href="https://wiki.archlinux.org/index.php/Network_configuration/Wireless" target="_blank">/Wireless subpages</a>.

<h3>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration/Ethernet" target="_blank">wiki.archlinux.org</a>
  Network configuration/Ethernet
</h3>
This article describes Ethernet specifics, general network configuration is covered in 
<a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">Network configuration</a>.

<h3>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration/Wireless" target="_blank">wiki.archlinux.org</a>
  Network configuration/Wireless
</h3>
The main article on network configuration is 
<a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">Network configuration</a>.

<h2>
  <a href="https://wiki.archlinux.org/index.php/Netctl" target="_blank">wiki.archlinux.org</a>
  netctl
</h2>

<h2>broadcom-wl for Toshiba Satellite</h2>

<h4>
  <a href="https://wiki.archlinux.org/index.php/broadcom_wireless#broadcom-wl" target="_blank">wiki.archlinux.org/</a>
  broadcom_wireless broadcom-wl
</h4>

There are two variants of the restrictively licensed driver:

the regular variant: <a href="https://www.archlinux.org/packages/?name=broadcom-wl" target="_blank">broadcom-wl</a>

the DKMS variant: <a href="https://www.archlinux.org/packages/?name=broadcom-wl-dkms" target="_blank">broadcom-wl-dkms</a>

Tip: The DKMS variant broadcom-wl-dkms

<ul>
  <li>is kernel agnostic. This means it supports different kernels you may use (e.g. linux-ckAUR).</li>
  <li>is kernel-release agnostic, too. It will be automatically rebuilt after every kernel upgrade or fresh installation. If you use broadcom-wl or another kernel release dependant variant (e.g. broadcom-wl-ckAUR), it may happen that kernel upgrades break wireless from time to time until the packages are in sync again.</li>
  <li>will need the linux-headers package for the installed kernel(s) in order to build the module. Those packages are optional to the DKMS package and will need to be installed manually.</li>
<ul>

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
