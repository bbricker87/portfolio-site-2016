import React from "react";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Title = React.createClass({

  render: function() {
    let characters = this.props.title.split("");
    return(
        <ReactCSSTransitionGroup component="h1" transitionName="title-change"
        transitionEnterTimeout={2000} transitionLeaveTimeout={2000} transitionAppear={true} transitionAppearTimeout={1000}
        className="header__title header__title--page" onClick={this.props.toggleMenu}>
          <div className="title" key={this.props.title}>{characters.map(this.renderCharacters)}</div>
        </ReactCSSTransitionGroup>
    );
  },

  renderCharacters: function(titleCharacter, index) {
    return (
      <span className={"title__character title__character--" + index} key={this.props.title + "-" + index}>{titleCharacter}</span>
    );
  }
});

module.exports = Title;
