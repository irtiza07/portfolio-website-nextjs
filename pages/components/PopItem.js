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
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function PopItem() {
  return (
    <HStack>
      <ArrowForwardIcon color="#efe073" boxSize={8}></ArrowForwardIcon>
      <Text color="white" fontSize="20px">
        An Interactive Guide to Cool
      </Text>
    </HStack>
  );
}
