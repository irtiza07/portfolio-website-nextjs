import React from "react";
import { Grid, Box } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function BlogGrid({ posts, maxColumnCount }) {
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
