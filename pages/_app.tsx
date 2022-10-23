import type { AppProps } from "next/app";

import "../public/styles.scss";

import { appWithTranslation } from "next-i18next";
import { wrapper } from "src/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(wrapper.withRedux(MyApp));
