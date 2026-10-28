const {C,cell,dot}=require('./glyphs.js');
const fs=require('fs');
const col={fg:C.cream,sun:C.red,star:C.gold,cut:C.ink,cut2:C.cream,dots:C.gold};
const mono={fg:C.ink,sun:C.ink,star:C.ink,cut:'#FFFFFF',cut2:'#FFFFFF',dots:C.ink};
// Design 1: 東 over 奎
const d1=(o,bg)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -24 140 270"><rect x="-20" y="-24" width="140" height="270" fill="${bg}"/>${cell('east',0,0,o)}${cell('star',0,122,o)}</svg>`;
// Design 2: 金 東 奎 column with a column of circles (gold, red, teal)
const d2=(o,bg,circ)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="-20 -24 210 400"><rect x="-20" y="-24" width="210" height="400" fill="${bg}"/>${dot(20,50,20,circ[0])}${dot(20,175,20,circ[1])}${dot(20,300,20,circ[2])}${cell('gold',60,0,o)}${cell('east',60,125,o)}${cell('star',60,250,o)}</svg>`;
fs.writeFileSync('d1-color.svg',d1(col,C.ink));
fs.writeFileSync('d1-mono.svg',d1(mono,'#FFFFFF'));
fs.writeFileSync('d2-color.svg',d2(col,C.ink,[C.gold,C.red,C.teal]));
fs.writeFileSync('d2-mono.svg',d2(mono,'#FFFFFF',[C.ink,C.ink,C.ink]));
fs.writeFileSync('sheet.html',`<body style="margin:0;background:#222;display:flex;gap:20px;padding:20px;align-items:flex-start">${['d1-color','d1-mono','d2-color','d2-mono'].map(n=>`<img src="${n}.svg" style="height:420px">`).join('')}</body>`);
