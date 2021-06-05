import React from 'react';
import NextLink from 'next/link';

import { Icon, Container } from '@/components/common';
import { socialLinks } from '@/constants';

import { StyledFooter } from './styles';
import navLinks from '../links';

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
    <StyledFooter as={Container} large role="contentinfo">
      <div className="page-links">
        <div className="links-wrapper">
          <div className="links-list">
            <h4>General</h4>
            {navLinks.general.map((link) => (
              <FooterLink {...link} key={link.id} />
            ))}
          </div>
          <div className="links-list">
            <h4>Extras</h4>
            {navLinks.extras.map((link) => (
              <FooterLink {...link} key={link.id} />
            ))}
          </div>
        </div>

        <div className="scroll-button">
          <button type="button" onClick={() => scrollToTop()}>
            <Icon icon="ArrowUp" width="20px" height="20px" />
          </button>
        </div>
      </div>

      <div className="social-links">
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
    </StyledFooter>
  );
}

export { Footer };
