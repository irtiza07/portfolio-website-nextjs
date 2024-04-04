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

export default function BlogGrid({ posts }) {
  return (
    <Grid
      gap={5}
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
    >
      {posts?.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </Grid>
  );
}
