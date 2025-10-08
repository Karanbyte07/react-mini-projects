# React JS Course — Mini Projects (Vite + Tailwind)

A collection of bite-sized React projects built while learning React fundamentals. Each project is an isolated Vite app demonstrating a focused concept (state, effects, refs, custom hooks, routing, context, theming, and persistence) styled with Tailwind CSS.

> Repo structure: every folder is an independent project you can run on its own.

## Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4 (via `@tailwindcss/vite` where used)
- React Router DOM 7 (routing demo only)

Node.js 18+ is recommended.

## Projects at a glance

1) 01bgChanger — Background Color Changer
- What it shows: `useState`, controlled UI, Tailwind utility classes.
- Highlights: Fixed button palette updates the page background instantly with transitions.

2) 02passwordGenerator — Password Generator
- What it shows: `useState`, `useCallback`, `useEffect`, `useRef`, form controls (range + checkboxes), clipboard API.
- Highlights: Adjustable length (8–50), include numbers/special characters, one-click copy to clipboard.

3) 03currencyConverter — Currency Converter
- What it shows: Custom hook (`useCurrencyInfo`) with `fetch`, controlled inputs, a reusable `InputBox` component, swap and convert actions.
- Data source: CDN-based currency API from jsDelivr (`@fawazahmed0/currency-api`).
- Highlights: Convert between currencies and swap directions in one click.

4) 04reactrouter — React Router Demo
- What it shows: React Router v7 with nested routes, layouts, loaders, and dynamic route params.
- Highlights:
  - Root layout component (`Root.jsx`) with `Header`/`Footer` and an `Outlet`.
  - Nested routes for Home, About, Contact.
  - Dynamic user route: `user/:userID` via `useParams`.
  - Data loader example for a GitHub route (`githubInfoLoader`).

5) 05miniContext — Context API (Mini)
- What it shows: `createContext`, Provider, and consuming context across `Login` and `Profile` components.
- Highlights: A minimal setup for sharing `user` and `setUser` across the tree.

6) 06themeSwitcher — Light/Dark Theme Switcher
- What it shows: Theme context + provider, app-wide theme state, and DOM class toggling in `useEffect`.
- Highlights: Adds `light`/`dark` class to `<html>` for Tailwind to style the entire app; includes a `ThemeBtn` and sample `Card`.

7) 07todoAppLocal — Todo App with Local Storage
- What it shows: Context-driven state (`TodoContext`) with actions to add/update/delete/toggle todos, plus `useEffect` persistence to `localStorage`.
- Highlights: Inline editing, strike-through for completed items, and state survives page reloads.

8) counter — Simple Counter
- What it shows: `useState` basics and event handlers to increment/decrement.

## How to run a project

Pick any folder and run it independently.

```powershell
# From the repo root
cd .\01bgChanger
npm install
npm run dev
```

Repeat for any other project (e.g., `02passwordGenerator`, `03currencyConverter`, etc.).

Common scripts (per project):
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview the build locally

## Course topics covered

- React basics: JSX, components, props, state (`useState`), events
- Side effects: `useEffect` (fetching, DOM interactions)
- Performance hooks: `useCallback`
- Refs and DOM access: `useRef`
- Custom hooks: data fetching and reuse (`useCurrencyInfo`)
- Forms and controlled inputs: range, checkbox, text inputs
- Lists and conditional UI: rendering, editing, toggling, class changes
- Client-side routing: nested routes, dynamic params, loaders (React Router v7)
- Context API and state sharing across components
- Theming: global light/dark mode with Tailwind
- Persistence: `localStorage` for state survival
- Tooling: Vite project structure, dev/build scripts, Tailwind integration


## Notes and tips

- If the currency API fails to load, check your network or try again; it’s a free CDN-backed endpoint.
- Tailwind v4 is configured via the official Vite plugin (`@tailwindcss/vite`) in projects that include styling. Ensure your CSS imports include Tailwind’s layers if you add new styles.
- Each project is intentionally small and focused—great for experimenting or extending.

## Contributing / Next steps

- Add unit tests or simple integration tests to lock behavior.
- Extend features (e.g., password strength meter, multiple themes, route guards, drag-and-drop for todos).
- If you plan to accept PRs, add contribution guidelines.

## License

MIT — feel free to use these examples in your own learning and projects.
