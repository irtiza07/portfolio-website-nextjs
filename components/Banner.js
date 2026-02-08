import Link from "next/link";
import React, { useState } from "react";
import {
  Heading,
  Center,
  VStack,
  Text,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import RecommendationsModal from "./RecommendationsModal";
import SmartSearch from "./SmartSearch";
import { colors } from "../lib/constants";

export default function Banner() {
  const [recommendations, setRecommendations] = useState([]);
  const [searchQueryText, setSearchQueryText] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleModalClose = () => {
    setSearchQueryText("");
    onClose();
  };

  return (
    <Center padding={6}>
      <RecommendationsModal
        isOpen={isOpen}
        onClose={handleModalClose}
        recommendations={recommendations}
      ></RecommendationsModal>
      <Stack
        spacing={[12, 48]}
        direction={["column", "column", "column", "row"]}
      >
        <VStack
          direction={"column"}
          align="center"
          textAlign="center"
          spacing={[6, 12]}
          justify={"center"}
        >
          <Heading color={colors.accentGreen} fontSize={["4xl", "5xl", "7xl"]}>
            Hi! I am Irtiza.
          </Heading>
          <Heading color={colors.textPrimary} fontSize={["xl", "3xl", "3xl"]}>
            I create content about{" "}
            <Link
              href="/programming"
              passHref
              data-umami-event="banner-programming-cta-click"
            >
              <Text
                as="span"
                color={colors.accentGreen}
                cursor="pointer"
                textUnderlineOffset={["6px", "10px"]}
              >
                Programming
              </Text>
            </Link>{" "}
            and{" "}
            <Link
              href="/credit-cards"
              passHref
              data-umami-event="banner-credit-cards-cta-click"
            >
              <Text
                as="span"
                color={colors.accentGreen}
                cursor="pointer"
                textUnderlineOffset={["6px", "10px"]}
              >
                Credit Cards
              </Text>
            </Link>
            .
          </Heading>
          <SmartSearch
            searchQueryText={searchQueryText}
            setSearchQueryText={setSearchQueryText}
            setRecommendations={setRecommendations}
            openModal={onOpen}
          />
        </VStack>
      </Stack>
    </Center>
  );
}
