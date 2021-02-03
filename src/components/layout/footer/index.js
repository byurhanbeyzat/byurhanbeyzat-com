import React from 'react';
import cn from 'classnames';
import NextLink from 'next/link';

import Icon from '@/components/icon';
import { socialLinks } from '@/constants';

import navLinks from '../links';
import styles from './footer.module.scss';

function FooterLink({ id, href, label, avaliable }) {
  return (
    <NextLink href={href} key={id}>
      <a>
        {label}
        {!avaliable && <span className="badge">Coming Soon</span>}
      </a>
    </NextLink>
  );
}

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <footer className={cn('container', styles.footer)} role="contentinfo">
      <div className={styles.pageLinks}>
        <div className={styles.linksWrapper}>
          <div className={styles.linkList}>
            <h4>General</h4>
            {navLinks.general.map((link) => (
              <FooterLink {...link} key={link.id} />
            ))}
          </div>
          <div className={styles.linkList}>
            <h4>Extras</h4>
            {navLinks.extras.map((link) => (
              <FooterLink {...link} key={link.id} />
            ))}
          </div>
        </div>

        <div className={styles.scrollButton}>
          <button type="button" onClick={() => scrollToTop()}>
            <Icon icon="ArrowUp" width="20px" height="20px" />
          </button>
        </div>
      </div>

      <div className={styles.socialLinks}>
        {socialLinks.map((link) => (
          <a
            key={link.id}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            title={`Byurhan Beyzat on ${link.label}`}
            aria-label={`Byurhan Beyzat on ${link.label}`}
          >
            <Icon icon={link.label} width="20px" height="20px" />
          </a>
        ))}
      </div>
    </footer>
  );
}

export { Footer };
