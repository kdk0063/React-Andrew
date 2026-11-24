// Custom-alphabet letters (redrawn draft 2) → SVG. Shared by the logo pages.
const OV=2.5;
const ext=(x1,y1,x2,y2,e)=>{const L=Math.hypot(x2-x1,y2-y1),ux=(x2-x1)/L,uy=(y2-y1)/L;return [x1-ux*e,y1-uy*e,x2+ux*e,y2+uy*e];};
function glyph(ch,s){
  const c=s/2, T=c-OV, B=100-c+OV;
  switch(ch){
  case 'A':{const w=86,x0=s*.62;const [a1,b1]=ext(w/2,0,x0,100,0).slice(2).length?[x0-(w/2-x0)/100*s,100+s]:0;return {w,sb:[1,1],clip:[0,100],d:`M${a1} ${b1} L${w/2} 0 L${w-a1} ${b1} M${s*.9+12} 64 H${w-s*.9-12}`};}
  case 'D':{const w=82,k=40,rx=w-c-k,ry=50-c;return {w,sb:[8,5],clip:[0,100],d:`M${c} ${c} H${k} A${rx} ${ry} 0 0 1 ${k} ${100-c} H${c} Z`};}
  case 'K':{const w=74,ay=62,bx=w-s*.45;            // arm runs on into the stem and is trimmed flush with its left edge: one solid join
            const ax=-s, ayy=ay+(ay/(bx-c))*(c+s);           // extend the arm line past the stem centre to x=-s
            const px=c+(bx-c)*.36, py=ay-ay*.36, qx=w-s*.4, qy=100;  // leg springs from the arm, its start tucked inside the arm
            const L=Math.hypot(qx-px,qy-py), sx=px-(qx-px)/L*s*.3, sy=py-(qy-py)/L*s*.3;
            return {w,sb:[8,0],clip:[0,100],d:`M${c} 0 V100 M${bx+(bx-c)/ay*s} ${-s} L${ax} ${ayy} M${sx} ${sy} L${qx+(qx-px)/(qy-py)*s} ${qy+s}`};}
  case 'T':{const w=72;return {w,sb:[1,1],clip:[0,100],d:`M0 ${c} H${w} M${w/2} 0 V100`};}
  case 'U':{const w=76,rx=(w-s)/2,top=56;return {w,sb:[8,8],clip:[0,100+OV],d:`M${c} 0 V${top} A${rx} ${B-top} 0 0 0 ${w-c} ${top} V0`};}
  case 'I':{return {w:s,sb:[8,8],clip:[0,100],d:`M${c} 0 V100`};}
  case 'O':{const w=94,rx=w/2-c,ry=50-c+OV;return {w,sb:[5,5],clip:[-OV,100+OV],d:`M${w/2} ${T} A${rx} ${ry} 0 1 0 ${w/2} ${B} A${rx} ${ry} 0 1 0 ${w/2} ${T}`};}
  case 'S':{const w=66,l=c,r=w-c,m=w/2;   // top bowl a touch narrower than the bottom, spine through the middle
     return {w,sb:[5,5],clip:[-OV,100+OV],d:`M${r-2} ${T+19} C${r-5} ${T+6} ${m+9} ${T} ${m} ${T} C${l+9} ${T} ${l+2} ${T+8} ${l+2} ${T+21} C${l+2} 37 ${m-8} 44 ${m} 47 C${m+12} 51 ${r} 57 ${r} 72 C${r} ${B-8} ${m+11} ${B} ${m} ${B} C${l+9} ${B} ${l} ${B-6} ${l-1} ${B-21}`};}
  case '.':return {w:s,sb:[5,0],dot:true};
  }}
const SPACE=40;
function word(t,s,dot,tr=0){let x=0,out='',clips='';const id='k'+Math.random().toString(36).slice(2,7);
  [...t].forEach((ch,i)=>{if(ch===' '){x+=SPACE;return;}const g=glyph(ch,s);x+=g.sb[0];
    if(g.dot)out+=`<rect x="${x}" y="${100-s}" width="${s}" height="${s}" fill="${dot||'currentColor'}" stroke="none"/>`;
    else{clips+=`<clipPath id="${id}${i}"><rect x="${x}" y="${g.clip[0]}" width="${g.w}" height="${g.clip[1]-g.clip[0]}"/></clipPath>`;
         out+=`<g clip-path="url(#${id}${i})"><path transform="translate(${x} 0)" d="${g.d}"/></g>`;}
    x+=g.w+g.sb[1]+tr;});
  const first=glyph(t[0],s).sb[0];return [`<defs>${clips}</defs><g transform="translate(${-first} 0)">${out}</g>`,x-first-tr];}
function svg(lines,s,o={}){const lead=o.lead||150;let W=0;const parts=lines.map(l=>{const r=word(l,s,o.dot);W=Math.max(W,r[1]);return r;});
  const H=100+lead*(lines.length-1);
  const body=parts.map(([g,w],i)=>`<g transform="translate(${(W-w)/2} ${i*lead})">${g}</g>`).join('');
  return {W,H,s:`<svg viewBox="0 ${-OV} ${W} ${H+2*OV}" fill="none" stroke="currentColor" stroke-width="${s}" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" role="img" aria-label="ADK Studio.">${body}</svg>`};}
