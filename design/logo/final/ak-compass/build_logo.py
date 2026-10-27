"""Build the final A·K logo SVGs with Archivo outlined to paths.

usage: python build_logo.py <archivo-variable.ttf> <out_dir>
"""
import math, sys
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen

src, out = Path(sys.argv[1]), Path(sys.argv[2])
out.mkdir(parents=True, exist_ok=True)


def instance(wght):
    return instantiateVariableFont(TTFont(src), {'wght': wght, 'wdth': 100})


def glyph(font, ch, size, x, base):
    """SVG path data for one character at (x, baseline), plus its scaled bounds."""
    gs = font.getGlyphSet()
    name = font.getBestCmap()[ord(ch)]
    s = size / font['head'].unitsPerEm
    pen = SVGPathPen(gs)
    gs[name].draw(TransformPen(pen, (s, 0, 0, -s, x, base)))
    bp = BoundsPen(gs)
    gs[name].draw(bp)
    xmin, ymin, xmax, ymax = bp.bounds
    return pen.getCommands(), (x + xmin * s, x + xmax * s), gs[name].width * s


def needle(cx, cy, deg, length, w, ink, sw):
    a = math.radians(deg)
    ux, uy = math.cos(a), -math.sin(a)
    px, py = -uy, ux
    b = length * 0.2
    tip = (cx + ux * length, cy + uy * length)
    L = (cx + ux * b + px * w, cy + uy * b + py * w)
    R = (cx + ux * b - px * w, cy + uy * b - py * w)
    p = lambda q: f'{q[0]:.2f},{q[1]:.2f}'
    return (f'<polygon points="{cx:.2f},{cy:.2f} {p(L)} {p(tip)}" fill="{ink}"/>'
            f'<polygon points="{cx:.2f},{cy:.2f} {p(tip)} {p(R)}" fill="none" stroke="{ink}" stroke-width="{sw}" stroke-linejoin="round"/>')


def compass(cx, cy, r, ink, sw, ring=True):
    """Four needles, east 1.5x, west 0.85x, with a hairline ring."""
    w = r * 0.2
    parts = [f'<circle cx="{cx:.2f}" cy="{cy:.2f}" r="{r * 0.66:.2f}" fill="none" stroke="{ink}" stroke-width="{sw}"/>'] if ring else []
    parts += [needle(cx, cy, 0, r * 1.5, w, ink, sw), needle(cx, cy, 90, r, w, ink, sw),
              needle(cx, cy, 180, r * 0.85, w, ink, sw), needle(cx, cy, 270, r, w, ink, sw)]
    return ''.join(parts)


bold, semi = instance(800), instance(600)
SIZE, BASE, R, GAP = 122, 122, 17, 9      # letter size, baseline, compass radius, air either side


def mark(ink, x0=0):
    a_d, (a_l, a_r), _ = glyph(bold, 'A', SIZE, x0, BASE)
    shift = x0 - a_l                         # put the A's left edge exactly at x0
    a_d, (a_l, a_r), _ = glyph(bold, 'A', SIZE, x0 + shift, BASE)
    cx = a_r + GAP + R * 0.85
    k_probe, (k_l, _), _ = glyph(bold, 'K', SIZE, 0, BASE)
    k_x = cx + R * 1.5 + GAP - k_l
    k_d, (_, k_r), _ = glyph(bold, 'K', SIZE, k_x, BASE)
    body = (f'<path d="{a_d}" fill="{ink}"/>' + compass(cx, BASE - R, R, ink, 1.6) +
            f'<path d="{k_d}" fill="{ink}"/>')
    return body, k_r


def studio(ink, width, y):
    """STUDIO in Archivo SemiBold, tracked +0.5em, centred under the mark."""
    size, track = 15, 15 * 0.5
    paths, x = [], 0
    for ch in 'STUDIO':
        d, _, adv = glyph(semi, ch, size, x, y)
        paths.append(d)
        x += adv + track
    total = x - track
    off = (width - total) / 2
    return f'<g transform="translate({off:.2f},0)" fill="{ink}">' + ''.join(f'<path d="{d}"/>' for d in paths) + '</g>'


def write(name, w, h, body, pad=0):
    (out / name).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-pad} {-pad} {w + 2 * pad:.2f} {h + 2 * pad:.2f}" '
        f'width="{w + 2 * pad:.0f}" height="{h + 2 * pad:.0f}">{body}</svg>\n')


for ink, suffix in (('#111111', ''), ('#ffffff', '-white')):
    body, right = mark(ink)
    top = BASE - SIZE * 0.72                 # cap height of Archivo ≈ 0.72 em
    write(f'ak-mark{suffix}.svg', right, SIZE * 0.72, f'<g transform="translate(0,{-top:.2f})">{body}</g>', pad=6)
    lock_h = SIZE * 0.72 + 44
    write(f'ak-lockup{suffix}.svg', right, lock_h,
          f'<g transform="translate(0,{-top:.2f})">{body}</g>' + studio(ink, right, SIZE * 0.72 + 38), pad=6)
    # App icon / favicon: just the compass, heavier strokes so it survives 16px.
    # Needles span 0.85r west to 1.5r east, so the centre sits left of middle to balance the box.
    write(f'compass-icon{suffix}.svg', 100, 100, compass(39, 50, 38, ink, 4.5), pad=2)
print('wrote', sorted(p.name for p in out.iterdir()))
