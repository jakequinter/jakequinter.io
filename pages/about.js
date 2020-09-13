import {
  Box,
  Heading,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Text
} from '@chakra-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAdobe,
  faHtml5,
  faJsSquare,
  faNode,
  faReact
} from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const About = () => (
  <Box margin="0 auto" width={{ sm: '70%', md: '50%' }}>
    <Box w="100%" mt="50px">
      <Heading as="h1" size="xl" color="#333">
        About Me
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 2 }} spacing={5}>
        <Box color="#484848">
          <Text pt="2">
            Hello! I’m Jake Quinter, a software developer based in Appleton, WI.
            Whether you stumbled upon my site or been here before, welcome!
          </Text>
          <Text pt="2">
            I grew up in a small town in central Wisconsin, where I spent my
            free time playing sports, hanging out with friends, and trying to
            find anything else to keep myself busy.
          </Text>
          <Text pt="2">
            After high school, I experimented with multiple things, including
            business and engineering school until I finally found something that
            I loved. For me, that was (you guessed it) computers!
          </Text>
        </Box>
        <Box
          ml={{ sm: 'auto', md: 'auto', lg: 'auto' }}
          mr={{ sm: 'auto', md: 'auto', lg: '0' }}
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
    <Box w="100%" mt="50px">
      <Heading as="h3" size="lg">
        Technologies I'm Interested In
      </Heading>
      <SimpleGrid columns={{ sm: 2, md: 2, lg: 3 }} spacing={5}>
        <Box color="#484848">
          <List py="3" spacing={3}>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              JavaScript <FontAwesomeIcon icon={faJsSquare} />
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              React <FontAwesomeIcon icon={faReact} />
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              Next.js <FontAwesomeIcon icon={faCode} />
            </ListItem>
          </List>
        </Box>
        <Box color="#484848" ml="auto" mr="auto">
          <List py="3" spacing={3}>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              Node.js <FontAwesomeIcon icon={faNode} />
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              HTML & CSS <FontAwesomeIcon icon={faHtml5} />
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              Design <FontAwesomeIcon icon={faAdobe} />
            </ListItem>
          </List>
        </Box>
        <Box color="#484848" ml="auto">
          <List py="3" spacing={3}>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              Test
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              React
            </ListItem>
            <ListItem>
              <ListIcon icon="chevron-right" color="black.500" />
              Next.js
            </ListItem>
          </List>
        </Box>
      </SimpleGrid>
    </Box>
    <Box w="100%" mt="50px">
      <Heading as="h3" size="lg">
        What I'm Working On
      </Heading>
    </Box>
  </Box>
);

export default About;
