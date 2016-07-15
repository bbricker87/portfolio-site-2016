import React from 'react';

import Carousel from '../carousel/carousel';

const SkillsDisplay = React.createClass({
  render: function() {

    return(
      <div className="carousel skills-carousel container container--small">
        <svg viewBox="0 0 24 24" className="carousel__button carousel__button--previous" onClick={this.props.previousSkill}>
          <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
          <path d="M0-.5h24v24H0z" fill="none"/>
        </svg>
        <Carousel onTouchEnd={this.props.handleTouchEnd} carouselItems={this.props.skills} currentIndex={this.props.currentSkill} onItemClick={this.props.onItemClick}/>
        <svg viewBox="0 0 24 24" className="carousel__button carousel__button--next" onClick={this.props.nextSkill}>
          <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
          <path d="M0-.25h24v24H0z" fill="none"/>
        </svg>
      </div>
    );
  }
});

module.exports = SkillsDisplay;
