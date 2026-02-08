import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { colors } from "../lib/constants";

export default function Layout({ title, description, children, ...flexProps }) {
  return (
    <Flex bg={colors.bgPrimary} flexDirection="column" {...flexProps}>
      <Head>
        <title>{title}</title>
        {description && (
          <meta name="description" content={description} key="desc" />
        )}
      </Head>
      <NavBar />
      {children}
      <Footer />
    </Flex>
  );
}
