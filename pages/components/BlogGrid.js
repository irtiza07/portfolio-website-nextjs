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
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <Grid templateColumns="repeat(2, 1fr)" gap="60px">
      <BlogCard />
      <BlogCard />
      <BlogCard />
      <BlogCard />
    </Grid>
  );
}
