---
title: "My Thinkpad T500 - Debian - lenniedevo"
created_at: Tue Dec 23 22:10:40 MST 2014
kind: article
tags:
  - lenniedevo
  - debian
  - linux
  - laptop
---

## Common commands

alsamixergui
gvim
iceweasel
mocp
thunar
weechat
wicd-gtk

## Second Install on SSD

Used Debian Jessie netinst CD

Use wired ethernet.
Wireless firmware will be installed later.

At install menu

* print server
* ssh server

hostname: lenniedevo

~~~~~~~~~~~~~~~~~~~~~~~
Add contrib,non-free to /etc/apt/sources.list
apt-get update
apt-get dist-upgrade

reboot

apt-get autoclean
apt-get autoremove
apt-get install firmware-linux-nonfree

reboot
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
apt-get install firmware-iwlwifi
reboot
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
install sudo and friends
apt-get install vim tmux git sudo
adduser craig sudo
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
apt-git install lightdm
apt-get install i3 
apt-get install weechat moc
apt-get install alsamixergui
apt-get install vim-gtk
apt-get install thunar iceweasel icedove gedit
apt-get install alsa-utils
apt-get install rxvt-unicode-256color terminator
apt-get install gparted gnome-disk-utility
apt-get install wicd wicd-curses wicd-gtk
adduser yourusername netdev
~~~~~~~~~~~~~~~~~~~~~~~

## Research

### Wireless

#### [wicd at launchpad](https://launchpad.net/wicd)

A network connection manager that aims to simplify wired and wireless
networking in Linux.

Development for Wicd happens on #wicd on Freenode

#### [Debian - How to use a WiFi interface](https://wiki.debian.org/WiFi/HowToUse)

* [Wicd](https://wiki.debian.org/WiFi/HowToUse#Wicd)

wicd (Wireless Interface Connection Daemon) is a lightweight alternative
to NetworkManager. It is environment-independent, making it suitable for
all desktop environments, including GNOME, Xfce, LXDE, and Fluxbox. Like
NetworkManager, wicd is configured via a graphical interface.

### i3 and xfce

#### [xfce.org - Xfce 4.10 tour](http://www.xfce.org/about/tour)

#### [crunchbang - Index » WM/DE Talk » Xfce 4.10 is great !](http://crunchbang.org/forums/viewtopic.php?id=19939)

#### [gotbletu on youtube - XFCE Tiling - Aero Snap Style - Linux XFCE](https://www.youtube.com/watch?v=19X0gng_-qk)

#### [Manjaro Linux Forum » Technical Issues and Assistance » Tutorials » I3 tiling window manager with XFCE](https://forum.manjaro.org/index.php?topic=6831.0)

