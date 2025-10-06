<!-- .github/copilot-instructions.md - concise, actionable guidance for AI coding agents -->
# Copilot instructions — granado-firstapp

This small React + Vite app is intentionally minimal. The goal of these notes is to help an AI coding agent be immediately productive: where to look, what commands to run, and which project-specific conventions to follow.

Key files to read first
- `package.json` — scripts and deps (`dev`, `build`, `preview`, `lint`).
- `vite.config.js` — Vite + `@vitejs/plugin-react` with `babel-plugin-react-compiler` enabled.
- `index.html` — root HTML. Tailwind is loaded via CDN here (`<script src="https://cdn.tailwindcss.com"></script>`).
- `src/main.jsx` — application entry; imports `./index.css` and mounts `App` into `#root`.
- `src/App.jsx` — top-level layout. Imports components from `src/assets/components`.
- `src/assets/components/*` — all UI components (Header, Footer, Student, Card).
- `eslint.config.js` — lint rules and notable exceptions.

Big-picture architecture and patterns
- Vite + React (JSX) single-page app. No backend code in the repo.
- Components are stored under `src/assets/components` and use default exports (e.g. `Header.jsx`, `Student.jsx`).
- `App.jsx` composes the page by importing components directly; student entries are currently hard-coded as multiple `<Student .../>` elements.
- Styling uses Tailwind utility classes inline in components. Tailwind is provided via CDN in `index.html` (no PostCSS/Tailwind build step is configured).
- `vite.config.js` enables `babel-plugin-react-compiler`. Treat this as a required part of the build — it affects both dev and build outputs.

Developer workflows (commands)
- Install deps (if needed):
```powershell
npm install
```
- Start dev server (HMR, default Vite port 5173):
```powershell
npm run dev
```
- Build for production:
```powershell
npm run build
```
- Preview the production build locally:
```powershell
npm run preview
```
<!-- .github/copilot-instructions.md - concise, actionable guidance for AI coding agents -->
# Copilot instructions — granado-firstapp (merged & focused)

This is a tiny React + Vite single-page app. The goal here is to tell an AI coding agent exactly where to look, what to run, and which repo-specific conventions to follow so edits are low-risk and fast to verify.

Key files to read immediately
- `package.json` — scripts: `dev`, `build`, `preview`, `lint`.
- `vite.config.js` — React plugin + `babel-plugin-react-compiler` (important for both dev and build).
- `index.html` — root HTML; Tailwind is loaded via CDN here.
- `src/main.jsx` — app entry (imports `index.css`, mounts `App`).
- `src/App.jsx` — top-level composition and the current hard-coded student list.
- `src/assets/components/` — `Header.jsx`, `Footer.jsx`, `Student.jsx`, `Card.jsx` (default export .jsx files).
- `eslint.config.js` — lint rules and deliberate exceptions.

Essential project patterns (what matters)
- Single-page React app (client-only). No backend/server code.
- Components live under `src/assets/components` and use default exports with `.jsx` extensions.
- Tailwind is provided via CDN in `index.html`. You can add Tailwind utility classes directly in JSX; there is no PostCSS/Tailwind build step configured.
- `vite.config.js` includes `babel-plugin-react-compiler` — do not remove or disable it without verifying both `npm run dev` and `npm run build`.

Concrete examples & quick edits
- Add a component: create `src/assets/components/MyWidget.jsx` exporting default function; import in `src/App.jsx` with
  `import MyWidget from './assets/components/MyWidget.jsx'`.
- Convert the hard-coded students in `src/App.jsx` to a data-driven list. Example pattern:
  const students = [{name, number, age, course, year}, ...];
  {students.map(s => <Student key={s.number} {...s} />)}

Developer workflows (Windows PowerShell examples)
- Install deps:
  npm install
- Run dev server (HMR, default port 5173):
  npm run dev
- Build production bundle:
  npm run build
- Preview production bundle locally:
  npm run preview
- Run linter:
  npm run lint

Project-specific gotchas
- ESLint config has an exception: `no-unused-vars` ignores identifiers that match `^[A-Z_]`. This was used to allow some patterns in the UI code—watch for false positives.
- Tailwind via CDN means class changes are visible immediately—no CSS build step required. If you migrate Tailwind into PostCSS, update `index.css` and add deps.
- `babel-plugin-react-compiler` is explicitly enabled in `vite.config.js`; removing it can change runtime output.

What an AI agent should do first when making edits
1. Run `npm install` then `npm run dev` and open the app to visually verify UI changes.
2. Change minimal code and verify in the browser (Tailwind classes are instant).
3. Run `npm run lint` and fix violations before committing.

If you need more details (tests, CI, or added build steps), ask and I will expand this file with exact files and commands to inspect.
