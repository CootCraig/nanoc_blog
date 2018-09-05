---
title: "Business Card Printing"
created_at: Sun Aug 19 19:31:11 MDT 2018
kind: article
tags:
  - business_card_print
---

<h1>Using gLabels</h1>

<h1>Motivation</h1>

Bob Jaramillo stopped to talk to me.
He mentioned that He owned and operated

<pre>
East Second St. Garage
1640 East 2nd Street
Pueblo, CO 81001
</pre>

I asked to see a card and he gave me a business card.
The card was the last of 2 he had.
I offered to scan the card, scan and return the original
and some prints from the scan.

I found some Staples 3 1/2 x 2 inch inkjet perforated card stock
in a box of office supplies.
I would like to print cards for Bob J. and also for me.

<h3>Scan of Bob Jaramillo business card</h3>

<pre>
nanoc_blog/blog/content/assets/other/business-cards/
jaramillo-card-eps.eps
jaramillo-card-jpg.jpg

convert jaramillo-card-jpg.jpg eps2:jaramillo-card-eps.eps
</pre>

<h1>Templates for the card stock</h1>

Avery template 5357 or 5376

<a href="https://www.avery.com/templates/5371" target="_blank">avery.com/templates/5371</a>

<a href="https://www.avery.com/templates/5376" target="_blank">avery.com/templates/5376</a>

<pre>
nanoc_blog/blog/content/assets/other/business-cards/
Avery5371BusinessCardsWide.pdf
avery-5371.eps

convert Avery5371BusinessCardsWide.pdf eps2:avery-5371.eps
</pre>

<h1>
  <a href="http://glabels.org/" target="_blank">gLabels Label Designer</a>
</h1>

gLabels is a GNU/Linux program for creating labels and business cards. It
is designed to work with various laser/ink-jet peel-off label and business
card sheets that you’ll find at most office supply stores. gLabels
is free software and is distributed under the terms of the GNU General
Public License (GPL).

Successfully printed jaramillo-card-jpg.jpg with Avery template 5376

<h3>
  <a href="http://xpt.sourceforge.net/techdocs/nix/print/barcode/bp03-GenericLabelPrinting/ar01s03.html" target="_blank">sourceforge.net/techdocs/nix/print</a>
  Comments on Printing Avery labels with Linux. kbarcode mentioned
</h3>

<h3>
  <a href="https://www.red-bean.com/labelnation/" target="_blank">LabelNation: a command-line label-printing program</a>
</h3>

<h4>
  <a href="https://www.red-bean.com/labelnation/help.txt" target="_blank">red-bean.com - How to use LabelNation</a>
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
-->
