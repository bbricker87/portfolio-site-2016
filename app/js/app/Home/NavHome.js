import React from "react";
import { Link } from "react-router";

export default function(props) {
  return(
    <ul className="nav nav--home container">
      <li className="nav__item nav__item--home">
        <Link to="/About" className="icon-link">
          <svg className="icon-link__icon" fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
          <h6 className="icon-link__title">About</h6>
        </Link>
      </li>
      <li className="nav__item nav__item--home">
        <Link to="/Work" className="icon-link">
          <svg className="icon-link__icon" fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
          </svg>
          <h6 className="icon-link__title">Work</h6>
        </Link>
      </li>
      <li className="nav__item nav__item--home">
        <Link to="/Skills" className="icon-link">
            <svg className="icon-link__icon" fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
            </svg>
          <h6 className="icon-link__title">About</h6>
        </Link>
      </li>
      <li className="nav__item nav__item--home">
        <Link to="/Portfolio" className="icon-link">
          <svg className="icon-link__icon" fill="#FFFFFF" height="48" viewBox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v2H8v2h8v-2h-2v-2h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/>
          </svg>
          <h6 className="icon-link__title">Portfolio</h6>
        </Link>
      </li>
    </ul>
  );
};
