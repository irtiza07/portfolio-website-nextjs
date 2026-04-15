import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heading, Flex, Button, Text } from "@chakra-ui/react";
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
      umami.track("Credit Card Apply", { card: cardName });
    } catch (error) {
      console.log(error);
    }
    window.open(referralURL, "_blank");
  };
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      bg={colors.bgCard}
      padding={{ base: 5, md: 6 }}
      borderRadius="2xl"
      width={{ base: "260px", md: "300px" }}
      minHeight={{ base: "370px", md: "400px" }}
      gap={4}
    >
      <Image width={200} height={80} src={imageURL} alt="Credit Card Image" />
      <Heading
        size="sm"
        color={colors.accentGreen}
        textAlign="center"
        whiteSpace="normal"
        noOfLines={2}
        minHeight="3em"
      >
        {cardName}
      </Heading>
      <Text
        color={colors.textLight}
        textAlign="center"
        fontSize="sm"
        whiteSpace="normal"
        noOfLines={5}
        flex="1"
      >
        {cardDescription}
      </Text>
      <Link href={referralURL} style={{ marginTop: "auto" }}>
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
    </Flex>
  );
}
