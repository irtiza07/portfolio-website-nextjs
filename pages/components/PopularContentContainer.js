import React from "react";
import { Heading, Flex, Grid } from "@chakra-ui/react";
import PopItem from "./PopItem";

export default function PopularContentContainer({ popularPosts }) {
  return (
    <Flex direction="column" align={"center"}>
      <Heading color="#f57373" fontSize="3xl">
        🔥 POPULAR CONTENT 🔥
      </Heading>
      <Grid templateColumns="1fr" gap={[2, 8]} marginTop={[2, 8]}>
        {popularPosts?.map((post, index) => (
          <PopItem key={index} post={post} />
        ))}
      </Grid>
    </Flex>
  );
}
