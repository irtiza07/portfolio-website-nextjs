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
  Button,
  Text,
  Grid,
} from "@chakra-ui/react";
import PopItem from "./PopItem";
import BlogGrid from "./BlogGrid";
import PopularContentContainer from "./PopularContentContainer";
import BlogContainer from "./BlogContainer";

export default function BodyContainer({ posts }) {
  return (
    <Grid templateColumns="repeat(2, 1fr)" padding="48px">
      <BlogContainer posts={posts} />
      <PopularContentContainer />
    </Grid>
  );
}
