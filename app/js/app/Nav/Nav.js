import React from "react";
import { Link } from "react-router";

const Nav = React.createClass({

  render: function() {

      return(
        <ul className={ this.props.home ? "nav nav--home container" : "nav nav--default" }>
          { this.props.home ? this.props.pages.map(this.homeNavigation) : this.props.pages.map(this.defaultNavigation) }
        </ul>
      );
  },

  homeNavigation: function(page) {
    return(
      <li className="nav__item nav__item--home" key={page.name} style={page.name == 'Home' ? {display: 'none'} : {}}>
        <Link to={page.path} className="icon-link">
          <svg className="icon-link__icon" fill="#FFFFFF" viewBox="0 0 24 24">
              <path d={page.svgPath} />
          </svg>
          <h3 className="icon-link__title">{page.name}</h3>
        </Link>
      </li>
    );
  },

  defaultNavigation: function(page) {
    return(
      <li className="nav__item nav__item--default" onClick={this.props.toggleMenu} key={page.name}>
        <Link to={page.path}>{page.name}</Link>
      </li>
    );
  }

});

module.exports = Nav;
