import React from 'react';
import Head from 'next/head';
import {
  Box,
  Flex,
  Heading,
  Image,
  List,
  Link,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/core';
import { AiOutlineHtml5, AiOutlineCloudServer } from 'react-icons/ai';
import { DiReact, DiJsBadge } from 'react-icons/di';
import { SiFirebase, SiMongodb, SiNextDotJs, SiJava } from 'react-icons/si';
import {
  FaCode,
  FaAdobe,
  FaNodeJs,
  FaCcStripe,
  FaShippingFast
} from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

import Container from '@/components/Container';

const TechItem = ({ content, icon }) => (
  <ListItem color="#484848">
    <Stack ml={2} mb={4}>
      <Flex align="center">
        <Text pr="2">{content}</Text>
        <Box as={icon} color="#d0d0d0" mr={2} />
      </Flex>
    </Stack>
  </ListItem>
);

const BuiltWithItem = ({ text, icon }) => (
  <Stack ml={2} mb={4}>
    <Box align="center">
      <Text>{text}</Text>
      <Box as={icon} m="0 auto" color="#d0d0d0" mt="2" />
    </Box>
  </Stack>
);

const About = () => {
  return (
    <Container>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m="0 auto 2rem auto"
        maxWidth="2000px"
      >
        <Head>
          <title>Jake Quinter | About</title>
        </Head>
        <Box
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          maxWidth="900px"
          minH="Calc(100vh - 40px - 82px);"
          width="100%"
          py={8}
          mb={8}
          mx="auto"
        >
          <Box w="100%">
            <Heading as="h1" size="xl" color="#333">
              About Me
            </Heading>
            <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
              <Box color="#484848">
                <Text pt="3">
                  Hello, I’m Jake Quinter. I'm a software developer based in
                  Appleton, WI. I work on the Application Maintenance and
                  Production Support team at{' '}
                  <Link
                    color="#4970FB"
                    isExternal
                    href="https://www.thrivent.com"
                  >
                    Thrivent
                  </Link>
                  . Whether you stumbled upon my site or have been here before,
                  welcome!
                </Text>
                <Text pt="3">
                  Besides work, I am currently finishing up my business minor at{' '}
                  <Link color="#4970FB" isExternal href="https://lakeland.edu/">
                    Lakeland University
                  </Link>{' '}
                  to fulfill my credit requirements for a Bachelor of Science in
                  Computer Science.
                </Text>
                <Text pt="3">
                  I grew up in a small town in central Wisconsin where I spent
                  my free time playing sports, hanging out with friends,
                  enjoying the outdoors, and trying to find anything else to
                  keep myself busy.
                </Text>
              </Box>
              <Box
                ml={{ xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
                mr={{ xs: 'auto', sm: 'auto', md: 'auto', lg: '0' }}
              >
                <Image
                  mt="3"
                  src="/jake.jpg"
                  alt="Jake Quinter"
                  // maxW="350px"
                  borderRadius="5px"
                  boxShadow={['none', 'none', 'none', '10px 10px #e2e8f0']}
                />
              </Box>
            </SimpleGrid>
          </Box>
          <Box w="100%" mt="12" color="#484848">
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
            <Heading as="h3" size="lg" mb="3" fontWeight="medium" color="#333">
              What I'm Working On
            </Heading>
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
                my="3"
                p="5"
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
            <Flex justifyContent="space-between" pt="5">
              <BuiltWithItem text="React" icon={DiReact} />
              <BuiltWithItem text="Node.js" icon={FaNodeJs} />
              <BuiltWithItem text="Express" icon={FaShippingFast} />
              <BuiltWithItem text="MongoDB" icon={SiMongodb} />
              <BuiltWithItem text="Stripe" icon={FaCcStripe} />
            </Flex>
            <Heading
              as="h4"
              size="sm"
              fontWeight="medium"
              mt="10"
              mb="1"
              color="#333"
            >
              My Personal Website
            </Heading>
            <Text pt="1">
              I've wanted to create a personal website for awhile now, but other
              projects always seemed to take precedence. I was always trying to
              challenge myself and taking the time to knock out a personal
              website in plain HTML and CSS seemed unworthy of my time. I
              recently became intrigued by Next.js and Vercel, so I thought this
              would be the perfect time to build this site. This is the first
              implementation, but I'm excited to see what my personal site
              becomes and what I decide to add in the future.
            </Text>
            <Flex justifyContent="space-between" pt="5">
              <Box textAlign="center"></Box>
              <BuiltWithItem text="Next.js" icon={SiNextDotJs} />
              <BuiltWithItem text="Firebase" icon={SiFirebase} />
              <BuiltWithItem text="Chakra UI" icon={FaCode} />
              <Box textAlign="center"></Box>
            </Flex>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default About;
