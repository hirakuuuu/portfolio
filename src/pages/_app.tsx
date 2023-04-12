import Header from "@/components/organisms/Header";
import SpHeader from "@/components/organisms/SpHeader";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <SpHeader />
      <Component {...pageProps} />
    </>
  );
}
