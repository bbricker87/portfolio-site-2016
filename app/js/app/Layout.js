import React from "react";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function(props) {
  return(
    <div>
      <Header title={props.children.props.route.title}/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
