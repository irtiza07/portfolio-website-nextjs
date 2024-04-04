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
  return (
    <HStack spacing={12} display={["none", "flex"]}>
      {categoryCounts?.map((categoryCount, index) => (
        <Text fontSize="md" key={index} color="#f57373">
          {categoryCount[0].toUpperCase()}({categoryCount[1]})
        </Text>
      ))}
    </HStack>
  );
}
