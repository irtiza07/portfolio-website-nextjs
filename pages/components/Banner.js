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
  Stack,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Banner() {
  return (
    <Center padding={[4, 140]}>
      <Stack spacing={[12, 48]} direction={["column", "row"]}>
        <Flex direction={"column"}>
          <Heading color="#75c682" fontSize={["4xl", "8xl"]}>
            Hi! I am Irtiza.
          </Heading>
          <Heading color="#efe073" fontSize={["xl", "4xl"]}>
            An Engineering Manager by day, and a Blogger and YouTuber by night.
          </Heading>
        </Flex>
        <Image src="/irtiza-avatar-ayesha.png" width={400} height={400}></Image>
      </Stack>
    </Center>
  );
}
