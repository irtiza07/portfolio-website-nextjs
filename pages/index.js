import Head from "next/head";
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

export default function Home({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head>
        <title>Irtiza Hafiz</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex bg="#161f27" flexDirection="column">
        <NavBar />
        <Banner />
        <BodyContainer />
        <Flex h="240px"></Flex>
      </Flex>
    </ChakraProvider>
  );
}
