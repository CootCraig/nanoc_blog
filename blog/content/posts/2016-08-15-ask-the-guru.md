---
title: "Ask The Guru"
created_at: Mon Aug 15 11:35:56 MDT 2016
kind: article
tags:
  - postscript
  - don_lancaster
  - ask_the_guru
---

# tinaja.com

<a href="http://tinaja.com/" target="_blank">The Guru's Lair</a>

<a href="http://www.tinaja.com/glib/pssecrets.pdf" target="_blank">PostScript Secrets Online</a>

<a href="assets/pdf/postscript-secrets-lancaster.pdf" target="_blank">PostScript Secrets Local</a>


<a href="/assets/pdf/gonzo.ps" target="_blank">gonzo.ps local</a>


### <a href="http://www.tinaja.com/psutils/begstuff/fullgrid.psl" target="_blank">full grid online</a>

<pre>
% name of textfile: fullgrid  (DL/Synergetics Jan 91 v1.0m)
% ....

% This file requires the previous download of gonzo.ps
% available from http://www.tinaja.com/post01.asp

% Make sure the following line agrees with your gonzo.ps location
% Use DOUBLE SLASHES anytime you want a single slash in a PS string.

  (C:\\windows\\desktop\\gonzo\\gonzo.ps) run  % use internal gonzo


% This gives you a full portrait page gray 10X layout grid.
% Grids like this one are the starting point for most projects.


gutility begin             % turn on the gonzo utilities
nuisance begin             % turn on the nuisance commands
printerror                 % turn on the printing error trapper  

gonzo begin              

20 15 10 setgrid           % create a full page ten point grid
57 76 showgrid             % and show the grid

                           % the rest of your design goes in here.
                           % it will stay locked to the grid until
                           % a grestore.

showpage

% eof
</pre>

<!--
html boilerplate
<a href="" target="_blank"></a>
<a name=""></a>
<img src="" width="400px">
<ul>
  <li></li>
</ul>
<pre>
</pre>
<pre><code>
</code></pre>
-->
