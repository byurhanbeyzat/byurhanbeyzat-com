import React, { useEffect, useState } from 'react';

import { Container } from '@/components/common';
import { Header } from './header';
import { Footer } from './footer';
import SEO from '../seo';

function Layout({ children, title }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      {title && <SEO title={title} />}
      <Header isMounted={mounted} />
      <Container role="main" as="main" style={{ marginTop: '56px' }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

export { Layout };
