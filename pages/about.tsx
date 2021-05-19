import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

import Container from '@/components/Container';
import Timeline from '@/components/timeline/Timeline';
import { text } from '@/styles/text';
import { box } from '@/styles/box';
import { link } from '@/styles/link';
import { image } from '@/styles/image';

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
          weight: 'bold',
          css: { marginBottom: '$4', marginTop: '$6' },
        })}
      >
        About me
      </h1>
      <div>
        <p className={text({ css: { paddingBottom: '$3' } })}>
          Hello, I’m Jake. I’m a software developer based in Boston, MA. I work
          at{' '}
          <a
            className={link()}
            target="_blank"
            href="https://www.deltadefense.com/"
          >
            Delta Defense
          </a>{' '}
          as a Frontend Developer.
        </p>
        <p className={text({ css: { paddingBottom: '$3' } })}>
          Outside of my full-time role, I tinker with indie projects and build
          meaningful software to help people. I am becoming more interested in
          the thought of entrepreneurship and indie software.
        </p>
        <p className={text({ css: { paddingBottom: '$3' } })}>
          I grew up in Wisconsin but moved to Boston at the beginning of the
          year. When I find myself needing to step away from the computer, I
          enjoy reading, health and fitness, spending time with friends and
          family, the outdoors, and exploring my new home.
        </p>
      </div>
      <div
        className={box({
          display: 'flex',
          justifyContent: 'center',
        })}
      >
        <Image
          className={image()}
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
