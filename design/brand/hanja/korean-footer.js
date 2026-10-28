// 東奎 footer mark in a Korean palette (오방색 / 단청 / 한지), with a brush-order write-on animation.
const {cell}=require('./glyphs.js');const fs=require('fs');
const hanji='#F3ECDD',paper='#FFFFFF',seal='#B7282E',hwang='#E2A33A';
// stroke colours: name, hangul, meaning, hex
const P=[
 ['Meok','먹','ink stick black, warm','#2A2623'],
 ['Jjokbit','쪽빛','indigo dye','#26386B'],
 ['Cheong','청','obangsaek blue · east','#1F5FA3'],
 ['Nok','녹','dancheong green','#2F6E5E'],
 ['Jaju','자주','royal plum','#5E2A4E'],
 ['Hwangto','황토','ochre earth','#8A5A2B'],
];
const mark=(fg,bg,id)=>{let n=0;
  let s=`<svg class="mk" viewBox="-6 -6 232 112" role="img" aria-label="東奎">${cell('east',0,0,{fg,sun:seal,star:hwang,cut:bg,cut2:fg,dots:hwang})}${cell('star',120,0,{fg,sun:seal,star:hwang,cut:bg,cut2:fg,dots:hwang})}</svg>`;
  // number each brush stroke so they draw on in order (획순)
  s=s.replace(/<path d="([^"]+)" fill="none"/g,(m,d)=>`<path class="stk" pathLength="1" style="--n:${n++}" d="${d}" fill="none"`);
  s=s.replace(/<rect /g,'<rect class="sun" ').replace(/<circle ([^>]*fill="#E2A33A")/g,'<circle class="sta" $1');
  return s;};
const foot=(m,bg)=>`<footer style="background:${bg}"><span>© 2026 ADK STUDIO</span><span class="sep">·</span>${m}</footer>`;
const rows=P.map(([en,ko,mean,hex])=>`<div class="opt"><div class="tag">${en} <span class="ko">${ko}</span><small>${mean} · ${hex}</small></div>${foot(mark(hex,paper),paper)}${foot(mark(hex,hanji),hanji)}<div class="big">${mark(hex,paper)}</div></div>`).join('');
fs.writeFileSync('korean-footer.html',`<!doctype html><html lang="ko"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Korean Footer Mark</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..800&family=IBM+Plex+Mono:wght@400;500&family=Noto+Serif+KR:wght@500;700&display=swap">
<style>body{margin:0;padding:40px clamp(16px,4vw,64px);background:#fff;color:#0A0A0A;font-family:Archivo,sans-serif}
h1{font-weight:800;font-variation-settings:'wdth' 80;font-size:40px;letter-spacing:-.02em;margin:0 0 6px}p.l{font:13px/1.6 'IBM Plex Mono',monospace;color:#55575c;margin:0 0 28px;max-width:860px}
.ko{font-family:'Noto Serif KR',serif;font-weight:700;letter-spacing:0;margin-left:4px}
.opt{border-top:1px solid #0A0A0A;padding:18px 0 22px;display:grid;grid-template-columns:200px 1fr 1fr 170px;gap:18px;align-items:center}
.tag{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.1em}.tag small{display:block;margin-top:6px;font-weight:400;letter-spacing:0;color:#6b6b6b;line-height:1.5}
footer{display:flex;align-items:center;justify-content:center;gap:10px;font:400 12px 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#6B6B6B;padding:18px 0;border:1px dashed #ddd}
footer .mk{height:15px;width:auto;display:block}.big .mk{height:64px;width:auto;display:block}
.hdr{display:grid;grid-template-columns:200px 1fr 1fr 170px;gap:18px;font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#6b6b6b;margin-bottom:8px}
/* 획순: strokes write on in order, then the red sun rises and the gold star lands */
.play .stk{stroke-dasharray:1;stroke-dashoffset:1;animation:write .32s cubic-bezier(.6,0,.3,1) forwards;animation-delay:calc(var(--n) * .16s)}
.play .sun{transform-box:fill-box;transform-origin:50% 100%;opacity:0;animation:rise .7s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:.5s}
.play .sta{transform-box:fill-box;transform-origin:50% 50%;opacity:0;animation:land .6s cubic-bezier(.3,1.8,.5,1) forwards;animation-delay:1.9s}
@keyframes write{to{stroke-dashoffset:0}}
@keyframes rise{from{opacity:0;transform:translateY(40%) scaleY(.6)}to{opacity:1;transform:none}}
@keyframes land{from{opacity:0;transform:scale(0) rotate(-90deg)}to{opacity:1;transform:none}}
.anim{border-top:2px solid #0A0A0A;margin-top:30px;padding-top:20px;display:grid;grid-template-columns:200px 1fr;gap:18px;align-items:center}
.stage{display:flex;gap:40px;align-items:center;flex-wrap:wrap}.stage > .mk{height:110px;width:auto}.stage footer{min-width:420px}
button{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.1em;padding:10px 14px;border:1px solid #0A0A0A;background:#fff;cursor:pointer}
@media (prefers-reduced-motion:reduce){.play *{animation:none!important;opacity:1!important;stroke-dashoffset:0!important}}
</style></head><body>
<h1>東奎 — Korean colourways</h1>
<p class="l">Stroke colours from the Korean palette: 오방색 (the five traditional colours — 청 blue is the colour of the east), 단청 temple paint, 쪽빛 indigo dye and 먹 ink. The sun is 도장 seal red and the star is 황 yellow in every version. Each is shown on white and on 한지 paper.</p>
<div class="hdr"><span>COLOUR</span><span>ON WHITE</span><span>ON 한지 HANJI</span><span>DETAIL</span></div>
${rows}
<div class="anim"><div class="tag">ANIMATION · 획순<small>Brush-order write-on: each stroke is written in order like calligraphy, the red sun rises behind 木 (東 = sun through a tree), then the gold star lands. Plays once when the footer scrolls into view.</small><br><button onclick="replay()">▶ REPLAY</button></div>
<div class="stage" id="st">${mark('#26386B',hanji)}${foot(mark('#26386B',hanji),hanji)}${mark('#2A2623',paper)}</div></div>
<script>function replay(){const s=document.getElementById('st');s.classList.remove('play');void s.offsetWidth;s.classList.add('play');}replay();</script>
</body></html>`);
