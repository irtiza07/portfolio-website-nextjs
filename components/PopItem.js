import React from "react";
import Link from "next/link";
import { HStack, Text } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { colors } from "../lib/constants";

export default function PopItem({ post }) {
  return (
    <HStack>
      <ArrowForwardIcon color={colors.accentYellow} boxSize={[4, 8]}></ArrowForwardIcon>
      <Link href={`/blog/${post?.slug}`}>
        <Text color="white" fontSize={["sm", "md"]}>
          {post?.frontMatter?.title}
        </Text>
      </Link>
    </HStack>
  );
}
