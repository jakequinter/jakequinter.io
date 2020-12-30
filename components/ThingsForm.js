import React from 'react';
import Head from 'next/head';
import { useForm } from 'react-hook-form';

import { createThing } from '@/lib/db';
import { useAuth } from '@/lib/auth';

const ThingsForm = () => {
  const auth = useAuth();
  const { handleSubmit, register } = useForm();

  const onCreateThing = ({ title, type, description, link }) => {
    const newThing = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      title,
      type,
      description,
      link
    };

    createThing(newThing);
  };

  return (
    <div className="flex-row justify-between items-center">
      <Head>
        <title>Jake Quinter | Things</title>
      </Head>
      {/* <Box as="form" onSubmit={handleSubmit(onCreateThing)}>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            id="site-input"
            placeholder="Brian Lovin"
            name="title"
            ref={register({
              required: 'Required'
            })}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Type</FormLabel>
          <Select
            id="link-input"
            placeholder="Select type"
            name="type"
            ref={register({
              required: 'Required'
            })}
          >
            <option value="personal">Personal</option>
            <option value="people">People</option>
            <option value="book">Book</option>
            <option value="podcast">Podcast</option>
          </Select>
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Input
            id="link-input"
            placeholder="Naval is a must follow."
            name="description"
            ref={register({
              required: 'Required'
            })}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Link</FormLabel>
          <Input
            id="link-input"
            placeholder="https://websiteurl.com/"
            name="link"
            ref={register({
              required: 'Required'
            })}
          />
          <Button
            id="create-site-button"
            // backgroundColor="#99FFFE"
            color="#194D4C"
            fontWeight="medium"
            px={8}
            py={4}
            bg="gray.200"
            mt={4}
            float="right"
            fontWeight="bold"
            _hover={{ bg: 'gray.300' }}
            onClick={() => auth.signout()}
          >
            Sign out
          </Button>
          <Button
            id="create-site-button"
            type="submit"
            color="#194D4C"
            fontWeight="medium"
            type="submit"
            px={8}
            py={4}
            bg="gray.200"
            mt={4}
            mr={4}
            float="right"
            fontWeight="bold"
            _hover={{ bg: 'gray.300' }}
          >
            Add
          </Button>
        </FormControl>
      </Box> */}
    </div>
  );
};

export default ThingsForm;
