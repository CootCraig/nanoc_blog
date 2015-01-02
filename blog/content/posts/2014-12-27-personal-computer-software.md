---
title: "Personal Computer Software Coices"
created_at: Sat Dec 27 07:00:03 MST 2014
kind: article
tags:
  - software_choices
  - workstation_install
---

## Install Notes

### Debian Testing network install image

* no desktop
* select ssh server
* select print server

### Continue

~~~~~~~~~~~~~~~~~~~~~~~
sudo and vim
apt-get install vim sudo
adduser craig sudo
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~
Add contrib,non-free to /etc/apt/sources.list
apt-get update
apt-get dist-upgrade
~~~~~~~~~~~~

~~~~~~~~~~~~
Add needed firmware
apt-get autoclean
apt-get autoremove

For video support and other:
apt-get install firmware-linux-nonfree

For common wireless:
apt-get install firmware-iwlwifi
~~~~~~~~~~~~

## Software choices

* lightdm
* i3
* git gitk
* build-essential checkinstall libtool automake uuid-dev
* xorg-dev
* suckless st - terminal emulater - needs build
* thunar iceweasel icedove gedit
* vim-gtk
* alsa-utils alsamixergui
* pulseaudio
* weechat moc
* wicd wicd-curses wicd-gtk
* gparted gnome-disk-utility
* audacity
* dkms
* libreoffice
* abiword
* lyx
* ruby
* java
* python-setuptools
* supervisord
* cifs-utils winbind
* passworddragon
* remmina
* reptyr
* noice is a small ncurses-based file browser - suckless rocks
* shutter screen capture

## Other possibilities

### file managers

* noice is a small ncurses-based file browser - suckless rocks
* ranger
* thunar

### irc

* weechat

### music / audio

* audacity
* DeaDBeef
* music on console

### screen capture

* scrot
* shutter

### terminal emulators

* rxvt-unicode
* st
* terminator

### terminal multiplexers

* screen
* tmux

### text based browsers

* ELinks - Full-Featured Text WWW Browser
* Lynx is a text browser for the World Wide Web
* w3m is a text-based web browser

## Research

