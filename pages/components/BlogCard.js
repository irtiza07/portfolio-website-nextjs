import React from "react";
import Link from "next/link";
import {
  Heading,
  Flex,
  VStack,
  Spacer,
  Button,
  Text,
  Badge,
} from "@chakra-ui/react";

export default function BlogCard({ post }) {
  const postData = post?.frontMatter;
  const postSlug = post?.slug;

  return (
    <Flex
      flexDirection="column"
      bg="#1e262f"
      padding="0.5vw"
      borderRadius="2vw"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <VStack
        align="flex-start"
        bg="#1e262f"
        padding={[5, 8]}
        borderRadius={[28, 16]}
        spacing={[4, 6]}
      >
        <Badge
          colorScheme="red"
          px={3}
          py={1}
          borderRadius="full"
          fontSize="xs"
        >
          {postData?.tags?.[0]}
        </Badge>
        <Text color="#f57373" fontSize="sm" noOfLines={3}>
          {postData?.date}
        </Text>
        <Link
          href={`/blog/${postSlug}`}
          data-umami-event="blog-card-cta-clicked"
        >
          <Heading
            color="#75c682"
            fontSize="xl"
            whiteSpace={"normal"}
            noOfLines={3}
          >
            {postData?.title}
          </Heading>
        </Link>
        <Text color="#F6F6F6" fontSize="lg" whiteSpace={"normal"} noOfLines={4}>
          {postData?.description}
        </Text>
        <Spacer />
        <Link
          href={`/blog/${postSlug}`}
          data-umami-event="blog-card-cta-clicked"
        >
          <Button bg="#efe073" color="#191919" size="sm">
            Read More
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
