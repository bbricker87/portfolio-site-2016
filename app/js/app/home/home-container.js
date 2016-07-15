import React from 'react';
import axios from 'axios';
import Home from './home';

const HomeContainer = React.createClass({

  getInitialState: function() {
    return {
      pages: []
    }
  },

  componentDidMount: function() {
    var _this = this;

    axios.get('../../Data/navigation.json').then(result => {
      _this.setState({pages: result.data.pages});
    });
  },

  render: function() {
    return (
      <Home pages={this.state.pages} />
    )
  }

});

export default HomeContainer;
