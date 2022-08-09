# mlaursen.com

My (empty) portfolio website developed using [next] and [react-md].

## Commands

- `format` - format all files with [prettier]
- `lint` - run [eslint] on all typescript and javascript files using
  [@mlaursen/eslint-config]
  - Note: strict eslint rules
- `typecheck` - run `tsc --noEmit` on the project
  - Note: strict rules enforced
- `test-cy` - Open the [Cypress] testing dashboard
- `dev` - start the development server with [next]
- `build` - build the app for production
- `build-static` - build the app as pre-compiled html pages (requires no
  `getServerSideProps` and `getInitialProps`)
- `start` - run the production build

### Cypress Testing

## Github Actions

- [main](./.github/workflows/main.yml) - The main workflow that handles
  continuous integration and deployment.
  - Pull Requests
    - Prevent errors by running `yarn lint` and `yarn typecheck`
    - Run [Cypress] end-to-end tests against a local build with Chrome and
      Firefox
  - New commits/merges into `main`
    - Prevent errors by running `yarn lint` and `yarn typecheck`
    - Build and deploy the website to https://mlaursen.com
    - Run [Cypress] end-to-end tests against the newly deployed code with Chrome
      and Firefox
- [dependabot.yml](./.github/dependabot.yml) - Keep dependencies up-to-date on a
  weekly schedule
- [codeql_analysis.yml](./.github/workflows/codeql_analysis.yml) - check for
  security issues in code

[react-md]: https://react-md.dev
[eslint]: https://github.com/eslint/eslint
[next]: https://nextjs.org/
[cypress]: https://cypress.io
[prettier]: https://prettier.io
[@mlaursen/eslint-config]: https://github.com/mlaursen/eslint-config
