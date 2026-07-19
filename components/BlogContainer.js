import React from "react";
import { Grid } from "@chakra-ui/react";
import BlogList from "./BlogList";
import { SECTIONS } from "../lib/constants";

export default function BlogContainer({ posts }) {
  return (
    <Grid gap={10}>
      <BlogList
        posts={posts}
        customHeading={"All Posts"}
        groups={SECTIONS}
        groupBy={(frontMatter) => frontMatter?.tags?.[0]}
        maxPerGroup={3}
        groupHref={(key) => `/${key}`}
      />
    </Grid>
  );
}
