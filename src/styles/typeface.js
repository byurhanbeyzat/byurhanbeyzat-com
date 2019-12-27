import { css } from 'styled-components'

export const typeface = css`
  @font-face {
    font-family: 'Space Mono';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: local('Space Mono Italic'), local('SpaceMono-Italic'),
      url('/typeface/SpaceMono-Italic.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Space Mono';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: local('Space Mono Bold Italic'), local('SpaceMono-BoldItalic'),
      url('/typeface/SpaceMono-BoldItalic.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Space Mono'), local('SpaceMono-Regular'),
      url('/typeface/SpaceMono-Regular.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
  @font-face {
    font-family: 'Space Mono';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local('Space Mono Bold'), local('SpaceMono-Bold'),
      url('/typeface/SpaceMono-Bold.woff2') format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
      U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212,
      U+2215, U+FEFF, U+FFFD;
  }
`
