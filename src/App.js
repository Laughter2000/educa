import React from 'react';
import {
  ChakraProvider,
  Flex,
  Image,
  Link,
  Icon,
  Avatar,
  Text,
  Progress,
} from '@chakra-ui/react';

import {
  FaChevronDown,
  FaRegBell,
  FaWarehouse,
  FaAward,
  FaForumbee,
  FaBook,
  FaChalkboardTeacher,
} from 'react-icons/fa';

import logo from './logo_file.png';

const App = () => (
  <ChakraProvider resetCSS>
    <Flex justifyContent="space-between">
      <Flex
        flexDirection="column"
        width="20%"
        height="100vmin"
        backgroundColor="gray.200"
        borderRadius="10px"
        m={0}
        p={4}
      >
        <Image height="50px" mt={8} mb={16} src={logo} alt="SITE LOGO" />
        <Flex flexDirection="column">
          <Flex
            alignItems="center"
            justifyContent="flex-start"
            width="100%"
            mt={4}
            mb={4}
            ml={4}
          >
            <Icon as={FaWarehouse} color="gray" fontSize="2em" />
            <Link ml={2} fontSize="lg" fontWeight="bold" textAlign="center">
              HOME
            </Link>
          </Flex>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            ml={4}
            mt={4}
            mb={4}
          >
            <Icon as={FaChalkboardTeacher} color="gray" fontSize="2em" />
            <Link ml={2} fontSize="lg" fontWeight="bold" textAlign="center">
              DASHBOARD
            </Link>
          </Flex>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            ml={4}
            mt={4}
            mb={4}
          >
            <Icon as={FaBook} color="gray" fontSize="2em" />
            <Link ml={2} fontSize="lg" fontWeight="bold" textAlign="center">
              MY COURSES
            </Link>
          </Flex>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            ml={4}
            mt={4}
            mb={4}
          >
            <Icon as={FaAward} color="gray" fontSize="2em" />
            <Link ml={2} fontSize="lg" fontWeight="bold" textAlign="center">
              ACHIEVEMENTS
            </Link>
          </Flex>
          <Flex
            justifyContent="flex-start"
            alignItems="center"
            ml={4}
            mt={4}
            mb={8}
          >
            <Icon as={FaForumbee} color="gray" fontSize="2em" />
            <Link ml={2} fontSize="lg" fontWeight="bold" textAlign="center">
              FORUM
            </Link>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width="80%"
        borderRadius="10px"
        justifyContent="flex-start"
        flexDirection="column"
        mr={8}
      >
        <Flex
          height={1}
          justifyContent="flex-end"
          width="100%"
          alignItems="center"
          mt={14}
          mr={12}
          mb={12}
        >
          <Icon as={FaRegBell} color="gray" fontSize="1em" mr={4} />
          <Text ml={1} mr={1}>
            Isaac Amunenwa
          </Text>
          <Avatar size="sm" ml={1} mr={1} />
          <Icon as={FaChevronDown} color="gray" fontSize="1em" />
        </Flex>
        <Flex height="40%" mb={4} justifyContent="space-between" p={4}>
          <Flex
            alignItems="center"
            width="30%"
            flexDirection="column"
            backgroundColor="#57BAAB"
            borderRadius="5px"
            justifyContent="center"
            pt={2}
          >
            <Flex justifyContent="space-between" mb={4}>
              <Text textAlign="center" fontSize="medium" fontWeight="bold">
                UPCOMING LESSONS
              </Text>
              <Link ml={12}>See all</Link>
            </Flex>

            <Flex
              borderRadius="5px"
              backgroundColor="white"
              mb={4}
              width="90%"
              justifyContent="space-between"
              p={2}
            >
              <Text mr={4}>#1</Text>
              <Avatar size="sm" />
              <Text ml={4} width="60%">
                Isaac Joe
              </Text>
              <Text ml={4}>4000pts.</Text>
            </Flex>
          </Flex>

          <Flex
            alignItems="center"
            width="30%"
            flexDirection="column"
            backgroundColor="#FC5868"
            borderRadius="5px"
            justifyContent="center"
            pt={2}
          >
            <Flex justifyContent="space-between" mb={4}>
              <Text textAlign="center" fontSize="medium" fontWeight="bold">
                TASK TO DO
              </Text>
              <Link ml={12}>See all</Link>
            </Flex>

            <Flex
              borderRadius="5px"
              backgroundColor="white"
              mb={4}
              width="90%"
              justifyContent="space-between"
              p={2}
            >
              <Text mr={4}>#1</Text>
              <Avatar size="sm" />
              <Text ml={4} width="60%">
                Isaac Joe
              </Text>
              <Text ml={4}>4000pts.</Text>
            </Flex>
          </Flex>

          <Flex
            alignItems="center"
            width="30%"
            flexDirection="column"
            backgroundColor="gray.100"
            borderRadius="5px"
            justifyContent="center"
            pt={2}
          >
            <Flex justifyContent="space-between" mb={4}>
              <Text textAlign="center" fontSize="medium" fontWeight="bold">
                LEADERBOARD
              </Text>
              <Link ml={12}>See all</Link>
            </Flex>
            <Flex
              borderRadius="5px"
              backgroundColor="white"
              mb={4}
              width="90%"
              justifyContent="space-between"
              p={2}
            >
              <Text mr={4}>#1</Text>
              <Avatar size="sm" />
              <Text ml={4} width="60%">
                Isaac Joe
              </Text>
              <Text ml={4}>4000pts.</Text>
            </Flex>
            <Flex
              borderRadius="5px"
              backgroundColor="white"
              width="90%"
              justifyContent="space-between"
              p={2}
            >
              <Text mr={4}>#2</Text>
              <Avatar size="sm" />
              <Text ml={4} width="60%">
                John Doe
              </Text>
              <Text ml={4}>3000pts.</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex height="50%">
          <Flex
            ml={4}
            width="63%"
            height="100%"
            flexDirection="column"
            backgroundColor="gray.100"
            borderRadius="5px"
          >
            <Flex justifyContent="space-between" m={4} mb={8}>
              <Text textAlign="center" fontSize="medium" fontWeight="bold">
                My Courses
              </Text>
              <Link ml={12}>See all</Link>
            </Flex>

            <Flex width="100%" justifyContent="space-between">
              <Flex
                alignItems="center"
                width="45%"
                flexDirection="column"
                backgroundColor="#FC5868"
                borderRadius="5px"
                justifyContent="flex-end"
                pt={2}
                ml={4}
              >
                <Flex justifyContent="flex-end" mb={2}>
                  <Text
                    textAlign="right"
                    fontSize="md"
                    fontWeight="bold"
                    mb={2}
                  >
                    Maths
                  </Text>
                </Flex>

                <Flex justifyContent="flex-end" mb={2}>
                  <Text textAlign="right" fontSize="lg" fontWeight="bold">
                    52 Lessons
                  </Text>
                </Flex>

                <Flex>
                  <Progress colorScheme="pink" size="lg" value={20} />
                </Flex>
              </Flex>

              <Flex
                alignItems="center"
                width="45%"
                flexDirection="column"
                backgroundColor="#FC5868"
                borderRadius="5px"
                justifyContent="center"
                pt={2}
                mr={4}
              >
                <Flex justifyContent="space-between" mb={4}>
                  <Text textAlign="center">TASK TO DO</Text>
                  <Link ml={12}>See all</Link>
                </Flex>

                <Flex
                  borderRadius="5px"
                  backgroundColor="white"
                  mb={4}
                  width="90%"
                  justifyContent="space-between"
                  p={2}
                >
                  <Text mr={4}>#1</Text>
                  <Avatar size="sm" />
                  <Text ml={4} width="60%">
                    Isaac Joe
                  </Text>
                  <Text ml={4}>4000pts.</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            ml={12}
            width="30%"
            backgroundColor="#57BAAB"
            borderRadius="5px"
          >
            <Flex justifyContent="space-between" m={4} mb={8}>
              <Text textAlign="left" fontSize="medium" fontWeight="bold">
                HomeWork Progress
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  </ChakraProvider>
);

export default App;
