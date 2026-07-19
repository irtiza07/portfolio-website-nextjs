import { Button } from "@chakra-ui/react";
import { colors, SUBSTACK_SUBSCRIBE_URL } from "../lib/constants";

export default function SubscribeButton() {
  const handleClick = () => {
    try {
      umami.track("Subscribe Click");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      as="a"
      href={SUBSTACK_SUBSCRIBE_URL}
      target="_blank"
      rel="noopener noreferrer"
      bg={colors.accentYellow}
      color={colors.onDark}
      size="md"
      borderRadius="md"
      _hover={{ bg: colors.accentYellowHover }}
      onClick={handleClick}
    >
      Subscribe
    </Button>
  );
}
