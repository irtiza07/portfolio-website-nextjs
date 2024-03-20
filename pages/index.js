import fs from "fs";
import Head from "next/head";
import matter from "gray-matter";

// import styles from "../styles/Home.module.css";
import {
  ChakraProvider,
  Container,
  Heading,
  Center,
  VStack,
  HStack,
  Image,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import Banner from "./components/Banner";
import Categories from "./components/Categories";
import BlogCard from "./components/BlogCard";
import BlogGrid from "./components/BlogGrid";
import PopularContentContainer from "./components/PopularContentContainer";
import BodyContainer from "./components/BodyContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import path from "path";

export default function Home({ posts, popularPosts }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Irtiza Hafiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bg="#161f27" flexDirection="column">
        <NavBar />
        <Banner />
        <BodyContainer posts={posts} popularPosts={popularPosts} />
        <Flex h="200px"></Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

//TODO: (1) For every file, check popular metadata (2) Compute category by reading tag
//TODO: Return: (1) posts sorted by date (2) popular_posts (3) categories_count_map
export const getStaticProps = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
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

  const popularPosts = [];
  for (let i = 0; i < posts.length; i++) {
    if (posts[i]["frontMatter"]["isPopular"] === true) {
      popularPosts.push(posts[i]);
    }
  }

  return {
    props: {
      posts: posts,
      popularPosts: popularPosts,
    },
  };
};
