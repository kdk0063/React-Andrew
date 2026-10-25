/* ADK Studio — the library.
   One book per project. To give a book real art later, set
   spine.image / cover.image to an image path; the placeholder
   lettering hides itself when an image is present. A book with a
   `design` uses that parody cover and spine from covers.js instead. */
(function () {
  var STAR = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" fill="currentColor"/></svg>';

  var BOOKS = [
    {
      id: 'allenscabinets', design: 'apc', title: "allenscabinets.com", spineTitle: "Allen's Cabinets", coverTitle: 'Allen’s<br>Cabinets',
      kicker: 'Client · 2026', tag: 'Website',
      desc: 'Marketing site, showroom booking and quote requests for a kitchen and bath showroom in Alexandria, Virginia. Every request lands in the same database the staff tool reads.',
      meta: [['Role', 'Design & engineering'], ['Year', '2026'], ['Stack', 'React, Vite, Supabase, Vercel'], ['Status', 'Live']],
      links: [['Open project', '/work/allenskb/', true], ['Visit site ↗', 'https://www.allenscabinets.com']],
      size: { h: 380, d: 64 }, spine: { bg: '#1B5FAA', fg: '#FFFFFF', ac: '#E9A23B', pat: 'band' }, cover: { bg: '#1B5FAA', fg: '#FFFFFF' }
    },
    {
      id: 'allensadmin', design: 'knicks', title: "Allen’s Admin", spineTitle: "Allen's Admin", coverTitle: 'Allen’s<br>Admin',
      kicker: 'Client · In production', tag: 'Internal tool',
      desc: 'The operations platform the showroom runs on: intake forms with recoverable drafts, record search, side-by-side quote comparison, two-way Trello sync and page-accurate PDF printing.',
      meta: [['Role', 'Sole engineer'], ['Stack', 'React, TypeScript, Supabase, Trello API'], ['Status', 'In daily use']],
      links: [],
      note: 'Private client tool · case study coming',
      size: { h: 350, d: 54 }, spine: { bg: '#121212', fg: '#FFFFFF', ac: '#E9A23B', pat: 'stripes' }, cover: { bg: '#121212', fg: '#E9A23B' }
    },
    {
      id: 'grandstand', design: 'supreme', title: 'Grandstand', spineTitle: 'Grandstand', coverTitle: 'Grand<br>stand',
      kicker: 'Personal · Live', tag: '3D web',
      desc: 'An isometric 3D race circuit that runs live in the browser: a Blender-modelled track and cars, a full grid, a pace car and a jumbotron, lit and post-processed in real time.',
      meta: [['Role', 'Design & engineering'], ['Stack', 'Three.js, React Three Fiber, Zustand, Blender'], ['Status', 'Live']],
      links: [['Open project', '/work/grandstand/', true]],
      liveUrl: null, // TODO: Grandstand's live URL
      size: { h: 400, d: 72 }, spine: { bg: '#D7392B', fg: '#FFFFFF', ac: '#121212', pat: 'check' }, cover: { bg: '#D7392B', fg: '#FFFFFF' }
    },
    {
      id: 'mechelinguide', design: 'white', title: 'MeChelinGuide', spineTitle: 'MeChelinGuide', coverTitle: 'MeChelin<br>Guide',
      kicker: 'Personal · In progress', tag: 'Map app',
      desc: 'A shared, invite-only map of places worth eating. Private circles with seat caps, row-level security on everything, Google sign-in and a vector-tile map that rescopes with the feed.',
      meta: [['Role', 'Product & engineering'], ['Stack', 'React 19, Supabase, MapLibre'], ['Status', 'Work in progress']],
      links: [],
      note: 'Coming soon',
      size: { h: 330, d: 50 }, spine: { bg: '#E9A23B', fg: '#121212', ac: '#121212', pat: 'dots' }, cover: { bg: '#E9A23B', fg: '#121212' }
    },
    {
      id: 'beoncarrier', title: 'Beon Carrier', spineTitle: 'Beon Carrier', coverTitle: 'Beon<br>Carrier',
      kicker: 'NTG · 2019–2024', tag: 'Logistics',
      desc: 'NTG’s load board for trucking carriers. Find loads by lane, see rate and route on one screen, book instantly or bid, then get paid fast. I worked on it full-stack for five years.',
      meta: [['Role', 'Full-stack developer'], ['Years', '2019–2024'], ['Stack', 'React, .NET Core, SQL Server'], ['Status', 'Live']],
      links: [['Open project', '/work/beon-carrier/', true], ['ntgfreight.com ↗', 'https://ntgfreight.com/technology/beon-carrier/']],
      size: { h: 370, d: 66 }, spine: { bg: '#F2C230', fg: '#121212', ac: '#121212', pat: 'band' }, cover: { bg: '#121212', fg: '#F2C230' }
    },
    {
      id: 'kidian', design: 'nike', title: 'Kidian', spineTitle: 'Kidian', coverTitle: 'Kidian',
      kicker: 'Contract · 2018–2019', tag: 'Marketplace',
      desc: 'A marketplace app for kids’ parties: search vendors by date and party size, compare packages and reviews, book, and add extras like the cake. OpenTable for birthdays.',
      meta: [['Role', 'Front-end developer'], ['Years', '2018–2019'], ['Stack', 'React, Context API, Figma']],
      links: [['Open project', '/work/kidian/', true]],
      size: { h: 320, d: 48 }, spine: { bg: '#3CA9FF', fg: '#FFFFFF', ac: '#FFFFFF', pat: 'dots' }, cover: { bg: '#3CA9FF', fg: '#FFFFFF' }
    },
    {
      id: 'babeldabble', design: 'stussy', title: 'Babel Dabble', spineTitle: 'Babel Dabble', coverTitle: 'Babel<br>Dabble',
      kicker: 'Contract · 2017–2018', tag: 'Ed-tech game',
      desc: 'A real-time competitive calligraphy platform that turns learning Chinese characters into timed matches, with practice mode, word lists and a leaderboard.',
      meta: [['Role', 'Junior full-stack developer'], ['Years', '2017–2018'], ['Stack', 'React, AngularJS, ASP.NET Web API, SQL Server']],
      links: [['Open project', '/work/babel-dabble/', true]],
      size: { h: 345, d: 58 }, spine: { bg: '#44507C', fg: '#FFFFFF', ac: '#7FB2E5', pat: 'stripes' }, cover: { bg: '#44507C', fg: '#FFFFFF' }
    }
  ];

  var shelf = document.getElementById('shelf');
  var scroller = document.getElementById('shelf-scroll');
  var detail = document.getElementById('shelf-detail');
  if (!shelf) return;

  var narrow = window.matchMedia('(max-width: 760px)');
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var openEl = null;

  function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;'); }

  function panelHTML(b) {
    var meta = b.meta.map(function (m) { return '<dt>' + esc(m[0]) + '</dt><dd>' + esc(m[1]) + '</dd>'; }).join('');
    var links = b.links.map(function (l) {
      var ext = /^https?:/.test(l[1]);
      return '<a' + (l[2] ? ' class="primary"' : '') + ' href="' + esc(l[1]) + '"' + (ext ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + esc(l[0]) + (l[2] ? ' →' : '') + '</a>';
    }).join('');
    if (b.liveUrl) links += '<a href="' + esc(b.liveUrl) + '" target="_blank" rel="noopener noreferrer">Live site ↗</a>';
    if (b.note) links += '<span>' + esc(b.note) + '</span>';
    return '<p class="bp-kicker">' + esc(b.kicker) + '</p>' +
      '<h3 class="bp-title" id="bp-' + b.id + '">' + esc(b.title) + '</h3>' +
      '<p class="bp-desc">' + esc(b.desc) + '</p>' +
      '<dl class="bp-meta">' + meta + '</dl>' +
      (links ? '<div class="bp-actions">' + links + '</div>' : '');
  }

  function size(b) {
    var s = narrow.matches ? 0.72 : 0.86;
    var h = Math.round(b.size.h * s), d = Math.round(b.size.d * s), w = Math.round(b.size.h * 0.72 * s);
    return { h: h, d: d, w: w };
  }

  function applySize(el, b) {
    var z = size(b);
    el.style.setProperty('--h', z.h + 'px');
    el.style.setProperty('--d', z.d + 'px');
    el.style.setProperty('--w', z.w + 'px');
    el.style.setProperty('--tsize', Math.max(13, Math.min(20, Math.round(z.d * 0.32))) + 'px');
    // Fit the cover title: no wider than its longest line allows.
    var longest = b.coverTitle.split('<br>').reduce(function (m, l) { return Math.max(m, l.replace(/&[^;]+;/g, 'x').length); }, 1);
    el.style.setProperty('--csize', Math.round(Math.min(z.w * 0.17, (z.w - 64) / (longest * 0.84))) + 'px');
  }

  BOOKS.forEach(function (b, i) {
    var no = String(i + 1).padStart(2, '0');
    var el = document.createElement('article');
    el.className = 'book';
    el.id = 'book-' + b.id;
    el.dataset.id = b.id;
    el.style.setProperty('--bg', b.spine.bg);
    el.style.setProperty('--fg', b.spine.fg);
    el.style.setProperty('--ac', b.spine.ac);
    el.style.setProperty('--cbg', b.cover.bg);
    el.style.setProperty('--cfg', b.cover.fg);
    applySize(el, b);

    var spineImg = b.spine.image ? ' has-img" style="background-image:url(\'' + esc(b.spine.image) + '\')' : '';
    var coverImg = b.cover.image ? ' has-img" style="background-image:url(\'' + esc(b.cover.image) + '\')' : '';

    var design = b.design && window.ADK_COVERS && window.ADK_COVERS[b.design];
    var spineHTML = design
      ? '<div class="side side-spine spx spx-' + b.design + '">' + design.spine(b, no) + '</div>'
      : '<div class="side side-spine pat-' + b.spine.pat + spineImg + '">' +
          '<span class="n">' + no + '</span><span class="t">' + esc(b.spineTitle) + '</span><span class="mark">' + STAR + '</span></div>';
    var coverHTML = design
      ? '<div class="side side-cover cov-' + b.design + '">' + design.cover(b, no) + '</div>'
      : '<div class="side side-cover' + coverImg + '"><div class="cv">' +
          '<div class="cv-top"><span>No. ' + no + '</span><span>ADK Studio</span></div>' +
          '<div><div class="cv-title">' + b.coverTitle + '</div><span class="cv-tag">' + esc(b.tag) + '</span></div>' +
          '<div class="cv-bottom"><span>' + esc(b.kicker) + '</span><span class="cv-mark" style="width:22px">' + STAR + '</span></div>' +
        '</div></div>';

    el.innerHTML =
      '<button class="book-hit" type="button" aria-expanded="false" aria-controls="panel-' + b.id + '">' +
        '<span class="sr-only">' + esc(b.title) + ': show details</span></button>' +
      '<div class="book-stage" aria-hidden="true"><div class="book-box">' +
        spineHTML +
        '<div class="side side-pages"></div>' +
        coverHTML +
      '</div></div>' +
      '<div class="book-panel" id="panel-' + b.id + '" role="region" aria-labelledby="bp-' + b.id + '">' + panelHTML(b) + '</div>';
    shelf.appendChild(el);
  });

  function setHash(id) {
    try { history.replaceState(null, '', id ? '#book/' + id : location.pathname + location.search); } catch (e) {}
  }

  function close(el, keepHash) {
    if (!el) return;
    el.classList.remove('is-open');
    el.querySelector('.book-hit').setAttribute('aria-expanded', 'false');
    if (openEl === el) openEl = null;
    if (detail) detail.innerHTML = '';
    if (!keepHash) setHash(null);
  }

  function open(el, fromHash) {
    if (openEl && openEl !== el) close(openEl, true);
    el.classList.add('is-open');
    el.querySelector('.book-hit').setAttribute('aria-expanded', 'true');
    openEl = el;
    var b = BOOKS.filter(function (x) { return x.id === el.dataset.id; })[0];
    if (detail) detail.innerHTML = '<div class="book-panel" role="region" aria-labelledby="bpm-' + b.id + '">' + panelHTML(b).replace('id="bp-', 'id="bpm-') + '</div>';
    setHash(b.id);
    // Bring the open book into view once the slot has widened.
    setTimeout(function () {
      var r = el.getBoundingClientRect(), sr = scroller.getBoundingClientRect();
      if (r.left < sr.left || r.right > sr.right) {
        scroller.scrollLeft += r.left - sr.left - 24;
      }
      if (fromHash) el.scrollIntoView({ block: 'center', behavior: reduce.matches ? 'auto' : 'smooth' });
    }, reduce.matches ? 0 : 420);
  }

  shelf.addEventListener('click', function (e) {
    var hit = e.target.closest('.book-hit');
    if (!hit) return;
    var el = hit.closest('.book');
    if (el.classList.contains('is-open')) close(el); else open(el);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openEl) {
      var hit = openEl.querySelector('.book-hit');
      close(openEl);
      hit.focus();
    }
  });

  narrow.addEventListener('change', function () {
    BOOKS.forEach(function (b) { applySize(document.getElementById('book-' + b.id), b); });
  });

  // A link like /#book/grandstand opens that book and scrolls to it once
  // the page (and its fonts) have settled.
  var m = /^#book\/([\w-]+)$/.exec(location.hash);
  if (m) {
    var target = document.getElementById('book-' + m[1]);
    if (target) {
      if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
      var go = function () { open(target, true); };
      if (document.readyState === 'complete') go(); else window.addEventListener('load', go);
    }
  }
})();
