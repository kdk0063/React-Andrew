// Colourways for design 1 (東奎) and design 2 (金東奎 + circles), plus horizontal layouts.
const {cell,dot}=require('./glyphs.js');
const fs=require('fs');
// name, bg, fg, sun, star, circle column [金,東,奎]
const P=[
 ['01 Original',      '#0B0B0B','#F4EFC9','#D9433A','#E3A23A',['#E3A23A','#D9433A','#2F7468']],
 ['02 Paper',         '#F4EFC9','#0B0B0B','#D9433A','#E3A23A',['#E3A23A','#D9433A','#2F7468']],
 ['03 ADK Brand',     '#FFFFFF','#0A0A0A','#D7261E','#E9A23B',['#E9A23B','#D7261E','#1B5FAA']],
 ['04 East Blue',     '#1B5FAA','#FFFFFF','#D7261E','#E9A23B',['#E9A23B','#D7261E','#FFFFFF']],
 ['05 Seal Red',      '#C8322A','#F4EFC9','#0B0B0B','#E3A23A',['#E3A23A','#0B0B0B','#F4EFC9']],
 ['06 Night Navy',    '#111C2E','#F4EFC9','#D9433A','#E3A23A',['#E3A23A','#D9433A','#5B8DC9']],
 ['07 Plum',          '#3B2550','#F4EFC9','#D9433A','#E3A23A',['#E3A23A','#D9433A','#3E9A86']],
 ['08 Deep Teal',     '#1F4F47','#F4EFC9','#D9433A','#E3A23A',['#E3A23A','#D9433A','#F4EFC9']],
 ['09 Olive Field',   '#4E5133','#ECE6CC','#C8322A','#E3A23A',['#E3A23A','#C8322A','#ECE6CC']],
 ['10 Gold on Black', '#0B0B0B','#E3A23A','#E3A23A','#E3A23A',['#E3A23A','#E3A23A','#E3A23A']],
 ['11 Red on Cream',  '#F4EFC9','#C8322A','#C8322A','#C8322A',['#C8322A','#C8322A','#C8322A']],
 ['12 Stamp Black',   '#FFFFFF','#0B0B0B','#0B0B0B','#0B0B0B',['#0B0B0B','#0B0B0B','#0B0B0B']],
];
// sun cross is cut in fg (or bg if sun equals fg); star centre is cut in bg
const opt=([,bg,fg,sun,star])=>({fg,sun,star,cut:bg,cut2:sun===fg?bg:fg,dots:star});
const svg=(vb,bg,body)=>{const [x,y,w,h]=vb;return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}"><rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${bg}"/>${body}</svg>`;};
const d1=p=>svg([-20,-24,140,270],p[1],cell('east',0,0,opt(p))+cell('star',0,122,opt(p)));
const d2=p=>{const o=opt(p),c=p[5];return svg([-20,-24,210,400],p[1],dot(20,50,20,c[0])+dot(20,175,20,c[1])+dot(20,300,20,c[2])+cell('gold',60,0,o)+cell('east',60,125,o)+cell('star',60,250,o));};
// horizontal: 東奎 side by side; 金東奎 with circles in a row above
const h1=p=>svg([-22,-22,264,144],p[1],cell('east',0,0,opt(p))+cell('star',120,0,opt(p)));
const h2=p=>{const o=opt(p),c=p[5];return svg([-22,-22,384,204],p[1],[0,1,2].map(i=>dot(50+i*120,0,14,c[i])).join('')+cell('gold',0,40,o)+cell('east',120,40,o)+cell('star',240,40,o));};
const card=(s,label,w)=>`<figure style="margin:0;width:${w}px"><div style="border-radius:6px;overflow:hidden;line-height:0">${s}</div><figcaption>${label}</figcaption></figure>`;
const css=`body{margin:0;background:#1d1d1d;color:#ddd;font:13px/1.4 -apple-system,Helvetica,sans-serif;padding:28px}h2{font-weight:600;font-size:15px;letter-spacing:.06em;margin:0 0 14px}figcaption{margin-top:7px;color:#aaa}.row{display:flex;flex-wrap:wrap;gap:18px;margin-bottom:34px}svg{display:block;width:100%;height:auto}`;
const page=(title,cards)=>`<!doctype html><meta charset="utf-8"><style>${css}</style><h2>${title}</h2><div class="row">${cards}</div>`;
fs.writeFileSync('var-d1.html',page('DESIGN 1 · 東奎 — COLOURWAYS',P.map(p=>card(d1(p),p[0],150)).join('')));
fs.writeFileSync('var-d2.html',page('DESIGN 2 · 金東奎 — COLOURWAYS',P.map(p=>card(d2(p),p[0],150)).join('')));
const pick=[0,2,3,5,6,9];
fs.writeFileSync('var-h.html',page('HORIZONTAL LAYOUTS',pick.map(i=>card(h1(P[i]),P[i][0]+' · 東奎',300)).join('')+'</div><div class="row">'+pick.map(i=>card(h2(P[i]),P[i][0]+' · 金東奎',300)).join('')));
P.forEach(p=>{const n=p[0].slice(0,2);fs.mkdirSync('variants',{recursive:true});fs.writeFileSync(`variants/d1-${n}.svg`,d1(p));fs.writeFileSync(`variants/d2-${n}.svg`,d2(p));});
