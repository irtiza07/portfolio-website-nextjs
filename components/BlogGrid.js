import React from "react";
import { Grid, Box, Heading, Center } from "@chakra-ui/react";
import BlogCard from "./BlogCard";

export default function BlogGrid({
  posts,
  maxColumnCount,
  customHeading,
  headingCta,
}) {
  return (
    <Box>
      {customHeading && (
        <Heading color="white" textAlign="center" mb={headingCta ? 4 : 6}>
          {customHeading}
        </Heading>
      )}
      {headingCta && <Center mb={6}>{headingCta}</Center>}
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
