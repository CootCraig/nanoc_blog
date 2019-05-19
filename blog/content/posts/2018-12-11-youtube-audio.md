---
title: "Youtube audio"
created_at: Tue Dec 11 09:43:03 MST 2018
kind: article
tags:
  - youtube
  - youtube_audio
  - mp3
---

<h4>
  <a href="https://mp3converter.website/" target="_blank">mp3converter.website</a>
  simple, fast, has no ads, popups or malware. Enjoy!
</h4>

<h3>
<a href="http://ytdl-org.github.io/youtube-dl/download.html" target="_blank">ytdl-org.github.io</a>
  youtube-dl - Download Page
</h3>

<h4>You can use pip.</h4>

sudo pip install --upgrade youtube_dl

This command will update youtube-dl if you have already installed it. See the 
<a href="https://pypi.python.org/pypi/youtube_dl" target="_blank">pypi page</a>
for more information. 

<h4>
  <a href="https://aur.archlinux.org/packages/youtube-dl-mp3/" target="_blank">https://aur.archlinux.org/packages/youtube-dl-mp3/</a>
</h4>

<h4>
  <a href="https://github.com/rst0git/youtube-dl-mp3" target="_blank">github.com</a>
  youtube-dl-mp3
</h4>

sudo apt-get install youtube-dl ffmpeg

<pre>
#!/bin/bash

# Check if xclip is installed and no argument are passed
if [ -x "$(command -v xclip)" ] && [ "$#" -eq 0 ] ; then
	youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 --ignore-errors -o "%(title)s.%(ext)s" "$(xclip -o)"
else
	youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 --ignore-errors -o "%(title)s.%(ext)s" "$@"
fi
</pre>

<pre>
-x, --extract-audio              Convert video files to audio-only files
                                 (requires ffmpeg or avconv and ffprobe or avprobe)
--audio-format FORMAT            Specify audio format: "best", "aac", "flac", "mp3", 
                                 "m4a", "opus", "vorbis", or "wav"; "best" by default;
                                 No effect without -x
--audio-quality QUALITY          Specify ffmpeg/avconv audio quality,
                                 insert a value between 0 (better) and 9 (worse) for VBR
                                 or a specific bitrate like 128K (default 5)
</pre>

<pre>
On Arch Linux
sudo pacman -S youtube-dl ffmpeg

Installation
Just copy the youtube-dl-mp3 script to somewhere in your $PATH (try /usr/local/bin).
sudo cp youtube-dl-mp3 /usr/local/bin/
</pre>

https://www.pcmag.com/feature/362854/how-to-convert-youtube-videos-to-mp3-files

https://www.genyoutube.net/

https://savetube.org/

https://savetube.org/2018/02/genyoutube-net-honest-review-quick-usage-tutorial/

https://savetube.org/2018/07/youtubemp3-to-closing-down-converter-service-best-alternatives/

https://listentoyoutube.online/

https://www.quora.com/Are-there-any-safe-YouTube-to-MP3-converters

<h2>RSS feed for Youtube Channel</h2>

<h3>
  <a href="https://danielmiessler.com/blog/rss-feed-youtube-channel/" target="_blank">danielmiessler.com</a>
  How to Get an RSS Feed for a YouTube Channel By Daniel Miessler
</h3>

<h4>Steps</h4>

<ol>
  <li>Go to the YouTube channel you want to track</li>
  <li>View the page’s source code</li>
  <li>Look for the following text: channel-external-id</li>
  <li>Get the value for that element (it’ll look something like UCBcRF18a7Qf58cCRy5xuWwQ</li>
  <li>Replace that value into this URL:</li>
</ol>

https://www.youtube.com/feeds/videos.xml?channel_id=UCBcRF18a7Qf58cCRy5xu

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

