import fs from "fs";
import Head from "next/head";
import matter from "gray-matter";

// import styles from "../styles/Home.module.css";
import { Flex } from "@chakra-ui/react";
import Banner from "./components/Banner";
import BodyContainer from "./components/BodyContainer";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import path from "path";

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
  const posts = getSortedPosts();
  const popularPosts = posts.filter(
    (post) => post.frontMatter.isPopular === true
  );

  const categoryCounts = posts.reduce((counts, post) => {
    const category = post.frontMatter.tags[0];

    // Increment the count for the category
    counts[category] = (counts[category] || 0) + 1;

    return counts;
  }, {});

  return {
    props: {
      posts: posts,
      popularPosts: popularPosts,
      categoryCounts: Object.entries(categoryCounts),
    },
  };
};
