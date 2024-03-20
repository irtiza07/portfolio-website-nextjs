import React from "react";
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

export default function Categories({ categoryCounts }) {
  console.log(categoryCounts);
  return (
    <HStack spacing={12}>
      <Text color="#75c682">Programming(6)</Text>
      <Text color="#f57373">Productivity(3)</Text>
      <Text color="#f57373">Mindfullness(4)</Text>
      <Text color="#f57373">Privacy(2)</Text>
    </HStack>
  );
}
