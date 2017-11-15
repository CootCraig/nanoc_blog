---
title: "Tracks GTD"
created_at: Fri Mar 25 14:12:58 MDT 2016
kind: article
tags:
  - gtd
  - tracks_gtd
  - getting_things_done
---

## Local page <a href="http://localhost:3010/" target="_blank">here</a>

Run like this.

<pre>
cd ~/dev/tracks
bundle exec rails server -e production -p 3010

cd ~/dev/tracks-for-coot
bundle exec rails server -e production -p 3011
</pre>

## Tracks Site <a href="http://www.getontracks.org/" target="_blank">here</a>

## <a href="https://groups.google.com/forum/#!forum/tracksapp" target="_blank">TracksApp Google Group</a>

## <a href="http://www.sourcerystudios.se/images/pdf/tracks_instructions.pdf" target="_blank">Online PDF</a> Quickstart Users Manual

## <a href="https://github.com/TracksApp/tracks/wiki/Tips-and-tricks" target="_blank">Tips and Tricks</a>

### Free Hosted Tracks <a href="https://github.com/TracksApp/tracks/wiki/Hosted-Tracks" target="_blank">in tips and tricks</a>

<ul>
  <li>tracks.tra.in</li>
  <li>GTD.pm</li>
</ul>

## sub projects


# Install Log

<a href="https://github.com/TracksApp/tracks/tree/v2.3.0" target="_blank">github v2.3.0</a> Current release


### Tracks 2.3.0 Released

Tracks 2.3.0 has been released! This version brings a few small changes
to the UI, many bug fixes, and some major under-the-hood upgrades and
refactors.

Tracks is now running on Rails 4.1. Ruby 1.8.7 is no longer supported,
but this release of Tracks is fully tested on Ruby 1.9.3, 2.0.0, and 2.1.

### Clone and set up local dev.

<pre><code>
Date - Sat Mar 26 09:50:24 MDT 2016
cd tracks
git checkout -b local-master
git checkout -b develop
</code></pre>

### Setup rbenv

<pre><code>
Date - Sat Mar 26 10:34:41 MDT 2016
rbenv install 2.1.8
cd ~/dev/tracks
rbenv local 2.1.8
gem install bundler
bundle install
</code></pre>

#### mysql2 gem failed to install

<pre><code>
An error occurred while installing mysql2 (0.3.16), and Bundler cannot continue.
Make sure that `gem install mysql2 -v '0.3.16'` succeeds before bundling.
</code></pre>

#### Let's try and fix this error:

mysql client is missing. You may need to 'apt-get install
libmysqlclient-dev' or 'yum install mysql-devel', and try again.

<pre><code>
sudo apt-get install libmysqlclient-dev
bundle install
 ...
Bundle complete! 37 Gemfile dependencies, 90 gems now installed.
Use `bundle show [gemname]` to see where a bundled gem is installed.
</code></pre>

#### Configure variables <a href="https://github.com/TracksApp/tracks/blob/v2.3.0/doc/installation.md#configure-variables" target="_blank">Notes in Tracks manual</a>


