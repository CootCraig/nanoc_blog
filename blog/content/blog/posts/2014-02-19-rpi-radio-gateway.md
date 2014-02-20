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

<pre><code>
$ sudo screen /dev/ttyUSB0 115200
</code></pre>

Found the IP address on the router: 192.168.88.223

ssh into the RPI and have a go.
The root password is raspberry.

<pre><code>
# ssh root@192.168.88.223
</code></pre>

Change the root password

<pre><code>
# passwd
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

Add a user

<pre><code>
# adduser craig

Note that from now on:
# prompt means run as root. 
$ prompt means run as user craig
</code></pre>


<pre><code>
# su - craig
</code></pre>

Generate a key pair

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

### Set up wifi

[Installing the Edimax EW-7811UN wireless adapter on Raspberry Pi](http://elinux.org/RPi_edimax_EW-7811Un)

[How to Setup Wi-Fi On Your Raspberry Pi via the Command Line](http://www.howtogeek.com/167425/how-to-setup-wi-fi-on-your-raspberry-pi-via-the-command-line/)


