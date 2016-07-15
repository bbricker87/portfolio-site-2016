import React from 'react';
import axios from 'axios';

import Projects from './projects-list';

const PortfolioContainer = React.createClass({

  getInitialState: function() {
    return {
      projects: []
    }
  },

  componentDidMount: function() {
    var _this = this;

    axios.get('../../Data/portfolio.json').then(result => {
      _this.setState({projects: result.data.projects});
    });
  },

  render: function() {
    return (
      <div>
        <Projects projects={this.state.projects} fullDetails={false} />
        <Projects projects={this.state.projects} fullDetails={true} />
      </div>
    )
  }

});

module.exports = PortfolioContainer;
