---
title: "Arch on Thinkpad"
created_at: Sat Sep 12 20:55:29 MDT 2020
kind: article
tags:
  - arch_on_toshiba
  - arch_linux
  - arch
  - laptop
  - notebook_computer
---
Thinkpad T500

<h4>
  <a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">wiki.archlinux.org</a>
  Installation guide
</h4>
This document is a guide for installing Arch Linux from the live system booted with the official installation image. 

<h4>hostname thinkpad-arch-87037</h4>
See <a href="/posts/2015/04/generate-private-hostnames/" target="_blank">Generate Private Host Names</a>
<pre>
Sat Sep 12 21:46:37 MDT 2020
https://codepen.io/codycraven/pen/MbWwQm

var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(14);
var numbers = hashids.decode(id);

$("#input").text("["+numbers.join(", ")+"]");
$("#hashid").text(id);

14 -> 87037 - thinkpad-arch-87037 - 20200912 - Lenovo Thinkpad T500
</pre>

<h3>boot iso and wifi setup Sat Sep 12 21:55:02 MDT 2020</h3>
<pre>
hostname is thinkpad-arch-87037
boot archlinux-2020.09.01-x86_64.iso
  from USB labeled archlinux

ip link
  wlan0

rfkill
  1 wlan phy0

iwctl
[iwd]# device list
  wlan0 phy0
[iwd]# station wlan0 scan
[iwd]# station wlan0 get-networks
  Pirates psk
[iwd]# station wlan0 connect Pirates
[iwd]# exit

 # ping -c 3 archlinux.org

 # timedatectl set-ntp true
 # timedatectl status.
</pre>

<h3>Install Log</h3>
<pre>
pacman -Syy
pacman -S python3
pacman -S reflector
reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

 # fdisk -l
 Disk /dev/sda: 149.05 GiB
 Disk model: WDC WD1600BEVS-0

 # wipefs -a /dev/sda
 # fdisk /dev/sda
   /dev/sda1 768M 82 Linux Swap
   /dev/sda2 148.3G 83 Linux

 # mkfs.ext4 /dev/sda2
 # mkswap /dev/sda1
 # mount /dev/sda2 /mnt
 # swapon /dev/sda1

 # pacstrap /mnt base linux linux-firmware
 # pacstrap /mnt gvim

 # genfstab -U /mnt >> /mnt/etc/fstab
 # arch-chroot /mnt

 # ln -sf /usr/share/zoneinfo/America/Denver /etc/localtime
 # hwclock --systohc

Edit /etc/locale.gen and uncomment en_US.UTF-8 UTF-8
 # locale-gen
Create the locale.conf(5) file, and set the LANG variable accordingly:

/etc/locale.conf
LANG=en_US.UTF-8

Create the hostname file:
/etc/hostname
thinkpad-arch-87037

Add matching entries to hosts(5):
/etc/hosts
127.0.0.1 localhost
::1   localhost
127.0.1.1 thinkpad-arch-87037.localdomain  thinkpad-arch-87037
192.168.0.4 ivie.localdomain ivie

 # pacman -S grub

Install the grub package. (It will replace grub-legacyAUR if that is already installed.) Then do:
 # grub-install --target=i386-pc /dev/sda
 # pacman -S intel-ucode
 # grub-mkconfig -o /boot/grub/grub.cfg

 # pacman -S iwd

Exit the chroot environment by typing exit or pressing Ctrl+d.

Finally, restart the machine by typing reboot: any partitions still mounted will be automatically unmounted by systemd. Remember to remove the installation medium and then login into the new system with the root account.

See
<a href="https://wiki.archlinux.org/index.php/General_recommendations" target="_blank">General recommendations</a>
for system management directions and post-installation tutorials (like setting up a graphical user interface, sound or a touchpad).
</pre>

<h3>Post boot from HD</h3>
<pre>
The iwd package provides the client program iwctl, the daemon iwd and the Wi-Fi monitoring tool iwmon.
 # systemctl start iwd.service
 # systemctl enable iwd.service

 # iwctl
[iwd]# device list
  wlan0 phy0
[iwd]# station wlan0 scan
[iwd]# station wlan0 connect Pirates
[iwd]# exit

 # systemctl start systemd-networkd.service
 # systemctl enable systemd-networkd.service

 # systemctl start systemd-resolved.service
 # systemctl enable systemd-resolved.service

/etc/systemd/network/25-wlan0.network
[Match]
Name=wlan0

[Network]
DHCP=yes

 # pacman -Syy
 # pacman -S python3
 # pacman -S reflector
 # reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

 # pacman -Syyu
 # pacman -S xorg xorg-server
 # pacman -S mate mate-extra
 # pacman -S lightdm lightdm-gtk-greeter
 # systemctl enable lightdm.service

 # pacman -S sudo

 # useradd --create-home --shell /usr/bin/zsh craig
 # passwd craig
 # usermod -a -G wheel craig

As root: vim /etc/sudoers -> must :w!
Near the top add this line
Defaults  editor=/usr/bin/vim

 # visudo
uncomment this line:
%wheel ALL=(ALL) NOPASSWD: ALL

logout root. login craig

 % touch .zshrc
edit .zshrc
 # this is .zshrc
 export PATH=~/bin:$PATH

pacman -S openssh
systemctl start sshd.service
systemctl start sshd.service

ssh-keygen
ssh-copy-id username@host-address

sudo pacman -S autofs
</pre>

<h3>ntp - switch to chrony</h3>
<pre>
systemctl stop systemd-timesyncd.service
systemctl disable systemd-timesyncd.service
pacman -S chrony

edit /etc/chrony.conf - add
server 0.pool.ntp.org offline
server 1.pool.ntp.org offline
server 2.pool.ntp.org offline
server 3.pool.ntp.org offline

systemctl start chronyd.service
systemctl enable chronyd.service
</pre>

<h3>nfs</h3>
<pre>
pacman -S nfs-utils
</pre>

https://linuxhint.com/connect-android-arch-linux/
You access Android File System using MTP protocol. It is not installed on Arch Linux by default.

You can enable MTP support by install mtpfs Arch package.
sudo pacman -S mtpfs

https://averagelinuxuser.com/which-aur-helper-yay/#install-yay-in-arch-linux
sudo pacman -S --needed base-devel git
mkdir ~craig/dev
cd ~craig/dev
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si

yay jmtpfs

sudo pacman -Sy gvfs-mtp
sudo pacman -Sy gvfs-gphoto2



https://wiki.archlinux.org/index.php/Persistent_block_device_naming#by-label
lsblk -f
blkid

<!--
html boilerplate fragments
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
  <li><a href="" target="_blank"></a></li>
</ul>
<pre>
</pre>
<p style="margin-bottom: 2em;"></p>
<hr style="border: 0; height: 3px; background: #333; background-image: linear-gradient(to right, #ccc, #333, #ccc);">
<pre><code>
</code></pre>
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
:-->
