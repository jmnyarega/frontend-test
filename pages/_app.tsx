import { FC } from "react";
import Layout from "../components/Layout";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/reset.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;
