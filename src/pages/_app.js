import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import SEOConfig from '@root/next-seo.config';

import '@/styles/app.scss';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
