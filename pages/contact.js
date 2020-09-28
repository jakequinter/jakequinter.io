import Head from 'next/head';
import { Box, Heading, Link, Text } from '@chakra-ui/core';

import Container from '@/components/Container';

const Contact = () => (
  <Container>
    {/* <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 2rem auto"
      maxWidth="2000px"
    > */}
    <Head>
      <title>Jake Quinter | Contact</title>
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
          What's Next?
        </Heading>
        <Box color="#484848">
          <Text pt="3">
            Let’s get in touch! Please feel free to reach out to me directly,
            via email, or send me a message on LinkedIn or Twitter. I will do my
            best to get back to you as quickly as possible. And by as quickly as
            possible, odds are it will be a matter of minutes. I really have no
            excuse since I’m on my computer all day.
          </Text>
          <Text pt="3">
            I am currently open to new opportunities that may arise. Jobs or
            projects that I'm interested in include but are not limited to
            startups, freelance work, and remote opportunities. If you are
            interested in what I’m looking for in my work, please check out the
            “Technologies I’m Interested In” section on my{' '}
            <Link color="#4970FB" href="/about">
              about page
            </Link>
            .
          </Text>
          <Text pt="3">I look forward to hearing from you!</Text>
        </Box>
        <Box
          textAlign="center"
          border="2px solid #e2e8f0"
          borderRadius="5px"
          mt="5"
          p="5"
        >
          <Heading as="h3" size="lg" fontWeight="medium" color="#333" pb="5">
            Reach out to me directly
          </Heading>
          <Text fontSize="1.2rem">
            (920) 585-1903 <br />
            Monday &ndash; Sunday <br /> 5am &ndash; 10pm
          </Text>
        </Box>
      </Box>
    </Box>
    {/* </Stack> */}
  </Container>
);

export default Contact;
