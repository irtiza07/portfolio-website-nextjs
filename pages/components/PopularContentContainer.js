import React from "react";
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
  Grid,
  Button,
  Text,
} from "@chakra-ui/react";
import PopItem from "./PopItem";

export default function PopularContentContainer({ popularPosts }) {
  return (
    <Flex direction="column">
      <Heading color="#f57373" fontSize="2vw">
        POPULAR CONTENT
      </Heading>
      <Grid templateColumns="1fr" gap={6} marginTop={"2vh"}>
        {popularPosts?.map((post, index) => (
          <PopItem key={index} post={post} />
        ))}
      </Grid>
    </Flex>
  );
}
