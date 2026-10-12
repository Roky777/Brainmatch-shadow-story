# Shadow Match

Launch with `npm start`, then choose Shadow Match in the library or open `/shadow-match/`.

The shared Shape Friends engine provides the same UI, three worlds, card preview, Practice/Beat Sparky, hints, sound/pause and separate saved progress. Easy/Medium/Hard use 4/6/8 cards (2/3/4 pairs), matching the established variant flow instead of the larger grids in the original chapter outline.

Easy samples cube, cone, cylinder and ball silhouette pairs. Medium samples original rabbit, dog, bird and deer hand-pose pairs. Hard samples all eight. Replays shuffle the pool. The four hand poses are original examples authorised by the user, not reproductions of an unseen textbook page.

Cards contain pictures only. Object silhouettes share the source geometry. Hand silhouettes render each original transparent PNG's alpha using an SVG colour filter, preserving its exact outline, orientation and size. These are frontal silhouette matches, not simulations of angled torch projection or penumbra.

Practice first clears earn 14 XP; Beat Sparky earns 8 XP. Three worlds × three boards × (14 + 8), plus a 2 XP completion bonus, totals 200 XP. Replays do not duplicate XP.

Hand PNGs were created with the built-in image-generation tool. Prompts and runtime paths are in [ASSET_PROMPTS.md](ASSET_PROMPTS.md). Geometric object illustrations extend the repository's SVG card-art approach. Rebuild silhouettes/object cards with `node shadow-match/scripts/generate-card-art.mjs`.
