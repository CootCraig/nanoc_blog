---
title: "Personal vm guest - mydeb"
created_at: Wed Dec 17 22:16:57 MST 2014
kind: article
tags: [ 'debian' ]
---

~~~~~~~~~~~~
current IP
192.168.88.180 mydeb.coot.local mydeb
~~~~~~~~~~~~

## Debian 7.7 netinstall

### Install selections

* Print Server
* SSH Server

Saved as 
/data/vm_backups/mydeb/mydeb_20141217_2211/mydeb_20141217_2211

### My Base installs

~~~~~~~~~~~~
apt-get update
apt-get dist-upgrade

apt-get install sudo
adduser craig sudo
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install vim

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  vim-runtime
Suggested packages:
  ctags vim-doc vim-scripts
The following NEW packages will be installed:
  vim vim-runtime
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 5,448 kB of archives.
After this operation, 24.8 MB of additional disk space will be used.
~~~~~~~~~~~~

Add contrib and non-free to sources.list

~~~~~~~~~~~~
diff sources.list.1 sources.list

7,8c7,8
< deb http://ftp.us.debian.org/debian/ wheezy main
< deb-src http://ftp.us.debian.org/debian/ wheezy main
---
> deb http://ftp.us.debian.org/debian/ wheezy main contrib non-free
> deb-src http://ftp.us.debian.org/debian/ wheezy main contrib non-free
10,11c10,11
< deb http://security.debian.org/ wheezy/updates main
< deb-src http://security.debian.org/ wheezy/updates main
---
> deb http://security.debian.org/ wheezy/updates main contrib non-free
> deb-src http://security.debian.org/ wheezy/updates main contrib non-free
14,15c14,15
< deb http://ftp.us.debian.org/debian/ wheezy-updates main
< deb-src http://ftp.us.debian.org/debian/ wheezy-updates main
---
> deb http://ftp.us.debian.org/debian/ wheezy-updates main contrib non-free
> deb-src http://ftp.us.debian.org/debian/ wheezy-updates main contrib non-free
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get update
~~~~~~~~~~~~

* Package: lightdm (1.10.3-3) 
* Package: accountsservice (0.6.37-3 and others)
* Package: xfonts-base (1:1.0.3)
* Package: rxvt-unicode-256color (9.20-1 and others)

~~~~~~~~~~~~
apt-get install lightdm accountsservice xfonts-base rxvt-unicode-256color

Reading package lists... Done
Building dependency tree       
Reading state information... Done
xfonts-base is already the newest version.
xfonts-base set to manually installed.
The following extra packages will be installed:
  dbus-x11 dconf-gsettings-backend dconf-service desktop-base fontconfig fonts-vlgothic gconf-service gconf2 gconf2-common gnome-accessibility-themes
  gnome-icon-theme gnome-themes-standard gnome-themes-standard-data gtk2-engines hicolor-icon-theme libaccountsservice0 libatk1.0-0 libatk1.0-data
  libcairo-gobject2 libcroco3 libdatrie1 libdconf0 libgconf-2-4 libgdk-pixbuf2.0-0 libgdk-pixbuf2.0-common libgtk-3-0 libgtk-3-bin libgtk-3-common
  libgtk2.0-0 libgtk2.0-bin libgtk2.0-common liblightdm-gobject-1-0 libmtdev1 libpango1.0-0 librsvg2-2 librsvg2-common libstartup-notification0
  libthai-data libthai0 libx11-xcb1 libxcb-util0 libxcursor1 libxft2 libxi6 libxinerama1 libxklavier16 libxtst6 lightdm-gtk-greeter ttf-dejavu
  ttf-dejavu-extra xserver-xorg xserver-xorg-input-all xserver-xorg-input-evdev xserver-xorg-input-mouse xserver-xorg-input-synaptics
  xserver-xorg-input-vmmouse xserver-xorg-input-wacom
