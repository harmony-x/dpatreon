import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";


function MyApp({ Component, pageProps }: AppProps) {
  function getLibrary(provider: any) {
    const library = new ethers.providers.Web3Provider(provider);
    library.pollingInterval = 8000;
    return library
  }
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Component {...pageProps} />
    </Web3ReactProvider>
  );
}

export default MyApp;