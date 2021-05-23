import React from 'react';
import cn from 'classnames';
import NextLink from 'next/link';

import styles from './hero.module.scss';

function Hero() {
  return (
    <div className={styles.heroWrapper}>
      <h1 className={styles.title}>Hey, I&apos;m Byurhan</h1>
      <p className={styles.description}>
        I&apos;m developer &amp; creator, living in Ruse, Bulgaria. I&apos;m
        currently working at{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://recheck.io/?ref=https://byurhanbeyzat.com"
        >
          <span className={styles.logo}>ReCheck</span>
        </a>{' '}
        as a Software Developer.
      </p>

      <div className={styles.buttonContainer}>
        <NextLink href="/about">
          <a className={cn(['btn btn-primary'])}>More about me</a>
        </NextLink>
        <NextLink href="/about">
          <a className={cn(['btn btn-secondary'])}>Follow me on Twitter</a>
        </NextLink>
      </div>
    </div>
  );
}

export { Hero };
