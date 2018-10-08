---
title: "Virtual Arch Linux "
created_at: Thu Sep 27 17:48:00 MDT 2018
kind: article
tags:
  - arch_linux
  - virtual_arch_linux
  - linux
---

<ul>
  <li><a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">wiki Installation Guide</a></li>
  <li><a href="https://wiki.archlinux.org/index.php/General_recommendations" target="_blank">wiki General Recommendations</a></li>
  <li><a href="https://bbs.archlinux.org/index.php" target="_blank">bbs.archlinux.org</a></li>
</ul>

use editpad.org for copy and paste.

<a href="https://debian-handbook.info/browse/stable/" target="_blank">Stable/Debian 8 Debian Administrator's Handbook</a>
should be a good reference.

<h4>
  <a href="http://mirrors.advancedhosters.com/archlinux/iso/2018.09.01/archlinux-2018.09.01-x86_64.iso" target="_blank">Live Iso Image 2018.09.01</a>
</h4>

wget http://mirrors.advancedhosters.com/archlinux/iso/2018.09.01/archlinux-2018.09.01-x86_64.iso

<h4>
  <a href="http://mirrors.advancedhosters.com/archlinux/iso/2018.09.01/sha1sums.txt" target="_blank">sha1sums 2018.09.01</a>
</h4>

<pre>
sha1sum archlinux-2018.09.01-x86_64.iso   local
1649fa7e68a2c5dcc4e48b36ecbb8e318272e746  archlinux-2018.09.01-x86_64.iso
1649fa7e68a2c5dcc4e48b36ecbb8e318272e746  archlinux-2018.09.01-x86_64.iso
1649fa7e68a2c5dcc4e48b36ecbb8e318272e746  from archlinux.org

3fdf522378468b19ca42b14caae165fb607a315d  archlinux-bootstrap-2018.09.01-x86_64.tar.gz
</pre>

<h4>Generate unique private host id hash</h4>

<a href="https://codepen.io/ivanakimov/pen/bNmExm" target="_blank">Based on this codepen - ivanakimov</a>

See
<a href="/posts/2015/04/generate-private-hostnames/" target="_blank">local - Generate Private Host Names</a>

<pre>
https://codepen.io/ivanakimov/pen/bNmExm

var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(5);
var numbers = hashids.decode(id);

$("#input").text("["+numbers.join(", ")+"]");
$("#output").text(id);

5 => 1q8o7 - arch-vm-1q8o7 - 20180927
</pre>

<h3>Update VirtualBox</h3>

<h4>Host OS</h4>

<pre>
lsb_release -a

LSB Version:	core-2.0-amd64:core-2.0-noarch:core-3.0-amd64:core-3.0-noarch:core-3.1-amd64:core-3.1-noarch:core-3.2-amd64:core-3.2-noarch:core-4.0-amd64:core-4.0-noarch:core-4.1-amd64:core-4.1-noarch:cxx-3.0-amd64:cxx-3.0-noarch:cxx-3.1-amd64:cxx-3.1-noarch:cxx-3.2-amd64:cxx-3.2-noarch:cxx-4.0-amd64:cxx-4.0-noarch:cxx-4.1-amd64:cxx-4.1-noarch:desktop-3.1-amd64:desktop-3.1-noarch:desktop-3.2-amd64:desktop-3.2-noarch:desktop-4.0-amd64:desktop-4.0-noarch:desktop-4.1-amd64:desktop-4.1-noarch:graphics-2.0-amd64:graphics-2.0-noarch:graphics-3.0-amd64:graphics-3.0-noarch:graphics-3.1-amd64:graphics-3.1-noarch:graphics-3.2-amd64:graphics-3.2-noarch:graphics-4.0-amd64:graphics-4.0-noarch:graphics-4.1-amd64:graphics-4.1-noarch:languages-3.2-amd64:languages-3.2-noarch:languages-4.0-amd64:languages-4.0-noarch:languages-4.1-amd64:languages-4.1-noarch:multimedia-3.2-amd64:multimedia-3.2-noarch:multimedia-4.0-amd64:multimedia-4.0-noarch:multimedia-4.1-amd64:multimedia-4.1-noarch:printing-3.2-amd64:printing-3.2-noarch:printing-4.0-amd64:printing-4.0-noarch:printing-4.1-amd64:printing-4.1-noarch:qt4-3.1-amd64:qt4-3.1-noarch:security-4.0-amd64:security-4.0-noarch:security-4.1-amd64:security-4.1-noarch

Distributor ID:	Debian
Description:	Debian GNU/Linux 8.11 (jessie)
Release:	8.11
Codename:	jessie
</pre>

