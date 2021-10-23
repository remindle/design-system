/**
 * Since Storybook leverages the use of `babel-loader` a developer has an ability
 * to import images as:
 * import avatarExample200 from 'public/images/avatar-img-example-200.jpg';
 *
 * This of course is not valid TypeScript syntax and this will cause a build to fail.
 * To avoid this these modules below have to be defined.
 *
 * @see https://github.com/microsoft/TypeScript-React-Starter/issues/12
 * @see https://storybook.js.org/docs/react/configure/typescript
 */

declare module '*.svg' {
  const value: any;
  export = value;
}

declare module '*.jpg' {
  const value: any;
  export = value;
}
