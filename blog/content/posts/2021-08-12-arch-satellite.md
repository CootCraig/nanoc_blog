---
title: "Arch Satellite 2021-08-21"
created_at: Thu Aug 12 21:13:39 MDT 2021
kind: article
tags:
  - arch_on_toshiba
  - arch_uefi
  - arch_linux
  - arch
  - laptop
  - notebook_computer
  - wpa_supplicant
---

<pre>
Thu Aug 12 16:57:27 MDT 2021
current HD - removed
2TB BarraCuda
SN: ZDZETYVN
</pre>
<pre>
Thu Aug 12 18:50:57 MDT 2021
new HD
Western Digital
WD Blue
1TB WD10SPZX
sn WX22a21jnshc
</pre>

<pre>
Fri Aug 13 10:55:27 MDT 2021
UEFI install - had to set bios
</pre>

<h4>hostname</h4>
(private name fail)
Create the hostname file:
/etc/hostname
arch-toshiba-20210821


<h4>Network tools used</h4>
<pre>
systemd-networkd
dhcpcd
wpa_supplicant
</pre>

<h1>Install log</h1>
<h4>Arch ISO image</h4>
archlinux-2021.08.01-x86_64.iso

<pre>
The default console keymap is US.

Verify the boot mode
To verify the boot mode, list the efivars directory:
 ls /sys/firmware/efi/efivars

ip link
2: enp2s0
3: wlan0

ping -c 3 google.com - using wired ethernet

Use timedatectl(1) to ensure the system clock is accurate:
timedatectl set-ntp true 

partition hd
/dev/sda1 512M EFI system
/dev/sda2 16G linux swap
/dev/sda3 915G linux filesystem

mkfs.ext4 /dev/sda3
mkswap /dev/sda2
mkfs.fat -F32 /dev/sda1

pacman -Syy
pacman -S python3
reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

mount /dev/sda3 /mnt
mkdir /mnt/efi

mount /dev/sda1 /mnt/efi

pacstrap /mnt base base-devel linux linux-headers linux-firmware dhcpcd wpa_supplicant vim python3 reflector

genfstab -U /mnt >> /mnt/etc/fstab

arch-chroot /mnt

ln -sf /usr/share/zoneinfo/America/Denver /etc/localtime
hwclock --systohc

Edit /etc/locale.gen and uncomment en_US.UTF-8 UTF-8
locale-gen

Create the locale.conf(5) file, and set the LANG variable accordingly:
/etc/locale.conf
LANG=en_US.UTF-8

Create the hostname file:
/etc/hostname
arch-toshiba-20210813

Add matching entries to hosts(5):
/etc/hosts
127.0.0.1 localhost
::1   localhost
127.0.1.1 myhostname.localdomain  myhostname

passwd

pacman -S grub efibootmgr
grub-install --target=i386-pc /dev/sdX
grub-mkconfig -o /boot/grub/grub.cfg

exit # arch-chroot
reboot
  remove install thumb drive

Success
</pre>


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

