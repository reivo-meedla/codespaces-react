# Repository guidance

## Project
- This is a React 18 app built with Vite. Application code lives in `src/`; reusable UI is grouped under `src/components/` by feature.
- Component styles are colocated in CSS files. Follow the patterns and formatting of the files being changed rather than introducing a new convention.
- Keep changes focused and preserve existing component props and behavior unless the task requires an API change.

## Validation
- Run `npm test -- --run` for the Vitest suite. Tests use React Testing Library and the `jsdom` environment.
- Run `npm run build` to check the production build.
- `npm start` starts the Vite development server on port 3000.

## Working in this repository
- Add or update focused tests for behavior changes, following the existing tests in `src/`.
- Avoid editing generated output in `dist/` or installed dependencies in `node_modules/`.
- Do not make unrelated cleanup changes while working on a task.
