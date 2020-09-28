import Head from 'next/head';
import {
  Box,
  Heading,
  Link,
  Flex,
  Icon,
  Divider,
  SimpleGrid,
  Text,
  List,
  ListItem,
  Stack
} from '@chakra-ui/core';

import Container from '@/components/Container';

const ResumeItem = ({ content, children }) => {
  return (
    <ListItem color="#484848">
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
    <Stack
      as="main"
      spacing={8}
      justifyContent="center"
      alignItems="flex-start"
      m="0 auto 2rem auto"
      maxWidth="2000px"
    >
      <Head>
        <title>Jake Quinter | Resume</title>
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
            Resume
          </Heading>
          <SimpleGrid columns={[1, 1, 2, 2]} spacing={5}>
            <Box color="#484848">
              <Text pt="2">
                I have posted the PDF version of my resumé here for your needs.
                Please feel free to view or download to your computer. Feel free
                to share with friends, businesses, colleagues or your workplace.
              </Text>
            </Box>
            <Box
              border="2px solid #e2e8f0"
              borderRadius="5px"
              width={['80%', '80%', '80%', '60%']}
              ml={{ xs: 'auto', sm: 'auto', md: 'auto', lg: 'auto' }}
              mr={{ xs: 'auto', sm: 'auto', md: 'auto', lg: '0' }}
            >
              <Heading
                textAlign="center"
                as="h5"
                size="md"
                pb="2"
                fontWeight="regular"
              >
                Downloads
              </Heading>
              <Link pl="1" href="/resume.pdf" color="#4970FB" isExternal>
                Resume (.pdf)
              </Link>
            </Box>
          </SimpleGrid>
        </Box>
        <Divider m="10" borderColor="#d8d8d8" />
        <Heading as="h3" size="lg" fontWeight="medium" color="#333" pb="5">
          Education
          <Divider borderColor="#000" color="#000" borderWidth="3px" />
        </Heading>
        <SimpleGrid columns={[2]} spacing={3}>
          <Box color="#484848">
            <Text fontWeight="medium" color="#333">
              Lakeland University
            </Text>
            <Text as="em">Bachelor of Science, Computer Science</Text>
          </Box>
          <Box color="#484848" textAlign="right">
            <Text>Sheboygan, WI</Text>
            <Text as="em">November, 2021</Text>
          </Box>
          <Box color="#484848">
            <Text fontWeight="medium" color="#333">
              Fox Valley Technical College
            </Text>
            <Text as="em">Associates Degree, Software Developer</Text>
          </Box>
          <Box color="#484848" textAlign="right">
            <Text>Appleton, WI</Text>
            <Text as="em">December, 2019</Text>
          </Box>
        </SimpleGrid>
        <Heading as="h3" size="lg" fontWeight="medium" color="#333" py="5">
          Experience
          <Divider borderColor="#000" color="#000" borderWidth="3px" />
        </Heading>
        <Flex justifyContent="space-between" mb="5">
          <Box color="#484848">
            <Text fontWeight="medium" color="#333">
              Thrivent
            </Text>
            <Text as="em">Software Developer</Text>
          </Box>
          <Box color="#484848" textAlign="right">
            <Text>Appleton, WI</Text>
            <Text as="em">March 2020 &ndash; present</Text>
          </Box>
        </Flex>
        <List>
          <ResumeItem content="Provide 24/7 support for over 280 applications" />
          <ResumeItem content="Responsible for building and updating company website" />
          <ResumeItem content="Write scripts to automate work processes using ASG-Zena" />
        </List>
        <Flex justifyContent="space-between" mb="5">
          <Box color="#484848">
            <Text fontWeight="medium" color="#333">
              Chipper Golf
            </Text>
            <Text as="em">Intern</Text>
          </Box>
          <Box color="#484848" textAlign="right">
            <Text>Remote</Text>
            <Text as="em">November 2019 &ndash; present</Text>
          </Box>
        </Flex>
        <List>
          <ResumeItem content="Discussed implementation strategies to determine best development methods" />
          <ResumeItem content="Worked with creator and lead engineer to improve and modify web application" />
          <ResumeItem content="Developed application code primarily using JavaScript and React" />
        </List>
        <Flex justifyContent="space-between" mb="5">
          <Box color="#484848">
            <Text fontWeight="medium" color="#333">
              IGEN
            </Text>
            <Text as="em">Software Developer</Text>
          </Box>
          <Box color="#484848" textAlign="right">
            <Text>Green Bay, WI</Text>
            <Text as="em">April 2019 &ndash; March 2020</Text>
          </Box>
        </Flex>
        <List>
          <ResumeItem content="Developed electronic filing applications to be used by clients nationwide using primarly Java and C#" />
          <ResumeItem content="Collaborated with a small team of developers to create an automated workflow for testing hundreds of eleconic files using TestComplete" />
          <ResumeItem content="Implemented and maintained our library of forms using MySQL" />
        </List>
        <Divider m="10" borderColor="#d8d8d8" />
        <Text color="#484848">
          If you would like to see projects that I am currently working on,
          please visit my{' '}
          <Link color="#4970FB" href="/about">
            about page
          </Link>
          .
        </Text>
      </Box>
    </Stack>
  </Container>
);

export default Resume;
