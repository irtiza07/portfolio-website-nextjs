import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLinkIcon } from "@chakra-ui/icons";

import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  HStack,
  Grid,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  VStack,
} from "@chakra-ui/react";

export default function RecommendationsModal({
  isOpen,
  onClose,
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
          width={[500]}
        >
          <ModalHeader>Irtiza's Related Content</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Tabs>
              <TabList>
                <Tab>Blog</Tab>
                <Tab>YouTube</Tab>
              </TabList>

              <TabPanels>
                <TabPanel>
                  <Grid gap={[5, 8]}>
                    {recommendations
                      ?.filter((rec) => rec[3] === 0)
                      .map((rec, index) => (
                        <Link href={rec[1]} target="_blank" key={index}>
                          <HStack>
                            <Text color="black" fontSize="lg">
                              {rec[0]} <ExternalLinkIcon color="#f57373" />
                            </Text>
                          </HStack>
                        </Link>
                      ))}
                  </Grid>
                </TabPanel>
                <TabPanel>
                  <Grid gap={[5, 8]}>
                    {recommendations
                      ?.filter((rec) => rec[3] === 1)
                      .map((rec, index) => (
                        <Link href={rec[1]} target="_blank" key={index}>
                          <VStack>
                            <Image
                              src={rec[4]}
                              alt="Irtiza Hafiz's avatar"
                              width={360}
                              height={90}
                            ></Image>
                            <HStack>
                              <Text color="black" fontSize="lg">
                                {rec[0]} <ExternalLinkIcon color="#f57373" />
                              </Text>
                            </HStack>
                          </VStack>
                        </Link>
                      ))}
                  </Grid>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
