import React from "react";
import { Stack, Input, Button, useToast } from "@chakra-ui/react";
import { colors, API_RECOMMENDATIONS_URL, CONTENT_CATEGORY } from "../lib/constants";

const RAINBOW_BOX_SHADOW =
  "0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 0, 255, 0.5)";

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
      umami.track("smart-search-btn-click");
      umami.track(`${searchQueryText}-SMART-SEARCH`);
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
        placeholder="Smart AI Search"
        size="lg"
        color="white"
        width={["90%"]}
        borderRadius="full"
        boxShadow={RAINBOW_BOX_SHADOW}
        onChange={(e) => setSearchQueryText(e.target.value)}
        value={searchQueryText}
      />
      <Button
        bg={colors.accentRed}
        color={colors.textDark}
        size="lg"
        borderRadius="full"
        boxShadow={RAINBOW_BOX_SHADOW}
        onClick={(e) => fetchRecommendations()}
        isDisabled={!searchQueryText}
      >
        Search
      </Button>
    </Stack>
  );
}
