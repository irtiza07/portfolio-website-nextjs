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
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function PopItem({ post }) {
  return (
    <HStack>
      <ArrowForwardIcon color="#efe073" boxSize={[4, 8]}></ArrowForwardIcon>
      <Link href={`/blog/${post?.slug}`}>
        <Text color="white" fontSize={["sm", "md"]}>
          {post?.frontMatter?.title}
        </Text>
      </Link>
    </HStack>
  );
}
