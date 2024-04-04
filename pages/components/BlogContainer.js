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
import BlogGrid from "./BlogGrid";
import Categories from "./Categories";

export default function BlogContainer({ posts, categoryCounts }) {
  return (
    <Grid gap={10}>
      <Categories categoryCounts={categoryCounts} />
      <BlogGrid posts={posts} />
    </Grid>
  );
}
