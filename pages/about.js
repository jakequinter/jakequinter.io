import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { AiOutlineHtml5, AiOutlineCloudServer } from 'react-icons/ai';
import { DiReact, DiJsBadge } from 'react-icons/di';
import {
  SiFirebase,
  SiJava,
  SiMongodb,
  SiNextDotJs,
  SiTailwindcss,
  SiTypescript
} from 'react-icons/si';
import {
  FaAdobe,
  FaCcStripe,
  FaCode,
  FaNodeJs,
  FaShippingFast
} from 'react-icons/fa';
import { FiDatabase, FiLink } from 'react-icons/fi';

import Container from '@/components/Container';

// const TechItem = ({ content, icon }) => (
//   <ListItem color="#484848">
//     <Stack ml={2} mb={4}>
//       <Flex align="center">
//         <Text pr="2">{content}</Text>
//         <Box as={icon} color="#d0d0d0" mr={2} />
//       </Flex>
//     </Stack>
//   </ListItem>
// );

const BuiltWithItem = ({ text, icon }) => (
  <div className="ml-2 mb-4">
    <div className="flex flex-col justify-center">
      <p>{text}</p>
      <span className="mt-2 mx-auto text-gray-300">{icon}</span>
    </div>
  </div>
);

const About = () => {
  return (
    <Container>
      <NextSeo
        title="Jake Quinter 👨‍💻"
        canonical="https://jakequinter.io/about"
        openGraph={{
          url: 'https://jakequinter.io/about',
          title: 'Jake Quinter 👨‍💻'
        }}
      />
      <h1 className="text-4xl text-gray-900 font-bold pb-4">About Me</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div className="pr-4">
          <p>
            Hello, I’m Jake Quinter. I'm a software developer based in Appleton,
            WI. I work on the Application Maintenance and Production Support
            team at{' '}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://www.thrivent.com"
            >
              Thrivent
            </a>
            . Whether you stumbled upon my site or have been here before,
            welcome!
          </p>
          <p className="pt-2">
            Besides work, I am currently finishing up my business minor at{' '}
            <a
              className="text-blue-500"
              target="_blank"
              href="https://lakeland.edu/"
            >
              Lakeland University
            </a>{' '}
            to fulfill my credit requirements for a Bachelor of Science in
            Computer Science.
          </p>
          <p className="pt-2">
            In my free time I enjoy learning and reading about various
            technologies. When I find myself needing to step away from the
            computer, I enjoy reading, health and fitness, spending time with
            friends and family, and the outdoors.
          </p>
        </div>
        <div className="my-auto">
          <Image
            className="rounded-lg"
            src="/jake.jpg"
            alt="Jake Quinter"
            height={1000}
            width={1500}
          />
        </div>
      </div>
      {/* </Box> */}
      {/* <Box
            ml={{ xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
            mr={{ xs: 'auto', sm: 'auto', md: 'auto', lg: '0' }}
          > */}

      {/* </Box> */}
      {/* </SimpleGrid> */}
      {/* </Box> */}
      {/* <Box w="100%" mt="12" color="#484848"> 
          <Heading as="h3" size="lg" fontWeight="medium" color="#333">
            Technologies I'm Interested In
          </Heading>

          <Box display="block" width="100%">
            <Flex
              width="100%"
              align="flex-start"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Box>
                <List py="3">
                  <TechItem content="JavaScript" icon={DiJsBadge} />
                  <TechItem content="React" icon={DiReact} />
                  <TechItem content="Next.js" icon={SiNextDotJs} />
                </List>
              </Box>
              <Box>
                <List py="3" spacing={3}>
                  <TechItem content="Node.js" icon={FaNodeJs} />
                  <TechItem content="HTML & CSS" icon={AiOutlineHtml5} />
                  <TechItem content="Design" icon={FaAdobe} />
                </List>
              </Box>
              <Box>
                <List py="3" spacing={3}>
                  <TechItem content="Java" icon={SiJava} />
                  <TechItem content="Databases" icon={FiDatabase} />
                  <TechItem content="Servers" icon={AiOutlineCloudServer} />
                </List>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="100%" mt="12" color="#484848">
          <Heading as="h3" size="lg" mb="4" fontWeight="medium" color="#333">
            What I'm Working On
          </Heading>
          <Box pb={4}>
            <Flex>
              <Heading
                as="h4"
                size="sm"
                fontWeight="medium"
                pb="1"
                color="#333"
              >
                jenniferspick.com
              </Heading>
              <Link
                _hover={{ color: '#4970FB' }}
                ml={2}
                isExternal
                href="https://jenniferspick.com"
              >
                <FiLink />
              </Link>
            </Flex>
            <Box>
              <Text pt="1">
                A personal website that I built to start transitioning from
                JavaScript to TypeScript. I also finally got started
                experimenting with Tailwind CSS, and I love it! This is a
                Next.js application hosted on Vercel.
              </Text>
            </Box>
            <Flex justifyContent={['space-between', 'space-around']} pt={4}>
              <BuiltWithItem text="Next.js" icon={SiNextDotJs} />
              <BuiltWithItem text="TypeScript" icon={SiTypescript} />
              <BuiltWithItem text="Firebase" icon={SiFirebase} />
              <BuiltWithItem text="Tailwind CSS" icon={SiTailwindcss} />
            </Flex>
          </Box>
          <Box pb={4}>
            <Heading as="h4" size="sm" fontWeight="medium" pb="1" color="#333">
              Quisp
            </Heading>
            <Box>
              <Text pt="1">
                A web application to help bar and restaurant owners digitize
                their sign-in and employee data. Add and authorize your
                employees, set employee access and permissions, and add members
                to digitally keep track of your sign-in members.
              </Text>
              <Box
                textAlign="center"
                border="2px solid #e2e8f0"
                borderRadius="5px"
                my={2}
                p={4}
              >
                <Text as="em" pt="1" pb="3">
                  *If you are a bar or restaurant owner and are here to find out
                  more about Quisp, please{' '}
                  <Link href="/contact" color="#4970FB">
                    contact
                  </Link>{' '}
                  me.
                </Text>
              </Box>
              <Image src="/quisp.svg" alt="Quisp" mt="3" borderRadius="5px" />
            </Box>
            <Flex justifyContent="space-between" pt={4}>
              <BuiltWithItem text="React" icon={DiReact} />
              <BuiltWithItem text="Node.js" icon={FaNodeJs} />
              <BuiltWithItem text="Express" icon={FaShippingFast} />
              <BuiltWithItem text="MongoDB" icon={SiMongodb} />
              <BuiltWithItem text="Stripe" icon={FaCcStripe} />
            </Flex>
          </Box>
          <Box>
            <Heading as="h4" size="sm" fontWeight="medium" mb="1" color="#333">
              My Personal Website
            </Heading>
            <Text pt="1">
              This is my small slice of the internet. I developed this site as a
              tool to communicate with myself, potential employers, and whoever
              else I may feel like communicating with. Also, whenever I want to
              learn or test out something new, I use this site as my playground.
              This site is brand spanking new and I'm excited to see how my
              personal site evolves as time goes on. The high priority
              development plans are to migrate over to TypeScript and modify the
              styles to use Tailwind CSS. The feature(s) I'm thinking of
              implementing are now down to a blog because I recently
              incorporated the API and Bookmarks page.
            </Text>
            <Flex justifyContent={['space-between', 'space-around']} pt={4}>
               <Box textAlign="center"></Box> 
              <BuiltWithItem text="Next.js" icon={SiNextDotJs} />
              <BuiltWithItem text="Firebase" icon={SiFirebase} />
              <BuiltWithItem text="Chakra UI" icon={FaCode} /> 
              <Box textAlign="center"></Box> 
            </Flex>
          </Box>
        </Box>*/}

      <div className="mt-8">
        <h3 className="text-2xl text-gray-900 font-bold pb-4">
          What I'm working on
        </h3>
        <div pb={4}>
          <div className="flex">
            <h5 className="text-lg font-medium text-gray-900 pb-4">
              jenniferspick.com
            </h5>
            {/* <Link
                _hover={{ color: '#4970FB' }}
                ml={2}
                isExternal
                href="https://jenniferspick.com"
              >
                <FiLink />
              </Link> */}
          </div>
          <div>
            <p>
              A personal website that I built to start transitioning from
              JavaScript to TypeScript. I also finally got started experimenting
              with Tailwind CSS, and I love it! This is a Next.js application
              hosted on Vercel.
            </p>
          </div>
          <div className="flex justify-between pt-4">
            <BuiltWithItem text="Next.js" icon={<SiNextDotJs />} />
            <BuiltWithItem text="TypeScript" icon={<SiTypescript />} />
            <BuiltWithItem text="Firebase" icon={<SiFirebase />} />
            <BuiltWithItem text="Tailwind CSS" icon={<SiTailwindcss />} />
          </div>
        </div>

        <div>
          <div className="pt-4">
            <div className="flex">
              <h5 className="text-lg font-medium text-gray-900 pb-4">Quisp</h5>
            </div>
            <div>
              <p>
                A web application to help bar and restaurant owners digitize
                their sign-in and employee data. Add and authorize your
                employees, set employee access and permissions, and add members
                to digitally keep track of your sign-in members.
              </p>
            </div>
            {/* <Image src="/quisp.svg" alt="Quisp" height={1000} width={2000} /> */}
            <div className="flex justify-between pt-4">
              <BuiltWithItem text="React" icon={<DiReact />} />
              <BuiltWithItem text="Node.js" icon={<FaNodeJs />} />
              <BuiltWithItem text="Express" icon={<FaShippingFast />} />
              <BuiltWithItem text="MongoDB" icon={<SiMongodb />} />
              <BuiltWithItem text="Stripe" icon={<FaCcStripe />} />
            </div>
          </div>
        </div>

        <div>
          <div className="pt-4">
            <div className="flex">
              <h5 className="text-lg font-medium text-gray-900 pb-4">
                My personal site
              </h5>
            </div>
            <div>
              <p>
                This is my small slice of the internet. I developed this site as
                a tool to communicate with myself, potential employers, and
                whoever else I may feel like communicating with. Also, whenever
                I want to learn or test out something new, I use this site as my
                playground. This site is brand spanking new and I'm excited to
                see how my personal site evolves as time goes on. The high
                priority development plans are to migrate over to TypeScript and
                modify the styles to use Tailwind CSS. The feature(s) I'm
                thinking of implementing are now down to a blog because I
                recently incorporated the API and Bookmarks page.
              </p>
            </div>
            {/* <Image src="/quisp.svg" alt="Quisp" height={1000} width={2000} /> */}
            <div className="flex justify-between pt-4">
              <BuiltWithItem text="Next.js" icon={<SiNextDotJs />} />
              <BuiltWithItem text="Firebase" icon={<SiFirebase />} />
              <BuiltWithItem text="Chakra UI" icon={<FaCode />} />
            </div>
          </div>
        </div>
      </div>

      {/* 
          <Box pb={4}>
            <Heading as="h4" size="sm" fontWeight="medium" pb="1" color="#333">
              Quisp
            </Heading>
            <Box>
              <Text pt="1">
                A web application to help bar and restaurant owners digitize
                their sign-in and employee data. Add and authorize your
                employees, set employee access and permissions, and add members
                to digitally keep track of your sign-in members.
              </Text>
              <Box
                textAlign="center"
                border="2px solid #e2e8f0"
                borderRadius="5px"
                my={2}
                p={4}
              >
                <Text as="em" pt="1" pb="3">
                  *If you are a bar or restaurant owner and are here to find out
                  more about Quisp, please{' '}
                  <Link href="/contact" color="#4970FB">
                    contact
                  </Link>{' '}
                  me.
                </Text>
              </Box>
              <Image src="/quisp.svg" alt="Quisp" mt="3" borderRadius="5px" />
            </Box>
            <Flex justifyContent="space-between" pt={4}>
              <BuiltWithItem text="React" icon={DiReact} />
              <BuiltWithItem text="Node.js" icon={FaNodeJs} />
              <BuiltWithItem text="Express" icon={FaShippingFast} />
              <BuiltWithItem text="MongoDB" icon={SiMongodb} />
              <BuiltWithItem text="Stripe" icon={FaCcStripe} />
            </Flex>
          </Box>
          <Box>
            <Heading as="h4" size="sm" fontWeight="medium" mb="1" color="#333">
              My Personal Website
            </Heading>
            <Text pt="1">
              This is my small slice of the internet. I developed this site as a
              tool to communicate with myself, potential employers, and whoever
              else I may feel like communicating with. Also, whenever I want to
              learn or test out something new, I use this site as my playground.
              This site is brand spanking new and I'm excited to see how my
              personal site evolves as time goes on. The high priority
              development plans are to migrate over to TypeScript and modify the
              styles to use Tailwind CSS. The feature(s) I'm thinking of
              implementing are now down to a blog because I recently
              incorporated the API and Bookmarks page.
            </Text>
            <Flex justifyContent={['space-between', 'space-around']} pt={4}>
               <Box textAlign="center"></Box> 
              <BuiltWithItem text="Next.js" icon={SiNextDotJs} />
              <BuiltWithItem text="Firebase" icon={SiFirebase} />
              <BuiltWithItem text="Chakra UI" icon={FaCode} />
              <Box textAlign="center"></Box> 
            </Flex> */}
      {/* </Box> */}
    </Container>
  );
};

export default About;
