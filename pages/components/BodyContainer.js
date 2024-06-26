import React from "react";
import { Grid } from "@chakra-ui/react";

import PopularContentContainer from "./PopularContentContainer";
import BlogContainer from "./BlogContainer";

export default function BodyContainer({ posts, popularPosts, categoryCounts }) {
  return (
    <Grid
      padding={4}
      gap={16}
      templateColumns={{ base: "repeat(1, 1fr)", md: "3fr 1fr" }}
    >
      <BlogContainer posts={posts} categoryCounts={categoryCounts} />
      <PopularContentContainer popularPosts={popularPosts} />
    </Grid>
  );
}
