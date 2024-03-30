import React from "react";
import Link from "next/link";
import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  VStack,
  HStack,
  Image,
  Flex,
  Spacer,
  Button,
  Text,
} from "@chakra-ui/react";

export default function BlogCard({ post }) {
  const postData = post?.frontMatter;
  const postSlug = post?.slug;

  return (
    <Flex
      flexDirection="column"
      width="28vw"
      height="40vh"
      bg="#1e262f"
      padding="2vw"
      borderRadius="2vw"
    >
      <Text color="#f57373" fontSize="1vw">
        {postData?.date}
      </Text>
      <Spacer />
      <Heading color="#75c682" fontSize="2vw">
        {postData?.title}
      </Heading>
      <Spacer />
      <Text color="#F6F6F6" fontSize="1vw">
        {postData?.description}
      </Text>
      <Spacer></Spacer>
      <Link href={`/blog/${postSlug}`}>
        <Button bg="#efe073" color="#191919" width="6vw" fontSize="1vw">
          Read More
        </Button>
      </Link>
    </Flex>
  );
}
