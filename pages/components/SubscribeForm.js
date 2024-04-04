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
  Button,
  Text,
  Grid,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";

export default function SubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const successToast = useToast();
  const failureToast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      umami.track("Subscribe Clicked");
    } catch (error) {
      console.log(error);
    }

    try {
      await axios.post(
        "https://newsletter.irtizahafiz.com/api/public/subscription",
        {
          name: firstName,
          email: emailAddress,
          list_uuids: ["b557290a-cdd2-47c2-bb74-ffa01d640a2d"],
        }
      );
      successToast({
        title: "Subsribed!",
        description: "Welcome onboard!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFirstName("");
      setEmailAddress("");
    } catch (error) {
      failureToast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <Grid templateColumns="repeat(1, 1fr)" gap="1.5vw" padding="2vw">
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input
            name="name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
          />
          <FormHelperText>
            Only used to personalize the email you receive. Never shared.
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            name="email"
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
          />
          <FormHelperText>Never shared with any third-party.</FormHelperText>
        </FormControl>
        <FormControl>
          <Input
            name="l"
            value="b557290a-cdd2-47c2-bb74-ffa01d640a2d"
            hidden={true}
          />
        </FormControl>
        <VStack>
          <FormControl>
            <Button
              bg="#efe073"
              color="#191919"
              size="lg"
              isDisabled={!(firstName && emailAddress)}
              type="submit"
            >
              Subscribe
            </Button>
            <FormHelperText>Powered by locally hosted Listmonk</FormHelperText>
          </FormControl>
        </VStack>
      </Grid>
    </form>
  );
}
