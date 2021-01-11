import React from 'react';
import cn from 'classnames';
import NextLink from 'next/link';
import { useTheme } from 'next-themes';

import navLinks from './links';
import styles from './header.module.scss';

function ThemeToggleButton({ isMounted }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      className={styles.themeButton}
      aria-label="Toggle Dark Mode"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {isMounted && (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {theme === 'dark' ? (
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          ) : (
            <path
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          )}
        </svg>
      )}
    </button>
  );
}

function Header({ isMounted }) {
  return (
    <header className={cn('container', styles.header)} role="banner">
      <h3 className={styles.logo}>
        <NextLink href="/">byurhan.</NextLink>
      </h3>
      <nav className={styles.nav} role="menu">
        {navLinks.map((link) => (
          <NextLink href={link.href} key={link.id}>
            <a>{link.label}</a>
          </NextLink>
        ))}
        <ThemeToggleButton isMounted={isMounted} />
      </nav>
    </header>
  );
}

export { Header };
