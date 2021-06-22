import "../styles/globals.css";
import "../styles/poki.css";
import "../styles/msg.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
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
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