Suggested packages:
  gnome-control-center gnome kde-standard xfce4 wmaker gconf-defaults-service gvfs ttf-baekmuk ttf-arphic-gbsn00lp ttf-arphic-bsmi00lp ttf-arphic-gkai00mp
  ttf-arphic-bkai00mp librsvg2-bin upower gpointing-device-settings touchfreeze xinput
The following NEW packages will be installed:
  accountsservice dbus-x11 dconf-gsettings-backend dconf-service desktop-base fontconfig fonts-vlgothic gconf-service gconf2 gconf2-common
  gnome-accessibility-themes gnome-icon-theme gnome-themes-standard gnome-themes-standard-data gtk2-engines hicolor-icon-theme libaccountsservice0
  libatk1.0-0 libatk1.0-data libcairo-gobject2 libcroco3 libdatrie1 libdconf0 libgconf-2-4 libgdk-pixbuf2.0-0 libgdk-pixbuf2.0-common libgtk-3-0
  libgtk-3-bin libgtk-3-common libgtk2.0-0 libgtk2.0-bin libgtk2.0-common liblightdm-gobject-1-0 libmtdev1 libpango1.0-0 librsvg2-2 librsvg2-common
  libstartup-notification0 libthai-data libthai0 libx11-xcb1 libxcb-util0 libxcursor1 libxft2 libxi6 libxinerama1 libxklavier16 libxtst6 lightdm
  lightdm-gtk-greeter rxvt-unicode-256color ttf-dejavu ttf-dejavu-extra xserver-xorg xserver-xorg-input-all xserver-xorg-input-evdev
  xserver-xorg-input-mouse xserver-xorg-input-synaptics xserver-xorg-input-vmmouse xserver-xorg-input-wacom
0 upgraded, 60 newly installed, 0 to remove and 0 not upgraded.
Need to get 43.8 MB of archives.
After this operation, 128 MB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install gnome-disk-utility

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  cryptsetup-bin dosfstools fuse hdparm libasound2 libatasmart4 libavahi-glib1 libavahi-ui-gtk3-0 libcanberra-gtk3-0 libcanberra-gtk3-module libcanberra0
  libcryptsetup4 libdevmapper-event1.02.1 libgdu-gtk0 libgdu0 libgnome-keyring-common libgnome-keyring0 liblvm2app2.2 libnautilus-extension1a libnotify4
  libogg0 libparted0debian1 libsgutils2-2 libunique-3.0-0 libvorbis0a libvorbisfile3 notification-daemon ntfs-3g powermgmt-base udisks
Suggested packages:
  apmd libasound2-plugins libcanberra-gtk0 libcanberra-pulse gnome-keyring parted nparted libparted0-dev libparted0-i18n sg3-utils xfsprogs reiserfsprogs
  mdadm
The following NEW packages will be installed:
  cryptsetup-bin dosfstools fuse gnome-disk-utility hdparm libasound2 libatasmart4 libavahi-glib1 libavahi-ui-gtk3-0 libcanberra-gtk3-0
  libcanberra-gtk3-module libcanberra0 libcryptsetup4 libdevmapper-event1.02.1 libgdu-gtk0 libgdu0 libgnome-keyring-common libgnome-keyring0 liblvm2app2.2
  libnautilus-extension1a libnotify4 libogg0 libparted0debian1 libsgutils2-2 libunique-3.0-0 libvorbis0a libvorbisfile3 notification-daemon ntfs-3g
  powermgmt-base udisks
0 upgraded, 31 newly installed, 0 to remove and 0 not upgraded.
Need to get 5,184 kB of archives.
After this operation, 18.8 MB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install dkms

Reading package lists... Done
Building dependency tree       
Reading state information... Done
dkms is already the newest version.
dkms set to manually installed.
0 upgraded, 0 newly installed, 0 to remove and 0 not upgraded.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install cifs-utils

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  keyutils libnss-winbind libpam-winbind winbind
The following NEW packages will be installed:
  cifs-utils keyutils libnss-winbind libpam-winbind winbind
