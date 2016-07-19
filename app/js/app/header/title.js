import React from "react";

const Title = React.createClass({

  render: function() {
    let characters = this.props.title.split("");
    return(
        <h1 className="header__title header__title--page" onClick={this.props.toggleMenu}>{characters.map(this.renderCharacters)}</h1>
    );
  },

  renderCharacters: function(titleCharacter, index) {
    return (
      <span key={index}>{titleCharacter}</span>
    );
  }
});

module.exports = Title;
