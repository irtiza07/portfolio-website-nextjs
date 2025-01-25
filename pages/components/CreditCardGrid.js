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
            imageURL="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/blue-business-plus.png"
            cardName="AMEX Blue Business Plus"
            cardDescription="15K Bonus Points! 2X Points on Everything!"
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/business/8484B0951AE842879EA90498CD2E396B40C8ACA40308FBF73AD8900CBF5BDBCD42F5FB1476008E149B477A1DCD2A9ED9BF6418587E0B0821BB8DD7E0832876C8438A31A8FFB008E3D98220421E9C303BD4A986BB1FA627DC72D03D4357E3F5F9EFB729AE758F685BBF6B2E368A2593BC098AF5D44D2F355EA813891000E218CAB417EC141CBB82B0A37AD7990A8A803D78BAF41B14F48DB8132ADC2A44340A868046E9A7216F881D9989FDD830EF89D67239E6225311C54BEBC971BE5468645633E4B4EC978A7E0A58188A00528A7B2F8445CC3571D5D242?CORID=M~D~I~R~T~H~V~i~I~2-1737844314182-1907590564&GENCODE=349993292993082&extlink=US-MGM-USEFULLINKS-copypaste-1157-201279-K84O%3A9990&ref=MDIRTHViI2&v=2&xl=cp19"
          />
          <CreditCardItem
            imageURL="https://creditcards.wellsfargo.com/W-Card-MarketPlace/v1-14-25-1/images/Products/Bilt/Bilt_card_D.png"
            cardName="Wells Fargo Bilt Mastercard"
            cardDescription="Earn Points on Rent! 3X Dining, 2X Travel! Double points on rent day!"
            referralURL="https://bilt.page/r/1YFG-4S1F"
          />
          <CreditCardItem
            imageURL="https://www.nerdwallet.com/cdn-cgi/image/width=1200,quality=100/cdn/images/marketplace/credit_cards/50e48ec4-0ee6-11ef-9321-a75ef3cf4886/8cc9c7e06a4ff5aca65202716191445ecd4bc6cb8852bcdac706f27ae6e52cdd.jpg"
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
