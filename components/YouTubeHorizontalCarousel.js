import React from "react";
import Link from "next/link";
import { Heading, Text } from "@chakra-ui/react";
import YoutubeCard from "./YoutubeCard";
import HorizontalCarousel from "./HorizontalCarousel";
import { colors, YOUTUBE_CHANNEL_URL } from "../lib/constants";

export default function YouTubeHorizontalCarousel({ youtubeVideos }) {
  const header = (
    <Heading color="white">
      Youtube Tutorials{" "}
      <Link
        href={YOUTUBE_CHANNEL_URL}
        target="_blank"
        passHref
        data-umami-event="youtube-carousel-channel-cta-clicked"
      >
        <Text
          as="span"
          color={colors.accentGreen}
          textDecoration="underline"
          textDecorationStyle="solid"
          cursor="pointer"
          textUnderlineOffset={["1px", "2px"]}
          fontSize={["sm", "lg"]}
        >
          (See All)
        </Text>
      </Link>
    </Heading>
  );

  return (
    <HorizontalCarousel header={header}>
      {youtubeVideos?.map((videoData, index) => (
        <YoutubeCard key={index} videoData={videoData} />
      ))}
    </HorizontalCarousel>
  );
}
