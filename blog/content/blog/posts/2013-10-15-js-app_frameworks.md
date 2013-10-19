---
title: "JavaScript Application Frameworks"
created_at: Tue Oct 15 09:34:13 MDT 2013
kind: article
tags: [ 'javascript']
---

# Surveys

+ [Journey Through The JavaScript MVC Jungle](http://coding.smashingmagazine.com/2012/07/27/journey-through-the-javascript-mvc-jungle/)
+ [The Top 10 Javascript MVC Frameworks Reviewed](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)
+ [A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)
+ [Reddit angular vs ember](http://www.reddit.com/r/programming/comments/1ggvdm/angularjs_vs_ember_its_not_even_close/)
+ [ANGULARJS VS EMBERJS NOTES](http://neverfriday.com/2013/09/01/angularjs-vs-emberjs-notes/)
+ [The Battle of Modern Javascript Frameworks: Conclusion – Which One to Choose](http://www.softfinity.com/blog/the-battle-of-modern-javascript-frameworks-conclusion-which-one-to-choose/)
+ [Ember vs Angular – Templates](http://pivotallabs.com/ember-vs-angular-templates/)
+ [Why Angular, Ember, or Backbone don't work for us](https://moot.it/blog/technology/frameworkless-javascript.html)

# backbone.js Recommended

+ [Backbone.js on Rails](https://learn.thoughtbot.com/products/1-backbone-js-on-rails?utm_source=giantrobots&utm_medium=blog&utm_campaign=jsonapibackbonerelational)
+ [Manning - Backbone.js in Action](http://www.manning.com/breed/)

# ember.js Recommended

### plus

+ [And the Winner is…Ember.js](http://accidentaltechnologist.com/javascript/and-the-winner-is-ember-js/)
+ [Why Discourse uses Ember.js](http://eviltrout.com/2013/02/10/why-discourse-uses-emberjs.html)
+ [Building an Ember app with RailsAPI - Part 1](http://reefpoints.dockyard.com/ember/2013/01/07/building-an-ember-app-with-rails-api-part-1.html)
+ [Why does Ember.js rock?](https://kerricklong.com/articles/why-ember-js-rocks.html)
+ [10 Javascript MVC Frameworks Reviewed - Ember picked](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)
+ [Ember.js - Web Applications Done Right](http://www.infoq.com/articles/Emberjs-Web-Applications)
+ [Manning - Ember.js in Action](http://www.manning.com/skeie/)
+ [Ember.js: The Architecture Advantage](https://speakerdeck.com/lukemelia/ember-dot-js-the-architecture-advantage)
+ [AngularJS vs Ember - ember preferred](http://eviltrout.com/2013/06/15/ember-vs-angular.html)
+ [AngularJS & Ember.js Comparison: Which One’s The Better Choice?](http://blog.wgs.co.id/2013/05/24/angularjs-ember-js-comparison-which-ones-the-better-choice/)

### minus

# CanJS Recommended

+ [Why CanJS?](http://canjs.com/guides/Why.html)

# AngularJS Recommended

+ [Migrating from Ember.js to AngularJS](http://beust.com/weblog/2012/12/29/migrating-from-ember-js-to-angularjs/)
+ [Choosing a JS MVC Framework: Angular.js vs Ember.js](http://dybskiy.com/js-mvc-angular-vs-ember/)
+ [3 Reasons to Choose AngularJS for Your Next Project](http://net.tutsplus.com/tutorials/javascript-ajax/3-reasons-to-choose-angularjs-for-your-next-project/)
+ [Why Does Angular.js Rock?](http://angular-tips.com/blog/2013/08/why-does-angular-dot-js-rock/)
+ [Why I Chose AngularJS](http://gaslight.co/blog/why-i-chose-angularjs)

# Dojo Recommended

# Spine Recommended

# KnockoutJS Recommended

# Quotes of Note

### [AngularJS vs Ember](http://eviltrout.com/2013/06/15/ember-vs-angular.html)

Discourse is an Ember application and has been since the first prototype,
so I have a lot of experience with it.

If I were to rank the amount of tools various client side MVC frameworks
give you, Angular seems to exist somewhere near the half way point
between Backbone and Ember.

Ember has more concepts to learn and more to wrap your head around than
AngularJS. Before you write off Ember due to its complexity, consider
why the developers added all that extra stuff. Perhaps it’s there for
a reason?

Ember is a toolbox full of concepts you will find useful if you want to
build a large and maintainable application. The trade offs it has made
in its API are there to help you structure your code in a sane way. As
you learn Ember you will notice several philosophies and opinions that
are completely absent from the AngularJS framework.

In Ember, all models extend the Ember.Object base class. When you do this,
you gain the ability to declare relationships within and between models

This illustrates a key difference between Ember and AngularJS. Ember
subscribes to the Uniform Access Principle. In an Ember template,
regardless of whether you are accessing something that is computed
or something that is a primitive, the expression looks the same. In
AngularJS, functions have to be specifically demarcated.

This can cause maintainability nightmares down the road. Over time, in
a large software project, you will inevitably want to replace something
that was previously a primitive with a method. In Ember you can do this
painlessly; in AngularJS you’ll have to update every template where
that model is used.


