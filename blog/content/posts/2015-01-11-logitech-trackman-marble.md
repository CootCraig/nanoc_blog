---
title: "Logitech Trackman Marble"
created_at: Sun Jan 11 10:56:53 MST 2015
kind: article
tags:
  - trackball
  - trackman
---

# Log

### [Marble mouse basic function from archlinux](https://wiki.archlinux.org/index.php/Logitech_Marble_Mouse)

<img src="/assets/images/basic-function-logitech-marble-mouse.png">
          
### Where to put xinput set script

Note that lightdm is already running an xrandr script.
We can add our Logitech Trackman Marble setup in the same place.

~~~~~~~~~~~~~
/etc/lightdm/lightdm.conf
 ...
session-setup-script=/usr/local/share/lightdm/ivie2.sh
 ...
~~~~~~~~~~~~~

~~~~~~~~~~~~~
/usr/local/share/lightdm/ivie2.sh
xrandr --output HDMI3 ...
 ... Here.
~~~~~~~~~~~~~

### And the xinput commands

* Scroll-click is right small button
* Scroll emulation is left small button

~~~~~~~~~~~~~
xinput commands
xinput --set-button-map "Logitech USB Trackball" 1 9 3 4 5 6 7 8 2
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation" 8 1 
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation Button" 8 8
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation Axes" 8 6 7 4 5 
~~~~~~~~~~~~~

# Notes

### [Sasha Shepherd - askubuntu - trackman script](http://askubuntu.com/questions/66253/how-to-configure-logitech-marble-trackball)

~~~~~~~~~~~~~
Sasha Shepherd - askubuntu - trackman script
xinput set-button-map "Logitech USB Trackball" 1 2 3 4 5 6 7 8 9 
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation Button" 8 8 
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation" 8 1 
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation Axes" 8 6 7 4 5 
xinput set-int-prop "Logitech USB Trackball" "Evdev Wheel Emulation X Axis" 8 6 
xinput set-int-prop "Logitech USB Trackball" "Evdev Drag Lock Buttons" 8 9
~~~~~~~~~~~~~

~~~~~~~~~~~~~
xinput list
⎡ Virtual core pointer                    	id=2	[master pointer  (3)]
⎜   ↳ Virtual core XTEST pointer              	id=4	[slave  pointer  (2)]
⎜   ↳ Logitech USB Trackball                  	id=11	[slave  pointer  (2)]
~~~~~~~~~~~~~

~~~~~~~~~~~~~
xinput query-state 'Logitech USB Trackball'
2 classes :
ButtonClass
	button[1]=up
	button[2]=up
	button[3]=up
	button[4]=up
	button[5]=up
	button[6]=up
	button[7]=up
	button[8]=up
	button[9]=up
ValuatorClass Mode=Relative Proximity=In
	valuator[0]=1548
	valuator[1]=688
~~~~~~~~~~~~~

~~~~~~~~~~~~~
xinput list-props 'Logitech USB Trackball'
Device 'Logitech USB Trackball':
	Device Enabled (129):	1
	Coordinate Transformation Matrix (131):	1.000000, 0.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000, 0.000000, 1.000000
	Device Accel Profile (253):	0
	Device Accel Constant Deceleration (254):	1.000000
	Device Accel Adaptive Deceleration (255):	1.000000
	Device Accel Velocity Scaling (256):	10.000000
	Device Product ID (247):	1133, 50184
	Device Node (248):	"/dev/input/event15"
	Evdev Axis Inversion (257):	0, 0
	Evdev Axes Swap (259):	0
	Axis Labels (260):	"Rel X" (139), "Rel Y" (140)
	Button Labels (261):	"Button Left" (132), "Button Middle" (133), "Button Right" (134), "Button Wheel Up" (135), "Button Wheel Down" (136), "Button Horiz Wheel Left" (137), "Button Horiz Wheel Right" (138), "Button Side" (251), "Button Extra" (252)
	Evdev Scrolling Distance (262):	0, 0, 0
	Evdev Middle Button Emulation (263):	0
	Evdev Middle Button Timeout (264):	50
	Evdev Third Button Emulation (265):	0
	Evdev Third Button Emulation Timeout (266):	1000
	Evdev Third Button Emulation Button (267):	3
	Evdev Third Button Emulation Threshold (268):	20
	Evdev Wheel Emulation (269):	0
	Evdev Wheel Emulation Axes (270):	0, 0, 4, 5
	Evdev Wheel Emulation Inertia (271):	10
	Evdev Wheel Emulation Timeout (272):	200
	Evdev Wheel Emulation Button (273):	4
	Evdev Drag Lock Buttons (274):	0
~~~~~~~~~~~~~


~~~~~~~~~~~~~
Logitech Marble has 4 buttons. xmodmap has 1-9 positions, 1-8 functional
! Logitech USB Marble Mouse Physical buttons available: 
!  Mouse Big:   1 3
!  Mouse Small: 8 9
! Xmodmap positional meanings:
!  Pointer: Left-click, Middle-click, Right-click, Scroll-up, Scroll-down, Scroll-left, Scroll-right, Scroll-click, 9
pointer = 1 9 3 4 5 6 7 8 2
~~~~~~~~~~~~~

~~~~~~~~~~~~~
ID     	Hardware Action     	Result                
1 	Large button left 	normal click
2 	Both large buttons 	middle-click  
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

## [ubuntu community - Logitech_Marblemouse_USB](https://help.ubuntu.com/community/Logitech_Marblemouse_USB)

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

## [x.org - evdev - Generic Linux input driver](http://www.x.org/archive/X11R7.5/doc/man/man4/evdev.4.html)


# x tools

* Package: xinput (1.6.1-1) 
* Package: xautomation (1.09-1) 
* Package: xbindkeys (1.8.6-1) 

# Research


* [Lennart's weblog - Logitech Trackman Marble emulating scroll wheel](http://blog.karssen.org/2010/09/11/linux-the-logitech-trackman-marble-and-emulating-a-scroll-wheel/)
* [superuser - Configure a trackball under Linux](http://superuser.com/questions/374504/configure-a-trackball-under-linux-without-editing-xorg-conf)
* [ubuntu community - Logitech_Marblemouse_USB](https://help.ubuntu.com/community/Logitech_Marblemouse_USB)
* [archlinux - Logitech Marble Mouse](https://wiki.archlinux.org/index.php/Logitech_Marble_Mouse)
* [ubuntu questions - How to configure Logitech Marble trackball](http://askubuntu.com/questions/66253/how-to-configure-logitech-marble-trackball)
* [RobMerrman - XInput: Scroll-Wheel Emulation on a 4-button Marble Mouse](http://www.robmeerman.co.uk/unix/xinput)
* [stackexchange - control the mouse wheel resolution in Debian?](http://unix.stackexchange.com/questions/30401/is-there-a-way-to-control-the-mouse-wheel-resolution-in-debian)



