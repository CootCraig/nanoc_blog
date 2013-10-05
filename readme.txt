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
================
