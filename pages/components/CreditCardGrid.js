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
        imageURL="/amex-gold.png"
        cardName="American Express Gold"
        cardDescription="Best travel card for foodies"
        referralURL="https://americanexpress.com/en-us/referral/gold-card?ref=MDIRTHlsVP&XLINK=MYCP"
      />
      <CreditCardItem
        imageURL="/venture-x.png"
        cardName="Capital One Venture X"
        cardDescription="Overall best budget travel card"
        referralURL="https://i.capitalone.com/G35be7pGf"
      />
      <CreditCardItem
        imageURL="/blue-business-plus.png"
        cardName="Blue Business Plus"
        cardDescription="Great no annual fee AMEX catch-all travel card"
        referralURL="https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=MDIRTHTjpg&XLINK=MYCP"
      />
      <CreditCardItem
        imageURL="/hilton-business.png"
        cardName="Hilton Honors Business AMEX"
        cardDescription="A great hotel card for free nights"
        referralURL="https://americanexpress.com/en-us/referral/hilton-honors-american-express-business-credit-card?ref=MDIRTHKZNs&XLINK=MYCP"
      />
      <CreditCardItem
        imageURL="/freedom_flex.png"
        cardName="Chase Freedom Flex"
        cardDescription="Great starter travel card with no annual fee"
        referralURL="https://www.referyourchasecard.com/18M/ARAD5PMZDU"
      />
      <CreditCardItem
        imageURL="/marriott-business.png"
        cardName="Marriott Bonvoy Business AMEX"
        cardDescription="A great hotel card for free nights"
        referralURL="https://americanexpress.com/en-us/referral/marriott-bonvoy-business-american-express-card?ref=MDIRTHxnGK&XLINK=MYCP"
      />

      <CreditCardItem
        imageURL="/IHG-Premier-2023.png"
        cardName="Chase IHG Premier"
        cardDescription="Great domestic and international budget hotel card"
        referralURL="https://www.referyourchasecard.com/210J/1XJ2MVKHIH"
      />
    </Grid>
  );
}