<ol>
  <li>
    In the config folder, copy the files database.yml.tmpl and
    site.yml.tmpl to database.yml and site.yml, respectively.
  </li>

  <li>
    Open the file config/database.yml and edit the production: section
    with the details of your database. If you are using MySQL the adapter:
    line should read adapter: mysql2, host: localhost (in the majority
    of cases), and your username and password should match those you
    assigned when you created the database. If you are using SQLite3,
    you should have only two lines under the production section: adapter:
    sqlite3 and database: db/tracks.db.
  </li>

  <li>
    Open the file config/site.yml, and read through the settings to make
    sure that they suit your setup. In most cases, all you need to change
    are the salt: "change-me" line (change the string “change-me” to
    some other string of your choice), the administrator email address
    (admin_email), and the time zone setting. For the time zone setting
    you can use the command bundle exec rake time:zones:local to see
    all available timezones on your machine
  </li>

  <li>
    If you are using Windows, you may need to check the ‘shebang’
    lines (#!/usr/bin/env ruby) of the /public/dispatch.* files and all
    the files in the /script directory. They are set to #!/usr/bin/env
    ruby by default. This should work for all Unix based setups (Linux
    or Mac OS X), but Windows users will probably have to change it
    to something like #c:/ruby/bin/ruby to point to the Ruby binary on
    your system.
  </li>

  <li>
    If you intend to deploy Tracks with the built in webserver called
    WEBrick, you’ll need to change config.serve_static_assets to
    true in config/environments/production.rb in order for the images,
    stylesheets, and javascript files to be served correctly.
  </li>
</ol>

#### Populate your database with the Tracks schema

Open a terminal and change into the root of your Tracks directory. Enter
the following command:

<pre><code>
bundle exec rake db:migrate RAILS_ENV=production
</code></pre>

This will set up your database with the required structure to hold
Tracks’ data.

#### Precompile assets

Static assets (images, stylesheets, and javascript) need to be compiled
in order for them to work correctly with the new asset pipeline feature
in Rails. Precompiling your assets is as simple as running the following
command while inside the Tracks root directory:

<pre><code>
bundle exec rake assets:precompile RAILS_ENV=production
</code></pre>

#### Start the server

While still in the Terminal inside the Tracks root directory, issue the following command:

<pre><code>
bundle exec rails server -e production -p 3010
</code></pre>

If all goes well, you should see some text informing you that the
WEBrick server is running: => Rails application starting in production
on http://0.0.0.0:3000. If you are already running other services on
port 3000, you need to select a different port when running the server,
using the -p option.

#### Visit Tracks in a browser

<pre><code>
http://0.0.0.0:3010/signup
</code></pre>

Visit http://0.0.0.0:3010/signup in a browser (or whatever URL and port
was reported when you started the server in the step above) and chose a
user name and password for admin user. Once logged in as admin, you can
add other (ordinary level) users. If you need to access Tracks from a
mobile/cellular phone browser, visit http://yourdomain.com/mobile/. This
mobile version is a special, lightweight version of Tracks, designed to
use on a mobile browser.

# Using Tracks

## Using Tags

### From: Greg Sutcliffe 

greg.sutcliffe@gmail.com

#### Subject: Re: [Tracks-discuss] List of tags?

<pre>
> On 31 March 2016 at 02:54, Craig Anderson <craig@coot.net> wrote:
> I'm thinking about how I will use tags.
</pre>

To give you some food-for-thought, I generally use them for:

<ol>
  <li>places (I have an Errands context, with actions tagged by location)</li>
  <li>people (so I can pull up an 'agenda' for that person across all contexts)</li>
  <li>subclassing (e.g. my Home context has many actions tagged 'quick')</li>
</ol>

Hope that helps your thoughts!
Greg

## David Allen

#### <a href="https://www.youtube.com/watch?v=P_c_vzvtONA" target="_blank">youtube</a> A.T. Anthony Gell interview with David Allan - Getting into the nitty gritty of implementing GTD (Getting Things Done)

0:21 Definition of Project

<ul>
  <li>A project is an end result</li>
  <li>Any outcome you are commited to finish</li>
  <li>that takes more than one step to finish</li>
  <li>that you can finish within a year.</li>
</ul>

0:31 Examples

<ul>
  <li>Buy the company</li>
  <li>Get a new set of tires</li>
  <li>Hire an assistant</li>
  <li>Get a dog</li>
  <li>Goto Spain</li>
</ul>

You can't do those things.
Those are things you can finally finish enough things
and say I now have a dog, ...

0:58 Probably the most lacking list in the world

Identify short term operational outcomes.

Think of it as
put a stake in the ground
about that outcome,
because at some point
I'll come back and see I'm not
finished yet.
What needs to be done to finish it
and pull up the stake.

Review the project list.
For project decide the next thing that needs to happen.
This is the difficult thing
and always invovles a risk.

#### <a href="https://www.youtube.com/watch?v=Qo7vUdKTlhk" target="_blank">youtube</a> Google - David Allen speaks on GTD and the two keys to sustaining a healthy life and work style.

#### <a href="https://www.youtube.com/watch?v=kOSFxKaqOm4" target="_blank">youtube</a> Getting in control and creating space | David Allen | TEDxAmsterdam 2014 

#### <a href="https://www.youtube.com/watch?v=CHxhjDPKfbY" target="_blank">youtube</a> The Art of Stress-Free Productivity: David Allen at TEDxClaremontColleges 

#### <a href="https://www.youtube.com/watch?v=tHI6S-mxIqA" target="_blank">youtube</a> Triangulation 22: David Allen, Getting Things Done

