import React, { useEffect, useState } from 'react';

import { Header, Footer } from '@/components/layout';

function Container({ children }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <Header isMounted={mounted} />
      <main role="main" className="container" style={{ marginTop: '56px' }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Container;
