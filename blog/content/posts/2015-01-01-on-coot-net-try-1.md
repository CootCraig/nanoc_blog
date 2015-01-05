---
title: "on.coot.net Try 1"
created_at: Thu Jan  1 17:07:06 MST 2015
kind: article
tags:
  - vultr.com
  - vps
  - cloud-host
  - x2go
  - remote-desktop
  - remote-x
---

## Base install

Hostname for try 1 is on.coot.local,
running as virtualbox guest on ivie.

~~~~~~~~~~
on.coot.local virtualbox guest
1024 Mb RAM
15 Gb HD
debian-jessie-DI-b2-amd64-netinst.iso
~~~~~~~~~~

~~~~~~~~~~
Software selection
[*] SSH server
[*] Standard system utilities
~~~~~~~~~~

## configure apt for x2go 

~~~~~~~~~~~~
Get the repository archive key
apt-key adv --recv-keys --keyserver keys.gnupg.net E1F958385BFE2B6E
~~~~~~~~~~~~

~~~~~~~~~~~~
editor /etc/apt/sources.list.d/x2go.list
 --- X2Go Repository (release builds)
deb http://packages.x2go.org/debian wheezy main
 --- X2Go Repository (sources of release builds)
deb-src http://packages.x2go.org/debian wheezy main

 --- X2Go Repository (nightly builds)
 --- #deb http://packages.x2go.org/debian wheezy heuler
 --- X2Go Repository (sources of nightly builds)
 --- #deb-src http://packages.x2go.org/debian wheezy heuler
~~~~~~~~~~~~

~~~~~~~~~~~~
apt update and install
apt-get update
apt-get install x2go-keyring && apt-get update
 --- Now you can search for X2Go related package that are now available for your APT system:
 --- apt-cache search x2go
~~~~~~~~~~~~

## configure apt for i3 autobuild package

~~~~~~~~~~~~~~~~~~~~~~~
i3 autobuild dev package
echo 'deb http://build.i3wm.org/debian/sid sid main' > /etc/apt/sources.list.d/i3-autobuild.list
apt-get update
apt-get --allow-unauthenticated install i3-autobuild-keyring
apt-get update
~~~~~~~~~~~~~~~~~~~~~~~

## Have a go at install

~~~~~~~~~~~~~~~~~~~~~~~
apt-get install x2goserver x2goserver-xsession rxvt-unicode-256color terminator vim-gtk tmux weechat thunar iceweasel git gitk
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
Recommended packages:
  xterm x-terminal-emulator
