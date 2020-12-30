import React from 'react';
import NextLink from 'next/link';

import Container from '@/components/Container';

const index = () => (
  <Container>
    <div className="mx-auto items-center relative">
      <div className="text-center w-full my-4">
        <h1 className="text-4xl text-gray-900 font-bold">Hi, I'm Jake.</h1>
        <p className="text-lg my-4" fontSize="lg" color="#484848" my="8">
          I am a software developer, tech enthusiast and life long student.
        </p>
        <NextLink href="/contact" passHref>
          <a
            className="bg-blue-500 text-white px-8 py-4 rounded"
            _hover={{
              backgroundColor: '#8DA6FC'
            }}
          >
            Get In Touch
          </a>
        </NextLink>
      </div>
    </div>
  </Container>
);

export default index;
