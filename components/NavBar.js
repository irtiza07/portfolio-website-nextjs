import React from "react";
import Link from "next/link";

import {
  Heading,
  Text,
  Flex,
  Spacer,
  Stack,
  Box,
} from "@chakra-ui/react";
import { colors } from "../lib/constants";

export default function NavBar() {
  return (
    <Flex
      align="center"
      justify="space-between"
      wrap="wrap"
      color="white"
      p={4}
      position="sticky"
      top="0"
      zIndex="10"
      bg={colors.bgNavbar}
      boxShadow="xl"
    >
      <Flex align="center" display={["none", "flex"]}>
        <Link
          href="/"
          data-umami-event="Logo Click"
          fontSize="xl"
          fontWeight="bold"
        >
          <Heading color={colors.accentYellow}>Irtiza Hafiz</Heading>
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
          <Link
            href="/"
            data-umami-event="Nav Tab Click"
            data-umami-event-tab="home"
          >
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              color="white"
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
            >
              Home
            </Text>
          </Link>
          <Link
            href="/programming"
            data-umami-event="Nav Tab Click"
            data-umami-event-tab="programming"
          >
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
            data-umami-event="Nav Tab Click"
            data-umami-event-tab="credit-cards"
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
          <Link
            href="/newsletter"
            data-umami-event="Nav Tab Click"
            data-umami-event-tab="newsletter"
          >
            <Text
              color="white"
              fontSize={{ base: "xs", md: "lg" }}
              textDecoration="underline"
              textUnderlineOffset={["6px", "10px"]}
            >
              Newsletter
            </Text>
          </Link>
          <Link
            href="/tools"
            data-umami-event="Nav Tab Click"
            data-umami-event-tab="tools"
          >
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
