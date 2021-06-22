import "../styles/globals.css";
import "../styles/poki.css";
import "../styles/msg.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Head from "next/head";
function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const handleRouteChange = (url) => {
    window.gtag("config", "G-4LK05V98V8", {
      page_path: url,
    });
  };
  useEffect(() => {
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <title>Create pokemon messages and share</title>
        <meta name="title" content="Create pokemon messages and share" />
        <meta
          name="description"
          content="create short pokemon messages and share with the world"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="poki-mu.vercel.app" />
        <meta property="og:title" content="Create pokemon messages and share" />
        <meta
          property="og:description"
          content="create short pokemon messages and share with the world"
        />
        <meta
          property="og:image"
          content="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="poki-mu.vercel.app" />
        <meta
          property="twitter:title"
          content="Create pokemon messages and share"
        />
        <meta
          property="twitter:description"
          content="create short pokemon messages and share with the world"
        />
        <meta
          property="twitter:image"
          content="https://assets.pokemon.com/assets/cms2/img/pokedex/full/123.png"
        />
      </Head>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
