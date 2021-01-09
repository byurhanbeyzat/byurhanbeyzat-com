import React from 'react';
import { DefaultSeo } from 'next-seo';

import SEO from '../../next-seo.config';

function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}

export default App;
