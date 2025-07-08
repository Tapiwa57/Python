import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./Navbar";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Nextjsdemo</title>
        </Head>
      <body className="bg-blue-950">
          <Navbar/>
          <Main />
          <NextScript />
         
      </body>
    </Html>
  );
}
