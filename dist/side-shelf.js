/* MOCK: side projects on a second shelf, as film posters for now. Art is drawn
   here; set fmt to 'album' for the square sleeve versions. */
(function () {
  var root = document.getElementById('sideshelf');
  if (!root) return;
  var SANS = "Archivo,Arial,sans-serif", MONO = "'IBM Plex Mono',monospace", SERIF = "Georgia,serif";
  var star = function (x, y, r, c) { return '<path transform="translate(' + x + ' ' + y + ') scale(' + r / 6 + ') translate(-6 -6)" d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" fill="' + c + '"/>'; };
  var txt = function (x, y, s, size, c, o) { o = o || {}; return '<text x="' + x + '" y="' + y + '" font-family="' + (o.f || SANS) + '" font-size="' + size + '" font-weight="' + (o.w || 700) + '" fill="' + c + '" text-anchor="' + (o.a || 'start') + '" letter-spacing="' + (o.ls || 0) + '"' + (o.it ? ' font-style="italic"' : '') + '>' + s + '</text>'; };

  function keypad(ox, oy, s, sh, ink, on) {
    var keys = ['7','8','9','/','4','5','6','x','1','2','3','−','.','0','C','='], out = '', g = 8;
    keys.forEach(function (k, i) {
      var x = ox + (i % 4) * (s + g), y = oy + Math.floor(i / 4) * (sh + g), hot = k === '=', op = i % 4 === 3 || k === 'C';
      out += '<rect x="' + x + '" y="' + y + '" width="' + s + '" height="' + sh + '" rx="' + s * .12 + '" fill="' + (hot ? on : op ? 'rgba(255,255,255,.2)' : 'none') + '" stroke="' + ink + '" stroke-opacity="' + (hot || op ? 0 : .55) + '"/>';
      out += txt(x + s / 2, y + sh / 2 + s * .14, k, s * .4, hot ? '#0C0D0F' : ink, { f: MONO, w: 500, a: 'middle' });
    });
    return out;
  }
  function scatter(cy, spread, ink, hot) {
    var L = [['S',58,-22,-24,92],['C',132,-58,18,74],['A',226,-30,-10,104],['T',62,72,32,84],['T',150,32,-34,70],['E',248,72,14,88],['R',156,132,-16,100]], out = '';
    L.forEach(function (l, i) { out += '<text transform="translate(' + l[1] + ' ' + (cy + l[2] * spread) + ') rotate(' + l[3] + ')" font-family="' + SANS + '" font-weight="800" font-size="' + l[4] + '" fill="' + (i === 2 ? hot : ink) + '" text-anchor="middle">' + l[0] + '</text>'; });
    return out;
  }
  function rings(cx, cy, n, gap, ink, hot, hotAt) {
    var out = '';
    for (var i = 1; i <= n; i++) out += '<circle cx="' + cx + '" cy="' + cy + '" r="' + (6 + i * gap + Math.sin(i * 1.7) * 1.4) + '" fill="none" stroke="' + (i === hotAt ? hot : ink) + '" stroke-width="' + (i === hotAt ? 5 : .8 + (i % 4 === 0 ? 1.1 : 0)) + '"/>';
    return out;
  }
  function pie(cx, cy, r, a, b, pulled) {
    var cuts = [0, 120, 210, 300, 360], cols = [a, a, b, a], out = '';
    for (var i = 0; i < 4; i++) {
      var s = (cuts[i] - 90) * Math.PI / 180, e = (cuts[i + 1] - 90) * Math.PI / 180, mid = (s + e) / 2, off = i === 2 ? pulled : 0;
      var x = cx + Math.cos(mid) * off, y = cy + Math.sin(mid) * off;
      out += '<path d="M' + x + ' ' + y + 'L' + (x + Math.cos(s) * r) + ' ' + (y + Math.sin(s) * r) + 'A' + r + ' ' + r + ' 0 ' + (cuts[i + 1] - cuts[i] > 180 ? 1 : 0) + ' 1 ' + (x + Math.cos(e) * r) + ' ' + (y + Math.sin(e) * r) + 'Z" fill="' + cols[i] + '" stroke="#2F6B4F" stroke-width="3"/>';
    }
    return out;
  }

  var ITEMS = [
    { id: 'calculator', title: 'Calculator', line: 'It all adds up.', lab: '#E9A23B', year: '2024',
      desc: 'A calculator built with React, as a small exercise in managing state with a reducer.',
      meta: [['Built with', 'React, useReducer, Tailwind'], ['Status', 'Art and copy are placeholders']],
      album: function () { return '<rect width="300" height="300" fill="#3B4664"/>' + txt(20, 52, 'Calculator', 40, '#fff', { ls: -1.6 }) + keypad(20, 76, 59, 44, '#fff', '#E9A23B') + star(278, 24, 8, '#E9A23B'); },
      poster: function () { return '<rect width="300" height="450" fill="#3B4664"/>' + txt(20, 36, 'IT ALL ADDS UP.', 12, '#fff', { f: MONO, w: 500, ls: 1.5 }) + keypad(20, 56, 59, 58, '#fff', '#E9A23B') + txt(20, 372, 'Calcu-', 50, '#fff', { ls: -2 }) + txt(20, 416, 'lator', 50, '#E9A23B', { ls: -2 }) + txt(20, 437, 'ADK STUDIO · 2024', 9, '#fff', { f: MONO, w: 500, ls: 1 }) + star(274, 424, 10, '#E9A23B'); } },
    { id: 'scatter', title: 'Scatter', line: 'Every letter finds its place.', lab: '#E0262B', year: '2024',
      desc: 'An intro effect: each letter flies in from a random spot and lands in the word. Built with DOM manipulation and CSS animation.',
      meta: [['Built with', 'React, CSS animation'], ['Status', 'Art and copy are placeholders']],
      album: function () { return '<rect width="300" height="300" fill="#F2C230"/>' + scatter(118, 1, '#0C0D0F', '#E0262B') + txt(20, 284, 'SCATTER', 15, '#0C0D0F', { ls: 5 }) + star(278, 279, 8, '#0C0D0F'); },
      poster: function () { return '<rect width="300" height="450" fill="#F2C230"/>' + scatter(146, 1.28, '#0C0D0F', '#E0262B') + txt(20, 376, 'SCATTER', 44, '#0C0D0F', { ls: -.6 }) + txt(20, 398, 'Every letter finds its place.', 13, '#0C0D0F', { f: SERIF, w: 400, it: 1 }) + txt(20, 434, 'ADK STUDIO · 2024', 9, '#0C0D0F', { f: MONO, w: 500, ls: 1 }) + star(274, 429, 10, '#0C0D0F'); } },
    { id: 'age', title: 'Age Calculator', line: 'How long has it been?', lab: '#F1EADB', year: '2024',
      desc: 'Enter a birth date and get back the years, months and days. Date logic, form validation and a live result.',
      meta: [['Built with', 'React, form validation'], ['Status', 'Art and copy are placeholders']],
      album: function () { return '<rect width="300" height="300" fill="#F1EADB"/>' + rings(150, 128, 15, 7, '#0C0D0F', '#E0262B', 9) + txt(20, 268, 'Age Calculator', 25, '#0C0D0F', { f: SERIF, w: 400, it: 1 }) + txt(20, 287, 'DD / MM / YYYY', 10, '#0C0D0F', { f: MONO, w: 500, ls: 1.5 }); },
      poster: function () { return '<rect width="300" height="450" fill="#F1EADB"/>' + txt(20, 36, 'How long has it been?', 16, '#0C0D0F', { f: SERIF, w: 400, it: 1 }) + rings(150, 192, 19, 7, '#0C0D0F', '#E0262B', 12) + txt(20, 376, 'Age', 44, '#0C0D0F', { f: SERIF, w: 400 }) + txt(20, 414, 'Calculator', 38, '#0C0D0F', { f: SERIF, w: 400, it: 1 }) + txt(20, 437, 'ADK STUDIO · 2024', 9, '#0C0D0F', { f: MONO, w: 500, ls: 1 }); } },
    { id: 'tip', title: 'Tip Splitter', line: 'Everyone pays their share.', lab: '#2F6B4F', year: '2024',
      desc: 'Bill, tip and head count go in; what each person owes comes out as you type. State management and real-time calculation.',
      meta: [['Built with', 'React, state management'], ['Status', 'Art and copy are placeholders']],
      album: function () { return '<rect width="300" height="300" fill="#2F6B4F"/>' + pie(150, 130, 92, '#F1EADB', '#E9A23B', 16) + txt(20, 278, 'Tip Splitter', 30, '#F1EADB', { ls: -1 }) + star(278, 268, 8, '#E9A23B'); },
      poster: function () { return '<rect width="300" height="450" fill="#2F6B4F"/>' + txt(20, 36, 'EVERYONE PAYS THEIR SHARE.', 10.5, '#F1EADB', { f: MONO, w: 500, ls: 1 }) + pie(150, 186, 112, '#F1EADB', '#E9A23B', 20) + txt(20, 372, 'Tip', 50, '#F1EADB', { ls: -2 }) + txt(20, 416, 'Splitter', 50, '#E9A23B', { ls: -2 }) + txt(20, 437, 'ADK STUDIO · 2024', 9, '#F1EADB', { f: MONO, w: 500, ls: 1 }) + star(274, 429, 10, '#E9A23B'); } }
  ];

  var fmt = 'poster', cur = 'calculator';
  root.innerHTML =
    '<div class="shell ss-head"><div><p class="label">The second shelf · 04 side projects</p><h2 id="ss-title">Side projects</h2><p>The small things I built to learn. Not books: these get a different format.</p></div></div>' +
    '<div class="ss-rack" id="ss-rack"></div><div class="shell"><div class="ss-detail" id="ss-detail" aria-live="polite"></div></div>';
  var rack = root.querySelector('#ss-rack'), detail = root.querySelector('#ss-detail');

  function draw() {
    root.className = 'sideshelf is-' + fmt;
    var h = fmt === 'poster' ? 450 : 300;
    rack.innerHTML = ITEMS.map(function (it) {
      return '<button type="button" class="ss-item' + (it.id === cur ? ' on' : '') + '" data-id="' + it.id + '" aria-pressed="' + (it.id === cur) + '" aria-label="' + it.title + '" style="--lab:' + it.lab + '"><span class="ss-record" aria-hidden="true"></span><span class="ss-art"><svg viewBox="0 0 300 ' + h + '" aria-hidden="true">' + it[fmt]() + '</svg></span></button>';
    }).join('') + '<div class="ss-slot"><span>Open slot</span><span>Next one goes here</span></div>';
    tell();
  }
  function tell() {
    var it = ITEMS.filter(function (x) { return x.id === cur; })[0];
    detail.innerHTML = '<div><span class="k">Personal · ' + it.year + '</span><h3>' + it.title + '</h3><p>' + it.desc + '</p></div><dl>' + it.meta.map(function (m) { return '<div><dt>' + m[0] + '</dt><dd>' + m[1] + '</dd></div>'; }).join('') + '</dl>';
  }
  root.addEventListener('click', function (e) {
    var i = e.target.closest('.ss-item');
    if (!i) return;
    cur = i.getAttribute('data-id');
    rack.querySelectorAll('.ss-item').forEach(function (b) { var on = b === i; b.classList.toggle('on', on); b.setAttribute('aria-pressed', on); });
    tell();
  });
  draw();
})();
