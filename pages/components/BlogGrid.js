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
    <Grid templateColumns="repeat(2, 1fr)" gap="60px">
      {posts?.map((post, index) => (
        <BlogCard key={index} post={post} />
      ))}
    </Grid>
  );
}
