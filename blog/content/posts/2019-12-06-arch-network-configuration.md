---
title: "Arch Network Configuration"
created_at: Fri Dec  6 09:47:17 MST 2019
kind: article
tags:
  - arch_linux
  - arch_network_configuration
  - network_configuration
  - linux
---

<h2>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">wiki.archlinux.org</a>
  Network configuration
</h2>
Medium-specifics are handled in the 
<a href="https://wiki.archlinux.org/index.php/Network_configuration/Ethernet" target="_blank">/Ethernet</a>
and 
<a href="https://wiki.archlinux.org/index.php/Network_configuration/Wireless" target="_blank">/Wireless subpages</a>.

<h3>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration/Ethernet" target="_blank">wiki.archlinux.org</a>
  Network configuration/Ethernet
</h3>
This article describes Ethernet specifics, general network configuration is covered in 
<a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">Network configuration</a>.

<h3>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration/Wireless" target="_blank">wiki.archlinux.org</a>
  Network configuration/Wireless
</h3>
The main article on network configuration is 
<a href="https://wiki.archlinux.org/index.php/Network_configuration" target="_blank">Network configuration</a>.

<h2>
  <a href="https://wiki.archlinux.org/index.php/Netctl" target="_blank">wiki.archlinux.org</a>
  netctl
</h2>

<h2>broadcom-wl for Toshiba Satellite</h2>

<h4>
  <a href="https://wiki.archlinux.org/index.php/broadcom_wireless#broadcom-wl" target="_blank">wiki.archlinux.org/</a>
  broadcom_wireless broadcom-wl
</h4>

There are two variants of the restrictively licensed driver:

the regular variant: <a href="https://www.archlinux.org/packages/?name=broadcom-wl" target="_blank">broadcom-wl</a>

the DKMS variant: <a href="https://www.archlinux.org/packages/?name=broadcom-wl-dkms" target="_blank">broadcom-wl-dkms</a>

Tip: The DKMS variant broadcom-wl-dkms

<ul>
  <li>is kernel agnostic. This means it supports different kernels you may use (e.g. linux-ckAUR).</li>
  <li>is kernel-release agnostic, too. It will be automatically rebuilt after every kernel upgrade or fresh installation. If you use broadcom-wl or another kernel release dependant variant (e.g. broadcom-wl-ckAUR), it may happen that kernel upgrades break wireless from time to time until the packages are in sync again.</li>
  <li>will need the linux-headers package for the installed kernel(s) in order to build the module. Those packages are optional to the DKMS package and will need to be installed manually.</li>
</ul>

<b>Interface is showing but not allowing connections</b>
<pre>
Append the following kernel parameter:

b43.allhwsupport=1
</pre>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Broadcom_wireless#Driver_selection" target="_blank">wiki.archlinux.org/</a>
  Driver selection
</h4>
To know what driver(s) are operable on the computer's Broadcom wireless network device, the device ID and chipset name will need to be detected. Cross-reference them with the driver list of supported brcm80211 and b43 devices.
<pre>
$ lspci -vnn -d 14e4:
</pre>

<b>b43</b>
Two reverse-engineered open-source drivers are built-in to the kernel:
b43 and b43legacy. b43 supports most newer Broadcom chipsets, while
the b43legacy driver only supports the early BCM4301 and BCM4306 rev.2
chipsets. To avoid erroneous detection of your WiFi card's chipset,
blacklist the unused driver.

Both of these drivers require non-free firmware to function. 
Install
<a href="https://aur.archlinux.org/packages/b43-firmware/" target="_blank">b43-firmware AUR</a>
or
<a href="https://aur.archlinux.org/packages/b43-firmware-classic/" target="_blank">b43-firmware-classic AUR</a>.

<h1>
  <a href="https://wiki.archlinux.org/index.php/Iwd" target="_blank">wiki.archlinux.org</a>
  iwd
</h1>

iwd (iNet wireless daemon) is a wireless daemon for Linux written by
Intel. The core goal of the project is to optimize resource utilization
by not depending on any external libraries and instead utilizing features
provided by the Linux Kernel to the maximum extent possible.

iwd can work in standalone mode or in combination with comprehensive network managers like 
<a href="https://wiki.archlinux.org/index.php/ConnMan" target="_blank">ConnMan</a>,
<a href="https://wiki.archlinux.org/index.php/Systemd-networkd" target="_blank">systemd-networkd</a>
and
<a href="https://wiki.archlinux.org/index.php/NetworkManager#Using_iwd_as_the_Wi-Fi_backend" target="_blank">NetworkManager</a>.

