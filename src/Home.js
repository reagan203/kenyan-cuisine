import React, { useState } from 'react';
import {
  Box,
  Heading,
  Text,
  Image,
  SimpleGrid,
  Container,
  Input,
  InputGroup,
  InputLeftElement,
  Card,
  CardBody,
  IconButton,
  Flex,
  Select,
  Button,
  Spinner,
} from '@chakra-ui/react';
import { MdClose, MdStar, MdAttachMoney, MdDescription, MdSearch, MdAddShoppingCart } from 'react-icons/md';

const meals = [
  { id: 1, name: 'Nyama Choma', price: 10, description: 'Grilled meat', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Nyama_Choma_%28BBQ_the_Kenyan_way%29.jpg/1200px-Nyama_Choma_%28BBQ_the_Kenyan_way%29.jpg', rating: 4.5 },
  { id: 2, name: 'Ugali', price: 5, description: 'Cornmeal porridge', img: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Ugali_%26_Sukuma_Wiki.jpg', rating: 4.0 },
  { id: 3, name: 'Sukuma Wiki', price: 7, description: 'Collard greens', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTL_fQ2V5HBb6zKAAXKJVap2GkWjf5BMjsaA&s', rating: 3.5 },
  { id: 4, name: 'Pilau', price: 15, description: 'Rice mixed with spiced meat', img: 'https://static.750g.com/images/360-240/a5f97bfb849a863b19973b56a32459f7/ee58cc6c-81d0-4633-9f84-e835a4a1f7cf.jpeg', rating: 3.8 },
  { id: 5, name: 'Mandazi', price: 10, description: 'Fried bread', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8MaaDI5zx79sOVjI3OHvhN5wf5pJvPB4jvLS06R4Bg75PlU_R18d9bDXw_dhqdqq3Wo&usqp=CAU', rating: 4.5 },
  { id: 6, name: 'Mokimo', price: 30, description: 'Mashed potatoes', img: 'https://lh3.googleusercontent.com/YmXrdZuvsGimestvOEJl5MQY1oe7rk4lvlWwKpmlmWpdPcahWalW2hHuFy__Zm7Bcg3O81LMIf4VelFxjgxgN4uXpPhNV1wcxkwvsLFf', rating: 2.9 },
  { id: 7, name: 'Samosa', price: 8, description: 'Spiced pastry with meat or vegetables', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjvYe10xwM-YcKB5jf_T0pPYJDFhBuhQCw3A&s', rating: 4.2 },
  { id: 8, name: 'Mutura', price: 12, description: 'Kenyan sausage', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcPg-DcSYHREs57rTq3NHxw71ZT-fIfepHTQ&s', rating: 4.0 },
  { id: 9, name: 'Bhajia', price: 6, description: 'Fried potato slices', img: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiiQAEzLGk5guK7FeUIeWFspcW7I9vnM1_70MepWLz0o_tdabz5FAchijsjRH1-z5slT-T4W0leiSLqu2IzQPjG7WG4eEBtZ-uUZTc7zAEMd0HX6zJdeigPQq58pgDWINCugLJr9NkHz2M/s1600/DSC_5761.JPG', rating: 4.1 },
  { id: 10, name: 'Githeri', price: 9, description: 'Mixed beans and maize', img: 'https://www.tasteatlas.com/Images/Dishes/90200d42c5254588a0ec27df96271d15.jpg', rating: 3.9 },
  { id: 11, name: 'Omena', price: 7, description: 'Dried fish stew', img: 'https://victormatara.com/wp-content/uploads/2022/01/Nutritional-Benefits-Of-Eating-Omena.jpeg', rating: 3.8 },
  { id: 12, name: 'Matoke', price: 10, description: 'Stewed green bananas', img: 'https://eatwellabi.com/wp-content/uploads/2020/10/Matoke-11-1.jpg', rating: 4.3 },
  { id: 13, name: 'Chips', price: 5, description: 'French fries', img: 'https://www.coles.com.au/content/dam/coles/cusp/pvx/Mar23-PVX-Easter-03_Chips-976x549.jpg', rating: 4.4 },
  { id: 14, name: 'Chapati', price: 4, description: 'Flatbread', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA2-YDIY1jUliMzhfF29ia0Lrlua-hV-1mog&s', rating: 4.6 },
  { id: 15, name: 'Beef Stew', price: 12, description: 'Stewed beef with vegetables', img: 'https://www.cookingclassy.com/wp-content/uploads/2021/10/beef-stew-30-500x375.jpg', rating: 4.2 },
  { id: 16, name: 'Matumbo', price: 11, description: 'Beef tripe stew', img: 'https://i.ytimg.com/vi/nvYsoJlHX1Y/sddefault.jpg', rating: 3.7 },
  { id: 17, name: 'Chicken', price: 15, description: 'Grilled chicken', img: 'https://hips.hearstapps.com/hmg-prod/images/grilled-chicken-breast-index-6626cdb057b5b.jpg?crop=0.889166406493912xw:1xh;center,top&resize=1200:*', rating: 4.5 },
  { id: 18, name: 'Fish', price: 14, description: 'Fried or grilled fish', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5AvWszY5ADwBHKpnYuB8sxyyazAjsVZc7Zg&s', rating: 4.4 },
  { id: 19, name: 'Sausage', price: 9, description: 'Grilled sausage', img: 'https://blog.thermoworks.com/wp-content/uploads/2023/08/MHot-Link-Sausage_b_IMG_0895-scaled.jpg', rating: 4.1 },
  { id: 20, name: 'Kachumbari', price: 6, description: 'Tomato and onion salad', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRilAgiqAtLU8c_wJFqigvEIinc9lBXX0wgcA&s', rating: 4.2 }
];


const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterPrice, setFilterPrice] = useState('');
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [loading] = useState(false);

  const handleSearch = (e) => setSearchQuery(e.target.value.toLowerCase());
  const handleFilter = (e) => setFilterPrice(e.target.value);

  const filteredMeals = meals
    .filter((meal) => meal.name.toLowerCase().includes(searchQuery))
    .filter((meal) => (filterPrice ? meal.price <= filterPrice : true));

  return (
    <Box bg="linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" minH="100vh" fontFamily="serif">
      <Container maxW="container.lg" py={10}>
        <Heading as="h1" size="2xl" mb={6} fontFamily="Georgia, serif" textAlign="left" color="black">
          Our Meals
        </Heading>

        <Flex mb={6} justify="space-between" align="center" color="black">
          <InputGroup maxW="600px">
            <InputLeftElement pointerEvents="none">
              <MdSearch color="gray.300" />
            </InputLeftElement>
            <Input
              placeholder="Search meals..."
              color="black"
              onChange={handleSearch}
              value={searchQuery}
              borderRadius="md"
              variant="filled"
              bg="white"
              _focus={{
                boxShadow: '0 0 0 3px rgba(0, 0, 0, 0.2)',
                borderColor: 'teal.500',
              }}
            />
          </InputGroup>

          <Select placeholder="Filter by price" onChange={handleFilter} value={filterPrice} maxW="200px" borderRadius="md">
            <option value="10">Below $10</option>
            <option value="20">Below $20</option>
            <option value="30">Below $30</option>
          </Select>
        </Flex>

        {loading ? (
          <Flex justifyContent="center" alignItems="center" height="200px">
            <Spinner size="xl" color="teal.500" />
          </Flex>
        ) : (
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {filteredMeals.map((meal) => (
              <Card
                key={meal.id}
                w="100%"
                boxShadow="md"
                borderRadius="md"
                overflow="hidden"
                bg="white"
                onClick={() => setSelectedMeal(meal)}
                cursor="pointer"
                transition="transform 0.3s"
                _hover={{ transform: 'scale(1.05)' }}
              >
                <Image src={meal.img} alt={meal.name} />
                <CardBody>
                  <Heading size="md" fontFamily="Georgia, serif" color="black">
                    {meal.name}
                  </Heading>
                  <Flex align="center" color="black" mt={2}>
                    <MdAttachMoney />
                    <Text ml={1} fontSize="lg">
                      ${meal.price}
                    </Text>
                  </Flex>
                  <Flex align="center" color="gray.600" mt={2}>
                    <MdDescription />
                    <Text ml={1} fontSize="sm">
                      {meal.description}
                    </Text>
                  </Flex>
                  <Flex align="center" mt={2}>
                    {Array(5)
                      .fill('')
                      .map((_, i) => (
                        <MdStar
                          key={i}
                          color={i < meal.rating ? 'teal.500' : 'gray.300'}
                        />
                      ))}
                  </Flex>
                  <Button
                    mt={4}
                    colorScheme="teal"
                    leftIcon={<MdAddShoppingCart />}
                    onClick={() => alert('Added to cart')}
                  >
                    Add to Cart
                  </Button>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        )}

        {selectedMeal && (
          <Box
            position="fixed"
            top="0"
            left="0"
            width="100vw"
            height="100vh"
            bg="rgba(0, 0, 0, 0.8)"
            display="flex"
            justifyContent="center"
            alignItems="center"
            zIndex="1000"
          >
            <Card w="80%" maxW="600px" bg="white" boxShadow="lg" borderRadius="md">
              <IconButton
                icon={<MdClose />}
                onClick={() => setSelectedMeal(null)}
                position="absolute"
                top="10px"
                right="10px"
                colorScheme="red"
                size="sm"
              />
              <Image src={selectedMeal.img} alt={selectedMeal.name} borderRadius="md" />
              <CardBody>
                <Heading size="lg" fontFamily="Georgia, serif" color="black">
                  {selectedMeal.name}
                </Heading>
                <Flex align="center" color="black" mt={2}>
                  <MdAttachMoney />
                  <Text ml={1} fontSize="lg">
                    ${selectedMeal.price}
                  </Text>
                </Flex>
                <Flex align="center" color="gray.600" mt={2}>
                  <MdDescription />
                  <Text ml={1} fontSize="md">
                    {selectedMeal.description}
                  </Text>
                </Flex>
                <Flex align="center" mt={2}>
                  {Array(5)
                    .fill('')
                    .map((_, i) => (
                      <MdStar
                        key={i}
                        color={i < selectedMeal.rating ? 'teal.500' : 'gray.300'}
                      />
                    ))}
                </Flex>
              </CardBody>
            </Card>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Home;
