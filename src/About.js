import React from 'react';
import { Box, Heading, Text, VStack, Image, Divider, Grid, GridItem, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <Box bg="gray.50" minH="100vh" py={10} px={6}>
      <Box maxW="container.lg" mx="auto" bg="white" p={8} borderRadius="md" boxShadow="lg">
        <Heading as="h1" size="2xl" mb={6} textAlign="center" color="teal.600">
          About Us
        </Heading>
        <Flex direction={{ base: 'column', md: 'row' }} align="center" mb={8}>
          <Image 
            src="https://www.restaurantinteriordesign.eu/wp-content/uploads/2022/01/Elegant-Restaurant-decor-by-Studio-UNLTD.jpg" 
            alt="Restaurant Interior" 
            borderRadius="md" 
            boxShadow="md" 
            objectFit="cover" 
            boxSize={{ base: 'full', md: '50%' }} 
            mr={{ md: 6 }}
          />
          <VStack spacing={4} align="start" flex="1" >
            <Text fontSize="lg" lineHeight="tall" color= "black">
              Welcome to our restaurant, where culinary excellence meets unparalleled hospitality. We take pride in crafting dishes that celebrate the rich and diverse flavors of our culture. Each meal is meticulously prepared with fresh, high-quality ingredients to ensure an exceptional dining experience.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color= "black">
              Our team of dedicated chefs and staff are passionate about providing you with a warm and welcoming atmosphere. From the moment you step through our doors, we strive to make every visit memorable with our attentive service and delectable dishes.
            </Text>
            <Text fontSize="lg" lineHeight="tall" color= "black">
              Whether you're here for a casual meal with family or a special celebration, we are committed to making every occasion extraordinary. Thank you for choosing us as your dining destination. We look forward to serving you!
            </Text>
          </VStack>
        </Flex>
        <Divider my={8} />
        <Heading as="h2" size="xl" mb={4} textAlign="center" color="teal.500">
          Our Values
        </Heading>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
          <GridItem>
            <Box p={6} borderRadius="md" boxShadow="md" bg="teal.100">
              <Heading as="h3" size="lg" mb={3} color="teal.600">Quality</Heading>
              <Text fontSize="md" lineHeight="short">
                We are committed to using only the freshest ingredients and maintaining the highest standards of quality in every dish we serve.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={6} borderRadius="md" boxShadow="md" bg="teal.100">
              <Heading as="h3" size="lg" mb={3} color="teal.600">Hospitality</Heading>
              <Text fontSize="md" lineHeight="short">
                Our staff is dedicated to providing exceptional service, ensuring that every guest feels valued and well-cared for during their visit.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={6} borderRadius="md" boxShadow="md" bg="teal.100">
              <Heading as="h3" size="lg" mb={3} color="teal.600">Integrity</Heading>
              <Text fontSize="md" lineHeight="short">
                We uphold the highest ethical standards in all aspects of our business, from sourcing ingredients to serving our guests with honesty and respect.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={6} borderRadius="md" boxShadow="md" bg="teal.100">
              <Heading as="h3" size="lg" mb={3} color="teal.600">Sustainability</Heading>
              <Text fontSize="md" lineHeight="short">
                We are dedicated to reducing our environmental footprint by adopting sustainable practices and supporting local producers.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default About;
