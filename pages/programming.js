import fs from "fs";
import Head from "next/head";
import matter from "gray-matter";

// import styles from "../styles/Home.module.css";
import { Flex, Box } from "@chakra-ui/react";
import Banner from "./components/Banner";
import BodyContainer from "./components/BodyContainer";
import BlogGrid from "./components/BlogGrid";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import path from "path";

import YouTubeHorizontalCarousel from "./components/YouTubeHorizontalCarousel";

export default function Programming({ posts, popularPosts, youtubeVideos }) {
  return (
    <Flex bg="#161f27" flexDirection="column" marginBottom={-10}>
      <Head>
        <title>Programming</title>
        <meta
          name="description"
          content="Programming tutorials, system design, software development tips and tricks, and more."
          key="desc"
        />
      </Head>
      <NavBar />
      <Box padding={{ base: "3vw", md: "5vw" }}>
        <YouTubeHorizontalCarousel youtubeVideos={youtubeVideos} />
        <BlogGrid
          posts={popularPosts}
          customHeading={"Featured Posts"}
          maxColumnCount={4}
        />
        <BlogGrid
          posts={posts}
          customHeading={"All Programming Posts"}
          maxColumnCount={4}
        />
      </Box>

      <Footer />
    </Flex>
  );
}

const comparePublicationDates = (a, b) => {
  const dateA = new Date(a.frontMatter.date);
  const dateB = new Date(b.frontMatter.date);
  return dateB - dateA;
};

const getSortedPosts = () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files?.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split(".")[0],
    };
  });
  posts.sort(comparePublicationDates);
  return posts;
};

const getYoutubeVideos = async () => {
  // Fetch YouTube videos
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY; // Ensure you add this key in `.env.local`
  const PLAYLIST_ID = "UUDankIVMXJEkhtjv5yLSN4g"; // Playlist ID
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;

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
  const popularPosts = posts.filter(
    (post) => post.frontMatter.isPopular === true
  );

  const youtubeVideos = await getYoutubeVideos();

  return {
    props: {
      posts: posts,
      popularPosts: popularPosts,
      youtubeVideos: youtubeVideos,
    },
  };
};
