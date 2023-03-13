import React from "react";
import Header from "./header";
import Footer from "./footer";
import PublicRoutes from "../config/router";
import Paket from "../pages/detail-paket-sewa";

const Layout = (props) => {
  return (
    <>
      <Header />
      <PublicRoutes />
      <Footer />
      {/* <Paket/> */}
    </>
  );
};

export default Layout;
