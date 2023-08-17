import React from "react";
import Navmenu from "./Navmenu";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navmenu />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