The following NEW packages will be installed:
  adwaita-icon-theme aspell aspell-en at-spi2-core colord
  colord-data cpp cpp-4.9 dbus-x11 dconf-gsettings-backend
  dconf-service desktop-file-utils dosfstools exo-utils fonts-dejavu
  fonts-dejavu-extra fonts-vlgothic fuse gconf-service gconf2
  gconf2-common gdisk gir1.2-glib-2.0 git git-man gitk glib-networking
  glib-networking-common glib-networking-services gnome-mime-data
  gsettings-desktop-schemas gstreamer1.0-plugins-base gvfs gvfs-common
  gvfs-daemons gvfs-libs hunspell-en-us iceweasel libaacs0 libart-2.0-2
  libasound2 libasound2-data libaspell15 libatasmart4 libatk-bridge2.0-0
  libatspi2.0-0 libavahi-glib1 libblas-common libblas3 libbluray1
  libbonobo2-0 libbonobo2-common libbonoboui2-0 libbonoboui2-common
  libcairo-gobject2 libcanberra-gtk3-0 libcanberra-gtk3-module
  libcanberra0 libcapture-tiny-perl libcdparanoia0 libcloog-isl4
  libcolord2 libcolorhug2 libconfig-simple-perl libcroco3 libdbd-pg-perl
  libdbd-sqlite3-perl libdbi-perl libdbus-glib-1-2 libdconf1
  libdrm-intel1 libdrm-nouveau2 libdrm-radeon1 libdrm2 libegl1-mesa
  libegl1-mesa-drivers libelf1 libepoxy0 liberror-perl libevdev2 libexif12
  libexo-1-0 libexo-common libexo-helpers libfile-basedir-perl
  libfile-copy-recursive-perl libfile-desktopentry-perl
  libfile-mimeinfo-perl libfontenc1 libfs6 libgail18 libgarcon-1-0
  libgarcon-common libgbm1 libgconf-2-4 libgd3 libgfortran3
  libgirepository-1.0-1 libgl1-mesa-dri libgl1-mesa-glx libglade2-0
  libglapi-mesa libglu1-mesa libgnome-2-0 libgnome-keyring-common
  libgnome-keyring0 libgnome2-0 libgnome2-bin libgnome2-common
  libgnomecanvas2-0 libgnomecanvas2-common libgnomeui-0 libgnomeui-common
  libgnomevfs2-0 libgnomevfs2-common libgnomevfs2-extra libgphoto2-6
  libgphoto2-l10n libgphoto2-port10 libgstreamer-plugins-base1.0-0
  libgstreamer1.0-0 libgtk-3-0 libgtk-3-bin libgtk-3-common libgudev-1.0-0
  libgusb2 libhunspell-1.3-0 libice6 libidl0 libieee1284-3 libisl10
  libjpeg8 libjson-glib-1.0-0 libjson-glib-1.0-common libkeybinder0
  liblapack3 libllvm3.5 liblua5.1-0 liblua5.2-0 libmpc3 libmpfr4 libmtdev1
  libnet-dbus-perl libnotify4 libnspr4 libnss3 libnx-x11 libogg0
  libopenjpeg5 libopenvg1-mesa liborbit-2-0 liborbit2 liborc-0.4-0
  libpam-systemd libpango1.0-0 libpangox-1.0-0 libpangoxft-1.0-0
  libparted2 libpciaccess0 libperl5.20 libpolkit-agent-1-0
  libpolkit-backend-1-0 libpolkit-gobject-1-0 libpoppler-glib8
  libpoppler46 libpq5 libproxy1 libpython2.7 libquadmath0 librest-0.7-0
  librsvg2-2 librsvg2-common libruby2.1 libsane libsane-common
  libsane-extras libsane-extras-common libsecret-1-0 libsecret-common
  libsm6 libsoup-gnome2.4-1 libsoup2.4-1 libstartup-notification0
  libtcl8.5 libtcl8.6 libtdb1 libtheora0 libthunarx-2-0 libtie-ixhash-perl
  libtk8.6 libtumbler-1-0 libtxc-dxtn-s2tc0 libudisks2-0 libv4l-0
  libv4lconvert0 libvisual-0.4-0 libvisual-0.4-plugins libvorbis0a
  libvorbisenc2 libvorbisfile3 libvpx1 libvte-common libvte9
  libwayland-client0 libwayland-cursor0 libwayland-egl1-mesa
  libwayland-server0 libwnck-common libwnck22 libx11-protocol-perl
  libx11-xcb1 libxatracker2 libxaw7 libxcb-dri2-0 libxcb-dri3-0
  libxcb-glx0 libxcb-present0 libxcb-shape0 libxcb-sync1 libxcb-util0
  libxcb-xfixes0 libxcomp3 libxcompext3 libxcompshad3 libxfce4ui-1-0
  libxfce4util-bin libxfce4util-common libxfce4util6 libxfconf-0-2
  libxfont1 libxft2 libxkbcommon0 libxkbfile1 libxml-twig-perl
  libxml-xpathengine-perl libxmu6 libxpm4 libxres1 libxshmfence1 libxss1
  libxt6 libxtst6 libxv1 libxvmc1 libxxf86dga1 libxxf86vm1 libyaml-0-2
  notification-daemon ntfs-3g nxagent parted policykit-1 policykit-1-gnome
  poppler-data pwgen python-cairo python-dbus python-dbus-dev
  python-gconf python-gi python-gnome2 python-gobject python-gobject-2
  python-gtk2 python-keybinder python-notify python-numpy python-pyorbit
  python-vte rsync rxvt-unicode-256color sane-utils sshfs tcl tcl8.6
  terminator thunar thunar-data thunar-volman tk tk8.6 tmux ttf-dejavu
  ttf-dejavu-core ttf-dejavu-extra tumbler tumbler-common udisks2
  update-inetd vim-gtk vim-gui-common vim-runtime weechat weechat-core
  weechat-curses weechat-plugins x11-apps x11-common x11-session-utils
  x11-utils x11-xfs-utils x11-xkb-utils x11-xserver-utils x2goagent
  x2goserver x2goserver-extensions x2goserver-xsession xbitmaps
  xdg-utils xfce-keyboard-shortcuts xfce4-panel xfconf xfonts-base
  xfonts-encodings xfonts-utils xinit xserver-common xserver-xorg
  xserver-xorg-core xserver-xorg-input-all xserver-xorg-input-evdev
  xserver-xorg-input-mouse xserver-xorg-input-synaptics
  xserver-xorg-input-vmmouse xserver-xorg-input-wacom
  xserver-xorg-video-all xserver-xorg-video-ati xserver-xorg-video-cirrus
  xserver-xorg-video-fbdev xserver-xorg-video-intel
  xserver-xorg-video-mach64 xserver-xorg-video-mga
  xserver-xorg-video-modesetting xserver-xorg-video-neomagic
  xserver-xorg-video-nouveau xserver-xorg-video-openchrome
  xserver-xorg-video-qxl xserver-xorg-video-r128 xserver-xorg-video-radeon
  xserver-xorg-video-savage xserver-xorg-video-siliconmotion
  xserver-xorg-video-sisusb xserver-xorg-video-tdfx
  xserver-xorg-video-trident xserver-xorg-video-vesa
  xserver-xorg-video-vmware
