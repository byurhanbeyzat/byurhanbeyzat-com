import React from 'react';
import { DefaultSeo } from 'next-seo';

import SEOConfig from '@root/next-seo.config';

import '@/styles/app.scss';

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEOConfig} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
