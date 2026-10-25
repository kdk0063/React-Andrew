/* ADK Studio — book cover designs.
   Each design is an affectionate parody of an iconic cover, redrawn from
   scratch with the project's name: the layout, palette and lettering of
   the original, with original drawings in place of the original art.
     pride    Pride and Prejudice, Hugh Thomson's peacock binding (1894)
     catcher  The Catcher in the Rye, first edition (1951)
     f451     Fahrenheit 451, first edition (1953)
     white    Joan Didion's The White Album (1979)
     supreme  Supreme (Phaidon, 2019)
     apc      A.P.C. Transmission / This is the A.P.C. Book
     nike     Look Good, Feel Good, Play Good: Nike Apparel (Phaidon)
     stussy   Stussy: Vintage Retrospective
     knicks   The Basketball History of the New York Knicks (Historic Newspapers)
   Brand marks themselves (box logo wording, swoosh, signature) are never
   reproduced: every cover carries the project's own name and the ADK star.
   Covers are sized in em: library.css sets the cover's font-size to a
   tenth of its width, so every design scales with its book. */
(function () {
  var STAR = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" fill="currentColor"/></svg>';

  /* Pride and Prejudice: gold peacock feathers fanning across navy cloth.
     Feathers radiate from a point low on the left, ring by ring. */
  function feathers() {
    var ox = 56, oy = 322, gold = '#D9B85E', s = '';
    [56, 88, 120, 152, 184, 216, 248, 280, 312, 344].forEach(function (r, ring) {
      var n = Math.round(r / 12.5);
      for (var j = 0; j <= n; j++) {
        var t = (-174 + (186 * j) / n + (ring % 2) * (93 / n)) * Math.PI / 180;
        var x = ox + r * Math.cos(t), y = oy + r * Math.sin(t);
        if (x < 6 || x > 294 || y < 6 || y > 412) continue;
        if (x > 98 && y > 262) continue; // leave the title's corner clear, as on the original
        var deg = (t * 180 / Math.PI + 90).toFixed(1);
        // Quill toward the origin, then the eye: plume, ring and dark core.
        s += '<line x1="' + ox + '" y1="' + oy + '" x2="' + x.toFixed(1) + '" y2="' + y.toFixed(1) + '" stroke="' + gold + '" stroke-opacity=".22" stroke-width=".6"/>' +
          '<g transform="translate(' + x.toFixed(1) + ' ' + y.toFixed(1) + ') rotate(' + deg + ')">' +
          '<path d="M0 13 C-11 8 -11 -9 0 -13 C11 -9 11 8 0 13Z" fill="' + gold + '" fill-opacity=".16" stroke="' + gold + '" stroke-width=".7" stroke-opacity=".75"/>' +
          '<ellipse rx="5.2" ry="7.4" fill="none" stroke="' + gold + '" stroke-width="1.1"/>' +
          '<ellipse cy="-.6" rx="2.6" ry="3.7" fill="' + gold + '"/>' +
          '<ellipse cy="-1" rx="1.1" ry="1.6" fill="#1D2848"/></g>';
      }
    });
    // A vase with the ADK star perched where the peacock stood.
    s += '<path d="M40 410 L84 410 L80 398 C96 380 98 356 84 340 L88 330 L36 330 L40 340 C26 356 28 380 44 398 Z" fill="none" stroke="' + gold + '" stroke-width="1.6"/>' +
      '<path d="M44 352 C54 362 70 362 80 352" fill="none" stroke="' + gold + '" stroke-width="1"/>' +
      '<path d="M62 282 l6 18 18 6 -18 6 -6 18 -6 -18 -18 -6 18 -6z" fill="' + gold + '"/>';
    return '<svg class="pp-art" viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + s + '</svg>';
  }

  /* Catcher: an original loose sketch (a filing cabinet, a drawer pulled
     open, papers flying) over a skyline, in a darker red. */
  function cabinetSketch() {
    var c = '#8C2016';
    return '<svg class="ct-art" viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' +
      '<g fill="none" stroke="' + c + '" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">' +
      '<path d="M96 168 L198 162 L204 330 L100 334 Z"/><path d="M99 170 L197 165 L202 328 L102 331 Z" stroke-width="1.4"/>' +
      '<path d="M100 222 L200 218 M101 276 L202 272"/>' +
      '<path d="M100 222 L150 250 L246 244 L200 218"/><path d="M150 250 L152 300 L248 294 L246 244"/>' +
      '<path d="M180 270 L214 268"/><path d="M140 194 L162 193"/><path d="M142 302 L164 301"/>' +
      '<path d="M120 120 L150 108 L160 132 L130 144 Z"/><path d="M190 96 L222 102 L216 128 L184 122 Z"/>' +
      '<path d="M232 150 L262 140 L270 164 L240 174 Z"/><path d="M72 140 L98 128 L108 150 L82 162 Z"/>' +
      '<path d="M64 120 C80 100 110 90 130 98 M214 84 C240 80 262 96 270 120" stroke-width="1.6"/>' +
      '</g>' +
      '<g fill="' + c + '"><rect x="20" y="352" width="18" height="22"/><rect x="40" y="340" width="12" height="34"/><rect x="54" y="356" width="22" height="18"/>' +
      '<rect x="78" y="332" width="10" height="42"/><rect x="90" y="348" width="26" height="26"/><rect x="118" y="338" width="14" height="36"/>' +
      '<rect x="134" y="354" width="20" height="20"/><rect x="156" y="326" width="9" height="48"/><rect x="167" y="346" width="24" height="28"/>' +
      '<rect x="193" y="336" width="13" height="38"/><rect x="208" y="356" width="22" height="18"/><rect x="232" y="342" width="16" height="32"/>' +
      '<rect x="250" y="350" width="30" height="24"/></g></svg>';
  }

  /* Fahrenheit 451: an original sketch of a race car caught in flames. */
  function carInFlames() {
    var y = '#E9B83C', o = '#DF7A2B', ink = '#262626', f = '';
    var flames = [[66, 304, 14, 96], [92, 296, 18, 130], [118, 300, 15, 112], [146, 290, 22, 150], [172, 296, 17, 124], [198, 288, 21, 142], [224, 298, 16, 116], [248, 302, 13, 92]];
    flames.forEach(function (p, i) {
      var x = p[0], base = p[1], w = p[2], h = p[3], lean = (i % 2 ? 1 : -1) * w * 0.5, tip = base - h;
      var d = 'M' + (x - w) + ' ' + base +
        ' C' + (x - w * 1.3) + ' ' + (base - h * 0.45) + ' ' + (x + lean - w * 0.4) + ' ' + (base - h * 0.6) + ' ' + (x + lean) + ' ' + tip +
        ' C' + (x + lean + w * 0.3) + ' ' + (base - h * 0.55) + ' ' + (x + w * 1.3) + ' ' + (base - h * 0.4) + ' ' + (x + w) + ' ' + base + 'Z';
      f += '<path d="' + d + '" fill="' + (i % 2 ? y : o) + '" fill-opacity=".55" stroke="' + (i % 2 ? o : y) + '" stroke-width="1.6" stroke-linejoin="round"/>' +
        '<path d="M' + x + ' ' + (base - 6) + ' C' + (x - w * 0.4) + ' ' + (base - h * 0.4) + ' ' + (x + lean * 0.6) + ' ' + (base - h * 0.55) + ' ' + (x + lean * 0.7) + ' ' + (tip + h * 0.25) + '" fill="none" stroke="' + (i % 2 ? o : y) + '" stroke-width="1.2" stroke-linecap="round"/>';
    });
    return '<svg class="fx-art" viewBox="0 0 300 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">' + f +
      '<g fill="none" stroke="' + ink + '" stroke-width="2" stroke-linejoin="round" stroke-linecap="round">' +
      '<path d="M70 300 L96 290 L132 287 L160 274 L184 274 L196 286 L232 289 L246 296 L246 306 L70 306 Z"/>' +
      '<path d="M60 278 L82 278 L84 302 M60 278 L58 300"/><path d="M226 300 L254 300 L256 308"/>' +
      '<circle cx="96" cy="308" r="13"/><circle cx="96" cy="308" r="5"/><circle cx="222" cy="308" r="13"/><circle cx="222" cy="308" r="5"/>' +
      '<path d="M168 274 C168 262 182 262 184 272"/><path d="M110 292 L150 290 M118 298 L156 296" stroke-width="1"/>' +
      '</g></svg>';
  }

  var DESIGNS = {
    pride: {
      cover: function () {
        return '<div class="cvx cvx-pride">' + feathers() +
          '<div class="pp-title"><span class="big">Allen’s</span><span class="and">and</span><span class="big">Cabinets</span>' +
          '<span class="by">by ADK Studio</span><span class="ill">Illustrated by Andrew Kim</span></div></div>';
      },
      spine: function () {
        return '<span class="pp-rule"></span><span class="t">Allen’s Cabinets</span><span class="mark">' + STAR + '</span>';
      }
    },
    catcher: {
      cover: function () {
        return '<div class="cvx cvx-catcher">' + cabinetSketch() +
          '<div class="ct-title"><span class="sm">the</span> <span class="lg">ALLEN’S</span><br><span class="lg">ADMIN</span></div>' +
          '<div class="ct-band"><em>a tool by</em> A.D.K. STUDIO</div></div>';
      },
      spine: function () {
        return '<span class="ct-spine-top"><span class="sm">the</span><span>ALLEN’S</span><span>ADMIN</span></span><span class="t">A.D.K. Studio</span><span class="ct-spine-band">ADK</span>';
      }
    },
    f451: {
      cover: function () {
        return '<div class="cvx cvx-f451">' + carInFlames() +
          '<div class="fx-cap">Wonderful races<br>by the author of<br>allenscabinets.com</div>' +
          '<div class="fx-author"><span class="first">Andrew</span><span class="last">Kim</span></div>' +
          '<div class="fx-title"><span class="t">Grandstand</span> <span class="n">451</span></div>' +
          '<div class="fx-pub">ADK Studio Books</div></div>';
      },
      spine: function () {
        return '<span class="fx-spine-n">451</span><span class="t">Grandstand</span><span class="fx-spine-pub">ADK</span>';
      }
    },
    white: {
      cover: function () {
        // Dotless i with a dot drawn in the other colour, as on the original.
        return '<div class="cvx cvx-white"><div class="wa">' +
          '<span class="r">ADK</span><span class="r">Stud<span class="i db">ı</span>o</span>' +
          '<span class="b">MeChel<span class="i">ı</span>n</span><span class="b">Gu<span class="i">ı</span>de</span></div></div>';
      },
      spine: function () {
        return '<span class="wa-spine-r">ADK</span><span class="t">MeChelin Guide</span><span class="mark">' + STAR + '</span>';
      }
    },
    knicks: {
      cover: function () {
        return '<div class="cvx cvx-knicks"><span class="kn-frame"></span>' +
          '<div class="kn-top">Historic Spreadsheets</div>' +
          '<div class="kn-mid"><span class="kn-kicker">The back-office history of</span>' +
          '<span class="kn-title">Allen’s<br>Admin</span>' +
          '<span class="kn-mast">Daily<span class="kn-star">' + STAR + '</span>Ops</span></div>' +
          '<div class="kn-foot"><span>As told in quotes<br>&amp; invoices</span><span>Presented to<br>Allen’s Cabinets</span></div></div>';
      },
      spine: function () {
        return '<span class="kn-spine-top">ADK</span><span class="t">Allen’s Admin</span><span class="kn-spine-star">' + STAR + '</span>';
      }
    },
    supreme: {
      cover: function () {
        return '<div class="cvx cvx-supreme"><div class="sp-box"><span>Grandstand</span></div><div class="sp-emboss">ADK STUDIO</div></div>';
      },
      spine: function () {
        return '<span class="sp-spine-box"><span class="t">Grandstand</span></span><span class="sp-spine-pub">ADK</span>';
      }
    },
    apc: {
      cover: function () {
        return '<div class="cvx cvx-apc">' +
          '<div class="apc-ghost">ANDR<br>EW<br>KIM</div>' +
          '<div class="apc-title">A.D.K.<br>ALLEN’S<br>CABI<br>NETS</div></div>';
      },
      spine: function () {
        return '<span class="apc-spine-top">A.D.K.</span><span class="t">ALLEN’S CABINETS</span><span></span>';
      }
    },
    nike: {
      cover: function () {
        return '<div class="cvx cvx-nike">' +
          '<span class="nk-line" style="top:31%"></span><span class="nk-line" style="top:58%"></span><span class="nk-line" style="top:83%"></span>' +
          '<div class="nk-top">plan good, party good,</div>' +
          '<div class="nk-mark">' + STAR + '</div>' +
          '<div class="nk-big">book good:</div>' +
          '<div class="nk-sub">Kidian app</div>' +
          '<div class="nk-pub"><span class="o"></span>ADK</div></div>';
      },
      spine: function () {
        return '<span class="nk-spine-mark">' + STAR + '</span><span class="t">plan good, party good, book good: Kidian app</span><span class="nk-spine-pub">ADK</span>';
      }
    },
    stussy: {
      cover: function () {
        return '<div class="cvx cvx-stussy"><div class="st-tag">Babel<br>Dabble</div>' +
          '<div class="st-foot">Babel Dabble: CALLIGRAPHY RETROSPECTIVE</div></div>';
      },
      spine: function () {
        return '<span></span><span class="t">Babel Dabble: CALLIGRAPHY RETROSPECTIVE</span><span class="st-spine-mark">' + STAR + '</span>';
      }
    }
  };

  window.ADK_COVERS = DESIGNS;
})();
