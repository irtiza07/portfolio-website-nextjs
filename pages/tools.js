import Head from "next/head";
import Link from "next/link";
import { Flex, Box, VStack, Heading, Text } from "@chakra-ui/react";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import toolLinks from "../lib/toolLinks";

export default function Tools({ tools }) {
  const handleLinkClick = (toolName) => {
    try {
      umami.track("tool-clicked");
      umami.track(`${toolName}-clicked`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex bg="#161f27" flexDirection="column" color="white" width="100vw">
      <Head>
        <title>Recommended Tools & Services - Irtiza Hafiz</title>
        <meta
          name="description"
          content="Curated tools and services for personal finance, credit cards, and productivity."
          key="desc"
        />
      </Head>
      <NavBar />
      <Box padding={{ base: "6vw", md: "5vw" }} maxWidth="1000px" mx="auto">
        <VStack spacing={10} align="stretch">
          {Object.entries(tools).map(([category, items]) => (
            <Box key={category}>
              <Heading size="lg" color="#75c682" mb={4}>
                {category}
              </Heading>
              <VStack align="stretch" spacing={3}>
                {items.map((tool, index) => (
                  <Text key={index} fontSize="lg" color="white">
                    <Link
                      href={tool.url}
                      target="_blank"
                      onClick={() => handleLinkClick(tool.name)}
                    >
                      <Text
                        as="span"
                        color="#efe073"
                        textDecoration="underline"
                        _hover={{ color: "#f5f5a3" }}
                      >
                        {tool.name}
                      </Text>
                    </Link>
                    {" - "}
                    {tool.description}
                  </Text>
                ))}
              </VStack>
            </Box>
          ))}
        </VStack>
      </Box>
      <Footer />
    </Flex>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      tools: toolLinks,
    },
  };
};
