module.exports = {
  stories: ['../src/**/*.stories.@(mdx|tsx|ts|jsx|js)'],
  logLevel: 'debug',
  core: {
    builder: "webpack5",
  },
  typescript: { reactDocgen: false },
  addons: [
    // '@storybook/preset-create-react-app', CRA is not webpack compatible (yet)
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
  ],
};
