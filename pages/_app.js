import "../styles/styles.css";
import "@fontsource/montserrat";
import "@fontsource/inter";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Head from "next/head";

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
        <script
          defer
          src="https://umami.irtizahafiz.com/script.js"
          data-website-id="67058922-3cc9-48e1-843e-d29e11286402"
        ></script>
      </Head>
      <Component {...pageProps} />;
    </ChakraProvider>
  );
}
