"""Build the ADK tag with an east star cut out of the D-K seam (negative space).

The star is subtracted from the tag outline as real vector geometry, so the
result is one shape that works on any background.

usage: python build_tag_star.py <adk-m-adk.svg> <archivo-variable.ttf> <out_dir>
"""
import sys
from pathlib import Path

import pathops
from svgelements import SVG, Path as SPath, Move, Line, CubicBezier, QuadraticBezier, Close, Arc
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

tag_svg, font_file, out = Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3])

W, H = 1274.087161, 612.337434          # tag viewBox
CX, CY, R, RE = 730, 280, 100, 220      # star: centre, N/S/W radius, east reach (largest that keeps a black border)
Q = R * 0.14                            # how far the concave sides pull in


def tag_path():
    """Union of every outline in the potrace tag, with its transform applied."""
    p = pathops.Path()
    for el in SVG.parse(str(tag_svg)).elements():
        if not isinstance(el, SPath):
            continue
        for seg in el.segments():
            if isinstance(seg, Move):
                p.moveTo(seg.end.x, seg.end.y)
            elif isinstance(seg, Line):
                p.lineTo(seg.end.x, seg.end.y)
            elif isinstance(seg, CubicBezier):
                p.cubicTo(seg.control1.x, seg.control1.y, seg.control2.x, seg.control2.y, seg.end.x, seg.end.y)
            elif isinstance(seg, QuadraticBezier):
                p.quadTo(seg.control.x, seg.control.y, seg.end.x, seg.end.y)
            elif isinstance(seg, Arc):
                for c in seg.as_cubic_curves():
                    p.cubicTo(c.control1.x, c.control1.y, c.control2.x, c.control2.y, c.end.x, c.end.y)
            elif isinstance(seg, Close):
                p.close()
    return pathops.simplify(p, fix_winding=True)


def star_path():
    p = pathops.Path()
    p.moveTo(CX, CY - R)
    p.quadTo(CX + Q, CY - Q, CX + RE, CY)
    p.quadTo(CX + Q, CY + Q, CX, CY + R)
    p.quadTo(CX - Q, CY + Q, CX - R, CY)
    p.quadTo(CX - Q, CY - Q, CX, CY - R)
    p.close()
    return p


def d_of(p):
    cmds = []
    for verb, pts in p.segments:
        f = ' '.join(f'{x:.2f} {y:.2f}' for x, y in pts)
        cmds.append({'moveTo': 'M', 'lineTo': 'L', 'curveTo': 'C', 'qCurveTo': 'Q', 'closePath': 'Z', 'endPath': ''}[verb] + f)
    return ''.join(cmds)


def studio_d(width, y, size=46, track=0.2):
    """STUDIO in Archivo ExtraBold, tracked, centred under the tag."""
    font = instantiateVariableFont(TTFont(font_file), {'wght': 800, 'wdth': 100})
    gs, cmap = font.getGlyphSet(), font.getBestCmap()
    s = size / font['head'].unitsPerEm
    parts, x = [], 0.0
    for ch in 'STUDIO':
        g = gs[cmap[ord(ch)]]
        pen = SVGPathPen(gs)
        g.draw(TransformPen(pen, (s, 0, 0, -s, x, y)))
        parts.append(pen.getCommands())
        x += g.width * s + size * track
    total = x - size * track
    return f'<g transform="translate({(width - total) / 2:.2f},0)">' + ''.join(f'<path d="{d}"/>' for d in parts) + '</g>'


tag, star = tag_path(), star_path()
cut = pathops.op(tag, star, pathops.PathOp.DIFFERENCE)
tag_d, cut_d, star_d = d_of(tag), d_of(cut), d_of(star)
studio = studio_d(W, H + 110)

PAD = 24
def write(name, body, h):
    (out / name).write_text(
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{-PAD} {-PAD} {W + 2 * PAD:.2f} {h + 2 * PAD:.2f}" '
        f'width="{(W + 2 * PAD) / 3:.0f}" height="{(h + 2 * PAD) / 3:.0f}">{body}</svg>\n')

for ink, sfx in (('#0A0A0A', ''), ('#FFFFFF', '-white')):
    write(f'adk-tag-star{sfx}.svg', f'<path d="{cut_d}" fill="{ink}"/>', H)
    write(f'adk-tag-star-lockup{sfx}.svg', f'<path d="{cut_d}" fill="{ink}"/><g fill="{ink}">{studio}</g>', H + 130)
    # Accent variant: the cut is filled with brand gold instead of left empty.
    write(f'adk-tag-star-gold{sfx}.svg', f'<path d="{cut_d}" fill="{ink}"/><path d="{star_d}" fill="#E9A23B"/>', H)
print('wrote', sorted(p.name for p in out.glob('adk-tag-star*')))
