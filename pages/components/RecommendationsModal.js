import React from "react";
import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Heading,
  Text,
  Spacer,
  Stack,
  Modal,
  ModalOverlay,
  Lorem,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  Grid,
  VStack,
} from "@chakra-ui/react";

export default function RecommendationsModal({
  isOpen,
  onClose,
  onOpen,
  recommendations,
}) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          margin={[3]}
          borderRadius={20}
          boxShadow="0 0 50px rgba(255, 0, 0, 0.5), 0 0 50px rgba(255, 255, 0, 0.5), 0 0 50px rgba(0, 255, 0, 0.5), 0 0 50px rgba(0, 0, 255, 0.5)"
        >
          <ModalHeader>Related Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Grid gap={[5, 8]}>
              {recommendations?.map((rec, index) => (
                <Link href={rec[1]} target="_blank">
                  <HStack>
                    <Text color="black" fontSize="lg">
                      {rec[0]} <ExternalLinkIcon color="#f57373" />
                    </Text>
                  </HStack>
                </Link>
              ))}
            </Grid>
          </ModalBody>

          <ModalFooter>
            <Button onClick={onClose} bg="#f57373" color="white">
              Not Interested
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}