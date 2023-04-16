import Header from "@/components/organisms/Header";
import MyHead from "@/components/organisms/MyHead";
import SpHeader from "@/components/organisms/SpHeader";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MyHead />
      <Header />
      <SpHeader />
      <Component {...pageProps} />
    </>
  );
}
