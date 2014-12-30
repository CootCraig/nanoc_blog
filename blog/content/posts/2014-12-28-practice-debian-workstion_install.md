---
title: "Practice Debian Workstation Install"
created_at: Sun Dec 28 21:44:08 MST 2014
kind: article
tags:
  - debian
  - debian_install
  - dotfiles
---


## Sun Dec 28 21:48:19 MST 2014

Start with base install

~~~~~~~~~~~~~~
apt-get install git sudo tmux vim zsh
adduser craig sudo

cd /etc/apt
cp sources.list sources.list.1
Add contrib,non-free to sources.list
apt-get update
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
apt-get install i3 lightdm thunar iceweasel icedove
apt-get install rxvt-unicode stow vim-gtk
~~~~~~~~~~~~~~

Running as virtualbox guest, os install guest additions

Save as mydeb_20141228_2214/

### Try dotfiles with vim

on ivie

~~~~~~~~~~~~~~
cd ~/dotfiles
bin/dfm import .gitconfig
bin/dfm import .vimrc
dfm import .vimfiles/
~~~~~~~~~~~~~~

on mydeb

~~~~~~~~~~~~~~
cd
git clone git@github.com:CootCraig/dotfiles.git
cd ~/dotfiles
bin/dfm install
in vim. :BundleInstall
~~~~~~~~~~~~~~


### questions

* what about custom compile of st
* git clone for vundle and manual :BundleInstall

