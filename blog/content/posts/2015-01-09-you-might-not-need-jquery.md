---
title: "You Might Not Need Javascript"
created_at: Fri Jan  9 12:26:52 MST 2015
kind: article
tags:
  - jquery
  - javascript
---
# [You might not need jQuery](http://youmightnotneedjquery.com/)



jQuery and its cousins are great, and by all means use them if it makes
it easier to develop your application.

If you're developing a library on the other hand, please take a moment
to consider if you actually need jQuery as a dependency. Maybe you can
include a few lines of utility code, and forgo the requirement. If you're
only targeting more modern browsers, you might not need anything more
than what the browser ships with.

At the very least, make sure you know what [jQuery is doing for you](https://docs.google.com/document/d/1LPaPA30bLUB_publLIMF0RlhdnPx_ePXm7oW02iiT6o/edit),
and what it's not. Some developers believe that jQuery is protecting us
from a great demon of browser incompatibility when, in truth, post-IE8,
browsers are pretty easy to deal with on their own.

# What I've done.

## Document ready

~~~~~~~~~~~~
Document ready with no jQuery
(function() {
  var fn = function() {
    // Code goes here.
  };
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
})();
~~~~~~~~~~~~
