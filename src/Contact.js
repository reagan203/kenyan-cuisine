import React from 'react';
import { Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, VStack } from '@chakra-ui/react';

const Contact = () => {
  return (
    <Box p={6}>
      <Heading as="h1" size="xl" mb={4}>Contact Us</Heading>
      <VStack spacing={4} align="start">
        <Text>If you have any questions, feel free to reach out to us using the form below.</Text>
        <FormControl>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="teal">Send</Button>
      </VStack>
    </Box>
  );
};

export default Contact;
