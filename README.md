# Cursor Boilerplate (Designer-Friendly)

This repository is a frontend boilerplate for designers and non-technical teammates to quickly prototype UIs, run user tests, and iterate using our UXCore design system components. Make sure you've read through our ["vibe coding" guidance]([https://godaddy.enterprise.slack.com/docs/T02BHKTRC/F09C682MDBQ](https://godaddy-corp.atlassian.net/wiki/spaces/ANTARES/pages/3923674507/Vibe+coding+at+GoDaddy)), as well as the [setup instructions]([https://godaddy.enterprise.slack.com/docs/T02BHKTRC/F09DUDK53J5](https://godaddy-corp.atlassian.net/wiki/spaces/ANTARES/pages/3923609237/Developing+Apps+with+Cursor+UXCore+and+Gasket)) for Cursor and Github.

Refer to `AGENTS.md` for agent-specific guidance and `uxcore` MCP for UXCore component docs.

## Who this is for

- Designers, researchers, PMs, and non-technical folks who want to edit copy, layouts, and components without deep React knowledge.

## Support

Reach out in the [#design-foundations](https://godaddy.enterprise.slack.com/archives/C4KCHSZTM) slack channel if you have any questions or need support with development.

## Prerequisites

- Node.js (LTS recommended) and npm installed
- A code editor (Cursor recommended)

## Quick Start

1. Install dependencies

   ```sh
   npm install
   ```

2. Start the app

   ```sh
   npm start
   ```

3. Open `http://localhost:3000` in your browser. Changes save automatically.

## What to edit (90% of your work)

- `src/App.js`: Main page content and layout. Start here to change text, sections, and components.
- `src/components/`: Small building blocks used in the layout (`sidebar.js`, `slat.js`, `utility-nav.js`).
- `src/assets/`: Images and fonts (`logo.png`, `illo.png`, `GD_Sherpa_Variable.woff2`). Replace with your own images as needed.
- `src/App.css` and `src/styles/`: Local styles for layout pieces.
- `src/themes/godaddy-antares.css`: Theme tokens and design variables loaded globally via `src/index.js`.

## Use UXCore components (required)

Always prefer UXCore components for consistency, quality, and accessibility.

Basic example (add to `src/App.js`):

```jsx
import Button from '@ux/button';
import text from '@ux/text';
import '@ux/button/styles';
import '@ux/text/styles';

// Inside your component
<text.h2 as="title">Section title</text.h2>
<Button design="primary" size="sm">Do action</Button>
```

Find usage guidance and props in `uxcore` MCP (search by component name, e.g., "Button", "Tabs").

## Theming and styling

- Global theme is imported in `src/index.js` via `import './themes/godaddy-antares.css';`
- Prefer changing tokens/variables in `src/themes/godaddy-antares.css` over custom CSS.
- If needed, add small, scoped styles in `src/App.css` or files under `src/styles/`.

## Accessibility tips (important)

- Provide `alt` text for images (see the `Logo` and `Illo` examples in `src/App.js`).
- Use labeled inputs with required `id`/`label` props where applicable (`@ux/text-input`, `@ux/checkbox`, etc.).
- Keep headings semantic using `@ux/text` components (`<text.h1 as='heading'>`, `<text.h2 as='title'>`).

## Build and share

- Development: `npm start` (auto-reloads on save).
- Production build:

```sh
npm run build
```

This outputs static files to the `build/` folder you can host anywhere.

## Deploy

Though it may seem easier, **you should never be deploying code to third party platforms**. This is the official position of our engineering team, and it means sites like Netlify, Vercel, and the like are technically off-limits. If you need to deploy your prototypes, follow our [guide to deploying web apps at GoDaddy](https://secureservernet-my.sharepoint.com/:w:/g/personal/rdaly_godaddy_com/EXCYDJffV5xOkHHxStreQlEB1ot6Fa859ubTfGilunjWSA?e=qaZLcu), which goes into a detailed step-by-step breakdown for how to get your newly created applications out on the web.

> Note: the DF and UXP teams are actively working on an internal solution that simplifies this deployment step so that you can simply drag and drop your builds to deploy them, but we are still in the process of planning and allocating resources for it.

## Troubleshooting

- "npm: command not found" → Install Node.js from nodejs.org (LTS).
- Port 3000 already in use → Stop other dev servers or let the app choose a new port when prompted.
- Styles don’t look right → Ensure you imported the component’s `@ux/.../styles` and the global theme in `src/index.js`.
- Components not found → Verify the package exists in `package.json` and reinstall: `rm -rf node_modules && npm install`.

## Additional references

- Agent usage and principles: see `AGENTS.md` (design system-first, accessibility, usability).
