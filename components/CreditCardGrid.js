import React from "react";
import { VStack, Heading } from "@chakra-ui/react";
import CreditCardItem from "./CreditCardItem";
import BookConsultationButton from "./BookConsultationButton";
import HorizontalCarousel from "./HorizontalCarousel";
import referralLinks from "../lib/referralLinks";
import { creditCards } from "../lib/constants";

export default function CreditCardGrid() {
  const header = (
    <VStack spacing={4} align="center" width="100%">
      <Heading>Recommended Cards</Heading>
      <BookConsultationButton />
    </VStack>
  );

  return (
    <HorizontalCarousel header={header}>
      {creditCards.map((card, index) => (
        <CreditCardItem
          key={index}
          imageURL={card.imageURL}
          cardName={card.cardName}
          cardDescription={card.cardDescription}
          referralURL={referralLinks[card.referralKey]}
        />
      ))}
    </HorizontalCarousel>
  );
}