<h4>
  <a href="https://jlk.fjfi.cvut.cz/arch/manpages/man/iwd.config.5" target="_blank">jlk.fjfi.cvut.cz</a>
  Arch manual pages - iwd.config - Configuration file for wireless daemon
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Iwd#Optional_configuration" target="_blank">wiki.archlinux.org</a>
  Iwd#Optional configuration
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Systemd-networkd" target="_blank">wiki.archlinux.org</a>
  systemd-networkd
</h4>

systemd-networkd is a system daemon that manages network
configurations. It detects and configures network devices as they appear;
it can also create virtual network devices. This service can be especially
useful to set up complex network configurations for a container managed
by systemd-nspawn or for virtual machines. It also works fine on simple
connections.

The systemd package is part of the default Arch installation and contains
all needed files to operate a wired network. Wireless adapters, covered
later in this article, can be set up by services, such as wpa_supplicant
or iwd.

<h4>
  <a href="https://wiki.archlinux.org/index.php/Network_configuration#Listing_network_interfaces" target="_blank">wiki.archlinux.org</a>
  Listing network interfaces
</h4>

Both wired and wireless interface names can be found via ls /sys/class/net or ip link. Note that lo is the loop device and not used in making network connections.

Wireless device names can also be retrieved using iw dev. See also 
<a href="https://wiki.archlinux.org/index.php/Network_configuration/Wireless#Get_the_name_of_the_interface" target="_blank">/Wireless#Get the name of the interface</a>.

<h4>
  <a href="https://bbs.archlinux.org/viewtopic.php?id=237074" target="_blank">bbs.archlinux.org</a>
  Index» Networking, Server, and Protection» The IWD thread
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/Iwd#Installation" target="_blank">wiki.archlinux.org</a>
  iwd installation and usage notes
</h4>

<b>Installation:</b>

Install the iwd package.

<b>Usage</b>

The iwd package provides the client program iwctl, the daemon iwd and the Wi-Fi monitoring tool iwmon.

Start/enable iwd.service so it can be controlled using the iwctl command.

<h4>
  <a href="https://iwd.wiki.kernel.org/start" target="_blank">iwd.wiki.kernel.org</a>
  iwd start
</h4>
<b>Introduction</b>
iNet Wireless Daemon (iwd) project aims to provide a comprehensive
Wi-Fi connectivity solution for Linux based devices. The core goal
of the project is to optimize resource utilization: storage, runtime
memory and link-time costs. This is accomplished by not depending on any
external libraries and utilizes features provided by the Linux Kernel to
the maximum extent possible. The result is a self-contained environment
that only depends on the Linux Kernel and the runtime C library.

<h4>
  <a href="https://iwd.wiki.kernel.org/" target="_blank">iwd.wiki.kernel.org</a>
  iwd
</h4>
iNet Wireless Daemon (iwd) project aims to provide a comprehensive
Wi-Fi connectivity solution for Linux based devices. The core goal
of the project is to optimize resource utilization: storage, runtime
memory and link-time costs. This is accomplished by not depending on any
external libraries and utilizes features provided by the Linux Kernel to
the maximum extent possible. The result is a self-contained environment
that only depends on the Linux Kernel and the runtime C library.

<h4>
  <a href="https://iwd.wiki.kernel.org/gettingstarted" target="_blank">iwd.wiki.kernel.org</a>
  Getting Started with iwd
</h4>

So you want to try out iwd but do not know where to start? You're in
the right place. This document will cover building iwd from source and
basic WPA-Personal (pre-shared key) type use cases. For WPA-Enterprise /
802.1X authentication setup, see the relevant topic pages.

<b>Connecting to a Network</b>

For this HOWTO we will be using iwd's command line client, iwctl, starting
it from the iwd build directory. iwctl should be shipped by default with
most distributions, so if you are using iwd from a distribution package,
you can simply invoke 'iwctl'.

<h4>
  <a href="https://iwd.wiki.kernel.org/networkconfigurationsettings" target="_blank">iwd.wiki.kernel.org</a>
  iwd Network configuration settings
</h4>

IWD stores information on known networks, and reads information on
pre-provisioned networks, from small text configuration files. Those files
live in $LIBDIR/iwd, by default /var/lib/iwd. You can create, modify or
remove those files. IWD monitors the directory for changes and will also
modify these files in the course of network connections as necessary.

For most up-to-date information on network settings see the iwd.network(5) man page
shipped with
<a href="https://git.kernel.org/pub/scm/network/wireless/iwd.git/tree/src/iwd.network.rst" target="_blank">IWD (source)</a>,
which incorporates most of this page's content now.

<h4>
  <a href="https://www.youtube.com/watch?v=p7d5iXUU3qE" target="_blank">All Systems Go! youtube</a>
  iwd - State of the union - Sep 21, 2019
