import React from "react";
import { Grid, Box, Heading } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts }) {
  return (
    <Box>
      <Heading mb={6} fontSize="2xl" color="white" textAlign={"center"}>
        All Posts
      </Heading>
      <Grid
        gap={5}
        templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      >
        {posts?.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </Grid>
    </Box>
  );
}
