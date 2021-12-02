import { FC } from "react";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/reset.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => (
  <Component {...pageProps} />
);

export default MyApp;
