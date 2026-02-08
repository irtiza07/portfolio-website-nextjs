import { Button } from "@chakra-ui/react";
import { colors, CONSULTATION_URL } from "../lib/constants";

export default function BookConsultationButton() {
  const handleClick = () => {
    try {
      umami.track("free-consultation-button-click");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      as="a"
      href={CONSULTATION_URL}
      target="_blank"
      rel="noopener noreferrer"
      bg={colors.accentYellow}
      color={colors.textDark}
      size="md"
      borderRadius="md"
      _hover={{ bg: colors.accentYellowHover }}
      onClick={handleClick}
    >
      Free Consultation
    </Button>
  );
}
