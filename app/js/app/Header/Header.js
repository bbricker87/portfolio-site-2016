import React from "react";

import Title from "./Title.jsx";

export default function(props) {
  return(
    <header>
      <div className="header-container">
        <div className="header">
          <Title title={props.title} />
        </div>
        <div className="header">
          <h4 className="header__title header__title--site">Ben Bricker</h4>
        </div>
      </div>
    </header>
  );
};
