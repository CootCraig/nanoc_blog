---
title: "Arch Satellite Wpas"
created_at: Tue Dec 10 19:08:40 MST 2019
kind: article
tags:
  - arch_on_toshiba
  - arch_linux
  - arch
  - laptop
  - notebook_computer
  - wpa_supplicant
---
Model is Toshiba Satellite C55-C5390
This is a UEFI install.

<h4>hostname</h4>
arch-toshiba-p7pzr

See <a href="/posts/2015/04/generate-private-hostnames/" target="_blank">Generate Private Host Names</a>

13 -> p7pzr - arch-toshiba-p7pzr - 20191211 - Toshiba Satellist arch linux systemd-networkd dhcpcd wpa_supplicant

<h4>Network tools used</h4>
<pre>
systemd-networkd
dhcpcd
wpa_supplicant
</pre>

<h1>Install log</h1>
hostname
arch-toshiba-p7pzr

<h4>Arch ISO image</h4>
<pre>
du -sm archlinux-2019.12.01-x86_64.iso 
640	archlinux-2019.12.01-x86_64.iso

Copy iso to a thumb drive.
lsblk - to get path to media
sudo dd bs=4M if=/home/craig/Downloads/archlinux-2019.12.01-x86_64.iso of=/dev/sde status=progress oflag=sync
</pre>

<pre>
boot iso image archlinux-2019.12.01-x86_64.iso 

ping -c 3 google.com - using wired ethernet

pacman -Syy
pacman -S python3
pacman -S reflector
reflector -c "United States" -f 20 -l 20 --save /etc/pacman.d/mirrorlist

fdisk -l -> /dev/sda is hd
Use existing hd partions

mkfs.vfat /dev/sda1
mkfs.ext4 /dev/sda3

mount /dev/sda3 /mnt

pacstrap /mnt base base-devel linux linux-headers linux-firmware dhcpcd wpa_supplicant vim python3 reflector

reflector -c "United States" -f 20 -l 20 --save /mnt/etc/pacman.d/mirrorlist

mkdir /mnt/boot/efi
mount /dev/sdx1 /mnt/boot/efi

genfstab -U -p /mnt >> /mnt/etc/fstab

arch-chroot /mnt

ln -sf /usr/share/zoneinfo/America/Denver /etc/localtime
hwclock --systohc

Uncomment en_US.UTF-8 UTF-8 and other needed locales in /etc/locale.gen, and generate them with:
 # locale-gen

Create the locale.conf(5) file, and set the LANG variable accordingly:
/etc/locale.conf
LANG=en_US.UTF-8

Create file /etc/hostname
arch-toshiba-p7pzr 

Add matching entries to /etc/hosts
127.0.0.1 localhost
::1 localhost
127.0.1.1 arch-toshiba-p7pzr .localdomain arch-toshiba-p7pzr

set the root password
 # passwd

pacman -S broadcom-wl-dkms
pacman -S iwd
pacman -S intel-ucode
pacman -S dosfstools
pacman -S grub efibootmgr

grub-install --target=x86_64-efi --efi-directory=/boot/efi --bootloader-id=GRUB
grub-mkconfig -o /boot/grub/grub.cfg

exit - the chroot
shutdown -h now
pull the iso thumb drive.
</pre>

<h3>boot the hd, no wired ethernet</h3>
<h4>systemd/network/ configuration files</h4>
<pre>
ip link -> enp2s0 wlp1s0
</pre>
<pre>
/etc/systemd/network/20-wired.network
[Match]
Name=enp2s0

[Network]
DHCP=ipv4

[DHCP]
RouteMetric=10
</pre>
<pre>
/etc/systemd/network/25-wireless.network
[Match]
Name=wlp1s0

[Network]
DHCP=ipv4

[DHCP]
RouteMetric=20
</pre>

<h4>enable Dhcpcd#10-wpa_supplicant hook</h4>
Enable this hook by creating a symbolic link, which ensures the current version is used, even after package updates:
<pre>
ln -s /usr/share/dhcpcd/hooks/10-wpa_supplicant /usr/lib/dhcpcd/dhcpcd-hooks/
</pre>

