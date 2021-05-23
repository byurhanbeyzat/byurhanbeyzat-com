import React from 'react';
import NextLink from 'next/link';

import Container from '@/components/container';

function NotFoundPage() {
  return (
    <Container title="404">
      <div className="text-center">
        <h1 className="big-title">451</h1>
        <h2>Unavailable For Legal Reasons</h2>
        <p>
          Why show a generic 404 when I can make it sound mysterious? It seems
          you&apos;ve found something that used to exist, or you spelled
          something wrong. I&apos;m guessing you spelled something wrong. Can
          you double check that URL?
        </p>
        <br />
        <NextLink href="/">
          <a className="btn btn-secondary">Return Home</a>
        </NextLink>
      </div>
    </Container>
  );
}

export default NotFoundPage;
