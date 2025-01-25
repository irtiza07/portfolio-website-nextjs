import { Heading, VStack, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SubscribeForm from "./components/SubscribeForm";

export default function Newsletter() {
  return (
    <Flex bg="#161f27" flexDirection="column" color="white" marginBottom={-10}>
      <Head>
        <title>Irtiza Hafiz | Newsletter</title>
        <meta
          name="description"
          content="Join my newsletter to be one of the first ones to know about programming or credit card developments."
          key="desc"
        />
      </Head>
      <NavBar />
      <VStack padding="4vw">
        <Heading fontSize="5xl" textAlign={"center"}>
          Newsletter
        </Heading>
        <Text fontSize="lg" textAlign={"center"}>
          📣 If you enjoyed my blogs or videos, please subscribe! I will drop by
          your inbox at most once a week, and you can unsubscribe any time you
          want.
        </Text>
        <SubscribeForm />
      </VStack>
      <Footer />
    </Flex>
  );
}
