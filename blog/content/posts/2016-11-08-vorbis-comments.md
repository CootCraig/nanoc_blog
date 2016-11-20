---
title: "Vorbis Comments"
created_at: Tue Nov  8 07:48:36 MST 2016
kind: article
tags:
  - vorbis_comments
---

### <a href="https://en.wikipedia.org/wiki/Vorbis_comment" target="_blank">wikipedia.org Vorbis Comment</a>

A Vorbis comment is a metadata container used in the Vorbis, FLAC,
Theora, Speex and Opus file formats. It allows information such as
the title, artist, album, track number or other information about
the file to be added to the file itself. However, as the official Ogg
Vorbis documentation notes, “[the comment header] is meant for short,
text comments, not arbitrary metadata; arbitrary metadata belongs in a
separate logical bitstream (usually an XML stream type) that provides
greater structure and machine parseability.”

### <a href="http://www.xiph.org/vorbis/doc/v-comment.html" target="_blank">xiph.org - Vorbis text comment header</a>

The Vorbis text comment header is the second (of three) header packets
that begin a Vorbis bitstream. It is meant for short, text comments,
not arbitrary metadata; arbitrary metadata belongs in a separate logical
bitstream (usually an XML stream type) that provides greater structure
and machine parseability.

The comment field is meant to be used much like someone jotting a quick
note on the bottom of a CDR. It should be a little information to remember
the disc by and explain it to others; a short, to-the-point text note
that need not only be a couple words, but isn't going to be more than
a short paragraph. The essentials, in other words, whatever they turn
out to be, eg:

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
