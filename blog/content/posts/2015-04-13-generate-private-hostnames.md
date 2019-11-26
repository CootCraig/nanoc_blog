---
title: "Generate Private Host Names"
created_at: Mon Apr 13 10:39:35 MDT 2015
kind: article
tags:
  - linux
  - host_names
---

<h4>
  <a href="https://codepen.io/anon/pen/vqGmBX" target="_blank">codepen.io/anon</a>
  hashids example
</h4>

# Random hostnames

## Private for me

<pre>
var hashids = new Hashids("coot private stock", 5, "abcdefghijklmnopqrstuvwxyz1234567890");
var id = hashids.encode(9);
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
9 => 2r9yq - arch-mate-2r9yq - 20191126
</pre>

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

---
title: "Chicken Recipes"
created_at: Sun Nov 24 19:03:12 MST 2019
kind: article
tags:
  - chicken_recipes
  - cooking
---

<h2>Piecing Leg Quarters</h2>

<h4>
  <a href="https://www.youtube.com/watch?v=q1wrDnLbMHM" target="_blank">Fork Meats Food youtube</a>
  How to cut up a chicken leg quarter
</h4>


<h4>
  <a href="https://www.youtube.com/watch?v=2XtI-D2Sao8" target="_blank">Butcher Cuisine youtube</a>
  How to cut a chicken leg quarter
</h4>

<pre>
separate back from thigh
follow the white line
</pre>

<h1>Python hashid</h1>

<h4>
  <a href="https://pypi.org/project/hashids/" target="_blank">pypi.org/</a>
  hashids at pypi
</h4>

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
