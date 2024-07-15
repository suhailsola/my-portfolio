import Layout from "@/components/layout/layout/Layout";
import "@/styles/globals.css";
import { capFirstLetter } from "@/utils/stringFunction";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const updatedTitle = capFirstLetter(pathname.replace(/^\//, ""));
  return (
    <>
      <Layout title={updatedTitle}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
