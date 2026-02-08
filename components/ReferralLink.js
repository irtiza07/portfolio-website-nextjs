import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import referralLinks from "../lib/referralLinks";
import { colors } from "../lib/constants";

/**
 * ReferralLink component for credit card referral links in MDX
 * Maintains consistent styling with other links while pulling URLs from central file
 *
 * Usage in MDX: <ReferralLink card="amexGold">American Express Gold</ReferralLink>
 */
export default function ReferralLink({ card, children }) {
  const url = referralLinks[card] || "#";

  return (
    <Text
      as={"span"}
      fontSize={"md"}
      color={colors.accentYellow}
      fontStyle={"italic"}
      fontWeight={"extrabold"}
      borderBottom="2px"
    >
      <Link href={url} target="_blank">
        {children}
      </Link>
    </Text>
  );
}
