import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Link,
  Spacer,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
} from '@chakra-ui/react';
import { MdMenu,  MdHome, MdInfo, MdContactMail, MdPrivacyTip, MdGppGood, MdHelp } from 'react-icons/md';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="header" bg="teal.500" color="white" p={4}>
      <Flex align="center">
        <IconButton
          icon={<MdMenu />}
          onClick={onOpen}
          aria-label="Open menu"
          display={{ base: 'block', md: 'none' }}
        />
        <Heading size="lg">Restaurant App</Heading>
        <Spacer />
        <HStack spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Link href="/home" color="white"><MdHome /> Home</Link>
          <Link href="/about" color="white"><MdInfo /> About Us</Link>
          <Link href="/contact" color="white"><MdContactMail /> Contact Us</Link>
          <Link href="/privacy" color="white"><MdPrivacyTip /> Privacy Policy</Link>
          <Link href="/faq" color="white"><MdHelp /> FAQ</Link>
        </HStack>
      </Flex>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Restaurant App</DrawerHeader>
          <DrawerBody>
            <Flex direction="column" gap={4}>
              <Link href="/" onClick={onClose}><MdHome /> Home</Link>
              <Link href="/about" onClick={onClose}><MdInfo /> About Us</Link>
              <Link href="/contact" onClick={onClose}><MdContactMail /> Contact Us</Link>
              <Link href="/privacy" onClick={onClose}><MdPrivacyTip /> Privacy Policy</Link>
              <Link href="/terms" onClick={onClose}><MdGppGood /> Terms of Service</Link>
              <Link href="/faq" onClick={onClose}><MdHelp /> FAQ</Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
