import React from "react";
import Link from "next/link";
import { Text, Spacer, Stack } from "@chakra-ui/react";
import {
  colors,
  SUBSTACK_SUBSCRIBE_URL,
  YOUTUBE_CHANNEL_URL,
  LINKEDIN_URL,
} from "../lib/constants";

export default function Footer() {
  return (
    <Stack
      bg={colors.bgFooter}
      direction={["column", "row"]}
      padding={"4vw"}
      textAlign={"center"}
    >
      <Spacer />
      <Stack spacing={[4, 16]} direction={["column", "row"]}>
        <Link href={SUBSTACK_SUBSCRIBE_URL} target="_blank">
          <Text fontSize="lg" color={colors.onDark}>
            Substack
          </Text>
        </Link>
        <Link href={YOUTUBE_CHANNEL_URL} target="_blank">
          <Text color={colors.onDark} fontSize="lg">
            YouTube
          </Text>
        </Link>
        <Link href={LINKEDIN_URL} target="_blank">
          <Text color={colors.onDark} fontSize="lg">
            LinkedIn
          </Text>
        </Link>
      </Stack>
      <Spacer />
    </Stack>
  );
}
