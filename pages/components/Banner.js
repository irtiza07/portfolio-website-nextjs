import React from "react";
import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  VStack,
  HStack,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Banner() {
  return (
    <Center padding={24}>
      <HStack spacing={60}>
        <Heading color="#75c682" fontSize="60px">
          Hi, I am Irtiza. <br></br>I am an Engineering Manager
        </Heading>

        <Image src="/fake-avatar.png" width={400} height={400}></Image>
      </HStack>
    </Center>
  );
}
