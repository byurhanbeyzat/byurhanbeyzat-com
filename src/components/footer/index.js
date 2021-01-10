import React from 'react';
import cn from 'classnames';

import styles from './footer.module.scss';

function Footer() {
  return (
    <footer className={cn('container', styles.footer)} role="contentinfo">
      <p>Footer Content</p>
    </footer>
  );
}

export { Footer };