Leo Laporte and Tom Merritt with David Allen

## Other

#### <a href="http://www.thesambarnes.com/digital-project-productivity/gtd-for-web-project-management-revisited-tracks-and-gtdify/" target="_blank">article</a> thesambarnes - GTD for Web Project Management Revisited

#### <a href="https://www.youtube.com/watch?v=66pgNqcRmGk" target="_blank">youtube</a> Dwight Ivany - Getting Things Done in five minutes

#### <a href="https://www.youtube.com/watch?v=37UMs_qD040" target="_blank">youtube</a> lloyd ernst - A 101 guide to using TRACKS for GTD Getting Things Done

#### <a href="https://www.youtube.com/watch?v=n2q9D5QLZBo" target="_blank">youtube</a> IQTELL - Detailed GTD® Tutorial

#### <a href="https://www.youtube.com/watch?v=JhmZhTXN4as" target="_blank">youtube</a> In about 6 minutes Roel Smelt explains with a clear slides the principle of Getting Things Done.

#### <a href="https://www.youtube.com/watch?v=xfnAK69XUVo" target="_blank">youtube</a> Brian Johnson - Getting Things Done by David Allen

#### <a href="https://www.youtube.com/watch?v=NnnaJkKdwjU" target="_blank">youtube</a> 2000 Books - Getting Things Done Audiobook Animated Summary David Allen

#### <a href="https://www.youtube.com/watch?v=H4rz6xDAMzA" target="_blank">youtube</a> Peter von Panda - How the GTD (Getting Things Done) Productivity System Works is Why It's So Great


# <a href="http://pocketmod.com/" target="_blank">pocketmod</a>

#### <a href="http://mgsd.tiddlyspot.com/#mGSD" target="_blank">mGSD</a> mGSD  The TiddlyWiki powered GTD® system formerly known as MonkeyGTD

#### <a href="https://cuberules.com/2007/06/19/my-killer-gtd-setup-part-iii/" target="_blank">article</a> Scot Herrick - My Killer GTD Setup — Part III


#### <a href="https://vimeo.com/3930099" target="_blank">vimeo</a> Sean Tierney - Ramp Up #6: Tracks for GTD

Tracks is an elegant task tracking application based on the "Getting
Things Done" methodology. It's a web application so it's accessible
everywhere and but its AJAX-based interface gives it the feel of a
desktop app. This video gives brief 5min overview of how it works.

https://github.com/TracksApp/tracks/archive/v2.3.0.zip
<h1>Tracks v2.3.0</h1>

git tag:
v2.3.0

<h3>
  <a href="https://github.com/TracksApp/tracks/blob/v2.3.0/doc/upgrading.md" target="_blank">github.com/TracksApp</a>
  Upgrading from Tracks 2.2.x to 2.3.0
</h3>

<h4>
  <a href="http://nvie.com/posts/a-successful-git-branching-model/" target="_blank">nvie.com/posts/</a>
  A successful Git branching model By Vincent Driessen
</h4>

<pre>
Fri Oct 13 09:47:04 MDT 2017

cd ~/dev
git clone git@github.com:TracksApp/tracks.git coot-on-tracks
cd coot-on-tracks/
git checkout -b coot-on-tracks-20171013

cd /media/craig/git1/data/git/
get init --bare coot-on-tracks.git

ls /media/craig/git1/data/git/coot-on-tracks.git
cd ~dev/coot-on-tracks/

git remote -v
origin	git@github.com:TracksApp/tracks.git (fetch)
origin	git@github.com:TracksApp/tracks.git (push)

git remote add upstream git@github.com:TracksApp/tracks.git

git remote -v
origin	git@github.com:TracksApp/tracks.git (fetch)
origin	git@github.com:TracksApp/tracks.git (push)
upstream	git@github.com:TracksApp/tracks.git (fetch)
upstream	git@github.com:TracksApp/tracks.git (push)

git checkout -b upstream
git checkout -b coot-master
git checkout -b develop

git remote set-url origin /media/craig/git1/data/git/coot-on-tracks.git
git remote add git1 /media/craig/git1/data/git/coot-on-tracks.git

git remote -v
git1	/media/craig/git1/data/git/coot-on-tracks.git (fetch)
git1	/media/craig/git1/data/git/coot-on-tracks.git (push)
origin	/media/craig/git1/data/git/coot-on-tracks.git (fetch)
origin	/media/craig/git1/data/git/coot-on-tracks.git (push)
upstream	git@github.com:TracksApp/tracks.git (fetch)
upstream	git@github.com:TracksApp/tracks.git (push)
</pre>

