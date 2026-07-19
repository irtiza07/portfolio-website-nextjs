import React from "react";
import { Stack, Input, Button, useToast } from "@chakra-ui/react";
import { colors, API_RECOMMENDATIONS_URL, CONTENT_CATEGORY } from "../lib/constants";

export default function SmartSearch({
  searchQueryText,
  setSearchQueryText,
  setRecommendations,
  openModal,
}) {
  const tooManyCharactersErrorToast = useToast();
  const fetchRecommendations = async () => {
    try {
      const response = await fetch(
        `${API_RECOMMENDATIONS_URL}?user_query=${searchQueryText}`
      );
      if (response.ok) {
        let blogRecs = [];
        let youtubeRecs = [];
        const jsonData = await response.json();
        jsonData["data"].forEach((content) => {
          if (content.content_category_id === CONTENT_CATEGORY.BLOG) {
            blogRecs.push(content);
          }
          if (content.content_category_id === CONTENT_CATEGORY.YOUTUBE) {
            youtubeRecs.push(content);
          }
        });
        setRecommendations({ blog: blogRecs, youtube: youtubeRecs });
        openModal();
      } else {
        console.error("Failed to fetch data:", response.status);
        if (response.status === 422) {
          tooManyCharactersErrorToast({
            title: "Max Characters Reached",
            description:
              "Keep it less than 100 characters. AI is expensive 😭 ",
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        }
      }
    } catch (error) {
      console.error("Network error:", error.message);
    }
    try {
      umami.track("Smart Search", { query: searchQueryText?.slice(0, 100) });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Stack
      direction={"row"}
      spacing={[4, 8]}
      width={["100%", "80%", "60%"]}
      justifyContent={"center"}
    >
      <Input
        placeholder="What are you looking for?"
        size="lg"
        color={colors.textLight}
        bg={colors.onDark}
        borderColor={colors.borderControl}
        _placeholder={{ color: colors.textMuted }}
        width={["90%"]}
        borderRadius="full"
        onChange={(e) => setSearchQueryText(e.target.value)}
        value={searchQueryText}
      />
      <Button
        bg={colors.accentYellow}
        color={colors.onDark}
        _hover={{ bg: colors.accentYellowHover }}
        size="lg"
        borderRadius="full"
        onClick={(e) => fetchRecommendations()}
        isDisabled={!searchQueryText}
      >
        Search
      </Button>
    </Stack>
  );
}
