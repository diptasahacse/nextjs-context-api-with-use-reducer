import "bootstrap/dist/css/bootstrap.min.css";
import 'remixicon/fonts/remixicon.css'
import { createContext, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import ProductProvider from "../provider/ProductProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
 
  return (
    <ProductProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductProvider>
  );
}

export default MyApp;
