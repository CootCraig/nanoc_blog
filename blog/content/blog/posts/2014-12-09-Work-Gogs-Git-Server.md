---
title: "Setup up work Git server with Gogs"
created_at: Tue Dec  9 21:25:22 MST 2014
kind: article
tags: [ 'linux', 'debian', 'git', 'gogs' ]
---

# Setup up work Git server with Gogs

Install a Debian 7 virtualbox guest
to host the company GIT repositories.

## Use Debian stable wheezy

[Debian 7.7 net install iso](http://cdimage.debian.org/debian-cd/7.7.0/amd64/iso-cd/debian-7.7.0-amd64-netinst.iso)

The current "stable" distribution of Debian is version 7, codenamed
wheezy. It was initially released as version 7.0 on May 4th, 2013 and
its latest update, version 7.7, was released on October 18th, 2014.

## Base install

Hostname: gogs.gcsww.local

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
</code></pre>

## Put local ssh public key on gogs server

* [ssh-copy-id instructions](http://www.thegeekstuff.com/2008/11/3-steps-to-perform-ssh-login-without-password-using-ssh-keygen-ssh-copy-id/)

Step 2: Copy the public key to remote-host using ssh-copy-id

<pre><code>
jsmith@local-host$ ssh-copy-id -i ~/.ssh/id_rsa.pub remote-host
jsmith@remote-host's password:
Now try logging into the machine, with "ssh 'remote-host'", and check in:

.ssh/authorized_keys

to make sure we haven't added extra keys that you weren't expecting.

ssh-copy-id -i ~/.ssh/id_rsa.pub 192.168.88.183
ssh 192.168.88.183
</code></pre>

Note: ssh-copy-id appends the keys to the remote-host’s .ssh/authorized_key.

## [gogs Install Howto for Debian 7 Wheezy](https://packager.io/gh/pkgr/gogs/install?bid=131#debian-7-gogs)

### Here is how to install the package on a Debian 7 Wheezy 64bits server:
<pre><code>
ssh 192.168.88.183
</code></pre>

https support was missing from apt-get after install

<pre><code>
apt-get install apt-transport-https
</code></pre>

Here is how to install the package on a Debian 7 Wheezy 64bits server:

<pre><code>
wget -qO - https://deb.packager.io/key | sudo apt-key add -
echo "deb https://deb.packager.io/gh/pkgr/gogs wheezy pkgr" | sudo tee /etc/apt/sources.list.d/gogs.list
sudo apt-get update
sudo apt-get install gogs

The following NEW packages will be installed:
  gogs libevent-core-2.0-5 libevent-extra-2.0-5 libmysqlclient18 libpq5 libreadline5 libxslt1.1 mysql-common

Setting up gogs (0.5.8-1418206274.9ee80e3.wheezy) ...
Scaling up...
update-rc.d: using dependency based boot sequencing
update-rc.d: using dependency based boot sequencing
update-rc.d: using dependency based boot sequencing
gogs-web-1 started.
--> done.
</code></pre>

<pre><code>
APP_NAME="gogs"
MYSQL_PASSWORD="change_me"
HOSTNAME="example.com"

debconf-set-selections <<CONFIG
mysql-server-5.5 mysql-server/root_password password ${MYSQL_PASSWORD}
mysql-server-5.5 mysql-server/root_password_again password ${MYSQL_PASSWORD}
CONFIG
</code></pre>

<pre><code>
APP_NAME="gogs"
MYSQL_PASSWORD="change_me"
HOSTNAME="example.com"

apt-get install -y --force-yes mysql-server

The following NEW packages will be installed:
  libaio1 libdbd-mysql-perl libdbi-perl libhtml-template-perl mysql-client-5.5 mysql-server mysql-server-5.5 mysql-server-core-5.5
</code></pre>

<pre><code>
APP_NAME="gogs"
MYSQL_PASSWORD="change_me"
HOSTNAME="example.com"

mysql -uroot -p${MYSQL_PASSWORD} -e "create database if not exists ${APP_NAME};"
</code></pre>

<pre><code>
apt-get install -y nginx

The following NEW packages will be installed:
  nginx nginx-common nginx-full
</code></pre>

<pre><code>
APP_NAME="gogs"
MYSQL_PASSWORD="change_me"
HOSTNAME="example.com"

cat > /etc/nginx/sites-available/default <<EOF
server {
  listen          80;
  server_name     ${HOSTNAME} "";
  location / {
    proxy_pass      http://localhost:6000;
  }
}
EOF
</code></pre>

<pre><code>
sudo service nginx restart
</code></pre>

Now, access http://${HOSTNAME} and finish the installation process. Easy!
<pre><code>
http://10.10.9.186/craig/game_justin_craig_20141209

git remote add origin http://localhost:6000/craig/game_justin_craig_20141209.git
git push -u origin master
</code></pre>

* [Git URLs](https://www.kernel.org/pub/software/scm/git/docs/git-push.html#URLS)

<pre><code>
was
origin	/media/gcs3f/GIT/game_justin_craig_20141209.git 

git remote set-url origin http://10.10.9.186/craig/game_justin_craig_20141209


ssh://[user@]host.xz[:port]/path/to/repo.git/ 
gogs@localhost:craig/game_justin_craig_20141209.git

git remote set-url origin craig@10.10.9.186:craig/game_justin_craig_20141209.git

</code></pre>

### On reboot gogs service not running

#### Some background on Debian boot up services

[update-rc.d Cheat Sheet - James Coyle](http://www.jamescoyle.net/cheat-sheets/791-update-rc-d-cheat-sheet)

<pre><code>
service --status-all
 ...
 [ ? ]  gogs
 [ ? ]  gogs-web
 [ - ]  gogs-web-1
 ...
</code></pre>

* [LSBInitScripts DependencyBasedBoot](https://wiki.debian.org/LSBInitScripts/DependencyBasedBoot)
* [Chapter 3. The system initialization](https://www.debian.org/doc/manuals/debian-reference/ch03.en.html)
* [How to LSBize an Init Script](https://wiki.debian.org/LSBInitScripts)
* [Daemons in Debian](https://wiki.debian.org/Daemon)
* [boot process performance analyser](https://packages.debian.org/wheezy/bootchart2)

* [2.2.3. Dependency booting](https://www.debian.org/releases/stable/i386/release-notes/ch-whats-new.en.html#dependency-boot)

insserv is a low level tool used by update-rc.d which enables an installed
system init script (boot script) by reading the comment header of the
script, e.g.:

The dependency-based boot sequencing introduced with Debian 6.0 is now
always enabled, including for users of file-rc.

For optimal sequencing, all init.d scripts should declare their
dependencies in an LSB header. This is already the case for scripts
shipped in Debian, but users should check their local scripts and consider
adding that information.

For more information on this feature refer to the information available
in /usr/share/doc/insserv/README.Debian.

Starting with Debian 6.0, the insserv command is used instead, if
dependency-based booting is enabled:

<pre><code>
insserv mydaemon
</code></pre>

Where mydaemon is an executable init script placed in /etc/init.d. insserv
will produce no output if everything went OK. Examine the error code in
 $? if you want to be sure.

Both the old and the new way requires an init script to be present in
/etc/init.d. For dependency-based booting, the script needs to be an
LSB init script.

#### Let's fix it

<pre><code>
/etc/init.d/gogs
/etc/init.d/gogs-web
/etc/init.d/gogs-web-1
</code></pre>


To see all the files the package installed onto your system, do this:

<pre><code>
dpkg-query -L <package_name>
</code></pre>

<pre><code>
/opt/gogs/conf/app.ini
</code></pre>

## migrate existing

* [Moving A Git Repository To A New Server - Nik Sumeiko](http://www.smashingmagazine.com/2014/05/19/moving-git-repository-new-server/)


