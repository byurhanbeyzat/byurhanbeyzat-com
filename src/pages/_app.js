import React from 'react';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import { GlobalCSSReset } from '@/styles';
import SEOConfig from '@root/next-seo.config';

function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem defaultTheme="system">
      <GlobalCSSReset />
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