<h4>
  <a href="https://download.virtualbox.org/virtualbox/5.2.18/virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb" target="_blank">download.virtualbox.org</a>
  VirtualBox 5.2.18 for Linux - Debian 8
</h4>

wget https://download.virtualbox.org/virtualbox/5.2.18/virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb

<pre>
SHA256SUMS

sha256sum virtualbox-5.2_5.2.18-124319\~Debian\~jessie_amd64.deb 
3ad2f7f2bc11b791334902c72d4467b59c17cbe7e3bf0b1d14c8999594b6c2b9  virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb - downloaded file
3ad2f7f2bc11b791334902c72d4467b59c17cbe7e3bf0b1d14c8999594b6c2b9 virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb - virtualbox.org
</pre>

<h4>
  <a href="https://www.commandlinux.com/man-page/man1/gdebi.1.html" target="_blank">commandlinux.com/man-page</a>
  Install with gdebi
</h4>

<pre>
Thu Sep 27 19:01:11 MDT 2018

apt-get purge virtualbox-5.1
gdebi virtualbox-5.2_5.2.18-124319~Debian~jessie_amd64.deb 
</pre>

<h3>
  <a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">wiki.archlinux.org/index</a>
  Installation Guide
</h3>

<h3>Settings for VirtualBox</h3>

<pre>
VM name: arch-vm-1q8o7
2048MB base memory
network: bridged adapter
16MB video memory
  video frame size: 1024x768
SATA HD
  file: /home/craig/VirtualBox VMs/arch-vm-1q8o7/arch-vm-1q8o7.vdi
  dynamic sized: 8GB
optical drive attached to iso image: /home/craig/Downloads/archlinux-2018.09.01-x86_64.iso
</pre>

<h4>First VirtualBox snapshot</h4>

<pre>
name: arch-vm-1q8o7 boot from live DVD
description: Live DVD running. HD not formatted.
</pre>

<h3>Show network interface</h3>

<h4>
  <a href="https://www.cyberciti.biz/faq/linux-list-network-interfaces-names-command/" target="_blank">cyberciti.biz/faq/</a>
  Linux: Show / Display Available Network Interfaces
</h4>

ifconfig -a

<h3>partition HD</h3>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Partitioning" target="_blank">wiki.archlinux.org/index</a>
  Partitioning
</h4>


<pre>
timedatectl set-ntp true
lsblk
  sda

gdisk /dev/sda
1 2048 4095 1024KiB BIOS boot partiion
2 4096 8GiB Linux filesystem
</pre>

<h3>format HD</h3>

mkfs.ext4 /dev/sda2

<h3>Install base package group</h3>

<pre>
mount /dev/sda2 /mnt
pacstrap /mnt base
</pre>

<h3>Configure the system</h3>

<pre>
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
pacman -S vim
ln -sf /usr/share/zoneinfo/US/Mountain /etc/localtime
hwclock --systohc
vim etc/locale.gen
  uncomment en_US.UTF-8 in /etc/locale.gen
locale-gen
Set the LANG variable in locale.conf(5)
/etc/locale.conf
  LANG=en_US.UTF-8
create /etc/hostname
  arch-vm-1q8o7
... use exit to leave chroot and shutdown. continue later

/etc/hosts
  127.0.0.1	localhost
  ::1		localhost
  127.0.1.1	arch-vm-1q8o7.local
passwd - set root password
pacman -S grub
grub-install --target=i386-pc /dev/sda
grub-mkconfig -o /boot/grub/grub.cfg
</pre>

<h4>Snapshot</h4>

<pre>
name: arch-vm-1q8o7 HD configured. boot installed
</pre>

<h2>
  <a href="https://wiki.archlinux.org/index.php/General_recommendations" target="_blank">wiki.archlinux.org/index</a>
  General recommendations
</h2>

This document is an annotated index of popular articles and important
information for improving and adding functionalities to the installed
Arch system.

<h3>User craig with sudo zsh shell</h3>

<h4>
  <a href="https://www.tecmint.com/add-users-in-linux/" target="_blank">tecmint.com/add-users</a>
  The Complete Guide to “useradd” Command in Linux – 15 Practical Examples
</h4>

<pre>
cat /etc/passwd |grep craig

craig:x:1000:1000:Craig Anderson,,,:/home/craig:/bin/zsh

id craig - on ivie host

uid=1000(craig) 
gid=1000(craig) 
groups=1000(craig),
  3(sys),4(adm),
  20(dialout),
  27(sudo),
  37(operator),
  46(plugdev),
  50(staff),
  110(lpadmin)
</pre>

<pre>
useradd -u 1000 -g 1000 craig
useradd -G admins,developers craig
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
