import { Box } from "@chakra-ui/react";
import BlogGrid from "../components/BlogGrid";
import Layout from "../components/Layout";
import YouTubeHorizontalCarousel from "../components/YouTubeHorizontalCarousel";
import { getSortedPosts } from "../lib/logic";
import { YOUTUBE_PLAYLIST_ID } from "../lib/constants";

export default function Programming({ posts, youtubeVideos }) {
  return (
    <Layout
      title="Programming"
      description="Programming tutorials, system design, software development tips and tricks, and more."
      marginBottom={-10}
    >
      <Box padding={{ base: "3vw", md: "5vw" }}>
        <YouTubeHorizontalCarousel youtubeVideos={youtubeVideos} />
        <BlogGrid posts={posts} maxColumnCount={4} />
      </Box>
    </Layout>
  );
}

const getYoutubeVideos = async () => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};

export const getStaticProps = async () => {
  const posts = getSortedPosts().filter(
    (post) => post.frontMatter.tags[0] === "programming"
  );
  const youtubeVideos = await getYoutubeVideos();

  return {
    props: {
      posts: posts,
      youtubeVideos: youtubeVideos,
    },
  };
};
