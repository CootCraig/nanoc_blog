---
title: "Run socat for Arduino IO"
created_at: Thu Mar 13 18:12:49 MDT 2014
kind: article
tags: [ 'raspberry_pi','arduino']
---

## Run socat for Arduino IO

A key element of using a Raspberry Pi for a moteino gateway
is how to talk to /dev/ttyUSBX for the serial communication.

Problems

* /dev/ttyUSBX is only available if the USB/Serial connection is there.
* Need to guarantee that socat is running if /dev/ttyUSBX is available.

### Survey of approaches.

* Run socat from inittab.
* Start socat at boot with /etc/rc.d
* Start socat at boot with supervisor.d
* Run socat from the JRuby gateway script.

### Run socat from the JRuby gateway script.

Fork/exec management from JRuby seems to be
best done with spoon

#### What do the JRuby experts say?

##### fork and exec on the JVM? JRuby to the Rescue!

[JavaWorld - fork and exec on the JVM? JRuby to the Rescue!](http://www.javaworld.com/article/2072765/core-java/fork-and-exec-on-the-jvm--jruby-to-the-rescue-.html)

* By Charles Nutter 
* JavaWorld |May 13, 2009 11:01 PM

As you should know by now, JRuby ships with FFI, a library that allows
you to bind any arbitrary C function in Ruby code. So getting fork+exec
to work was a simple matter of writing a little Ruby code:

<pre><code>
require 'ffi'

module Exec
 extend FFI::Library

 attach_function :my_exec, :execl, [:string, :string, :varargs], :int
 attach_function :fork, [], :int
end

vim1 = '/usr/bin/vim'
vim2 = 'vim'
if Exec.fork == 0
 Exec.my_exec vim1, vim2, :pointer, nil
end

Process.waitall
</code></pre>

Update: The biggest problem with using fork+exec in this way is that you
can't guarantee *nothing* happens between the fork call and the exec
call. If, for example, the JVM decides to GC or move memory around,
you can have a fatal crash at the JVM process level. Because of that,
I don't recommend using fork + exec via FFI in JRuby, even though it's
pretty cool.

However, since this post I've learned of the "posix_spawn" function
available on most Unix variants. It's basically fork + exec in a single
function, plus most of the typical security and IO tweaks you might
do after forking and before execing. It's definitely my recommended
alternative to fork+exec for JRuby, and to make that easier I've bundled
it up as the "spoon" gem (gem install spoon) which provides spawn and
spawnp to JRuby users directly. Here's an example session using Spoon
to launch JRuby as a daemon. If you just need fork+exec on the JVM,
posix_spawn or the Spoon gem are the best way to do it.

##### headius / daemonize.rb

[headius / daemonize.rb](https://gist.github.com/headius/321084)

<pre><code>
 require 'rubygems'
 require 'spoon'
 
 Spoon.spawnp 'jruby', *ARGV
</code></pre>

<pre><code>
~/projects/jruby ➔ jruby daemonize.rb -e "puts 'starting'; while true; sleep 1; puts 'still going'; end"

~/projects/jruby ➔ starting
still going
still going
still going
still going


~/projects/jruby ➔ still going
still going
still going
ps
  PID TTY           TIME CMD
  342 ttys000    0:00.06 -bash
  421 ttys000    0:00.49 /usr/bin/java -d32 -client -Djruby.memory.max=500m -Djruby.stack.max=1024k
  363 ttys001    0:00.02 -bash
still going
~/projects/jruby ➔ 
kistill going
llstill going
still going
 421still going


~/projects/jruby ➔
</code></pre>

##### github gem - headius / spoon

[github gem - headius / spoon](https://github.com/headius/spoon)

A fork/exec replacement for FFI-capable implementations

Spoon is an FFI binding of the posix_spawn function (and Windows
equivalent), providing fork+exec functionality in a single shot.

<pre><code>
Gem::Specification.new do |s|
  s.name = "spoon"
  s.version = "0.0.4"
  s.authors = ["Charles Oliver Nutter"]
  s.date = "2013-03-29"
  s.description = s.summary = "Spoon is an FFI binding of the posix_spawn function (and Windows equivalent), providing fork+exec functionality in a single shot."
  s.files = `git ls-files`.lines.map(&:chomp)
  s.require_paths = ["lib"]
  s.add_dependency('ffi')
  s.license = "Apache-2.0"
end
</code></pre>

/usr/bin/socat
http://linux.die.net/man/3/posix_spawn
http://ruby-doc.org/core-1.9.3/Signal.html

#include <spawn.h>

def self.posix_spawn(path, file_actions, spawn_attr, argv, env = ENV)
int posix_spawn(
  pid_t *restrict pid, 
  const char *restrict path,
  const posix_spawn_file_actions_t *file_actions,
  const posix_spawnattr_t *restrict attrp,
  char *const argv[restrict],
  char *const envp[restrict]);

int posix_spawnp(
  pid_t *restrict pid,
  const char *restrict file,
  const posix_spawn_file_actions_t *file_actions,
  const posix_spawnattr_t *restrict attrp,
  char *const argv[restrict],
  char * const envp[restrict]); 

http://ruby-doc.org/core-1.9.3/Process.html#method-c-waitpid2

https://github.com/headius/spoon/blob/master/examples/ls.rb

require 'spoon'

#
# Do a recursive ls on the current directory, redirecting output to /tmp/ls.out
#

file_actions = Spoon::FileActions.new
file_actions.close(1)
file_actions.open(1, "/tmp/ls.out", File::WRONLY | File::TRUNC | File::CREAT, 0600)
spawn_attr = Spoon::SpawnAttributes.new
pid = Spoon.posix_spawn('/usr/bin/env', file_actions, spawn_attr, %w(env ls -R))

Process.waitpid(pid)

https://github.com/ffi/ffi/issues/336 <<<<<<<<<<<<<<<<<<<<<<< wrong, should be issue on JRuby
Fail on Raspberry Pi ARM linux JRuby. FFI not available

https://github.com/jruby/jruby/issues/1561
Fail on Raspberry Pi ARM linux JRuby. FFI not available

