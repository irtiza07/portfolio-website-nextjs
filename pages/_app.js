import "../styles/styles.css";
import "@fontsource/montserrat";
import "@fontsource/inter";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";
import Script from "next/script";

const theme = extendTheme({
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Irtiza Hafiz</title>
        <link rel="icon" href="/irtiza-avatar-ayesha.png" />
        <Script src="https://example.com/script.js" />
        //TODO: Might need to revert, if above Script does not work
        {/* <script
          defer
          src=""
          data-website-id="67058922-3cc9-48e1-843e-d29e11286402"
        ></script> */}
      </Head>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
