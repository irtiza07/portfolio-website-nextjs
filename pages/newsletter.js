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
    <Flex bg="#161f27" flexDirection="column" color="white">
      <NavBar />
      <VStack height="100vh" padding="3vw">
        <Heading fontSize="6em">Newsletter</Heading>
        <Text fontSize="2em">
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
