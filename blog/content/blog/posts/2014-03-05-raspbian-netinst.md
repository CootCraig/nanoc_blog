---
title: "Raspbian netinst"
created_at: Wed Mar  5 08:14:56 MST 2014
kind: article
tags: [ 'raspberry_pi','raspbian']
---

## Net Installer Image

* [raspbian-ua-netinst - image download](http://hifi.iki.fi/raspbian-ua-netinst/raspbian-ua-netinst-latest.img.xz)
* [image link and instructions on github](https://github.com/hifi/raspbian-ua-netinst)

## Notes

### To flash your SD card on Linux:

<pre><code>
xzcat /path/to/raspbian-ua-netinst-latest.img.xz > glop.img
sudo dd bs=1M if= glop.img of=/dev/sdc
rm glop.img
</code></pre>

Boot with the SDHC and
view the HDMI video to see install progress.

### First boot

The system is almost completely unconfigured on first boot. Here are
some tasks you most definitely want to do on first boot.

The default root password is raspbian.

Set new root password: 

<pre><code>
passwd
</code></pre>

Configure your default locale: 

<pre><code>
dpkg-reconfigure locales
</code></pre>

Configure your timezone: 

<pre><code>
dpkg-reconfigure tzdata
</code></pre>

Install latest kernel and firmware package: 

<pre><code>
apt-get update
apt-get install linux-image-rpi-rpfv raspberrypi-bootloader-nokernel

 ...
update-initramfs: Generating /boot/initrd.img-3.10-3-rpi
</code></pre>

Replace old kernel.img with latest kernel: 

<pre><code>
cp /vmlinuz /boot/kernel.img
</code></pre>

Reboot to new kernel and firmware: 

<pre><code>
reboot
</code></pre>


### Change the hostname

Edit /etc/hostname and /etc/hosts to have the hostname.

<pre><code>
root@pi:/etc# cat hostname
pika
root@pi:/etc# cat hosts
127.0.0.1 localhost pika
</code></pre>

### Set up serial console

Edit /etc/inittab and add a line to enable the serial console.

<pre><code>
#T0:23:respawn:/sbin/getty -L ttyS0 9600 vt100
T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100
#T1:23:respawn:/sbin/getty -L ttyS1 9600 vt100
</code></pre>

### After a reboot, check the serial console and hostname.

<pre><code>
$ sudo screen /dev/ttyUSB0 115200
</code></pre>

<pre><code>
root@pika:~# uname -a
Linux pika 3.10-3-rpi #1 Debian 3.10.11-1+rpi4 (2014-01-24) armv6l GNU/Linux
</code></pre>

ssh is working.  This is the IP address assigned to eth0
<pre><code>
ssh root@192.168.88.223
</code></pre>

### Archive the image so far

Check the size of file systems.  Looks like the whole 8GB SDHC is used.

<pre><code>
root@pika:~# df -k
Filesystem     1K-blocks   Used Available Use% Mounted on
rootfs           7399324 302888   6697524   5% /
/dev/root        7399324 302888   6697524   5% /
devtmpfs          224292      0    224292   0% /dev
tmpfs              44876    116     44760   1% /run
tmpfs               5120      0      5120   0% /run/lock
tmpfs              89740      0     89740   0% /run/shm
/dev/mmcblk0p1     48742  22956     25786  48% /boot
tmpfs              89740      0     89740   0% /tmp
</code></pre>

<pre><code>
$ sudo dd bs=1M if=/dev/sdc of=pika_20140305_0958.img
$ 7za a -t7z pika_20140305_0958.img.7z pika_20140305_0958.img
</code></pre>

### set up the wifi Edimax EW-7811UN

I had problems, but got help here.

[Post on raspberrypi.org forum - Where to get help on wifi?](http://www.raspberrypi.org/forum/viewtopic.php?f=28&t=71314)

So I added 2 packages.

<pre><code>
apt-get install wpasupplicant
apt-get install wireless-tools
</code></pre>

Here is the trail
Verify the Edimax EW-7811Un is seen.

<pre><code>
root@pika:~# lsusb
 ...
Bus 001 Device 004: ID 7392:7811 Edimax Technology Co., Ltd EW-7811Un 802.11n Wireless Adapter [Realtek RTL8188CUS]
 ...
</code></pre>

Note that the wpa-psk entry is not the passphrase.
With the ssid and passphrase this site can give the psk.

[Wireshark - WPA PSK (Raw Key) Generator](http://www.wireshark.org/tools/wpa-psk.html)

Here is the interfaces file.

<pre><code>
root@pika:~# cat /etc/network/interfaces
auto lo
iface lo inet loopback

auto eth0
iface eth0 inet dhcp

auto wlan0
allow-hotplug wlan0
iface wlan0 inet dhcp
  wpa-ssid Pirates
  wpa-psk alonghexstringpsk
</code></pre>

See if iwlist from wireless-tools finds the router. 

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
                    Extra:wpa_ie=dd1a0050f20101000050f20402000050f2040050f20201000050f202
                    IE: WPA Version 1
                        Group Cipher : CCMP
                        Pairwise Ciphers (2) : CCMP TKIP
                        Authentication Suites (1) : PSK
                    Extra:rsn_ie=30160100000fac040200000fac04000fac020100000fac02
                    IE: IEEE 802.11i/WPA2 Version 1
                        Group Cipher : CCMP
                        Pairwise Ciphers (2) : CCMP TKIP
                        Authentication Suites (1) : PSK
                    Quality=100/100  Signal level=100/100  
</code></pre>

For the wifi interface

<pre><code>
$ ssh craig@192.168.88.218
</code></pre>

For the wired interface

<pre><code>
$ ssh root@192.168.88.223
</code></pre>

### add a user

<pre><code>
pika# adduser craig
</code></pre>

### Generate a key pair for the new user

<pre><code>
$ ssh-keygen
</code></pre>

### Install python, vim, tmux, git

<pre><code>
pika# apt-get install python
 ...
The following NEW packages will be installed:
  file libmagic1 libsqlite3-0 mime-support python python-minimal python2.7 python2.7-minimal
 ...

pika# apt-get install vim tmux git
 ...
The following NEW packages will be installed:
  git git-man libclass-isa-perl libcurl3-gnutls liberror-perl libevent-2.0-5 libgpm2 libldap-2.4-2 libpopt0 librtmp0 libsasl2-2 libsasl2-modules libssh2-1 libswitch-perl patch perl perl-modules rsync tmux vim vim-runtime
 ...
</code></pre>

### Personalize git

<pre><code>
$ git config --global user.name "Your Name Here"
Sets the default name for git to use when you commit

$ git config --global user.email "your_email@example.com"
Sets the default email for git to use when you commit
</code></pre>

### Set up the vim dotfiles and vundle.

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

### password less ssh

These instructions worked fine.

[How to set up ssh so you aren't asked for a password](https://www.debian.org/devel/passwordlessssh)

Add the contents of the public key file into ~/.ssh/authorized_keys on
the remote site (the file should be mode 600).

### make user a sudoer

<pre><code>
pika# apt-get install sudo
pika# adduser craig sudo
</code></pre>

## Install Compiler tools

<pre><code>
pika# apt-get install build-essential checkinstall libtool automake uuid-dev
 ...
The following NEW packages will be installed:
  autoconf automake autotools-dev binutils build-essential bzip2 checkinstall cpp cpp-4.6 dpkg-dev fakeroot g++ g++-4.6 gcc gcc-4.6 gcc-4.6-base libalgorithm-diff-perl libalgorithm-diff-xs-perl libalgorithm-merge-perl libc-dev-bin
  libc6-dev libdpkg-perl libfile-fcntllock-perl libgmp10 libgomp1 libltdl-dev libltdl7 libmpc2 libmpfr4 libstdc++6-4.6-dev libtimedate-perl libtool linux-libc-dev m4 make manpages manpages-dev uuid-dev xz-utils
 ...
</code></pre>

### Zeromq build and install

[Source for stable release 3.2.4](http://download.zeromq.org/zeromq-3.2.4.tar.gz)

This is supported by ffi-rzmq, the JRuby library I plan to use.
I unpacked for build at:

<pre><code>
pika# cd /opt/zeromq/zeromq-3.2.4
</code></pre>

The installation will be to /usr/local/

<pre><code>
pika# ./configure --help
Installation directories:
  --prefix=PREFIX         install architecture-independent files in PREFIX
                          [/usr/local]
  --exec-prefix=EPREFIX   install architecture-dependent files in EPREFIX
                          [PREFIX]
</code></pre>

<pre><code>
pika# ./configure
pika# make
pika# checkinstall
</code></pre>

A debian package was left here:

<pre><code>
/opt/zeromq/zeromq-3.2.4/zeromq_3.2.4-1_armhf.deb
</code></pre>

## Install supervisor with python-pip

<pre><code>
pika# apt-get install python-pip
 ...
The following NEW packages will be installed:
  python-pip python-pkg-resources python-setuptools python2.6 python2.6-minimal
 ...

pika# pip install supervisor
 ...
  Downloading supervisor-3.0.tar.gz (459Kb): 459Kb downloaded
 ...
    Installing echo_supervisord_conf script to /usr/local/bin
    Installing pidproxy script to /usr/local/bin
    Installing supervisorctl script to /usr/local/bin
    Installing supervisord script to /usr/local/bin
 ...
</code></pre>

install python-pip mentioned apt-utils not installed, so let's install it.

<pre><code>
pika# apt-get install apt-utils
 ...
The following NEW packages will be installed:
  apt-utils libapt-inst1.5
 ...
</code></pre>

### install socat

<pre><code>
pika# apt-get install socat
</code></pre>

### Install Oracle jdk 8

extracted
jdk-8-fcs-b129-linux-arm-vfp-hflt-06_feb_2014.tar.gz
to /opt/java/jdk1.8.0

Made a symbolic link for /opt/java/jdk

<pre><code>
$ ls -l /opt/java/jdk
lrwxrwxrwx 1 root root 9 Mar  5 22:06 /opt/java/jdk -> jdk1.8.0/
</code></pre>

#### Add jdk to the path

* /etc/profile
* /etc/sudoers
* /etc/environment
* /etc/login.defs

Modify /etc/login.defs

<pre><code>
ENV_SUPATH      PATH=/opt/java/jdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ENV_PATH        PATH=/opt/java/jdk/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
</code></pre>

Modify /etc/profile

<pre><code>
if [ "`id -u`" -eq 0 ]; then
  PATH="/opt/java/jdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
else
  PATH="/opt/java/jdk/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
fi
</code></pre>

modify /etc/sudoers

<pre><code>
Defaults        secure_path="/opt/java/jdk/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
</code></pre>

/etc/environment was empty

Verify that java runs and the version.


<pre><code>
$ java -version
java version "1.8.0"
Java(TM) SE Runtime Environment (build 1.8.0-b129)
Java HotSpot(TM) Client VM (build 25.0-b69, mixed mode)
</code></pre>

### install jruby

Unpack the latest jruby tarball to
/opt/jruby/jruby-1.7.11

Make a symbolic to this version of jruby.

<pre><code>
$ ls -l /opt/jruby/jruby
lrwxrwxrwx 1 root root 13 Mar  5 23:06 /opt/jruby/jruby -> jruby-1.7.11/
</code></pre>

#### modify the path to add /opt/jruby/jruby/bin

Modify /etc/login.defs

<pre><code>
ENV_SUPATH      PATH=/opt/java/jdk/bin:/opt/jruby/jruby/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin
ENV_PATH        PATH=/opt/java/jdk/bin:/opt/jruby/jruby/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games
</code></pre>

Modify /etc/profile

<pre><code>
if [ "`id -u`" -eq 0 ]; then
  PATH="/opt/java/jdk/bin:/opt/jruby/jruby/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
else
  PATH="/opt/java/jdk/bin:/opt/jruby/jruby/bin:/usr/local/bin:/usr/bin:/bin:/usr/local/games:/usr/games"
fi
</code></pre>

modify /etc/sudoers

<pre><code>
Defaults        secure_path="/opt/java/jdk/bin:/opt/jruby/jruby/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
</code></pre>

#### Define JAVA_HOME in the environment

Add to /etc/environment

<pre><code>
JAVA_HOME=/opt/java/jdk
</code></pre>

Verify that jruby runs.

<pre><code>
$ jruby -v
jruby 1.7.11 (1.9.3p392) 2014-02-24 86339bb on Java HotSpot(TM) Client VM 1.8.0-b129 +indy [linux-arm]
</code></pre>

#### Change permissions in jruby folder to allow user craig to add gems

<pre><code>
pika# adduser craig staff

pika# cd /opt/jruby/jruby/lib/ruby/gems
pika# find shared -type d |xargs chmod 775
pika# find shared |xargs chmod g+w

pika# cd /opt/jruby/jruby-1.7.11
pika# find bin |xargs chmod g+w
</code></pre>

#### gem install bundler

<pre><code>
$ gem install bundler
Fetching: bundler-1.5.3.gem (100%)
/opt/jruby/jruby-1.7.11/lib/ruby/shared/rubygems/installer.rb:507 warning: executable? does not in this environment and will return a dummy value
Successfully installed bundler-1.5.3
1 gem installed
</code></pre>

## todo

### done

* serial console
* wifi setup
* password less ssh
* make user a sudoer
* checkinstall and compile tools
* zeromq compile and install
* supervisor
* socat
* Oracle JVM
* JRuby

### todo

* fixed IP address
* JRuby/Reel test


