import React from 'react';
import Link from 'next/link';
import SEO from '@/components/seo';

import Container from '@/components/container';

function NotFoundPage() {
  return (
    <Container>
      <SEO title="404" />
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
        <Link href="/">
          <a aria-label="Home" className="button">
            Return Home
          </a>
        </Link>
      </div>
    </Container>
  );
}

export default NotFoundPage;