0 upgraded, 5 newly installed, 0 to remove and 0 not upgraded.
Need to get 3,389 kB of archives.
After this operation, 15.5 MB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install pulseaudio

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  gstreamer0.10-pulseaudio libasound2-plugins libasyncns0 libavcodec53 libavutil51 libdirac-encoder0 libfftw3-3 libflac8 libgsm1
  libgstreamer-plugins-base0.10-0 libgstreamer0.10-0 libjack-jackd2-0 libjson0 libmp3lame0 liborc-0.4-0 libpulse0 libsamplerate0 libschroedinger-1.0-0
  libsndfile1 libspeex1 libspeexdsp1 libsystemd-daemon0 libtheora0 libva1 libvorbisenc2 libvpx1 libwebrtc-audio-processing-0 libx264-123 libxvidcore4
  pulseaudio-module-x11 pulseaudio-utils rtkit
Suggested packages:
  libfftw3-bin libfftw3-dev libvisual-0.4-plugins gstreamer-codec-install gnome-codec-install gstreamer0.10-tools gstreamer0.10-plugins-base jackd2 speex
  pavumeter pavucontrol paman paprefs
The following NEW packages will be installed:
  gstreamer0.10-pulseaudio libasound2-plugins libasyncns0 libavcodec53 libavutil51 libdirac-encoder0 libfftw3-3 libflac8 libgsm1
  libgstreamer-plugins-base0.10-0 libgstreamer0.10-0 libjack-jackd2-0 libjson0 libmp3lame0 liborc-0.4-0 libpulse0 libsamplerate0 libschroedinger-1.0-0
  libsndfile1 libspeex1 libspeexdsp1 libsystemd-daemon0 libtheora0 libva1 libvorbisenc2 libvpx1 libwebrtc-audio-processing-0 libx264-123 libxvidcore4
  pulseaudio pulseaudio-module-x11 pulseaudio-utils rtkit
0 upgraded, 33 newly installed, 0 to remove and 0 not upgraded.
Need to get 14.3 MB of archives.
After this operation, 40.2 MB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install tmux git terminator

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  desktop-file-utils git-man gnome-mime-data gvfs gvfs-common gvfs-daemons gvfs-libs libaacs0 libblas3 libbluray1 libbonobo2-0 libbonobo2-common
  libbonoboui2-0 libbonoboui2-common libcurl3-gnutls libencode-locale-perl liberror-perl libfam0 libfile-basedir-perl libfile-desktopentry-perl
  libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libgail18 libgconf2-4 libgfortran3 libgl1-mesa-glx libglade2-0 libglapi-mesa libgnome2-0
  libgnome2-common libgnomecanvas2-0 libgnomecanvas2-common libgnomeui-0 libgnomeui-common libgnomevfs2-0 libgnomevfs2-common libgnomevfs2-extra
  libhtml-form-perl libhtml-format-perl libhtml-parser-perl libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl libhttp-daemon-perl
  libhttp-date-perl libhttp-message-perl libhttp-negotiate-perl libidl0 libio-socket-ip-perl libio-socket-ssl-perl libkeybinder0 liblapack3
  liblwp-mediatypes-perl liblwp-protocol-https-perl libmailtools-perl libnet-dbus-perl libnet-http-perl libnet-ssleay-perl liborbit2 librtmp0 libsmbclient
  libsocket-perl libssh2-1 libtie-ixhash-perl libtimedate-perl liburi-perl libvte-common libvte9 libwww-perl libwww-robotrules-perl libx11-protocol-perl
  libxcb-glx0 libxcb-shape0 libxml-parser-perl libxml-twig-perl libxml-xpathengine-perl libxv1 libxxf86dga1 libxxf86vm1 policykit-1-gnome python-cairo
  python-gconf python-gnome2 python-gobject python-gtk2 python-keybinder python-numpy python-pyorbit python-vte rsync x11-utils x11-xserver-utils xdg-utils
