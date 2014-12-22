---
title: "Arduino Coding Notes"
created_at: Mon Mar 10 09:12:14 MDT 2014
kind: article
tags: [ 'arduino','coding']
---

## Arduino Coding Notes

### serialEvent()

[serialEvent()](http://arduino.cc/en/Reference/SerialEvent#.Ux3XDB_I0fA)

Called when data is available. Use Serial.read() to capture this data.

[serialEvent Example page](http://arduino.cc/en/Tutorial/SerialEvent#.Ux3XTB_I0fA)

Demonstrates use of the SerialEvent() function. SerialEvent() is called
after a loop(), if there is serial data in the buffer.

### String class

[String class](http://arduino.cc/en/Reference/StringObject#.Ux3Yex_I0fA)


### Data Structures and Algorithms

[Data Structures and Algorithms](http://playground.arduino.cc//Main/LibraryList#DataStructures)

#### QueueArray

[QueueArray](http://playground.arduino.cc//Code/QueueArray#.Ux3cDh_I0fA)

It is created to help adding FIFO (First In - First Out) Abstract Data
Structure to a program for any use.

#### QueueList

[QueueList](http://playground.arduino.cc/Code/QueueList#.Ux3hRR_I0fA)

### Writing a Library for Arduino

[Writing a Library for Arduino](http://arduino.cc/en/Hacking/LibraryTutorial#.Ux3emh_I0fA)

### alexanderbrevig - Simple templated FIFO class 

[alexanderbrevig - Simple templated FIFO class](https://code.google.com/p/alexanderbrevig/downloads/list)

### Robin2 - Demonstration code for several things at the same time

[forum.arduino.cc - Demonstration code for several things at the same time](http://forum.arduino.cc/index.php?PHPSESSID=pb10cdmt3l826s6m095frhf341&topic=223286.0)

Robin2 - March 04, 2014, 07:28:03 am

My sketch uses the concept in "blink without delay" to cause three LEDs
to blink at different intervals, a fourth LED is controlled by a button
and a servo sweeps back and forth at two different speeds. The idea is
to demonstrate how different processes can be accommodated in the same
general framework.

It also uses the "state machine" concept to manage the various activities
and enable the different functions to determine what to do.

I have deliberately designed the sketch as a series of short
functions. Short pieces of code are much easier to understand and debug
and it will be an easy matter for a user to delete functions that they
don't need or to duplicate and modify functions if they need more of
the same (for example to flash 5 LEDS at different intervals).

There is a case for saying there is too much in the sketch but I concluded
that the larger number of activities is a better demonstration of the
capabilities of this approach.

[SeveralThingsAtTheSameTimeRev1.ino](/assets/other/SeveralThingsAtTheSameTimeRev1.ino)

[arduino.cc tutorial - Blink Without Delay](http://arduino.cc/en/Tutorial/BlinkWithoutDelay#.UyJjix_I0fA)

Sometimes you need to do two things at once. For example you might want
to blink an LED (or some other time-sensitive function) while reading
a button press or other input. In this case, you can't use delay(), or
you'd stop everything else the program while the LED blinked. The program
might miss the button press if it happens during the delay(). This sketch
demonstrates how to blink the LED without using delay(). It keeps track
of the last time the Arduino turned the LED on or off. Then, each time
through loop(), it checks if a long enough interval has passed. If it has,
it toggles the LED on or off.

<pre><code>
</code></pre>


### SimpleTimer Library for Arduino

* SimpleTimer Library for Arduino
* Author:  Marcello Romani
* Contact: mromani@ottotecnica.com
* License: GNU LGPL 2.1+

[SimpleTimer Library for Arduino](http://playground.arduino.cc/Code/SimpleTimer#.UyJk5B_I0fA)

This is (yet another) simple library to launch timed actions.

It's based on millis(), thus it has 1 ms resolution.

It uses polling, so no guarantee can be made about the exact time when
a callback is fired. For example, if you setup the library so that it
calls a function every 2ms, but this function requires 5ms to complete,
then you'll have an invocation every 5ms.

For applications where non-strict timing is enough, not using interrupts
avoids potential problems with global variables shared between the
interrupt service routine and the main program, and doesn't consune a
hardware timer.

### Nick Gammon - How to do multiple things at once ... like cook bacon and eggs

[Nick Gammon - How to do multiple things at once ... like cook bacon and eggs](http://www.gammon.com.au/forum/?id=11411)



