import React from "react";
import Link from "next/link";

import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  VStack,
  HStack,
  Image,
  Text,
  Flex,
  Spacer,
} from "@chakra-ui/react";

export default function NavBar() {
  return (
    <Flex padding="48px">
      <Link href="/">
        <Heading color="#efe073">Irtiza Hafiz</Heading>
      </Link>
      <Spacer />
      <HStack spacing={16}>
        <Link href="/">
          <Text fontSize="20px" color="white">
            Blog
          </Text>
        </Link>
        <Link href="/youtube">
          <Text color="white" fontSize="20px">
            YouTube
          </Text>
        </Link>
        <Link href="/credit-cards">
          <Text color="white" fontSize="20px">
            Credit Cards
          </Text>
        </Link>
        <Link href="/newsletter">
          <Text color="white" fontSize="20px">
            Newsletter
          </Text>
        </Link>
        <Link href="/contact">
          <Text color="white" fontSize="20px">
            Contact
          </Text>
        </Link>
      </HStack>

      <Spacer />
    </Flex>
  );
}
