# SkillSpring: Code and Explanation Notes

These notes explain this specific implementation. They do not describe or invent a personal learning experience. Use them to understand the code and prepare your own explanation after reviewing it.

## What Each File Does

- `index.html` contains all the page text, section links, headings, course cards, FAQ answers, and footer attribution. It also contains reusable SVG icon symbols and the dashboard illustration's HTML.
- `styles.css` controls colours, spacing, typography, layout, focus indicators, hover states, and how the page changes at different widths.
- `script.js` opens and closes the mobile menu and expands the three learning-path cards. It does not connect to a server or create accounts.
- `assets/favicon.svg` is the small SkillSpring bar-mark icon used in the browser tab.
- `assets/screenshots/` contains saved desktop and mobile views for review. These images are not loaded by the landing page.
- `README.md` describes the project, testing, local setup, limitations, the Netlify deployment, and the GitHub Pages backup.
- `.gitignore` keeps local editor folders, log files, and optional tool dependencies out of Git.

## How the HTML Is Organised

The header contains a wordmark, menu button, and navigation. The `main` contains the hero, learning paths, benefits, process, FAQ, and final CTA. The footer contains three readable paragraphs: the student-project credit, internship task attribution, and demo availability statement. It does not offer accounts or enrolment.

There is one `h1` for the main headline. The content sections use `h2`, cards use `h3`, and expanded course outlines use `h4`. Section IDs such as `paths` and `faq` match links such as `href="#paths"`.

Links move to another location. Buttons change something on the current page. That is why "Find your learning path" is an anchor, while "View Details" is a button.

The dashboard is not a functional learning app. The outer element has `role="img"` and a description of the sample content. Its inner illustration is hidden from assistive technology so decorative sample text does not compete with the real page headings.

## Grid, Flexbox, and Media Queries

**Grid** divides an area into columns. `.hero-grid` uses two columns for text and illustration. `.path-grid` uses three equal columns with `repeat(3, 1fr)`. `1fr` means one share of the available space. The benefits, steps, and FAQ also use Grid.

**Flexbox** aligns a row or column of items. `.header-inner` places the brand and navigation on opposite sides. `.hero-actions` aligns CTA links. `.tags` uses `flex-wrap` so topic labels can move onto another line instead of overflowing.

**Media queries** apply CSS only when a condition matches:

```css
@media (max-width: 600px) {
  .path-grid {
    grid-template-columns: 1fr;
  }
}
```

This rule turns the course cards into one column when the viewport is at most 600px wide. The 800px breakpoint stacks the hero before the screen becomes too narrow. The 1100px breakpoint reduces spacing. CSS `clamp()` lets headings grow between minimum and maximum sizes without needing many separate rules.

The container uses a maximum width and side gutters so content stays aligned without stretching too far on large monitors. `box-sizing: border-box` makes declared widths include padding and borders.

## How the Mobile Menu Works

1. The script adds a `js` class to the HTML element. The CSS only collapses mobile navigation when that class exists, so navigation remains available if JavaScript is disabled.
2. `menuToggle` selects the button and `navigation` selects the controlled navigation element.
3. Clicking the button reads `aria-expanded`, switches it between `true` and `false`, and toggles the `is-open` class.
4. CSS shows `.is-open` on mobile. On larger screens, navigation is always displayed.
5. Clicking a navigation link on mobile calls `closeMenu()`.
6. Pressing Escape calls `closeMenu(true)`. The `true` argument returns keyboard focus to the toggle.
7. A `matchMedia` change listener resets menu state when the viewport crosses 600px. If resizing would hide a focused navigation link, focus moves to the toggle.

This menu is a simple navigation disclosure, not a modal. It does not need a focus trap: users can continue tabbing through the rest of the page.

## How Expandable Cards Work

Each details button has an `aria-controls` value matching the ID of one course outline. For example, the Frontend button controls `frontend-details`.

The script loops through `.details-button` elements with `forEach`. Each click listener:

1. Reads the current `aria-expanded` state.
2. Sets the opposite expanded state.
3. Updates `details.hidden` to show or hide the matching outline.
4. Changes the button label between "View Details" and "Hide Details".
5. Changes the decorative symbol between `+` and `-`.

