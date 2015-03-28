---
title: "Linux Tricks"
created_at: Sun Sep  7 13:43:52 MDT 2014
kind: article
tags: [ 'linux' ]
---

# Find OS version

## debian

<pre><code>
$ lsb_release -a
No LSB modules are available.
Distributor ID:	Debian
Description:	Debian GNU/Linux 7.6 (wheezy)
Release:	7.6
Codename:	wheezy
</code></pre>

# Scraping Web Sites

wget can get a local copy of a url.

~~~~~~~~~~~~~
wget  --convert-links --adjust-extension --page-requisites --no-parent http://www.guitaralive.org/playlist_14_31.html

wget  --convert-links --adjust-extension --page-requisites --no-parent http://www.cpr.org/classical/playlist
~~~~~~~~~~~~~

HTML Tidy can be used as part of editing the scraped HTML

* [HTML Tidy Online](http://infohound.net/tidy/)

# Archive and Compression

## 7zip tar archives

~~~~~~~~~~~~~
7zip
apt-get install p7zip-full
7z a archive.tar.7z archive.tar
~~~~~~~~~~~~~

# Research and sites and links

* [30 Best Sources For Linux Documentation](http://www.cyberciti.biz/tips/linux-unix-bsd-documentations.html)

## sed

### [site](http://www.grymoire.com/Unix/Sed.html) Sed Tutorial by Bruce Barnett

## awk

### Bruce Barnett - Grymoire Awk Tutorial

#### [Grymoire](http://www.grymoire.com/Unix/Awk.html) Grymoire Awk Tutorial

This page includes Bruce Barnett's tutorials on UNIX shell programming
and various other arcane subjects of interest to wizards.

Since AWK is also an interpretor, like the shell, you can save yourself
a step and make the file executable by add one line in the beginning of
the file:

I prefer this format when possible. It's shorter and simpler. It's
also easier to debug problems.

~~~~~~~~~~~
Stand alone awk script
#!/usr/bin/awk -f
BEGIN 	{
  print "BEGIN here";
  exit;
}
~~~~~~~~~~~

### Daniel Robbins - Awk Tutorial at IBM Developer Works

#### [Tutorial at IBM Developer Works](http://www.ibm.com/developerworks/library/l-awk1/) Common threads: Awk by example, Part 1

Awk is a very nice language with a very strange name. In this first
article of a three-part series, Daniel Robbins will quickly get your
awk programming skills up to speed.


