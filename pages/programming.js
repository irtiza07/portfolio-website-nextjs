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

export default function Programming({ posts, popularPosts }) {
  return (
    <Flex bg="#161f27" flexDirection="column" marginBottom={-10}>
      <Head>
        <title>Programming</title>
        <meta
          name="description"
          content="Programming tutorials, software development tips and tricks, and more."
          key="desc"
        />
      </Head>
      <NavBar />
      <Box padding={{ base: "3vw", md: "5vw" }}>
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

export const getStaticProps = async () => {
  const posts = getSortedPosts().filter(
    (post) => post.frontMatter.tags[0] === "programming"
  );
  const popularPosts = posts.filter(
    (post) => post.frontMatter.isPopular === true
  );

  return {
    props: {
      posts: posts,
      popularPosts: popularPosts,
    },
  };
};
