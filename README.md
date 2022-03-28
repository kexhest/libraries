# Crystallize Libraries

Here are managed all the Crystallize Libraries.

In order to simplify their maintenance they are all in this Git Repository.

All contributions will happen here:

-   PRs and Issues are therefore open, discuss, contribute in one place
-   Many things will be shared accross the `components`: Coding Standards, CI & Automations, Tests, etc.

✅ Nevertheless, all the `compoenents` (here library) will continue to be independant and pushed in their own repository. (through magic mechanisms that we have internally)

## Managed Repositories

| Libraries                                                         | Licence(s) |
| ----------------------------------------------------------------- | ---------- |
| [JS Api Client](https://github.com/CrystallizeAPI/js-api-client)  | ![mit]     |
| [React JS Hooks](https://github.com/CrystallizeAPI/reactjs-hooks) | ![mit]     |

## Contributions

### Conventions

-   Pull Requests and Issues should start with `[$COMPONENT_NAME]`

### Demo app (Github Page)

You can test on that live demo page here: https://crystallizeapi.github.io/libraries/

This React App is built from this repository as well, to run it:

```bash
cd docs/react-app
npm install
npm start
```

> This app is then built in production mode and deployed on Github Pages via Github Actions.

## Adding a new Component (Library)

```bash
make add-component COMPONENT=my-new-component
```

> If not already done, you still need create the Github sub-repository and add an entry in `components/manifest.json`

[mit]: https://img.shields.io/badge/license-MIT-green?style=flat-square&labelColor=black