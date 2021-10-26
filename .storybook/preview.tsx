import '../src/styles/index.css';

import React from 'react';
import { Normalize } from 'styled-normalize';

import { withKnobs } from '@storybook/addon-knobs';
import { addDecorator, addParameters } from '@storybook/react';

import { GlobalStyle } from '../src/shared/global-style';

const withGlobalStyle = (storyFn: any) => (
  <>
    <Normalize />
    <GlobalStyle />
    {storyFn()}
  </>
);

addDecorator(withGlobalStyle);
addDecorator(withKnobs);
addParameters({
  options: {
    brandTitle: 'Remindle Design System',
    brandUrl: 'https://github.com/remindle/design-system',
  },
});

// Configures Storybook to log the actions(onClick and onChange, etc.) in the UI.
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
