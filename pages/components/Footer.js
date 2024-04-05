import React from "react";
import Link from "next/link";

import { Heading, Text, Spacer, Stack } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Stack
      bg="#0c1115"
      direction={["column", "row"]}
      padding={"4vw"}
      textAlign={"center"}
    >
      <Link href="/">
        <Heading color="#efe073">Irtiza Hafiz</Heading>
      </Link>
      <Spacer />
      <Stack spacing={[4, 16]} direction={["column", "row"]}>
        <Link href="https://medium.com/@irtizahafiz" target="_blank">
          <Text fontSize="lg" color="white">
            Medium
          </Text>
        </Link>
        <Link
          href="https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about"
          target="_blank"
        >
          <Text color="white" fontSize="lg">
            YouTube
          </Text>
        </Link>
        <Link href="https://www.linkedin.com/in/irtiza-hafiz/" target="_blank">
          <Text color="white" fontSize="lg">
            LinkedIn
          </Text>
        </Link>
      </Stack>
      <Spacer />
    </Stack>
  );
}
