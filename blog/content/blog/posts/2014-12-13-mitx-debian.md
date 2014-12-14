---
title: "Log set up Debian on i3 Mini-ITX"
created_at: Sat Dec 13 18:01:40 MST 2014
kind: article
tags: [ 'debian' ]
---

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


deadbeef

