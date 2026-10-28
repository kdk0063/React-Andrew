# ADK tag · east star (final)

The marker-style ADK tag with an east star cut out of the seam between the D and
the K (negative space). The star is subtracted from the letter outlines, so each
file is one shape and the background shows through the star on any colour.

- `adk-tag-star.svg` / `-white`: the tag
- `adk-tag-star-lockup.svg` / `-white`: tag + STUDIO (Archivo ExtraBold)
- `adk-tag-star-gold.svg` / `-white`: accent version, star filled in brand gold #E9A23B
- `adk-tag-star-goldtip.svg` / `-white` and `adk-tag-star-lockup-goldtip.svg` / `-white`: star stays cut out, only the east point is gold (matches the East star mark)
- `preview-tag-star.png`: light, dark, east blue and small sizes

Rebuild (star size and position are constants at the top of the script):

    python build_tag_star.py ../../../brand/logos/adk-m-adk.svg <Archivo[wdth,wght].ttf> .

Tag artwork source: `design/brand/logos/adk-m-adk.svg`.
