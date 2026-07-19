import React from "react";
import Link from "next/link";
import { Button, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import YoutubeCard from "./YoutubeCard";
import { colors, YOUTUBE_CHANNEL_URL } from "../lib/constants";

// A static grid of recent uploads, in contrast to the horizontal carousel the
// section pages use. Video data comes from getYoutubeVideos in lib/logic.
export default function YoutubeVideoGrid({
  videos,
  heading = "Recent Videos",
  ctaLabel = "Visit my YouTube channel",
}) {
  // Without an API key (or if the fetch failed) there is nothing to show, and
  // a heading with a bare CTA and no videos under it reads as broken.
  if (!videos?.length) {
    return null;
  }

  return (
    <VStack spacing={10} paddingX={{ base: 6, md: 12 }} paddingBottom={16} width="100%">
      <Heading color={colors.textPrimary} textAlign="center">
        {heading}
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 6, md: 8 }}
        width="100%"
        maxWidth="1120px"
      >
        {videos.map((videoData) => (
          <YoutubeCard
            key={videoData?.snippet?.resourceId?.videoId}
            videoData={videoData}
            width="100%"
          />
        ))}
      </SimpleGrid>

      <Link
        href={YOUTUBE_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        data-umami-event="YouTube Channel Click"
        data-umami-event-source="homepage-video-grid"
      >
        <Button
          bg={colors.accentYellow}
          color={colors.onDark}
          _hover={{ bg: colors.accentYellowHover }}
          size="lg"
          borderRadius="full"
          paddingX={8}
        >
          {ctaLabel}
        </Button>
      </Link>
    </VStack>
  );
}
