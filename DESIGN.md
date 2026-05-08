---
version: "1.0"
name: "Nicolás Scarselli Portfolio"
description: "Dark-themed minimalist portfolio design system focusing on high contrast typography, glassy surfaces with subtle noise, and strong structural grids."
colors:
  primary: "#473260"
  secondary: "#141117"
  tertiary: "rgba(234, 231, 224, 0.05)"
  neutral: "#0d0b10"
  background: "#0d0b10"
  surface: "#141117"
  text-primary: "#EAE7E0"
  text-secondary: "#9F9C98"
  border: "rgba(234, 231, 224, 0.05)"
  border-m: "rgba(234, 231, 224, 0.10)"
  accent: "#473260"
typography:
  display-lg:
    fontFamily: "Geist"
    fontSize: "clamp(4rem, 10vw, 7.5rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.03em"
  body-md:
    fontFamily: "Geist"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  s: "8px"
  m: "14px"
  l: "22px"
  xl: "32px"
  full: "20px"
spacing:
  pad: "48px"
  base: "8px"
  section-padding: "140px"
components:
  button-primary:
    textColor: "{colors.text-primary}"
    typography: "{typography.body-md}"
    rounded: "20px"
    padding: "11px 22px"
---

## Overview

- **Composition cues:**
  - Layout: Grid / Flexbox
  - Content Width: Max 1280px
  - Framing: Dark Minimalist with Noise Texture
  - Grid: Strong

## Colors

The color system uses dark mode with #473260 as the main accent and #0d0b10 as the deep background.

- **Primary (#473260):** Main accent color used for primary buttons and active states.
- **Surface (#141117):** Card and elevated element backgrounds.
- **Background (#0d0b10):** Main app background.
- **Text Primary (#EAE7E0):** High contrast text for headings and primary content.
- **Text Secondary (#9F9C98):** Muted text for descriptions and metadata.

## Typography

Typography relies entirely on the Geist font family for a modern, tech-focused aesthetic.

- **Display (`display-lg`):** Geist, responsive up to 7.5rem, weight 800, line-height 0.9, letter-spacing -0.03em.
- **Body (`body-md`):** Geist, 1.05rem, weight 400, line-height 1.6.

## Layout

Layout uses a max-width wrapper of 1280px with variable padding.

- **Layout type:** Grid / Flex
- **Content width:** 1280px max
- **Base padding (`--pad`):** 48px
- **Section padding:** 140px (vertical)
- **Gaps:** 8px, 10px, 24px, 32px, 48px, 64px, 80px

## Elevation & Depth

Depth is communicated through semi-transparent borders and subtle glassy overlays on the navigation.

- **Surface style:** Flat with subtle borders
- **Borders:** 1px solid rgba(234, 231, 224, 0.05) or rgba(234, 231, 224, 0.10)
- **Navigation:** Backdrop blur (20px)

## Shapes

Shapes use a progressive radius scale.

- **Corner radii:** 8px (s), 14px (m), 22px (l), 32px (xl)
- **Buttons / Tags:** 20px (pill shape)
- **Avatars:** 50% (circular)

## Components

### Buttons
- **Solid:** background #473260, text #EAE7E0, radius 20px, padding 11px 22px.
- **Outline:** transparent background, border 1px solid rgba(232, 227, 220, 0.28).
- **Ghost:** transparent background, text #9F9C98, hover text #EAE7E0.

### Iconography
- **Sets:** Lucide Icons.

## Motion

Scroll reveal animations (opacity and transform translateY/X) over 0.8s with cubic-bezier(.16, 1, .3, 1). Hover effects are typically 0.25s transitions on transform and background/color.
