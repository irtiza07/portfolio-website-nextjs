import { React, useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import {
  Heading,
  Text,
  Flex,
  Spacer,
  IconButton,
  Stack,
  Box,
} from "@chakra-ui/react";

export default function NavBar() {
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      color="white"
      p={4}
      position="sticky"
      top="0"
      zIndex="10" // Ensures it stays above other content
      bg="#0d1117" // Keeps the background color consistent
      boxShadow="xl"
    >
      <Flex align="center" display={["none", "flex"]}>
        <Link
          href="/"
          data-umami-event="Home Tab Selected"
          fontSize="xl"
          fontWeight="bold"
        >
          <Heading color="#efe073">Irtiza Hafiz</Heading>
        </Link>
      </Flex>
      <Spacer />

      <Box
        display={{ base: "flex", md: "flex" }}
        width={{ base: "auto", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Stack
          spacing={{ base: 3, md: 8 }}
          align="center"
          direction={["row", "row", "row", "row"]}
          paddingTop={[4, 0, 0, 0]}
        >
          <Link href="/" data-umami-event="Home Tab Selected">
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              color="white"
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
            >
              Home
            </Text>
          </Link>
          <Link href="/programming" data-umami-event="Programming Tab Selected">
            <Text
              color="white"
              fontSize={{ base: "xs", md: "lg" }}
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
            >
              Programming
            </Text>
          </Link>
          <Link
            href="/credit-cards"
            data-umami-event="Credit Card Tab Selected"
          >
            <Text
              color="white"
              fontSize={{ base: "xs", md: "lg" }}
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
              whiteSpace="nowrap"
            >
              Credit Cards
            </Text>
          </Link>
          <Link href="/newsletter" data-umami-event="Newsletter Tab Selected">
            <Text
              color="white"
              fontSize={{ base: "xs", md: "lg" }}
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
            >
              Newsletter
            </Text>
          </Link>
          <Link href="/tools" data-umami-event="Tools Tab Selected">
            <Text
              color="white"
              fontSize={{ base: "xs", md: "lg" }}
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
            >
              Tools
            </Text>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}
