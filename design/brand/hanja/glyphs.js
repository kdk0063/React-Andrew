const C={cream:'#F4EFC9',red:'#D9433A',gold:'#E3A23A',teal:'#2F7468',ink:'#0B0B0B'};
const st=(d,w=10,c='CREAM')=>`<path d="${d}" fill="none" stroke="${c}" stroke-width="${w}" stroke-linecap="butt" stroke-linejoin="round"/>`;
const dot=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
// each glyph is drawn in a 100 x 100 cell
const G={
 east:(o)=>st('M4 8H96',13)+st('M50 0V20',13)+`<rect x="16" y="19" width="68" height="44" rx="11" fill="${o.sun}"/>`+st('M50 19V63',11,o.cut2)+st('M16 41H84',10,o.cut2)+st('M50 62A44 38 0 0 1 6 100',13)+st('M50 62A44 38 0 0 0 94 100',13),
 star:(o)=>st('M4 15H78',13)+dot(89,15,11,o.star)+dot(89,15,3.8,o.cut)+st('M50 0V15A44 29 0 0 1 6 44',12)+st('M50 15A44 29 0 0 0 94 44',12)
   +st('M50 50V100',10)+st('M26 54H74',10)+st('M14 67H86',10)+st('M26 81H74',10)+st('M4 95H96',10),
 gold:(o)=>st('M50 2A48 40 0 0 1 2 42',12)+st('M50 2A48 40 0 0 0 98 42',12)+st('M28 44H72',11)+st('M14 60H86',11)+st('M50 44V92',11)
   +dot(28,78,8,o.dots)+dot(72,78,8,o.dots)+st('M4 95H96',11),
};
function cell(name,x,y,o,s=1){return `<g transform="translate(${x} ${y}) scale(${s})">${G[name](o).replaceAll('CREAM',o.fg)}</g>`;}
module.exports={C,cell,dot,st};