<pre>
tig # First few lines

2017-07-30 15:22 Matt Rogers            M─┐ [develop] [coot-master] [master] [upstream] {origin/HEAD} {origin/master} Merge pull request #2086 from TracksApp/fix-top-10-longest-running
2017-06-19 09:24 Matt Rogers            │ o Add a test for longest running projects
2017-06-13 17:12 Matt Rogers            │ o Fix the top 10 longest running projects list
2017-05-20 09:49 Matt Rogers            M─│─┐ Merge pull request #2082 from dnrce/installation-wiki
2017-05-20 10:22 Dan Rice               │ │ o Move alternative installation options to the wiki
</pre>

<h4>Ruby installed with rbenv</h4>

<pre>
cd ~/.rbenv
plugins/ruby-build && git pull
rbenv install 2.4.2
cd ~/dev/coot-on-tracks 
rbenv local 2.4.2
gem install bundler
bundle install
  fails

An error occurred while installing json (1.8.3), and Bundler cannot continue.
Make sure that 
  gem install json -v '1.8.3'
succeeds before bundling.
</pre>

<h4>Re-Install from zip</h4>

<pre>
Sat Oct 14 07:58:27 MDT 2017
Install from zip

cd ~/dev
wget https://github.com/TracksApp/tracks/archive/v2.3.0.zip
unzip v2.3.0.zip
mv tracks-2.3.0 tracks-for-coot

cd ~/dev/tracks-for-coot
git init .
git add .
git commit -m '2.3.0 source download'
git tag v2.3.0

git checkout -b develop

cd /media/craig/git1/data/git/
git init --bare coot-on-tracks.git

cd ~/dev/tracks-for-coot
git remote add origin /media/craig/git1/data/git/coot-on-tracks.git
git remote add git1 /media/craig/git1/data/git/coot-on-tracks.git

git push origin --all
git push origin --tags
</pre>

<h4>edit .gitignore</h4>

Have git track:
/db/tracks-for-coot.db,
config/database.yml,
config/site.yml

<pre>
cd ~/dev/tracks-for-coot

+!/db/tracks-for-coot.db
-config/database.yml
+#config/database.yml
-config/site.yml
+#config/site.yml
-db/data.yml
+#db/data.yml
</pre>

<h4>Edit local config</h4>

<pre>
cd ~/dev/tracks-for-coot/config/
cp database.yml.tmpl database.yml
cp site.yml.tmpl site.yml

cd ~/dev/tracks-for-coot/
git add .
git commit -m 'track config/database.yml config/site.yml'
git push origin develop
</pre>

If you intend to deploy Tracks with the built in webserver called WEBrick, you’ll need to change 

<pre>
config.serve_static_assets to true in 
config/environments/production.rb
</pre>

in order for the images, stylesheets, and javascript files to be served correctly.

<pre>
cd ~/dev/tracks-for-coot/
git add .
git commit -m 'edits for local config'
git push origin develop
</pre>

<h4>Select ruby with rbenv</h4>

<pre>
cd ~/dev/tracks-for-coot
rbenv local 2.3.5
rbenv local 2.2.8
</pre>

<h4>Finish the install</h4>

<pre>
gem install bundler
bundle install --without development test
bundle exec rake db:migrate RAILS_ENV=production
bundle exec rake assets:precompile RAILS_ENV=production
</pre>

<h4>Run like this.</h4>

<pre>
cd ~/dev/coot-on-tracks
bundle exec rails server -e production -p 3011
</pre>


<h1>Another install attempt</h1>

Mon Oct 16 05:14:55 MDT 2017

<h4>unzip tracks v2.3.0 and use ruby 2.3.5</h4>

<pre>
rbenv install 2.3.5

cd ~/dev
unzip v2.3.0.zip 
mv tracks-2.3.0 tracks-for-coot
cd ~/dev/tracks-for-coot
rbenv local 2.3.5
gem install bundler
</pre>

<h4>Set up git repo</h4>

<pre>
cd /media/craig/git1/data/git/
git init --bare coot-on-tracks.git
cd ~/dev/tracks-for-coot
ls /media/craig/git1/data/git/coot-on-tracks.git

