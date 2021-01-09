const title = 'Byurhan Beyzat – Front-End Developer.';
const description =
  "Hi, I'm Byurhan Beyzat, a front-end developer based in Ruse, Bulgaria.";

const SEO = {
  title,
  description,
  canonical: 'https://byurhanbeyzat.com',
  openGraph: {
    locale: 'en_IE',
    type: 'website',
    url: 'https://byurhanbeyzat.com',
    description,
    title,
    images: [
      {
        url: 'https://byurhanbeyzat.com/static/images/banner.jpg',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@byurhanbeyzat',
    site: '@byurhanbeyzat',
    cardType: 'summary_large_image',
  },
};

export default SEO;
