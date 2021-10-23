module.exports = {
  stories: ['../src/**/*.stories.@(mdx|tsx|ts|jsx|js)'],
  logLevel: 'debug',
  addons: [
    '@storybook/preset-create-react-app',
    // '@storybook/addon-docs',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-a11y',
  ],
};
