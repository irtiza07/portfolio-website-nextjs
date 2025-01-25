import React from "react";
import Link from "next/link";
import { Box, Text, Heading, HStack } from "@chakra-ui/react";

export default function Categories({ categories }) {
  return (
    <Box textAlign="center">
      <Heading mb={6} fontSize="2xl" color="white">
        Explore Topics
      </Heading>

      <HStack spacing={6} justify="center">
        {categories?.map((category) => (
          <Box
            key={category.slug}
            bg="white"
            boxShadow="lg"
            borderRadius="lg"
            p={4}
            textAlign="center"
            _hover={{
              transform: "scale(1.20)",
              boxShadow: "xl",
            }}
            transition="all 0.3s ease"
            cursor={"pointer"}
          >
            <Link href={`/${category.slug}`} passHref>
              <Text
                as="span"
                fontWeight="bold"
                fontSize="lg"
                color="blue.900"
                cursor="pointer"
              >
                {category.label}
              </Text>
            </Link>
          </Box>
        ))}
      </HStack>
    </Box>
  );
}
