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
    <Flex padding="2vw">
      <Link href="/" data-umami-event="Home Tab Selected">
        <Heading color="#efe073">Irtiza Hafiz</Heading>
      </Link>
      <Spacer />
      <HStack spacing={16}>
        <Link href="/" data-umami-event="Blog Tab Selected">
          <Text fontSize="1.25em" color="white">
            Blog
          </Text>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about"
          target="_blank"
          data-umami-event="YouTube Tab Selected"
        >
          <HStack>
            <Text color="white" fontSize="1.25em">
              YouTube
            </Text>
            <ExternalLinkIcon color="#efe073" />
          </HStack>
        </Link>
        <Link href="/credit-cards" data-umami-event="Credit Card Tab Selected">
          <Text color="white" fontSize="1.25em">
            Credit Cards
          </Text>
        </Link>
        <Link href="/newsletter" data-umami-event="Newsletter Tab Selected">
          <Text color="white" fontSize="1.25vw">
            Newsletter
          </Text>
        </Link>
      </HStack>

      <Spacer />
    </Flex>
  );
}
