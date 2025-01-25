import React, { useRef } from "react";
import Link from "next/link";
import {
  Grid,
  Box,
  IconButton,
  VStack,
  HStack,
  Heading,
  Text,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import CreditCardItem from "./CreditCardItem";
import YoutubeCard from "./YoutubeCard";

export default function YouTubeHorizontalCarousel({ youtubeVideos }) {
  const scrollContainerRef = useRef(null);

  // Scroll left handler
  const scrollLeft = () => {
    scrollContainerRef.current.scrollBy({
      left: -300, // Adjust based on how much you want to scroll
      behavior: "smooth",
    });
  };

  // Scroll right handler
  const scrollRight = () => {
    scrollContainerRef.current.scrollBy({
      left: 300, // Adjust based on how much you want to scroll
      behavior: "smooth",
    });
  };

  return (
    <VStack spacing={12} mb={12}>
      {/* Scrollable Grid Container */}
      <Heading color="white">
        Youtube Tutorials{" "}
        <Link
          href={
            "https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about"
          }
          target="_blank"
          passHref
        >
          <Text
            as="span"
            color="#75c682"
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
      <Box
        ref={scrollContainerRef}
        overflowX="auto"
        whiteSpace="nowrap"
        maxWidth={"100%"}
      >
        <Grid
          autoFlow="column" // Ensure items flow horizontally
          gap={{ base: 4, md: 3 }}
        >
          {youtubeVideos?.map((videoData, index) => (
            <YoutubeCard key={index} videoData={videoData} />
          ))}
        </Grid>
      </Box>
      <HStack spacing={24}>
        <IconButton
          icon={<ArrowLeftIcon />}
          onClick={scrollLeft}
          aria-label="Scroll Left"
          bg="white"
          boxShadow="md"
          borderRadius="full"
          _hover={{ bg: "gray.100" }}
          color="black"
        />

        {/* Scroll Right Button */}
        <IconButton
          icon={<ArrowRightIcon />}
          onClick={scrollRight}
          aria-label="Scroll Right"
          bg="white"
          boxShadow="md"
          borderRadius="full"
          _hover={{ bg: "gray.100" }}
          color="black"
        />
      </HStack>
    </VStack>
  );
}
