import Head from 'next/head';
import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text
} from '@chakra-ui/core';
import { AiOutlineHtml5, AiOutlineCloudServer } from 'react-icons/ai';
import { DiReact, DiJsBadge, DiJava } from 'react-icons/di';
import { SiFirebase, SiMongodb, SiNextDotJs } from 'react-icons/si';
import { FaAdobe, FaNodeJs, FaCcStripe, FaShippingFast } from 'react-icons/fa';
import { FiDatabase } from 'react-icons/fi';

import Container from '@/components/Container';

const About = () => (
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
        p={8}
        mb={8}
        mx="auto"
      >
        <Box w="100%">
          <Heading as="h1" size="xl" color="#333">
            About Me 🚀
          </Heading>
          <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={5}>
            <Box color="#484848">
              <Text pt="2">
                Hello! I’m Jake Quinter, a software developer based in Appleton,
                WI. Whether you stumbled upon my site or been here before,
                welcome!
              </Text>
              <Text pt="2">
                I grew up in a small town in central Wisconsin, where I spent my
                free time playing sports, hanging out with friends, and trying
                to find anything else to keep myself busy.
              </Text>
              <Text pt="2">
                After high school, I experimented with multiple things,
                including business and engineering school until I finally found
                something that I loved. For me, that was (you guessed it)
                computers!
              </Text>
            </Box>
            <Box
              ml={{ xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
              mr={{ xs: 'auto', sm: 'auto', md: 'auto', lg: '0' }}
            >
              <Image
                src="/jake.jpg"
                alt="Jake Quinter"
                maxH="300px"
                borderRadius="5px"
              />
            </Box>
          </SimpleGrid>
        </Box>
        <Box w="100%" mt="12" color="#484848">
          <Heading as="h3" size="lg" fontWeight="medium" color="#333">
            Technologies I'm Interested In 🔥
          </Heading>

          <Box mb={8} display="block" width="100%">
            <Flex
              width="100%"
              align="flex-start"
              justifyContent="space-between"
              flexDirection={['column', 'row']}
            >
              <Box>
                <List py="3" spacing={3}>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    JavaScript <Box display="inline" as={DiJsBadge} />
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    React <Box display="inline" as={DiReact} />
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    Next.js <Box display="inline" as={SiNextDotJs} />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List py="3" spacing={3}>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    Node.js <Box display="inline" as={FaNodeJs} />
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    HTML & CSS <Box display="inline" as={AiOutlineHtml5} />
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    Design <Box display="inline" as={FaAdobe} />
                  </ListItem>
                </List>
              </Box>
              <Box>
                <List py="3" spacing={3}>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    Java <Box display="inline" as={DiJava} />
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    Databases <Box display="inline" as={FiDatabase} />
                  </ListItem>
                  <ListItem>
                    <ListIcon icon="chevron-right" color="black.500" />
                    Servers <Box display="inline" as={AiOutlineCloudServer} />
                  </ListItem>
                </List>
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box w="100%" mt="12" color="#484848">
          <Heading as="h3" size="lg" mb="3" fontWeight="medium" color="#333">
            What I'm Working On 👨🏼‍💻
          </Heading>
          <Heading as="h4" size="sm" fontWeight="medium" mb="1" color="#333">
            Quisp
          </Heading>
          <Box>
            <Text>
              A web applicaiton to help bar and restaurant owners digitize their
              sign-in and employee data. With built in success and error
              notifications, duplicate name and number entry validation,
              authorized access sign on, and more.
            </Text>
          </Box>
          <Box>
            <Image
              src="/Quisp-01.svg"
              alt="Quisp"
              mt="3"
              borderRadius="5px"
              // maxH="500px"
            />
          </Box>
          <Heading
            as="h5"
            size="sm"
            fontWeight="medium"
            textAlign="center"
            py="3"
            color="#333"
          >
            Built With
          </Heading>
          <Flex justifyContent="space-between">
            <Box textAlign="center">
              <Text>React</Text>
              <Box as={DiReact} m="0 auto" />
            </Box>
            <Box textAlign="center">
              <Text>Node.js</Text>
              <Box as={FaNodeJs} m="0 auto" />
            </Box>
            <Box textAlign="center">
              <Text>Express</Text>
              <Box as={FaShippingFast} m="0 auto" />
            </Box>
            <Box textAlign="center">
              <Text>MongoDB</Text>
              <Box as={SiMongodb} m="0 auto" />
            </Box>
            <Box textAlign="center">
              <Text>Stripe</Text>
              <Box as={FaCcStripe} m="0 auto" />
            </Box>
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
          <Text>
            A web application to connect with and hear from people across the
            world. I created this site to familiarize myself with Next.js, SSG
            and SSR, along with Vercel’s fast refresh, file base routing system
            and easy no config deploys.
          </Text>
          <Heading
            as="h5"
            size="sm"
            fontWeight="medium"
            textAlign="center"
            py="3"
            color="#333"
          >
            Built With
          </Heading>
          <Flex justifyContent="space-between">
            <Box textAlign="center"></Box>
            <Box textAlign="center">
              <Text>Next.js</Text>
              <Box as={SiNextDotJs} m="0 auto" />
            </Box>
            <Box textAlign="center">
              <Text>Firebase</Text>
              <Box as={SiFirebase} m="0 auto" />
            </Box>
            <Box textAlign="center">
              <Text>Chakra UI</Text>
              <Box as={AiOutlineCloudServer} m="0 auto" />
            </Box>
            <Box textAlign="center"></Box>
          </Flex>
        </Box>
      </Box>
    </Stack>
  </Container>
);

export default About;
