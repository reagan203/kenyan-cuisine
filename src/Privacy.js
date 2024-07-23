import React from 'react';
import { Box, Container, Heading, Text, VStack, Divider } from '@chakra-ui/react';

const Privacy = () => {
  return (
    <Box bg="gray.50" minH="100vh" fontFamily="Arial, sans-serif" py={8}>
      <Container maxW="container.md" bg="white" p={6} borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="black">
          Privacy Policy
        </Heading>
        
        <VStack spacing={6} align="start">
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              1. Introduction
            </Heading>
            <Text mt={2} color="gray.600">
              Welcome to our Privacy Policy. Your privacy is critically important to us. This Privacy Policy describes how we collect, use, and share your personal information.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              2. Information We Collect
            </Heading>
            <Text mt={2} color="gray.600">
              We collect various types of information in connection with your use of our services, including:
              <ul>
                <li>Personal Information: Name, email address, phone number, etc.</li>
                <li>Usage Data: Information on how you use our services.</li>
                <li>Device Information: Information about the device you use to access our services.</li>
              </ul>
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              3. How We Use Your Information
            </Heading>
            <Text mt={2} color="gray.600">
              We use the information we collect for various purposes, including:
              <ul>
                <li>To provide and maintain our services.</li>
                <li>To improve, personalize, and expand our services.</li>
                <li>To communicate with you, including sending updates and promotional materials.</li>
                <li>To monitor and analyze usage and trends.</li>
              </ul>
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              4. Cookies and Tracking Technologies
            </Heading>
            <Text mt={2} color="gray.600">
              We use cookies and similar tracking technologies to track the activity on our service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              5. Third-Party Services
            </Heading>
            <Text mt={2} color="gray.600">
              We may use third-party services to help us provide our services. These third parties may have access to your personal information but are obligated to use it only for the purpose of providing their services to us.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              6. Data Security
            </Heading>
            <Text mt={2} color="gray.600">
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or method of electronic storage is 100% secure.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              7. Your Choices
            </Heading>
            <Text mt={2} color="gray.600">
              You have choices regarding the information we collect and how it is used. You can update your preferences or contact us to request the deletion of your data.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              8. Children’s Privacy
            </Heading>
            <Text mt={2} color="gray.600">
              Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              9. Changes to This Privacy Policy
            </Heading>
            <Text mt={2} color="gray.600">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.
            </Text>
          </Box>
          
          <Divider />
          
          <Box>
            <Heading as="h2" size="lg" color="gray.800">
              10. Contact Us
            </Heading>
            <Text mt={2} color="gray.600">
              If you have any questions about this Privacy Policy, please contact us at:
              <ul>
                <li>Email: privacy@example.com</li>
                <li>Address: 123 Privacy St, City, Country</li>
              </ul>
            </Text>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Privacy;
