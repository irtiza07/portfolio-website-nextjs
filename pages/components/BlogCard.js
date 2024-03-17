import React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  VStack,
  HStack,
  Image,
  Flex,
  Spacer,
  Button,
  Text,
} from "@chakra-ui/react";

export default function BlogCard() {
  return (
    <Flex
      flexDirection="column"
      width="480px"
      height="360px"
      bg="#1e262f"
      padding="16px"
      borderRadius="16px"
    >
      <Text color="#f57373"> RECENTLY PUBLISHED</Text>
      <Spacer></Spacer>
      <Heading color="#75c682">How to center a div</Heading>

      <Text color="#F6F6F6">
        Lorem corpus Lorem corpus Lorem corpus Lorem corpus Lorem corpus Lorem
        corpus Lorem corpus Lorem corpus Lorem corpus Lorem corpus Lorem Lorem
        Lorem corpus Lorem corpus Lorem corpus Lorem corpus Lorem corpus Lorem
        corpus Lorem corpus Lorem corpus Lorem corpus...
      </Text>
      <Spacer></Spacer>
      <Button bg="#efe073" color="#191919" width="100px">
        Read More
      </Button>
    </Flex>
  );
}
