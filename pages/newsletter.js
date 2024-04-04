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
  Text,
} from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreditCardGrid from "./components/CreditCardGrid";
import SubscribeForm from "./components/SubscribeForm";

export default function Newsletter() {
  return (
    <Flex bg="#161f27" flexDirection="column" color="white" marginBottom={-10}>
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
