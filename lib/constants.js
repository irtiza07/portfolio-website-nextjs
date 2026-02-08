// Theme colors used across the site
export const colors = {
  bgPrimary: "#161f27",
  bgCard: "#1e262f",
  bgNavbar: "#0d1117",
  bgFooter: "#0c1115",
  accentGreen: "#75c682",
  accentYellow: "#efe073",
  accentYellowHover: "#d6c55f",
  accentRed: "#f57373",
  textPrimary: "#ffffff",
  textLight: "#F6F6F6",
  textDark: "#191919",
};

// CDN base URL for static assets
export const CDN_BASE_URL = "https://ds0fmzhunbzyk.cloudfront.net";

// API endpoints
export const API_RECOMMENDATIONS_URL = "https://api.irtizahafiz.com/recommendations";
export const API_NEWSLETTER_URL = "https://newsletter.irtizahafiz.com/api/public/subscription";
export const NEWSLETTER_LIST_UUID = "b557290a-cdd2-47c2-bb74-ffa01d640a2d";

// YouTube
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about";
export const YOUTUBE_PLAYLIST_ID = "UUDankIVMXJEkhtjv5yLSN4g";

// External links
export const CONSULTATION_URL = "https://calendar.app.google/r73Gpou1jCVSj36DA";
export const MEDIUM_URL = "https://medium.com/@irtizahafiz";
export const LINKEDIN_URL = "https://www.linkedin.com/in/irtiza-hafiz/";

// Carousel scroll amount in pixels
export const CAROUSEL_SCROLL_AMOUNT = 300;

// Content category IDs from the recommendations API
export const CONTENT_CATEGORY = {
  YOUTUBE: 1,
  BLOG: 2,
};

// Credit card data for the carousel
export const creditCards = [
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/amex-gold.png`,
    cardName: "American Express Gold",
    cardDescription: "4X Restaurants & Groceries! 3X Flights! $400+ Food Credits! 100K Bonus Points!",
    referralKey: "amexGold",
  },
  {
    imageURL: `${CDN_BASE_URL}/venture-x.png`,
    cardName: "Capital One Venture X",
    cardDescription: "Unlimited 2X miles! Lounge Access! 75K Bonus Miles! $300 Travel Credit! 10K Anniversary Bonus!",
    referralKey: "capitalOneVentureX",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/amex-business-gold.png`,
    cardName: "American Express Business Gold",
    cardDescription: "4X on Cloud & Software Spend, Tech Gadgets, Advertising, Gas, Transit! 100K Bonus Points!",
    referralKey: "amexBusinessGold",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/amex-blue-business-plus.png`,
    cardName: "AMEX Blue Business Plus",
    cardDescription: "15K Bonus Points! 2X Points on Everything!",
    referralKey: "amexBlueBusinessPlus",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/amex-business-platinum.png`,
    cardName: "American Express Business Platinum",
    cardDescription: "5X on Flights! $3,500+ in credits! Lounge Access! 200K Bonus Points!",
    referralKey: "amexBusinessPlatinum",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/amex-platinum-delta-business.png`,
    cardName: "American Express Delta Platinum Business",
    cardDescription: "3X on Delta Purchases! Free Companion Certificate! 70K Bonus Miles!",
    referralKey: "amexDeltaPlatinumBusiness",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/savor-one.png`,
    cardName: "Capital One Savor Rewards",
    cardDescription: "3X Restaurants, Groceries & Entertainment! $300 Bonus!",
    referralKey: "capitalOneSavorRewards",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/sapphire_preferred.png`,
    cardName: "Chase Sapphire Preferred",
    cardDescription: "3X Dining, 2X Travel, 60K Bonus Points! $50 Travel Credit!",
    referralKey: "chaseSapphirePreferred",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/hilton-surpass.png`,
    cardName: "Hilton Surpass Card",
    cardDescription: "12X Hilton Purchases! 6X Restaurants, Groceries, & Gas! 130K Bonus Points!",
    referralKey: "amexHiltonSurpass",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/freedom_flex.png`,
    cardName: "Chase Freedom Flex",
    cardDescription: "5X rotating categories! 3X Dining & Drugstores! $200 Bonus!",
    referralKey: "chaseFreedomFlex",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/ihg-premier.png`,
    cardName: "Chase IHG Premier",
    cardDescription: "26X IHG Purchases! 5X Restaurants, Travel & Gas! 140K Bonus Points! 5+ Free Nights!",
    referralKey: "chaseIHGPremier",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/citi-strata-premier.png`,
    cardName: "Citi Strata Premier",
    cardDescription: "3X Points on Flights, Hotels, Restaurants, Groceries and Gas Stations! 75K Bonus Points!",
    referralKey: "citiStrataPremier",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/citi-strata-elite.png`,
    cardName: "Citi Strata Elite",
    cardDescription: "12X Points on Hotels! 6X on Flights! 1.5X Everything else! 100K Bonus Points!",
    referralKey: "citiStrataElite",
  },
];
