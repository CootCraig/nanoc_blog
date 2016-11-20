---
title: "OTA recording"
created_at: Sat Nov 12 06:37:58 MST 2016
kind: article
tags:
  - music
  - fm_radio
  - classical_music
  - ota_recording
  - mp3
  - moc
  - music_on_console
---

# Example record kcme 2016-11-11

Files from Sony PCM-M10

<pre>
du -sk *
289840	161111_01.MP3 Friday Getaway 123min
136340	161111_02.MP3 Classical Guitar Alive 58min
142688	161111_03.MP3 The Score with Edmund Stone 60 min - DC Comics
150688	161111_04.MP3 The Bridge with Jana Lee Ross 64min - American Jazz Philharmonic - Jack Elliot 1979
1048580	161111_05.MP3 447min Classical Music Overnight with Peter Van de Graaff
132860	161112_01.MP3 56min Fred Kormos
</pre>

# integrate with moc - music on console

## easytag

### tags to use

<pre>
Title
Artist
album artist
album
comment
</pre>

<pre>
289840	161111_01.MP3 Friday Getaway 123min

mv 161111_01.MP3 20161111-kcme-friday-getaway.mp3
title: 20161111 - kcme - friday getaway
artist: OTA
album: OTA

mv 161111_02.MP3 20161111-kcme-classical-guitar-alive.mp3
title: 20161111 - kcme - Classical Guitar Alive
artist: ota kcme
album artist: ota kcme
album: ota kcme

mv 161111_03.MP3 20161111-kcme-the-score-edmund-stone.mp3
title: 20161111 - kcme - The Score with Edmund Stone
artist: ota kcme
album artist: ota kcme
album: ota kcme

mv 161111_04.MP3 20161111-kcme-the-bridge-jana-lee-ross.mp3
title: 20161111 - kcme - The Bridge with Jana Lee Ross
artist: American Jazz Philharmonic
album artist: American Jazz Philharmonic
album: ota kcme

mv 161111_05.MP3 20161111-kcme-Classical-Music-Overnight-with-Peter-Van-de-Graaff.mp3
title: 20161111 - kcme - Classical Music Overnight with Peter Van de Graaff
artist: kcme ota
album artist: kcme ota
album: kcme ota

mv 161112_01.MP3 20161112-kcme-fred-kormos.mp3
title: 20161112 - kcme - Fred Kormos
artist: kcme ota
album artist: kcme ota
album: kcme ota
</pre>

## Classical Music Overnight with Peter Van de Graaff

<a href="http://www.wfmt.com/programs/through-the-night-with-peter-van-de-graaff/" target="_blank">wfmt - Overnight with Peter Van de Graaff</a>

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
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->
