import React, { useState } from "react";
import {
  Heading,
  Center,
  VStack,
  Stack,
  Input,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import Image from "next/image";
import RecommendationsModal from "./RecommendationsModal";

export default function Banner() {
  const [recommendations, setRecommendations] = useState([]);
  const [searchQueryText, setSearchQueryText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const fetchRecommendations = async () => {
    try {
      const response = await fetch(
        `https://api.irtizahafiz.com/recommendations?user_query=${searchQueryText}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setRecommendations(jsonData["data"]);
        onOpen();
      } else {
        console.error("Failed to fetch data:", response.statusText);
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
  };

  return (
    <Center padding={[4, 140]}>
      <RecommendationsModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        recommendations={recommendations}
      ></RecommendationsModal>
      <Stack
        spacing={[12, 48]}
        direction={["column", "column", "column", "row"]}
      >
        <VStack
          direction={"column"}
          align="left"
          spacing={[6, 6]}
          justify={"center"}
        >
          <Heading color="#75c682" fontSize={["4xl", "5xl", "7xl"]}>
            Hi! I am Irtiza.
          </Heading>
          <Heading color="#efe073" fontSize={["xl", "3xl", "4xl"]}>
            An Engineering Manager by day, and a Blogger and YouTuber by night.
          </Heading>
          <Stack direction={"row"} spacing={[4, 8]} width={[350]}>
            <Input
              placeholder="[Beta] Smart AI Search"
              size="lg"
              color="white"
              width={80}
              borderRadius="full"
              boxShadow="0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 0, 255, 0.5)"
              onChange={(e) => setSearchQueryText(e.target.value)}
            />
            <Button
              bg="#f57373"
              color="#191919"
              size="lg"
              borderRadius="full"
              boxShadow="0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 0, 255, 0.5)"
              onClick={(e) => fetchRecommendations()}
              isDisabled={!searchQueryText}
            >
              Search
            </Button>
          </Stack>
        </VStack>
        <Image
          src="/irtiza-avatar-ayesha.png"
          alt="Irtiza Hafiz's avatar"
          width={600}
          height={400}
        ></Image>
      </Stack>
    </Center>
  );
}
