---
title: "Photo Printing"
created_at: Mon Aug 20 08:44:42 MDT 2018
kind: article
tags:
  - photo_printing
  - postscript
---

<h1>
  <a href="http://www.turboprint.info/" target="_blank">turboprint.info/</a>
  TurboPrint for Linux
</h1>

Mon Aug 20 12:46:35 MDT 2018 -
Install 30 day trial of TurboPrint.
A Cups printer is installed.

<pre>
ET2550-TurboPrint	Epson_EcoTank_ET2550_(TurboPrint)		Epson_EcoTank_ET2550 TurboPrint
</pre>

<h4>
  <a href="http://www.turboprint.info/printer_Epson_EcoTank_ET2550.html" target="_blank">turboprint.info/printer</a>
  The high-quality Linux printer driver for your Epson EcoTank ET-2550 printer
</h4>

EPSON_EPSON_ET-2550_Series does not print after TurboPrint install.

<h1>Gimp</h1>

<h3>Image -> Print Size</h3>

<pre>
Nikon D40 jpg is 3008x2000 pixels

Set "Print Size Width" to 6 inches

Changes to
5.999 in. x 3.989 in.
501.4 ppi
</pre>

<h1>Cut 4x6 from 8.5x11</h1>

The cut 4x6 are to test printing on cheap paper.

<pre>
%!PS-Adobe-3.0
%%BoundingBox: 36 36 576 756
%%Pages: 1
%%LanguageLevel: 2
%%EndComments
%%BeginSetup
% this is where fonts would be embedded
%%EndSetup
%%Page: (1) 1
%%BeginPageSetup
% this is where page-specific features would be specified
/inch {72 mul} def
%%EndPageSetup

0 setgray
2 setlinewidth

0 inch 4 inch moveto
9 inch 4 inch lineto
stroke

0 inch 7 inch moveto
9 inch 7 inch lineto
stroke

6 inch 0 inch moveto
6 inch 12 inch lineto
stroke

% Print it!
showpage
%%EOF
</pre>

<h1>Links</h1>

<h3>
  Learn PostScript Programming
<a href="https://www.whoishostingthis.com/resources/postscript/" target="_blank">whoishostingthis.com/resources/</a>
</h3>

<h3>
  PostScript Tutorial by Paul Bourke Last updated December 1998
  <a href="http://paulbourke.net/dataformats/postscript/" target="_blank">paulbourke.net/dataformats/</a>
</h3>

<h3>
  <a href="https://www.cups.org/doc/spec-postscript.html" target="_blank">cups.org/doc/</a>
  Generating PostScript for CUPS
</h3>

<h4>Anatomy of a PostScript File</h4>

<pre>
%!PS-Adobe-3.0
%%BoundingBox: 36 36 576 756
%%Pages: 1
%%LanguageLevel: 2
%%EndComments
%%BeginSetup
% this is where fonts would be embedded
%%EndSetup
%%Page: (1) 1
%%BeginPageSetup
% this is where page-specific features would be specified
%%EndPageSetup
% Draw a black box around the page
0 setgray
1 setlinewidth
36 36 540 720 rectstroke

% Draw a two inch blue circle in the middle of the page
0 0 1 setrgbcolor
306 396 144 0 360 arc closepath fill

% Draw two half inch yellow circles for eyes
1 1 0 setrgbcolor
252 432 36 0 360 arc closepath fill
360 432 36 0 360 arc closepath fill

% Draw the smile
1 setlinecap
18 setlinewidth
306 396 99 200 340 arc stroke

% Print it!
showpage
%%EOF
</pre>

<h3>
  <a href="http://cholla.mmto.org/computers/postscript/tips.pdf" target="_blank">cholla.mmto.org/computers/postscript</a>
  Thinking in PostScript by Glenn C. Reid  
</h3>

<h3>
  <a href="http://www.math.ubc.ca/~cass/graphics/text/www/index.html" target="_blank">math.ubc.ca/~cass/graphics/</a>
  Matehematical Illustrations by Bill Casselman 
</h3>

<h3>
  <a href="https://staff.science.uva.nl/a.j.p.heck/Courses/Mastercourse2005/tutorial.pdf" target="_blank">staff.science.uva.nl/a.j.p.heck/Courses</a>
  Learning PostScript by Doing 
</h3>

<h3>
  <a href="http://www.tailrecursive.org/postscript/postscript.html" target="_blank">tailrecursive.org/postscript</a>
  A First Guide to PostScript Peter Weingartner
</h3>

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
