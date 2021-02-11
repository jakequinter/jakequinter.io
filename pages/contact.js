import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

const Contact = () => (
  <Container>
    <NextSeo
      title="Jake Quinter 📱"
      canonical="https://jakequinter.io/contact"
      openGraph={{
        url: 'https://jakequinter.io/contact',
        title: 'Jake Quinter 📱'
      }}
    />
    <div className="flex-row justify-between items-center">
      <div w="100%">
        <h1 className="text-4xl text-gray-900 font-bold pb-8">What's Next?</h1>
        <p className="pb-4">
          Let’s get in touch! Please feel free to reach out to me directly, via
          email, or send me a message on LinkedIn or Twitter. I will do my best
          to get back to you as quickly as possible.
        </p>
        <p className="pb-4">
          I am currently open to new opportunities that may arise. Jobs or
          projects that I'm interested in include but are not limited to
          startups, freelance work, and remote opportunities.
        </p>
        <p>I look forward to hearing from you!</p>
        <div className="text-center border border-light-gray-200 mt-8 p-4 rounded">
          <h3 className="text-2xl text-gray-900 font-medium py-8">
            Reach out to me directly
          </h3>
          <p>
            Monday &ndash; Sunday <br /> 5:00a.m. &ndash; 10:00p.m. (UTC)
            <br />
            (920) 585-1903 <br />
          </p>
        </div>
      </div>
    </div>
  </Container>
);

export default Contact;
