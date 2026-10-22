# SkillSpring | Responsive Landing Page

A warm, project-focused landing page for a fictional student learning platform. Created by Afkar Riswar for **SWYNEX Frontend Developer Internship - Task 1**, with AI assistance.

**Live Demo:** [Open SkillSpring](https://scarface-dmd.github.io/SWYNEX-Responsive-Landing-Page/)

**Public Repository:** [scarface-dmd/SWYNEX-Responsive-Landing-Page](https://github.com/scarface-dmd/SWYNEX-Responsive-Landing-Page)

This is a student demonstration, not a real learning service. SkillSpring is not owned, affiliated with, or endorsed by SWYNEX. There is no backend, database, enrolment, payment, account creation, or personal-data collection.

## Task Requirements

The internship task asks for a responsive landing page using HTML/CSS/JavaScript or React/Next.js, with navigation, a hero, content sections, and a footer, working on desktop and mobile and ready for submission as a GitHub repository URL.

This implementation uses semantic HTML5, CSS3, and vanilla JavaScript. It has no framework, runtime dependencies, build step, external fonts, or paid APIs.

## Features

- Sticky header with section navigation and an accessible mobile menu.
- Two-column desktop hero that stacks on smaller screens.
- Original learning-dashboard illustration made with HTML and CSS, with local inline SVG icons.
- Three learning paths with independently expandable project outlines and accurate `aria-expanded` states.
- Benefits, a three-step learning approach, and four native expandable FAQs.
- Real section-link CTAs, not pretend sign-up or email forms.
- Visible keyboard focus, a skip link, reduced-motion support, and fixed-header anchor offsets.
- Clear fictional-demo disclosures and the required creator attribution.
- Local SVG favicon and desktop/mobile review screenshots.

## Screenshots

- [Desktop, 1440px](assets/screenshots/desktop-1440.png)
- [Mobile, 390px](assets/screenshots/mobile-390.png)

Both captures show the updated layout, with the dashboard badge below the learning checklist.

## File Structure

```text
.
|-- index.html                 # Page content, landmarks, icons, and illustration
|-- styles.css                 # Theme, layout, responsive rules, and interaction styles
|-- script.js                  # Mobile navigation and expandable learning paths
|-- assets/
|   |-- favicon.svg            # Local brand icon
|   `-- screenshots/
|       |-- desktop-1440.png   # Full-page Chrome capture at 1440px
|       `-- mobile-390.png     # Full-page Chrome capture at 390px
|-- README.md
|-- LEARNING-NOTES.md
`-- .gitignore
```

## Run Locally

Open `index.html` directly in a modern browser, or use a static server. A server is recommended to mirror GitHub Pages:

```powershell
# Run from the project folder.
python -m http.server 4173 --bind 127.0.0.1
```

Visit **http://127.0.0.1:4173/**. Stop the server with `Ctrl+C`. If Python is unavailable, VS Code's Live Server extension is another option. There is no `npm install` or build command needed to run the site.

## Responsive Layout

- A centered container limits wide-screen content to 1180px and provides consistent side gutters.
- CSS Grid creates the hero, learning-path, benefits, process, and FAQ layouts.
- Flexbox aligns navigation, CTA groups, tags, and footer content.
- At 1100px and below, gaps and card padding reduce and the redundant header CTA hides.
- At 800px and below, the hero and FAQ stack, with tighter spacing elsewhere.
- At 600px and below, the menu becomes collapsible, path cards and benefits become one column, and the process changes to a vertical sequence.
- Fluid heading sizes use `clamp()`. Flexible wrapping prevents fixed-width content from forcing sideways scrolling.

## Accessibility Decisions

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` landmarks, one page `h1`, and ordered headings.
- A visible-on-focus skip link moves keyboard users to the main content.
- Real buttons control the menu and cards; `aria-controls` identifies their content and `aria-expanded` tracks state.
- Escape closes the mobile menu and returns focus to its toggle. A selected menu link closes the menu. Crossing the mobile breakpoint resets stale menu state.
- Native `details` and `summary` provide FAQ keyboard behavior without extra JavaScript.
- Hidden course outlines use the `hidden` attribute, so collapsed content is not exposed as visible content.
- The dashboard has one descriptive accessible image label. Its decorative inner content and icons are hidden from assistive technology.
- Dark text on warm light surfaces, visible 3px focus outlines, and generously padded controls support legibility and keyboard use. The dark final CTA uses a light focus outline for contrast.
- `scroll-padding-top` keeps anchor destinations below the sticky header. `prefers-reduced-motion` disables smooth scrolling and transitions.
- Without JavaScript, section navigation stays visible and native FAQs still work. The custom collapsible menu and path-card expansion require JavaScript.

## Testing Results

Local browser checks used Python's static server, a repository-subdirectory preview, and installed Google Chrome controlled through Playwright. Test tools run outside the project; they are not site dependencies. The layout fix was checked at all five widths below. The focus-ring fix received a separate keyboard/contrast check.

| Check | Actual result |
| --- | --- |
| Viewports: 360, 390, 768, 1024, 1440px, each 900px high | Passed DOM/layout and interaction checks at all five widths |
| Horizontal overflow and layout | None detected at all five widths, including expanded cards; screenshots visually reviewed; badge no longer overlaps checklist text |
| Internal links | All fragment targets exist; no empty or bare `#` links |
| Mobile menu at 360/390px | Opens; closes via toggle, section selection, and Escape; expanded state updates |
| Escape focus behavior | Focus returns to the menu toggle |
| Mobile/desktop resize | Menu state resets across the 600px breakpoint |
| Course cards | All three open and close at each width; hidden/expanded states stay in sync |
| FAQ | All four toggle using Enter on a focused summary at each width |
| Keyboard navigation | First Tab reaches the skip link; 19 mobile and 23 desktop tab stops have nonempty labels and visible 3px outlines; mobile keyboard opening, link entry, and Escape focus return passed |
| Sticky-header offset | Mobile benefits destination appears below the header |
| Reduced motion | Computed scroll behavior becomes `auto` |
| Local asset loading | Favicon served successfully; no failed browser resource requests |
| Browser console and page errors | None observed during the checks |
| JavaScript syntax | `node --check script.js` passed |
| Screenshots | Full-page captures visually reviewed at all five widths; 1440px desktop and 390px mobile captures retained in the project |
| axe-core WCAG 2.0/2.1 A/AA scan | No automated violations at 390px and 1440px; contrast background-sampling results remain incomplete for some decorative regions; calculated colour checks supplement them below |
| Repository subdirectory | The same browser checks passed under a local `/SWYNEX-Responsive-Landing-Page/` prefix; all three runtime asset paths match filename case exactly |
| Navigation and CTAs | All 16 internal links were clicked at 390px and 1440px; destinations were visible; card buttons also worked with Space and Enter |
| Published site and files | Anonymous HTTPS requests succeeded; published HTML, CSS, JavaScript, favicon, and both screenshots matched their tested local files byte for byte |
| Public repository | Accessible over HTTPS without authentication |
| Direct live-browser testing | Automated Chrome still returns `ERR_CONNECTION_RESET` for the live host before loading the page, while anonymous curl HTTPS requests succeed; local and live checks are not treated as equivalent |

### Contrast Investigation

Computed foreground/background colours were inspected and WCAG relative-luminance contrast ratios calculated at all five widths, including expanded course outlines and FAQ answers. Meaningful text inside the decorative dashboard was included; decorative symbols were excluded. All inspected text pairs met their applicable AA text thresholds. Representative normal-text results:

| Text | Foreground | Background | Contrast |
| --- | --- | --- | --- |
| Dashboard path title | `#ffffff` | `#216247` | 7.235:1 |
| Dashboard current-path label | `#dbe8d4` | `#216247` | 5.686:1 |
| Dashboard micro-labels | `#6a7568` | `#fffefa` | 4.776:1 |
| Dashboard project metadata | `#596764` | `#fffefa` | 5.864:1 |
| Dashboard checklist | `#63705f` | `#fffefa` | 5.185:1 |
| Illustration caption, lowest measured pair | `#6b7569` | `#f8f8f2` | 4.504:1 |

The final CTA's previous brown focus ring measured only 1.914:1 on its dark green background. Its new light ring (`#eef0df` on `#184c38`) measures 8.529:1. All inspected keyboard focus outlines exceeded 3:1 against their surrounding surfaces.

axe-core reports that pseudo-elements prevent it from determining some dashboard backgrounds, and that decoration overlaps some final-CTA text. The dashboard's solid surfaces were checked explicitly. Calculations also account for the CTA flower's low-opacity white overlay; the lowest sampled CTA text ratio with that overlay is 5.921:1. Incomplete automated checks are not relabelled as automated passes.

### Known Limitations

- Direct interactive testing of the public site in automated Chrome remains unavailable in this environment. The same browser can load a control HTTPS site, and curl can download the published site and assets with certificate verification enabled. This is a client/host transport-dependent failure, not a reproduced HTML, CSS, or JavaScript defect; its underlying network cause is unconfirmed. No browser security or TLS verification controls were disabled.
- Public HTTPS downloads and local browser interaction tests are separate evidence, not a claim of a successful live-browser session.
- Automated contrast background sampling remains incomplete as described above. Explicit colour calculations do not constitute full accessibility certification.
- Physical-device, screen-reader, Safari, Firefox, and 200% browser-zoom testing have not been performed.
- The dashboard and course outlines are illustrative. There are no real accounts, delivered courses, or enrolments.

## GitHub Pages Deployment

- Public repository: [scarface-dmd/SWYNEX-Responsive-Landing-Page](https://github.com/scarface-dmd/SWYNEX-Responsive-Landing-Page).
- Publishing source: **Deploy from a branch**, **main**, **/ (root)**.
- Entry point: `index.html` at the repository root; HTTPS is enforced.
- GitHub automatically rebuilds and deploys updates pushed to `main`. Deployment status appears in the repository's **Actions** tab; configuration is under **Settings > Pages**.

Relative stylesheet, script, and favicon paths support the repository subdirectory. No custom domain, secrets, environment variables, or local build command are required.

## Assets and License

The HTML/CSS dashboard, inline SVG icons, favicon, and screenshots are included in this repository. No stock photos or third-party asset library are used. No `LICENSE` file is included; an open-source license has not been selected.
