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
    <Center padding={16}>
      <HStack spacing={48}>
        <Flex direction={"column"}>
          <Heading color="#75c682" fontSize="56px">
            Hi! I am Irtiza.
          </Heading>
          <Heading color="#efe073" fontSize="32px">
            An Engineering Manager by day, and a Blogger and YouTuber by night.
          </Heading>
        </Flex>

        <Image src="/irtiza-avatar-ayesha.png" width={400} height={400}></Image>
      </HStack>
    </Center>
  );
}
