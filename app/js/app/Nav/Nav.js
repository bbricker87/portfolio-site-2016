import React from "react";
import { Link } from "react-router";

export default function(props) {
  return(
    <ul className="nav nav--home container">
      { props.pages.map(function(page) {

        if(page.name != "Home" && props.home){
          return (
            <li className="nav__item nav__item--home" key={page.name}>
              <Link to={'/' + page.name} className="icon-link">
                <svg className="icon-link__icon" fill="#FFFFFF" viewBox="0 0 24 24">
                    <path d={page.svgPath} />
                </svg>
                <h3 className="icon-link__title">{page.name}</h3>
              </Link>
            </li>
          );
        }
        else if(!props.home){
          <li className="nav__item">
            <Link to={'/' + page.name} className="icon-link">{page.name}</Link>
          </li>
        }
      }) }
    </ul>
  );
};
