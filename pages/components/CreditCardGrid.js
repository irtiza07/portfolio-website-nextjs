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
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/amex-gold.png"
            cardName="American Express Gold"
            cardDescription="4X Restaurants & Groceries! 3X Flights! $400+ Food Credits! 100K Bonus Points!"
            referralURL="https://americanexpress.com/en-us/referral/gold-card?ref=MDIRTHyOkF&XLINK=MYCP"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/venture-x.png"
            cardName="Capital One Venture X"
            cardDescription="Unlimited 2X miles! Lounge Access! 75K Bonus Miles! $300 Travel Credit! 10K Anniversary Bonus!"
            referralURL="https://i.capitalone.com/G35be7pGf"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/amex-business-gold.png"
            cardName="American Express Business Gold"
            cardDescription="4X on Cloud & Software Spend, Tech Gadgets, Advertising, Gas, Transit! 100K Bonus Points!"
            referralURL="https://americanexpress.com/en-us/referral/businessgold-card?ref=MDIRTHHYSy&XLINK=MYCP"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/savor-one.png"
            cardName="Capital One Savor Rewards"
            cardDescription="3X Restaurants, Groceries & Entertainment! $300 Bonus!"
            referralURL="https://i.capitalone.com/GMEE0Fgpz"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/sapphire_preferred.png"
            cardName="Chase Sapphire Preferred"
            cardDescription="3X Dining, 2X Travel, 60K Bonus Points! $50 Travel Credit!"
            referralURL="https://www.referyourchasecard.com/19q/U38HTDCGS0"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/hilton-surpass.png"
            cardName="Hilton Surpass Card"
            cardDescription="12X Hilton Purchases! 6X Restaurants, Groceries, & Gas! 130K Bonus Points!"
            referralURL="https://americanexpress.com/en-us/referral/hilton-honors?ref=MDIRTHrah0&xl=cp19"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/freedom_flex.png"
            cardName="Chase Freedom Flex"
            cardDescription="5X rotating categories! 3X Dining & Drugstores! $200 Bonus!"
            referralURL="https://www.referyourchasecard.com/18J/12K8NPLW0F"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/ihg-premier.png"
            cardName="Chase IHG Premier"
            cardDescription="26X IHG Purchases! 5X Restaurants, Travel & Gas! 140K Bonus Points! 5+ Free Nights!"
            referralURL="https://www.referyourchasecard.com/210u/5ZPQXWLSOD"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/amex-blue-business-plus.png"
            cardName="AMEX Blue Business Plus"
            cardDescription="15K Bonus Points! 2X Points on Everything!"
            referralURL="https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=MDIRTHcyin&XLINK=MYCP"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/bilt.png"
            cardName="Wells Fargo Bilt Mastercard"
            cardDescription="Earn Points on Rent! 3X Dining, 2X Travel! Double points on rent day!"
            referralURL="https://bilt.page/r/1YFG-4S1F"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/citi-strata-premier.png"
            cardName="Citi Strata Premier"
            cardDescription="3X Points on Flights, Hotels, Restaurants, Groceries and Gas Stations! 75K Bonus Points!"
            referralURL="https://www.citi.com/credit-cards/citi-strata-premier-credit-card"
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
