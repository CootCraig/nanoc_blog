---
title: "Arch Mate 2r9yq"
created_at: Tue Nov 26 11:36:06 MST 2019
kind: article
tags:
  - arch_linux
  - linux
  - linux_install
---

<h4>
  <a href="https://wiki.archlinux.org/index.php/Installation_guide" target="_blank">wiki.archlinux.org/</a>
  Installation guide
</h4>

<h3>todo </h3>
<pre>
craig oh my zsh?
config vim gvim
</pre>

<h1>Install Log</h1>

<h2>Boot the iso image</h2>

<pre>
boot archlinux-2019.11.01-x86_64.iso
ip link -> enp0s3
ping -c 3 google.com -> yes - wired connection auto started

pacman -Syy - update pacman databases
pacman -S python3
pacman -S reflector
reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

fdisk -l -> /dev/sda
fdisk /dev/sda -> one partition sda1
mkfs.ext4 /dev/sda

mount /dev/sda1 /mnt

pacstrap /mnt base base-devel linux linux-firmware dhcpcd netctl vim python3 reflector 

genfstab -U -p /mnt >> /mnt/etc/fstab

arch-chroot /mnt

reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

ln -sf /usr/share/zoneinfo/America/Denver /etc/localtime
hwclock --systohc

Uncomment en_US.UTF-8 UTF-8 and other needed locales in /etc/locale.gen, and generate them with:
 # locale-gen

Create the locale.conf(5) file, and set the LANG variable accordingly:
/etc/locale.conf
LANG=en_US.UTF-8

Create file /etc/hostname
arch-mate-2r9yq

Add matching entries to /etc/hosts
127.0.0.1 localhost
::1 localhost
127.0.1.1 arch-mate-2r9yq.localdomain arch-mate-2r9yq

set the root password
 # passwd

pacman -S intel-ucode
pacman -S dosfstools
pacman -S grub

grub-install /dev/sda

generate /boot/grub/grub.cfg:
 # grub-mkconfig -o /boot/grub/grub.cfg
exit # from chroot
shutdown -h now
</pre>

<h2>Boot the hard drive</h2>

<pre>
remove the iso image
run the virtual machinee.
</pre>

<h3>networking</h3>

<pre>
systemctl start dhcpcd.service
systemctl enable dhcpcd.service

ip link -> enp0s3
cd /etc/netctl/examples
cp ethernet-dhcp ..
cd ..
mv ethernet-dhcp enp0s3-dhcp

edit enp0s3-dhcp
Description='dhcp internet connection for virtualbox enp0s3'
Interface=enp0s3
IP=dhcp
DHCPClient=dhcpcd

netctl start enp0s3-dhcp
netctl enable enp0s3-dhcp
ping -c 3 google.com

reboot and check the internet connection again
ping -c 3 google.com
</pre>

<h3>user craig</h3>

<pre>
pacman -S zsh

useradd --create-home --shell /usr/bin/zsh craig
passwd craig
usermod -a -G wheel craig

Enable vim for visudo
As root: vim /etc/sudoers -> must :w!
Near the top add this line
Defaults  editor=/usr/bin/vim

visudo
uncomment this line:
%wheel ALL=(ALL) NOPASSWD: ALL
</pre>

<h3>install mate</h3>

<pre>
pacman -S xorg xorg-server
pacman -S mate mate-extra
pacman -S lightdm lightdm-gtk-greeter
systemctl enable lightdm.service
</pre>

<h3>virtualbox guest additions</h3>
<h4>
  <a href="https://wiki.archlinux.org/index.php/VirtualBox#Install_the_Guest_Additions" target="_blank">wiki.archlinux.org/</a>
  Install the Guest Additions
</h4>
<pre>
VirtualBox Guest Additions provides drivers and applications that optimize the guest operating system including improved image resolution and better control of the mouse. Within the installed guest system, install:

virtualbox-guest-utils and xf86-video-vmware (FS#61183) for VirtualBox Guest utilities with X support

Both packages will make you choose a package to provide guest modules:

for the default linux kernel choose virtualbox-guest-modules-arch
</pre>

<h3>git</h3>
<pre>
pacman -S git tig
</pre>

<h3>yay</h3>
<pre>
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
</pre>

<h3>brave browser</h3>
<pre>
yay brave-bin
</pre>

<h4>
  <a href="https://www.youtube.com/watch?v=WNkm6hq0pmw" target="_blank">sudoadmins - Linux Guides youtube</a>
  How to Enable Neworking in Arch Linux
</h4>

<pre>
ls -1 /etc/systemd/system/multi-user.target.wants/netctl*
rm /etc/systemd/system/multi-user.target.wants/netctl*

ip link
ip link show dev enp0s3

systemctl status dhcpcd@enp0s3
systemctl start dhcpcd@enp0s3
systemctl enable dhcpcd@enp0s3
</pre>

<pre>
pacman -Syyu
pacman -S alsa-utils
pacman -S alsa-plugins
  late4r apulse from aur
pacman -S mate mate-extra
</pre>

<h4>
  <a href="https://wiki.archlinux.org/index.php/reflector" target="_blank">wiki.archlinux.org</a>
  Reflector
</h4>

Reflector is a script which can retrieve the latest mirror list from
the MirrorStatus page, filter the most up-to-date mirrors, sort them by
speed and overwrite the file /etc/pacman.d/mirrorlist

<h2>
  <a href="https://wiki.archlinux.org/index.php/GRUB" target="_blank">wiki.archlinux.org/</a>
  Grub
</h2>

GRUB (GRand Unified Bootloader) is a multi-boot loader. It is derived
from PUPA which was a research project to develop the replacement of
what is now known as GRUB Legacy. The latter had become too difficult
to maintain and GRUB was rewritten from scratch with the aim to provide
modularity and portability [1]. The current GRUB is also referred to as
GRUB 2 while GRUB Legacy corresponds to versions 0.9x.

<h4>
  <a href="https://www.fosslinux.com/6832/how-to-install-mate-desktop-on-arch-linux.htm" target="_blank">fosslinux.com/</a>
  How to install MATE Desktop on Arch Linux
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/GRUB#Generate_the_main_configuration_file" target="_blank">wiki.archlinux.org/</a>
  Generate the main configuration file
</h4>

<h2>network</h2>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration#Tips_and_tricks" target="_blank">wiki.archlinux.org/</a>
  Network Configuration - Tips and tricks
</h4>

<h1>youtube videos on install</h1>

<h4>
  <a href="https://www.youtube.com/watch?v=q6RP3-fpsgU" target="_blank">Piece of Cake youtube</a>
  Fastest way to setup WIFI connection in Arch Linux
</h4>

<pre>
cd /etc/netctl
cp examples/wireless-wpa
</pre>

<h4>
  <a href="https://www.youtube.com/watch?v=dOXYZ8hKdmc" target="_blank">Average Linux User youtube</a>
  Arch Linux UEFI step-by-step installation guide
</h4>

<pre>
16m 40s - grub
18m 50s - grub config file
</pre>

<h4>
  <a href="https://www.youtube.com/watch?v=GKdPSGb9f5s" target="_blank">Average Linux User</a>
  Installing Arch Linux in less than 10 minutes
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=-zb8220uUiA" target="_blank">ufoludek youtube</a>
  [NEW - 2019] Installation Guide - Arch Linux (UEFI & systemd-boot)
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=d91_jQ6qJb8" target="_blank">eznix youtube</a>
  Arch Linux Install - EFI UEFI System - Base MetaPackage - LXQt
</h4>

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
