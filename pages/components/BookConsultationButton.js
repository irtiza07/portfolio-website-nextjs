import { Button } from "@chakra-ui/react";

export default function BookConsultationButton() {
  const handleClick = () => {
    umami.track("free-consultation-button-click");
  };

  return (
    <Button
      as="a"
      href="https://calendar.app.google/r73Gpou1jCVSj36DA"
      target="_blank"
      rel="noopener noreferrer"
      bg="#efe073"
      color="#191919"
      size="md"
      borderRadius="md"
      _hover={{ bg: "#d6c55f" }}
      onClick={handleClick}
    >
      Free Consultation
    </Button>
  );
}