Suggested packages:
  git-daemon-run git-daemon-sysvinit git-doc git-el git-arch git-cvs git-svn git-email git-gui gitk gitweb gvfs-backends libbluray-bdj libbonobo2-bin fam
  libgnomevfs2-bin libdata-dump-perl libcrypt-ssleay-perl libauthen-ntlm-perl libunicode-map8-perl libunicode-string-perl xml-twig-tools python-gnome2-doc
  python-gtk2-doc python-numpy-doc python-numpy-dbg python-nose python-dev gfortran mesa-utils nickle cairo-5c xorg-docs-core gvfs-bin
The following NEW packages will be installed:
  desktop-file-utils git git-man gnome-mime-data gvfs gvfs-common gvfs-daemons gvfs-libs libaacs0 libblas3 libbluray1 libbonobo2-0 libbonobo2-common
  libbonoboui2-0 libbonoboui2-common libcurl3-gnutls libencode-locale-perl liberror-perl libfam0 libfile-basedir-perl libfile-desktopentry-perl
  libfile-listing-perl libfile-mimeinfo-perl libfont-afm-perl libgail18 libgconf2-4 libgfortran3 libgl1-mesa-glx libglade2-0 libglapi-mesa libgnome2-0
  libgnome2-common libgnomecanvas2-0 libgnomecanvas2-common libgnomeui-0 libgnomeui-common libgnomevfs2-0 libgnomevfs2-common libgnomevfs2-extra
  libhtml-form-perl libhtml-format-perl libhtml-parser-perl libhtml-tagset-perl libhtml-tree-perl libhttp-cookies-perl libhttp-daemon-perl
  libhttp-date-perl libhttp-message-perl libhttp-negotiate-perl libidl0 libio-socket-ip-perl libio-socket-ssl-perl libkeybinder0 liblapack3
  liblwp-mediatypes-perl liblwp-protocol-https-perl libmailtools-perl libnet-dbus-perl libnet-http-perl libnet-ssleay-perl liborbit2 librtmp0 libsmbclient
  libsocket-perl libssh2-1 libtie-ixhash-perl libtimedate-perl liburi-perl libvte-common libvte9 libwww-perl libwww-robotrules-perl libx11-protocol-perl
  libxcb-glx0 libxcb-shape0 libxml-parser-perl libxml-twig-perl libxml-xpathengine-perl libxv1 libxxf86dga1 libxxf86vm1 policykit-1-gnome python-cairo
  python-gconf python-gnome2 python-gobject python-gtk2 python-keybinder python-numpy python-pyorbit python-vte rsync terminator tmux x11-utils
  x11-xserver-utils xdg-utils
0 upgraded, 97 newly installed, 0 to remove and 0 not upgraded.
Need to get 36.0 MB of archives.
After this operation, 110 MB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install vim-gtk gnome-icon-theme

Reading package lists... Done
Building dependency tree       
Reading state information... Done
gnome-icon-theme is already the newest version.
gnome-icon-theme set to manually installed.
The following extra packages will be installed:
  liblua5.1-0 libpython2.7 libruby1.9.1 libyaml-0-2 tcl8.5 vim-gui-common
Suggested packages:
  tcl-tclreadline cscope vim-doc
The following NEW packages will be installed:
  liblua5.1-0 libpython2.7 libruby1.9.1 libyaml-0-2 tcl8.5 vim-gtk vim-gui-common
