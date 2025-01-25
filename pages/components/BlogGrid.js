import React from "react";
import { Grid, Box, Heading } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ customHeading, posts, maxColumnCount }) {
  return (
    <Box>
      <Heading mb={6} fontSize="4xl" color="white" textAlign={"center"}>
        {customHeading}
      </Heading>
      <Grid
        gap={5}
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: `repeat(${maxColumnCount}, 1fr)`,
        }}
      >
        {posts?.map((post, index) => (
          <BlogCard key={index} post={post} />
        ))}
      </Grid>
    </Box>
  );
}
