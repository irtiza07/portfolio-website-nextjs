import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  VStack,
  HStack,
  Flex,
  Spacer,
  Button,
  Text,
} from "@chakra-ui/react";

export default function CreditCardItem({
  imageURL,
  cardName,
  cardDescription,
  referralURL,
}) {
  return (
    <Flex
      flexDirection="column"
      width="480px"
      height="360px"
      bg="#1e262f"
      padding="16px"
      borderRadius="16px"
    >
      <VStack>
        <Image width={360} height={240} src={imageURL} />
        <Heading color="#75c682">{cardName}</Heading>
        <Spacer />
        <Text color="#F6F6F6">{cardDescription}</Text>
        <Spacer></Spacer>
        <Link href={referralURL}>
          <Button
            bg="#efe073"
            color="#191919"
            width="128px"
            height="40px"
            fontSize="24px"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
          >
            Apply
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
