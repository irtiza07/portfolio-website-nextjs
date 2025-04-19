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
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/MDIRTHKnkk?CORID=M~D~I~R~T~H~K~n~k~k-1745027488243-1093634&GENCODE=349993292993082&extlink=US-MGM-RAB-USEFULINKSL-copypaste-1157-201279-K84O%3A9990&ref=MDIRTHKnkk&v=2&xl=cp10lg"
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
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/business/F0A5EFF6DE5834DACD09B0A8FC7727D340C8ACA40308FBF73AD8900CBF5BDBCD42F5FB1476008E14272AA0C0C9EE8A0FBF6418587E0B0821C111EFC5E18A7A42438A31A8FFB008E3D98220421E9C303BD4A986BB1FA627DC72D03D4357E3F5F9EFB729AE758F685B99A902A32A4A32E727A2725BA9953A1A7BF9E09D78B3CDCADAEC21239C850BC6529A712B584D228E422A5E21B1EB6DB0BD57D6378FC40EC50ED798BDA046A6B02B7888094FC6B61F3F14E0ABE0779ADEB9BFBCD89EB14A63975F4130ADDF53C40F10633B88187951?CORID=M~D~I~R~T~H~k~u~7~w-1737902929181-77528221&GENCODE=349992856309180&extlink=US-MGM-USEFULLINKS-copypaste-784-201279-K3QE%3A9919&ref=MDIRTHku7w&v=2&xl=cp19"
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
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/personal/ACAA53586B21F3AD8712636A39F2349B29CB74F8418EF2A8A79AF33CFC7A7D0C73BD99752F5A1172E5F16CB4A681FD6E6B01486BAF6B111C75959962EBB2A77E96AA2D694396DD89EA5E2A9A3F2B2704B655B58825053C2FAFEDFD9652CAC47E958AE37F243B98D65B6FA22E22287B7B9F5593F780AB18E91D2FA62E82C6B12987C6C0F74682020191454460C28512726759A0457BCDFF6A541481ADBA2F732671AFC3100F6D596941BF714DE0BA30737C36CBB869611680E55DAA183B7CA14D051F311350B667BF517C3F4532CEA26F?CORID=M~D~I~R~T~H~K~n~k~k-1745027488243-1093634&GENCODE=349993292993082&extlink=US-MGM-RAB-USEFULINKSL-copypaste-1157-201279-K84O%3A9990&ref=MDIRTHKnkk&v=2&xl=cp10lg"
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
            referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/business/8484B0951AE842879EA90498CD2E396B40C8ACA40308FBF73AD8900CBF5BDBCD42F5FB1476008E149B477A1DCD2A9ED9BF6418587E0B0821BB8DD7E0832876C8438A31A8FFB008E3D98220421E9C303BD4A986BB1FA627DC72D03D4357E3F5F9EFB729AE758F685BBF6B2E368A2593BC098AF5D44D2F355EA813891000E218CAB417EC141CBB82B0A37AD7990A8A803D78BAF41B14F48DB8132ADC2A44340A868046E9A7216F881D9989FDD830EF89D67239E6225311C54BEBC971BE5468645633E4B4EC978A7E0A58188A00528A7B2F8445CC3571D5D242?CORID=M~D~I~R~T~H~V~i~I~2-1737844314182-1907590564&GENCODE=349993292993082&extlink=US-MGM-USEFULLINKS-copypaste-1157-201279-K84O%3A9990&ref=MDIRTHViI2&v=2&xl=cp19"
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
