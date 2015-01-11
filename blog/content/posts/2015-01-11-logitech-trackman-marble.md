---
title: "Logitech Trackman Marble"
created_at: Sun Jan 11 10:56:53 MST 2015
kind: article
tags:
  - trackball
  - trackman
---

~~~~~~~~~~~~~
ID     	Hardware Action     	Result                
1 	Large button left 	normal click
2 	Both large buttons 	middle-click  †
3 	Large button right 	right-click
4 	(not a button) 	-
5 	(not a button) 	-
6 	(not a button) 	-
7 	(not a button) 	-
8 	Small button left 	browser back
9 	Small button right 	browser forward 

Both large buttons pressed simultaneously creates a middle-click.
The simultaneous click is enabled by a configuration directive. It requires Emulate3buttons. 
~~~~~~~~~~~~~

~~~~~~~~~~~~~
Alternative: apply settings via xinput
xinput set-button-map "Logitech USB Trackball" 1 2 3 4 5 6 7 8 9
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation Button" 8 8
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation" 8 1
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation Axes" 8 6 7 4 5
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation X Axis" 8 6
xinput set-int-prop "Logitech USB Trackball" "Evdev Drag Lock Buttons" 8 9

  You can check what you have made via:
xinput list-props "Logitech USB Trackball"
~~~~~~~~~~~~~


# Research


* [Lennart's weblog - Logitech Trackman Marble emulating scroll wheel](http://blog.karssen.org/2010/09/11/linux-the-logitech-trackman-marble-and-emulating-a-scroll-wheel/)
* [superuser - Configure a trackball under Linux](http://superuser.com/questions/374504/configure-a-trackball-under-linux-without-editing-xorg-conf)
* [ubuntu community - Logitech_Marblemouse_USB](https://help.ubuntu.com/community/Logitech_Marblemouse_USB)
* [archlinux - Logitech Marble Mouse](https://wiki.archlinux.org/index.php/Logitech_Marble_Mouse)
* [ubuntu questions - How to configure Logitech Marble trackball](http://askubuntu.com/questions/66253/how-to-configure-logitech-marble-trackball)
* [RobMerrman - XInput: Scroll-Wheel Emulation on a 4-button Marble Mouse](http://www.robmeerman.co.uk/unix/xinput)

