import {
  VStack,
  Button,
  Grid,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  RadioGroup,
  Radio,
  Stack,
  useToast,
} from "@chakra-ui/react";
import React, { useState } from "react";
import axios from "axios";
import { colors, API_NEWSLETTER_URL, NEWSLETTER_LIST_UUID } from "../lib/constants";

export default function SubscribeForm() {
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [interest, setInterest] = useState("");
  const successToast = useToast();
  const failureToast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      umami.track("Subscribe Click", { interest });
    } catch (error) {
      console.log(error);
    }

    try {
      await axios.post(API_NEWSLETTER_URL, {
        name: firstName,
        email: emailAddress,
        list_uuids: [NEWSLETTER_LIST_UUID],
      });
      successToast({
        title: "Subscribed!",
        description: "Welcome onboard!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFirstName("");
      setEmailAddress("");
      setInterest("");
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
            value={NEWSLETTER_LIST_UUID}
            hidden={true}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>What are you interested in?</FormLabel>
          <RadioGroup value={interest} onChange={setInterest}>
            <Stack direction={["column", "row"]} spacing="1.5vw">
              <Radio value="credit-cards">Credit Cards</Radio>
              <Radio value="software-development">Software Development</Radio>
            </Stack>
          </RadioGroup>
        </FormControl>
        <VStack>
          <FormControl>
            <Button
              bg={colors.accentYellow}
              color={colors.textDark}
              size="lg"
              isDisabled={!(firstName && emailAddress && interest)}
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
