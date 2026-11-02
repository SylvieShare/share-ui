# Blur effects

`BlurBackdrop` is a decorative background surface; controls and content that
must stay sharp belong above it, not inside a filtered content container.

```vue
<div class="host">
  <div class="background-content">Background</div>
  <BlurBackdrop :radius="16" class="frost" />
  <div class="foreground">Sharp controls</div>
</div>
```

```css
.host { position: relative; isolation: isolate; }
.frost { z-index: 1; --blur-backdrop-background: color-mix(in srgb, var(--bg) 25%, transparent); }
.foreground { position: relative; z-index: 2; }
```

The host establishes positioning and layering. `radius` accepts a nonnegative
pixel number or a CSS length, including `var(--chrome-blur)`. Zero disables
smoothing. The surface is always `aria-hidden` and never intercepts pointers.
Its public CSS variables are:

- `--blur-backdrop-inset`: positioned bounds, default `0`;
- `--blur-backdrop-background`: optional tint, default `transparent`;
- `--blur-backdrop-mask`: optional fading mask, default `none`.

These variables let headers and floating surfaces share the effect while their
owners keep layout, tint and fading. Put the foreground at a higher stacking
level; do not use a negative stacking level for the blur surface.

For an existing surface use `:style="backdropBlurStyle(radius)"`. For animated
imperative owners use `applyBackdropBlur(element, radius)`: it changes only the
standard and prefixed filter properties and leaves transitions and other
styles to the owner. `BaseTile surface="glass"`, `BlurBackdrop` and `AppModal`
use this same implementation.

Both declarations are applied inline. CSS optimization can treat prefixed and
standard backdrop-filter as duplicates and retain only the prefixed form;
Chromium then displays tint without blur. Inline construction survives library
and consumer CSS minification. Verify the installed, built consumer, not only
the dev stylesheet.

`blurFilter(radius)` supplies the same filter value for actual content blur.
`MorphSheet` applies it through its existing background-ownership manager:
the background target is filtered while its teleported foreground stays sharp.
This differs from backdrop filtering and should not be used on a header that
also contains its own controls. Existing overlay ownership and restoration
semantics are unchanged.
