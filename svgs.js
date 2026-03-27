const DRINK_SVGS = {
  'ein': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwein" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="1"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbein"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmein"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlein"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxein"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsein"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpein"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="eg" cx="44%" cy="60%" r="72%">
    <stop offset="0%" stop-color="#98c478" stop-opacity="0.86"/>
    <stop offset="55%" stop-color="#6a9e48" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#406e20" stop-opacity="0.74"/>
  </radialGradient>
  <radialGradient id="ef" cx="43%" cy="38%" r="75%">
    <stop offset="0%" stop-color="#fefdf6" stop-opacity="0.95"/>
    <stop offset="65%" stop-color="#f2ead8" stop-opacity="0.84"/>
    <stop offset="100%" stop-color="#e4d8bc" stop-opacity="0.56"/>
  </radialGradient>
  <linearGradient id="ebl" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#dce8c8" stop-opacity="0.66"/>
    <stop offset="55%" stop-color="#a8cc80" stop-opacity="0.16"/>
    <stop offset="100%" stop-color="#78b050" stop-opacity="0"/>
  </linearGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsein)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsein)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#eg)" clip-path="url(#cpein)"/>
  
  <ellipse cx="44" cy="58" rx="22" ry="28" fill="#2e5818"  opacity="0.13" filter="url(#fmein)"  clip-path="url(#cpein)"/>
  <ellipse cx="25" cy="44" rx="14" ry="18" fill="#2e5818"  opacity="0.08" filter="url(#fxlein)" clip-path="url(#cpein)"/>
  <ellipse cx="54" cy="36" rx="10" ry="14" fill="#2e5818"  opacity="0.06" filter="url(#fxlein)" clip-path="url(#cpein)"/>
  <ellipse cx="30" cy="55" rx="16" ry="12" fill="#c8e4a0" opacity="0.10" filter="url(#fmein)"  clip-path="url(#cpein)"/>
  
  <ellipse cx="22" cy="51" rx="10" ry="6"  fill="rgba(210,238,210,0.09)" filter="url(#fxxein)" clip-path="url(#cpein)"/>
  <ellipse cx="22" cy="51" rx="7"  ry="4"   fill="rgba(210,238,210,0.22)"        filter="url(#fmein)"  clip-path="url(#cpein)"/>
  <ellipse cx="40" cy="49" rx="11" ry="5"   fill="rgba(210,238,210,0.17)"   filter="url(#fmein)"  clip-path="url(#cpein)"/>
  <ellipse cx="57" cy="52"   rx="8"  ry="4.5" fill="rgba(210,238,210,0.13)"   filter="url(#fmein)"  clip-path="url(#cpein)"/>
  <ellipse cx="20" cy="49" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbein)"   clip-path="url(#cpein)"/>
  <path d="M18,22 Q40,19 62,22 L62,46 Q40,43 18,46 Z" fill="url(#ef)" clip-path="url(#cpein)"/>
  <ellipse cx="40" cy="46" rx="28" ry="15" fill="url(#ebl)" clip-path="url(#cpein)"/>
  <ellipse cx="24" cy="30" rx="13" ry="8" fill="rgba(255,255,255,0.42)" filter="url(#fbein)" clip-path="url(#cpein)"/>
  <ellipse cx="43" cy="25" rx="17" ry="9" fill="rgba(255,255,255,0.50)" filter="url(#fbein)" clip-path="url(#cpein)"/>
  <ellipse cx="58" cy="32" rx="11" ry="7" fill="rgba(255,255,255,0.36)" filter="url(#fbein)" clip-path="url(#cpein)"/>
  <path d="M22,29 Q32,24 40,28 Q48,24 58,29" stroke="#4a7828" stroke-width="1.1" fill="none" opacity="0.28" stroke-linecap="round" clip-path="url(#cpein)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpein)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwein)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'reg': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwreg" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="7"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbreg"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmreg"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlreg"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxreg"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsreg"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpreg"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="rm" cx="43%" cy="50%" r="72%">
    <stop offset="0%" stop-color="#b0ce88" stop-opacity="0.86"/>
    <stop offset="50%" stop-color="#82ac58" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#567830" stop-opacity="0.74"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsreg)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsreg)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#rm)" clip-path="url(#cpreg)"/>
  
  <ellipse cx="44" cy="58" rx="22" ry="28" fill="#2e5818"  opacity="0.13" filter="url(#fmreg)"  clip-path="url(#cpreg)"/>
  <ellipse cx="25" cy="44" rx="14" ry="18" fill="#2e5818"  opacity="0.08" filter="url(#fxlreg)" clip-path="url(#cpreg)"/>
  <ellipse cx="54" cy="36" rx="10" ry="14" fill="#2e5818"  opacity="0.06" filter="url(#fxlreg)" clip-path="url(#cpreg)"/>
  <ellipse cx="30" cy="55" rx="16" ry="12" fill="#c8e4a0" opacity="0.10" filter="url(#fmreg)"  clip-path="url(#cpreg)"/>
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(215,238,215,0.08)" filter="url(#fxxreg)" clip-path="url(#cpreg)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(215,238,215,0.20)"        filter="url(#fmreg)"  clip-path="url(#cpreg)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(215,238,215,0.16)"   filter="url(#fmreg)"  clip-path="url(#cpreg)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(215,238,215,0.12)"   filter="url(#fmreg)"  clip-path="url(#cpreg)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbreg)"   clip-path="url(#cpreg)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpreg)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwreg)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'str': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwstr" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="9"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <!-- Strong turbulence for organic mixing at boundaries -->
  <filter id="turb-str" x="-25%" y="-25%" width="150%" height="150%">
    <feTurbulence type="turbulence" baseFrequency="0.06" numOctaves="4" seed="17" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <!-- Moderate turbulence for milk patches -->
  <filter id="turb-milk" x="-25%" y="-25%" width="150%" height="150%">
    <feTurbulence type="turbulence" baseFrequency="0.05" numOctaves="3" seed="23" result="noise"/>
    <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbstr"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmstr"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlstr"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxstr"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsstr"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpstr"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  <radialGradient id="sgstr" cx="43%" cy="28%" r="60%">
    <stop offset="0%"   stop-color="#a8d27a" stop-opacity="0.86"/>
    <stop offset="55%"  stop-color="#76a64c" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#4a7a22" stop-opacity="0.74"/>
  </radialGradient>
  <radialGradient id="srstr" cx="45%" cy="88%" r="38%">
    <stop offset="0%"   stop-color="#c81830" stop-opacity="0.90"/>
    <stop offset="55%"  stop-color="#a00820" stop-opacity="0.85"/>
    <stop offset="100%" stop-color="#780410" stop-opacity="0.78"/>
  </radialGradient>
  <!-- Vertical depth gradient for the red layer: darker bottom, lighter top -->
  <linearGradient id="str-depth" x1="0" y1="1" x2="0" y2="0">
    <stop offset="0%"   stop-color="#6a0210" stop-opacity="0.45"/>
    <stop offset="40%"  stop-color="#c01028" stop-opacity="0.20"/>
    <stop offset="100%" stop-color="#e84060" stop-opacity="0"/>
  </linearGradient>
</defs>
<!-- White sticker halo -->
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsstr)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsstr)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

<!-- === LIQUID CONTENTS === -->
<!-- MATCHA fills top ~55% -->
<path d="M18,22 Q40,19 62,22 L62,56 Q40,53 18,56 Z" fill="url(#sgstr)" clip-path="url(#cpstr)"/>
<!-- Matcha texture/cloudiness -->
<ellipse cx="44" cy="38" rx="20" ry="18" fill="#2e5818" opacity="0.13" filter="url(#fmstr)"  clip-path="url(#cpstr)"/>
<ellipse cx="25" cy="30" rx="13" ry="14" fill="#2e5818" opacity="0.08" filter="url(#fxlstr)" clip-path="url(#cpstr)"/>
<ellipse cx="54" cy="28" rx="9"  ry="12" fill="#2e5818" opacity="0.06" filter="url(#fxlstr)" clip-path="url(#cpstr)"/>

