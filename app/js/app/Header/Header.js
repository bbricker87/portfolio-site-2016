import React from "react";
import axios from "axios";

import Title from "./title";
import Nav from "../nav/nav";

const HeaderContainer = React.createClass({
  getInitialState: function() {
    return {
      pages: [],
      openMenu: false
    }
  },

  componentDidMount: function() {
    var _this = this;

    axios.get('../../Data/navigation.json').then(result => {
      _this.setState({pages: result.data.pages});
    });
  },

  toggleMenu: function() {
    let menu = !this.state.openMenu;

    this.setState({openMenu: menu});
  },

  render: function() {
    return(
      <header>
        <div className={ this.state.openMenu ? "header-container header-container--open" : "header-container"}>
          <div className="header">
            <Title title={this.props.title} toggleMenu={this.toggleMenu}/>
            <h4 className="header__title header__title--site">Ben Bricker</h4>
          </div>
          <div className={ this.state.openMenu ? "header-nav-container header-nav-container--open" : "header-nav-container"}>
            <Nav pages={this.state.pages} toggleMenu={this.toggleMenu} home={false}/>
          </div>
        </div>
      </header>
    );
  }

});

module.exports = HeaderContainer;
