import { React, useState } from "react";
import Link from "next/link";
import { ExternalLinkIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import {
  Heading,
  HStack,
  Text,
  Flex,
  Spacer,
  IconButton,
  Stack,
  Box,
} from "@chakra-ui/react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

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

      <IconButton
        display={{ base: "block", md: "none" }}
        onClick={toggleMenu}
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        variant="outline"
      />

      <Box
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Stack
          spacing={8}
          align="center"
          direction={["column", "row", "row", "row"]}
          paddingTop={[4, 0, 0, 0]}
        >
          <Link href="/" data-umami-event="Blog Tab Selected">
            <Text fontSize="lg" color="white">
              Blog
            </Text>
          </Link>
          <Link
            href="https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about"
            target="_blank"
            data-umami-event="YouTube Tab Selected"
          >
            <HStack>
              <Text color="white" fontSize="lg">
                YouTube
              </Text>
              <ExternalLinkIcon color="#efe073" />
            </HStack>
          </Link>
          <Link
            href="/credit-cards"
            data-umami-event="Credit Card Tab Selected"
          >
            <Text color="white" fontSize="lg">
              Credit Cards
            </Text>
          </Link>
          <Link href="/newsletter" data-umami-event="Newsletter Tab Selected">
            <Text color="white" fontSize="lg">
              Newsletter
            </Text>
          </Link>
        </Stack>
      </Box>
    </Flex>
  );
}

// return (
//   <Flex padding="2vw">
//     <Link href="/" data-umami-event="Home Tab Selected">
//       <Heading color="#efe073">Irtiza Hafiz</Heading>
//     </Link>
//     <Spacer />
//     <HStack spacing={16}></HStack>

//     <Spacer />
//   </Flex>
// );
