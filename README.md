# mlaursen.com

My (empty) portfolio website developed using [next] and [react-md]. There's even
some "fun" [Playwright] tests for no reason.

## Commands

- `format` - format all files with [prettier]
- `lint` - run [eslint] on all typescript and javascript files using
  [@mlaursen/eslint-config]
  - Note: strict eslint rules
- `typecheck` - run `tsc --noEmit` on the project
  - Note: strict rules enforced
- `dev` - start the development server with [next]
- `build` - build the app for production
- `start` - run the production build
- `start-static` - run the production build using [serve]

## Installation

```sh
pnpm i
# optional
pnpm exec playwright install --with-deps
```

## Github Actions

- [main](./.github/workflows/main.yml) - The main workflow that handles
  continuous integration and deployment.
  - Pull Requests
    - Prevent errors by running `pnpm lint` and `pnpm typecheck`
    - Build the website
    - Run [Playwright] end-to-end tests against a local build with Chrome and
      Firefox
  - New commits/merges into `main`
    - Prevent errors by running `pnpm lint` and `pnpm typecheck`
    - Build and deploy the website to https://mlaursen.com
    - Run [Playwright] end-to-end tests against the newly deployed code with Chrome
      and Firefox
- [codeql_analysis.yml](./.github/workflows/codeql_analysis.yml) - check for
  security issues in code

[react-md]: https://react-md.dev
[eslint]: https://github.com/eslint/eslint
[next]: https://nextjs.org/
[playwright]: https://playwright.dev/
[prettier]: https://prettier.io
[serve]: https://www.npmjs.com/package/serve
[@mlaursen/eslint-config]: https://github.com/mlaursen/eslint-config
