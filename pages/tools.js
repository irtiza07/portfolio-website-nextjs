import Link from "next/link";
import { Box, VStack, Heading, Text } from "@chakra-ui/react";
import Layout from "../components/Layout";
import toolLinks from "../lib/toolLinks";
import { colors } from "../lib/constants";

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
    <Layout
      title="Recommended Tools & Services - Irtiza Hafiz"
      description="Curated tools and services for personal finance, credit cards, and productivity."
      color="white"
      width="100vw"
    >
      <Box padding={{ base: "6vw", md: "5vw" }} maxWidth="1000px" mx="auto">
        <VStack spacing={10} align="stretch">
          {Object.entries(tools).map(([category, items]) => (
            <Box key={category}>
              <Heading size="lg" color={colors.accentGreen} mb={4}>
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
                        color={colors.accentYellow}
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
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      tools: toolLinks,
    },
  };
};
