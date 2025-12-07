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
import BookConsultationButton from "./BookConsultationButton";

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
      <VStack spacing={4} align="center" width="100%">
        <Heading>Recommended Cards</Heading>
        <BookConsultationButton />
      </VStack>
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
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card"
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
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/business/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/amex-blue-business-plus.png"
            cardName="AMEX Blue Business Plus"
            cardDescription="15K Bonus Points! 2X Points on Everything!"
            referralURL="https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=MDIRTHcyin&XLINK=MYCP"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/amex-business-platinum.png"
            cardName="American Express Business Platinum"
            cardDescription="5X on Flights! $3,500+ in credits! Lounge Access! 200K Bonus Points!"
            referralURL="https://americanexpress.com/en-us/referral/business-platinum-charge-card?ref=MDIRTHgkN1&xl=cp15"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/amex-platinum-delta-business.png"
            cardName="American Express Delta Platinum Business"
            cardDescription="3X on Delta Purchases! Free Companion Certificate! 70K Bonus Miles!"
            referralURL="https://americanexpress.com/en-us/referral/delta-skymiles-platinum?ref=MDIRTHiGzB&xl=cp15"
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
            referralURL="https://www.referyourchasecard.com/19u/P69MUTKHKM"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/hilton-surpass.png"
            cardName="Hilton Surpass Card"
            cardDescription="12X Hilton Purchases! 6X Restaurants, Groceries, & Gas! 130K Bonus Points!"
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/freedom_flex.png"
            cardName="Chase Freedom Flex"
            cardDescription="5X rotating categories! 3X Dining & Drugstores! $200 Bonus!"
            referralURL="https://www.referyourchasecard.com/18s/00ANRAHL1T"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/ihg-premier.png"
            cardName="Chase IHG Premier"
            cardDescription="26X IHG Purchases! 5X Restaurants, Travel & Gas! 140K Bonus Points! 5+ Free Nights!"
            referralURL="https://www.referyourchasecard.com/210y/U1YREPZMZM"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/citi-strata-premier.png"
            cardName="Citi Strata Premier"
            cardDescription="3X Points on Flights, Hotels, Restaurants, Groceries and Gas Stations! 75K Bonus Points!"
            referralURL="https://www.citi.com/credit-cards/citi-strata-premier-credit-card"
          />
          <CreditCardItem
            imageURL="https://ds0fmzhunbzyk.cloudfront.net/credit-cards-photos/citi-strata-elite.png"
            cardName="Citi Strata Elite"
            cardDescription="12X Points on Hotels! 6X on Flights! 1.5X Everything else! 100K Bonus Points!"
            referralURL="https://www.citi.com/credit-cards/citi-strata-elite-credit-card"
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
