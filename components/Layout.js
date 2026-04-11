import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { colors } from "../lib/constants";

export default function Layout({ title, description, children, ...flexProps }) {
  const router = useRouter();
  const canonicalUrl = `https://irtizahafiz.com${router.asPath.split("?")[0]}`;

  return (
    <Flex bg={colors.bgPrimary} flexDirection="column" {...flexProps}>
      <Head>
        <title>{title}</title>
        <link rel="canonical" href={canonicalUrl} />
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
