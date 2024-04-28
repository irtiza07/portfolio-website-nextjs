import React from "react";
import { Stack, Input, Button } from "@chakra-ui/react";

export default function SmartSearch({
  searchQueryText,
  setSearchQueryText,
  setRecommendations,
  openModal,
}) {
  const fetchRecommendations = async () => {
    try {
      const response = await fetch(
        `https://api.irtizahafiz.com/recommendations?user_query=${searchQueryText}`
      );
      if (response.ok) {
        const jsonData = await response.json();
        setRecommendations(jsonData["data"]);
        openModal();
      } else {
        console.error("Failed to fetch data:", response.statusText);
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
    <Stack direction={"row"} spacing={[4, 8]} width={[350]}>
      <Input
        placeholder="[Beta] Smart AI Search"
        size="lg"
        color="white"
        width={80}
        borderRadius="full"
        boxShadow="0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 0, 255, 0.5)"
        onChange={(e) => setSearchQueryText(e.target.value)}
        value={searchQueryText}
      />
      <Button
        bg="#f57373"
        color="#191919"
        size="lg"
        borderRadius="full"
        boxShadow="0 0 10px rgba(255, 0, 0, 0.5), 0 0 20px rgba(255, 255, 0, 0.5), 0 0 30px rgba(0, 255, 0, 0.5), 0 0 40px rgba(0, 0, 255, 0.5)"
        onClick={(e) => fetchRecommendations()}
        isDisabled={!searchQueryText}
      >
        Search
      </Button>
    </Stack>
  );
}
