---
title: "Harden VPS"
created_at: Sun Jan  4 08:05:24 MST 2015
kind: article
tags:
  - vps
  - security
---

# Ubuntu 14.04 LTS production server harden

## Allowed access

* ssh
* http
* https

# Use of VPS

* ssh in
* gitlab server - remote ssh access - local https access
* x2go server - remote ssh access
* weechat runs on tmux - remote ssh access

# Research

#### [Bryan Kennedy](http://plusbryan.com/my-first-5-minutes-on-a-server-or-essential-security-for-linux-servers) First 5 Minutes On A Server

This is a basic starting point.
Look at the other links here for additions or modifications.

Server security doesn’t need to be complicated. My security philosophy
is simple: adopt principles that will protect you from the most frequent
attack vectors, while keeping administration efficient enough that you
won’t develop “security cruft”. If you use your first 5 minutes
on a server wisely, I believe you can do that.

Any seasoned sysadmin can tell you that as you grow and add more servers &
developers, user administration inevitably becomes a burden. Maintaining
conventional access grants in the environment of a fast growing startup
is an uphill battle - you’re bound to end up with stale passwords,
abandoned intern accounts, and a myriad of “I have sudo access to Server
A, but not Server B” issues. There are account sync tools to help
mitigate this pain, but IMHO the incremental benefit isn’t worth the
time nor the security downsides. Simplicity is the heart of good security.

Our servers are configured with two accounts: root and deploy. The deploy
user has sudo access via an arbitrarily long password and is the account
that developers log into. Developers log in with their public keys, not
passwords, so administration is as simple as keeping the authorized_keys
file up-to-date across servers. Root login over ssh is disabled, and
the deploy user can only log in from our office IP block.


#### [digitalocean.com](https://www.digitalocean.com/community/tutorials/how-to-setup-a-firewall-with-ufw-on-an-ubuntu-and-debian-cloud-server) How To Setup a Firewall with UFW on an Ubuntu and Debian Cloud Server 

#### [Justin Ellingwood](https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-14-04) Initial Server Setup with Ubuntu 14.04

#### [Justin Ellingwood](https://www.digitalocean.com/community/tutorials/additional-recommended-steps-for-new-ubuntu-14-04-servers) Additional Recommended Steps for New Ubuntu 14.04 Servers

#### [rubytreesoftware.com](http://www.rubytreesoftware.com/resources/securely-setup-ubuntu-1404-server) Securely Setup Ubuntu 14.04 Server

## other

* [BE YOUR OWN VPN PROVIDER WITH OPENBSD](http://networkfilter.blogspot.com/2015/01/be-your-own-vpn-provider-with-openbsd.html)
* [How to Harden and Secure SSH for Improved Security](http://www.rackaid.com/blog/how-to-harden-or-secure-ssh-for-improved-security/)
* [How to Add Protective Measures Against SSH Attacks](http://www.rackaid.com/blog/how-to-add-protective-measures-against-ssh-attacks/)
* [Practical Guide to Basic Linux Security](http://www.puschitz.com/SecuringLinux.shtml)
* [Linux 101: Hardening SSH](http://stackful-dev.com/linux-101-hardening-ssh.html)
* [Securing Debian using IPTABLES/Netfilter firewall](https://www.rosehosting.com/blog/securing-your-ubuntudebian-based-vps-using-iptablesnetfilter-firewall/)
* [DigitalOcean - Introduction to Securing your Linux VPS](https://www.digitalocean.com/community/tutorials/an-introduction-to-securing-your-linux-vps)
* [Encrypt Your Directories And Partitions With eCryptfs In Linux](http://www.unixmen.com/encrypt-directories-partitions-ecryptfs-linux/)
* [eCryptfs Home page](http://ecryptfs.org/)
* [dm-crypt at WikiPedia](http://en.wikipedia.org/wiki/Dm-crypt)
* [linoxide - How To Encrypted Root Partition / Filesystem](http://linoxide.com/file-system/how-to-encrypted-root-partition-filesystem/)
* [LinuxUser - best file encryption software in open source](http://www.linuxuser.co.uk/reviews/the-best-file-encryption-software-in-open-source)


