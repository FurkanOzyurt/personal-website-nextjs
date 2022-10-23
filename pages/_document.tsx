import Document, { Html, Head, Main, NextScript } from "next/document";
import type { DocumentProps } from "next/document";
import i18nextConfig from "../next-i18next.config";

class MyDocument extends Document<DocumentProps> {
  render() {
    return (
      <Html
        lang={
          this.props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale
        }
      >
        <Head>
          <meta name="description" content="" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
