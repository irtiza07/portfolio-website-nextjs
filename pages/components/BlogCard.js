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
      width="480px"
      height="360px"
      bg="#1e262f"
      padding="16px"
      borderRadius="16px"
    >
      <Text color="#f57373">{postData?.date}</Text>
      <Spacer />
      <Heading color="#75c682">{postData?.title}</Heading>
      <Spacer />
      <Text color="#F6F6F6">{postData?.description}</Text>
      <Spacer></Spacer>
      <Link href={`/blog/${postSlug}`}>
        <Button bg="#efe073" color="#191919" width="100px">
          Read More
        </Button>
      </Link>
    </Flex>
  );
}
