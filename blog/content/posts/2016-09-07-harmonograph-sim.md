---
title: "Harmonograph Simulator"
created_at: Wed Sep  7 19:50:20 MDT 2016
kind: article
tags:
  - mathml
  - harmonograph
  - art
  - resonance_art
---

# Based on walkingrandomly article


<a href="http://www.walkingrandomly.com/?p=151" target="_blank">Simulating Harmonographs</a>

<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
  <mstyle mathsize="1.6em">
    <mrow>
      <mi>x</mi>
      <mfenced>
        <mi>t</mi>
      </mfenced>
    </mrow>

    <mo>=</mo>

     <mrow>
        <msup>
          <mi>&ExponentialE;</mi>
          <mrow>
            <msub>
              <mrow>
                <mo>-</mo>
                <mi>&DifferentialD;</mi>
              </mrow>
              <mn>1</mn>
            </msub>
            <mi>t</mi>
          </mrow>
        </msup>
      </mrow>

      <mrow>
        <mi>sin</mi>
        <mfenced>
          <mrow>
            <mrow>
              <mi>t</mi>
              <msub>
                <mi>f</mi>
                <mn>1</mn>
              </msub>
            </mrow>
            <mo>+</mo>
            <mrow>
              <msub>
                <mi>p</mi>
                <mn>1</mn>
              </msub>
            </mrow>
          </mrow>
        </mfenced>
      </mrow>

      <mo>+</mo>

     <mrow>
        <msup>
          <mi>&ExponentialE;</mi>
          <mrow>
            <msub>
              <mrow>
                <mo>-</mo>
                <mi>&DifferentialD;</mi>
              </mrow>
              <mn>2</mn>
            </msub>
            <mi>t</mi>
          </mrow>
        </msup>
      </mrow>

      <mrow>
        <mi>sin</mi>
        <mfenced>
          <mrow>
            <mrow>
              <mi>t</mi>
              <msub>
                <mi>f</mi>
                <mn>2</mn>
              </msub>
            </mrow>
            <mo>+</mo>
            <mrow>
              <msub>
                <mi>p</mi>
                <mn>2</mn>
              </msub>
            </mrow>
          </mrow>
        </mfenced>
      </mrow>
  </mstyle>
</math>

<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
  <mstyle mathsize="1.6em">
    <mrow>
      <mi>y</mi>
      <mfenced>
        <mi>t</mi>
      </mfenced>
    </mrow>

    <mo>=</mo>

     <mrow>
        <msup>
          <mi>&ExponentialE;</mi>
          <mrow>
            <msub>
              <mrow>
                <mo>-</mo>
                <mi>&DifferentialD;</mi>
              </mrow>
              <mn>3</mn>
            </msub>
            <mi>t</mi>
          </mrow>
        </msup>
      </mrow>

      <mrow>
        <mi>sin</mi>
        <mfenced>
          <mrow>
            <mrow>
              <mi>t</mi>
              <msub>
                <mi>f</mi>
                <mn>3</mn>
              </msub>
            </mrow>
            <mo>+</mo>
            <mrow>
              <msub>
                <mi>p</mi>
                <mn>3</mn>
              </msub>
            </mrow>
          </mrow>
        </mfenced>
      </mrow>

      <mo>+</mo>

     <mrow>
        <msup>
          <mi>&ExponentialE;</mi>
          <mrow>
            <msub>
              <mrow>
                <mo>-</mo>
                <mi>&DifferentialD;</mi>
              </mrow>
              <mn>4</mn>
            </msub>
            <mi>t</mi>
          </mrow>
        </msup>
      </mrow>

      <mrow>
        <mi>sin</mi>
        <mfenced>
          <mrow>
            <mrow>
              <mi>t</mi>
              <msub>
                <mi>f</mi>
                <mn>4</mn>
              </msub>
            </mrow>
            <mo>+</mo>
            <mrow>
              <msub>
                <mi>p</mi>
                <mn>4</mn>
              </msub>
            </mrow>
          </mrow>
        </mfenced>
      </mrow>
  </mstyle>
</math>

# Amplitude Decay

<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
  <mstyle mathsize="1.6em">

    <msup>
      <mi>e</mi>
      <mrow>
        <msub>
          <mrow>
            <mo>-</mo>
            <mi>d</mi>
          </mrow>
          <mn>1</mn>
        </msub>
        <mi>t</mi>
      </mrow>
    </msup>

    <mo>=</mo>

    <mfrac>
      <mn>1</mn>
      <msup>
        <mi>e</mi>
        <mrow>
          <msub>
            <mrow>
              <mi>d</mi>
            </mrow>
            <mn>1</mn>
          </msub>
          <mi>t</mi>
        </mrow>
      </msup>
    </mfrac>
  </mstyle>
</math>


## <a href="https://en.wikipedia.org/wiki/Damping" target="_blank">wikipedia Damping</a>

Underdamped - The system oscillates (at reduced frequency compared to
the undamped case) with the amplitude gradually decreasing to zero.

### Exponential damping

<pre>
f = exp(-(0.0001) * x)
f.plot(x,1,40000)
</pre>

<img src="/assets/images/sage-exp-plot-2016-09-12.png" width="500px">

### sine plot

<pre>
f = 10 * sin(0.01 * x)
f.plot(x,1,10000)
</pre>

<img src="/assets/images/sage-sin-plot-2016-09-12.png" width="500px">

### Damped sine plot

<pre>
f = 10 * exp(-(0.0001) * x) * sin(0.01 * x)
f.plot(x,1,10000)
</pre>

<img src="/assets/images/sage-damped-sin-plot-2016-09-12.png" width="500px">

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
