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
    <VStack
      align="flex-start"
      justify={"center"}
      bg="#1e262f"
      padding={[5, 8]}
      borderRadius={[28, 16]}
      spacing={6}
    >
      <Text color="#f57373" fontSize="sm">
        {postData?.date}
      </Text>

      <Heading color="#75c682" fontSize="xl">
        {postData?.title}
      </Heading>

      <Text color="#F6F6F6" fontSize="lg">
        {postData?.description}
      </Text>

      <Link href={`/blog/${postSlug}`}>
        <Button bg="#efe073" color="#191919" size="sm">
          Read More
        </Button>
      </Link>
    </VStack>
  );
}
