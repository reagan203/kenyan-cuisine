import React from 'react';
import { Box, Container, Heading, VStack, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';

const FAQ = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={8}>
      <Container maxW="container.md" bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="teal.600">
          Frequently Asked Questions
        </Heading>
        
        <VStack spacing={6} align="start">
          <Accordion allowToggle>
            <AccordionItem border="none">
              <AccordionButton _expanded={{ bg: 'teal.600', color: 'white' }} bg="teal.50" borderRadius="md" _hover={{ bg: 'teal.100' }}>
                <Box flex="1" textAlign="left" fontWeight="bold" color="teal.700">
                  What are your restaurant hours?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTopWidth="1px" borderColor="gray.200" color= "black">
                We are open from 11 AM to 10 PM, Monday through Sunday.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton _expanded={{ bg: 'teal.600', color: 'white' }} bg="teal.50" borderRadius="md" _hover={{ bg: 'teal.100' }}>
                <Box flex="1" textAlign="left" fontWeight="bold" color="teal.700">
                  Do you offer vegetarian options?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTopWidth="1px" borderColor="gray.200" color= "black">
                Yes, we offer a variety of vegetarian options. Please check our menu for details or ask our staff for recommendations.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton _expanded={{ bg: 'teal.600', color: 'white' }} bg="teal.50" borderRadius="md" _hover={{ bg: 'teal.100' }}>
                <Box flex="1" textAlign="left" fontWeight="bold" color="teal.700">
                  Can I make a reservation?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTopWidth="1px" borderColor="gray.200" color= "black">
                Yes, we accept reservations. You can make a reservation through our website or by calling us directly.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton _expanded={{ bg: 'teal.600', color: 'white' }} bg="teal.50" borderRadius="md" _hover={{ bg: 'teal.100' }}>
                <Box flex="1" textAlign="left" fontWeight="bold" color="teal.700">
                  Do you offer delivery or takeout?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTopWidth="1px" borderColor="gray.200" color= "black">
                We offer both delivery and takeout services. You can place your order online or by calling us.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton _expanded={{ bg: 'teal.600', color: 'white' }} bg="teal.50" borderRadius="md" _hover={{ bg: 'teal.100' }}>
                <Box flex="1" textAlign="left" fontWeight="bold" color="teal.700">
                  What is your policy on allergies and dietary restrictions?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTopWidth="1px" borderColor="gray.200" color= "black">
                We take allergies and dietary restrictions very seriously. Please inform our staff of any allergies or restrictions, and we will do our best to accommodate your needs.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem border="none">
              <AccordionButton _expanded={{ bg: 'teal.600', color: 'white' }} bg="teal.50" borderRadius="md" _hover={{ bg: 'teal.100' }}>
                <Box flex="1" textAlign="left" fontWeight="bold" color="teal.700">
                  Do you have a loyalty program?
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} borderTopWidth="1px" borderColor="gray.200" color= "black">
                Yes, we have a loyalty program. You can sign up on our website or ask our staff for more information on how to earn rewards.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </VStack>
      </Container>
    </Box>
  );
};

export default FAQ;
