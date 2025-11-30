import React from "react";
import { Grid, VStack } from "@chakra-ui/react";

// import PopularContentContainer from "./PopularContentContainer";
import BlogContainer from "./BlogContainer";

export default function BodyContainer({ posts, popularPosts }) {
  return (
    <VStack padding={12}>
      <BlogContainer posts={posts} />
      {/* <PopularContentContainer popularPosts={popularPosts} /> */}
    </VStack>
  );
}
