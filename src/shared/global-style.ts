import { createGlobalStyle, css } from 'styled-components';

export const bodyStyles = css`
  margin: 0;
  overflow-y: auto;
  overflow-x: hidden;

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;

export const GlobalStyle = createGlobalStyle`
  body {
    ${bodyStyles}
  }

  // prevent mouse-clicks from focusing elements
  // this removes the ugly blue outline
  :focus:not(:focus-visible) {
    outline: none;
  }
`;
