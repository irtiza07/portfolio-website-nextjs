import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import Head from "next/head";
import Image from "next/image";

import { Heading, Center, Text, Flex, HStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Link from "next/link";

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
  a: (props) => (
    <Text
      {...props}
      as={"span"}
      fontSize={"md"}
      color="#efe073"
      fontStyle={"italic"}
      fontWeight={"extrabold"}
      borderBottom="2px"
    >
      <Link href={props.href} target="_blank">
        {props.children}
      </Link>
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
  img: (props) => (
    <Center>
      <Image
        src={props.src.replace("/public", "")} // Remove '/public' from image path
        alt={props.alt}
        width={1260}
        height={800}
      />
    </Center>
  ),
};

export default function PostPage({
  frontMatter: { title, description, seoTitle, seoDescription },
  mdxSource,
}) {
  return (
    <Flex bg="#161f27" flexDirection="column" color="white">
      <Head>
        <title>{title}</title>
        <meta name="title" content={seoTitle}></meta>
        <meta name="description" content={seoDescription}></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta property="og:title" content={title}></meta>
        <meta property="og:description" content={description}></meta>
        <meta property="og:type" content="article"></meta>
      </Head>
      <NavBar />
      <Flex flexDirection={"column"}>
        <Heading as="h1" fontSize={["3xl", "4xl"]} textAlign={"center"}>
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
