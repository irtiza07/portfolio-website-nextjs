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
} from "@chakra-ui/react";
import React, { useState } from "react";

export default function SubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      method="post"
      action="https://newsletter.irtizahafiz.com/subscription/form"
      className="listmonk-form"
    >
      <Grid templateColumns="repeat(1, 1fr)" gap="30px" padding="48px">
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
            value="a467ac93-f842-41ac-a1fe-9fb4ef8f2392"
            hidden={true}
          />
        </FormControl>
        <VStack>
          <FormControl>
            <Button
              bg="#efe073"
              color="#191919"
              width="100px"
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
