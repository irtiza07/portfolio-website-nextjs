import matter from "gray-matter";
import path from "path";
import fs from "fs";
import { YOUTUBE_PLAYLIST_ID } from "./constants";

export const comparePublicationDates = (a, b) => {
  const dateA = new Date(a.frontMatter.date);
  const dateB = new Date(b.frontMatter.date);
  return dateB - dateA;
};

export const getSortedPosts = () => {
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

// Fetches the most recent uploads from the channel's uploads playlist. Callers
// run this from getStaticProps, so a failure degrades to an empty list rather
// than failing the build — the sections that render videos just render nothing.
export const getYoutubeVideos = async (maxResults = 10) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
  const API_URL = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${maxResults}&playlistId=${YOUTUBE_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return [];
  }
};

// Fisher-Yates shuffle for unbiased random ordering
export const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
