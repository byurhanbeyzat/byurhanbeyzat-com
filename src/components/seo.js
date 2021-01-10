import React from 'react';
import PropTypes from 'prop-types';
import { NextSeo } from 'next-seo';

function SEO({ title, summary, publishedAt, image, url }) {
  const date = new Date(publishedAt);

  return (
    <NextSeo
      title={`${title} – Byurhan Beyzat`}
      description={summary}
      canonical={url}
      openGraph={{
        type: 'article',
        article: {
          publishedTime: date,
        },
        url,
        title,
        description: summary,
      }}
    />
  );
}

SEO.defaultProps = {
  title: ``,
  summary: ``,
  publishedAt: ``,
  image: ``,
  url: ``,
};

SEO.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  publishedAt: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
};

export default SEO;