<!-- RED STRAWBERRY fills bottom ~35% — rich red with vertical depth -->
<path d="M18,72 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,72 Q40,69 18,72 Z" fill="url(#srstr)" clip-path="url(#cpstr)"/>
<!-- Vertical depth: darker at bottom, lightens upward -->
<path d="M18,72 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,72 Q40,69 18,72 Z" fill="url(#str-depth)" clip-path="url(#cpstr)"/>
<!-- Dark depth at very bottom center -->
<ellipse cx="38" cy="80" rx="16" ry="7" fill="#580208" opacity="0.32" filter="url(#fmstr)" clip-path="url(#cpstr)"/>
<!-- Subtle shine/highlight left side of red -->
<ellipse cx="22" cy="75" rx="5" ry="8" fill="#f06080" opacity="0.22" filter="url(#fmstr)" clip-path="url(#cpstr)"/>

<!-- === MILK SWIRLING INTO BOTH ZONES — organic displaced patches === -->
<!-- Milk swirls into RED (bottom zone) — displaced, pink-tinted milk -->
<ellipse cx="38" cy="72" rx="17" ry="7"  fill="rgba(252,238,240,0.70)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="20" cy="74" rx="10" ry="5"  fill="rgba(252,240,242,0.58)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="56" cy="73" rx="8"  ry="4"  fill="rgba(250,236,238,0.52)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="30" cy="70" rx="9"  ry="3"  fill="rgba(254,242,244,0.44)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="50" cy="70" rx="7"  ry="3"  fill="rgba(252,240,242,0.40)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>

<!-- Pure milk zone — center, turbulence-warped so edges are ragged/uneven -->
<ellipse cx="36" cy="64" rx="19" ry="8"  fill="rgba(254,251,247,0.75)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="20" cy="65" rx="11" ry="5"  fill="rgba(255,252,248,0.62)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="55" cy="65" rx="9"  ry="4"  fill="rgba(253,250,246,0.56)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="30" cy="62" rx="10" ry="3"  fill="rgba(252,249,245,0.50)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="48" cy="63" rx="8"  ry="3"  fill="rgba(252,250,246,0.46)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="22" cy="61" rx="7"  ry="2"  fill="rgba(250,248,244,0.40)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>
<ellipse cx="44" cy="61" rx="9"  ry="3"  fill="rgba(250,248,244,0.36)" filter="url(#turb-milk)" clip-path="url(#cpstr)"/>

<!-- Milk swirls INTO MATCHA (green zone) — green-tinted milk, displaced -->
<ellipse cx="34" cy="56" rx="16" ry="6"  fill="rgba(218,242,195,0.55)" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="54" cy="57" rx="10" ry="4"  fill="rgba(220,244,198,0.44)" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="20" cy="57" rx="8"  ry="3"  fill="rgba(215,240,190,0.38)" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="44" cy="58" rx="9"  ry="3"  fill="rgba(218,242,195,0.32)" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="24" cy="55" rx="6"  ry="2"  fill="rgba(215,240,190,0.28)" filter="url(#turb-str)" clip-path="url(#cpstr)"/>

<!-- Red bleeding up into milk zone — ragged red wisps -->
<ellipse cx="30" cy="67" rx="13" ry="5"  fill="#da3050" opacity="0.18" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="54" cy="68" rx="9"  ry="4"  fill="#d22848" opacity="0.15" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="19" cy="66" rx="7"  ry="3"  fill="#dc3858" opacity="0.13" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="44" cy="66" rx="10" ry="3"  fill="#e46080" opacity="0.11" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="26" cy="63" rx="8"  ry="3"  fill="#ec8090" opacity="0.09" filter="url(#turb-str)" clip-path="url(#cpstr)"/>
<ellipse cx="56" cy="62" rx="6"  ry="2"  fill="#ee90a0" opacity="0.07" filter="url(#turb-str)" clip-path="url(#cpstr)"/>

