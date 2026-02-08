import React from "react";
import { VStack } from "@chakra-ui/react";
import BlogContainer from "./BlogContainer";

export default function BodyContainer({ posts }) {
  return (
    <VStack padding={12}>
      <BlogContainer posts={posts} />
    </VStack>
  );
}
