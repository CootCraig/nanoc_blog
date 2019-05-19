---
title: "Pinebook bionic lxde April 2019"
created_at: Tue Apr 30 18:22:14 MDT 2019
kind: article
tags:
  - pinebook
  - linux
  - ubuntu
  - ubuntu_bionic
---

<h3>
  <a href="https://github.com/ayufan-pine64/linux-build/releases" target="_blank">github.com/ayufan-pine64</a>
  linux-build/releases
</h3>

<pre>
Tue Apr 30 18:23:40 MDT 2019

Latest Release:
0.7.28: jenkins-linux-build-pine-a64-136
0.7.28-136
bionic-lxde-pinebook-bspkernel-0.7.28-136.img.xz

https://github.com/ayufan-pine64/linux-build/releases/download/0.7.28/bionic-lxde-pinebook-bspkernel-0.7.28-136.img.xz
</pre>

<h4>
  <a href="https://wiki.ubuntu.com/Releases" target="_blank">wiki.ubuntu.com</a>
  Ubuntu Releases
</h4>

<pre>
Version Ubuntu 18.04.2 LTS
Code name Bionic Beaver
Release February 15, 2019
End of Standard Support April 2023
End of Life April 2028 
</pre>

<h1>Log</h1>

<pre>
bionic-lxde-pinebook-bspkernel-0.7.28-136.img.xz
/etc/netplan/30-wifi-home.yaml
install synaptic
</pre>

<h1>Netplan</h1>

<h5>/etc/netplan/30-wifi-home.yaml</h5>

<pre>
network:
  version: 2
  renderer: NetworkManager
  wifis:
    wlan0:
      dhcp4: yes
      dhcp6: no
      access-points:
        "wifi-name":
          password: "wifi-password"
</pre>

<pre>
netplan generate: Use /etc/netplan to generate the required configuration for the renderers.
netplan apply: Apply all configuration for the renderers, restarting them as necessary.
</pre>

apt install synaptic

<h3>
  <a href="https://netplan.io/examples" target="_blank">https://netplan.io</a>
  Netplan configuration examples
</h3>

<h3>
  <a href="https://www.linux.com/learn/intro-to-linux/2018/9/how-use-netplan-network-configuration-tool-linux" target="_blank">www.linux.com</a>
  How to Use the Netplan Network Configuration Tool on Linux
</h3>

<h3>
  <a href="https://help.ubuntu.com/community/WifiDocs/Scan_for_Wireless_Network" target="_blank">help.ubuntu.com</a>
  Scan for wifi Network
</h3>

<h3>
  <a href="https://www.configserverfirewall.com/ubuntu-linux/ubuntu-list-network-interfaces/" target="_blank">www.configserverfirewall.com</a>
  How to List Network Interfaces in Ubuntu Linux
</h3>

<h3>
  <a href="https://help.ubuntu.com/lts/ubuntu-help/index.html" target="_blank">help.ubuntu.com</a>
  Ubuntu Desktop Guide
</h3>

<h4>
  <a href="https://help.ubuntu.com/lts/ubuntu-help/net.html.en" target="_blank">help.ubuntu.com</a>
  Networking, web & email
</h4>

<h3>
  <a href="https://www.configserverfirewall.com/ubuntu-linux/install-desktop-on-ubuntu-server/#install-LXDE-desktop-on-ubuntu" target="_blank">configserverfirewall.com</a>
  Install LXDE Desktop on Ubuntu
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

