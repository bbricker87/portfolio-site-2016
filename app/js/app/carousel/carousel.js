import React from 'react';

const Carousel = React.createClass({

  render: function() {

    return (
      <div className="carousel-items">
        { this.props.carouselItems.map(this.displayItem) }
      </div>
    );
  },

  displayItem: function(carouselItem, index) {

    // Get the indexes for the carousel
    let previousIndex = (this.props.currentIndex == 0) ? this.props.carouselItems.length - 1 : this.props.currentIndex - 1;
    let currentIndex = this.props.currentIndex;
    let nextIndex = (this.props.currentIndex == this.props.carouselItems.length - 1) ? 0 : this.props.currentIndex + 1;
    let beforePreviousIndex = (previousIndex == 0) ? this.props.carouselItems.length - 1 : previousIndex - 1;
    let afterNextIndex = (nextIndex == this.props.carouselItems.length - 1) ? 0 : nextIndex + 1;

    let cssClass = "carousel-item carousel-item--inactive";
    let fill = "#575757";

    switch(index) {
      case previousIndex: cssClass = "carousel-item carousel-item--previous";
        break;
      case beforePreviousIndex: cssClass = "carousel-item carousel-item--before-previous";
        break;
      case currentIndex: cssClass = "carousel-item carousel-item--active";
        fill = carouselItem.fill;
        break;
      case nextIndex: cssClass = "carousel-item carousel-item--next";
        break;
      case afterNextIndex: cssClass = "carousel-item carousel-item--after-next";
        break;
    }

    if(carouselItem) {
      let boundItemClick = this.props.onItemClick.bind(null, index);

      return (
        <div className={ cssClass } key={index} onClick={boundItemClick}>
          <div className="carousel-item__image">
            <svg viewBox="0 0 128 128" fill={fill} dangerouslySetInnerHTML={ {__html: carouselItem.svgPath } }>
            </svg>
          </div>          
        </div>
      );
    }
  }

});

module.exports = Carousel;