<!-- Ice in matcha zone -->
<ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(215,238,215,0.09)" filter="url(#fxxstr)" clip-path="url(#cpstr)"/>
<ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(215,238,215,0.20)"  filter="url(#fmstr)"  clip-path="url(#cpstr)"/>
<ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(215,238,215,0.16)"  filter="url(#fmstr)"  clip-path="url(#cpstr)"/>
<ellipse cx="57" cy="28" rx="8"  ry="4.5" fill="rgba(215,238,215,0.12)"  filter="url(#fmstr)"  clip-path="url(#cpstr)"/>
<ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbstr)"  clip-path="url(#cpstr)"/>

<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpstr)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwstr)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'jas': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwjas" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="4"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbjas"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmjas"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxljas"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxjas"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsjas"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpjas"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <linearGradient id="jtg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"   stop-color="#a0c870" stop-opacity="0.80"/>
    <stop offset="22%"  stop-color="#aec870" stop-opacity="0.65"/>
    <stop offset="45%"  stop-color="#c4c268" stop-opacity="0.48"/>
    <stop offset="68%"  stop-color="#d4bc68" stop-opacity="0.38"/>
    <stop offset="100%" stop-color="#d0b460" stop-opacity="0.34"/>
  </linearGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsjas)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsjas)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#jtg)" clip-path="url(#cpjas)"/>
  <ellipse cx="28" cy="48" rx="10" ry="8" fill="#c8a048" opacity="0.10" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="52" cy="62" rx="8"  ry="7" fill="#c0a040" opacity="0.09" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="34" cy="70" rx="12" ry="8" fill="#c8a848" opacity="0.10" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="48" cy="44" rx="9"  ry="7" fill="#b8b860" opacity="0.08" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="22" cy="66" rx="8"  ry="6" fill="#c4a848" opacity="0.08" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="38" cy="54" rx="18" ry="14" fill="rgba(255,250,230,0.18)" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="24" cy="64" rx="2.5" ry="1.4" fill="#f8ecd8" opacity="0.38" transform="rotate(20,24,64)" clip-path="url(#cpjas)"/>
  <ellipse cx="52" cy="58" rx="2"   ry="1.2" fill="#f8ecd8" opacity="0.32" transform="rotate(-14,52,58)" clip-path="url(#cpjas)"/>
  
  <ellipse cx="22" cy="46" rx="10" ry="6"  fill="rgba(228,222,196,0.07)" filter="url(#fxxjas)" clip-path="url(#cpjas)"/>
  <ellipse cx="22" cy="46" rx="7"  ry="4"   fill="rgba(228,222,196,0.18)"        filter="url(#fmjas)"  clip-path="url(#cpjas)"/>
  <ellipse cx="40" cy="44" rx="11" ry="5"   fill="rgba(228,222,196,0.14)"   filter="url(#fmjas)"  clip-path="url(#cpjas)"/>
  <ellipse cx="57" cy="47"   rx="8"  ry="4.5" fill="rgba(228,222,196,0.11)"   filter="url(#fmjas)"  clip-path="url(#cpjas)"/>
  <ellipse cx="20" cy="44" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbjas)"   clip-path="url(#cpjas)"/>
  <path d="M18,22 Q40,19 62,22 L62,50 Q40,47 18,50 Z" fill="rgba(148,200,105,0.72)" clip-path="url(#cpjas)"/>
  <ellipse cx="30" cy="49" rx="11" ry="6" fill="rgba(120,178,80,0.22)" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="52" cy="51" rx="9"  ry="5" fill="rgba(120,178,80,0.18)" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="40" cy="53" rx="8"  ry="4" fill="rgba(120,178,80,0.14)" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="22" cy="52" rx="6"  ry="4" fill="rgba(120,178,80,0.12)" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="58" cy="50" rx="6"  ry="4" fill="rgba(120,178,80,0.10)" filter="url(#fxljas)" clip-path="url(#cpjas)"/>
  <ellipse cx="26" cy="31" rx="13" ry="7.5" fill="rgba(195,232,168,0.38)" filter="url(#fbjas)" clip-path="url(#cpjas)"/>
  <ellipse cx="46" cy="27" rx="17" ry="9"   fill="rgba(200,238,175,0.44)" filter="url(#fbjas)" clip-path="url(#cpjas)"/>
  <ellipse cx="58" cy="33" rx="11" ry="6.5" fill="rgba(192,228,162,0.32)" filter="url(#fbjas)" clip-path="url(#cpjas)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpjas)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwjas)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'pan': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwpan" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="5"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbpan"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmpan"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlpan"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxpan"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fspan"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cppan"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"   stop-color="#4e9244" stop-opacity="0.84"/>
    <stop offset="40%"  stop-color="#5e9e50" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#8ac870" stop-opacity="0.74"/>
  </linearGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fspan)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fspan)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#pg)" clip-path="url(#cppan)"/>
  <ellipse cx="40" cy="72" rx="28" ry="18" fill="#a8e090" opacity="0.26" filter="url(#fxlpan)" clip-path="url(#cppan)"/>
  <ellipse cx="40" cy="75" rx="24" ry="12" fill="rgba(225,245,215,0.28)" filter="url(#fmpan)" clip-path="url(#cppan)"/>
  <ellipse cx="40" cy="34" rx="26" ry="20" fill="#205820" opacity="0.14" filter="url(#fxlpan)" clip-path="url(#cppan)"/>
  <ellipse cx="28" cy="28" rx="14" ry="12" fill="#287028" opacity="0.09" filter="url(#fxlpan)" clip-path="url(#cppan)"/>
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(200,230,200,0.08)" filter="url(#fxxpan)" clip-path="url(#cppan)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(200,230,200,0.20)"        filter="url(#fmpan)"  clip-path="url(#cppan)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(200,230,200,0.16)"   filter="url(#fmpan)"  clip-path="url(#cppan)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(200,230,200,0.12)"   filter="url(#fmpan)"  clip-path="url(#cppan)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbpan)"   clip-path="url(#cppan)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cppan)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwpan)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'coc': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwcoc" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="6"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbcoc"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmcoc"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlcoc"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxcoc"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fscoc"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpcoc"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="cb" cx="45%" cy="62%" r="68%">
    <stop offset="0%"   stop-color="#f4f7f0" stop-opacity="0.84"/>
    <stop offset="55%"  stop-color="#ddecd4" stop-opacity="0.74"/>
    <stop offset="100%" stop-color="#c5d8bc" stop-opacity="0.62"/>
  </radialGradient>
  <radialGradient id="cg" cx="43%" cy="36%" r="72%">
    <stop offset="0%"   stop-color="#c8eba8" stop-opacity="0.86"/>
    <stop offset="58%"  stop-color="#9ec880" stop-opacity="0.78"/>
    <stop offset="100%" stop-color="#70a458" stop-opacity="0.68"/>
  </radialGradient>
  <linearGradient id="cbl" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"   stop-color="#cce8b0" stop-opacity="0.68"/>
    <stop offset="60%"  stop-color="#a0cc88" stop-opacity="0.14"/>
    <stop offset="100%" stop-color="#96c870" stop-opacity="0"/>
  </linearGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fscoc)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fscoc)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#cb)" clip-path="url(#cpcoc)"/>
  <ellipse cx="43" cy="60" rx="22" ry="26" fill="#bcd8b0" opacity="0.18" filter="url(#fmcoc)" clip-path="url(#cpcoc)"/>
  
  <ellipse cx="22" cy="49" rx="10" ry="6"  fill="rgba(225,242,235,0.07)" filter="url(#fxxcoc)" clip-path="url(#cpcoc)"/>
  <ellipse cx="22" cy="49" rx="7"  ry="4"   fill="rgba(225,242,235,0.18)"        filter="url(#fmcoc)"  clip-path="url(#cpcoc)"/>
  <ellipse cx="40" cy="47" rx="11" ry="5"   fill="rgba(225,242,235,0.14)"   filter="url(#fmcoc)"  clip-path="url(#cpcoc)"/>
  <ellipse cx="57" cy="50"   rx="8"  ry="4.5" fill="rgba(225,242,235,0.11)"   filter="url(#fmcoc)"  clip-path="url(#cpcoc)"/>
  <ellipse cx="20" cy="47" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbcoc)"   clip-path="url(#cpcoc)"/>
  <path d="M18,22 Q40,19 62,22 L62,46 Q40,43 18,46 Z" fill="url(#cg)" clip-path="url(#cpcoc)"/>
  <ellipse cx="40" cy="46" rx="28" ry="15" fill="url(#cbl)" clip-path="url(#cpcoc)"/>
  <ellipse cx="26" cy="30" rx="13" ry="7.5" fill="rgba(200,238,178,0.40)" filter="url(#fbcoc)" clip-path="url(#cpcoc)"/>
  <ellipse cx="45" cy="25" rx="17" ry="9"   fill="rgba(210,244,185,0.48)" filter="url(#fbcoc)" clip-path="url(#cpcoc)"/>
  <ellipse cx="58" cy="31" rx="11" ry="6.5" fill="rgba(198,234,172,0.34)" filter="url(#fbcoc)" clip-path="url(#cpcoc)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpcoc)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwcoc)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'map': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwmap" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="7"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbmap"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmmap"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlmap"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxmap"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsmap"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpmap"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="mm" cx="43%" cy="50%" r="72%">
    <stop offset="0%"  stop-color="#b2cc8a" stop-opacity="0.86"/>
    <stop offset="50%" stop-color="#8aaa60" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#648038" stop-opacity="0.74"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsmap)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsmap)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#mm)" clip-path="url(#cpmap)"/>
  
  <ellipse cx="44" cy="58" rx="22" ry="28" fill="#385018"  opacity="0.13" filter="url(#fmmap)"  clip-path="url(#cpmap)"/>
  <ellipse cx="25" cy="44" rx="14" ry="18" fill="#385018"  opacity="0.08" filter="url(#fxlmap)" clip-path="url(#cpmap)"/>
  <ellipse cx="54" cy="36" rx="10" ry="14" fill="#385018"  opacity="0.06" filter="url(#fxlmap)" clip-path="url(#cpmap)"/>
  <ellipse cx="30" cy="55" rx="16" ry="12" fill="#ccd8a0" opacity="0.10" filter="url(#fmmap)"  clip-path="url(#cpmap)"/>
  <ellipse cx="40" cy="28" rx="26" ry="12" fill="rgba(190,110,20,0.07)" filter="url(#fxlmap)" clip-path="url(#cpmap)"/>
  <path d="M21,25 Q32,21 40,25 Q48,21 58,25" stroke="#b05810" stroke-width="1.1" fill="none" opacity="0.36" stroke-linecap="round" clip-path="url(#cpmap)"/>
  
  <ellipse cx="22" cy="33" rx="10" ry="6"  fill="rgba(210,228,195,0.08)" filter="url(#fxxmap)" clip-path="url(#cpmap)"/>
  <ellipse cx="22" cy="33" rx="7"  ry="4"   fill="rgba(210,228,195,0.20)"        filter="url(#fmmap)"  clip-path="url(#cpmap)"/>
  <ellipse cx="40" cy="31" rx="11" ry="5"   fill="rgba(210,228,195,0.16)"   filter="url(#fmmap)"  clip-path="url(#cpmap)"/>
  <ellipse cx="57" cy="34"   rx="8"  ry="4.5" fill="rgba(210,228,195,0.12)"   filter="url(#fmmap)"  clip-path="url(#cpmap)"/>
  <ellipse cx="20" cy="31" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbmap)"   clip-path="url(#cpmap)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpmap)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwmap)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'man': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwman" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="8"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbman"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmman"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlman"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxman"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsman"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpman"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="mg" cx="43%" cy="32%" r="65%">
    <stop offset="0%"   stop-color="#a8d278" stop-opacity="0.86"/>
    <stop offset="55%"  stop-color="#76a44c" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#4c7a22" stop-opacity="0.74"/>
  </radialGradient>
  <radialGradient id="mo" cx="45%" cy="84%" r="40%">
    <stop offset="0%"   stop-color="#f2b238" stop-opacity="0.84"/>
    <stop offset="60%"  stop-color="#da8c1c" stop-opacity="0.74"/>
    <stop offset="100%" stop-color="#b26808" stop-opacity="0.62"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsman)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsman)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,70 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,70 Q40,67 18,70 Z" fill="url(#mo)" clip-path="url(#cpman)"/>
  <ellipse cx="40" cy="70" rx="30" ry="16" fill="#dba020" opacity="0.30" filter="url(#fxlman)" clip-path="url(#cpman)"/>
  <ellipse cx="40" cy="63" rx="28" ry="14" fill="#d4aa30" opacity="0.12" filter="url(#fxlman)" clip-path="url(#cpman)"/>
  <path d="M18,22 Q40,19 62,22 L62,74 Q40,71 18,74 Z" fill="url(#mg)" clip-path="url(#cpman)"/>
  
  <ellipse cx="44" cy="58" rx="22" ry="28" fill="#285810"  opacity="0.13" filter="url(#fmman)"  clip-path="url(#cpman)"/>
  <ellipse cx="25" cy="44" rx="14" ry="18" fill="#285810"  opacity="0.08" filter="url(#fxlman)" clip-path="url(#cpman)"/>
  <ellipse cx="54" cy="36" rx="10" ry="14" fill="#285810"  opacity="0.06" filter="url(#fxlman)" clip-path="url(#cpman)"/>
  <ellipse cx="30" cy="55" rx="16" ry="12" fill="#c4e295" opacity="0.10" filter="url(#fmman)"  clip-path="url(#cpman)"/>
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(215,235,210,0.08)" filter="url(#fxxman)" clip-path="url(#cpman)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(215,235,210,0.20)"        filter="url(#fmman)"  clip-path="url(#cpman)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(215,235,210,0.16)"   filter="url(#fmman)"  clip-path="url(#cpman)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(215,235,210,0.12)"   filter="url(#fmman)"  clip-path="url(#cpman)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbman)"   clip-path="url(#cpman)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpman)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwman)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'ube': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwube" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="9"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbube"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmube"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlube"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxube"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsube"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpube"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="um" cx="43%" cy="60%" r="70%">
    <stop offset="0%"   stop-color="#9ccc74" stop-opacity="0.86"/>
    <stop offset="50%"  stop-color="#72ac4c" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#488a28" stop-opacity="0.74"/>
  </radialGradient>
  <radialGradient id="uf" cx="43%" cy="36%" r="74%">
    <stop offset="0%"   stop-color="#f4e8ff" stop-opacity="0.93"/>
    <stop offset="62%"  stop-color="#dec8f8" stop-opacity="0.82"/>
    <stop offset="100%" stop-color="#c4a8e8" stop-opacity="0.58"/>
  </radialGradient>
  <linearGradient id="ubl" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"   stop-color="#d8c0f2" stop-opacity="0.68"/>
    <stop offset="60%"  stop-color="#b890e0" stop-opacity="0.14"/>
    <stop offset="100%" stop-color="#a870d8" stop-opacity="0"/>
  </linearGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsube)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsube)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#um)" clip-path="url(#cpube)"/>
  
  <ellipse cx="44" cy="58" rx="22" ry="28" fill="#306018"  opacity="0.13" filter="url(#fmube)"  clip-path="url(#cpube)"/>
  <ellipse cx="25" cy="44" rx="14" ry="18" fill="#306018"  opacity="0.08" filter="url(#fxlube)" clip-path="url(#cpube)"/>
  <ellipse cx="54" cy="36" rx="10" ry="14" fill="#306018"  opacity="0.06" filter="url(#fxlube)" clip-path="url(#cpube)"/>
  <ellipse cx="30" cy="55" rx="16" ry="12" fill="#b8e09a" opacity="0.10" filter="url(#fmube)"  clip-path="url(#cpube)"/>
  
  <ellipse cx="22" cy="49" rx="10" ry="6"  fill="rgba(210,235,210,0.08)" filter="url(#fxxube)" clip-path="url(#cpube)"/>
  <ellipse cx="22" cy="49" rx="7"  ry="4"   fill="rgba(210,235,210,0.20)"        filter="url(#fmube)"  clip-path="url(#cpube)"/>
  <ellipse cx="40" cy="47" rx="11" ry="5"   fill="rgba(210,235,210,0.16)"   filter="url(#fmube)"  clip-path="url(#cpube)"/>
  <ellipse cx="57" cy="50"   rx="8"  ry="4.5" fill="rgba(210,235,210,0.12)"   filter="url(#fmube)"  clip-path="url(#cpube)"/>
  <ellipse cx="20" cy="47" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbube)"   clip-path="url(#cpube)"/>
  <path d="M18,22 Q40,19 62,22 L62,46 Q40,43 18,46 Z" fill="url(#uf)" clip-path="url(#cpube)"/>
  <ellipse cx="40" cy="46" rx="28" ry="15" fill="url(#ubl)" clip-path="url(#cpube)"/>
  <ellipse cx="25" cy="31" rx="13" ry="8" fill="rgba(248,228,255,0.44)" filter="url(#fbube)" clip-path="url(#cpube)"/>
  <ellipse cx="44" cy="26" rx="17" ry="9" fill="rgba(248,235,255,0.50)" filter="url(#fbube)" clip-path="url(#cpube)"/>
  <ellipse cx="58" cy="32" rx="11" ry="7" fill="rgba(240,222,255,0.38)" filter="url(#fbube)" clip-path="url(#cpube)"/>
  <path d="M22,29 Q32,24 40,28 Q48,24 58,29" stroke="#7830b0" stroke-width="0.9" fill="none" opacity="0.22" stroke-linecap="round" clip-path="url(#cpube)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpube)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwube)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'vc': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwvc" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="10"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbvc"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmvc"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlvc"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxvc"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsvc"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpvc"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="vcb" cx="44%" cy="50%" r="72%">
    <stop offset="0%"   stop-color="#c08858" stop-opacity="0.82"/>
    <stop offset="45%"  stop-color="#a87040" stop-opacity="0.78"/>
    <stop offset="100%" stop-color="#8c5828" stop-opacity="0.74"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsvc)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsvc)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#vcb)" clip-path="url(#cpvc)"/>
  <ellipse cx="40" cy="66" rx="22" ry="14" fill="#f0d090" opacity="0.35" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="24" cy="60" rx="14" ry="11" fill="#ecc880" opacity="0.30" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="56" cy="68" rx="12" ry="10" fill="#f4d898" opacity="0.28" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="34" cy="74" rx="16" ry="9"  fill="#f8e0a0" opacity="0.26" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="52" cy="56" rx="11" ry="9"  fill="#e8c070" opacity="0.22" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="28" cy="50" rx="12" ry="8"  fill="#e0b868" opacity="0.18" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="44" cy="44" rx="10" ry="7"  fill="#d8ae60" opacity="0.14" filter="url(#fxlvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="32" cy="34" rx="14" ry="12" fill="#6a3c18" opacity="0.12" filter="url(#fmvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="52" cy="40" rx="10" ry="9"  fill="#7a4820" opacity="0.09" filter="url(#fmvc)" clip-path="url(#cpvc)"/>
  
  <ellipse cx="22" cy="26" rx="10" ry="6"  fill="rgba(220,205,185,0.08)" filter="url(#fxxvc)" clip-path="url(#cpvc)"/>
  <ellipse cx="22" cy="26" rx="7"  ry="4"   fill="rgba(220,205,185,0.20)"        filter="url(#fmvc)"  clip-path="url(#cpvc)"/>
  <ellipse cx="40" cy="24" rx="11" ry="5"   fill="rgba(220,205,185,0.16)"   filter="url(#fmvc)"  clip-path="url(#cpvc)"/>
  <ellipse cx="57" cy="27"   rx="8"  ry="4.5" fill="rgba(220,205,185,0.12)"   filter="url(#fmvc)"  clip-path="url(#cpvc)"/>
  <ellipse cx="20" cy="24" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbvc)"   clip-path="url(#cpvc)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpvc)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwvc)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'bs': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwbs" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="11"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbbs"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmbs"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlbs"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxbs"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsbs"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpbs"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="bsb" cx="43%" cy="56%" r="70%">
    <stop offset="0%"   stop-color="#ca7c34" stop-opacity="0.86"/>
    <stop offset="50%"  stop-color="#a25c22" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#7a3c12" stop-opacity="0.74"/>
  </radialGradient>
  <radialGradient id="bsf" cx="43%" cy="36%" r="74%">
    <stop offset="0%"   stop-color="#f4e1a4" stop-opacity="0.92"/>
    <stop offset="60%"  stop-color="#ead282" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#daba5a" stop-opacity="0.58"/>
  </radialGradient>
  <linearGradient id="bsbl" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%"   stop-color="#ead090" stop-opacity="0.68"/>
    <stop offset="60%"  stop-color="#c08040" stop-opacity="0.14"/>
    <stop offset="100%" stop-color="#b07030" stop-opacity="0"/>
  </linearGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsbs)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsbs)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#bsb)" clip-path="url(#cpbs)"/>
  <ellipse cx="40" cy="60" rx="23" ry="27" fill="#582808" opacity="0.13" filter="url(#fmbs)" clip-path="url(#cpbs)"/>
  
  <ellipse cx="22" cy="47" rx="10" ry="6"  fill="rgba(228,215,195,0.08)" filter="url(#fxxbs)" clip-path="url(#cpbs)"/>
  <ellipse cx="22" cy="47" rx="7"  ry="4"   fill="rgba(228,215,195,0.20)"        filter="url(#fmbs)"  clip-path="url(#cpbs)"/>
  <ellipse cx="40" cy="45" rx="11" ry="5"   fill="rgba(228,215,195,0.16)"   filter="url(#fmbs)"  clip-path="url(#cpbs)"/>
  <ellipse cx="57" cy="48"   rx="8"  ry="4.5" fill="rgba(228,215,195,0.12)"   filter="url(#fmbs)"  clip-path="url(#cpbs)"/>
  <ellipse cx="20" cy="45" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbbs)"   clip-path="url(#cpbs)"/>
  <path d="M18,22 Q40,19 62,22 L62,46 Q40,43 18,46 Z" fill="url(#bsf)" clip-path="url(#cpbs)"/>
  <ellipse cx="40" cy="46" rx="28" ry="15" fill="url(#bsbl)" clip-path="url(#cpbs)"/>
  <ellipse cx="27" cy="31" rx="11" ry="7" fill="rgba(255,246,210,0.40)" filter="url(#fbbs)" clip-path="url(#cpbs)"/>
  <ellipse cx="46" cy="26" rx="15" ry="8" fill="rgba(255,250,215,0.46)" filter="url(#fbbs)" clip-path="url(#cpbs)"/>
  <path d="M22,28 Q32,23 40,27 Q48,23 58,28" stroke="#784010" stroke-width="1.0" fill="none" opacity="0.32" stroke-linecap="round" clip-path="url(#cpbs)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpbs)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwbs)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'wm': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwwm" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="12"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbwm"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmwm"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlwm"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxwm"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fswm"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpwm"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="wmb" cx="43%" cy="50%" r="72%">
    <stop offset="0%"   stop-color="#eedcc0" stop-opacity="0.86"/>
    <stop offset="45%"  stop-color="#e4cead" stop-opacity="0.80"/>
    <stop offset="100%" stop-color="#d8c098" stop-opacity="0.74"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fswm)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fswm)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#wmb)" clip-path="url(#cpwm)"/>
  <!-- Light espresso tint at top — very subtle coffee warmth -->
  <ellipse cx="40" cy="26" rx="26" ry="12" fill="#b07838" opacity="0.22" filter="url(#fxlwm)" clip-path="url(#cpwm)"/>
  <ellipse cx="34" cy="32" rx="18" ry="10" fill="#c08840" opacity="0.14" filter="url(#fxlwm)" clip-path="url(#cpwm)"/>
  <!-- Cream lightness in lower half -->
  <ellipse cx="40" cy="62" rx="22" ry="22" fill="rgba(255,248,234,0.28)" filter="url(#fmwm)" clip-path="url(#cpwm)"/>
  <ellipse cx="26" cy="44" rx="10" ry="15" fill="rgba(255,245,228,0.22)" clip-path="url(#cpwm)"/>
  
  <ellipse cx="22" cy="31" rx="10" ry="6"  fill="rgba(235,226,210,0.08)" filter="url(#fxxwm)" clip-path="url(#cpwm)"/>
  <ellipse cx="22" cy="31" rx="7"  ry="4"   fill="rgba(235,226,210,0.20)"        filter="url(#fmwm)"  clip-path="url(#cpwm)"/>
  <ellipse cx="40" cy="29" rx="11" ry="5"   fill="rgba(235,226,210,0.16)"   filter="url(#fmwm)"  clip-path="url(#cpwm)"/>
  <ellipse cx="57" cy="32"   rx="8"  ry="4.5" fill="rgba(235,226,210,0.12)"   filter="url(#fmwm)"  clip-path="url(#cpwm)"/>
  <ellipse cx="20" cy="29" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbwm)"   clip-path="url(#cpwm)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpwm)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwwm)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'moc': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwmoc" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="13"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbmoc"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmmoc"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxlmoc"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxmoc"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsmoc"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpmoc"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="mcb" cx="44%" cy="52%" r="72%">
    <stop offset="0%"   stop-color="#8a4820" stop-opacity="0.88"/>
    <stop offset="45%"  stop-color="#6e3414" stop-opacity="0.84"/>
    <stop offset="100%" stop-color="#52200c" stop-opacity="0.80"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsmoc)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsmoc)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#mcb)" clip-path="url(#cpmoc)"/>
  <!-- Chocolate warmth — mid tones -->
  <ellipse cx="36" cy="52" rx="22" ry="20" fill="#a86030" opacity="0.22" filter="url(#fxlmoc)" clip-path="url(#cpmoc)"/>
  <!-- Slight depth top -->
  <ellipse cx="32" cy="34" rx="16" ry="13" fill="#3a1808" opacity="0.18" filter="url(#fmmoc)" clip-path="url(#cpmoc)"/>
  <!-- Slight creaminess bottom -->
  <ellipse cx="44" cy="70" rx="16" ry="11" fill="#c88040" opacity="0.20" filter="url(#fxlmoc)" clip-path="url(#cpmoc)"/>
  
  <ellipse cx="22" cy="25" rx="10" ry="6"  fill="rgba(215,205,190,0.07)" filter="url(#fxxmoc)" clip-path="url(#cpmoc)"/>
  <ellipse cx="22" cy="25" rx="7"  ry="4"   fill="rgba(215,205,190,0.18)"        filter="url(#fmmoc)"  clip-path="url(#cpmoc)"/>
  <ellipse cx="40" cy="23" rx="11" ry="5"   fill="rgba(215,205,190,0.14)"   filter="url(#fmmoc)"  clip-path="url(#cpmoc)"/>
  <ellipse cx="57" cy="26"   rx="8"  ry="4.5" fill="rgba(215,205,190,0.11)"   filter="url(#fmmoc)"  clip-path="url(#cpmoc)"/>
  <ellipse cx="20" cy="23" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbmoc)"   clip-path="url(#cpmoc)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpmoc)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwmoc)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'tt': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwtt" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="14"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbtt"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmtt"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxltt"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxtt"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fstt"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cptt"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="tto" cx="44%" cy="55%" r="70%">
    <stop offset="0%"   stop-color="#de6825" stop-opacity="0.90"/>
    <stop offset="50%"  stop-color="#c04818" stop-opacity="0.84"/>
    <stop offset="100%" stop-color="#963010" stop-opacity="0.78"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fstt)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fstt)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#tto)" clip-path="url(#cptt)"/>
  <ellipse cx="40" cy="62" rx="24" ry="24" fill="#702808" opacity="0.16" filter="url(#fmtt)" clip-path="url(#cptt)"/>
  <ellipse cx="40" cy="30" rx="26" ry="18" fill="#f8e8c0" opacity="0.28" filter="url(#fxltt)" clip-path="url(#cptt)"/>
  <ellipse cx="40" cy="26" rx="22" ry="12" fill="#fdf4e0" opacity="0.22" filter="url(#fxltt)" clip-path="url(#cptt)"/>
  
  <ellipse cx="22" cy="47" rx="10" ry="6"  fill="rgba(230,208,182,0.07)" filter="url(#fxxtt)" clip-path="url(#cptt)"/>
  <ellipse cx="22" cy="47" rx="7"  ry="4"   fill="rgba(230,208,182,0.18)"        filter="url(#fmtt)"  clip-path="url(#cptt)"/>
  <ellipse cx="40" cy="45" rx="11" ry="5"   fill="rgba(230,208,182,0.14)"   filter="url(#fmtt)"  clip-path="url(#cptt)"/>
  <ellipse cx="57" cy="48"   rx="8"  ry="4.5" fill="rgba(230,208,182,0.11)"   filter="url(#fmtt)"  clip-path="url(#cptt)"/>
  <ellipse cx="20" cy="45" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbtt)"   clip-path="url(#cptt)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cptt)"/>
<!-- Boba — staggered, centered in drink, clear margin from cup walls -->
<filter id="boba-blur-tt"><feGaussianBlur stdDeviation="0.65"/></filter>
<!-- deep/submerged — y=70–73, well inside -->
<circle cx="32" cy="73" r="2.8" fill="#160802" opacity="0.36" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="43" cy="70" r="3.0" fill="#1a0c04" opacity="0.32" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="53" cy="73" r="2.7" fill="#180a02" opacity="0.34" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<!-- mid depth — y=74–77, cx safely 25–56 -->
<circle cx="25" cy="77" r="3.1" fill="#1c0c04" opacity="0.55" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="34" cy="75" r="3.4" fill="#1a0a02" opacity="0.60" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="43" cy="77" r="3.1" fill="#1e0e04" opacity="0.57" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="52" cy="74" r="3.2" fill="#180a02" opacity="0.58" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<!-- front pile — y=77–80, cx 25–57, staggered heights -->
<circle cx="25" cy="79" r="3.4" fill="#1e0e04" opacity="0.78" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="25" cy="79" r="1.0" fill="rgba(255,255,255,0.16)" clip-path="url(#cptt)"/>
<circle cx="32" cy="77" r="3.7" fill="#160802" opacity="0.83" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="32" cy="77" r="1.2" fill="rgba(255,255,255,0.16)" clip-path="url(#cptt)"/>
<circle cx="39" cy="80" r="3.5" fill="#1c0c04" opacity="0.79" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="39" cy="80" r="1.1" fill="rgba(255,255,255,0.15)" clip-path="url(#cptt)"/>
<circle cx="46" cy="78" r="3.8" fill="#1a0802" opacity="0.85" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="46" cy="78" r="1.2" fill="rgba(255,255,255,0.17)" clip-path="url(#cptt)"/>
<circle cx="53" cy="80" r="3.3" fill="#1e0e04" opacity="0.76" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<circle cx="53" cy="80" r="1.0" fill="rgba(255,255,255,0.15)" clip-path="url(#cptt)"/>
<circle cx="55" cy="77" r="2.8" fill="#180a02" opacity="0.70" filter="url(#boba-blur-tt)" clip-path="url(#cptt)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwtt)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'tg': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwtg" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="15"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbtg"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmtg"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxltg"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxtg"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fstg"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cptg"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="tgb" cx="44%" cy="52%" r="72%">
    <stop offset="0%"   stop-color="#7aaa48" stop-opacity="0.80"/>
    <stop offset="45%"  stop-color="#5e8832" stop-opacity="0.74"/>
    <stop offset="100%" stop-color="#44681e" stop-opacity="0.68"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fstg)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fstg)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#tgb)" clip-path="url(#cptg)"/>
  <ellipse cx="40" cy="52" rx="28" ry="34" fill="rgba(245,252,235,0.26)" filter="url(#fxltg)" clip-path="url(#cptg)"/>
  <ellipse cx="40" cy="60" rx="22" ry="22" fill="#385010" opacity="0.12" filter="url(#fmtg)" clip-path="url(#cptg)"/>
  <ellipse cx="40" cy="28" rx="26" ry="16" fill="#f0f8e0" opacity="0.22" filter="url(#fxltg)" clip-path="url(#cptg)"/>
  
  <ellipse cx="22" cy="47" rx="10" ry="6"  fill="rgba(220,235,208,0.06)" filter="url(#fxxtg)" clip-path="url(#cptg)"/>
  <ellipse cx="22" cy="47" rx="7"  ry="4"   fill="rgba(220,235,208,0.16)"        filter="url(#fmtg)"  clip-path="url(#cptg)"/>
  <ellipse cx="40" cy="45" rx="11" ry="5"   fill="rgba(220,235,208,0.12)"   filter="url(#fmtg)"  clip-path="url(#cptg)"/>
  <ellipse cx="57" cy="48"   rx="8"  ry="4.5" fill="rgba(220,235,208,0.10)"   filter="url(#fmtg)"  clip-path="url(#cptg)"/>
  <ellipse cx="20" cy="45" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbtg)"   clip-path="url(#cptg)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cptg)"/>
<!-- Boba — staggered, contained within drink, clear margin from walls -->
<filter id="boba-blur-tg"><feGaussianBlur stdDeviation="0.65"/></filter>
<!-- deep/submerged — y=70–73 -->
<circle cx="31" cy="72" r="2.7" fill="#160802" opacity="0.34" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="42" cy="70" r="2.9" fill="#1a0c04" opacity="0.30" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="53" cy="73" r="2.6" fill="#180a02" opacity="0.32" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<!-- mid depth — y=74–77, cx 25–55 -->
<circle cx="26" cy="76" r="3.0" fill="#1c0c04" opacity="0.53" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="35" cy="74" r="3.2" fill="#1a0a02" opacity="0.58" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="44" cy="77" r="3.0" fill="#1e0e04" opacity="0.55" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="53" cy="74" r="3.1" fill="#180a02" opacity="0.56" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<!-- front pile — y=77–80, cx 25–57, staggered heights -->
<circle cx="25" cy="78" r="3.3" fill="#1e0e04" opacity="0.77" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="25" cy="78" r="1.0" fill="rgba(255,255,255,0.15)" clip-path="url(#cptg)"/>
<circle cx="32" cy="80" r="3.6" fill="#160802" opacity="0.81" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="32" cy="80" r="1.1" fill="rgba(255,255,255,0.15)" clip-path="url(#cptg)"/>
<circle cx="39" cy="77" r="3.2" fill="#1c0c04" opacity="0.75" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="39" cy="77" r="1.0" fill="rgba(255,255,255,0.14)" clip-path="url(#cptg)"/>
<circle cx="46" cy="79" r="3.8" fill="#1a0802" opacity="0.83" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="46" cy="79" r="1.2" fill="rgba(255,255,255,0.16)" clip-path="url(#cptg)"/>
<circle cx="53" cy="78" r="3.4" fill="#1e0e04" opacity="0.76" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<circle cx="53" cy="78" r="1.1" fill="rgba(255,255,255,0.14)" clip-path="url(#cptg)"/>
<circle cx="55" cy="80" r="2.8" fill="#180a02" opacity="0.68" filter="url(#boba-blur-tg)" clip-path="url(#cptg)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwtg)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'jh': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwjh" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="16"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbjh"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmjh"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxljh"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxjh"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsjh"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpjh"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="jbgjh" cx="44%" cy="48%" r="72%">
    <stop offset="0%"   stop-color="#d8c888" stop-opacity="0.72"/>
    <stop offset="50%"  stop-color="#c8b470" stop-opacity="0.56"/>
    <stop offset="100%" stop-color="#b8a058" stop-opacity="0.40"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsjh)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsjh)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#jbgjh)" clip-path="url(#cpjh)"/>
  <ellipse cx="40" cy="48" rx="26" ry="32" fill="rgba(255,248,225,0.30)" filter="url(#fxxjh)" clip-path="url(#cpjh)"/>
  <ellipse cx="28" cy="36" rx="12" ry="14" fill="#c8b060" opacity="0.12" filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="52" cy="54" rx="10" ry="12" fill="#bea050" opacity="0.10" filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="40" cy="64" rx="16" ry="9"  fill="#c89020" opacity="0.32"        filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="25" cy="57" rx="11" ry="7"  fill="#c89020" opacity="0.23"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="55" cy="61" rx="10" ry="6"  fill="#c89020" opacity="0.20"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="38" cy="73" rx="13" ry="6"  fill="#c89020" opacity="0.18"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="20" cy="67" rx="9"  ry="5"  fill="#c89020" opacity="0.15"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="53" cy="46" rx="9"  ry="5"  fill="#c89020" opacity="0.11"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="28" cy="44" rx="10" ry="4"  fill="#c89020" opacity="0.08"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="44" cy="35" rx="8"  ry="4"  fill="#c89020" opacity="0.06"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  <ellipse cx="23" cy="30" rx="6"  ry="3"  fill="#c89020" opacity="0.04"   filter="url(#fxljh)" clip-path="url(#cpjh)"/>
  
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(230,220,195,0.07)" filter="url(#fxxjh)" clip-path="url(#cpjh)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(230,220,195,0.18)"        filter="url(#fmjh)"  clip-path="url(#cpjh)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(230,220,195,0.14)"   filter="url(#fmjh)"  clip-path="url(#cpjh)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(230,220,195,0.11)"   filter="url(#fmjh)"  clip-path="url(#cpjh)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbjh)"   clip-path="url(#cpjh)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpjh)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwjh)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'jstr': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwjstr" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="17"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbjstr"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmjstr"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxljstr"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxjstr"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsjstr"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpjstr"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="jbgjstr" cx="44%" cy="48%" r="72%">
    <stop offset="0%"   stop-color="#d8c888" stop-opacity="0.72"/>
    <stop offset="50%"  stop-color="#c8b470" stop-opacity="0.56"/>
    <stop offset="100%" stop-color="#b8a058" stop-opacity="0.40"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsjstr)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsjstr)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#jbgjstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="40" cy="48" rx="26" ry="32" fill="rgba(255,248,225,0.30)" filter="url(#fxxjstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="28" cy="36" rx="12" ry="14" fill="#c8b060" opacity="0.12" filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="52" cy="54" rx="10" ry="12" fill="#bea050" opacity="0.10" filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="40" cy="64" rx="16" ry="9"  fill="#e04868" opacity="0.24"        filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="25" cy="57" rx="11" ry="7"  fill="#e04868" opacity="0.17"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="55" cy="61" rx="10" ry="6"  fill="#e04868" opacity="0.15"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="38" cy="73" rx="13" ry="6"  fill="#e04868" opacity="0.13"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="20" cy="67" rx="9"  ry="5"  fill="#e04868" opacity="0.11"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="53" cy="46" rx="9"  ry="5"  fill="#e04868" opacity="0.08"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="28" cy="44" rx="10" ry="4"  fill="#e04868" opacity="0.06"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="44" cy="35" rx="8"  ry="4"  fill="#e04868" opacity="0.04"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="23" cy="30" rx="6"  ry="3"  fill="#e04868" opacity="0.03"   filter="url(#fxljstr)" clip-path="url(#cpjstr)"/>
  
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(230,220,195,0.07)" filter="url(#fxxjstr)" clip-path="url(#cpjstr)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(230,220,195,0.18)"        filter="url(#fmjstr)"  clip-path="url(#cpjstr)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(230,220,195,0.14)"   filter="url(#fmjstr)"  clip-path="url(#cpjstr)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(230,220,195,0.11)"   filter="url(#fmjstr)"  clip-path="url(#cpjstr)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbjstr)"   clip-path="url(#cpjstr)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpjstr)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwjstr)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'jman': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwjmn" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="18"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbjmn"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmjmn"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxljmn"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxjmn"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsjmn"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpjmn"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="jbgjmn" cx="44%" cy="48%" r="72%">
    <stop offset="0%"   stop-color="#d8c888" stop-opacity="0.72"/>
    <stop offset="50%"  stop-color="#c8b470" stop-opacity="0.56"/>
    <stop offset="100%" stop-color="#b8a058" stop-opacity="0.40"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsjmn)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsjmn)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#jbgjmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="40" cy="48" rx="26" ry="32" fill="rgba(255,248,225,0.30)" filter="url(#fxxjmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="28" cy="36" rx="12" ry="14" fill="#c8b060" opacity="0.12" filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="52" cy="54" rx="10" ry="12" fill="#bea050" opacity="0.10" filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="40" cy="64" rx="16" ry="9"  fill="#e8980c" opacity="0.26"        filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="25" cy="57" rx="11" ry="7"  fill="#e8980c" opacity="0.19"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="55" cy="61" rx="10" ry="6"  fill="#e8980c" opacity="0.16"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="38" cy="73" rx="13" ry="6"  fill="#e8980c" opacity="0.14"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="20" cy="67" rx="9"  ry="5"  fill="#e8980c" opacity="0.12"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="53" cy="46" rx="9"  ry="5"  fill="#e8980c" opacity="0.09"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="28" cy="44" rx="10" ry="4"  fill="#e8980c" opacity="0.07"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="44" cy="35" rx="8"  ry="4"  fill="#e8980c" opacity="0.05"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="23" cy="30" rx="6"  ry="3"  fill="#e8980c" opacity="0.03"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(230,220,195,0.07)" filter="url(#fxxjmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(230,220,195,0.18)"        filter="url(#fmjmn)"  clip-path="url(#cpjmn)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(230,220,195,0.14)"   filter="url(#fmjmn)"  clip-path="url(#cpjmn)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(230,220,195,0.11)"   filter="url(#fmjmn)"  clip-path="url(#cpjmn)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbjmn)"   clip-path="url(#cpjmn)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpjmn)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwjmn)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'jpas': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwjp" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="19"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbjp"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmjp"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxljp"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxjp"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsjp"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpjp"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="jbgjp" cx="44%" cy="48%" r="72%">
    <stop offset="0%"   stop-color="#d8c888" stop-opacity="0.72"/>
    <stop offset="50%"  stop-color="#c8b470" stop-opacity="0.56"/>
    <stop offset="100%" stop-color="#b8a058" stop-opacity="0.40"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsjp)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsjp)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#jbgjp)" clip-path="url(#cpjp)"/>
  <ellipse cx="40" cy="48" rx="26" ry="32" fill="rgba(255,248,225,0.30)" filter="url(#fxxjp)" clip-path="url(#cpjp)"/>
  <ellipse cx="28" cy="36" rx="12" ry="14" fill="#c8b060" opacity="0.12" filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="52" cy="54" rx="10" ry="12" fill="#bea050" opacity="0.10" filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="40" cy="64" rx="16" ry="9"  fill="#d8b808" opacity="0.30"        filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="25" cy="57" rx="11" ry="7"  fill="#d8b808" opacity="0.22"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="55" cy="61" rx="10" ry="6"  fill="#d8b808" opacity="0.19"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="38" cy="73" rx="13" ry="6"  fill="#d8b808" opacity="0.17"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="20" cy="67" rx="9"  ry="5"  fill="#d8b808" opacity="0.14"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="53" cy="46" rx="9"  ry="5"  fill="#d8b808" opacity="0.10"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="28" cy="44" rx="10" ry="4"  fill="#d8b808" opacity="0.08"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="44" cy="35" rx="8"  ry="4"  fill="#d8b808" opacity="0.05"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <ellipse cx="23" cy="30" rx="6"  ry="3"  fill="#d8b808" opacity="0.04"   filter="url(#fxljp)" clip-path="url(#cpjp)"/>
  <circle cx="26" cy="68" r="1.2" fill="#2a1400" opacity="0.34" clip-path="url(#cpjp)"/>
  <circle cx="34" cy="72" r="1.1" fill="#2a1400" opacity="0.30" clip-path="url(#cpjp)"/>
  <circle cx="42" cy="69" r="1.2" fill="#2a1400" opacity="0.32" clip-path="url(#cpjp)"/>
  <circle cx="50" cy="73" r="1.0" fill="#2a1400" opacity="0.28" clip-path="url(#cpjp)"/>
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(230,220,195,0.07)" filter="url(#fxxjp)" clip-path="url(#cpjp)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(230,220,195,0.18)"        filter="url(#fmjp)"  clip-path="url(#cpjp)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(230,220,195,0.14)"   filter="url(#fmjp)"  clip-path="url(#cpjp)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(230,220,195,0.11)"   filter="url(#fmjp)"  clip-path="url(#cpjp)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbjp)"   clip-path="url(#cpjp)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpjp)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwjp)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'lim': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwlime" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="20"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fblime"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmlime"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxllime"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxlime"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fslime"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cplime"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="lmb" cx="43%" cy="52%" r="72%">
    <stop offset="0%"   stop-color="#e8ee90" stop-opacity="0.72"/>
    <stop offset="50%"  stop-color="#d8e468" stop-opacity="0.62"/>
    <stop offset="100%" stop-color="#c4d440" stop-opacity="0.50"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fslime)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fslime)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#lmb)" clip-path="url(#cplime)"/>
  <!-- Slightly deeper tone at center-bottom -->
  <ellipse cx="42" cy="56" rx="20" ry="26" fill="#b8c838" opacity="0.14" filter="url(#fmlime)" clip-path="url(#cplime)"/>
  <!-- Soft pale highlight upper-left — translucency effect -->
  <ellipse cx="26" cy="36" rx="14" ry="16" fill="rgba(255,255,210,0.28)" filter="url(#fxllime)" clip-path="url(#cplime)"/>
  <!-- Lime wheel — muted, natural tone -->
  <circle cx="40" cy="53" r="16" fill="#c8d840" opacity="0.78" clip-path="url(#cplime)"/>
  <circle cx="40" cy="53" r="10" fill="#e0ec80" opacity="0.65" clip-path="url(#cplime)"/>
  <line x1="40" y1="37" x2="40" y2="69" stroke="#8a9820" stroke-width="0.85" opacity="0.40" clip-path="url(#cplime)"/>
  <line x1="24" y1="53" x2="56" y2="53" stroke="#8a9820" stroke-width="0.85" opacity="0.40" clip-path="url(#cplime)"/>
  <line x1="29" y1="41" x2="51" y2="65" stroke="#8a9820" stroke-width="0.65" opacity="0.26" clip-path="url(#cplime)"/>
  <line x1="51" y1="41" x2="29" y2="65" stroke="#8a9820" stroke-width="0.65" opacity="0.26" clip-path="url(#cplime)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cplime)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwlime)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'lem': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwlem" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="21"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fblem"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmlem"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxllem"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxlem"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fslem"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cplem"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  <radialGradient id="leb" cx="43%" cy="52%" r="72%">
    <stop offset="0%"  stop-color="#f8ea4a" stop-opacity="0.80"/>
    <stop offset="50%" stop-color="#d8c022" stop-opacity="0.72"/>
    <stop offset="100%" stop-color="#b09a0a" stop-opacity="0.66"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fslem)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fslem)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z" fill="url(#leb)" opacity="0.74" clip-path="url(#cplem)"/>
  <ellipse cx="43" cy="55" rx="22" ry="27" fill="#a08008" opacity="0.11" filter="url(#fmlem)" clip-path="url(#cplem)"/>
  <ellipse cx="26" cy="37" rx="14" ry="16" fill="#fff8a0" opacity="0.22" clip-path="url(#cplem)"/>
  <circle cx="40" cy="53" r="16" fill="#e8c820" opacity="0.85" clip-path="url(#cplem)"/>
  <circle cx="40" cy="53" r="10" fill="#fef068" opacity="0.74" clip-path="url(#cplem)"/>
  <line x1="40" y1="37" x2="40" y2="69" stroke="#a08010" stroke-width="0.85" opacity="0.44" clip-path="url(#cplem)"/>
  <line x1="24" y1="53" x2="56" y2="53" stroke="#a08010" stroke-width="0.85" opacity="0.44" clip-path="url(#cplem)"/>
  <line x1="29" y1="41" x2="51" y2="65" stroke="#a08010" stroke-width="0.65" opacity="0.28" clip-path="url(#cplem)"/>
  <line x1="51" y1="41" x2="29" y2="65" stroke="#a08010" stroke-width="0.65" opacity="0.28" clip-path="url(#cplem)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cplem)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwlem)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
</svg>`,
  'manpas': `<svg width="80" height="96" viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
  <filter id="fwjmn" x="-10%" y="-10%" width="120%" height="120%">
    <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" seed="18"/>
    <feDisplacementMap in="SourceGraphic" scale="2.2" xChannelSelector="R" yChannelSelector="G"/>
  </filter>
  <filter id="fbjmn"><feGaussianBlur stdDeviation="4"/></filter>
  <filter id="fmjmn"><feGaussianBlur stdDeviation="7"/></filter>
  <filter id="fxljmn"><feGaussianBlur stdDeviation="11"/></filter>
  <filter id="fxxjmn"><feGaussianBlur stdDeviation="15"/></filter>
  <filter id="fsjmn"><feGaussianBlur stdDeviation="1.2"/></filter>
  <clipPath id="cpjmn"><path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z"/></clipPath>
  
  <radialGradient id="jbgjmn" cx="44%" cy="48%" r="72%">
    <stop offset="0%"   stop-color="#d8c888" stop-opacity="0.72"/>
    <stop offset="50%"  stop-color="#c8b470" stop-opacity="0.56"/>
    <stop offset="100%" stop-color="#b8a058" stop-opacity="0.40"/>
  </radialGradient>
</defs>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="white" stroke="white" stroke-width="10" stroke-linejoin="round" filter="url(#fsjmn)"/>
<ellipse cx="40" cy="18" rx="28" ry="9" fill="white" stroke="white" stroke-width="10" filter="url(#fsjmn)"/>
<ellipse cx="40" cy="17" rx="26" ry="7.5" fill="#d8edf5" opacity="0.65"/>
<ellipse cx="33" cy="15" rx="12" ry="3.5" fill="rgba(255,255,255,0.38)"/>
<ellipse cx="40" cy="20" rx="26" ry="7.5" fill="none" stroke="#8ab5ca" stroke-width="1" opacity="0.48"/>

  <path d="M18,22 L18,80 C18,83 28,86 40,86 C52,86 62,83 62,80 L62,22 Q40,19 18,22 Z"
        fill="url(#jbgjmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="40" cy="48" rx="26" ry="32" fill="rgba(255,248,225,0.30)" filter="url(#fxxjmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="28" cy="36" rx="12" ry="14" fill="#c8b060" opacity="0.12" filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="52" cy="54" rx="10" ry="12" fill="#bea050" opacity="0.10" filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="40" cy="64" rx="16" ry="9"  fill="#e8980c" opacity="0.26"        filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="25" cy="57" rx="11" ry="7"  fill="#e8980c" opacity="0.19"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="55" cy="61" rx="10" ry="6"  fill="#e8980c" opacity="0.16"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="38" cy="73" rx="13" ry="6"  fill="#e8980c" opacity="0.14"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="20" cy="67" rx="9"  ry="5"  fill="#e8980c" opacity="0.12"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="53" cy="46" rx="9"  ry="5"  fill="#e8980c" opacity="0.09"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="28" cy="44" rx="10" ry="4"  fill="#e8980c" opacity="0.07"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="44" cy="35" rx="8"  ry="4"  fill="#e8980c" opacity="0.05"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="23" cy="30" rx="6"  ry="3"  fill="#e8980c" opacity="0.03"   filter="url(#fxljmn)" clip-path="url(#cpjmn)"/>
  
  
  <ellipse cx="22" cy="27" rx="10" ry="6"  fill="rgba(230,220,195,0.07)" filter="url(#fxxjmn)" clip-path="url(#cpjmn)"/>
  <ellipse cx="22" cy="27" rx="7"  ry="4"   fill="rgba(230,220,195,0.18)"        filter="url(#fmjmn)"  clip-path="url(#cpjmn)"/>
  <ellipse cx="40" cy="25" rx="11" ry="5"   fill="rgba(230,220,195,0.14)"   filter="url(#fmjmn)"  clip-path="url(#cpjmn)"/>
  <ellipse cx="57" cy="28"   rx="8"  ry="4.5" fill="rgba(230,220,195,0.11)"   filter="url(#fmjmn)"  clip-path="url(#cpjmn)"/>
  <ellipse cx="20" cy="25" rx="3.5" ry="1.8" fill="rgba(255,255,255,0.11)" filter="url(#fbjmn)"   clip-path="url(#cpjmn)"/>
<path d="M19,27 C18,40 18,62 19,78" stroke="rgba(255,255,255,0.22)" stroke-width="6" stroke-linecap="round" fill="none" clip-path="url(#cpjmn)"/>
<path d="M14,22 C13,19 18,16 40,16 C62,16 67,19 66,22 L62,80 C62,83 52,86 40,86 C28,86 18,83 18,80 Z" fill="none" stroke="#88b2c5" stroke-width="1.1" opacity="0.46" filter="url(#fwjmn)"/>
<path d="M14,23 Q40,20 66,23" stroke="#88b2c5" stroke-width="0.75" fill="none" opacity="0.36"/>
<circle cx="26" cy="68" r="1.2" fill="#2a1400" opacity="0.34" clip-path="url(#cpjp)"/>
<circle cx="34" cy="72" r="1.1" fill="#2a1400" opacity="0.30" clip-path="url(#cpjp)"/>
<circle cx="42" cy="69" r="1.2" fill="#2a1400" opacity="0.32" clip-path="url(#cpjp)"/>
<circle cx="50" cy="73" r="1.0" fill="#2a1400" opacity="0.28" clip-path="url(#cpjp)"/>
</svg>`,
};
