import React from 'react';

import Container from '@/components/container';
import { Hero } from './hero';
import styles from './home.module.scss';

function HomepageContent() {
  return (
    <Container>
      <Hero />
    </Container>
  );
}

export { HomepageContent };
