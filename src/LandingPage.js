import React from 'react';
import { Box, Heading, Text, Image, SimpleGrid, Container, Card, CardBody, Flex, Button, Icon, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import { MdRestaurant, MdLocationOn, MdPhone, MdStar, MdEmail, MdAccessTime } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const LandingPage = () => {
  const cardColors = ['#f0e68c', '#ffa07a', '#98fb98', '#dda0dd'];

  return (
    <Box
      bg="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
      minH="100vh"
      fontFamily="serif"
    >
      <Box as="header" bg="teal.500" color="white" py={4}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" textAlign="left" fontFamily="Georgia, serif">
            Kenyan Cuisine Restaurant
          </Heading>
        </Container>
      </Box>

      <Container maxW="container.lg" py={10}>
        <Heading as="h2" size="lg" mb={4} fontFamily="Georgia, serif" color="black" textAlign="left">
          Discover the Best Food in Kenya
        </Heading>
        <Text fontSize="xl" mb={8} color="black" textAlign="left">
          We are a restaurant dedicated to serving only the finest Kenyan cuisine meals. Our chefs meticulously prepare each dish using the freshest ingredients and traditional recipes that have been passed down through generations. Experience the rich and diverse flavors that make our food culture so unique. From the succulent Nyama Choma to the hearty Ugali, each bite promises a taste of Kenya's culinary heritage. Our friendly staff and cozy atmosphere make every visit memorable. Whether you are a local or a visitor, we invite you to join us and discover why we pride ourselves on being the best in the world at what we do. Come and taste the essence of Kenya!
        </Text>

        <Flex justify="space-between" mb={10}>
          <Box flexBasis="200px" mr={5}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
            >
              <Image src="https://as2.ftcdn.net/v2/jpg/04/61/53/45/1000_F_461534551_uQP1Y9O50bsaUtLRcHEni7aL8fgu4i7p.jpg" alt="Kenyan Dish 1" />
              <Image src="https://sheenaskitchen.com/wp-content/uploads/2016/03/chicken-stew-Kenyan-Cuisine.jpg" alt="Kenyan Dish 2" />
              <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG0TDTzcm-iYl3W3rQXIcE7HORWXMaijhihQ&s" alt="Kenyan Dish 3" />
            </Carousel>
          </Box>

          <Box flexBasis="200px" ml={5}>
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={3000}
            >
              <Image src="https://img.atlasobscura.com/AfSoIfvjqVU_rjGbElSVDR316lGc1_nK3-2uX_wq8fw/rt:fit/w:1280/q:81/sm:1/scp:1/ar:1/aHR0cHM6Ly9hdGxh/cy1kZXYuczMuYW1h/em9uYXdzLmNvbS91/cGxvYWRzL2Fzc2V0/cy8zOGYyZWQ1NTU5/NWY1MTJiOTBfQ2hp/Y2tlbjIuanBn.jpg" alt="Kenyan Dish 4" />
              <Image src="https://travelmoran.com/wp-content/uploads/2021/03/img_7122-1024x641.jpg" alt="Kenyan Dish 5" />
              <Image src="https://www.malindikenya.net/images/uploads/articoli/1167_l.jpg" alt="Kenyan Dish 6" />
            </Carousel>
          </Box>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 1, lg: 1 }} spacing={10}>
          {[
            {
              img: "https://media.istockphoto.com/id/1131384141/photo/sharing-platter-of-a-traditional-kenyan-dish-nyama-choma-and-accompaniments-of-kachumbari.jpg?s=612x612&w=0&k=20&c=3CcuhHOBgw5tXBtoK6hpWJaHzT1hgbPSCkjc9fkh0bE=",
              text: "Our restaurant offers an authentic Kenyan dining experience, where you can enjoy traditional dishes in a warm and welcoming atmosphere.",
              color: cardColors[0],
              icon: MdRestaurant,
              textLeft: false
            },
            {
              img: "https://www.willflyforfood.net/wp-content/uploads/2021/06/kenyan-food-ugali.jpg.webp",
              text: "Visit us at 123 Nairobi Street, Nairobi, Kenya. Enjoy the vibrant flavors of Kenya at our centrally located restaurant.",
              color: cardColors[1],
              icon: MdLocationOn,
              textLeft: true
            },
            {
              img: "https://www.willflyforfood.net/wp-content/uploads/2021/06/kenyan-food-irio.jpg.webp",
              text: "Contact us at (123) 456-7890 or email us at info@kenyancuisine.com for reservations and inquiries.",
              color: cardColors[2],
              icon: MdPhone,
              textLeft: false
            },
            {
              img: "https://www.willflyforfood.net/wp-content/uploads/2021/06/kenyan-food-beef-stew.jpg.webp",
              text: "Our commitment to quality and authenticity sets us apart. We source local ingredients and follow traditional recipes to bring you the best of Kenyan cuisine.",
              color: cardColors[3],
              icon: MdStar,
              textLeft: true
            },
          ].map((card, index) => (
            <Card key={index} w="100%" boxShadow="md" borderRadius="md" bg={card.color} _hover={{ transform: 'scale(1.05)', transition: '0.3s' }}>
              <CardBody>
                <Flex align="center">
                  {card.textLeft && (
                    <Box flexBasis="50%" pr={4}>
                      <Icon as={card.icon} w={8} h={8} color="teal.500" mb={2} />
                      <Text fontSize="lg" fontFamily="Georgia, serif" color="black">
                        {card.text}
                      </Text>
                      <Button as={Link} to="/home" mt={4} colorScheme="teal" variant="solid">Home</Button>
                    </Box>
                  )}
                  <Box flexBasis="50%">
                    <Image src={card.img} alt="Card Image" borderRadius="md" />
                  </Box>
                  {!card.textLeft && (
                    <Box flexBasis="50%" pl={4}>
                      <Icon as={card.icon} w={8} h={8} color="teal.500" mb={2} />
                      <Text fontSize="lg" fontFamily="Georgia, serif" color="black">
                        {card.text}
                      </Text>
                      <Button as={Link} to="/home" mt={4} colorScheme="teal" variant="solid">Home</Button>
                    </Box>
                  )}
                </Flex>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>

        {/* Newsletter Subscription Section */}
        <Box my={10} textAlign="center">
          <Heading as="h3" size="lg" mb={4} fontFamily="Georgia, serif" color="black">
            Subscribe to Our Newsletter
          </Heading>
          <Text fontSize="lg" mb={4} color="black">
            Stay updated with our latest news and offers!
          </Text>
          <InputGroup size="lg" maxW="500px" mx="auto">
            <Input
              pr="4.5rem"
              type="email"
              placeholder="Enter your email"
              borderRadius="md"
            />
            <InputRightElement width="4.5rem">
              <Button h="2.5rem" size="lg" colorScheme="teal">
                Subscribe
              </Button>
            </InputRightElement>
          </InputGroup>
        </Box>

        {/* Social Media Links */}
        <Flex justify="center" my={10}>
          <Button as="a" href="#" colorScheme="facebook" leftIcon={<FaFacebook />} m={2}>
            Facebook
          </Button>
          <Button as="a" href="#" colorScheme="twitter" leftIcon={<FaTwitter />} m={2}>
            Twitter
          </Button>
          <Button as="a" href="#" colorScheme="pink" leftIcon={<FaInstagram />} m={2}>
            Instagram
          </Button>
        </Flex>
      </Container>

      {/* Footer */}
      <Box as="footer" bg="teal.700" color="white" py={6}>
        <Container maxW="container.lg">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
            <Box>
              <Heading as="h4" size="md" mb={2}>
                Contact Us
              </Heading>
              <Flex align="center" mb={2}>
                <Icon as={MdPhone} mr={2} />
                <Text>(123) 456-7890</Text>
              </Flex>
              <Flex align="center" mb={2}>
                <Icon as={MdEmail} mr={2} />
                <Text>info@kenyancuisine.com</Text>
              </Flex>
              <Flex align="center">
                <Icon as={MdLocationOn} mr={2} />
                <Text>123 Nairobi Street, Nairobi, Kenya</Text>
              </Flex>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>
                Operating Hours
              </Heading>
              <Flex align="center" mb={2}>
                <Icon as={MdAccessTime} mr={2} />
                <Text>Mon - Fri: 8:00 AM - 10:00 PM</Text>
              </Flex>
              <Flex align="center">
                <Icon as={MdAccessTime} mr={2} />
                <Text>Sat - Sun: 9:00 AM - 11:00 PM</Text>
              </Flex>
            </Box>
            <Box>
              <Heading as="h4" size="md" mb={2}>
                Follow Us
              </Heading>
              <Flex>
                <Button as="a" href="#" colorScheme="facebook" leftIcon={<FaFacebook />} mr={2}>
                  Facebook
                </Button>
                <Button as="a" href="#" colorScheme="twitter" leftIcon={<FaTwitter />} mr={2}>
                  Twitter
                </Button>
                <Button as="a" href="#" colorScheme="pink" leftIcon={<FaInstagram />}>
                  Instagram
                </Button>
              </Flex>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage;
