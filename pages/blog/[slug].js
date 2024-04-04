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
  Text,
  Divider,
  Image,
  Flex,
  Grid,
  Box,
  Spacer,
  ListIcon,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import BlogCard from "../components/BlogCard";
import BlogGrid from "../components/BlogGrid";
import PopularContentContainer from "../components/PopularContentContainer";
import BodyContainer from "../components/BodyContainer";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const components = {
  h2: (props) => (
    <Heading {...props} fontSize={"3xl"} color="#75c682" marginTop={12}>
      {props.children}
    </Heading>
  ),
  h3: (props) => (
    <Heading {...props} fontSize={"2xl"} color="#efe073" marginTop={6}>
      {props.children}
    </Heading>
  ),
  p: (props) => (
    <Text {...props} fontSize={"md"} lineHeight={"8"} marginBottom={[35, 8]}>
      {props.children}
    </Text>
  ),
  li: (props) => (
    <Text {...props} marginTop={6} marginBottom={6}>
      <HStack>
        <ArrowForwardIcon color="#efe073" boxSize={[4, 8]}></ArrowForwardIcon>
        <Text>{props.children}</Text>
      </HStack>
    </Text>
  ),
  SyntaxHighlighter: SyntaxHighlighter,
};

export default function PostPage({ frontMatter: { title }, mdxSource }) {
  return (
    <Flex bg="#161f27" flexDirection="column" color="white">
      <NavBar />
      <Flex flexDirection={"column"}>
        <Heading fontSize={"5xl"} textAlign={"center"}>
          {title}
        </Heading>
        <Center padding={[8, 20]}>
          <Flex width={["95vw", "50vw"]} flexDirection={"column"}>
            <MDXRemote {...mdxSource} components={components} />
          </Flex>
        </Center>
      </Flex>
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
