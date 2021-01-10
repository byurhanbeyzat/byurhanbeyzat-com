import React from 'react';
import cn from 'classnames';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

import styles from './main.module.scss';

function Container({ children }) {
  return (
    <>
      <Header />
      <main role="main" className={cn('container', styles.main)}>
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Container;
