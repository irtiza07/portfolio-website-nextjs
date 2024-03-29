import React from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
        <Link
          href="https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about"
          target="_blank"
          data-umami-event="YouTube Clicked"
        >
          <HStack>
            <Text color="white" fontSize="20px">
              YouTube
            </Text>
            <ExternalLinkIcon color="#efe073" />
          </HStack>
        </Link>
        <Link href="/credit-cards" data-umami-event="Credit Card Tab Clicked">
          <Text color="white" fontSize="20px">
            Credit Cards
          </Text>
        </Link>
        <Link href="/newsletter">
          <Text color="white" fontSize="20px">
            Newsletter
          </Text>
        </Link>
      </HStack>

      <Spacer />
    </Flex>
  );
}
