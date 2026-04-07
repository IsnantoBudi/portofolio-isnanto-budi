---
name: master-developer-guidelines
description: Consolidated skill encompassing UI/UX design, SEO auditing, and Web App Testing. Use this skill for all comprehensive web development tasks, ensuring top-tier design quality, search visibility, and reliability.
---

# Master Developer Guidelines

This master skill consolidates best practices across three core pillars of web development: **UI/UX Design**, **Search Engine Optimization (SEO)**, and **Web Application Testing**. Always follow these rules to deliver production-grade applications.

---

## 1. Frontend & Design Aesthetics (UI/UX)

This section guides the creation of distinctive, production-grade frontend interfaces that avoid generic "AI slop" aesthetics. 

### Visual Hierarchy & Composition
- **Layout:** Use standard grid systems (CSS Grid/Flexbox) for alignment. Embrace unexpected layouts, asymmetry, overlaying, or grid-breaking elements when appropriate for a bolder aesthetic.
- **Spacing:** Use generous, consistent whitespace based on scales (4px, 8px, 16px, 24px, 32px, 48px).
- **Focal Points:** Always establish a clear primary CTA.
- **Differentiation:** Always ask: "What makes this UNFORGETTABLE?" Choose a clear conceptual direction (e.g., brutally minimal, retro-futuristic, magazine-style layout, or playful) and execute with precision.

### Typography & Color
- **Typography:** Avoid generic system fonts or Arial/Inter when asked to create custom/striking designs. Opt for characterful font choices. Pair distinctive display fonts with readable sans/serif body fonts.
- **Hierarchy:** Clearly separate H1-H6 headers. Maintain line heights of 1.5 to 1.7 for readability.
- **Color Palettes:** Commit to a cohesive theme. Use CSS variables. Prefer dominant colors with sharp accents over timid, evenly-distributed palettes.
- **Dark Mode Support:** Soften pure white and pure black (e.g., `#121212`) to reduce eye strain. Establish reliable dark-mode variants.

### Interaction & Accessibility (a11y)
- **Motion:** Prioritize CSS-only motion (like transitions). Build high-impact page load reveals rather than scattered micro-interactions. Respect `prefers-reduced-motion` media queries.
- **Feedback:** Provide immediate visual feedback for `hover`, `focus`, `active`, and `disabled` states. Ensure button and input behaviors are highly consistent.
- **Semantics:** Use HTML5 tags (`main`, `nav`, `article`). Avoid using a `div` when a `button` is what's semantically correct.
- **Keyboard & Touch:** Provide visible focus outlines and ensure touch targets are at least 44x44px. Ensure complete keyboard nav support.

---

## 2. Technical SEO Auditing & Optimization

When executing an SEO audit or optimizing for search visibility, apply an LLM-first reasoning structure backed by scripts where possible.

### General SEO Standards
- **Core Web Vitals:** Ensure fast LCP (Largest Contentful Paint), minimal CLS (Cumulative Layout Shift) and fast INP (Interaction to Next Paint) — never reference the deprecated FID.
- **Metadata:** Every page must include accurate `<title>` and `<meta name="description">`. Ensure Open Graph and Twitter card meta tags are properly utilized.
- **Schema & Structured Data (JSON-LD):** Always use `<script type="application/ld+json">` for schema. Do NOT recommend Microdata/RDFa. Avoid restricted schemas (like FAQ schema unless for Healthcare/Govt).
- **Indexability & Crawlability:** Check `robots.txt` and security headers (HSTS, CSP). Check for Broken Links (404s/timeouts). 
- **Mobile First:** Ensure mobile-first principles are strictly adhered to, using media queries to progressively enhance the experience.

### Executing an LLM-First Audit
1. **Analyze Evidence:** Identify issues from page sources (`read_url_content`) or scripts.
2. **Determine Severity:**
   - 🔴 **Critical:** Directly impacts indexation.
   - ⚠️ **Warning:** Optimization opportunity.
   - ✅ **Pass:** Excellent execution.
3. **Report Format:** Always provide `Finding`, `Evidence` (Specific snippet/metric), `Impact`, and a clear `Fix`. Break down finding into technical, content quality, semantic schema, and CWV issues.

---

## 3. Web Application Testing (Playwright)

Use this section when interacting with or testing local web apps systematically with Playwright automation.

### Reconnaissance-Then-Action Pattern
For dynamic sites where you lack the raw HTML context:
1. **Wait:** Use `page.wait_for_load_state('networkidle')`.
2. **Inspect rendered DOM:** Grab `page.content()`, or capture full screenshots to determine dynamic structure. 
3. **Execution:** Identify reliable selectors (`text=`, CSS Selectors, test IDs) and execute testing automation.

### Best Practices
- **Network States:** Never inspect DOM before waiting for the `networkidle` state in client-rendered applications (Next.js, Vue, React).
- **Selectors:** Use highly descriptive selectors over brittle structural ones (like `nth-child()`).
- **Synchronous Actions:** When writing scripts, close the browser instances meticulously (`browser.close()`) to avoid orphaned processes.
- **Logging & Error Capture:** Trap console logs, screenshots, and visual output for debugging difficult frontend flows.

---
**Summary Protocol for All Activities:** Combine these guidelines to output exceptional software. Whenever creating a UI component, assume it must be *accessible*, *visually memorable*, and *search-engine optimized*. Follow testing hygiene to verify it works as intended.