The 10-wpa_supplicant hook, if enabled, automatically launches WPA supplicant on wireless interfaces. It is started only if:
<pre>
no wpa_supplicant process is already listening on that interface.
a wpa_supplicant configuration file exists. dhcpcd checks
/etc/wpa_supplicant/wpa_supplicant-interface.conf
</pre>

<h4> wpa_supplicant configuration files</h4>
<pre>
/etc/wpa_supplicant/wpa_supplicant-wlp1s0.conf - check interface name

wpa_passphrase MYSSID passphrase > /etc/wpa_supplicant/wpa_supplicant-wlp1s0.conf
</pre>

<h4>ln resolve/stub-resolv.conf</h4>
<pre>
 ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
</pre>

<h4>start/enable services</h4>
<pre>
start/enable systemd-networkd.service.
start/enable systemd-resolved.service
start/enable dhcpcd@eth0.service
start/enable dhcpcd@wlan0.service
start enable wpa_supplicant@wlan0.service
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

<h3>ssh</h3>
<pre>
pacman -S openssh
systemctl start/enable sshd.service

ssh-keygen
ssh-copy-id username@host-address
</pre>

<h3>automount</h3>
<pre>
pacman -S udisks2 udevil
chmod -s /usr/bin/udevil
</pre>

<h3>ntp</h3>
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

<h3>yay</h3>
<pre>
git clone https://aur.archlinux.org/yay.git
cd yay
makepkg -si
</pre>

<h1>Links</h1>

<h2>
  <a href="https://wiki.archlinux.org/index.php/Systemd-networkd" target="_blank">wiki.archlinux.org</a>
  systemd-networkd
</h2>
systemd-networkd is a system daemon that manages network configurations. It detects and configures network devices as they appear; 
<pre>
To use systemd-networkd, start/enable systemd-networkd.service.
It is optional to also start/enable systemd-resolved.service
</pre>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Systemd-networkd#Configuration_examples" target="_blank">wiki.archlinux.org</a>
  Systemd-networkd#Configuration_examples
</h4>
<pre>
/etc/systemd/network/20-wired.network
[Match]
Name=enp1s0

[Network]
DHCP=ipv4

[DHCP]
RouteMetric=10
</pre>
<pre>
/etc/systemd/network/25-wireless.network
[Match]
Name=wlp2s0

[Network]
DHCP=ipv4

[DHCP]
RouteMetric=20
</pre>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Systemd-networkd#Configuration_files" target="_blank">wiki.archlinux.org</a>
  Systemd-networkd#Configuration_files
</h4>
Configuration files are located in /usr/lib/systemd/network, the
volatile runtime network directory /run/systemd/network and the
local administration network directory /etc/systemd/network. Files in
/etc/systemd/network have the highest priority.

Tip: To override a system-supplied file in /usr/lib/systemd/network in
a permanent manner (i.e even after upgrade), place a file with same name
in /etc/systemd/network and symlink it to /dev/null


<h4>
  <a href="https://wiki.archlinux.org/index.php/Systemd-desolved#DNS" target="_blank">wiki.archlinux.org</a>
  Systemd-resolved#DNS
</h4>
Using the systemd DNS stub file - the systemd DNS stub file
/run/systemd/resolve/stub-resolv.conf contains the local stub
127.0.0.53 as the only DNS server and a list of search domains. This
is the recommended mode of operation. The service users are advised to
redirect the /etc/resolv.conf file to the local stub DNS resolver file
/run/systemd/resolve/stub-resolv.conf managed by systemd-resolved. This
propagates the systemd managed configuration to all the clients. This
can be done by replacing /etc/resolv.conf with a symbolic link to the
systemd stub:
<pre>
 ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf
</pre>

<h2>
  <a href="https://wiki.archlinux.org/index.php/Dhcpcd" target="_blank">wiki.archlinux.org</a>
  Dhcpcd
</h2>
dhcpcd is a DHCP and DHCPv6 client. It is currently the most feature-rich open source DHCP client, see the 
<a href="https://roy.marples.name/projects/dhcpcd" target="_blank">home page</a>
for the full list of features.

<h4>
  <a href="https://wiki.archlinux.org/index.php/Dhcpcd#Running" target="_blank">wiki.archlinux.org</a>
  Dhcpcd#Running
</h4>
To start the daemon for all network interfaces, start/enable
dhcpcd.service.