0 upgraded, 7 newly installed, 0 to remove and 0 not upgraded.
Need to get 8,666 kB of archives.
After this operation, 22.9 MB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install thunar iceweasel icedove gedit

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  aspell aspell-en enchant exo-utils freepats gedit-common gir1.2-atk-1.0 gir1.2-clutter-1.0 gir1.2-cogl-1.0 gir1.2-coglpango-1.0 gir1.2-freedesktop
  gir1.2-gdkpixbuf-2.0 gir1.2-gstreamer-0.10 gir1.2-gtk-3.0 gir1.2-gtksource-3.0 gir1.2-json-1.0 gir1.2-pango-1.0 gir1.2-peas-1.0 glib-networking
  glib-networking-common glib-networking-services gnome-js-common gnome-user-guide gsettings-desktop-schemas gstreamer0.10-ffmpeg gstreamer0.10-gconf
  gstreamer0.10-plugins-bad gstreamer0.10-plugins-base gstreamer0.10-plugins-good gstreamer0.10-x hunspell-en-us libaa1 libaspell15 libass4 libavc1394-0
  libavformat53 libcaca0 libcdaudio1 libcdparanoia0 libclutter-1.0-0 libclutter-1.0-common libcogl-common libcogl-pango0 libcogl9 libdc1394-22 libdca0
  libdirectfb-1.2-9 libdv4 libdvdnav4 libdvdread4 libenca0 libenchant1c2a libexo-1-0 libexo-common libexo-helpers libfaad2 libflite1 libfribidi0
  libgail-3-0 libgarcon-1-0 libgarcon-common libgeoclue0 libglu1-mesa libgme0 libgstreamer-plugins-bad0.10-0 libgtksourceview-3.0-0
  libgtksourceview-3.0-common libhunspell-1.3-0 libicu48 libiec61883-0 libjavascriptcoregtk-1.0-0 libjavascriptcoregtk-3.0-0 libjson-glib-1.0-0 libkate1
  libmhash2 libmimic0 libmms0 libmodplug1 libmpcdec6 libofa0 libopenal-data libopenal1 libopus0 libpeas-1.0-0 libpeas-common libpoppler-glib8 libpostproc52
  libproxy0 libraptor2-0 librasqal3 libraw1394-11 librdf0 libseed-gtk3-0 libshout3 libslv2-9 libsoundtouch0 libsoup-gnome2.4-1 libsoup2.4-1 libspandsp2
  libswscale2 libtag1-vanilla libtag1c2a libthunarx-2-0 libts-0.0-0 libtumbler-1-0 libvisual-0.4-0 libvisual-0.4-plugins libvo-aacenc0 libvo-amrwbenc0
  libwavpack1 libwebkitgtk-1.0-0 libwebkitgtk-1.0-common libwebkitgtk-3.0-0 libwebkitgtk-3.0-common libwildmidi-config libwildmidi1 libwnck-common
  libwnck22 libxfce4ui-1-0 libxfce4util-bin libxfce4util-common libxfce4util4 libxfconf-0-2 libxres1 libxslt1.1 libyajl2 libyelp0 libzbar0 libzvbi-common
  libzvbi0 python-gi-cairo thunar-data thunar-volman tsconf tumbler tumbler-common xdg-user-dirs xfce-keyboard-shortcuts xfce4-panel xfconf yelp yelp-xsl
  zenity zenity-common
Suggested packages:
  aspell-doc spellutils gedit-plugins frei0r-plugins hunspell openoffice.org-hunspell openoffice.org-core fonts-lyx fonts-stix otf-stix
  fonts-oflb-asana-math fonts-mathjax mozplugger libdv-bin oss-compat libdvdcss2 libenchant-voikko alsa-base geoclue libportaudio2 libroar-compat2
  opus-tools raptor2-utils rasqal-utils libraw1394-doc librdf-storage-postgresql librdf-storage-mysql librdf-storage-sqlite redland-utils slv2-jack
  thunar-archive-plugin thunar-media-tags-plugin tumbler-plugins-extra
Recommended packages:
  myspell-en-us hunspell-dictionary myspell-dictionary
