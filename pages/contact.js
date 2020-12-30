import Head from 'next/head';
import Link from 'next/link';
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
        <h1 className="text-4xl text-gray-900 font-bold pb-4">What's Next?</h1>
        <div color="#484848">
          <p className="pt-4">
            Let’s get in touch! Please feel free to reach out to me directly,
            via email, or send me a message on LinkedIn or Twitter. I will do my
            best to get back to you as quickly as possible.
          </p>
          <p className="pt-4">
            I am currently open to new opportunities that may arise. Jobs or
            projects that I'm interested in include but are not limited to
            startups, freelance work, and remote opportunities. If you are
            interested in what I’m looking for in my work please check out the
            “Technologies I’m Interested In” section on my{' '}
            <Link href="/about">
              <a className="text-blue-500">about page</a>
            </Link>
            .
          </p>
          <p className="pt-4">I look forward to hearing from you!</p>
        </div>
        <div className="text-center border-2 border-solid border-gray-200 mt-4 p-4 rounded">
          <h3 className="text-2xl text-gray-900 font-medium pb-4">
            Reach out to me directly
          </h3>
          <p fontSize="1.2rem">
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
