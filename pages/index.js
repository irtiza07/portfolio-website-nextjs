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

export default function Home({ posts }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Irtiza Hafiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bg="#161f27" flexDirection="column">
        <NavBar />
        <Banner />
        <BodyContainer posts={posts} />
        <Flex h="200px"></Flex>
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

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

  return {
    props: {
      posts,
    },
  };
};
