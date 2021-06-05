import { createGlobalStyle } from 'styled-components';

import { fontFace } from './fontface';
import { themeVariables } from './variables';

const GlobalCSSReset = createGlobalStyle`
${fontFace}
${themeVariables}

* {
  &,
  &::before,
  &::after {
    box-sizing: border-box;
  }
}

html {
  scroll-behavior: smooth;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  font-family: var(--ff-sans);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.45;
  color: var(--c-text);
  background-color: var(--c-theme);
  transition: color, background-color 150ms ease-in;
  overflow-x: hidden;
  margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 800;
}

h1.big-title {
  font-size: 44px;
}

h1 {
  font-size: 34px;
}

h2 {
  font-size: 32px;
}

::selection {
  color: var(--c-theme);
  background-color: var(--c-highlight);
}

button {
  border: 0;
  outline: 0;
  cursor: pointer;
  background-color: transparent;
}

svg {
  vertical-align: middle;
}

img {
  max-width: 100%;
  vertical-align: middle;
}

a {
  color: inherit;
  text-decoration: none;
}

span.badge {
  font-size: 10px;
  font-weight: 600;
  padding: 4px 6px;
  margin-left: 8px;
  text-transform: uppercase;
  color: var(--c-gray-lightt);
  background-color: var(--c-gray-lightest);
  border-radius: var(--radius-4);
  transition: all 0.25s ease 0s;
}

.btn {
  font-size: 16px;
  font-weight: 400;
  padding: 11px 20px;
  border-radius: var(--radius-4);
  transition: background-color 250ms ease-in;

  &-primary {
    color: var(--c-theme);
    background-color: var(--c-highlight);

    &:hover {
      color: var(--c-theme);
      background-color: var(--c-highlight);
    }
  }

  &-secondary {
    color: var(--c-gray);
    background-color: var(--c-gray-lightest);

    &:hover {
      color: var(--c-gray);
      background-color: var(--c-gray-lighter);
    }
  }
}
`;

export { GlobalCSSReset };
