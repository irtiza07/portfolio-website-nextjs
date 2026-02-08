import React from "react";
import { Heading } from "@chakra-ui/react";
import BlogCard from "./BlogCard";
import HorizontalCarousel from "./HorizontalCarousel";

export default function RecommendedPostsCarousel({ recommendedPosts }) {
  return (
    <HorizontalCarousel
      header={<Heading color="white">Similar Posts</Heading>}
    >
      {recommendedPosts?.map((postData, index) => (
        <BlogCard key={index} post={postData} />
      ))}
    </HorizontalCarousel>
  );
}
