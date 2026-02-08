/**
 * Central repository for all tool and service links
 * Last Updated: February 7, 2026
 *
 * Simple list of tools organized by category.
 */

import referralLinks from "./referralLinks";

const toolLinks = {
  "Personal Finance": [
    {
      name: "Rakuten",
      description: "Favorite shopping portal! Earn AMEX MR or Bilt points!",
      url: "https://www.rakuten.com/r/JBNNVV?eeid=28187",
    },
    {
      name: "SoFi",
      description: "Favorite bank account with tons of automations!",
      url: "https://www.sofi.com/invite/money?gcp=d20669b4-c681-4f15-9900-7b300ba20b02&isAliasGcp=false",
    },
    {
      name: "Coinbase",
      description: "Favorite crypto exchange!",
      url: "https://coinbase.com/join/4V8HRGN?src=referral-link",
    },
    {
      name: "Upside",
      description: "Earn even more on gas purchases!",
      url: "https://upside.app.link/MF5PZ",
    },
  ],

  "Favorite Credit Cards": [
    {
      name: "American Express Gold",
      description: "Favorite food card!",
      url: referralLinks.amexGold,
    },
    {
      name: "Capital One Venture X",
      description: "Favorite travel card!",
      url: referralLinks.capitalOneVentureX,
    },
    {
      name: "Capital One Savor",
      description: "Pairs well with VentureX! Best 2-card setup!",
      url: referralLinks.capitalOneSavorRewards,
    },
    {
      name: "Hilton Surpass",
      description: "Favorite hotel card!",
      url: referralLinks.amexHiltonSurpass,
    },
  ],

  Productivity: [
    {
      name: "Claude Code",
      description: "Favorite AI coding assistant!",
      url: "https://docs.anthropic.com/en/home",
    },
    {
      name: "VS Code",
      description: "Favorite code editor for 10+ years!",
      url: "https://code.visualstudio.com/",
    },
    {
      name: "TickTick",
      description:
        "All-in-one task manager, calendar, focus time, and habit tracker!",
      url: "https://ticktick.com/",
    },
    {
      name: "Obsidian",
      description: "Favorite note-taking app!",
      url: "https://obsidian.md/",
    },
    {
      name: "Pocket Casts",
      description: "Favorite podcast app!",
      url: "https://pocketcasts.com/",
    },
  ],
};

export default toolLinks;
