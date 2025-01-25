import React from "react";
import { Grid } from "@chakra-ui/react";
import BlogGrid from "./BlogGrid";
import Categories from "./Categories";

export default function BlogContainer({ posts }) {
  const categories = [
    {
      label: "Programming",
      slug: "programming",
    },
    {
      label: "Credit Cards",
      slug: "credit-cards",
    },
  ];
  return (
    <Grid gap={10}>
      <Categories categories={categories} />
      <BlogGrid posts={posts} customHeading={"All Posts"} maxColumnCount={3} />
    </Grid>
  );
}
