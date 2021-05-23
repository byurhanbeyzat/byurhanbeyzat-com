import React, { useEffect, useState } from 'react';

import { Header, Footer } from '@/components/layout';
import SEO from '../seo';

function Container({ children, title }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {title && <SEO title={title} />}
      <Header isMounted={mounted} />
      <main role="main" className="container" style={{ marginTop: '56px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Container;
