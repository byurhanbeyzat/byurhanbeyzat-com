import React from 'react';
import cn from 'classnames';
import NextLink from 'next/link';

import navLinks from './links';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={cn('container', styles.header)} role="banner">
      <h3 className={styles.logo}>byurhan.</h3>
      <nav className={styles.nav} role="menu">
        {navLinks.map((link) => (
          <NextLink href={link.href} key={link.id}>
            <a>{link.label}</a>
          </NextLink>
        ))}
      </nav>
    </header>
  );
}

export { Header };
