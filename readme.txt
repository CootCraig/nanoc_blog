
http://66.147.244.143/~cootnet/

(cd blog/output; rsync --recursive --relative  -e ssh . cootnet@66.147.244.143:public_html)

================
> http://chickenboot.com/2013/05/18/zurb-foundation-with-nanoc-part-1/

> Following the instructions in the nanoc tutorial, I'm creating a new site:

> $ gem install nanoc adsf
> $ nanoc create-site vintageinvite

$ bundle install

bundle exec nanoc create-site blog

The signal USR1 is in use by the JVM and will not work correctly on this platform
The signal USR1 is in use by the JVM and will not work correctly on this platform
      create  nanoc.yaml
      create  Rules
      create  content/index.html
      create  content/stylesheet.css
      create  layouts/default.html
Created a blank nanoc site at 'blog'. Enjoy!

craig@craigs:~/dev/cootcraig_blog$ cd blog
craig@craigs:~/dev/cootcraig_blog/blog$ ls
content  layouts  lib  nanoc.yaml  output  Rules
craig@craigs:~/dev/cootcraig_blog/blog$ bundle exec nanoc compile
The signal USR1 is in use by the JVM and will not work correctly on this platform
The signal USR1 is in use by the JVM and will not work correctly on this platform
Loading site data… done
Compiling site…
/opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/cli/commands/compile.rb:253 warning: GC.enable does nothing on JRuby
/opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/cli/commands/compile.rb:255 warning: GC.disable does nothing on JRuby
      create  [0.13s]  output/index.html
      create  [0.04s]  output/style.css

Site compiled in 1.21s.

$ bundle exec nano view

http://localhost:3000/

================
gem "zurb-foundation", "~> 4.3.2"
================
> http://chickenboot.com/2013/05/18/zurb-foundation-with-nanoc-part-1/

> The next job is to set up the environment, starting by setting up bundler
> for the ruby libraries I'll be depending on, using a Gemfile:
> 
> vintageinvite$ gem install bundler    
> vintageinvite$ subl Gemfile
> File: Gemfile
> source :rubygems
> 
> gem 'nanoc'
> gem 'adsf'
> gem 'haml'
> gem 'zurb-foundation', '~> 3.2.5'
> gem 'compass'

source 'https://rubygems.org'
gem 'nanoc'
gem 'adsf'
gem 'haml'
gem 'sass'
gem 'kramdown'
gem "zurb-foundation", "~> 4.3.2"
gem 'compass'

bundle install
================
> http://chickenboot.com/2013/05/18/zurb-foundation-with-nanoc-part-1/

> Assets: css, js and images
> 
> As a Rails user, I quite enjoy how the Rails asset pipeline works, so
> I'll be mirroring that directory structure in this project. This needs a
> few new directories, and removal of the default stylesheet.css provided
> with nanoc:
> 
> vintageinvite$ mkdir -p content/assets/stylesheets
> vintageinvite$ mkdir -p content/assets/javascripts
> vintageinvite$ mkdir -p content/assets/images
> vintageinvite$ rm content/stylesheet.css

================
> Compass and Foundation Integration
> 
> To integrate compass with nanoc, I need to create a compass.rb file:
> 
> vintageinvite$ subl compass.rb
> File: compass.rb
> require "zurb-foundation"
> 
> # -----------------------------------------------
> # Paths
> # -----------------------------------------------
> 
> http_path = "/"
> css_dir = "output/assets"
> images_dir = "content/assets/images"
> javascripts_dir = "content/assets/javascripts"
> sass_dir = "content/assets/stylesheets"
> 
> # -----------------------------------------------
> # Output
> # -----------------------------------------------
> 
> output_style = :compressed
> preferred_syntax = :scss
> relative_assets = true
> 
> We're telling compass where the necessary directories are for content,
> as well as the output directory for generated stylesheets (though we
> aren't using all of the power of compass, we need to make sure these
> directories are correct for the next step).

craig@craigs:~/dev/cootcraig_blog/blog$ touch compass.rb
craig@craigs:~/dev/cootcraig_blog/blog$ 

