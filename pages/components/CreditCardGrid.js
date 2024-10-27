import React from "react";
import { Grid } from "@chakra-ui/react";

import CreditCardItem from "./CreditCardItem";

export default function CreditCardGrid() {
  return (
    <Grid
      templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap="1vw"
      padding="4vw"
    >
      <CreditCardItem
        imageURL="https://icm.aexp-static.com/acquisition/card-art/NUS000000174_480x304_straight_withname.png"
        cardName="American Express Gold"
        cardDescription="Best travel card for foodies!"
        referralURL="https://americanexpress.com/en-us/referral/gold-card?ref=MDIRTHlsVP&XLINK=MYCP"
      />
      <CreditCardItem
        imageURL="https://ecm.capitalone.com/WCM/card/products/venturex-cg-static-card-1000x630-2.png"
        cardName="Capital One Venture X"
        cardDescription="Best travel card w/ lounge access!"
        referralURL="https://i.capitalone.com/G35be7pGf"
      />
      <CreditCardItem
        imageURL="https://ecm.capitalone.com/WCM/card/products/new-savor-card-art.png"
        cardName="Capital One Savor Rewards"
        cardDescription="Great for dining and entertainment!"
        referralURL="https://i.capitalone.com/GMEE0Fgpz"
      />
      <CreditCardItem
        imageURL="https://icm.aexp-static.com/acquisition/card-art/NUS000000328_480x304_straight_withname.png"
        cardName="Hilton Surpass Card"
        cardDescription="A great hotel card for free nights!"
        referralURL="https://americanexpress.com/en-us/referral/hilton-honors?ref=MDIRTHOKzl&xl=cp19"
      />

      <CreditCardItem
        imageURL="https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/sapphire_preferred_card.png"
        cardName="Chase Sapphire Preferred"
        cardDescription="Great starter travel card!"
        referralURL="https://www.referyourchasecard.com/19P/16Y2381WRD"
      />
      <CreditCardItem
        imageURL="https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/freedom_flex_card_alt.png"
        cardName="Chase Freedom Flex"
        cardDescription="One of the best for beginners!"
        referralURL="https://www.referyourchasecard.com/18C/3L7F0V1ZVE"
      />
      <CreditCardItem
        imageURL="https://creditcards.chase.com/content/dam/jpmc-marketplace/card-art/ihg_premier_card.png"
        cardName="Chase IHG Premier"
        cardDescription="Great for budget hotel stays!"
        referralURL="https://www.referyourchasecard.com/210u/J50K6HKH43"
      />
      <CreditCardItem
        imageURL="https://icm.aexp-static.com/Internet/Acquisition/US_en/AppContent/OneSite/open/category/cardarts/blue-business-plus.png"
        cardName="Blue Business Plus"
        cardDescription="One card setup for MR points!"
        referralURL="https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=MDIRTHTjpg&XLINK=MYCP"
      />
      <CreditCardItem
        imageURL="https://creditcards.wellsfargo.com/W-Card-MarketPlace/v10-17-24/images/Products/Bilt/Bilt_card_D.png"
        cardName="Bilt Mastercard"
        cardDescription="Only way to earn points on rent!"
        referralURL="https://bilt.page/r/1YFG-4S1F"
      />
    </Grid>
  );
}
