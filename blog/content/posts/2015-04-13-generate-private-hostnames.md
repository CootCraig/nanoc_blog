---
title: "Generate Private Host Names"
created_at: Mon Apr 13 10:39:35 MDT 2015
kind: article
tags:
  - linux
  - host_names
---

# Random hostnames

## Private for me

http://codepen.io/ivanakimov/pen/bNmExm

~~~~~~~~~~~~~~
var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(1);
var numbers = hashids.decode(id);

$("#input").text("["+numbers.join(", ")+"]");
$("#output").text(id);

1 => 374kr - ReefMaster Pro Windows 7 Pro
2 => grj2q
3 => jrok7
4 => 8qxer - windows7-8qxer - 20180927
5 => 1q8o7 - arch-vm-1q8o7 - 20180927
6 => 57ejq - windows7-recover-57ejq - 20180930
7 => vr2kr - arcolinux-vr2kr - 20181009
8 => 0qw5q - arcolinuxb-mate-0qw5q - 20181019
~~~~~~~~~~~~~~


[hashids.org](http://hashids.org/)
Hashids is a small open-source library that generates short, unique, non-sequential ids from numbers.

[Codepen sandbox](http://codepen.io/ivanakimov/pen/bNmExm)

~~~~~~~~~~~~~~
http://codepen.io/ivanakimov/pen/bNmExm
var hashids = new Hashids("cloud hidden", 5, "abcdefghijklmnopqrstuvwxyz1234567890");

var id = hashids.encode(1);
var numbers = hashids.decode(id);

1 => 04mv4
~~~~~~~~~~~~~~

# 1 - 04mv4.gcsww.local

Provide a json server
to serve jruby/jdbc based application
at GCS.
Published as DNS name jrapp.gcsww.local

~~~~~~~~~~~~~~
http://codepen.io/ivanakimov/pen/bNmExm
var hashids = new Hashids("cloud hidden", 5, "abcdefghijklmnopqrstuvwxyz1234567890");

var id = hashids.encode(1);
var numbers = hashids.decode(id);

1 => 04mv4
~~~~~~~~~~~~~~

# 2 - o4g31.coot.local

Ubuntu server 14.04.
First attempt with dokku-alt / docker.
Set up a rails-api application
with a PostgreSQL database
and proxied with puma.

[hashids script at codepen](http://codepen.io/ivanakimov/pen/bNmExm)

~~~~~~~~~~~~~~
var hashids = new Hashids("cloud hidden", 5, "abcdefghijklmnopqrstuvwxyz1234567890");

var id = hashids.encode(2);
var numbers = hashids.decode(id);

2 => o4g31
~~~~~~~~~~~~~~

# 3 - y4ldr.gcsww.local

Test bed for
Ubuntu / dokku-alt / docker / jruby rails

[hashids script at codepen](http://codepen.io/ivanakimov/pen/bNmExm)

~~~~~~~~~~~~~~
var hashids = new Hashids("cloud hidden", 5, "abcdefghijklmnopqrstuvwxyz1234567890");

var id = hashids.encode(3);
var numbers = hashids.decode(id);

3 => y4ldr
~~~~~~~~~~~~~~