> We're telling compass where the necessary directories are for content,
> as well as the output directory for generated stylesheets (though we
> aren't using all of the power of compass, we need to make sure these
> directories are correct for the next step).
> 
> Now we can use compass to install Foundation in our project:
> 
> vintageinvite$ bundle exec compass install foundation -c compass.rb

craig@craigs:~/dev/cootcraig_blog/blog$ bundle exec compass install foundation -c compass.rb
directory content/assets/javascripts/foundation/ 
directory content/assets/javascripts/vendor/ 
directory output/assets/ 
   create content/assets/stylesheets/_normalize.scss 
   create content/assets/stylesheets/_settings.scss 
   create content/assets/stylesheets/app.scss 
   create humans.txt 
   create robots.txt 
   create MIT-LICENSE.txt 
   create content/assets/javascripts/foundation/foundation.forms.js 
   create content/assets/javascripts/foundation/foundation.clearing.js 
   create content/assets/javascripts/foundation/foundation.reveal.js 
   create content/assets/javascripts/foundation/foundation.section.js 
   create content/assets/javascripts/foundation/foundation.abide.js 
   create content/assets/javascripts/foundation/foundation.magellan.js 
   create content/assets/javascripts/foundation/foundation.alerts.js 
   create content/assets/javascripts/foundation/foundation.joyride.js 
   create content/assets/javascripts/foundation/foundation.placeholder.js 
   create content/assets/javascripts/foundation/foundation.tooltips.js 
   create content/assets/javascripts/foundation/foundation.cookie.js 
   create content/assets/javascripts/foundation/foundation.orbit.js 
   create content/assets/javascripts/foundation/foundation.interchange.js 
   create content/assets/javascripts/foundation/foundation.topbar.js 
   create content/assets/javascripts/foundation/foundation.dropdown.js 
   create content/assets/javascripts/vendor/jquery.js 
   create content/assets/javascripts/vendor/zepto.js 
   create content/assets/javascripts/vendor/custom.modernizr.js 
   create content/assets/javascripts/foundation/foundation.js 
   create index.html 
   create output/assets/app.css 


w00t! You're using ZURB Foundation, now go forth and rock 'n roll!


To import your new stylesheets add the following lines of HTML (or equivalent) to your webpage:
<head>
  <link href="/output/assets/_normalize.css" rel="stylesheet" type="text/css" />
  <link href="/output/assets/app.css" media="screen, projector, print" rel="stylesheet" type="text/css" />
</head>

> This adds some unnecessary files that we can remove (we'll be adding
> robots.txt in the correct area later)
> 
> vintageinvite$ rm index.html humans.txt robots.txt MIT-LICENSE.txt 

craig@craigs:~/dev/cootcraig_blog/blog$ rm index.html humans.txt robots.txt MIT-LICENSE.txt

> The final configuration step for is changing the nanoc Rules file,
> to include compass and to process our assets directory correctly:
> 
> vintageinvite$ subl Rules
> File: Rules
> require 'compass'
> 
> Compass.add_project_configuration 'compass.rb'
> 
> compile '/assets/stylesheets/*' do
>   filter :sass, Compass.sass_engine_options.merge(:syntax => item[:extension].to_sym)
> end
> 
> route '/assets/images/*' do
>   #ignore images for now
> end
> 
> route '/assets/javascripts/*' do
>   #ignore javascripts for now
> end
> 
> route '/assets/stylesheets/*' do
>   # flatten assets to assets/ similar to rails
>   '/assets/' + File.basename(item.identifier) + '.css'
> end
> 
> We've added a step to filter the sass stylesheets in assets/stylesheets,
> as well as a new route to push all assets into the root of the
> output/assets directory (mainly because this is how Rails does it,
> and I like it).


