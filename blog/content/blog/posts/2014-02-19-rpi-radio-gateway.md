---
title: "Raspberry Pi Radio Gateway Build"
created_at: Wed Feb 19 17:32:49 MST 2014
kind: article
tags: [ 'raspberry_pi','arduino', 'radio', 'moteino_home_automation']
---

## Overview

A Raspberry Pi based gateway to distributed Moteino radio connected Arduinos.

* Moteino USB attached as radio interface
* Raspberry Pi hosted gateway based on a JRuby/JVM/Reel based HTTP server

## Looking for a minimal server install

### [Raspbian Wheezy armhf Raspberry Pi minimal image](http://www.linuxsystems.it/raspbian-wheezy-armhf-raspberry-pi-minimal-image/)

After the Debian Wheezy armel image I made a new one based on Raspbian
armhf. This one is compiled with hard float support, so basically
floating point operations are MUCH faster because they are done in
hardware instead of software emulation :)

#### Features include:

* A minimal Raspbian Wheezy installation (similar to a netinstall)
* Hard Float binaries: floating point operations are done in hardware instead of software emulation, that means higher performances
* Disabled incremental updates, means apt-get update is much faster
* Workaround for a kernel bug which hangs the Raspberry Pi under heavy network/disk loads
* 3.6.11+ hardfp kernel with latest raspberry pi patches
* Latest version of the firmwares
* Fits 1GB SD cards
* A very tiny 118MB image: even with a 2GB SD there is a lot of free space
* ssh starts by default
* The clock is automatically updated using ntp
* IPv6 support
* Just 14MB of ram usage after the boot

### Other Linux images passed over

