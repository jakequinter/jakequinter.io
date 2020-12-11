import Head from 'next/head';
import { NextSeo } from 'next-seo';
import {
  Box,
  Flex,
  Heading,
  Icon,
  ListItem,
  Stack,
  Text
} from '@chakra-ui/core';

import Container from '@/components/Container';
import Things from '@/components/Things';

const ResumeItem = ({ content, children }) => {
  return (
    <ListItem color="#484848" width={['100%', '80%']}>
      <Stack ml={2} pb={3}>
        <Flex align="center">
          <Icon name="chevron-right" mr={2} />
          <Text>{content}</Text>
        </Flex>
        <Text color="#d8d8d8" ml={6}>
          {children}
        </Text>
      </Stack>
    </ListItem>
  );
};

const Resume = () => (
  <Container>
    <NextSeo
      title="Jake Quinter 📌"
      canonical="https://jakequinter.io/bookmarks"
      openGraph={{
        url: 'https://jakequinter.io/bookmarks',
        title: 'Jake Quinter 📌'
      }}
    />
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
          Internet Things
        </Heading>
        <Box color="#484848">
          <Text pt="3">
            This page is going to be a collection of “internet things” that I
            feel are exceptional and want to save for future reference. These
            "internet things" are going to range from personal websites I
            admire, people who I believe are worth following, books I believe
            are worth reading, podcasts that deserve a listen, blogs worth
            reading, musings, and who knows what else.
          </Text>
        </Box>
        <Things />
      </Box>
    </Box>
  </Container>
);

export default Resume;
