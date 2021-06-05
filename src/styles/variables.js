import { css } from 'styled-components';

const themeVariables = css`
  :root {
    // Theme
    --c-base: 0, 0, 0;

    --c-blue: #1559d8;
    --c-yellow: #fff700;

    --c-text: #1a202c;
    --c-theme: #ffffff;
    --c-highlight: var(--c-blue);

    --c-gray: rgba(var(--c-base), 0.9);
    --c-gray-light: rgba(var(--c-base), 0.65);
    --c-gray-lightt: rgba(var(--c-base), 0.5);
    --c-gray-lighter: rgba(var(--c-base), 0.15);
    --c-gray-lightest: rgba(var(--c-base), 0.07);

    // Typography

    --ff-sans: 'Inter', -apple-system, system-ui, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --ff-mono: 'Space Mono', 'SF Mono', monospace;

    // Border radius
    --radius-2: 2px;
    --radius-4: 4px;
    --radius-6: 6px;

    // Sizes
    --width-sm: 700px;
    --width-lg: 860px;
    --width-base: 700px;
  }

  [data-theme='dark'] {
    // Theme
    --c-base: 255, 255, 255;
    --c-base1: 180, 180, 200;

    --c-text: #ebebeb;
    --c-theme: #1a202c;
    --c-highlight: var(--c-yellow);

    --c-gray: rgba(255, 255, 255, 0.9);
    --c-gray-light: rgba(180, 180, 200, 0.65);
    --c-gray-lightt: rgba(255, 255, 255, 0.5);
    --c-gray-lighter: rgba(180, 180, 200, 0.15);
    --c-gray-lightest: rgba(180, 180, 200, 0.07);
  }
`;

export { themeVariables };
