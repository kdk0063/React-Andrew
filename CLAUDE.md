# ADK Studio portfolio — notes for Claude

The ADK Studio portfolio at https://studioadk.com. `dist/` is committed and served as-is by Vercel (no build step), so every change under `public/` must be copied to the same path in `dist/`.

## Deploying

- Push work to the `staging` branch first. Vercel builds it as a preview at https://studioadk-git-staging-kdk0063s-projects.vercel.app, which only the owner can see after logging in.
- Merge `staging` into `master` (production) only when the owner explicitly says "go live" or "push it live".
- Unfinished work can go on a separate `wip-*` branch so it reaches GitHub without touching staging or production.

## Working style

- **Act as a creative studio.** Before adding any UI element, think like a studio art director. Match the site's editorial system: ink, hairlines, Archivo with IBM Plex Mono, and square edges. Consider motion and hover craft. Show a few considered options for anything visible rather than shipping one default, and avoid generic pills, stock gradients and default component-library looks.
- **Get details right on the first pass.** Before showing or pushing a visual change, review it at full size and zoomed to 2–3× against the original or reference. Check font, weight, outlines and halos, colour, centring, proportion, alignment, mobile width and every animation state, measuring positions rather than eyeballing them. When editing existing artwork, reuse its own pixels or glyphs. Prefer code or SVG over paid image generation unless asked.
- **The motion bar.** The owner's reference sites are prompt-motion.com (kinetic type), uselayouts.com (tactile, springy components), itshover.com (animated SVG icons) and animos.app/editor (showcase videos). They want purposeful, crafted micro-motion, not static or generic UI.

## Brand

- **Logo:** a compass and star mark, with an object-like Stone Island badge feel and a plain heavy A.P.C.-style wordmark ("A.D.K."). The star's point sits on the east side, because 東奎 means "east star". Draw marks as code or SVG geometry, and don't copy Stone Island's actual badge layout.
- **Never include "Andrew Dong Kyu Kim"** (the owner's full name) in the logo or lockups. "ADK STUDIO" and "STUDIO" are fine.
- **Signature motion:** the compass or star rests pointing north and swings east on hover or action (click, tap, focus, load-in). Use a springy `cubic-bezier(.3,1.6,.4,1)` with the needle going from `rotate(-90deg)` to `0`. The header logo star is static, pointing east.
- **Orbit motif:** the East star inside a thin level ring, with a small gold moon (#E9A23B) orbiting it. It's saved as a component at `design/live-button/orbit-moon.html` but not placed yet.
- **Clan colour and 東奎 mark:** the family gold is #F5C902. The footer's 東奎 hanja mark uses Meok ink (#2A2623) strokes, a seal-red (#B7282E) sun in 東 and a clan-gold star on 奎, and it writes itself in stroke order when it scrolls into view. Glyphs are in `design/brand/hanja/glyphs.js`. A Korean feel (오방색, 한지, 도장) is welcome.

## Side-project posters (`/projects` second shelf)

- Each poster is a homage to a real film poster. Keep the original's iconic subject and composition, and swap in the project's name.
- When real people appear, redraw them in a clearly illustrated style that still resembles the actual character (hair, build, outfit, attitude), not a generic invented person.
- Posters with no real person can mimic the original style closely. The Lord of the Rings poster is an example. Ask or match per poster.
- Raw art goes in `public/posters/source/`, separate from `public/books/`. Titles are added as real type afterward in `public/side-shelf.js`, which also feeds the B-Sides Posters chapter.

## Contact email

- The planned studio address is kyu@studioadk.com, using ImprovMX forwarding plus Gmail "Send mail as". The owner does the account and DNS steps, because GoDaddy blocks browser automation.
- Until that's set up, `/contact/` posts to FormSubmit using the owner's personal Gmail. The first real submission triggers FormSubmit's activation email, which the owner must click.
- Once the new address works, swap it into the contact page: the form action, the fetch URL and the error-message mailto. That triggers activation again.
