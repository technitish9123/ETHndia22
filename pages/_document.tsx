/* eslint-disable @next/next/next-script-for-ga */
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="og:description" content="blocksign" />
          <meta name="og:title" content="BlockuSign: A real smart contract" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/site/apple-touch-icon.png"
          />
          <link rel="shortcut icon" href="/site/favicon.ico" />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/site/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/site/favicon-16x16.png"
          />
          <link rel="manifest" href="/site/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/site/safari-pinned-tab.svg"
            color="#e27469"
          />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="msapplication-config" content="/site/browserconfig.xml" />
          <meta name="theme-color" content="#FFFFFF" />
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
