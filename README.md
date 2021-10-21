# design-system
![Release](https://github.com/remindle/design-system/actions/workflows/release.yml/badge.svg)

## Tech used
Building components
- 📚 [Storybook](https://storybook.js.org) for UI component development and [auto-generated docs](https://medium.com/storybookjs/storybook-docs-sneak-peak-5be78445094a)
- 💅 [Styled-components](https://www.styled-components.com/) for component-scoped styling
- ⚛️ [React](https://reactjs.org/) declarative component-centric UI

Maintaining the package
- 📦 [GitHub Package Registry](https://github.com/orgs/remindle/packages?repo_name=design-system) for [packaging and distribution](https://docs.github.com/en/packages)
- 🚢 [semantic-release-action](https://github.com/cycjimmy/semantic-release-action) semantic-release action to publish a npm package [see here for more info](https://github.com/semantic-release/semantic-release)
- 🚥 [GitHub Actions](https://github.com/remindle/design-system/actions) Continuous integration

## Installing dependencies

All dependencies are publicly available.

**Remindle** uses GitHub's package registry to publish packages, and this project uses one of its packages: `@remindle/design-tokens`.
The benefit of this approach is that the code, and the published package are all at one place instead of keeping code and published package separately.

To install dependencies from ***GitHub*** registry you'll have to configure `.npmrc` with the following content
(you are safe to create `.npmrc` in project folder since it's ignored in `.gitignore`):
```
//npm.pkg.github.com/:_authToken=<auth_token>
@remindle:registry=https://npm.pkg.github.com
```

Note that you'll have to replace `<auth-token>` with your personal token, for more info [see the docs](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

## Usage in local development

Simply link this package to the project where it is installed in order to see the changes directly.

Steps to follow:
- Run `yarn link` in this project
- In the project where you installed the package run the following command `yarn link "@remindle/design-system"`
## Manual package installation

Manually build and test the package locally.

Steps to follow:
- Run `npm pack` - This will build the package locally named like `remindle-design-system-1.0.0.tgz`.
- Go to the project where you want to test the newly created package and run `yarn add ../remindle-design-system-1.0.0.tgz`

By performing the steps above you'll simulate fresh package installation.

### Common pitfalls

If you are linking this package where React is also installed, then you'll probably get an Error with message:
```
Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.
```

To resolve this issue, please follow the instructions from React's [official documentation](https://reactjs.org/warnings/invalid-hook-call-warning.html#duplicate-react):
> This problem can also come up when you use npm link or an equivalent. In that case, your bundler might “see” two Reacts — one in application folder and one in your library folder. Assuming myapp and mylib are sibling folders, one possible fix is to run npm link ../myapp/node_modules/react from mylib. This should make the library use the application’s React copy.

Assuming your folder structure is like the following:
```
/home/user/some-folder-path/
├── design-system
```

This means you'll have to run the following command from `design-system` path:
```
npm link ../myapp/node_modules/react
```

If you've linked the package but do not see the changes, that probably means you didn't run `yarn build` after the change.
This is because all exported components resides within the `dist` folder. Why? Because [react-scripts](https://create-react-app.dev/_)
uses `@pmmmwh/react-refresh-webpack-plugin` as a webpack plugin in order to provide hot reloading of React components, and most of the time it is configured in such a way to ignore hot reloading of components in `node_modules`.