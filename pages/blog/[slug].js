import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";

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
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BlogCard from "../components/BlogCard";
import BlogGrid from "../components/BlogGrid";
import PopularContentContainer from "../components/PopularContentContainer";
import BodyContainer from "../components/BodyContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function PostPage({ frontMatter: { title }, mdxSource }) {
  return (
    <Flex bg="#161f27" flexDirection="column" color="white">
      <NavBar />
      <Heading>{title}</Heading>
      <MDXRemote {...mdxSource} />
      <Footer />
    </Flex>
  );
}

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files?.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );
  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);
  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
