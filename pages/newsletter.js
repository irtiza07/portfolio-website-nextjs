import { Heading, VStack, Text } from "@chakra-ui/react";
import SubscribeForm from "../components/SubscribeForm";
import Layout from "../components/Layout";

export default function Newsletter() {
  return (
    <Layout
      title="Irtiza Hafiz | Newsletter"
      description="Join my newsletter to be one of the first ones to know about programming or credit card developments."
      color="white"
      marginBottom={-10}
    >
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
    </Layout>
  );
}
