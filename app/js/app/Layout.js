import React from "react";
import { RouteTransition } from "react-router-transition";

import Header from "./header/header";
import Footer from "./footer/footer";

export default function(props) {
  return(
    <div>
      <Header title={props.children.props.route.title}/>
      <main>
        <RouteTransition className="route__transition"
          pathname={props.location.pathname}
          atEnter={{ translateX: -100 }}
          atLeave={{ translateX: 100 }}
          atActive={{ translateX: 0 }}
          mapStyles={styles => ({ transform: `translateX(${styles.translateX}%)` })}
        >
          {props.children}
        </RouteTransition>
          <div className="route__placeholder">{props.children}</div>
      </main>
      <Footer />
    </div>
  );
};
