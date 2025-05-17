import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.min.css"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
        {/* DO NOT REMOVE */}
        <script src="/frontend.js"></script>
      </body>
    </Html>
  );
}