* [Moebius v1.1.1 available](http://moebiuslinux.sourceforge.net/) 
* [Raspbian Server Edition Version 2.3](http://sirlagz.net/2013/03/04/raspbian-server-edition-version-2-3-1gb-image/)
* [raspbian-ua-netinst - Raspbian unattended netinstaller](http://www.raspberrypi.org/phpBB3/viewtopic.php?f=66&t=50310)

The most interesting on here is the raspbian-ua-netinst.  There is Github repo for it:

[Github repo with raspbian-ua-netinst](https://github.com/hifi/raspbian-ua-netinst)

I had previously used the Raspbian net installer here: [RaspbianInstaller](http://www.raspbian.org/RaspbianInstaller)

But the notes now say: Currently we reccomend using hifi's
raspbian-ua-netinst instead if you want to use an installer rather than
a pre-installed image.


## Dark Basic install notes

[Dark Basic install page](http://www.linuxsystems.it/raspbian-wheezy-armhf-raspberry-pi-minimal-image/)

[Dark Basic Raspbian SDHC Boot image](http://raspberrypi.mirrors.node2.hadrill.org.uk/darkbasic/raspbian_wheezy_20130923.img.7z)

### Start with the Dark Basic install notes

You will have to extract the image with p7zip:

<pre><code>
7za x raspbian_wheezy_20130923.img.7z
</code></pre>

Then flash it to your SD with dd:

<pre><code>
$ sudo dd bs=1M if=raspbian_wheezy_20130923.img of=/dev/sdc
</code></pre>

Finally, if you have an sd larger than 1GB, grow the partition with gparted (first move the swap partition at the end).

<pre><code>
$ sudo gparted /dev/sdc
</code></pre>

At this point install the SDHC card on the RPI, plug in the ethernet cable,
plug in the USB terminal cable which will power up the RPI.

Now use screen to watch the boot up messages.

Able to use screen to connect on laptop:

<pre><code>
$ sudo screen /dev/ttyUSB0 115200
</code></pre>

When connected check the stty values.

<pre><code>
 $ stty -a
</code></pre>

Attempts to use socat instead of screen

<pre><code>
 $ sudo socat - /dev/ttyUSB0,b115200
 $ sudo socat - /dev/ttyUSB0,b115200,raw # no
 $ sudo socat - /dev/ttyUSB0,b115200,cs7 # no
 $ sudo socat - /dev/ttyUSB0,b115200,parenb,cs7 # no
 $ sudo socat - /dev/ttyUSB0,b115200,parenb,cs8 # no
 $ sudo socat - /dev/ttyUSB0,b115200,raw,cs7 # no
 $ sudo socat - /dev/ttyusb0,b115200,raw,cs8,start=1,stop=1 # no
 $ sudo socat - /dev/ttyusb0,b115200,parenb=false,raw,cs8,start=1,stop=1 # no
 $ sudo socat - /dev/ttyUSB0,b115200,raw,cs8 # no
 $ sudo socat - /dev/ttyUSB0,b115200,raw,cs7 # no
 $ sudo socat - /dev/ttyUSB0,b115200,raw,cs8 # no
 $ sudo socat - /dev/ttyUSB0,b115200,cs8,parenb=0 # close, but not exact
 $ sudo socat - /dev/ttyUSB0,b115200,cs8,parenb=0,stop=0 # close
 $ sudo socat - /dev/ttyUSB0,cs8,parenb=0,stop=0,ixon=1,ixoff=1 # close
 $ sudo socat - /dev/ttyUSB0,cs8,parenb=0,stop=0,ixon=1,ixoff=1,echo=0
 
 $ sudo screen /dev/ttyUSB0 115200
 $ sudo socat /dev/ttyUSB0,raw,echo=0,crlf
 
 $ socat -d -d -d -d -x TCP:localhost:7758 FILE:/dev/ttyUSB0,b9600,raw
</code></pre>

Found the IP address on the router: 192.168.88.223

ssh into the RPI and have a go.
The root password is raspberry.

<pre><code>
 $ ssh root@192.168.88.223
</code></pre>

Change the root password

<pre><code>
passwd
</code></pre>

You will have to reconfigure your timezone after the first boot:

<pre><code>
 # dpkg-reconfigure tzdata
</code></pre>

The keyboard layout:

<pre><code>
 # dpkg-reconfigure console-data
</code></pre>

And the localization:

<pre><code>
 # dpkg-reconfigure locales
</code></pre>

### Some docs

* [Debian Reference](http://www.debian.org/doc/manuals/debian-reference/index.en.html)
* [Debian 7 The Debian Administrator's Handbook](http://debian-handbook.info/browse/wheezy/)
* [Debian New Maintainers' Guide](http://www.debian.org/doc/manuals/maint-guide/index.en.html)

### And proceed

#### Change the hostname

Edit /etc/hostname to have the hostname.

<pre><code>
$ cat /etc/hostname
pika
</code></pre>

Edit /etc/hosts and a line with the new hostname.

<pre><code>
$ cat /etc/hosts
127.0.0.1	localhost
127.0.0.1	pika       <<< added this line with hostname
 ...
</code></pre>

#### Add a user

<pre><code>
# adduser craig

Note that from now on:
# prompt means run as root. 
$ prompt means run as user craig
</code></pre>

<pre><code>
# su - craig
</code></pre>

Generate a key pair for the new user

<pre><code>
$ ssh-keygen
</code></pre>

Check the Debian version

<pre><code>
$ cat /etc/debian_version
7.2
</code></pre>

Update the system

<pre><code>
# apt-get update
# apt-get dist-upgrade
</code></pre>

Install python, vim, tmux, git

<pre><code>
# apt-get install python
</code></pre>

<pre><code>
# apt-get install vim tmux git
</code></pre>

Personalize git

<pre><code>
# git config --global user.name "Your Name Here"
Sets the default name for git to use when you commit

# git config --global user.email "your_email@example.com"
Sets the default email for git to use when you commit
</code></pre>

Set up the vim dotfiles and vundle.

<pre><code>
$ git clone git@github.com:CootCraig/dotfiles_again.git

$ cd dotfiles_again/linux
$ bash ./install.sh 

cd ~/dotfiles_again/windows/vimfiles/bundle
git clone https://github.com/gmarik/vundle.git
</code></pre>

There are some notes on using vundle in the file ~/.vim/bundle/Readme.txt
The Raspbian vim does not have python support, so disable UltiSnips
vim script.  Comment out the following line in ~/.vimrc

<pre><code>
Bundle 'vim-scripts/UltiSnips'
  to
"Bundle 'vim-scripts/UltiSnips'
</code></pre>

And then run BundleInstall.

<pre><code>
in vim. :BundleInstall
</code></pre>

#### password less ssh

These instructions worked fine.

[How to set up ssh so you aren't asked for a password](https://www.debian.org/devel/passwordlessssh)

Add the contents of the public key file into ~/.ssh/authorized_keys on
the remote site (the file should be mode 600).

#### make user a sudoer

<pre><code>
# apt-get install sudo
# adduser craig sudo
</code></pre>

#### Pause and make a backup of the SDHC image

On the Ubuntu host.

<pre><code>
$ sudo dd bs=1M if=/dev/sdc of=pika_20140220_1441.img
7519+0 records in
7519+0 records out
7884242944 bytes (7.9 GB) copied, 446.404 s, 17.7 MB/s

$ 7za a -t7z pika_20140220_1441.img.7z pika_20140220_1441.img

$ ls -l pika_2014*
-rw-r--r-- 1 craig craig 7884242944 Feb 20 14:49 pika_20140220_1441.img
-rw-r--r-- 1 craig craig  254215741 Feb 20 15:09 pika_20140220_1441.img.7z
</code></pre>



#### Install Compiler tools

<pre><code>
# apt-get install build-essential checkinstall libtool automake uuid-dev

The following extra packages will be installed:
  autoconf autotools-dev binutils bzip2 cpp cpp-4.6 dpkg-dev fakeroot g++ g++-4.6 gcc gcc-4.6 libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libdpkg-perl libfile-fcntllock-perl libgmp10 libgomp1 libltdl-dev
  libltdl7 libmpc2 libmpfr4 libstdc++6-4.6-dev libtimedate-perl m4 make
Suggested packages:
  autoconf2.13 autoconf-archive gnu-standards autoconf-doc gettext binutils-doc bzip2-doc cpp-doc gcc-4.6-locales debian-keyring gcc-4.6-doc libstdc++6-4.6-dbg gcc-multilib manpages-dev automake1.9 flex bison gdb gcc-doc
  libmudflap0-4.6-dev libgcc1-dbg libgomp1-dbg libquadmath-dbg libmudflap0-dbg binutils-gold libtool-doc libstdc++6-4.6-doc automaken gfortran fortran95-compiler gcj make-doc
The following NEW packages will be installed:
  autoconf automake autotools-dev binutils build-essential bzip2 checkinstall cpp cpp-4.6 dpkg-dev fakeroot g++ g++-4.6 gcc gcc-4.6 libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libdpkg-perl
  libfile-fcntllock-perl libgmp10 libgomp1 libltdl-dev libltdl7 libmpc2 libmpfr4 libstdc++6-4.6-dev libtimedate-perl libtool m4 make uuid-dev
0 upgraded, 32 newly installed, 0 to remove and 0 not upgraded.
Need to get 26.8 MB of archives.
After this operation, 69.2 MB of additional disk space will be used.
</code></pre>

#### Zeromq build and install

[Source for stable release 3.2.4](http://download.zeromq.org/zeromq-3.2.4.tar.gz)

This is supported by ffi-rzmq, the JRuby librar I plan to use.
I unpacked for build at:

<pre><code>
# cd /opt/zeromq/zeromq-3.2.4
</code></pre>

The installation will be to /usr/local/

<pre><code>
# ./configure --help
Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]
</code></pre>

Build and install.

<pre><code>
# ./configure
# make
# checkinstall
</code></pre>

A debian package was left here:

<pre><code>
/opt/zeromq/zeromq-3.2.4/zeromq_3.2.4-1_armhf.deb
</code></pre>

#### Set up serial console

From /etc/inittab

<pre><code>
...
# Example how to put a getty on a serial line (for a terminal)
#
#T0:23:respawn:/sbin/getty -L ttyS0 9600 vt100
#T1:23:respawn:/sbin/getty -L ttyS1 9600 vt100
...
</code></pre>

However, this is the device file we see:

<pre><code>
$ ls -l /dev/ttyAMA0
crw-rw---T 1 root dialout 204, 64 Dec 31  1969 /dev/ttyAMA0
</code></pre>

So let's add this line to /etc/inittab

<pre><code>
...
# Example how to put a getty on a serial line (for a terminal)
#
#T0:23:respawn:/sbin/getty -L ttyS0 9600 vt100
T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100
#T1:23:respawn:/sbin/getty -L ttyS1 9600 vt100
...
</code></pre>

[Screen User's Manual](http://www.gnu.org/software/screen/manual/screen.html)


### Post to raspberrypi.org/forum about Edimax EW-7811UN

I have failed to get Wifi working and would like some help.
I'm not sure how how to troubleshoot from here.
Here are some details on my setup.

Using this OS image. I want a minimal install with no X.

[Dark Basic Raspbian SDHC Boot image](http://raspberrypi.mirrors.node2.hadrill.org.uk/darkbasic/raspbian_wheezy_20130923.img.7z)

With this USB wifi plug: Edimax EW-7811UN

Boot time messages include these related to the Edimax plug.

<pre><code>
[    3.232011] usb 1-1.2: new high-speed USB device number 4 using dwc_otg
[    3.364155] usb 1-1.2: New USB device found, idVendor=7392, idProduct=7811
[    3.380505] usb 1-1.2: New USB device strings: Mfr=1, Product=2, SerialNumber=3
[    3.399033] usb 1-1.2: Product: 802.11n WLAN Adapter
[    3.411807] usb 1-1.2: Manufacturer: Realtek
[    3.417625] usb 1-1.2: SerialNumber: 00e04c000001
 ...
[   15.826605] IPv6: ADDRCONF(NETDEV_UP): wlan0: link is not ready
</code></pre>

System reports as.

<pre><code>
root@pika:~# uname -a
Linux pika 3.6.11+ #545 PREEMPT Fri Sep 20 23:57:55 BST 2013 armv6l GNU/Linux
</code></pre>

More evidence the Edimax Wifi is seen

<pre><code>
root@pika:~# lsusb
Bus 001 Device 002: ID 0424:9512 Standard Microsystems Corp. 
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 003: ID 0424:ec00 Standard Microsystems Corp. 
Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]
</code></pre>

The wifi driver module is loaded

<pre><code>
root@pika:~# lsmod
Module                  Size  Used by
 ...
8192cu                490361  0 
 ...
</code></pre>

Output of iwconfig

<pre><code>
root@pika:~# iwconfig
wlan0     unassociated  Nickname:"<WIFI@REALTEK>"
          Mode:Auto  Frequency=2.412 GHz  Access Point: Not-Associated   
          Sensitivity:0/0  
          Retry:off   RTS thr:off   Fragment thr:off
          Encryption key:off
          Power Management:off
          Link Quality:0  Signal level:0  Noise level:0
          Rx invalid nwid:0  Rx invalid crypt:0  Rx invalid frag:0
          Tx excessive retries:0  Invalid misc:0   Missed beacon:0
</code></pre>

The MicroTik Router is seen.

<pre><code>
root@pika:~# iwlist wlan0 scan
wlan0     Scan completed :
          Cell 01 - Address: D4:CA:6D:56:86:59
                    ESSID:"Pirates"
                    Protocol:IEEE 802.11bgn
                    Mode:Master
                    Frequency:2.412 GHz (Channel 1)
                    Encryption key:on
                    Bit Rates:300 Mb/s
                    Extra:wpa_ie=dd160050f20101000050f20401000050f20401000050f202
                    IE: WPA Version 1
                        Group Cipher : CCMP
                        Pairwise Ciphers (1) : CCMP
                        Authentication Suites (1) : PSK
                    Extra:rsn_ie=30120100000fac040100000fac040100000fac02
                    IE: IEEE 802.11i/WPA2 Version 1
                        Group Cipher : CCMP
                        Pairwise Ciphers (1) : CCMP
                        Authentication Suites (1) : PSK
                    Quality=100/100  Signal level=100/100  
</code></pre>

Contents of /etc/network/interfaces.

<pre><code>
root@pika:/etc/network# cat /etc/network/interfaces
# interfaces(5) file used by ifup(8) and ifdown(8)
auto lo
iface lo inet loopback

allow-hotplug eth0
iface eth0 inet dhcp

allow-hotplug wlan0
iface wlan0 inet dhcp
  wpa-ssid Pirates
  wpa-psk thepassword
</code></pre>


But I have not been able to enable the Wifi.

<pre><code>
root@pika:~# ifup wlan0
Internet Systems Consortium DHCP Client 4.2.2
Copyright 2004-2011 Internet Systems Consortium.
All rights reserved.
For info, please visit https://www.isc.org/software/dhcp/

[ 1389.028246] IPv6: ADDRCONF(NETDEV_UP): wlan0: link is not ready
Listening on LPF/wlan0/80:1f:02:a2:df:94
Sending on   LPF/wlan0/80:1f:02:a2:df:94
Sending on   Socket/fallback
DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 5
DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 8
DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 11
DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 15
DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 18
DHCPDISCOVER on wlan0 to 255.255.255.255 port 67 interval 4
No DHCPOFFERS received.
No working leases in persistent database - sleeping.
</code></pre>

Note, the MicroTik router Wifi is in use
by all the laptops we have tried.

### Set up wifi


* [Installing the Edimax EW-7811UN wireless adapter on Raspberry Pi](http://elinux.org/RPi_edimax_EW-7811Un)
* [How to Setup Wi-Fi On Your Raspberry Pi via the Command Line](http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/)
* [savagehomeautomation - Raspberry Pi - Installing the Edimax EW-7811Un USB WiFi](http://www./etc/network/interfaces.com/projects/raspberry-pi-installing-the-edimax-ew-7811un-usb-wifi-adapte.html)
* [Debian - WiFi How to Use](https://wiki.debian.org/WiFi/HowToUse)
* [jeffskinnerbox - wifi-support-on-raspberry-pi](http://jeffskinnerbox.wordpress.com/2012/11/05/wifi-support-on-raspberry-pi/)
* [Debian page - rtl819x](https://wiki.debian.org/rtl819x)

## todo list

### done

* password less ssh
* make user a sudoer
* checkinstall and compile tools
* zeromq compile and install
* serial console

### todo

* wifi setup
* fixed IP address
* Oracle JVM
* JRuby
* JRuby/Reel test