> We've added a step to filter the sass stylesheets in assets/stylesheets,
> as well as a new route to push all assets into the root of the
> output/assets directory (mainly because this is how Rails does it,
> and I like it).
> 
> Now we can change our default layout to include the correct stylesheet,
> and use Foundation styles:
> 
> $ subl layouts/default.html
> <!DOCTYPE HTML>
> <html lang="en">
>   <head>
>     <meta charset="utf-8">
>     <title>A Brand New nanoc Site - <%= @item[:title] %></title>
>     <link rel="stylesheet" href="/assets/app.css">
>   </head>
>   <body>
>     <div class="row">
>       <div class="twelve columns">
>         <%= yield %>
>       </div>
>     </div>
>   </body>
> </html>
> $ nanoc compile
> $ nanoc view


================
craig@craigs:~/dev/cootcraig_blog/blog$ bundle exec nanoc compile
The signal USR1 is in use by the JVM and will not work correctly on this platform
The signal USR1 is in use by the JVM and will not work correctly on this platform
Loading site data… 
Captain! We’ve been hit!

Message:

RuntimeError: Found 16 content files for content/assets/javascripts/foundation/foundation; expected 0 or 1

Compilation stack:

  (empty)

Stack trace:

  0. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/data_sources/filesystem.rb:164:in `all_split_files_in'
  1. org/jruby/RubyHash.java:1357:in `each_pair'
  2. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/data_sources/filesystem.rb:154:in `all_split_files_in'
  3. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/data_sources/filesystem.rb:78:in `load_objects'
  4. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/data_sources/filesystem.rb:37:in `items'
  5. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/base/source_data/site.rb:325:in `load_items'
  6. org/jruby/RubyArray.java:1617:in `each'
  7. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/base/source_data/site.rb:324:in `load_items'
  8. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/base/source_data/site.rb:243:in `load'
  9. /opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/base/source_data/site.rb:127:in `layouts'
  ... 26 more lines omitted. See full crash log for details.

If you believe this is a bug in nanoc, please do report it at
-> https://github.com/nanoc/nanoc/issues/new <-

A detailed crash log has been written to ./crash.log.

-------------------------
▾ blog/
  ▾ content/
    ▾ assets/
      ▸ images/
      ▾ javascripts/
        ▾ foundation/
            foundation.abide.js
            foundation.alerts.js
            foundation.clearing.js
            foundation.cookie.js
            foundation.dropdown.js
            foundation.forms.js
            foundation.interchange.js
            foundation.joyride.js
            foundation.js
            foundation.magellan.js
            foundation.orbit.js
            foundation.placeholder.js
            foundation.reveal.js
            foundation.section.js
            foundation.tooltips.js
            foundation.topbar.js

================
http://nanoc.ws/docs/reference/config/

ALLOW_PERIODS_IN_IDENTIFIERS

Whether to allow periods in identifiers. When turned off, everything
past the first period is considered to be the extension, and when turned
on, only the characters past the last period are considered to be the
extension. For example, a file named “content/about.html.erb” will
have the identifier “/about/” when turned off, but when turned on
it will become “/about.html/” instead.

allow_periods_in_identifiers: false

================
dev/cootcraig_blog/blog/nanoc.yaml
    allow_periods_in_identifiers: true

git commit -m 'applied chickenboot instructions through compass and foundation integration.  Using Foundation 4 needed to set allow_periods_in_identifiers: true in nanoc.yaml'

================
http://chickenboot.com/2013/05/18/zurb-foundation-with-nanoc-part-1/

> Haml Layouts
> 
> Having used it for a while in Rails, I can firmly say I'm a big fan of
> haml. It reduces the verbosity of markup to the extent that it almost
> looks nice!
> 
> To switch the layouts from erb enabled html we just need to change the
> layout line in Rules to the following:
> 
> layout '*', :haml, :format => :html5
> And now we need to change the default layout—I've also added a simple
> Foundation top-bar nav:
> 
> vintaginvite$ mv layouts/default.html layouts/default.haml
> vintaginvite$ subl layouts/default.haml

