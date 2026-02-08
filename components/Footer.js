import React from "react";
import Link from "next/link";
import { Heading, Text, Spacer, Stack } from "@chakra-ui/react";
import { colors, MEDIUM_URL, YOUTUBE_CHANNEL_URL, LINKEDIN_URL } from "../lib/constants";

export default function Footer() {
  return (
    <Stack
      bg={colors.bgFooter}
      direction={["column", "row"]}
      padding={"4vw"}
      textAlign={"center"}
    >
      <Link href="/">
        <Heading color={colors.accentYellow}>Irtiza Hafiz</Heading>
      </Link>
      <Spacer />
      <Stack spacing={[4, 16]} direction={["column", "row"]}>
        <Link href={MEDIUM_URL} target="_blank">
          <Text fontSize="lg" color="white">
            Medium
          </Text>
        </Link>
        <Link href={YOUTUBE_CHANNEL_URL} target="_blank">
          <Text color="white" fontSize="lg">
            YouTube
          </Text>
        </Link>
        <Link href={LINKEDIN_URL} target="_blank">
          <Text color="white" fontSize="lg">
            LinkedIn
          </Text>
        </Link>
      </Stack>
      <Spacer />
    </Stack>
  );
}
