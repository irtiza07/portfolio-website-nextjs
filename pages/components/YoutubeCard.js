import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, VStack, Spacer, Button, Text, Badge } from "@chakra-ui/react";

export default function YoutubeCard({ videoData }) {
  return (
    <VStack
      justify={"center"}
      bg="#1e262f"
      padding={[5, 8]}
      borderRadius={[28, 16]}
      spacing={6}
      width={{ base: 250, md: 400 }}
    >
      <Image
        src={videoData?.snippet?.thumbnails?.medium?.url}
        alt="Irtiza Hafiz's avatar"
        width={360}
        height={180}
      ></Image>
      <Text
        color="#75c682"
        fontSize={{ base: "sm", md: "lg" }}
        whiteSpace={"normal"}
      >
        {videoData?.snippet?.title}
      </Text>

      <Link
        href={`https://youtube.com/watch?v=${videoData?.snippet?.resourceId?.videoId}`}
        target="_blank"
        data-umami-event="youtube-carousel-card-cta-clicked"
      >
        <Button bg="#efe073" color="#191919" size="sm">
          Watch Video
        </Button>
      </Link>
    </VStack>
  );
}
