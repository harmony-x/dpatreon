import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { QueryClient, QueryClientProvider } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import TopbarLoader from "$components/TopbarLoader/TopbarLoader";

function MyApp({ Component, pageProps }: AppProps) {
  function getLibrary(provider: any) {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000;
    return library;
  }
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();

  const [state, setState] = useState<{
    isRouteChanging: boolean;
    loadingKey: number;
  }>({
    isRouteChanging: false,
    loadingKey: 0,
  });

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }));
    };

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }));
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeEnd);
    router.events.on("routeChangeError", handleRouteChangeEnd);
    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeEnd);
      router.events.off("routeChangeError", handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <QueryClientProvider client={queryClient}>
      <Web3ReactProvider getLibrary={getLibrary}>
        <TopbarLoader
          isRouteChanging={state.isRouteChanging}
          key={state.loadingKey}
        />
        <Component {...pageProps} />
      </Web3ReactProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