The following NEW packages will be installed:
  aspell aspell-en enchant exo-utils freepats gedit gedit-common gir1.2-atk-1.0 gir1.2-clutter-1.0 gir1.2-cogl-1.0 gir1.2-coglpango-1.0 gir1.2-freedesktop
  gir1.2-gdkpixbuf-2.0 gir1.2-gstreamer-0.10 gir1.2-gtk-3.0 gir1.2-gtksource-3.0 gir1.2-json-1.0 gir1.2-pango-1.0 gir1.2-peas-1.0 glib-networking
  glib-networking-common glib-networking-services gnome-js-common gnome-user-guide gsettings-desktop-schemas gstreamer0.10-ffmpeg gstreamer0.10-gconf
  gstreamer0.10-plugins-bad gstreamer0.10-plugins-base gstreamer0.10-plugins-good gstreamer0.10-x hunspell-en-us icedove iceweasel libaa1 libaspell15
  libass4 libavc1394-0 libavformat53 libcaca0 libcdaudio1 libcdparanoia0 libclutter-1.0-0 libclutter-1.0-common libcogl-common libcogl-pango0 libcogl9
  libdc1394-22 libdca0 libdirectfb-1.2-9 libdv4 libdvdnav4 libdvdread4 libenca0 libenchant1c2a libexo-1-0 libexo-common libexo-helpers libfaad2 libflite1
  libfribidi0 libgail-3-0 libgarcon-1-0 libgarcon-common libgeoclue0 libglu1-mesa libgme0 libgstreamer-plugins-bad0.10-0 libgtksourceview-3.0-0
  libgtksourceview-3.0-common libhunspell-1.3-0 libicu48 libiec61883-0 libjavascriptcoregtk-1.0-0 libjavascriptcoregtk-3.0-0 libjson-glib-1.0-0 libkate1
  libmhash2 libmimic0 libmms0 libmodplug1 libmpcdec6 libofa0 libopenal-data libopenal1 libopus0 libpeas-1.0-0 libpeas-common libpoppler-glib8 libpostproc52
  libproxy0 libraptor2-0 librasqal3 libraw1394-11 librdf0 libseed-gtk3-0 libshout3 libslv2-9 libsoundtouch0 libsoup-gnome2.4-1 libsoup2.4-1 libspandsp2
  libswscale2 libtag1-vanilla libtag1c2a libthunarx-2-0 libts-0.0-0 libtumbler-1-0 libvisual-0.4-0 libvisual-0.4-plugins libvo-aacenc0 libvo-amrwbenc0
  libwavpack1 libwebkitgtk-1.0-0 libwebkitgtk-1.0-common libwebkitgtk-3.0-0 libwebkitgtk-3.0-common libwildmidi-config libwildmidi1 libwnck-common
  libwnck22 libxfce4ui-1-0 libxfce4util-bin libxfce4util-common libxfce4util4 libxfconf-0-2 libxres1 libxslt1.1 libyajl2 libyelp0 libzbar0 libzvbi-common
  libzvbi0 python-gi-cairo thunar thunar-data thunar-volman tsconf tumbler tumbler-common xdg-user-dirs xfce-keyboard-shortcuts xfce4-panel xfconf yelp
  yelp-xsl zenity zenity-common
0 upgraded, 148 newly installed, 0 to remove and 0 not upgraded.
Need to get 168 MB of archives.
After this operation, 439 MB of additional disk space will be used.
~~~~~~~~~~~~

* Package: i3-wm (4.8-1) 
* Package: libanyevent-i3-perl (0.16-1)
* Package: libjson-xs-perl (2.340-1 and others)

~~~~~~~~~~~~
apt-get install i3-wm libanyevent-i3-perl libjson-xs-perl

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libanyevent-perl libcommon-sense-perl libev4 libxcb-icccm4 libxcb-keysyms1 libxcb-randr0 libxcb-xinerama0
Suggested packages:
  libasync-interrupt-perl libev-perl libevent-perl libglib-perl libguard-perl libio-async-perl libpoe-perl libtask-weaken-perl perl-tk
The following NEW packages will be installed:
  i3-wm libanyevent-i3-perl libanyevent-perl libcommon-sense-perl libev4 libjson-xs-perl libxcb-icccm4 libxcb-keysyms1 libxcb-randr0 libxcb-xinerama0
