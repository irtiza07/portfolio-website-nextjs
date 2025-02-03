import Head from "next/head";

// import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";
import BodyContainer from "./components/BodyContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import { getSortedPosts } from "../lib/logic";

export default function Home({ posts, popularPosts, categoryCounts }) {
  return (
    <Flex bg="#161f27" flexDirection="column" marginBottom={-10}>
      <Head>
        <title>
          Irtiza Hafiz - Programmer, Manager and Credit Card Enthusiast.
        </title>
        <meta
          name="description"
          content="This site is about programming tutorials, software engineering, AI programming, credit card reviews, credit card setup and travel tips."
          key="desc"
        />
      </Head>
      <NavBar />
      <Banner />
      <BodyContainer
        posts={posts}
        popularPosts={popularPosts}
        categoryCounts={categoryCounts}
      />

      <Footer />
    </Flex>
  );
}

export const getStaticProps = async () => {
  const posts = getSortedPosts();
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
