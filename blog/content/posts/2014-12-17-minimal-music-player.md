---
title: "Minimal Music Player"
created_at: Wed Dec 17 09:21:15 MST 2014
kind: article
tags: [ 'music_player' ]
---

## Research

### links

* [OmgUbuntu – Five lightweight music players]((http://www.omgubuntu.co.uk/2010/12/omg-5-five-lightweight-music-players)
* [MyLinuxBook - 3 Popular Command Line Music Players for Linux](http://mylinuxbook.com/3-popular-command-line-music-players-for-linux/)
* [lxer - penguinist - mplayer command line](http://lxer.com/module/forums/t/35603/)

### music on console

* [music on console](http://moc.daper.net/about)

What is MOC?

MOC (music on console) is a console audio player for LINUX/UNIX designed
to be powerful and easy to use.

You just need to select a file from some directory using the menu
similar to Midnight Commander, and MOC will start playing all files
in this directory beginning from the chosen file. There is no need to
create playlists as in other players.

However if you want to combine some files from one or more directories on
one playlist, you can still do it. The playlist will be remembered between
runs or you can save it as an m3u file and load it whenever you want.

~~~~~~~~~~~~~~~~
========================= Installation results ===========================
Making install in themes
make[1]: Entering directory '/opt/moc/moc-2.5.0/themes'
make[2]: Entering directory '/opt/moc/moc-2.5.0/themes'
make[2]: Nothing to be done for 'install-exec-am'.
test -z "/usr/local/share/moc/themes" || /bin/mkdir -p "/usr/local/share/moc/themes"
/bin/mkdir: cannot create directory ‘/usr/local/share/moc’: No such file or directory
Makefile:335: recipe for target 'install-themesDATA' failed
make[2]: *** [install-themesDATA] Error 1
make[2]: Leaving directory '/opt/moc/moc-2.5.0/themes'
Makefile:404: recipe for target 'install-am' failed
make[1]: *** [install-am] Error 2
make[1]: Leaving directory '/opt/moc/moc-2.5.0/themes'
Makefile:717: recipe for target 'install-recursive' failed
make: *** [install-recursive] Error 1

****  Installation failed. Aborting package creation.
~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~
/bin/mkdir -p "/usr/local/share/moc/themes"
~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~
libtool: install: /usr/bin/install -c mocp /usr/local/bin/mocp
test -z "/usr/local/share/doc/moc" || /bin/mkdir -p "/usr/local/share/doc/moc"
/bin/mkdir: cannot create directory ‘/usr/local/share/doc’: No such file or directory
~~~~~~~~~~~~~~~~

~~~~~~~~~~~~~~~~
/bin/mkdir -p "/usr/local/share/doc/moc"
~~~~~~~~~~~~~~~~

### Using DeadBeef now

