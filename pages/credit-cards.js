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

export default function CreditCards() {
  return (
    <ChakraProvider>
      <Flex bg="#161f27" flexDirection="column" color="white">
        <NavBar />
        <VStack>
          <Heading fontSize="72px">Credit Cards</Heading>
          <Text fontSize="24px">
            If you were inspired by any of my award travel stories, this is the
            best way to support me at no extra cost of your own ❤️
          </Text>
        </VStack>
        <CreditCardGrid />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}
