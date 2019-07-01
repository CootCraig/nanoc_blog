---
title: "Upgrade Debian 8 to 9"
created_at: Mon May 20 13:45:49 MDT 2019
kind: article
tags:
  - debian
  - debian_upgrade
  - linux
---

<h1>Motivation</h1>

<pre>
Thu Jun 20 10:21:39 MDT 2019
Firefox on Release 8.11 jessie
  does not allow uBlock Origin (my preferred)
</pre>

<pre>
Mon May 20 11:51:10 MDT 2019

lsb_release -a
 ...
Distributor ID:	Debian
Description:	Debian GNU/Linux 8.11 (jessie)
Release:	8.11
Codename:	jessie
</pre>

<pre>
Debian 9 ("stretch") — current stable release
Debian 8 ("jessie") — obsolete stable release 
</pre>

<h1>Web search</h1>

<h3>
  <a href="https://www.debian.org/releases/stable/amd64/release-notes/ch-upgrading.html" target="_blank">debian.org/releases</a>
  Chapter 4. Upgrades from Debian 8 (jessie)
</h3>

<h3>
  <a href="https://www.rootusers.com/how-to-upgrade-debian-8-jessie-to-debian-9-stretch/" target="_blank">rootusers.com</a>
  How to Upgrade Debian 8 Jessie to Debian 9 Stretch
</h3>

starred

<h3>
  <a href="https://linuxconfig.org/how-to-upgrade-debian-8-jessie-to-debian-9-stretch" target="_blank">linuxconfig.org</a>
  How to upgrade Debian 8 Jessie to Debian 9 Stretch 
</h3>

starred

<h3>
  <a href="https://phoenixnap.com/kb/how-to-upgrade-debian-8-jessie-to-debian-9-stretch" target="_blank">phoenixnap.com</a>
  How to Upgrade Debian 8 Jessie to Debian Linux 9 Stretch
</h3>

<h3>
  <a href="https://linuxhint.com/upgrade-debian-8-to-9/" target="_blank">linuxhint.com</a>
  Upgrade Debian 8 to 9
</h3>

<h1>Log</h1>

Thu Jun 27 16:56:07 MDT 2019

sudo apt update

<pre>
: An error occurred during the signature verification. The repository is not updated and the previous index files will be used. GPG error: http://qgis.org jessie InRelease: The following signatures couldn't be verified because the public key is not available: NO_PUBKEY CAEB3DC3BDF7FB45

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-updates/InRelease  Unable to find expected entry 'main/source/Sources' in Release file (Wrong sources.list entry or malformed file)

W: Failed to fetch http://qgis.org/debian/dists/jessie/InRelease  

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-backports/main/source/Sources  404  Not Found [IP: 64.50.236.52 80]

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-backports/contrib/source/Sources  404  Not Found [IP: 64.50.236.52 80]

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-backports/non-free/source/Sources  404  Not Found [IP: 64.50.236.52 80]

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-backports/main/binary-amd64/Packages  404  Not Found [IP: 64.50.236.52 80]

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-backports/contrib/binary-amd64/Packages  404  Not Found [IP: 64.50.236.52 80]

W: Failed to fetch http://ftp.us.debian.org/debian/dists/jessie-backports/non-free/binary-amd64/Packages  404  Not Found [IP: 64.50.236.52 80]

W: Failed to fetch http://ppa.launchpad.net/bookworm-team/bookworm/ubuntu/dists/jessie/main/binary-amd64/Packages  404  Not Found

W: Failed to fetch http://packages.x2go.org/debian/dists/wheezy/main/source/Sources  404  Not Found [IP: 148.251.201.107 80]

W: Failed to fetch http://packages.x2go.org/debian/dists/wheezy/main/binary-amd64/Packages  404  Not Found [IP: 148.251.201.107 80]

W: Failed to fetch http://build.i3wm.org/debian/sid/dists/sid/main/binary-amd64/Packages  HttpError404

W: Some index files failed to download. They have been ignored, or old ones used instead.
</pre>

https://superuser.com/questions/1417617/apt-get-update-is-failing-in-debian

Sources.list now:

<pre>
deb http://deb.debian.org/debian jessie main
deb http://security.debian.org/debian-security jessie/updates main
</pre>


Thu Jun 27 17:12:12 MDT 2019

sudo apt upgrade

<pre>
lsb_release -a

No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 9.9 (stretch)
Release:	9.9
Codename:	stretch
</pre>

<h1>Update Firefox</h1>

With snapcraft?

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
