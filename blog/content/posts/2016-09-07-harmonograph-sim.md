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

# Start

<math xmlns='http://www.w3.org/1998/Math/MathML' display='block'>
  <mstyle mathsize="1.6em">
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
  </mstyle>
</math>


## <a href="https://en.wikipedia.org/wiki/Damping" target="_blank">wikipedia Damping</a>

Underdamped - The system oscillates (at reduced frequency compared to
the undamped case) with the amplitude gradually decreasing to zero.

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
