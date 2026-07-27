# Video slots

Drop `.mp4` files here to activate the video backgrounds. Until a file exists,
each slot falls back to the animated `mesh-drift` gradient, so the layout is
never broken by a missing asset.

| File | Where it appears | Suggested crop |
|---|---|---|
| `hero.mp4` | Full-bleed hero background | 16:9, ~1920×1080, safe area centre-top |
| `feature-prompt.mp4` | Features — "Language in, geometry out" | 4:3 |
| `feature-reference.mp4` | Features — "Start from a photo" | 4:3 |
| `feature-iterate.mp4` | Features — "Change one thing, keep the rest" | 4:3 |
| `feature-materials.mp4` | Features — "Finishes that survive export" | 4:3 |

All players are `autoplay loop muted playsInline` — browsers only permit
autoplay while muted, so keep the audio track stripped. Encode H.264 (`yuv420p`)
for Safari compatibility:

```
ffmpeg -i input.mov -c:v libx264 -pix_fmt yuv420p -an -crf 24 -movflags +faststart hero.mp4
```

Use your own or properly licensed footage — do not hotlink another site's CDN.
