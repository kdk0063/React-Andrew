# Nano Banana: realistic book scans

Turn each flat design in this folder into a photo of a real hardcover, then
send the results back so they can go on the library shelf.

## What to upload, per book

1. `<book>-cover.png`: the exact front cover design
2. `<book>-spine.png`: the exact spine design (in a second message)

Do one book per chat, cover first and spine second, so both come out as
the same physical book.

## Prompt 1: cover

> Use the attached image as the exact design. Create a photorealistic
> studio scan of the FRONT COVER of a real hardcover book, shot perfectly
> straight-on: orthographic, no perspective, no tilt.
>
> Keep every word, letter, colour and position exactly as in the attached
> design. Do not add, remove, restyle or move any text.
>
> Material: **[MATERIAL — see the table below]**.
>
> Show realistic physical detail: the weave or grain of the material,
> slightly rounded corners, the hinge groove a little in from the left
> edge where the cover meets the spine, faint edge wear, and soft, even
> studio lighting with no hard glare.
>
> Show only the cover, filling the frame, on a pure white background, in
> the same portrait proportions as the attached image (0.72 : 1). No
> hands, props, table or drop shadow.

## Prompt 2: spine (same chat, after the cover)

> Now the SPINE of this same book. Use the attached image as the exact
> design and keep every word, colour and position exactly.
>
> Photograph it perfectly straight-on. Show the slightly rounded spine,
> with soft shading toward both long edges, the headcaps at the top and
> bottom, and the same material and lighting as the cover.
>
> Crop tight to the spine on a pure white background, keeping the tall,
> narrow proportions of the attached image.

## Material for each book

| Book | Upload | Material to paste into the prompt |
|---|---|---|
| Grandstand | `grandstand-*` | off-white linen bookcloth; the red box screen-printed with a slight raised ink edge; "ADK STUDIO" blind-debossed (pressed in, no ink) at the bottom |
| Allen's Cabinets | `allens-cabinets-*` | light grey coarse linen bookcloth with visible weave; navy and white type screen-printed onto the cloth |
| Allen's Admin | `allens-admin-*` | royal blue matte bookcloth; the orange lettering and rules stamped in matte orange foil |
| MeChelinGuide | `mechelinguide-*` | off-white uncoated paper dust jacket, slightly toothy; red and blue type printed flat |
| Kidian | `kidian-*` | soft-touch laminated paper cover; the icy blue background is a printed photograph; black type printed with a faint sheen |
| Babel Dabble | `babel-dabble-*` | black cloth hardcover; the "Babel Dabble" tag in glossy black spot-UV that catches the light, on matte black; small grey printed text at the bottom |

## Tips

- **Check the lettering** on every result before keeping it. If a letter
  warps, reply "keep the text exactly as in the original image" and
  regenerate.
- **Keep the same chat** for a book's cover and spine. Start a new chat
  for each new book.
- If the proportions drift, that's fine: crop or resize afterwards.
- Save the results as `<book>-cover-real.png` and `<book>-spine-real.png`
  and send them over.
