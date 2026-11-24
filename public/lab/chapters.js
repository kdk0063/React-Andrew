// Landing-page lab: the chapters, oldest first (east = forward in time).
window.CH = [
  { id: 'babeldabble', t: 'Babel Dabble', k: 'Contract', tag: 'Ed-tech game', y: '2017–2018', y0: 2017, y1: 2018, cover: '/books/babeldabble-cover.jpg', bg: '#44507C', ink: '#fff', href: '/work/babel-dabble/' },
  { id: 'kidian', t: 'Kidian', k: 'Contract', tag: 'Marketplace', y: '2018–2019', y0: 2018, y1: 2019, cover: '/books/kidian-cover.jpg', bg: '#3CA9FF', ink: '#fff', href: '/work/kidian/' },
  { id: 'beoncarrier', t: 'Beon Carrier', k: 'NTG', tag: 'Logistics app', y: '2019–2024', y0: 2019, y1: 2024, cover: '/books/beoncarrier-cover.jpg', bg: '#1FB3AE', ink: '#121212', href: '/work/beon-carrier/' },
  { id: 'allenscabinets', t: 'allenscabinets.com', k: 'Client', tag: 'Website', y: '2026', y0: 2026, y1: 2026, cover: '/books/allenscabinets-cover.jpg', bg: '#A8A49C', ink: '#121212', href: '/work/allenskb/' },
  { id: 'allensadmin', t: 'Allen’s Admin', k: 'Client', tag: 'Custom CRM', y: '2026', y0: 2026, y1: 2026, cover: '/books/allensadmin-cover.jpg', bg: '#121212', ink: '#fff', href: '/work/allens-admin/' },
  { id: 'genesismassage', t: 'Genesis Massage', k: 'Client', tag: 'Booking site', y: '2026', y0: 2026, y1: 2026, cover: null, bg: '#1E3B9E', ink: '#fff', href: '/work/genesis-massage/' },
  { id: 'grandstand', t: 'Grandstands', k: 'Personal', tag: '3D web', y: '2026', y0: 2026, y1: 2026, cover: '/books/grandstand-cover.jpg', bg: '#F1F0EC', ink: '#D7392B', href: '/work/grandstand/' },
  { id: 'mechelinguide', t: 'MeChelinGuide', k: 'Personal', tag: 'Map app · in progress', y: '2026', y0: 2026, y1: 2026, cover: '/books/mechelinguide-cover.jpg', bg: '#E9A23B', ink: '#121212', href: '/projects/' },
  { id: 'bsides', t: 'B-Sides', k: 'Personal', tag: 'Notebook', y: 'Always', y0: 2026, y1: 2026, cover: null, bg: '#F3F3F1', ink: '#E0262B', href: '/work/b-sides/' },
];
// one-line descriptions and roles, from the shelf (library.js)
window.CH_INFO = {
  babeldabble: ['A real-time competitive calligraphy platform that turns learning Chinese characters into timed matches, with practice mode, word lists and a leaderboard.', 'Junior full-stack developer'],
  kidian: ['A marketplace app for kids’ parties: search vendors by date and party size, compare packages and reviews, book, and add extras like the cake.', 'Front-end developer'],
  beoncarrier: ['NTG’s load board for trucking carriers. Find loads by lane, see rate and route on one screen, book instantly or bid, then get paid fast.', 'Full-stack developer'],
  allenscabinets: ['Marketing site, showroom booking and quote requests for a kitchen and bath showroom in Alexandria, Virginia.', 'Design & engineering'],
  allensadmin: ['A CRM built around how a showroom actually works: every job moves from first call to install, with follow-ups that write themselves.', 'Sole designer & engineer'],
  genesismassage: ['A calm, booking-first website for a massage practice in Vienna, Virginia. Clients pick a session and a time and book in under a minute.', 'Project manager & system architect'],
  grandstand: ['Real Formula 1 races replayed on a tiny 3D world you can walk around, on hand-built dioramas of each circuit, in the browser.', 'Design, 3D & engineering'],
  mechelinguide: ['A shared, invite-only map of places worth eating, with private circles and a map that rescopes with the feed.', 'Product & engineering'],
  bsides: ['My notebook of visual ideas: homages to covers, posters and sleeves I love, alongside experiments in how a portfolio can behave.', 'Notebook'],
};
window.ROMAN =['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
// a cover: the real image, or a flat cloth cover with the title set on it
window.coverHTML = function (c, cls) {
  if (c.id === 'bsides')   // the notebook's own cover: a red box label on white cloth
    return '<div class="' + (cls || '') + ' flat" style="background:#F3F3F1;align-items:center;justify-content:center;padding:0"><span style="background:#E0262B;color:#fff;font-style:italic;font-weight:800;letter-spacing:-.03em;padding:.18em .45em .22em;font-size:1.1em">B-Sides</span></div>';
  return c.cover
    ? '<img class="' + (cls || '') + '" src="' + c.cover + '" alt="" loading="lazy">'
    : '<div class="' + (cls || '') + ' flat" style="background:' + c.bg + ';color:' + c.ink + '"><span>' + c.t + '</span></div>';
};
// the ADK needle (north at rest, east when .east-on)
window.NEEDLE = '<svg class="ndl-svg" viewBox="-12 -12 24 24" aria-hidden="true"><path class="ndl" d="M-5 0L0 -3.4L11 0L0 3.4Z" fill="#B7282E"/></svg>';
