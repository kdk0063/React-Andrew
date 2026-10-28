/* ADK Studio — the library.
   One book per project. A side with spine.image / cover.image shows
   that photo (the realistic Artlist scans in /books/); a side without
   one falls back to the book's `design` parody from covers.js, then to
   the placeholder lettering. A photographed book's size.d is its spine
   photo's width/height × size.h, so the scan fills the spine undistorted. */
(function () {
  var STAR = '<svg viewBox="0 0 12 12" aria-hidden="true"><path d="M6 0l1.4 4.6L12 6 7.4 7.4 6 12 4.6 7.4 0 6l4.6-1.4z" fill="currentColor"/></svg>';

  var BOOKS = [
    {
      id: 'allenscabinets', design: 'apc', title: "allenscabinets.com", spineTitle: "Allen's Cabinets", coverTitle: 'Allen’s<br>Cabinets',
      kicker: 'Client · 2026', tag: 'Website',
      desc: 'Marketing site, showroom booking and quote requests for a kitchen and bath showroom in Alexandria, Virginia. Every request lands in the same database the staff tool reads.',
      meta: [['Role', 'Design & engineering'], ['Year', '2026'], ['Stack', 'React, Vite, Supabase, Vercel'], ['Status', 'Live']],
      links: [['Open project', '/work/allenskb/', true], ['Visit site ↗', 'https://www.allenscabinets.com']],
      size: { h: 380, d: 73 }, spine: { image: '/books/allenscabinets-spine.jpg', bg: '#1B5FAA', fg: '#FFFFFF', ac: '#E9A23B', pat: 'band' }, cover: { image: '/books/allenscabinets-cover.jpg', bg: '#1B5FAA', fg: '#FFFFFF' }
    },
    {
      id: 'allensadmin', design: 'knicks', title: "Allen’s Admin", spineTitle: "Allen's Admin", coverTitle: 'Allen’s<br>Admin',
      kicker: 'Client · Custom CRM', tag: 'Custom CRM',
      desc: 'A CRM built around how a showroom actually works: every job moves from first call to install, with follow-ups that write themselves, supplier orders, contractors and insights in one place.',
      meta: [['Role', 'Sole designer & engineer'], ['Stack', 'React, Supabase, Trello, QuickBooks'], ['Status', 'In daily use']],
      links: [['Open project', '/work/allens-admin/', true]],
      size: { h: 350, d: 41 }, spine: { image: '/books/allensadmin-spine.jpg', bg: '#121212', fg: '#FFFFFF', ac: '#E9A23B', pat: 'stripes' }, cover: { image: '/books/allensadmin-cover.jpg', bg: '#121212', fg: '#E9A23B' }
    },
    {
      id: 'grandstand', design: 'supreme', title: 'Grandstands', spineTitle: 'Grandstands', coverTitle: 'Grand<br>stands',
      kicker: 'Personal · Live', tag: '3D web',
      desc: 'Real Formula 1 races replayed on a tiny 3D world you can walk around: every lap, pit stop and overtake from the actual race, on hand-built dioramas of each circuit, in the browser.',
      meta: [['Role', 'Design, 3D & engineering'], ['Stack', 'Three.js, React Three Fiber, Blender, OpenStreetMap'], ['Status', 'Live']],
      links: [['Open project', '/work/grandstand/', true]],
      liveUrl: 'https://www.thegrandstands.net/',
      size: { h: 400, d: 53 }, spine: { image: '/books/grandstand-spine.jpg', bg: '#D7392B', fg: '#FFFFFF', ac: '#121212', pat: 'check' }, cover: { image: '/books/grandstand-cover.jpg', bg: '#D7392B', fg: '#FFFFFF' }
    },
    {
      id: 'mechelinguide', design: 'white', title: 'MeChelinGuide', spineTitle: 'MeChelinGuide', coverTitle: 'MeChelin<br>Guide',
      kicker: 'Personal · In progress', tag: 'Map app',
      desc: 'A shared, invite-only map of places worth eating. Private circles with seat caps, row-level security on everything, Google sign-in and a vector-tile map that rescopes with the feed.',
      meta: [['Role', 'Product & engineering'], ['Stack', 'React 19, Supabase, MapLibre'], ['Status', 'Work in progress']],
      links: [],
      note: 'Coming soon',
      size: { h: 330, d: 47 }, spine: { image: '/books/mechelinguide-spine.jpg', bg: '#E9A23B', fg: '#121212', ac: '#121212', pat: 'dots' }, cover: { image: '/books/mechelinguide-cover.jpg', bg: '#E9A23B', fg: '#121212' }
    },
    {
      id: 'beoncarrier', title: 'Beon Carrier', spineTitle: 'Beon Carrier', coverTitle: 'Beon<br>Carrier',
      kicker: 'NTG · 2019–2024', tag: 'Logistics',
      desc: 'NTG’s load board for trucking carriers. Find loads by lane, see rate and route on one screen, book instantly or bid, then get paid fast. I worked on it full-stack for five years.',
      meta: [['Role', 'Full-stack developer'], ['Years', '2019–2024'], ['Stack', 'React, .NET Core, SQL Server'], ['Status', 'Live']],
      links: [['Open project', '/work/beon-carrier/', true], ['ntgfreight.com ↗', 'https://ntgfreight.com/technology/beon-carrier/']],
      size: { h: 370, d: 54 }, spine: { image: '/books/beoncarrier-spine.jpg', bg: '#F2C230', fg: '#121212', ac: '#121212', pat: 'band' }, cover: { image: '/books/beoncarrier-cover.jpg', bg: '#121212', fg: '#F2C230' }
    },
    {
      id: 'kidian', design: 'nike', title: 'Kidian', spineTitle: 'Kidian', coverTitle: 'Kidian',
      kicker: 'Contract · 2018–2019', tag: 'Marketplace',
      desc: 'A marketplace app for kids’ parties: search vendors by date and party size, compare packages and reviews, book, and add extras like the cake. OpenTable for birthdays.',
      meta: [['Role', 'Front-end developer'], ['Years', '2018–2019'], ['Stack', 'React, Context API, Figma']],
      links: [['Open project', '/work/kidian/', true]],
      size: { h: 320, d: 30 }, spine: { image: '/books/kidian-spine.jpg', bg: '#3CA9FF', fg: '#FFFFFF', ac: '#FFFFFF', pat: 'dots' }, cover: { image: '/books/kidian-cover.jpg', bg: '#3CA9FF', fg: '#FFFFFF' }
    },
    {
      id: 'babeldabble', design: 'stussy', title: 'Babel Dabble', spineTitle: 'Babel Dabble', coverTitle: 'Babel<br>Dabble',
      kicker: 'Contract · 2017–2018', tag: 'Ed-tech game',
      desc: 'A real-time competitive calligraphy platform that turns learning Chinese characters into timed matches, with practice mode, word lists and a leaderboard.',
      meta: [['Role', 'Junior full-stack developer'], ['Years', '2017–2018'], ['Stack', 'React, AngularJS, ASP.NET Web API, SQL Server']],
      links: [['Open project', '/work/babel-dabble/', true]],
      size: { h: 345, d: 41 }, spine: { image: '/books/babeldabble-spine.jpg', bg: '#44507C', fg: '#FFFFFF', ac: '#7FB2E5', pat: 'stripes' }, cover: { image: '/books/babeldabble-cover.jpg', bg: '#44507C', fg: '#FFFFFF' }
    }
  ];

  var shelf = document.getElementById('shelf');
  var scroller = document.getElementById('shelf-scroll');
  var detail = document.getElementById('shelf-detail');
  if (!shelf) return;

  var library = shelf.closest('.library') || shelf.parentNode;
  // The shelf always fits its width; it never scrolls sideways. fit() picks
  // a scale for the books and decides whether the open book's details sit
  // beside it ("inline") or below the shelf ("stacked", phones and tablets).
  var BASE = 0.86, MIN_INLINE = 0.7, PANEL = 340, GAPX = 36, GAP = 6;
  var scale = BASE;
  function fit() {
    var cs = getComputedStyle(shelf);
    var pad = parseFloat(cs.paddingLeft) + parseFloat(cs.paddingRight);
    var avail = scroller.clientWidth - pad - GAP * (BOOKS.length - 1);
    // Room for every spine plus the widest book open (cover minus its spine).
    var sumD = 0, extra = 0;
    BOOKS.forEach(function (b) { sumD += b.size.d; extra = Math.max(extra, b.size.h * 0.72 - b.size.d); });
    var inlineScale = (avail - 2 * GAPX - PANEL) / (sumD + extra);
    var stacked = inlineScale < MIN_INLINE;
    scale = Math.min(BASE, stacked ? avail / (sumD + extra) : inlineScale);
    library.classList.toggle('stacked', stacked);
  }
  fit();
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
    var s = scale;
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
    var spineHTML = design && !b.spine.image
      ? '<div class="side side-spine spx spx-' + b.design + '">' + design.spine(b, no) + '</div>'
      : '<div class="side side-spine pat-' + b.spine.pat + spineImg + '">' +
          '<span class="n">' + no + '</span><span class="t">' + esc(b.spineTitle) + '</span><span class="mark">' + STAR + '</span></div>';
    var coverHTML = design && !b.cover.image
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

  // quiet: open without touching the URL or scrolling (the default open book).
  function open(el, fromHash, quiet) {
    if (openEl && openEl !== el) close(openEl, true);
    el.classList.add('is-open');
    el.querySelector('.book-hit').setAttribute('aria-expanded', 'true');
    openEl = el;
    var b = BOOKS.filter(function (x) { return x.id === el.dataset.id; })[0];
    if (detail) detail.innerHTML = '<div class="book-panel" role="region" aria-labelledby="bpm-' + b.id + '">' + panelHTML(b).replace('id="bp-', 'id="bpm-') + '</div>';
    if (!quiet) setHash(b.id);
    // A linked book: bring it into view once its slot has widened.
    if (fromHash) setTimeout(function () {
      el.scrollIntoView({ block: 'center', behavior: reduce.matches ? 'auto' : 'smooth' });
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

  var resizeTimer;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      fit();
      BOOKS.forEach(function (b) { applySize(document.getElementById('book-' + b.id), b); });
    }, 120);
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
  } else {
    // No book in the link: the first book starts open, as a preview of
    // how the shelf works.
    var first = shelf.querySelector('.book');
    if (first) open(first, false, true);
  }
})();
