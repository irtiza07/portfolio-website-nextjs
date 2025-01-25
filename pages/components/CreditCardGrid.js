import React, { useRef } from "react";
import {
  Grid,
  Box,
  IconButton,
  VStack,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import CreditCardItem from "./CreditCardItem";

export default function CreditCardGrid() {
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
      <Heading>Recommended Cards</Heading>
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
          <CreditCardItem
            imageURL="https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png"
            cardName="American Express Gold"
            cardDescription="4X Restaurants & Groceries! 3X Flights! $400+ Food Credits! 100K Bonus Points!"
            referralURL="https://americanexpress.com/en-us/referral/gold-card?ref=MDIRTHku7w&xl=cp19"
          />
          <CreditCardItem
            imageURL="https://ecm.capitalone.com/WCM/card/products/venturex-cg-static-card-1000x630-2.png"
            cardName="Capital One Venture X"
            cardDescription="Unlimited 2X miles! Lounge Access! 75K Bonus Miles! $300 Travel Credit! 10K Anniversary Bonus!"
            referralURL="https://i.capitalone.com/G35be7pGf"
          />
          <CreditCardItem
            imageURL="https://ecm.capitalone.com/WCM/card/products/new-savor-card-art.png"
            cardName="Capital One Savor Rewards"
            cardDescription="3X Restaurants, Groceries & Entertainment! $300 Bonus!"
            referralURL="https://i.capitalone.com/GMEE0Fgpz"
          />
          <CreditCardItem
            imageURL="https://icm.aexp-static.com/acquisition/card-art/NUS000000328_480x304_straight_withname.png"
            cardName="Hilton Surpass Card"
            cardDescription="12X Hilton Purchases! 6X Restaurants, Groceries, & Gas! 130K Bonus Points!"
            referralURL="https://americanexpress.com/en-us/referral/hilton-honors?ref=MDIRTHX71N&xl=cp15"
          />
          <CreditCardItem
            imageURL="https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_preferred_card.png"
            cardName="Chase Sapphire Preferred"
            cardDescription="3X Dining, 2X Travel, 60K Bonus Points! $50 Travel Credit!"
            referralURL="https://www.referyourchasecard.com/19q/U38HTDCGS0"
          />
          <CreditCardItem
            imageURL="https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_flex_card_alt.png"
            cardName="Chase Freedom Flex"
            cardDescription="5X rotating categories! 3X Dining & Drugstores! $200 Bonus!"
            referralURL="https://www.referyourchasecard.com/18J/12K8NPLW0F"
          />
          <CreditCardItem
            imageURL="https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/ihg_premier_card.png"
            cardName="Chase IHG Premier"
            cardDescription="26X IHG Purchases! 5X Restaurants, Travel & Gas! 140K Bonus Points! 5+ Free Nights!"
            referralURL="https://www.referyourchasecard.com/210u/5ZPQXWLSOD"
          />
          <CreditCardItem
            imageURL="https://cdn.prodstatic.com/shared/images/cards/219x139/0e2afbd0-3923-11ed-b73c-91712e8727dd.png"
            cardName="Bilt Mastercard"
            cardDescription="Earn Points on Rent! 3X Dining, 2X Travel! Double points on rent day!"
            referralURL="https://bilt.page/r/1YFG-4S1F"
          />
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