0 upgraded, 10 newly installed, 0 to remove and 0 not upgraded.
Need to get 1,476 kB of archives.
After this operation, 3,168 kB of additional disk space will be used.
~~~~~~~~~~~~


~~~~~~~~~~~~
apt-get install dunst i3lock i3status suckless-tools

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libcap2-bin libconfuse-common libconfuse0 libiw30 libpam-cap libxcb-dpms0 libxcb-image0 libxdg-basedir1 libxss1
Suggested packages:
  libcap-dev dwm
The following NEW packages will be installed:
  dunst i3lock i3status libcap2-bin libconfuse-common libconfuse0 libiw30 libpam-cap libxcb-dpms0 libxcb-image0 libxdg-basedir1 libxss1 suckless-tools
0 upgraded, 13 newly installed, 0 to remove and 0 not upgraded.
Need to get 296 kB of archives.
After this operation, 1,065 kB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install python-pip debian-keyring g++-multilib g++-4.7-multilib gcc-4.7-doc libstdc++6-4.7-dbg libstdc++6-4.7-doc python-distribute python-distribute-doc python-dev

Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'python-setuptools' instead of 'python-distribute'
The following extra packages will be installed:
  build-essential dpkg-dev g++ g++-4.7 gcc-4.7-multilib gcc-doc-base gcc-multilib javascript-common lib32gcc1 lib32gomp1 lib32itm1 lib32quadmath0
  lib32stdc++6 libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libc6-dev-i386 libc6-i386 libdpkg-perl libexpat1-dev
  libfile-fcntllock-perl libgcc1-dbg libjs-jquery libssl-dev libssl-doc libstdc++6-4.7-dev python-pkg-resources python2.7-dev wwwconfig-common zlib1g-dev
Suggested packages:
  lib32stdc++6-4.7-dbg doc-base lib32mudflap0 apache2 httpd python-distribute mysql-client postgresql-client
Recommended packages:
  python-dev-all
The following NEW packages will be installed:
  build-essential debian-keyring dpkg-dev g++ g++-4.7 g++-4.7-multilib g++-multilib gcc-4.7-doc gcc-4.7-multilib gcc-doc-base gcc-multilib
  javascript-common lib32gcc1 lib32gomp1 lib32itm1 lib32quadmath0 lib32stdc++6 libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl
  libc6-dev-i386 libc6-i386 libdpkg-perl libexpat1-dev libfile-fcntllock-perl libgcc1-dbg libjs-jquery libssl-dev libssl-doc libstdc++6-4.7-dbg
  libstdc++6-4.7-dev libstdc++6-4.7-doc python-dev python-distribute-doc python-pip python-pkg-resources python-setuptools python2.7-dev wwwconfig-common
  zlib1g-dev
0 upgraded, 40 newly installed, 0 to remove and 0 not upgraded.
Need to get 132 MB of archives.
After this operation, 290 MB of additional disk space will be used.
~~~~~~~~~~~~

* [py3status](https://github.com/ultrabug/py3status/wiki)

~~~~~~~~~~~~
pip install py3status

Downloading/unpacking py3status
  Downloading py3status-1.6.tar.gz
  Running setup.py egg_info for package py3status
    
Installing collected packages: py3status
  Running setup.py install for py3status
    
    Installing py3status script to /usr/local/bin
Successfully installed py3status
Cleaning up...
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install weechat

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  guile-1.8-libs weechat-core weechat-curses weechat-plugins
Suggested packages:
  weechat-doc weechat-scripts
The following NEW packages will be installed:
  guile-1.8-libs weechat weechat-core weechat-curses weechat-plugins
0 upgraded, 5 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,562 kB of archives.
After this operation, 7,842 kB of additional disk space will be used.
~~~~~~~~~~~~

~~~~~~~~~~~~

echo "hello"

~~~~~~~~~~~