</h4>


<h4>
  <a href="https://media.ccc.de/v/ASG2019-147-iwd-state-of-the-union" target="_blank">media.ccc.de</a>
  iwd - State of the union by Marcel Holtmann - 2019-09-21
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=QIqT2obSPDk" target="_blank">The Linux Foundation youtube</a>
  The New Wi-Fi Experience for Linux - Marcel Holtmann, Intel - Oct 25, 2018
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=F2Q86cphKDo" target="_blank">All Systems Go! youtube</a>
  2017 Update on new WiFi daemon for Linux - Oct 22, 2017
</h4>

<h4>
  <a href="https://www.youtube.com/watch?v=KM2rF4oF7v0" target="_blank">Kai Hendry youtube</a>
  iwd: a wpa_supplicant alternative for Archers?
</h4>

<h4>
  <a href="https://wiki.archlinux.org/index.php/WPA_supplicant" target="_blank">wiki.archlinux.org</a>
  WPA supplicant
</h4>

wpa_supplicant is a cross-platform supplicant with support for WEP,
WPA and WPA2 (IEEE 802.11i). It is suitable for desktops, laptops and
embedded systems. It is the IEEE 802.1X/WPA component that is used in the
client stations. It implements key negotiation with a WPA authenticator
and it controls the roaming and IEEE 802.11 authentication/association
of the wireless driver.

<h4>
  <a href="https://w1.fi/wpa_supplicant/" target="_blank">w1.fi/</a>
  Linux WPA/WPA2/IEEE 802.1X Supplicant
</h4>

<h4>
  <a href="https://wireless.wiki.kernel.org/en/users/documentation/wpa_supplicant" target="_blank">wireless.wiki.kernel.org</a>
  wpa_supplicant Linux documentation page
</h4>

wpa_supplicant is a userspace application which works as a WPA supplicant
and SME (to handle initiating MLME commands). This page is dedicated
only to the documentation relating to the Linux aspects of wpa_supplicant.

<h4>
  <a href="https://wiki.archlinux.org/index.php/WPA_supplicant" target="_blank">wiki.archlinux.org</a>
  wpa_supplicant
</h4>

<h1>Kernel Parameters</h1>
<h4>
  <a href="https://wiki.archlinux.org/index.php/Kernel_module#Blacklisting" target="_blank">wiki.archlinux.org/</a>
  Kernel_module#Blacklisting
</h4>

<h4>
  <a href="https://www.cyberciti.biz/faq/display-view-linux-kernel-parameters-for-booted/" target="_blank">cyberciti.biz/</a>
  How to view Linux kernel parameters for currently booted system
<h4>

<h4>
  <a href="https://documentation.commvault.com/commvault/v11/article?p=24634.htm#o24637" target="_blank">documentation.commvault.com</a>
  Kernel Parameters Configuration - Linux
<h4>

<h4>
  <a href="https://gerardnico.com/os/linux/kernel_parameter" target="_blank">gerardnico.com/</a>
  Linux - Kernel parameters (configuration files)
<h4>

<h2>dhcpcd and wpa_supplicant</h2>
<h4>
  <a href="https://wiki.archlinux.org/index.php/WPA%20supplicant" target="_blank">wiki.archlinux.org</a>
  WPA supplicant - Connection
</h4>

<h5>Tip:</h5>
dhcpcd has a hook that can launch wpa_supplicant implicitly, see 
<a href="https://wiki.archlinux.org/index.php/Dhcpcd#10-wpa_supplicant" target="_blank">dhcpcd#10-wpa_supplicant</a>.

While testing arguments/configuration it may be helpful to launch
wpa_supplicant in the foreground (i.e. without the -B option) for better
debugging messages.

<h4>
  <a href="https://wiki.archlinux.org/index.php/Dhcpcd#10-wpa_supplicant" target="_blank">wiki.archlinux.org</a>
   Dhcpcd#10-wpa_supplicant
</h4>

Enable this hook by creating a symbolic link, which ensures the current version is used, even after package updates:

<pre>
 # ln -s /usr/share/dhcpcd/hooks/10-wpa_supplicant /usr/lib/dhcpcd/dhcpcd-hooks/
</pre>

The 10-wpa_supplicant hook, if enabled, automatically launches WPA supplicant on wireless interfaces. It is started only if:

<pre>
no wpa_supplicant process is already listening on that interface.
a wpa_supplicant configuration file exists. dhcpcd checks
/etc/wpa_supplicant/wpa_supplicant-interface.conf
/etc/wpa_supplicant/wpa_supplicant.conf
/etc/wpa_supplicant-interface.conf
/etc/wpa_supplicant.conf
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
