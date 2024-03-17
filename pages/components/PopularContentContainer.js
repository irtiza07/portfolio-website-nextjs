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
import PopItem from "./PopItem";

export default function PopularContentContainer() {
  return (
    <VStack spacing={12}>
      <Heading color="#f57373">POPULAR CONTENT</Heading>
      <VStack spacing={6}>
        <PopItem />
        <PopItem />
        <PopItem />
        <PopItem />
        <PopItem />
      </VStack>
    </VStack>
  );
}
