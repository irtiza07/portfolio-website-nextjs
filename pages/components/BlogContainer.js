import React from "react";
import { Grid } from "@chakra-ui/react";
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
