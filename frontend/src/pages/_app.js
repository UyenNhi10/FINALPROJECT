/* eslint-disable @next/next/no-css-tags */
import Head from "next/head";
import React, { useEffect } from "react";

import "react-responsive-modal/styles.css";
import "./index.scss";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "../contexts/Cart";

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

function MyApp({ Component, ...pageProps }) {
  useEffect(() => {}, []);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Raleway:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/fontAwesome5Pro.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
      </Head>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <ToastContainer />
    </>
  );
}

export default MyApp;
