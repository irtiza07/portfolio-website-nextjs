import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { Heading, VStack, Flex, Text, Box } from "@chakra-ui/react";
import Head from "next/head";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import CreditCardGrid from "./components/CreditCardGrid";
import Categories from "./components/Categories";
import BlogContainer from "./components/BlogContainer";
import BlogGrid from "./components/BlogGrid";

export default function CreditCards({ posts }) {
  return (
    <Flex bg="#161f27" flexDirection="column" color="white" width="100vw">
      <Head>
        <title>Credit Cards</title>
        <meta
          name="description"
          content="Best travel credit cards that will help you travel the world for free."
          key="desc"
        />
      </Head>
      <NavBar />
      <Box padding={{ base: "3vw", md: "5vw" }}>
        <CreditCardGrid />
        <BlogGrid
          posts={posts}
          customHeading={"Credit Card Talk"}
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
  return posts.filter((post) => post.frontMatter.tags[0] === "credit-cards");
};

export const getStaticProps = async () => {
  const posts = getSortedPosts();

  return {
    props: {
      posts: posts,
    },
  };
};
