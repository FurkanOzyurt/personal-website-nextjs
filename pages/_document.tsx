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
          <meta
            httpEquiv="X-UA-Compatible"
            content="text/html; charset=utf-8"
          />
          <meta name="robots" content="NOODP,index,follow" />
          <meta name="description" content="" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
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