================
> http://chickenboot.com/2013/05/20/zurb-foundation-with-nanoc-part-2/
> 
> Concatenating and Minifying
> 
> We first need to tell nanoc (in nanoc.yaml) to allow a . in an
> identifier, because many of the foundation javascripts are named
> jquery.foundation.$function (otherwise it will create all sorts of
> crazy directories).
> 
> While we're in the config file, I'm going to create a new config variable
> to indicate which javascripts should be 'compiled' (concatenated),
> and which should be just passed through to the output directory:
> 
> vintageinvite$ subl nanoc.yaml
> File: nanoc.yaml
> allow_periods_in_identifiers: true
> 
> javascripts:
>   compile:
>     - jquery
>     - jquery.foundation.topbar
>   passthrough:
>     - modernizr.foundation
>     - app
> 
> We're just including jquery and the Foundation topbar for now, and
> passing through modernizr.foundation so we can include that separately
> in the <head> (Modernizr detects all the features of the current device,
> so it makes sense to get it in as early as possible). We're also passing
> through app, which doesn't exist yet, but is going to be the placeholder
> file where the concatenated javascript will live.


> In order to combine the necessary javascript, we're going to create a
> Ruby function which takes a list of filenames and returns a string of
> the combined data. This will live in the lib directory - all files in
> here are picked up by nanoc before compilation:
> 
> vintageinvite$ subl lib/concat_files.rb
> File: lib/concat_files.rb
> def concat_files(files)
>   files.collect do |f|
>     item = @items.find {|i| i.identifier =~ /#{f}\/$/}
>     if item
>       item.compiled_content
>     else
>       puts "WARNING: couldn't find file #{f}"
>     end
>   end.compact.join("\n")
> end


> Now that we have this function, we can use an erb (embedded Ruby)
> template for our app.js file:
> 
> vintageinvite$ subl content/assets/javascripts/app.js
> File: content/assets/javascripts/app.js
> <%= concat_files(@config[:javascripts][:compile]) %>
> 
> $(document).ready(function () {
>     $(document).foundationTopBar();
> })
> 
> The embedded Ruby at the top will be replaced with all the concatenated
> javascript, and then at the bottom of the file, a function call to
> enable the top bar when the document is ready (I have forgotten this
> before and spent far too long figuring out what I've done wrong...).


> In order to minify the combined javascript, we're going to use the
> uglifier gem, so we'll add that to our Gemfile:
> 
> vintageinvite$ subl Gemfile
> File: Gemfile
> gem 'uglifier'


> Rules and Layout
> 
> Now we just need to put it all together in the Rules file:
> 
> vintageinvite$ subl Rules
> File: Rules
> compile '/assets/javascripts/*' do
>   filter :erb
>   filter :uglify_js if @config[:javascripts][:passthrough].include?(File.basename(item.identifier))
> end
> 
> route '/assets/javascripts/*' do
>   filename = File.basename(item.identifier)
>   '/assets/' + filename + '.js' if @config[:javascripts][:passthrough].include?(filename)
> end


> The last thing to do is include the javascript in our default layout
> - we'll load modernizr in the head as discussed above, and the main
> app.js file at the foot (to ensure the site is rendered before loading
> up the javascript).
> 
> File: layouts/default.haml
> !!! 5
> %html
>   %head
>     %meta{:charset => "utf-8"}
>     %title
>       A Brand new nanoc site -
>       = item[:title]
>     %link{:rel => "stylesheet", :href => "/assets/app.css" }
>     %script{:src => "/assets/modernizr.foundation.js" }
>   %body
>     .contain-to-grid
>       %nav.top-bar
>         %ul
>           %li.name
>             %a{:href => "/"} the vintage invite co
>           %li.toggle-topbar
>             %a{:href => "#"}
>         %section
>           %ul.right
>             %li
>               %a{:href => "#"} Contact
>     .row
>       .twelve.columns
>         = yield
> 
>     %script{:src => "/assets/app.js" }


================
craig@craigs:~/dev/cootcraig_blog/blog$ bundle exec nanoc compile
The signal USR1 is in use by the JVM and will not work correctly on this platform
The signal USR1 is in use by the JVM and will not work correctly on this platform
Loading site data… done
Compiling site…
/opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/cli/commands/compile.rb:253 warning: GC.enable does nothing on JRuby
/opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/cli/commands/compile.rb:255 warning: GC.disable does nothing on JRuby
      update  [4.14s]  output/index.html
WARNING: couldn't find file jquery.foundation.topbar
      create  [0.25s]  output/assets/app.js

Site compiled in 28.45s.

================
Loading site data… concat_files item.identifier
/assets/javascripts/vendor/jquery/. item.raw_filename

Captain! We’ve been hit!

Message:

Nanoc::Errors::UnmetDependency: The current item cannot
be compiled yet because of an unmet dependency on the
“/assets/javascripts/vendor/jquery/” item (rep “default”).


================
Loading site data… done
Compiling site…
/opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/cli/commands/compile.rb:253 warning: GC.enable does nothing on JRuby
/opt/ruby/jruby-1.7.4/lib/ruby/gems/shared/gems/nanoc-3.6.5/lib/nanoc/cli/commands/compile.rb:255 warning: GC.disable does nothing on JRuby
      create  [4.36s]  output/index.html
      create  [1.07s]  output/assets/_settings.css
      create  [0.67s]  output/assets/_normalize.css
concat_files item.identifier /assets/javascripts/vendor/jquery/
      create  [15.48s]  output/assets/app.css
concat_files item.identifier /assets/javascripts/vendor/jquery/
concat_files item.identifier /assets/javascripts/foundation/foundation.topbar/
      create  [115.23s]  output/assets/app.js

Site compiled in 141.99s.

================
craig@craigs:~/dev/cootcraig_blog$ git branch
  001_chickenboot_part_2
---------------
> http://chickenboot.com/2013/05/22/zurb-foundation-with-nanoc-part-3/
> 
> Directories and Helpers
> 
> We're using a slightly different structure to Dave as our site isn't
> just a blog—it's just one part of our company site. As such, we're
> making a subdirectory, imaginatively entitled blog, to contain all the
> blog related files.
> 
> vintageinvite$ mkdir -p content/blog/posts
> 
> Because a blog is a fairly common usage of a static site generator, nanoc
> ships with some helpers. To use these, we need to add some includes to
> the lib directory. Rather than adding to default.rb (as Dave does above),
> I've gone with creating a new file, includes.rb:
> 
> vintageinvite$ subl lib/includes.rb
> File: lib/includes.rb
> include Nanoc3::Helpers::Blogging
> include Nanoc3::Helpers::Tagging
> include Nanoc3::Helpers::Rendering
> include Nanoc3::Helpers::LinkTo
> 
> 
> Dave Clark helpfully explains these in his tutorial:
> 
> http://clarkdave.net/2012/02/building-a-static-blog-with-nanoc/
> 
> The Blogging helper extends nanoc content items with a few fields such
> as title and created_at, and also provides some helper methods to our
> layouts we can use to list posts.
> 
> The Tagging helper lets us add tags to content items and query them.
> 
> The Rendering helper lets us use view partials, which allows us to nest
> layouts (this’ll let us built sub-layouts for posts)
> 
> The LinkTo helper lets us construct URLs for other items
> 
> LinkTo and Rendering include helpers that will be familiar to a Rails
> developer - link_to and render are frequently used in Rails views.

craig@craigs:~/dev/cootcraig_blog/blog$ mkdir -p content/blog/posts

gvim /home/craig/dev/cootcraig_blog/blog/lib/includes.rb

----------------------------------------------
> http://chickenboot.com/2013/05/22/zurb-foundation-with-nanoc-part-3/
> 
> Markdown
> 
> We still need to add a bit more configuration. The plan for the blog is
> to allow any of the team to write their own posts—writing in html or
> haml would be a bit of an ask for the non-technically-minded members (and
> would still be a pain for the rest of us!). That's why someone invented
> the "lightweight markup language" (or "clever text-to-html converter"
> as I prefer), and pretty much the de-facto language is Markdown, so
> let's add support for that.
> 
> First we add the kramdown gem, which is a library that does the
> conversion:
> 
> vintageinvite$ subl Gemfile
> File: Gemfile
> gem 'kramdown'
> gem 'listen'
> vintageinvite$ bundle install
> 
> You'll notice I've also added the listen gem, so that I can use the
> nanoc watch command (which keeps an eye on changed files, and compiles
> them on the fly, so you don't need to continuously compile and view).
> 
> Then we need to tell nanoc that our blog posts should be converted by
> this library, by adding a compilation rule:
> 
> vintageinvite$ subl Rules
> File: Rules
> compile '/blog/posts/*' do
>   filter :kramdown
>   layout 'default'
> end
> 
> Now we can create a post to test it all:
> 
> vintageinvite$ subl content/blog/posts/2013-05-22-welcome-to-the-blog.md
> File: content/blog/posts/2013-05-22-welcome-to-the-blog.md
> ---
> title: "Welcome to the Blog"
> created_at: 2013-05-22 09:00:00 +0000
> kind: article
> ---
> 
> ### Welcome
> 
> I will be replaced by a sensical post long before I get published to the web!
> 
> ------------------
> 
> The post starts with the metadata (between the two --- lines) which
> we'll be using later (it isn't rendered)—we need the kind: article
> line to tell the nanoc blogging helper that this item should be handled
> as a blog post.
> 
> Now we can compile and view the site, and access our blog post at
> /blog/posts/2013-05-22-welcome-to-the-blog/, and see this:

Note, kramdown is already in the Gemfile.  I don't want to use listen.

------------------------
> http://chickenboot.com/2013/05/22/zurb-foundation-with-nanoc-part-3/
> 
> Routes and a Post Template
> 
> We can borrow a few more tricks from Dave Clark's tutorial to improve
> the routes for our blog posts:
> 
> vintageinvite$ subl Rules
> File: Rules
> route '/blog/posts/*' do
>   y,m,d,slug = /([0-9]+)\-([0-9]+)\-([0-9]+)\-([^\/]+)/.match(item.identifier).captures
> 
>   "/blog/#{y}/#{m}/#{slug}/index.html"
> end
> 
> This changes the url above (using a regular expression) to
> /blog/posts/2013/05/welcome-to-the-blog/ which is much nicer.
> 
> Next on Dave's agenda: we can create a new layout specifically for our
> blog posts, by creating a new file in the layouts folder.
> 
> vintageinvite$ subl layouts/post.haml
> File: layouts/post.haml
> = render 'default' do
>   .post
>     %h3= item[:title]
>     %aside= "Posted on #{attribute_to_time(item[:created_at]).strftime('%A, %B %-d %Y')}"
>     %article= yield
> 
> We're using the default layout (by using the Nanoc::Helpers::Rendering
> helper), and in the content for that, we're putting the title from the
> metadata in as a header (with item[:title]), adding the creation date
> (processed through the Nanoc::Helpers::Blogging method attribute_to_time,
> and pretty-printed using strftime) and finally yielding the content
> wrapped in an article tag.
> 
> All we need to do to use this new layout, is to switch it in the Rules
> file:
> 
> vintageinvite$ subl Rules
> File: Rules
> compile '/blog/posts/*' do
>   filter :kramdown
>   layout 'post'
> end
> 
> If you compile and view the blog post now (or are using nanoc watch),
> you'll notice that there are two headers—this is because our post
> template uses the title as a header, but we still have a header in
> the post. We'll fix this later when we add some styling and create the
> blog homepage.

http://localhost:3000/blog/posts/2013-10-06-welcome-to-the-blog/
  to
http://localhost:3000/blog/2013/10/welcome-to-the-blog/

================
> http://chickenboot.com/2013/05/24/zurb-foundation-with-nanoc-part-4/
> 
> Zurb Foundation & nanoc: Blog Refinement
> 
> Last time we got the basic blog infrastructure in place, but we still
> need to create a blog landing page, and add support for tags.
> 
> Haml Everywhere
> 
> Before we attack the blog, we'll look at our index page. It is currently
> the default html page shipped with nanoc; let's replace that with a basic
> holding page in haml until we address the content and layout for the rest
> of the site. We're going to write the blog landing page in haml too,
> which means we can change the Rules file to reflect that we only need
> support for haml:
> 
> vintageinvite$ subl Rules
> File: Rules
> compile '*' do
>   if item.binary?
>     # don’t filter binary items
>   else
>     filter :haml
>     layout 'default'
>   end
> end
> 
> This is just a simple replacement of the :erb filter with the :haml
> filter: I know I'm currently not using :erb outside of the javascript
> directory, which has its own compilation rules.
> 
> I've then changed the index page to remove the default copy, and replaced
> it with a simple header:
> 
> vintageinvite$ mv content/index.html content/index.haml 
> vintageinvite$ subl content/index.haml 
> File: content/index.haml
> ---
> title: Home
> ---
> 
> %h3 Staging Header


-------------------
> Blog Homepage
> 
> So back to the blog. It needs its own homepage. The design and layout
> will be addressed in detail later on, but content-wise it should have the
> latest posts (or a summary/snippet of them), as well as a list of tags
> (with links) at the minimum.
> 
> All that needs some extra infrastructure work, so to start with I've put
> together a page with all the stuff I want to be there, to be replaced
> with real content later:
> 
> vintageinvite$ subl content/blog.haml 
> ---
> title: Blog
> ---
> 
> %h2 The Vintage Invite Company Blog
> 
> .row
>   .ten.columns
>     - sorted_articles.each do |article|
>       %h3
>         = attribute_to_time(article[:created_at]).strftime('%d %B %Y')
>         &raquo;
>         = link_to article[:title], article.path
>       = article.compiled_content
>       %hr
>   .two.columns
>     %h5 Tags
>     %ul.no-bullet
>       %li Tag 1
>       %li Tag 2
>       %li Tag 3
> 
> Note: instead of creating a blog/index.haml, I've created a
> blog.haml—because of the way the nanoc routes are set up, the address
> for both of these will be the same: /blog/index.html or just /blog/,
> which is exactly what I want.
> 
> We're using the Foundation grid to create a ten column section for posts
> and a two column section for the links (nothing special, the real design
> and layout will happen later). In the main section, each article from
> the sorted_articles collection (which is from Nanoc::Helpers::Blogging)
> is being rendered with the date and title as the header, and the full
> content of the article below.
> 
> The navigation on the right hand side is just a placeholder for the tags
> section that will need more work. And obviously when we have numerous
> posts, we don't want to display them all—it's also unlikely we'll want
> to display the full content for each one. But one bit at a time!

---------------------

> Minor Tweaks
> 
> As mentioned in the last article, the post template is taking care of
> the header for each blog post, so before testing out this new page it
> would be better to tidy up our only post by removing the "Welcome" header:
> 
> vintageinvite$ subl content/blog/posts/2013-05-22-welcome-to-the-blog.md
> 
> File: content/blog/posts/2013-05-22-welcome-to-the-blog.md
> ---
> title: "Welcome to the Blog"
> created_at: 2013-05-22 09:00:00 +0000
> kind: article
> tags: [ 'welcome', 'nonsensical' ]
> ---
> 
> I will be replaced by a sensical post long before I get published to the web!
> 
> I've added some (nonsense) tags to the post—notice the syntax, which
> is that of a Ruby Array of strings.
> 
> We also need a link in our top bar navigation so the blog can be accessed
> from the home page:
> 
> vintageinvite$ subl layouts/default.haml
> 
> File: layouts/default.haml
>   %section
>     %ul.right
>       %li
>         %a{:href => "/blog/"} Blog


> Blogging Helpers
> 
> The nanoc helpers we're already using are very useful, but aren't
> extensive enough for us to implement everything we want in the blog
> landing page. So we're going to add some of our own helper functions
> to a new file blog.rb in the lib directory. I've taken inspiration from
> another excellent resource, Mario Gutierrez's nanoc3_blog example.
> 
> Let's start by creating a helper function to return all of the tags for
> a set of pages—to save time/code, this function will also take care
> of a simple ranking/item count, returning the tags as a Hash or array
> of pairs of tag and item count:
> 
> vintageinvite$ subl lib/blog.rb
> File: lib/blog.rb
> def all_tags(items = nil, sort = false)
>   items ||= @items # default to all items if no items passed
>   tags = {}
>   items.each do |i|
>     (i[:tags] || []).each{|t| tags[t] ||= 0; tags[t] += 1 }
>   end
>   # if sort is true, sort by item count descending
>   sort ? tags.sort {|tl, tr| tr[1] <=> tl[1]} : tags
> end
> 
> This function goes through each item, collecting the number of occurrences
> of each tag into a Hash, and then sorts the results (ranking the most
> common tags highest) if requested.
> 
> The more complicated task is to create a landing page for each tag. In
> a dynamic web application, this would be done on-the-fly, but we need to
> build all the required pages upfront. Thankfully, this is well supported
> in nanoc using the preprocessor, which runs before compilation, but
> after the site data (items, layouts, etc.) has loaded. We're creating
> a new item for each tag in this section:
> 
> vintageinvite$ subl Rules
> File: Rules
> preprocess do
>   build_tag_pages(items)
> end
> 
> Rather than sully the Rules file with the logic to build these pages,
> we're calling a helper function build_tag_pages. Let's look at how that
> function is defined:
> 
> vintageinvite$ subl lib/blog.rb
> File: lib/blog.rb
> def build_tag_pages(items)
>   all_tags(items).each do |tag,count|
>     items << Nanoc3::Item.new(
>       "= render('_blog_page', :tag => '#{tag}', :page_title => 'Tag: #{tag}')",
>       { :title => "Tag: #{tag}" }, "/blog/tags/#{tag}/", :binary => false )
>   end
> end
> 
> There's a few things happening in this function—we're calling our helper
> function all_tags and for each tag we're creating a new nanoc item. This
> item is being defined as a single string, which is calling render (from
> Nanoc::Helpers::Rendering) to render a 'partial' page (that we haven't
> defined yet) called _blog_page, passing in the current tag and a title
> for the page. Note that we're also passing a Hash of metadata (with the
> :title) and the route (/blog/tags/tagname) to the Item initializer.


