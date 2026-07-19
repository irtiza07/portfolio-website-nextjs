// Theme colors used across the site.
//
// The palette is light/warm: a cream page with dark charcoal nav and footer
// bars, and a single olive accent. `accentYellow` and `accentRed` kept their
// names through the switch from the previous dark theme so call sites did not
// all have to change — they no longer describe their hue.
export const colors = {
  bgPrimary: "#fffaf5",
  bgCard: "#f4efe6",
  bgNavbar: "#292524",
  bgFooter: "#292524",
  accentGreen: "#51641D", // links, post titles, h2
  accentYellow: "#51641D", // CTAs and inline links
  accentYellowHover: "#3a4a15",
  accentRed: "#78716c", // dates and other muted meta
  textPrimary: "#1c1917",
  textLight: "#57534e",
  textDark: "#1c1917",
  textMuted: "#a8a29e",
  borderSubtle: "#efeae2",
  borderControl: "#e7e2da",
  onDark: "#ffffff", // text sitting on the nav/footer bar
  onDarkMuted: "#d6d3d1",
  logo: "#8FAE55",
};

// Post topics, keyed by the `topic` frontmatter field. The order here is the
// order topic groups render in on the section pages.
export const TOPICS = {
  "software-development": "Software Development",
  "engineering-management": "Engineering Management",
  "trip-reports": "Trip Reports",
  "card-strategy": "Card Strategy",
  "everyday-earnings": "Everyday Earnings",
};

// High-level sections, keyed by the first entry of a post's `tags` field.
// Used to group the homepage list; the section pages group by TOPICS instead.
export const SECTIONS = {
  programming: "Software Development",
  "credit-cards": "Travel",
};

// CDN base URL for static assets
export const CDN_BASE_URL = "https://ds0fmzhunbzyk.cloudfront.net";

// API endpoints
export const API_RECOMMENDATIONS_URL = "https://api.irtizahafiz.com/recommendations";

// YouTube
export const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/channel/UCDankIVMXJEkhtjv5yLSN4g/about";
export const YOUTUBE_PLAYLIST_ID = "UUDankIVMXJEkhtjv5yLSN4g";

// External links
export const SUBSTACK_SUBSCRIBE_URL =
  "https://codewithirtiza.substack.com/subscribe?utm_source=website";
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
  // AMEX personal
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/amex-gold.png`,
    cardName: "American Express Gold",
    cardDescription: "4X Restaurants & Groceries! 3X Flights! $400+ Food Credits! 100K Bonus Points!",
    referralKey: "amexGold",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/bilt-palladium.png`,
    cardName: "Bilt Palladium",
    cardDescription: "2X on Everything! Up to 1.25X on Rent & Mortgage! $400 Hotel Credits! $200 Annual Bilt Cash! Priority Pass Lounge Access!",
    referralKey: "biltPalladium",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/hilton-surpass.png`,
    cardName: "Hilton Surpass Card",
    cardDescription: "12X Hilton Purchases! 6X Restaurants, Groceries, & Gas! 130K Bonus Points!",
    referralKey: "amexHiltonSurpass",
  },

  // Capital One personal
  {
    imageURL: `${CDN_BASE_URL}/venture-x.png`,
    cardName: "Capital One Venture X",
    cardDescription: "Unlimited 2X miles! Lounge Access! 75K Bonus Miles! $300 Travel Credit! 10K Anniversary Bonus!",
    referralKey: "capitalOneVentureX",
  },
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/savor-one.png`,
    cardName: "Capital One Savor Rewards",
    cardDescription: "3X Restaurants, Groceries & Entertainment! $300 Bonus!",
    referralKey: "capitalOneSavorRewards",
  },

  // Other personal
  {
    imageURL: `${CDN_BASE_URL}/credit-cards-photos/sapphire_preferred.png`,
    cardName: "Chase Sapphire Preferred",
    cardDescription: "3X Dining, 2X Travel, 60K Bonus Points! $50 Travel Credit!",
    referralKey: "chaseSapphirePreferred",
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

  // Business
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
];