The cards work independently. Opening one does not automatically close another. `getAttribute()` returns text, so the code compares it to the string `'true'`, not the Boolean `true`.

## Main JavaScript Functions

| Function or listener | Purpose |
| --- | --- |
| `closeMenu(returnFocus = false)` | Resets the expanded state, removes the open class, and optionally focuses the menu button |
| Menu button click listener | Toggles the expanded state and visible menu class together |
| Navigation click listener | Finds the clicked link with `closest('a')` and closes the menu on mobile |
| Document keydown listener | Handles Escape when the menu is open |
| `mobileViewport` change listener | Resets menu state when crossing the mobile breakpoint |
| Details-button click listeners | Toggle the matching course outline, label, symbol, and accessible state |

Most listeners use arrow functions because the behavior is small and specific to one control. Only the reusable menu-closing behavior needs its own named function. The FAQ does not need a JavaScript function: native `details` and `summary` already handle clicks and keyboard activation.

## Scrolling, Motion, and Focus

`scroll-behavior: smooth` makes section navigation less abrupt. `scroll-padding-top` reserves space above the destination so the sticky header does not cover it.

The `prefers-reduced-motion: reduce` media query changes scrolling to `auto` and removes transitions. It respects people who ask their operating system to reduce motion.

`:focus-visible` draws an outline around keyboard-focused links, buttons, and summaries. Do not remove it just because it is not part of a mouse-only screenshot. The skip link is hidden above the viewport until it receives focus.

## How to Change the Project

**Colours:** Edit the variables in `:root` near the start of `styles.css`. `--paper` is the page background, `--ink` is dark text, and `--green` is the main accent. Some illustration colours are written directly in dashboard rules. Recheck contrast after changing the theme.

**Text:** Edit the visible text in `index.html`. Keep the demo disclaimer accurate. Do not add enrolment, account, or payment promises unless those features actually exist.

**Cards:** Copy an existing `article.path-card` and update its title, description, tags, and outline. Give the new outline a unique ID and set the button's `aria-controls` to that ID. Keep `aria-expanded="false"` on the button and `hidden` on the outline initially. JavaScript finds all `.details-button` elements automatically.

**Layout:** Change column and gap values in the appropriate Grid rules. Check every breakpoint after changing card text or adding content. The same page should still be usable without sideways scrolling.

**Attribution:** Check the spelling of Afkar Riswar and the internship attribution before submission. Keep the AI-assistance acknowledgement honest and follow the internship's policy.

## Five Questions and Answers

### 1. Why does this project use Grid and Flexbox rather than only one layout system?

Grid suits larger column layouts such as the three learning cards. Flexbox suits aligning a row of navigation links or wrapping topic tags. Each is used where it keeps the CSS straightforward.

### 2. How does a screen reader know whether a learning-path card is expanded?

The real button exposes `aria-expanded="true"` or `"false"`, and `aria-controls` connects it to its outline. JavaScript changes the expanded state and the outline's `hidden` property together.

### 3. Why is the FAQ built differently from the learning cards?

The FAQ uses native HTML `details` and `summary`, which already provide expandable behavior and keyboard operation. The cards use custom buttons to demonstrate a small JavaScript interaction and to support a changing action label.

### 4. What makes the page work on GitHub Pages without a build step?

It is plain HTML, CSS, JavaScript, and local SVG. Asset paths start with `./` rather than an absolute domain or root path. GitHub Pages can serve these files directly from the repository root. Netlify also serves the same four runtime files without compilation; its upload excludes the documentation, screenshots, and Git files. Netlify updates are manual, while GitHub Pages updates from `main`.

### 5. What is real on this page, and what is only illustrative?

Navigation, the menu, expandable cards, and FAQ controls work. The dashboard and course outlines describe a fictional learning concept. There are no real courses delivered, accounts, sign-ups, or server-side features. The footer and FAQ explain this distinction.

## Review Before Explaining It

Run the site, expand each control, and find its corresponding HTML, CSS, and JavaScript. Try changing one text label and one colour. Explain what you actually understand and what was AI-assisted; these notes are reference material, not a claim that the work was completed independently.
