# SkillSpring | Responsive Landing Page

A warm, project-focused landing page for a fictional student learning platform. Created by Afkar Riswar for **SWYNEX Frontend Developer Internship - Task 1**, with AI assistance.

**Live Demo:** [Open SkillSpring on Netlify](https://skillspring-afkar-riswar.netlify.app/)

**Public Repository:** [scarface-dmd/SWYNEX-Responsive-Landing-Page](https://github.com/scarface-dmd/SWYNEX-Responsive-Landing-Page)

**GitHub Pages Backup:** https://scarface-dmd.github.io/SWYNEX-Responsive-Landing-Page/

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

Both captures show the Netlify deployment, including the simplified three-line student-project footer. Netlify adds its own Free-plan branding badge.

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

Open `index.html` directly in a modern browser, or use a static server. A server is recommended to mirror static hosting:

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

Local browser checks used Python's static server and installed Google Chrome controlled through Playwright. The Netlify production site was also tested directly in a fresh browser session without authentication at all five widths below. Earlier repository-subdirectory and contrast investigations are recorded separately. Test tools run outside the project; they are not site dependencies.

| Check | Actual result |
| --- | --- |
| Viewports: 360, 390, 768, 1024, 1440px, each 900px high | Local and live Netlify DOM/layout and interaction checks passed at all five widths |
| Horizontal overflow and layout | None detected at all five widths, including expanded cards; screenshots visually reviewed; badge no longer overlaps checklist text |
| Internal links | All fragment targets exist; no empty or bare `#` links |
| Mobile menu at 360/390px | Opens; closes via toggle, section selection, and Escape; expanded state updates |
| Escape focus behavior | Focus returns to the menu toggle |
| Mobile/desktop resize | Menu state resets across the 600px breakpoint |
| Course cards | All three open and close at each width; hidden/expanded states stay in sync |
| FAQ | All four toggle using Enter on a focused summary at each width |
| Keyboard navigation | Live Netlify skip-link/focus checks passed; local tab-order audit verified 14 mobile and 18 desktop tab stops with nonempty labels and visible 3px outlines; mobile keyboard opening, link entry, and Escape focus return passed |
| Sticky-header offset | Mobile benefits destination appears below the header |
| Reduced motion | Computed scroll behavior becomes `auto` |
| Local asset loading | Favicon served successfully; no failed browser resource requests |
| Browser console and page errors | None observed during the checks |
| JavaScript syntax | `node --check script.js` passed |
| Screenshots | Updated full-page Netlify captures at all five widths; 1440px desktop and 390px mobile captures retained in the repository |
| axe-core WCAG 2.0/2.1 A/AA scan | No automated violations locally or on Netlify at 390px and 1440px; background-sampling results remain incomplete for some decorative regions and the host-managed branding badge |
| Repository subdirectory | Previously verified under a local `/SWYNEX-Responsive-Landing-Page/` prefix; runtime asset paths remain relative and unchanged |
| Navigation and CTAs | All 11 current internal links were clicked on live Netlify at 390px and 1440px; destinations were visible; card buttons also worked with Space and Enter |
| Footer | Exact requested three paragraphs verified locally and on Netlify at all five widths; text sizes are 16px, 14px, and 13px, with wrapping and no horizontal overflow |
| Published Netlify files | Anonymous HTTPS requests succeeded; CSS, JavaScript, and favicon matched local files byte for byte; HTML matched after accounting for Netlify's hosting comment and badge script |
| Upload scope | Only four runtime files were packaged; `.git/config`, `.env`, README, learning notes, screenshots, dependency files, and Netlify's internal config URL returned 404 on Netlify |
| Public repository | Accessible over HTTPS without authentication |
| Direct live-browser testing | Netlify passed direct Chrome testing; the previously observed GitHub Pages `ERR_CONNECTION_RESET` is not treated as a project code defect |

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

- GitHub Pages previously returned `ERR_CONNECTION_RESET` in automated Chrome and was reported inaccessible in the user's browser, despite successful HTTPS downloads. Its underlying transport cause is unconfirmed. The primary Netlify URL has passed both anonymous HTTPS and direct browser checks; no browser security or TLS verification controls were disabled.
- Netlify adds a host-managed branding badge and hosting markup on the Free plan. These were retained; no paid plan, domain, or add-on was purchased. The application's own assets remain local.
- Automated contrast background sampling remains incomplete as described above. Explicit colour calculations do not constitute full accessibility certification.
- Physical-device, screen-reader, Safari, Firefox, and 200% browser-zoom testing have not been performed.
- The dashboard and course outlines are illustrative. There are no real accounts, delivered courses, or enrolments.

## Netlify Deployment

- Production URL: https://skillspring-afkar-riswar.netlify.app/
- Project: **skillspring-afkar-riswar**, on the **Free** plan; automatic top-ups are disabled.
- Deployment used the official Netlify CLI with `--prod --no-build` and a separate publish folder containing only `index.html`, `styles.css`, `script.js`, and `assets/favicon.svg`.
- Production is public over HTTPS; non-production previews remain behind Netlify team login. Team visibility defaults were not changed.
- Documentation, Git metadata, screenshots, local tools, and credentials were excluded from the upload. Netlify's internal deployment configuration is not publicly served.

This is a manual static deployment, not a Git-connected Netlify build. A push to GitHub does not automatically update Netlify. For future Netlify updates, upload a folder containing the same four runtime files through this existing project's **Deploys** page, or use the official CLI with `--prod --no-build` and project ID `02612f8f-d99b-4a94-9754-2bc4fcf40f06`. No compilation or backend is required.

## GitHub Pages Backup

- Public repository: [scarface-dmd/SWYNEX-Responsive-Landing-Page](https://github.com/scarface-dmd/SWYNEX-Responsive-Landing-Page).
- Publishing source: **Deploy from a branch**, **main**, **/ (root)**.
- Entry point: `index.html` at the repository root; HTTPS is enforced.
- GitHub automatically rebuilds and deploys updates pushed to `main`. Deployment status appears in the repository's **Actions** tab; configuration is under **Settings > Pages**.
- The original repository and GitHub Pages deployment remain in place.

Relative stylesheet, script, and favicon paths support the repository subdirectory. No custom domain, secrets, environment variables, or local build command are required.

## Assets and License

The HTML/CSS dashboard, inline SVG icons, favicon, and screenshots are included in this repository. No stock photos or third-party asset library are used. No `LICENSE` file is included; an open-source license has not been selected.
