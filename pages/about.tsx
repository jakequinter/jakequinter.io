import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Timeline from '@/components/timeline/Timeline';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { link } from '@/styles/link';

const About = () => {
  return (
    <Container>
      <NextSeo
        title="Jake Quinter 👨‍💻"
        canonical="https://jakequinter.io/about"
        openGraph={{
          url: 'https://jakequinter.io/about',
          title: 'Jake Quinter 👨‍💻',
        }}
      />
      <h1
        className={text({
          size: '7',
          weight: 'medium',
          css: { marginBottom: '$4' },
        })}
      >
        About me
      </h1>
      <div>
        <p className={text({ css: { paddingBottom: '$3' } })}>
          Hello, I’m Jake Quinter. I'm a software developer based in Boston, MA.
          I work on the Application Maintenance and Production Support team at{' '}
          <a className={link()} target="_blank" href="https://www.thrivent.com">
            Thrivent
          </a>
          . Whether you stumbled upon my site or have been here before, welcome!
        </p>
        <p className={text({ css: { paddingBottom: '$3' } })}>
          Besides work, I am currently finishing up my business minor at{' '}
          <a className={link()} target="_blank" href="https://lakeland.edu/">
            Lakeland University
          </a>{' '}
          to fulfill my credit requirements for a Bachelor of Science in
          Computer Science.
        </p>
        <p className={text({ css: { paddingBottom: '$3' } })}>
          In my free time I enjoy learning and reading about various
          technologies. When I find myself needing to step away from the
          computer, I enjoy reading, health and fitness, spending time with
          friends and family, and the outdoors.
        </p>
      </div>
      <div
        className={box({
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <img
          style={{ borderRadius: '10px' }}
          src="/jake.jpg"
          alt="Jake Quinter"
          height={375}
          width={675}
        />
      </div>

      <Timeline />
    </Container>
  );
};

export default About;
