import React from "react";
import { Heading } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import HorizontalCarousel from "./HorizontalCarousel";
import { colors } from "../lib/constants";

export default function RecommendedPostsCarousel({ recommendedPosts }) {
  return (
    <HorizontalCarousel
      header={<Heading color={colors.textPrimary}>Similar Posts</Heading>}
    >
      {recommendedPosts?.map((postData, index) => (
        <BlogCard key={index} post={postData} />
      ))}
    </HorizontalCarousel>
  );
}
