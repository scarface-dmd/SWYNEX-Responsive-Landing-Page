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
# Run from this project folder, not your user-profile folder.
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
- Dark text on warm light surfaces, visible 3px focus outlines, and generously padded controls support legibility and keyboard use.
- `scroll-padding-top` keeps anchor destinations below the sticky header. `prefers-reduced-motion` disables smooth scrolling and transitions.
- Without JavaScript, section navigation stays visible and native FAQs still work. The custom collapsible menu and path-card expansion require JavaScript.

## Testing Results

Tests were run locally using Python's static server and headless installed Google Chrome controlled through Playwright. Testing tools were installed outside the project, not as runtime dependencies.

| Check | Actual result |
| --- | --- |
| Viewports: 360, 390, 768, 1024, 1440px, each 900px high | Passed DOM/layout and interaction checks at all five widths |
| Horizontal overflow | None detected at all five widths, including expanded cards |
| Internal links | All fragment targets exist; no empty or bare `#` links |
| Mobile menu at 360/390px | Opens; closes via toggle, section selection, and Escape; expanded state updates |
| Escape focus behavior | Focus returns to the menu toggle |
| Mobile/desktop resize | Menu state resets across the 600px breakpoint |
| Course cards | All three open and close at each width; hidden/expanded states stay in sync |
| FAQ | All four toggle using Enter on a focused summary at each width |
| Keyboard entry | First Tab reaches the skip link; 3px solid focus indicator verified |
| Sticky-header offset | Mobile benefits destination appears below the header |
| Reduced motion | Computed scroll behavior becomes `auto` |
| Local asset loading | Favicon served successfully; no failed browser resource requests |
| Browser console and page errors | None observed during the checks |
| JavaScript syntax | `node --check script.js` passed |
| Screenshots | Full-page captures visually reviewed at all five widths; 1440px desktop and 390px mobile captures retained in the project |
| axe-core WCAG 2.0/2.1 A/AA scan | No automated violations at 390px and 1440px; one contrast-check category remained inconclusive and requires manual review, mainly around the decorative rotated illustration |
| Repository subdirectory | The same browser checks passed under a local `/SWYNEX-Responsive-Landing-Page/` prefix; all three runtime asset paths match filename case exactly |
| Navigation and CTAs | All 16 internal links were clicked at 390px and 1440px; destinations were visible; card buttons also worked with Space and Enter |
| Published site and files | Anonymous HTTPS requests succeeded; published HTML, CSS, JavaScript, favicon, and both screenshots matched their tested local files byte for byte |
| Public repository | Accessible over HTTPS without authentication |
| Direct live-browser testing | Attempted, but automated Chrome HTTPS navigation returned `ERR_CONNECTION_RESET` in this environment; interaction checks were run against the local repository-subdirectory preview instead |

Automated checks are not a claim of complete accessibility or universal browser support. The inconclusive contrast results are not counted as passing checks. No physical mobile device, screen reader, Safari, or Firefox testing has been performed.

### Manual Review Checklist

- Open the page in your preferred desktop and phone browsers.
- Use Tab and Shift+Tab through navigation, CTAs, card buttons, FAQ summaries, and footer links.
- At mobile widths, open the menu, close it with its button and Escape, and follow each section link.
- Expand every course and FAQ. Check that text is readable and nothing overlaps.
- Test at 200% zoom and with your operating system's reduced-motion setting enabled.
- Check with a screen reader if available; verify landmark names, image description, and expanded states.
- After publishing, repeat the main checks on the actual GitHub Pages URL, especially asset loading.

## GitHub Pages Deployment

Published under the personal GitHub account **scarface-dmd**, with explicit user authorization. The first Pages build and deployment succeeded, and the live demo URL above was obtained from GitHub's Pages API and verified over public HTTPS. Nothing has been posted on LinkedIn or submitted to the internship form.

- Repository visibility: **Public**.
- Publishing source: **Deploy from a branch**, **main**, **/ (root)**.
- Entry point: `index.html` at the repository root.
- HTTPS: enforced by GitHub Pages.
- The repository website field points to the verified live demo.
- The project has its own local Git repository. No files or history from the unrelated parent repository were published.

GitHub manages the Pages build and deployment. Relative stylesheet, script, and favicon paths allow the site to work under the repository subpath. No custom domain, secrets, environment variables, or local build command are required.

### Update the Published Site

1. Edit and test files in the project folder, then inspect `git status` and `git diff`.
2. Stage only the intended changed files, commit, and push to `main`. For example, after editing the README:

```powershell
git add README.md
git commit -m "Update project documentation"
git push origin main
```

3. Open the repository's **Actions** tab and wait for **pages build and deployment** to finish. Refresh the live demo and verify the changed content. GitHub/CDN updates can take a little time.
4. To inspect or restore the publishing configuration, go to **Settings > Pages** and select **Deploy from a branch**, **main**, and **/ (root)**, then save if needed.

For a separate copy in your own GitHub account, create a public repository, place these files at its root, and enable the same branch/root settings. Use the actual URL shown by GitHub rather than assuming a domain.

For SWYNEX's **Task submission link**, use the public repository URL at the top of this README. The live demo is also linked there for review.

## Authorship and AI Assistance

This project was prepared for Afkar Riswar with AI assistance from OpenAI's coding assistant through OpenCode. The assistant generated the initial design, HTML/CSS/JavaScript, documentation, and browser-check scripts, and ran automated checks in the supplied workspace. This is not presented as independently authored work. Afkar should review, understand, personalise where appropriate, and follow the internship's AI-assistance disclosure rules before submission.

All illustration and icon assets are included locally; no stock photos, testimonials, customer counts, or partner endorsements are used. No third-party asset library is required. No license has been selected; review your intended licensing before adding a license file.
