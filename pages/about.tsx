import { NextSeo } from 'next-seo';

import Container from '@/components/Container';

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

      <div className="space-y-4">
        <h1 className="text-gray-900 dark:text-gray-50 text-2xl font-semibold mb-6">
          About me
        </h1>
        <p>
          I&apos;m building towards a future where the worlds of engineering and
          design unify to craft magical software experiences. Obsessively (no,
          seriously) solving unique problems with code and pixels.
        </p>
        <p>
          Tinkering with indie projects to help people and building meaningful
          and delightful software to solve my own problems.
        </p>
        <p>
          I grew up in Wisconsin but moved to Boston at the beginning of 2021.
          When I find myself needing to step away from the computer, I enjoy
          reading, health and fitness, spending time with friends and family,
          the outdoors, and exploring my new home.
        </p>
      </div>
    </Container>
  );
};

export default About;
