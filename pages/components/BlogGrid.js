import React from "react";
import { Grid, Box, Heading } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ customHeading, posts, maxColumnCount }) {
  return (
    <Box>
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
