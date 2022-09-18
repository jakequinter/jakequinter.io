const title = 'Jake Quinter';
const description =
  'Jake Quinter is a software engineer, web lover, and tech enthusiast who focuses on building things that live on the web.';

const SEO = {
  title,
  description,
  canonical: 'https://jakequinter.io',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://jakequinter.io',
    title,
    description,
    images: [
      {
        url: 'https://jakequinter.io/browserconfig.xml',
        alt: title,
        width: 1280,
        height: 720,
      },
    ],
  },
  twitter: {
    handle: '@jakequinter',
    site: '@jakequinter',
  },
};

export default SEO;
