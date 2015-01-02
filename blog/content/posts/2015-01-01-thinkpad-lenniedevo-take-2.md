---
title: "Thinkpad T500 - lenniedevo - take 2"
created_at: Thu Jan  1 18:59:41 MST 2015
kind: article
tags:
  - lenniedevo
  - debian
  - linux
  - laptop
---

# First stage with Debian Jessie netinst CD

* eth0 Intel Corporation 82567LM Gigabit Network Connection
* wwan0: Unknown interface

## Hostname: lenniedevo

## Domain name: coot.local


~~~~~~~~~~~~~~~~~~~~~~~
Software selection
[*] print server
[*] SSH server
[*] standard system utilities
~~~~~~~~~~~~~~~~~~~~~~~

## Get video and wireless firmware

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

## X.org/i3

~~~~~~~~~~~~~~~~~~~~~~~
i3 autobuild dev package
echo 'deb http://build.i3wm.org/debian/sid sid main' > /etc/apt/sources.list.d/i3-autobuild.list
apt-get update
apt-get --allow-unauthenticated install i3-autobuild-keyring
apt-get update
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
X environment
apt-get install i3 lightdm
~~~~~~~~~~~~~~~~~~~~~~~

## vim tmux git sudo

~~~~~~~~~~~~~~~~~~~~~~~
vim tmux git sudo
apt-get install vim-gtk tmux git gitk sudo
adduser craig sudo
~~~~~~~~~~~~~~~~~~~~~~~

## dotfiles and zsh

~~~~~~~~~~~~~~~~~~~~~~~
apt-get install zsh
chsh -s /usr/bin/zsh
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
ssh-keygen
Add public key at github
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
clone dotfiles
cd ~
git clone git@github.com:CootCraig/dotfiles.git
cd dotfiles
git checkout craig
git submodule update --init
bin/dfm install
cd
vim - then :BundleInstall
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
apt-get install rxvt-unicode-256color terminator
~~~~~~~~~~~~~~~~~~~~~~~

## st - Suckless simple terminal

~~~~~~~~~~~~~~~~~~~~~~~
Get needed packages
apt-get install build-essential checkinstall libtool automake uuid-dev
apt-get install xorg-dev
apt-get install fonts-inconsolata
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
Compile and install st
mkdir /opt/suckless
chmod 777 /opt/suckless
cd /opt/suckless
git clone git@github.com:CootCraig/st.git
cd st
git checkout craig
checkconfig make install
~~~~~~~~~~~~~~~~~~~~~~~

## wicd wireless

~~~~~~~~~~~~~~~~~~~~~~~
wicd wireless
apt-get install wicd wicd-curses wicd-gtk
adduser yourusername netdev
~~~~~~~~~~~~~~~~~~~~~~~

## thunar and other gui programs

~~~~~~~~~~~~~~~~~~~~~~~
thunar and other gui programs
apt-get install thunar iceweasel icedove gedit
apt-get install scrot shutter libnet-dbus-glib-perl
~~~~~~~~~~~~~~~~~~~~~~~

## office and drawing programs

~~~~~~~~~~~~~~~~~~~~~~~
office programs
apt-get install libreoffice abiword lyx
apt-get install inkscape
apt-get install xfig
apt-get install gimp
~~~~~~~~~~~~~~~~~~~~~~~

## Audio, music player

~~~~~~~~~~~~~~~~~~~~~~~
Audio, music player
apt-get install moc alsa-utils moc-ffmpeg-plugin
~~~~~~~~~~~~~~~~~~~~~~~

## passworddragon

## Windows network tools

~~~~~~~~~~~~~~~~~~~~~~~
Windows network tools
apt-get install remmina cifs-utils winbind pptp-linux 
~~~~~~~~~~~~~~~~~~~~~~~

## secret dotfiles

~~~~~~~~~~~~~~~~~~~~~~~
secret dotfiles
.remmina/
.icedove/
~~~~~~~~~~~~~~~~~~~~~~~

## ruby rbenv for craig

~~~~~~~~~~~~~~~~~~~~~~~
ruby rbenv for craig
apt-get install autoconf bison build-essential libssl-dev libyaml-dev libreadline6-dev zlib1g-dev libncurses5-dev libffi-dev libgdbm3 libgdbm-dev
  ... After install rbenv and ruby-build
rbenv install 2.2.0
rbenv global 2.2.0
~~~~~~~~~~~~~~~~~~~~~~~

## Sound setup

alsamixer and mocp work fine.

### ncurses alsamixer is the way to go

<img src="/assets/images/alsamixer_lenniedevo.png" width="500px" />

#### select channels p n or left/right arrows

#### m mute/unmute selected channel

#### volume on selected channel + - or up/down arrows

