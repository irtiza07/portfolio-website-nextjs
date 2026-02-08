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
import { colors } from "../lib/constants";

export default function BlogCard({ post }) {
  const postData = post?.frontMatter;
  const postSlug = post?.slug;

  return (
    <Flex
      flexDirection="column"
      bg={colors.bgCard}
      padding="0.5vw"
      borderRadius="2vw"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <VStack
        align="flex-start"
        bg={colors.bgCard}
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
        <Text color={colors.accentRed} fontSize="sm" noOfLines={3}>
          {postData?.date}
        </Text>
        <Link
          href={`/blog/${postSlug}`}
          data-umami-event="blog-card-cta-clicked"
        >
          <Heading
            color={colors.accentGreen}
            fontSize="xl"
            whiteSpace={"normal"}
            noOfLines={3}
          >
            {postData?.title}
          </Heading>
        </Link>
        <Text color={colors.textLight} fontSize="lg" whiteSpace={"normal"} noOfLines={4}>
          {postData?.description}
        </Text>
        <Spacer />
        <Link
          href={`/blog/${postSlug}`}
          data-umami-event="blog-card-cta-clicked"
        >
          <Button bg={colors.accentYellow} color={colors.textDark} size="sm">
            Read More
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