0 upgraded, 346 newly installed, 0 to remove and 0 not upgraded.
Need to get 171 MB of archives.
After this operation, 558 MB of additional disk space will be used.
~~~~~~~~~~~~~~~~~~~~~~~

## Pull in the icons for xfce

~~~~~~~~~~~~~~~~~~~~~~~
apt-get install gtk2-engines-xfce libxfce4ui-utils tango-icon-theme thunar-volman gtk3-engines-xfce gnome-icon-theme 
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
The following NEW packages will be installed:
  gnome-icon-theme gtk2-engines-xfce gtk3-engines-xfce libxfce4ui-utils
  tango-icon-theme
0 upgraded, 5 newly installed, 0 to remove and 0 not upgraded.
Need to get 11.9 MB of archives.
After this operation, 22.9 MB of additional disk space will be used.
~~~~~~~~~~~~~~~~~~~~~~~


## On the client linux box

### Setup the x2go apt sources as above

~~~~~~~~~~~~~~~~~~~~~~~
apt-get install pyhoca-cli
 ...
Suggested packages:
  mteleplayer-clientside python-cryptography-doc
  python-cryptography-vectors python-gevent-doc python-gevent-dbg
  python-greenlet-doc python-greenlet-dev python-greenlet-dbg
  python-openssl-doc python-openssl-dbg python-ply-doc doc-base
  telekinesis-client
The following NEW packages will be installed:
  libjpeg8 libxcomp3 nxproxy pyhoca-cli python-cffi python-cryptography
  python-ecdsa python-gevent python-greenlet python-ndg-httpsclient
  python-openssl python-paramiko python-ply python-pyasn1 python-pycparser
  python-requests python-setproctitle python-simplejson python-urllib3
  python-x2go python-xlib sshfs
0 upgraded, 22 newly installed, 0 to remove and 5 not upgraded.
Need to get 2,255 kB of archives.
After this operation, 9,584 kB of additional disk space will be used.
~~~~~~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~~~~~~
Starting PyHoca-CLI

To start an X2go session for remote user foo on X2go server myserver.local
with PyHoca-CLI open a terminal window and execute the following command:

pyhoca-cli --server myserver.local -N -c GNOME --user foo --add-to-known-hosts

pyhoca-cli --server on.coot.local -N --user craig --add-to-known-hosts -c terminator
~~~~~~~~~~~~~~~~~~~~~~~

## pick a lightweight web browser

### Conkeror

* [David A. Harding - The Conkeror Web Browser](http://dtrt.org/ul/pub/conkeror/)
* [truongtx.me - Conkeror - Working with Browser Object](http://truongtx.me/2014/12/21/conkeror-working-with-browser-object/)
* [cowboyprogrammer.org - Dark themes everywhere](http://cowboyprogrammer.org/dark-themes-everywhere/)

~~~~~~~~~~~~~~~~~~~~~~~
@qbit | ssh -L8080:localhost:8080 remotevps
~~~~~~~~~~~~~~~~~~~~~~~

