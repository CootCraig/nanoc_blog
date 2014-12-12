---
title: "Setup up work Gitlab server"
created_at: Tue Dec  9 21:25:22 MST 2014
kind: article
tags: [ 'linux', 'debian', 'git', 'gitlab' ]
---

Current ip address

<pre><code>
192.168.88.182
ssh 192.168.88.182
</code></pre>

# Gitlab server for work.

* [Bitnami Gitlab](https://bitnami.com/stack/gitlab)
* [GitLab Virtual Machines](https://bitnami.com/stack/gitlab/virtual-machine)
* [Bitnami Gitlam vm - Ubuntu 14.04 - GitLab 7.5.3-0 (64-bit)](https://bitnami.com/redirect/to/46875/bitnami-gitlab-7.5.3-0-ubuntu-14.04.zip)
* [Virtual Appliances Quick Start Guide](https://wiki.bitnami.com/Virtual_Appliances_Quick_Start_Guide#How_to_start_your_Bitnami_Virtual_Appliance.3f)
* [mechonomics.com - Configuring the BitNami GitLab Virtual Machine](http://www.mechonomics.com/configuring-the-bitnami-gitlab-virtual-machine/)
* [Geekwerks - Fixing Bitnami GitLab - ssh problem](http://geekwerks.ca/2014/10/05/fixing-bitnami-gitlab.html)
* [Radio Bitnami - gitlab interview](https://soundcloud.com/radio-bitnami/bitnami-interview-gitlab)
* [WhaleBlubber - Self-hosted GitLab Server for Private Revision Control](http://www.whaleblubber.ca/gitlabhq-revision-control/)

* [DigitalOcean Guide](https://www.digitalocean.com/community/tutorials/how-to-set-up-gitlab-as-your-very-own-private-github-clone)
* [Playing with Git? Use GitLab!](http://divante.co/blog/playing-git-gitlab/)

## Bitnami VM

### Review - 10/18/2014 - Easy to install and configure - By Nacho Sanchez

Installation takes 5 minutes, and configuration is very easy since they
include links to FAQs and basic stuff you should know.

Configuring the email can get tricky, so here is the basic stuff:

* [bitnami wiki on GitLab](http://wiki.bitnami.com/Applications/BitNami_GitLab)

Be careful with the host and port, since it sets the ones where the
machine installs by default, but if you then assign a static IP you must
change them manually.

## Use Debian stable wheezy

[Debian 7.7 net install iso](http://cdimage.debian.org/debian-cd/7.7.0/amd64/iso-cd/debian-7.7.0-amd64-netinst.iso)

The current "stable" distribution of Debian is version 7, codenamed
wheezy. It was initially released as version 7.0 on May 4th, 2013 and
its latest update, version 7.7, was released on October 18th, 2014.

## Base install

Hostname: gitlab.gcsww.local

<pre><code>
Software Selection
---------------------
remove Debian desktop environment
leave Print server
Add SSH server
remove laptop
</code></pre>

<pre><code>
apt-get update
apt-get dist-upgrade

apt-get install vim
apt-get install tmux
apt-get install git
apt-get install sudo

adduser craig sudo

git config --global user.name "Your Name Here"
 Sets the default name for git to use when you commit

git config --global user.email "your_email@example.com"
 Sets the default email for git to use when you commit
</code></pre>

<pre><code>
ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.88.182
ssh 192.168.88.182
</code></pre>

## Gitlab install / Setup

### I want to install GitLab on Debian 7

* [gitlab download page](https://about.gitlab.com/downloads/)

#### From Debian 7 selection

<pre><code>
wget https://downloads-packages.s3.amazonaws.com/debian-7.6/gitlab_7.5.3-omnibus.5.2.1.ci-1_amd64.deb
sudo apt-get install openssh-server
sudo apt-get install postfix # Select 'Internet Site', using sendmail instead also works, exim has problems

Suggested packages:
  postfix-mysql postfix-pgsql postfix-ldap postfix-pcre sasl2-bin dovecot-common resolvconf postfix-cdb ufw postfix-doc
The following packages will be REMOVED:
  exim4 exim4-base exim4-config exim4-daemon-light
The following NEW packages will be installed:
  postfix

 Internet site:                                                                                                               
  │   Mail is sent and received directly using SMTP. 

System mail name:                                                                                                                                                 │     
    │                                                                                                                                                                   │     
    │ gitlab.gcsww.com

sudo dpkg -i gitlab_7.5.3-omnibus.5.2.1.ci-1_amd64.deb

Setting up gitlab (7.5.3-omnibus.5.2.1.ci-1) ...
Thank you for installing GitLab!
Configure and start GitLab by running the following command:

sudo gitlab-ctl reconfigure

GitLab should be reachable at gitlab.gcsww.com
Otherwise configure GitLab for your system by editing /etc/gitlab/gitlab.rb file
And running reconfigure again.

gitlab-ctl reconfigure
</code></pre>

reconfigure failed the first time. Edit /etc/gitlab/gitlab.rb

<pre><code>
2c2
< external_url 'gitlab.gcsww.com'
---
> external_url 'http://gitlab.gcsww.com'
</code></pre>

Browse to the hostname and login

<pre><code>
Username: root
Password: 5iveL!fe 
</code></pre>

Changed password to

<pre><code>
butterknife
</code></pre>

Need to configure postfix

https://www.linode.com/docs/email/postfix/postfix-smtp-debian7

