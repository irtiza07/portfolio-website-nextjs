import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, VStack, Flex, Spacer, Button, Text } from "@chakra-ui/react";
import { colors } from "../lib/constants";

export default function CreditCardItem({
  imageURL = "",
  cardName = "",
  cardDescription = "",
  referralURL = "",
}) {
  const handleClick = (e) => {
    e.preventDefault();
    try {
      umami.track("credit-card-apply-clicked");
      umami.track(`${cardName}-apply-clicked`);
    } catch (error) {
      console.log(error);
    }
    window.open(referralURL, "_blank");
  };
  return (
    <Flex
      flexDirection="column"
      bg={colors.bgCard}
      padding="2vw"
      borderRadius="2vw"
      justifyContent="space-between"
      alignItems="stretch"
    >
      <VStack>
        <Image width={200} height={80} src={imageURL} alt="Credit Card Image" />
        <Heading size="md" color={colors.accentGreen}>
          {cardName}
        </Heading>
        <Spacer />
        <Text whiteSpace="pre-line" color={colors.textLight}>
          {cardDescription}
        </Text>
        <Spacer />

        <Link href={referralURL} data-umami-event={`${cardName}-apply-clicked`}>
          <Button
            bg={colors.accentYellow}
            color={colors.textDark}
            size="sm"
            fontSize="lg"
            fontWeight="bold"
            _hover={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <Text fontSize={"sm"}>Apply</Text>
          </Button>
        </Link>
      </VStack>
    </Flex>
  );
}
