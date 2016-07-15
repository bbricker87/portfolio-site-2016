import React from "react";

import Header from "./header/header";
import Footer from "./footer/footer";

export default function(props) {
  return(
    <div>
      <Header title={props.children.props.route.title}/>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};
