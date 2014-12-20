---
title: "Log set up Debian on i3 Mini-ITX"
created_at: Sat Dec 13 18:01:40 MST 2014
kind: article
tags: [ 'debian' ]
---

## First round of install
Hostname: ivie.coot.local

~~~~~~~~~~~~
Software Selection
---------------------
remove Debian desktop environment
leave Print server
Add SSH server
remove laptop
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get update
apt-get dist-upgrade

apt-get install vim tmux git sudo

adduser craig sudo
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-git install lightdm i3 thunar iceweasel icedove
apt-get install gparted gedit rxvt terminator
apt-get install gnome-disk-utility
~~~~~~~~~~~~

~~~~~~~~~~~~
apt-get install audacity pulseaudio
~~~~~~~~~~~~

* [MountWindowsSharesPermanently](https://wiki.ubuntu.com/MountWindowsSharesPermanently)

~~~~~~~~~~~~
apt-get install cifs-utils
apt-get install dkms
~~~~~~~~~~~~


### /etc/fstab from lug

~~~~~~~~~~~~
UUID=59230da6-d4e1-4e4f-95bb-4914b473b3fe /               ext4    errors=remount-ro 0       1
/dev/sdb1 /mnt/disk2 ext4 auto 0 1
# swap was on /dev/sda5 during installation
UUID=fbfdf184-9b7a-41b2-97da-24a7fe0f2edd none            swap    sw              0       0
//10.10.10.111/c$ /media/gcs1c cifs rw,noauto,credentials=/home/craig/gcsww_canderson.txt,uid=craig 0 0
//10.10.10.111/d$ /media/gcs1d cifs rw,noauto,credentials=/home/craig/gcsww_canderson.txt,uid=craig 0 0
//10.10.10.117/f$ /media/gcs3f cifs rw,noauto,credentials=/home/craig/gcsww_canderson.txt,uid=craig 0 0
//10.10.10.117/e$ /media/gcs3e cifs rw,noauto,credentials=/home/craig/gcsww_canderson.txt,uid=craig 0 0
//192.168.88.209/media /media/nas1 cifs rw,noperm,noauto,credentials=/home/craig/nas1_credentials.txt,uid=craig,sec=ntlmv2 0 0
UUID=030f7503-7498-44a0-94c6-9b88f0a985fc /media/gcsvm ext4 noauto 0 0
~~~~~~~~~~~~

Added

~~~~~~~~~~~~
UUID=030f7503-7498-44a0-94c6-9b88f0a985fc /media/gcsvm ext4 noauto 0 0
~~~~~~~~~~~~

* [Download VirtualBox for Linux Hosts](https://www.virtualbox.org/wiki/Linux_Downloads)

## X.org video driver

* [Re: Haswell Core i5 4670 & Asus H87-PRO](https://lists.debian.org/debian-user/2013/06/msg01429.html)

~~~~~~~~~~~~~~~~~~
Probably not, you will likely need a newer X.org driver
(xserver-xorg-video-intel) and Mesa (libgl1-mesa-dri), and possibly a
newer libdrm.  Unfortunately, the xserver-xorg-video-intel package is
way behind upstream even in experimental, and libgl1-mesa-dri in
unstable requires a newer libc6 than is available in Wheezy.
~~~~~~~~~~~~~~~~~~

* Package: xserver-xorg-video-intel (2:2.21.15-2 and others) 
* Package: libgl1-mesa-dri (10.3.2-1) 

~~~~~~~~~~~~~~~~~~
apt-get install xserver-xorg-video-intel

already the latest version
~~~~~~~~~~~~~~~~~~

## Set up the other 3 HD

/dev/sdb
mount as /data

/dev/sdc - /dev/sdd - 

~~~~~~~~~~~~~~~~~~
root@ivie:~# blkid
/dev/sda1: UUID="fd5a5c3d-45d1-489b-9cd5-6de24d8cfd66" TYPE="ext4" PARTUUID="56e4161b-01"
/dev/sda5: UUID="0b90163a-b607-47ad-9f4d-d731dbb884f7" TYPE="swap" PARTUUID="56e4161b-05"
/dev/sdb1: LABEL="sata02" UUID="964ae5ac-42a4-44f7-8a99-57ecd3397563" TYPE="ext4" PARTUUID="5ac5be25-01"
/dev/sdc1: LABEL="mixing" UUID="234aaeda-a40a-4ba3-8b48-19a5209d45a9" TYPE="ext4" PARTUUID="5237fb2c-01"
/dev/sdd1: LABEL="sata01" UUID="8105507a-f283-40f0-8051-3649d89229d5" TYPE="ext4" PARTUUID="aab12b11-01"
/dev/sde1: LABEL="gcsvm" UUID="030f7503-7498-44a0-94c6-9b88f0a985fc" TYPE="ext4" PARTUUID="fc7fb9bb-01"
~~~~~~~~~~~~~~~~~~

### Label sata02 /dev/sdb1 298Gb ext4

~~~~~~~~~~~~~~~~~~
/dev/sdb1: LABEL="sata02" UUID="964ae5ac-42a4-44f7-8a99-57ecd3397563" TYPE="ext4" PARTUUID="5ac5be25-01"
~~~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~~~
UUID=fd5a5c3d-45d1-489b-9cd5-6de24d8cfd66 /               ext4    errors=remount-ro 0       1

UUID=964ae5ac-42a4-44f7-8a99-57ecd3397563 /data               ext4    errors=remount-ro 0       2
~~~~~~~~~~~~~~~~~~

### raid 1 465.76 Gb - /dev/sdc1: LABEL="mixing" - /dev/sdd1: LABEL="sata01"

~~~~~~~~~~~~~~~~~~
/dev/sdc1: LABEL="mixing" UUID="234aaeda-a40a-4ba3-8b48-19a5209d45a9" TYPE="ext4" PARTUUID="5237fb2c-01"
/dev/sdd1: LABEL="sata01" UUID="8105507a-f283-40f0-8051-3649d89229d5" TYPE="ext4" PARTUUID="aab12b11-01"
~~~~~~~~~~~~~~~~~~

An exact copy (or mirror) of a set of data on two disks. This is useful
when read performance or reliability is more important than data storage
capacity. Such an array can only be as big as the smallest member disk. A
classic RAID 1 mirrored pair contains two disks.

* [Debian SoftwareRAID](https://wiki.debian.org/SoftwareRAID)
* Package: mdadm (3.3.2-2)  (jessie)

#### using this article

* [xmodulo - How to create a software RAID-1 array with mdadm on Linux](http://xmodulo.com/create-software-raid1-array-mdadm-linux.html)

~~~~~~~~~~~~~~~~~~
apt-get install mdadm
fdisk and create partitions type 0xfd
mdadm -Cv /dev/md0 -l1 -n2 /dev/sdc1 /dev/sdd1
~~~~~~~~~~~~~~~~~~

Watch the progress of building the mdm array

~~~~~~~~~~~~~~~~~~
cat /proc/mdstat

Personalities : [raid1] 
md0 : active raid1 sdd1[1] sdc1[0]
      488254464 blocks super 1.2 [2/2] [UU]
      [==>..................]  resync = 10.2% (50215168/488254464) finish=92.0min speed=79290K/sec
      bitmap: 4/4 pages [16KB], 65536KB chunk
~~~~~~~~~~~~~~~~~~

Format raid1 md0

~~~~~~~~~~~~~~~~~~
mkfs.ext4 /dev/md0 

mke2fs 1.42.12 (29-Aug-2014)
Creating filesystem with 122063616 4k blocks and 30523392 inodes
Filesystem UUID: 6d6c9846-6c60-40cf-b8f0-24fd5eeafdfa
Superblock backups stored on blocks: 
	32768, 98304, 163840, 229376, 294912, 819200, 884736, 1605632, 2654208, 
	4096000, 7962624, 11239424, 20480000, 23887872, 71663616, 78675968, 
	102400000

Allocating group tables: done                            
Writing inode tables: done                            
Creating journal (32768 blocks): done
Writing superblocks and filesystem accounting information: done    
~~~~~~~~~~~~~~~~~~

## local printer setup

[CUPS web admin](http://localhost:631)

## Some office programs

### abiword

~~~~~~~~~~~~~~
apt-get install abiword

The following NEW packages will be installed:
  abiword abiword-common abiword-plugin-grammar abiword-plugin-mathview evolution-data-server-common fonts-liberation fonts-lyx libabiword-3.0
  libboost-date-time1.55.0 libboost-system1.55.0 libboost-thread1.55.0 libcamel-1.2-49 libchamplain-0.12-0 libchamplain-gtk-0.12-0 libclutter-1.0-0
  libclutter-1.0-common libclutter-gtk-1.0-0 libcogl-common libcogl-pango20 libcogl-path20 libcogl20 libebackend-1.2-7 libebook-1.2-14
  libebook-contacts-1.2-0 libecal-1.2-16 libedata-book-1.2-20 libedataserver-1.2-18 libfribidi0 libgck-1-0 libgcr-3-common libgcr-base-3-1 libgdome2-0
  libgdome2-cpp-smart0c2a libgoffice-0.10-10 libgoffice-0.10-10-common libgsf-1-114 libgsf-1-common libgtkmathview0c2a libical1 libinput5 liblink-grammar4
  libloudmouth1-0 libmhash2 libots0 libphonenumber6 libprotobuf9 libraptor2-0 librasqal3 librdf0 librevenge-0.0-0 libtelepathy-glib0 libtidy-0.99-0
  libwmf0.2-7 libwpd-0.10-10 libwpg-0.3-3 libwps-0.3-3 libwv-1.2-4 link-grammar-dictionaries-en
0 upgraded, 58 newly installed, 0 to remove and 0 not upgraded.
Need to get 20.2 MB of archives.
After this operation, 92.4 MB of additional disk space will be used.
~~~~~~~~~~~~~~

### Package: libreoffice (1:4.3.3-2)

This metapackage installs all components of libreoffice:

* libreoffice-writer: Word processor
* libreoffice-calc: Spreadsheet
* libreoffice-impress: Presentation
* libreoffice-draw: Drawing
* libreoffice-base: Database
* libreoffice-math: Equation editor

~~~~~~~~~~~~~~
apt-get install libreoffice

The following NEW packages will be installed:
  coinor-libcbc3 coinor-libcgl1 coinor-libclp1 coinor-libcoinmp1 coinor-libcoinutils3 coinor-libosi1 firebird2.5-common firebird2.5-common-doc
  firebird2.5-server-common fonts-opensymbol fonts-sil-gentium fonts-sil-gentium-basic libabw-0.1-1 libcdr-0.1-1 libclucene-contribs1 libclucene-core1
  libcmis-0.4-4 libcolamd2.8.0 libe-book-0.1-1 libeot0 libetonyek-0.1-1 libexttextcat-2.0-0 libexttextcat-data libfbclient2 libfbembed2.5 libfreehand-0.1-1
  libglew1.10 libgltf-0.0-0 libhsqldb1.8.0-java libhyphen0 liblangtag-common liblangtag1 libmspub-0.1-1 libmwaw-0.3-3 libmythes-1.2-0 libneon27-gnutls
  libodfgen-0.1-1 liborcus-0.8-0 libreoffice libreoffice-avmedia-backend-gstreamer libreoffice-base libreoffice-base-core libreoffice-base-drivers
  libreoffice-calc libreoffice-common libreoffice-core libreoffice-draw libreoffice-impress libreoffice-java-common libreoffice-math
  libreoffice-report-builder-bin libreoffice-sdbc-firebird libreoffice-sdbc-hsqldb libreoffice-style-galaxy libreoffice-writer libservlet2.5-java
  libvisio-0.1-1 lp-solve python3-uno uno-libs3 ure
0 upgraded, 61 newly installed, 0 to remove and 0 not upgraded.
Need to get 94.0 MB of archives.
After this operation, 355 MB of additional disk space will be used.

~~~~~~~~~~~~~~

### Package: gv (1:3.7.4-1) 

~~~~~~~~~~~~~~
apt-get install gv

The following NEW packages will be installed:
  ghostscript-x gv xaw3dg
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 459 kB of archives.
After this operation, 1,225 kB of additional disk space will be used.
~~~~~~~~~~~~~~

### Package: hdparm (9.43-1.1) 

~~~~~~~~~~~~~~
apt-get install hdparm

The following NEW packages will be installed:
  hdparm powermgmt-base
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 114 kB of archives.
After this operation, 244 kB of additional disk space will be used.
~~~~~~~~~~~~~~

### Package: flashplugin-nonfree (1:3.6) 

~~~~~~~~~~~~~~
apt-get install flashplugin-nonfree
~~~~~~~~~~~~~~

### How to control audio mixer?

#### Package: paman (0.9.4-1 and others)

#### Package: pasystray (0.4.0-1) 

Pasystray enables control of various PulseAudio server settings from the X11 system tray. It can:

* adjust the volume of streams and sinks/sources
* transfer streams between sinks/sources
* switch the default sink/source
* set the default server (PULSE_SERVER)
* detect network PulseAudio services
* rename devices

* sug: paman - PulseAudio Manager 
* sug: paprefs - PulseAudio Preferences 
* sug: pavumeter - PulseAudio Volume Meter 
* sug: pulseaudio-module-zeroconf - Zeroconf module for PulseAudio sound server 

#### Try install

~~~~~~~~~~~~~~
apt-get install paman pasystray

The following NEW packages will be installed:
  libglademm-2.4-1c2a paman pasystray pavumeter
0 upgraded, 4 newly installed, 0 to remove and 0 not upgraded.
Need to get 193 kB of archives.
After this operation, 949 kB of additional disk space will be used.
~~~~~~~~~~~~~~

### Package: inkscape (0.48.5-3) 

~~~~~~~~~~~~~~

~~~~~~~~~~~~~~

### Package: dia (0.97.3-1) 

~~~~~~~~~~~~~~

~~~~~~~~~~~~~~

### Package: mupdf (1.5-1 and others) 

## Unable to read HP Envy SATA drives

~~~~~~~~~~~~~~
hdparm -N /dev/sdf

/dev/sdf:
 max sectors   = 0/268435455, HPA is enabled
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
hdparm --verbose /dev/sdf

geometry      = 91201/255/63, sectors = 1465149168, start = 0

1465149168
268435455
~~~~~~~~~~~~~~

### Research on HPA on SATA


http://superuser.com/questions/642637/harddrive-wipe-out-hidden-areas-like-hpa-and-dco-also-after-malware-infectio

To use HDPARM to clear the HPA

For x = device you're targeting, use the following HDPARM command to
show if you have an HPA enabled.

~~~~~~~~~~~~~~
hdparm -N /dev/sdx
~~~~~~~~~~~~~~

It will spit back something like the following if you have an HPA defined:

~~~~~~~~~~~~~~
/dev/sdx:
max sectors   = 78125000/78165360, HPA is enabled
~~~~~~~~~~~~~~

To remove the HPA and expand the visible area out to the full size of the
drive use the denominator in the above report (visible area/max sectors):

~~~~~~~~~~~~~~
hdparm -N p78165360 /dev/sdx
~~~~~~~~~~~~~~

It will spit back a report that the visible area is equal to the max
sectors and that the HPA is disabled.

~~~~~~~~~~~~~~
/dev/sdx:
setting max visible sectors to 78165360 (permanent)
max sectors   = 78165360/78165360, HPA is disabled
~~~~~~~~~~~~~~

## RDP remmina

* Package: remmina (1.1.1-2) 
* Package: remmina-plugin-rdp (1.1.1-2)
* Package: remmina-plugin-vnc (1.1.1-2) 

~~~~~~~~~~~~~~
apt-get install remmina remmina-plugin-rdp remmina-plugin-vnc

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libavahi-ui-gtk3-0 libfreerdp-cache1.1 libfreerdp-client1.1 libfreerdp-codec1.1 libfreerdp-common1.1.0 libfreerdp-core1.1 libfreerdp-crypto1.1
  libfreerdp-gdi1.1 libfreerdp-locale1.1 libfreerdp-plugins-standard libfreerdp-primitives1.1 libfreerdp-utils1.1 libgstreamer-plugins-base0.10-0
  libgstreamer0.10-0 libssh-4 libvncclient0 libvte-2.90-9 libvte-2.90-common libwinpr-crt0.1 libwinpr-crypto0.1 libwinpr-dsparse0.1 libwinpr-environment0.1
  libwinpr-file0.1 libwinpr-handle0.1 libwinpr-heap0.1 libwinpr-input0.1 libwinpr-interlocked0.1 libwinpr-library0.1 libwinpr-path0.1 libwinpr-pool0.1
  libwinpr-registry0.1 libwinpr-rpc0.1 libwinpr-sspi0.1 libwinpr-synch0.1 libwinpr-sysinfo0.1 libwinpr-thread0.1 libwinpr-utils0.1 remmina-common
Suggested packages:
  freerdp-x11 gstreamer-codec-install gnome-codec-install gstreamer0.10-tools gstreamer0.10-plugins-base
The following NEW packages will be installed:
  libavahi-ui-gtk3-0 libfreerdp-cache1.1 libfreerdp-client1.1 libfreerdp-codec1.1 libfreerdp-common1.1.0 libfreerdp-core1.1 libfreerdp-crypto1.1
  libfreerdp-gdi1.1 libfreerdp-locale1.1 libfreerdp-plugins-standard libfreerdp-primitives1.1 libfreerdp-utils1.1 libgstreamer-plugins-base0.10-0
  libgstreamer0.10-0 libssh-4 libvncclient0 libvte-2.90-9 libvte-2.90-common libwinpr-crt0.1 libwinpr-crypto0.1 libwinpr-dsparse0.1 libwinpr-environment0.1
  libwinpr-file0.1 libwinpr-handle0.1 libwinpr-heap0.1 libwinpr-input0.1 libwinpr-interlocked0.1 libwinpr-library0.1 libwinpr-path0.1 libwinpr-pool0.1
  libwinpr-registry0.1 libwinpr-rpc0.1 libwinpr-sspi0.1 libwinpr-synch0.1 libwinpr-sysinfo0.1 libwinpr-thread0.1 libwinpr-utils0.1 remmina remmina-common
  remmina-plugin-rdp remmina-plugin-vnc
0 upgraded, 41 newly installed, 0 to remove and 0 not upgraded.
Need to get 9,511 kB of archives.
After this operation, 20.6 MB of additional disk space will be used.
~~~~~~~~~~~~~~

## IRC client

irssi - irc client
ChatZilla extension for Firefox.

### Package: irssi (0.8.17-1) 

#### install

~~~~~~~~~~~~~~
apt-get install irssi irssi-scripts libdbi-perl libclone-perl libmldbm-perl libnet-daemon-perl libsql-statement-perl

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libfreezethaw-perl libparams-util-perl libtext-soundex-perl libval14
The following NEW packages will be installed:
  irssi irssi-scripts libclone-perl libdbi-perl libfreezethaw-perl libmldbm-perl libnet-daemon-perl libparams-util-perl libsql-statement-perl
  libtext-soundex-perl libval14
0 upgraded, 11 newly installed, 0 to remove and 0 not upgraded.
Need to get 2,878 kB of archives.
After this operation, 8,864 kB of additional disk space will be used.
~~~~~~~~~~~~~~

## package libdb-dev

~~~~~~~~~~~~~~
apt-get install libdb-dev

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  libdb5.3-dev
Suggested packages:
  db5.3-doc
The following NEW packages will be installed:
  libdb-dev libdb5.3-dev
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 742 kB of archives.
After this operation, 3,143 kB of additional disk space will be used.
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
apt-get install ncurses-dev

Reading package lists... Done
Building dependency tree       
Reading state information... Done
Note, selecting 'libncurses5-dev' instead of 'ncurses-dev'
The following extra packages will be installed:
  libtinfo-dev
Suggested packages:
  ncurses-doc
The following NEW packages will be installed:
  libncurses5-dev libtinfo-dev
0 upgraded, 2 newly installed, 0 to remove and 0 not upgraded.
Need to get 252 kB of archives.
After this operation, 1,526 kB of additional disk space will be used.
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
apt-get install libpopt-dev

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following NEW packages will be installed:
  libpopt-dev
0 upgraded, 1 newly installed, 0 to remove and 0 not upgraded.
Need to get 50.6 kB of archives.
After this operation, 122 kB of additional disk space will be used.
Get:1 http://ftp.us.debian.org/debian/ jessie/main libpopt-dev amd64 1.16-10 [50.6 kB]
Fetched 50.6 kB in 0s (90.6 kB/s)    
Selecting previously unselected package libpopt-dev:amd64.
(Reading database ... 127283 files and directories currently installed.)
Preparing to unpack .../libpopt-dev_1.16-10_amd64.deb ...
Unpacking libpopt-dev:amd64 (1.16-10) ...
Processing triggers for man-db (2.7.0.2-4) ...
Setting up libpopt-dev:amd64 (1.16-10) ...
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
apt-get install libltdl-dev

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  autotools-dev libtool
Suggested packages:
  libtool-doc autoconf automaken gfortran fortran95-compiler gcj-jdk
The following NEW packages will be installed:
  autotools-dev libltdl-dev libtool
0 upgraded, 3 newly installed, 0 to remove and 0 not upgraded.
Need to get 418 kB of archives.
After this operation, 1,909 kB of additional disk space will be used.
~~~~~~~~~~~~~~

~~~~~~~~~~~~~~
apt-get install checkinstall

Reading package lists... Done
Building dependency tree       
Reading state information... Done
The following extra packages will be installed:
  build-essential dpkg-dev g++ g++-4.9 libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libdpkg-perl libfile-fcntllock-perl
  libstdc++-4.9-dev
Suggested packages:
  gettext debian-keyring g++-multilib g++-4.9-multilib gcc-4.9-doc libstdc++6-4.9-dbg libstdc++-4.9-doc
The following NEW packages will be installed:
  build-essential checkinstall dpkg-dev g++ g++-4.9 libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libdpkg-perl
  libfile-fcntllock-perl libstdc++-4.9-dev
0 upgraded, 11 newly installed, 0 to remove and 0 not upgraded.
Need to get 25.5 MB of archives.
After this operation, 50.8 MB of additional disk space will be used.
~~~~~~~~~~~~~~

#### research

* [LinuxReviews - Irssi quickstart guide](http://linuxreviews.org/software/irc/irssi/)
* [ArchLinux on irssi](https://wiki.archlinux.org/index.php/irssi)
* [ArchLinux - irssi with nicklist in tmux](https://wiki.archlinux.org/index.php/irssi#irssi_with_nicklist_in_tmux)
* [Linode howto on Irssi](https://www.linode.com/docs/applications/messaging/using-irssi-for-internet-relay-chat)
* [A Guide to Efficiently Using Irssi and Screen](http://quadpoint.org/articles/irssi/)
* [irssi.org - Startup HOWTO](http://irssi.org/documentation/startup)
* [Aaron Toponce - Irssi's /channel, /network, /server and /connect - What It Means](https://pthree.org/2010/02/02/irssis-channel-network-server-and-connect-what-it-means/)
* [BitlBee brings IM (instant messaging) to IRC clients.](http://www.bitlbee.org/main.php/news.r.html)
* [Anton Fagerberg - My perfect Irssi setup](http://www.antonfagerberg.com/texts/my-perfect-irssi-setup/)
* [Uves Way - Irssi and tmux (or screen)](http://uvesway.wordpress.com/2012/03/24/irssi-and-tmux-or-screen/)
* [steelmanronald06 - irssi For Beginners](http://www.linux.org/threads/irssi-for-beginners.4181/)

## next

deadbeef - unpacked to /opt

