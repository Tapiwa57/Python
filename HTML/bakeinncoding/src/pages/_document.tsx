import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "./Navbar";
import AboutUs from "./AboutUs";
import Products from "./Products";
import Recipes from "./Recipes";
import Kidscorner from "./Kidscorner";
import ContactUs from "./ContactUs";
import Footer from "./footer";
import Factory from "./Factoryform";
import Factoryform from "./Factoryform";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <Footer/>
      </body>
    </Html>
  );
}
