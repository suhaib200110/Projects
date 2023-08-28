import React from "react";
import {
  Icon,
  Button,
  Flex,
  ChakraProvider,
  Heading,
  Text,
  Box,
  HStack,
} from "@chakra-ui/react";
import checkMarkIcon from "./icons/checkMarkIcon";
export default function Pricing() {
  return (
    <>
      {/* Container box */}
      <Box
        mx={"auto"}
        my={"-184"}
        maxW={"900px"}
        borderRadius={"12px"}
        overflow={"hidden"}
        bg="white"
        mb='20px'
        boxShadow={'0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04);'}
      >
        <Flex>
          {/* left box */}
          <Box bg="#b69ce9" p="30px"  textAlign={"center"}>
            <Text fontSize={"24px"} fontWeight={"bold"}>
              Premium PRO
            </Text>
            <Heading fontSize={"70px"} mt='-20'>$312</Heading>
            <Text fontSize={"25px"} mt='-30'>Billed just once</Text>
            <Button
              color="white"
              mt="5px"
              bg="#805AD5"
              w={"298px"}
              h={"52px"}
              border={"none"}
            >
              Get Started
            </Button>
          </Box>
          {/* </Flex> </Box> */}
          {/* right box */}
          <Box pt="50px" pr="25px" pl="50px" bg="whitesmoke">
            <Text pb="15px" fontSize={'25'} mt='-10 '>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack pb={"15"}>
              <Icon as={checkMarkIcon} />
              <Text fontSize={'25'} mt='-5'>International calling and messaging API</Text>
            </HStack>

            <HStack pb={"15"}>
              <Icon as={checkMarkIcon} />
              <Text fontSize={'25'}>Additional phone numbers</Text>
            </HStack>

            <HStack pb={"15"}>
              <Icon as={checkMarkIcon} />
              <Text fontSize={'25'}>Automated messages via Zapier</Text>
            </HStack>

            <HStack pb={"15"}>
              <Icon as={checkMarkIcon} />
              <Text fontSize={'25'}>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
