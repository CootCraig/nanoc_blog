---
title: "Generate Private Host Names"
created_at: Mon Apr 13 10:39:35 MDT 2015
kind: article
tags:
  - linux
  - host_names
---

# Random hostnames

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

