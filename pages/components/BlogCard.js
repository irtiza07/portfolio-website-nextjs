import React from "react";
import Link from "next/link";
import { Heading, VStack, Spacer, Button, Text, Badge } from "@chakra-ui/react";

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
      <Badge colorScheme="red" px={3} py={1} borderRadius="full" fontSize="xs">
        {postData?.tags?.[0]}
      </Badge>
      <Text color="#f57373" fontSize="sm">
        {postData?.date}
      </Text>

      <Heading color="#75c682" fontSize="xl">
        {postData?.title}
      </Heading>

      <Text color="#F6F6F6" fontSize="lg">
        {postData?.description}
      </Text>
      <Spacer />
      <Link href={`/blog/${postSlug}`}>
        <Button bg="#efe073" color="#191919" size="sm">
          Read More
        </Button>
      </Link>
    </VStack>
  );
}
