import "../styles/globals.css";
import React from "react";
import { Poppins } from "@next/font/google";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
