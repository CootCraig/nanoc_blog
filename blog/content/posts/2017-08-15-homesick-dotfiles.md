---
title: "Homesick for Dotfiles"
created_at: Tue Aug 15 03:38:27 MDT 2017
kind: article
tags:
  - homesick
  - homesick_for_dotfiles
  - dotfiles
  - ruby_app
---

<h2>
  <a href="https://github.com/technicalpickles/homesick" target="_blank">github.com/technicalpickles</a>
  homesick git repo
</h2>

<h3>
  <a href="http://technicalpickles.com/posts/never-leave-your-dotfiles-behind-again-with-homesick" target="_blank">technicalpickles.com/posts/</a>
  Never Leave Your Dotfiles Behind Again With Homesick
</h3>

<h1>Examples</h1>

<h3>
  <a href="https://github.com/rtomayko/dotfiles" target="_blank">github.com/rtomayko/</a>
  dotfiles
</h3>

<h3>
  <a href="https://github.com/billbillington/dot-files" target="_blank">github.com/billbillington</a>
  dot-files
</h3>

<h3>
  <a href="https://devhub.io/repos/nwinkler-dotfiles" target="_blank">devhub.io/repos/nwinkler</a>
  dotfiles
</h3>

<h3>
  <a href="https://github.com/raphapr/dotfiles" target="_blank">github.com/raphapr/</a>
  dotfiles
</h3>

<h3>
  <a href="https://github.com/caedes/dotfiles" target="_blank">github.com/caedes/</a>
  dotfiles
</h3>

<h3>
  <a href="https://github.com/avdgaag/dotfiles" target="_blank">github.com/avdgaag/</a>
  dotfiles
</h3>

<h3>
  <a href="https://zachholman.com/2010/08/dotfiles-are-meant-to-be-forked/" target="_blank">zachholman.com/2010/08/dotfiles</a>
  Dotfiles Are Meant to Be Forked
</h3>

What sets mine apart that I’m kind of in love with is that everything
is broken into very specific and distinct areas:

<ul>
  <li>bin/</li>
  <li>cas/</li>
  <li>ec2/</li>
  <li>git/</li>
  <li>jruby/</li>
  <li>ruby/</li>
  <li>system/</li>
  <li>vim/</li>
  <li>zsh/</li>
</ul>

This makes sense, at least to me: too many times I’d be in the Git
mindset, trying to add a new alias but never remembering where to find
it in the long aliases.zsh file I had. Now if I’m adding a new alias
for Git I can go straight into git/, edit aliases.zsh and know that all
the aliases I’d need for Git is contained within that file. Any new
directories created get automatically added to your shell, too. It’s
really helpful, and lets you scale your dotfiles a lot easier. More
importantly, if I’m browsing a fork’s directories — which are
likely to be very different than mine — I can immediately determine
the areas of their code I might be interested in.

So, fork it. Or, if not mine, then fork some of the awesome other projects
I mentioned. Or come up with your own way of organizing your stuff and
share it. Everyone’s got their own way of streamlining their system,
and sharing dotfiles helps everyone.

<h4>
  <a href="https://github.com/holman/dotfiles" target="_blank">github.com/holman/</a>
  dotfiles
</h4>

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