> The Blog Page Partial
> 
> The last thing we need to do is create this _blog_page view—for now I
> want the tag page to look the same as the blog landing page, just with a
> different title (and obviously only the posts with the given tag shown),
> so to not repeat ourselves, we can strip out the code from the blog.haml
> above and put that with a few modifications into _blog_page.haml:
> 
> vintageinvite$ subl layouts/_blog_page.haml
> File: layouts/_blog_page.haml
> - posts = defined?(tag) ? items_with_tag(tag) : sorted_articles
> 
> %h2= page_title
> .row
>   .ten.columns
>     - posts.each do |article|
>       %h3
>         = attribute_to_time(article[:created_at]).strftime('%d %B %Y')
>         &raquo;
>         = link_to article[:title], article.path
>       = article.compiled_content
>       %hr
>   .two.columns
>     %h5 Tags
>     %ul.no-bullet
>       - all_tags(nil, true).each do |t,v|
>         %li= link_for_tag(t, '/blog/tags/')
> 
> You'll notice the main changes that have been made: rather than using
> sorted_articles by default, we're using the Nanoc::Blogging::Tags helper
> items_with_tag if the local variable tag is defined, and the Tags section
> now has our sorted list of tags as links (using the helper link_for_tag
> helper, where we specify the same base route that we used for building
> the tag pages).
> 
> Finally, we want to replace the code in blog.haml with a render call to
> this new view.
> 
> vintageinvite$ subl content/blog.haml
> File: content/blog.haml
> ---
> title: Blog
> ---
> = render '_blog_page', :page_title => 'The Vintage Invite Company Blog'
> 
> We aren't passing a :tag to this render call, which means that instead
> of using a tag it will use the sorted_articles which is exactly what we
> want on the landing page.

================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
================