To start the daemon for a specific interface alone, start/enable the
template unit dhcpcd@interface.service, where interface can be found
with Network configuration#Listing network interfaces.

Using the template unit is recommended; see #dhcpcd and systemd network
interfaces for details.

<h4>
  <a href="https://wiki.archlinux.org/index.php/Dhcpcd#10-wpa_supplicant" target="_blank">wiki.archlinux.org</a>
  Dhcpcd#10-wpa_supplicant
</h4>

Enable this hook by creating a symbolic link, which ensures the current version is used, even after package updates:
<pre>
ln -s /usr/share/dhcpcd/hooks/10-wpa_supplicant /usr/lib/dhcpcd/dhcpcd-hooks/
</pre>

The 10-wpa_supplicant hook, if enabled, automatically launches WPA supplicant on wireless interfaces. It is started only if:
<pre>
no wpa_supplicant process is already listening on that interface.
a wpa_supplicant configuration file exists. dhcpcd checks
/etc/wpa_supplicant/wpa_supplicant-interface.conf
</pre>

<h3>
  <a href="https://wiki.archlinux.org/index.php/network_configuration#listing_network_interfaces" target="_blank">wiki.archlinux.org</a>
  listing network interfaces
</h3>
both wired and wireless interface names can be found via ls /sys/class/net
or ip link. note that lo is the loop device and not used in making
network connections.

<h2>
<a href="https://wiki.archlinux.org/index.php/WPA_supplicant" target="_blank">wiki.archlinux.org</a>
  WPA_supplicant
</h2>
wpa_supplicant is a cross-platform supplicant with support for WEP,
WPA and WPA2 (IEEE 802.11i). It is suitable for desktops, laptops and
embedded systems.

Install the wpa_supplicant package, which includes the main program
wpa_supplicant, the passphrase tool wpa_passphrase, and the text
front-end wpa_cli.

<h4>
  <a href="https://wiki.archlinux.org/index.php/WPA_supplicant#At_boot_(systemd)" target="_blank">wiki.archlinux.org</a>
  WPA_supplicant#At_boot_(systemd)
</h4>
The wpa_supplicant package provides multiple systemd service files:

wpa_supplicant@interface.service - accepts the interface name as an argument and starts the wpa_supplicant daemon for this interface. It reads a /etc/wpa_supplicant/wpa_supplicant-interface.conf configuration file.

<h4>
  <a href="https://wiki.archlinux.org/index.php/WPA_supplicant#Configuration" target="_blank">wiki.archlinux.org</a>
  Configuration
</h4>
As explained in #Connecting with wpa_passphrase, a basic configuration file can be generated with:

wpa_passphrase MYSSID passphrase > /etc/wpa_supplicant/example.conf

This will only create a network section. A configuration file with also
the ability of #Connecting with wpa_cli and some other common options
may look like:
<pre>
/etc/wpa_supplicant/example.conf
Giving configuration update rights to wpa_cli
ctrl_interface=/run/wpa_supplicant
ctrl_interface_group=wheel
update_config=1

AP scanning
ap_scan=1

ISO/IEC alpha2 country code in which the device is operating
country=US
</pre>

<pre>
  network section generated by wpa_passphrase
network={
    ssid="MYSSID"
    psk=59e0d07fa4c7741797a4e394f38a5c321e3bed51d54ad5fcbd3f84bc7415d73d
}
</pre>
If security is not a concern, the passphrase can also be defined in
clear text in the network section by enclosing it in quotes:

psk="passphrase"

<h3>Swap</h3>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Swap#Swap_partition" target="_blank">wiki.archlinux.org</a>
  Swap Partition
</h4>
<b>Swap Partition</b>

A swap partition can be created with most GNU/Linux partitioning
tools. Swap partitions are typically designated as type 82. Even though
it is possible to use any partition type as swap, it is recommended to
use type 82 in most cases since systemd will automatically detect it
and mount it (see below).

To set up a partition as Linux swap area, the mkswap command is used. For example:
<pre>
mkswap /dev/sdxy
</pre>
Warning: All data on the specified partition will be lost.

To enable the device for paging:
<pre>
swapon /dev/sdxy
</pre>

To enable this swap partition on boot, add an entry to /etc/fstab:
<pre>
UUID=device_UUID none swap defaults 0 0
where the device_UUID is the UUID of the swap space.
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
