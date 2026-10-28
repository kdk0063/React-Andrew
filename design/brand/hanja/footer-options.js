// Footer treatments of the 東奎 glyphs, rendered small (footer size) and large (detail).
const {cell}=require('./glyphs.js');const fs=require('fs');
const ink='#0A0A0A',grey='#6B6B6B',paper='#FFFFFF',red='#D7261E',gold='#E9A23B',cream='#F4EFC9';
const row=o=>`<svg class="mk" viewBox="-6 -6 232 112" role="img" aria-label="東奎">${cell('east',0,0,o)}${cell('star',120,0,o)}</svg>`;
const col=o=>`<svg class="mk" viewBox="-14 -14 128 250" role="img" aria-label="東奎">${cell('east',0,0,o)}${cell('star',0,122,o)}</svg>`;
const A=row({fg:grey,sun:grey,star:grey,cut:paper,cut2:paper,dots:grey});
const B=row({fg:ink,sun:red,star:gold,cut:paper,cut2:ink,dots:gold});
const C=`<span class="seal">${col({fg:cream,sun:cream,star:gold,cut:red,cut2:red,dots:gold})}</span>`;
const D=`<span class="hov">${row({fg:grey,sun:'var(--sun)',star:'var(--star)',cut:paper,cut2:'var(--cut2)',dots:grey})}</span>`;
const opts=[['A · Quiet','Same grey as the footer text. The mark replaces the typed characters.',A],
 ['B · Accent','Ink strokes, red sun inside 東, gold star on 奎.',B],
 ['C · Seal','A red 도장-style stamp, the two characters stacked.',C],
 ['D · Reveal','Grey at rest; hover the footer and the sun turns red and the star gold.',D]];
const foot=m=>`<footer><span>© 2026 ADK STUDIO</span><span class="sep">·</span>${m}</footer>`;
fs.writeFileSync('footer-options.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Footer Mark Options</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Mono:wght@400;500&display=swap">
<style>body{margin:0;padding:40px clamp(16px,4vw,64px);background:#fff;color:${ink};font-family:Archivo,sans-serif}
h1{font-weight:800;font-variation-settings:'wdth' 80;font-size:40px;letter-spacing:-.02em;margin:0 0 6px}p.l{font:13px 'IBM Plex Mono',monospace;color:#55575c;margin:0 0 28px}
.opt{border-top:1px solid ${ink};padding:20px 0 26px;display:grid;grid-template-columns:220px 1fr 220px;gap:24px;align-items:center}
.tag{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.1em}.tag small{display:block;margin-top:6px;font-weight:400;letter-spacing:0;color:#6b6b6b;line-height:1.5}
footer{display:flex;align-items:center;justify-content:center;gap:10px;font:400 13px 'IBM Plex Mono',monospace;letter-spacing:.12em;color:${grey};padding:18px 0;border:1px dashed #ddd}
footer .mk{height:15px;width:auto;display:block}footer .seal{display:inline-grid;place-items:center;background:${red};border-radius:3px;padding:3px}footer .seal .mk{height:26px}
.big .mk{height:90px;width:auto}.big .seal{display:inline-grid;background:${red};border-radius:12px;padding:12px}.big .seal .mk{height:140px}
.hov{--sun:${grey};--star:${grey};--cut2:${paper}}.hov path,.hov rect,.hov circle{transition:fill .4s,stroke .4s}
footer:hover .hov,.big:hover .hov{--sun:${red};--star:${gold};--cut2:${grey}}
@media(max-width:800px){.opt{grid-template-columns:1fr}}</style></head><body>
<h1>Footer mark — 東奎</h1><p class="l">Middle: actual footer size. Right: enlarged. Hover D.</p>
${opts.map(([t,s,m])=>`<div class="opt"><div class="tag">${t}<small>${s}</small></div>${foot(m)}<div class="big">${m}</div></div>`).join('')}
</body></html>`);
