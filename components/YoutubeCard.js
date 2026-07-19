import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VStack, Button, Text } from "@chakra-ui/react";
import { colors } from "../lib/constants";

// `width` defaults to the fixed sizing the horizontal carousel needs; grid
// layouts pass "100%" so tiles fill their column instead.
export default function YoutubeCard({ videoData, width = { base: 250, md: 400 } }) {
  return (
    <VStack
      justify={"center"}
      bg={colors.bgCard}
      padding={[5, 8]}
      borderRadius={[28, 16]}
      spacing={6}
      width={width}
    >
      <Image
        src={videoData?.snippet?.thumbnails?.medium?.url}
        alt="Irtiza Hafiz's avatar"
        width={360}
        height={180}
      ></Image>
      <Text
        color={colors.accentGreen}
        fontSize={{ base: "sm", md: "lg" }}
        whiteSpace={"normal"}
      >
        {videoData?.snippet?.title}
      </Text>

      <Link
        href={`https://youtube.com/watch?v=${videoData?.snippet?.resourceId?.videoId}`}
        target="_blank"
        data-umami-event="YouTube Video Click"
        data-umami-event-video={videoData?.snippet?.title}
      >
        <Button bg={colors.accentYellow} color={colors.onDark} size="sm">
          Watch Video
        </Button>
      </Link>
    </VStack>
  );
}
