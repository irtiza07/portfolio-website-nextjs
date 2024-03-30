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

export default function Footer() {
  return (
    <Flex padding="3vw" bg="#0c1115">
      <Link href="/">
        <Heading color="#efe073">Irtiza Hafiz</Heading>
      </Link>
      <Spacer />
      <HStack spacing={16}>
        <Link href="https://medium.com/@irtizahafiz" target="_blank">
          <Text fontSize="1vw" color="white">
            Medium
          </Text>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about"
          target="_blank"
        >
          <Text color="white" fontSize="1vw">
            YouTube
          </Text>
        </Link>
        <Link href="https://www.linkedin.com/in/irtiza-hafiz/" target="_blank">
          <Text color="white" fontSize="1vw">
            LinkedIn
          </Text>
        </Link>
      </HStack>

      <Spacer />
    </Flex>
  );
}
