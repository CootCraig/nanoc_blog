---
title: "Keyboard Config in Xorg"
created_at: Sun Dec 28 14:09:43 MST 2014
kind: article
tags:
  - xorg
  - keyboard
---

## Research

* [archlinux - Keyboard configuration in Xorg](https://wiki.archlinux.org/index.php/Keyboard_configuration_in_Xorg)

### Using setxkbmap

setxkbmap sets the keyboard layout for the current X session only,
but can be made persistent in ~/.xinitrc. This overrides system-wide
configuration specified by X configuration files.

