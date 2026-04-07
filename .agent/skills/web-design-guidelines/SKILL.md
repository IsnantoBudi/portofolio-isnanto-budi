---
name: web-design-guidelines
description: Core guidelines for modern, accessible, and high-quality web design. Use this skill when asked to create or review UI/UX components, layouts, styling, color palettes, typography, or any user-facing frontend code.
---

# Web Design Guidelines

This skill provides a set of modern best practices for creating stunning, functional, and accessible web interfaces. Always adhere to these principles when writing frontend code (HTML, CSS, Vue, React, Tailwind, etc.) or designing user experiences.

## 1. Visual Hierarchy & Spatial Composition
- **Layout:** Use standard grids (like a 12-column system or CSS Grid/Flexbox) to maintain proportion. Prioritize content logically.
- **Spacing:** Use generous, consistent whitespace (padding and margin) to create breathing room. Adhere to generic spacing scales (e.g., 4px, 8px, 16px, 24px, 32px, 48px, 64px) for rhythm.
- **Alignment:** Ensure elements are perfectly aligned to reduce cognitive load and increase visual appeal.
- **Focal Points:** Always establish a clear primary CTA (Call to Action) that stands out using contrasting colors, size, or placement.

## 2. Typography
- **Hierarchy:** Clearly separate headers (H1-H6) from body text through size, weight, and color contrast.
- **Legibility:** Maintain comfortable line lengths (around 60-75 characters per line) and line heights (usually 1.5 to 1.7 for body text).
- **Font Choices:** Stick to 1-2 font families. Use modern sans-serif fonts for a clean look, or pair a serif display font with a highly legible sans-serif for body text.

## 3. Color & Contrast
- **Palettes:** Stick to a defined color palette: Primary, Secondary, Background, Surface, Text, and Accent colors. Use CSS variables (`--color-primary`, etc.) for consistency.
- **Contrast Ratios:** Ensure text and interactive elements pass WCAG AA standards (at least 4.5:1 for normal text and 3:1 for large text).
- **Dark Mode Support:** Whenever designing an interface, consider how the colors translate to a dark theme. Soften pure white (`#FFFFFF`) to off-white, and pure black (`#000000`) to dark greys (e.g., `#121212`) to reduce eye strain.

## 4. Components & Interactive Elements
- **Feedback:** Provide immediate visual feedback for all interactive states: `hover`, `focus`, `active`, and `disabled`.
- **Consistency:** Similar elements (buttons, cards, inputs) must behave and look identical across the application.
- **Forms:** Design clear labels, helpful placeholders, and explicit error/success states. Never rely solely on color to convey validation.

## 5. Micro-Interactions & Animation
- **Purposeful Motion:** Use subtle, fast animations (`150ms` - `300ms`) to guide user attention or bridge contexts (e.g., modals fading in, accordions sliding down, hover scaling).
- **Performance:** Animate only `transform` and `opacity` to maintain 60FPS performance and avoid layout thrashing.
- **Accessibility:** Respect the `prefers-reduced-motion` media query by disabling non-essential animations.

## 6. Accessibility (a11y)
- **Semantic HTML:** Always use the correct HTML5 tags (`<nav>`, `<header>`, `<footer>`, `<main>`, `<article>`, `<button>` vs `<a>`).
- **ARIA:** Add contextual `aria-labels` or `aria-hidden` when native semantics are insufficient (like custom dropdowns or icon-only buttons).
- **Keyboard Navigation:** Ensure the entire application is navigable via keyboard. Never remove focus outlines (`outline: none` without a visual fallback).

## 7. Responsive Design
- **Mobile-First:** Write base styles for small screens, then progressively enhance using `min-width` media queries (e.g., `@media (min-width: 768px)`).
- **Fluidity:** Use relative units like `rem`, `em`, `%`, and `vw`/`vh` where appropriate to ensure scalability across devices.
- **Touch Targets:** Make interactive areas for mobile devices large enough (minimum 44x44 CSS pixels) to be easily tapped.
