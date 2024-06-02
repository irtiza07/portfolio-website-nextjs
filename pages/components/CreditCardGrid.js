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
        referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/card/personal/gold-card?CORID=M~D~I~R~T~H~l~s~V~P-1716869724197-335029737&GENCODE=349992856309180&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-784-201329-K3QE%3A9941&ref=MDIRTHlsVP&v=2"
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
        referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/card/bluebusinessplus-credit-card?ref=MDIRTHTjpg&XLINK=MYCP"
      />
      <CreditCardItem
        imageURL="/hilton-honors-business-new.png"
        cardName="Hilton Honors Business AMEX"
        cardDescription="A great hotel card for free nights"
        referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/card/business/hilton-honors-american-express-business-credit-card?CORID=M~D~I~R~T~H~K~Z~N~s-1716869983733-457393160&GENCODE=349993147096747&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1131-201329-K58R%3A9985&ref=MDIRTHKZNs&v=2"
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
        referralURL="https://www.americanexpress.com/en-us/credit-cards/referral/prospect/card/business/marriott-bonvoy-business-american-express-card?CORID=M~D~I~R~T~H~x~n~G~K-1716870001159-506418675&GENCODE=349993210455784&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-474-201329-K73M%3A9991&ref=MDIRTHxnGK&v=2"
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
