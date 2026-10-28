// "Pages read": a small site-wide page-view count in the footer line.
// Each page counts once per browser session, and only on studioadk.com, so
// refreshes, local previews and Vercel preview builds don't inflate it.
(function(){
  var foot = document.getElementById('foot-line');
  if (!foot || !window.fetch) return;

  var API = 'https://abacus.jasoncameron.dev/';
  var KEY = 'studioadk.com/pages-read';
  var live = /(^|\.)studioadk\.com$/.test(location.hostname);
  var seen = 'reads:' + location.pathname;
  var counted = false;
  try { counted = sessionStorage.getItem(seen) === '1'; } catch (e) {}
  var hit = live && !counted;

  var style = document.createElement('style');
  style.textContent =
    '.foot-line .reads{font-variant-numeric:tabular-nums;opacity:0;transition:opacity .6s ease;white-space:nowrap;}' +
    '.foot-line .reads.in{opacity:1;}' +
    '.foot-line{flex-wrap:wrap;row-gap:6px;}.foot-line>span{white-space:nowrap;}' +
    '@media (max-width:520px){.foot-line .reads-dot{display:none;}.foot-line .reads:not(.reads-dot){flex-basis:100%;text-align:center;}}' +
    '@media (prefers-reduced-motion:reduce){.foot-line .reads{transition:none;}}';
  document.head.appendChild(style);

  fetch(API + (hit ? 'hit/' : 'get/') + KEY)
    .then(function(r){ return r.ok ? r.json() : null; })
    .then(function(j){
      if (!j || typeof j.value !== 'number' || j.value < 1) return;
      if (hit) { try { sessionStorage.setItem(seen, '1'); } catch (e) {} }
      var dot = document.createElement('span');
      dot.className = 'reads reads-dot';
      dot.setAttribute('aria-hidden', 'true');
      dot.textContent = '·';
      var reads = document.createElement('span');
      reads.className = 'reads';
      reads.textContent = j.value.toLocaleString('en-US') + ' PAGES READ';
      foot.appendChild(dot);
      foot.appendChild(reads);
      requestAnimationFrame(function(){ requestAnimationFrame(function(){ dot.classList.add('in'); reads.classList.add('in'); }); });
    })
    .catch(function(){});
})();
