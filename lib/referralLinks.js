/**
 * Central repository for all credit card referral links
 * Last Updated: April 5, 2026
 *
 * This file contains all referral URLs for credit cards mentioned across the website.
 * URLs are sourced from the most recent blog posts to ensure they're up-to-date.
 */

const referralLinks = {
  // American Express Cards
  amexGold:
    "https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card",

  amexBlueBusinessPlus:
    "https://americanexpress.com/en-us/referral/bluebusinessplus-credit-card?ref=MDIRTHcyin&XLINK=MYCP",

  amexBusinessGold:
    "https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/business/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card",

  amexBusinessPlatinum:
    "https://americanexpress.com/en-us/referral/business-platinum-charge-card?ref=MDIRTHmHuC&xl=cp15",

  amexDeltaPlatinumBusiness:
    "https://americanexpress.com/en-us/referral/delta-skymiles-platinum?ref=MDIRTHUCti&xl=cp15",

  amexHiltonSurpass:
    "https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card",

  amexHiltonHonors:
    "https://www.americanexpress.com/en-us/credit-cards/referral/prospect/cards/personal/vanity/bluebusinessplus-credit-card?CORID=M~D~I~R~T~H~c~y~i~n-1764206443910-993651&GENCODE=349993340941547&XLINK=MYCP&extlink=US-MGM-SPA_WEB_MYCA-copypaste-1110-201329-K44D%3A9951&ref=MDIRTHcyin&v=2&xrefer=bluebusinessplus-credit-card",

  amexAmazonBusinessPrime:
    "https://americanexpress.com/en-us/referral/cobrand/MDIRTHnPBz?xl=cp15",

  amexDeltaGold:
    "https://www.americanexpress.com/us/credit-cards/card/delta-skymiles-gold-american-express-card/",

  // Capital One Cards
  capitalOneVentureX: "https://i.capitalone.com/G35be7pGf",

  capitalOneSavorRewards: "https://i.capitalone.com/GMEE0Fgpz",

  // Chase Cards
  chaseSapphirePreferred: "https://www.referyourchasecard.com/19u/P69MUTKHKM",

  chaseSapphireReserve: "https://www.referyourchasecard.com/19u/P69MUTKHKM",

  chaseFreedomFlex: "https://www.referyourchasecard.com/18m/YDDY4YLY93",

  chaseFreedomUnlimited: "https://www.referyourchasecard.com/18m/YDDY4YLY93#flex-content",

  chaseIHGPremier: "https://www.referyourchasecard.com/210y/U1YREPZMZM",

  chaseInkBusinessCash:
    "https://creditcards.chase.com/business-credit-cards/ink/cash",

  chaseWorldOfHyatt:
    "https://creditcards.chase.com/travel-credit-cards/world-of-hyatt-credit-card",

  chasePrimeVisa:
    "https://creditcards.chase.com/cash-back-credit-cards/amazon-prime-rewards?iCELL=61FY#/",

  // Citi Cards
  citiStrataPremier:
    "https://www.citi.com/credit-cards/citi-strata-premier-credit-card",

  citiStrataElite:
    "https://www.citi.com/credit-cards/citi-strata-elite-credit-card",

  citiCustomCash:
    "https://www.citi.com/credit-cards/citi-custom-cash-credit-card?category=view-all-credit-cards&intc=citihpmenu~creditcards~vac&afc=1C2",

  citiDoubleCash:
    "https://www.citi.com/credit-cards/citi-double-cash-credit-card",

  citiCustomCash:
    "https://www.citi.com/credit-cards/citi-custom-cash-credit-card",

  // Bilt Card
  biltMastercard: "https://bilt.page/r/1YFG-4S1F",

  // Rakuten
  rakutenAmex: "https://r.imprint.co/d95jFB",
  rakutenPortal: "https://www.rakuten.com/r/JBNNVV?eeid=28187",

  // Other Referral Links
  chime: "https://www.chime.com/r/mdirtizahafiz/",
  sofi: "https://www.sofi.com/invite/money?gcp=3fb4136e-fdac-43d9-88fd-08df615119a3&isAliasGcp=false",

  // Wells Fargo Cards
  wellsFargoAutograph:
    "https://creditcards.wellsfargo.com/autograph-visa-credit-card/?SGNTST=SHINYLP&sub_channel=WEB&vendor_code=WF",
};

/**
 * Helper function to get a referral link by card key
 * @param {string} cardKey - The key of the card (e.g., 'amexGold', 'capitalOneVentureX')
 * @returns {string} The referral URL for the card
 */
export function getReferralLink(cardKey) {
  return referralLinks[cardKey] || "";
}

/**
 * Export the entire referralLinks object for direct access
 */
export default referralLinks;
