import React from "react";
import { Grid } from "@chakra-ui/react";
import BlogGrid from "./BlogGrid";
import Categories from "./Categories";

export default function BlogContainer({ posts }) {
  const categories = [
    {
      label: "Software Development",
      slug: "programming",
    },
    {
      label: "Travel",
      slug: "credit-cards",
    },
    // Field Notes is hidden until there are posts that fit the section.
    // Restore: { label: "Field Notes", slug: "field-notes" }
  ];
  return (
    <Grid gap={10}>
      <Categories categories={categories} />
      <BlogGrid posts={posts} customHeading={"All Posts"} maxColumnCount={3} />
    </Grid>
  );
}