git init .
git add .
git commit -m '2.3.0 source download'
git tag tracks-v2.3.0
git checkout -b develop
git remote add origin /media/craig/git1/data/git/coot-on-tracks.git
git remote add git1 /media/craig/git1/data/git/coot-on-tracks.git
git push origin --all
git push origin --tags
</pre>

<h4>edit .gitignore</h4>

Have git track:
/db/tracks-for-coot.db,
config/database.yml,
config/site.yml

<pre>
cd ~/dev/tracks-for-coot
+!/db/tracks-for-coot.db
-config/database.yml
+#config/database.yml
-config/site.yml
+#config/site.yml
-db/data.yml
+#db/data.yml
</pre>

diff --git a/.gitignore b/.gitignore

<pre>
index e200dc5..1b7940e 100644
--- a/.gitignore
+++ b/.gitignore
@@ -15,13 +15,14 @@
 /db/*.db
 /db/*.sqlite3
 /db/*.sqlite3-journal
+!/db/tracks-for-coot.db
 /log/*.log
 /public/assets/
 /tmp
-config/database.yml
+#config/database.yml
 config/deploy.rb
-config/site.yml
-db/data.yml
+#config/site.yml
+#db/data.yml
 nbproject
 rerun.txt
 tags
</pre>

git push git1 develop

<h4>Edit local config</h4>

<pre>
cd ~/dev/tracks-for-coot/config/
cp database.yml.tmpl database.yml
cp site.yml.tmpl site.yml

cd ~/dev/tracks-for-coot/
git add .
git commit -m 'create and track config/database.yml config/site.yml'
git push origin develop
</pre>

<h4>config/database.yml</h4>

Active db settings.

<pre>
development:
  adapter: sqlite3
  database: /db/tracks-for-coot.db
  pool: 5
  timeout: 5000

production:
  adapter: sqlite3
  database: /db/tracks-for-coot.db
  pool: 5
  timeout: 5000

test: &TEST
  adapter: sqlite3
  database: /db/tracks-test.db
  pool: 5
  timeout: 5000
</pre>

<h4>config/site.yml</h4>

<pre>
cd ~/dev/tracks-for-coot/
git add .
git commit -m 'Configuration changes to config/database.yml, config/site.yml'
git push origin develop
</pre>

<h4>config/environments/production.rb</h4>

If you intend to deploy Tracks with the built in webserver called WEBrick, you’ll need to change 

<pre>
config.serve_static_assets to true in 
config/environments/production.rb
</pre>

<pre>
diff --git a/config/environments/production.rb b/config/environments/production.rb
index b93a877..932c7f9 100644
--- a/config/environments/production.rb
+++ b/config/environments/production.rb
@@ -20,7 +20,7 @@ Rails.application.configure do
   # config.action_dispatch.rack_cache = true
 
   # Disable Rails's static asset server (Apache or nginx will already do this).
-  config.serve_static_assets = false
+  config.serve_static_assets = true
 
   # Compress JavaScripts and CSS.
   config.assets.js_compressor = :uglifier
</pre>

<pre>
cd ~/dev/tracks-for-coot/
git add .
git commit -m 'config.serve_static_assets to true in config/environments/production.rb to serve static assets with WEBrick'
git push origin develop
</pre>

<h4>Populate your database with the Tracks schema</h4>

<pre>
cd ~/dev/tracks-for-coot/
bundle exec rake db:migrate RAILS_ENV=production
</pre>

<h4>Precompile assets</h4>

<pre>
bundle exec rake assets:precompile RAILS_ENV=production
</pre>

<h4>Try the site</h4>

<pre>
cd ~/dev/tracks-for-coot/
bundle exec rails server -e production -p 3011
</pre>

Mon Oct 16 09:38:01 MDT 2017

<pre>
cd ~/dev/tracks-for-coot/
git add .
git commit -m 'Site is running. admin and craig accounts created.'
git push origin develop
</pre>

<h4>tracks is up and running</h4>

<pre>
git checkout -b 20171016-tracks-running
git push git1 20171016-tracks-running
git checkout develop
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
<p style="margin-bottom: 2em;"></p>
<hr style="border: 0; height: 3px; background: #333; background-image: linear-gradient(to right, #ccc, #333, #ccc);">
<pre><code>
</code></pre>
<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
</math>
-->
