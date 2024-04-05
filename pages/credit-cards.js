import { Heading, VStack, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreditCardGrid from "./components/CreditCardGrid";

export default function CreditCards() {
  return (
    <Flex
      bg="#161f27"
      flexDirection="column"
      color="white"
      width="100vw"
      marginBottom={-10}
    >
      <Head>
        <title>Travel Credit Cards</title>
        <meta
          name="description"
          content="Best travel credit cards that will help you travel the world for free."
          key="desc"
        />
      </Head>
      <NavBar />
      <VStack padding="2vw">
        <Heading fontSize="5xl" textAlign={"center"}>
          Credit Cards
        </Heading>
        <Text fontSize="lg" textAlign={"center"}>
          If you were inspired by any of my award travel stories, this is the
          best way to support me at no extra cost of your own ❤️
        </Text>
      </VStack>
      <CreditCardGrid />
      <Footer />
    </Flex>
  );
}
